// Content Scheduler - Queue and export posts for scheduling

import { calendar, drafts } from './storage.js';
import { TIMES_BY_DAY } from '../data/timing.js';
import { OPTIMAL_POSTING } from '../data/algorithm.js';

// Content queue management
export const contentQueue = {
  // Get all queued posts sorted by date
  getQueue() {
    const entries = calendar.getAll();
    return entries
      .filter(e => e.status !== 'posted')
      .sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
  },

  // Add post to queue
  addToQueue(post, scheduledDate, options = {}) {
    return calendar.addEntry({
      type: 'post',
      content: post.content,
      hashtags: post.hashtags || [],
      media: post.media || null,
      scheduledDate: scheduledDate.toISOString(),
      status: 'scheduled',
      ...options
    });
  },

  // Update queued post
  updateInQueue(id, updates) {
    return calendar.updateEntry(id, updates);
  },

  // Remove from queue
  removeFromQueue(id) {
    calendar.deleteEntry(id);
  },

  // Mark as posted
  markAsPosted(id) {
    return calendar.updateEntry(id, {
      status: 'posted',
      postedAt: new Date().toISOString()
    });
  },

  // Get posts for a specific date
  getByDate(date) {
    return calendar.getByDate(date);
  },

  // Get this week's posts
  getThisWeek() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    return calendar.getByWeek(startOfWeek);
  }
};

// Smart scheduling - suggests optimal times
export function suggestNextPostTime(existingSchedule = []) {
  const now = new Date();
  const suggestions = [];

  // Get next 7 days of optimal times
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() + i);

    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const dayInfo = TIMES_BY_DAY[dayName];

    if (!dayInfo) continue;

    // Parse best times for this day
    dayInfo.best_times.forEach(timeStr => {
      const times = parseTimeRange(timeStr);
      times.forEach(time => {
        const scheduledDate = new Date(date);
        scheduledDate.setHours(time.hour, time.minute, 0, 0);

        // Skip if in the past
        if (scheduledDate <= now) return;

        // Skip if already scheduled within 4 hours
        const hasConflict = existingSchedule.some(existing => {
          const existingDate = new Date(existing.scheduledDate);
          const hoursDiff = Math.abs(scheduledDate - existingDate) / (1000 * 60 * 60);
          return hoursDiff < 4;
        });

        if (!hasConflict) {
          suggestions.push({
            date: scheduledDate,
            dayName: dayName.charAt(0).toUpperCase() + dayName.slice(1),
            timeStr: scheduledDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
            quality: dayInfo.quality,
            note: dayInfo.note
          });
        }
      });
    });
  }

  // Sort by quality then date
  const qualityOrder = { high: 0, medium: 1, 'medium-low': 2, low: 3 };
  suggestions.sort((a, b) => {
    const qualityDiff = qualityOrder[a.quality] - qualityOrder[b.quality];
    if (qualityDiff !== 0) return qualityDiff;
    return a.date - b.date;
  });

  return suggestions.slice(0, 10);
}

// Parse time string like "7-8 AM" or "12 PM"
function parseTimeRange(timeStr) {
  const times = [];
  const rangeMatch = timeStr.match(/(\d+)(?:-(\d+))?\s*(AM|PM)/i);

  if (rangeMatch) {
    let startHour = parseInt(rangeMatch[1]);
    const endHour = rangeMatch[2] ? parseInt(rangeMatch[2]) : startHour;
    const isPM = rangeMatch[3].toUpperCase() === 'PM';

    for (let h = startHour; h <= endHour; h++) {
      let hour = h;
      if (isPM && hour !== 12) hour += 12;
      if (!isPM && hour === 12) hour = 0;

      times.push({ hour, minute: 0 });
    }
  }

  return times;
}

// Export queue for external schedulers
export function exportForScheduler(format = 'csv') {
  const queue = contentQueue.getQueue();

  switch (format) {
    case 'csv':
      return exportAsCSV(queue);
    case 'json':
      return exportAsJSON(queue);
    case 'buffer':
      return exportForBuffer(queue);
    case 'hootsuite':
      return exportForHootsuite(queue);
    default:
      return exportAsCSV(queue);
  }
}

function exportAsCSV(queue) {
  const headers = ['Scheduled Date', 'Scheduled Time', 'Content', 'Hashtags', 'Status'];
  const rows = queue.map(post => {
    const date = new Date(post.scheduledDate);
    return [
      date.toLocaleDateString(),
      date.toLocaleTimeString(),
      `"${post.content.replace(/"/g, '""')}"`,
      post.hashtags?.join(' ') || '',
      post.status
    ];
  });

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

  return {
    data: csv,
    filename: `linkedin-schedule-${new Date().toISOString().split('T')[0]}.csv`,
    mimeType: 'text/csv'
  };
}

function exportAsJSON(queue) {
  const data = queue.map(post => ({
    scheduledDate: post.scheduledDate,
    content: post.content,
    hashtags: post.hashtags,
    status: post.status
  }));

  return {
    data: JSON.stringify(data, null, 2),
    filename: `linkedin-schedule-${new Date().toISOString().split('T')[0]}.json`,
    mimeType: 'application/json'
  };
}

// Buffer-compatible format
function exportForBuffer(queue) {
  const posts = queue.map(post => ({
    text: post.content,
    scheduled_at: post.scheduledDate,
    profile_ids: [], // User fills in
    media: post.media || {}
  }));

  return {
    data: JSON.stringify(posts, null, 2),
    filename: `buffer-import-${new Date().toISOString().split('T')[0]}.json`,
    mimeType: 'application/json',
    instructions: 'Import this file into Buffer via their API or Zapier integration'
  };
}

// Hootsuite-compatible CSV
function exportForHootsuite(queue) {
  // Hootsuite CSV format: Date, Time, Message
  const headers = ['Date', 'Time', 'Message'];
  const rows = queue.map(post => {
    const date = new Date(post.scheduledDate);
    const content = post.content + (post.hashtags?.length ? '\n\n' + post.hashtags.join(' ') : '');
    return [
      date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
      date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      `"${content.replace(/"/g, '""')}"`
    ];
  });

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

  return {
    data: csv,
    filename: `hootsuite-import-${new Date().toISOString().split('T')[0]}.csv`,
    mimeType: 'text/csv',
    instructions: 'Import this CSV into Hootsuite Bulk Composer'
  };
}

// Download file utility
export function downloadExport(exportData) {
  const blob = new Blob([exportData.data], { type: exportData.mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = exportData.filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Auto-schedule multiple posts evenly
export function autoSchedulePosts(posts, options = {}) {
  const {
    startDate = new Date(),
    postsPerWeek = 3,
    preferredDays = ['tuesday', 'wednesday', 'thursday'],
    preferredTimes = ['08:00', '12:00', '17:00']
  } = options;

  const scheduled = [];
  let currentDate = new Date(startDate);
  let postsThisWeek = 0;
  let timeIndex = 0;

  for (const post of posts) {
    // Find next available slot
    while (true) {
      const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

      // Check if this is a preferred day and we haven't hit limit
      if (preferredDays.includes(dayName) && postsThisWeek < postsPerWeek) {
        // Set time
        const [hours, minutes] = preferredTimes[timeIndex % preferredTimes.length].split(':');
        currentDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        // Skip if in the past
        if (currentDate > new Date()) {
          scheduled.push({
            ...post,
            scheduledDate: new Date(currentDate)
          });

          postsThisWeek++;
          timeIndex++;
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        }
      }

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);

      // Reset week counter on Sunday
      if (currentDate.getDay() === 0) {
        postsThisWeek = 0;
      }

      // Safety break after 60 days
      if (currentDate - startDate > 60 * 24 * 60 * 60 * 1000) {
        break;
      }
    }
  }

  return scheduled;
}

// Check for scheduling conflicts
export function checkConflicts(scheduledDate, existingQueue) {
  const conflicts = [];
  const targetDate = new Date(scheduledDate);

  existingQueue.forEach(post => {
    const postDate = new Date(post.scheduledDate);
    const hoursDiff = Math.abs(targetDate - postDate) / (1000 * 60 * 60);

    if (hoursDiff < 18) {
      conflicts.push({
        post,
        hoursDiff: Math.round(hoursDiff),
        warning: hoursDiff < 4 ?
          'Posts too close together - second post will be penalized' :
          'Consider spacing posts 18-24 hours apart'
      });
    }
  });

  return conflicts;
}

export default {
  contentQueue,
  suggestNextPostTime,
  exportForScheduler,
  downloadExport,
  autoSchedulePosts,
  checkConflicts
};
