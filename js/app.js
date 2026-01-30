// LinkedIn Content Studio - Main Application
// Pure JavaScript, no framework dependencies

import { HOOK_CATEGORIES, HOOK_TEMPLATES, POWER_WORDS, WEAK_OPENERS } from './data/hooks.js';
import { HASHTAG_CATEGORIES, HASHTAG_TIPS, REACH_LEVELS } from './data/hashtags.js';
import { TEMPLATE_CATEGORIES, POST_TEMPLATES, CTA_TEMPLATES } from './data/templates.js';
import { ALGORITHM_OVERVIEW, GOLDEN_HOUR, CONTENT_FORMAT_PERFORMANCE, OPTIMAL_POSTING, SPAM_TRIGGERS, ENGAGEMENT_VALUE, POST_STRUCTURE_TIPS } from './data/algorithm.js';
import { BEST_TIMES_GENERAL, TIMES_BY_DAY, TIMES_BY_INDUSTRY, CONTENT_CALENDAR_TIPS } from './data/timing.js';

import { analyzeText, humanizeText, scoreHook, checkOpener, getRandomTip } from './modules/human-writer.js';
import { scorePost, estimateEngagement } from './modules/post-scorer.js';
import { drafts, calendar, settings, history, profile, analytics, dataTransfer } from './modules/storage.js';
import { parseUrl, parseMultipleUrls, generatePostFromArticle } from './modules/url-parser.js';
import { contentQueue, suggestNextPostTime, exportForScheduler, downloadExport, autoSchedulePosts, checkConflicts } from './modules/scheduler.js';

// App State
const state = {
  currentTab: 'compose',
  currentPost: {
    content: '',
    hashtags: [],
    hasImage: false,
    hasVideo: false,
    hasDocument: false,
    hasLink: false
  },
  settings: settings.get(),
  drafts: drafts.getAll(),
  queue: contentQueue.getQueue()
};

// Initialize App
export function initApp() {
  console.log('LinkedIn Content Studio initializing...');

  // Load saved settings
  state.settings = settings.get();
  applyTheme(state.settings.theme);

  // Initialize all modules
  initNavigation();
  initComposer();
  initHookGenerator();
  initHashtagTool();
  initTemplates();
  initPostScorer();
  initAlgorithmGuide();
  initScheduler();
  initUrlParser();
  initSettings();

  // Show random tip
  showTip();

  console.log('LinkedIn Content Studio ready!');
}

// Navigation
function initNavigation() {
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = e.currentTarget.dataset.tab;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;

  // Update nav
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabId);
  });

  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `tab-${tabId}`);
  });

  // Track
  analytics.track('tab_viewed', { tab: tabId });
}

// Post Composer
function initComposer() {
  const textarea = document.getElementById('post-content');
  const charCount = document.getElementById('char-count');
  const preview = document.getElementById('post-preview');

  if (!textarea) return;

  textarea.addEventListener('input', () => {
    const content = textarea.value;
    state.currentPost.content = content;

    // Update char count
    if (charCount) {
      charCount.textContent = `${content.length} / 3000`;
      charCount.className = content.length > 2800 ? 'warning' : '';
    }

    // Update preview
    if (preview) {
      preview.innerHTML = formatPreview(content);
    }

    // Auto-analyze
    debounce(analyzeCurrentPost, 500)();
  });

  // Hashtag inputs
  document.getElementById('add-hashtag')?.addEventListener('click', addHashtagFromInput);
  document.getElementById('hashtag-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addHashtagFromInput();
    }
  });

  // Media toggles
  ['image', 'video', 'document', 'link'].forEach(type => {
    document.getElementById(`has-${type}`)?.addEventListener('change', (e) => {
      state.currentPost[`has${type.charAt(0).toUpperCase() + type.slice(1)}`] = e.target.checked;
      analyzeCurrentPost();
    });
  });

  // Action buttons
  document.getElementById('save-draft')?.addEventListener('click', saveDraft);
  document.getElementById('copy-post')?.addEventListener('click', copyPost);
  document.getElementById('clear-post')?.addEventListener('click', clearPost);
  document.getElementById('humanize-post')?.addEventListener('click', humanizePost);
}

function formatPreview(content) {
  if (!content) return '<span class="placeholder">Your post preview will appear here...</span>';

  // Convert line breaks and basic formatting
  let html = content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/#(\w+)/g, '<span class="hashtag">#$1</span>')
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" class="link">$1</a>');

  return html;
}

function addHashtagFromInput() {
  const input = document.getElementById('hashtag-input');
  if (!input) return;

  const tag = input.value.trim().replace(/^#/, '');
  if (tag && !state.currentPost.hashtags.includes(tag)) {
    state.currentPost.hashtags.push(tag);
    updateHashtagDisplay();
    analyzeCurrentPost();
  }
  input.value = '';
}

function updateHashtagDisplay() {
  const container = document.getElementById('hashtag-list');
  if (!container) return;

  container.innerHTML = state.currentPost.hashtags.map(tag => `
    <span class="hashtag-chip">
      #${tag}
      <button onclick="window.app.removeHashtag('${tag}')">&times;</button>
    </span>
  `).join('');
}

function analyzeCurrentPost() {
  const analysis = analyzeText(state.currentPost.content);
  const score = scorePost(state.currentPost);

  updateAnalysisDisplay(analysis, score);
}

function updateAnalysisDisplay(analysis, score) {
  // Human score
  const humanScore = document.getElementById('human-score');
  if (humanScore) {
    humanScore.textContent = analysis.score;
    humanScore.className = `score ${analysis.assessmentClass}`;
  }

  // Post score
  const postScore = document.getElementById('post-score');
  if (postScore) {
    postScore.textContent = score.overall;
    postScore.style.color = score.grade.color;
  }

  // Grade
  const gradeDisplay = document.getElementById('post-grade');
  if (gradeDisplay) {
    gradeDisplay.textContent = score.grade.letter;
    gradeDisplay.style.color = score.grade.color;
  }

  // Issues
  const issuesList = document.getElementById('issues-list');
  if (issuesList) {
    issuesList.innerHTML = analysis.issues.slice(0, 5).map(issue => `
      <li class="issue ${issue.type}">
        <span class="icon">⚠️</span>
        ${issue.message}
      </li>
    `).join('') || '<li class="success">No issues detected!</li>';
  }

  // Suggestions
  const suggestionsList = document.getElementById('suggestions-list');
  if (suggestionsList) {
    const allSuggestions = [...analysis.suggestions, ...score.details.filter(d => d.type === 'warning')];
    suggestionsList.innerHTML = allSuggestions.slice(0, 5).map(sug => `
      <li class="suggestion">
        <span class="icon">💡</span>
        ${sug.message}
      </li>
    `).join('') || '<li>Looking good!</li>';
  }
}

function saveDraft() {
  const draft = drafts.save({
    id: state.currentPost.id,
    content: state.currentPost.content,
    hashtags: state.currentPost.hashtags,
    media: {
      hasImage: state.currentPost.hasImage,
      hasVideo: state.currentPost.hasVideo,
      hasDocument: state.currentPost.hasDocument,
      hasLink: state.currentPost.hasLink
    }
  });

  state.currentPost.id = draft.id;
  showNotification('Draft saved!');
  analytics.track('draft_generated');
}

function copyPost() {
  const content = state.currentPost.content +
    (state.currentPost.hashtags.length ? '\n\n' + state.currentPost.hashtags.map(t => `#${t}`).join(' ') : '');

  navigator.clipboard.writeText(content).then(() => {
    showNotification('Copied to clipboard!');
    analytics.track('post_created');
  });
}

function clearPost() {
  state.currentPost = {
    content: '',
    hashtags: [],
    hasImage: false,
    hasVideo: false,
    hasDocument: false,
    hasLink: false
  };

  document.getElementById('post-content').value = '';
  updateHashtagDisplay();
  analyzeCurrentPost();
}

function humanizePost() {
  const improved = humanizeText(state.currentPost.content);
  state.currentPost.content = improved;
  document.getElementById('post-content').value = improved;
  analyzeCurrentPost();
  showNotification('Text humanized!');
}

// Hook Generator
function initHookGenerator() {
  const categorySelect = document.getElementById('hook-category');
  const hookList = document.getElementById('hook-list');

  if (!categorySelect || !hookList) return;

  // Populate categories
  categorySelect.innerHTML = '<option value="all">All Categories</option>' +
    Object.entries(HOOK_CATEGORIES).map(([key, cat]) =>
      `<option value="${key}">${cat.icon} ${cat.name}</option>`
    ).join('');

  categorySelect.addEventListener('change', () => renderHooks(categorySelect.value));

  // Initial render
  renderHooks('all');
}

function renderHooks(category) {
  const hookList = document.getElementById('hook-list');
  if (!hookList) return;

  const hooks = category === 'all'
    ? HOOK_TEMPLATES
    : HOOK_TEMPLATES.filter(h => h.category === category);

  hookList.innerHTML = hooks.map(hook => `
    <div class="hook-card" data-template="${encodeURIComponent(hook.template)}">
      <div class="hook-header">
        <span class="category-badge">${HOOK_CATEGORIES[hook.category]?.icon} ${HOOK_CATEGORIES[hook.category]?.name}</span>
        <span class="effectiveness">${hook.effectiveness}% effective</span>
      </div>
      <div class="hook-template">${hook.template}</div>
      <div class="hook-example">Example: "${hook.example}"</div>
      <button class="btn-use-hook" onclick="window.app.useHook('${encodeURIComponent(hook.template)}')">
        Use This Hook
      </button>
    </div>
  `).join('');
}

// Hashtag Tool
function initHashtagTool() {
  const categorySelect = document.getElementById('hashtag-category');
  const hashtagResults = document.getElementById('hashtag-results');

  if (!categorySelect || !hashtagResults) return;

  // Populate categories
  categorySelect.innerHTML = Object.entries(HASHTAG_CATEGORIES).map(([key, cat]) =>
    `<option value="${key}">${cat.name}</option>`
  ).join('');

  categorySelect.addEventListener('change', () => renderHashtags(categorySelect.value));

  // Initial render
  renderHashtags('general');
}

function renderHashtags(category) {
  const hashtagResults = document.getElementById('hashtag-results');
  if (!hashtagResults) return;

  const categoryData = HASHTAG_CATEGORIES[category];
  if (!categoryData) return;

  hashtagResults.innerHTML = categoryData.hashtags.map(h => `
    <div class="hashtag-item" onclick="window.app.addHashtagToPost('${h.tag}')">
      <span class="tag">#${h.tag}</span>
      <span class="reach" style="color: ${REACH_LEVELS[h.reach]?.color}">${REACH_LEVELS[h.reach]?.label}</span>
      <span class="type">${h.type}</span>
    </div>
  `).join('');
}

// Templates
function initTemplates() {
  const categorySelect = document.getElementById('template-category');
  const templateList = document.getElementById('template-list');

  if (!categorySelect || !templateList) return;

  // Populate categories
  categorySelect.innerHTML = Object.entries(TEMPLATE_CATEGORIES).map(([key, cat]) =>
    `<option value="${key}">${cat.icon} ${cat.name}</option>`
  ).join('');

  categorySelect.addEventListener('change', () => renderTemplates(categorySelect.value));

  // Initial render
  renderTemplates('thought_leadership');
}

function renderTemplates(category) {
  const templateList = document.getElementById('template-list');
  if (!templateList) return;

  const templates = POST_TEMPLATES.filter(t => t.category === category);

  templateList.innerHTML = templates.map(template => `
    <div class="template-card">
      <h4>${template.name}</h4>
      <pre class="template-content">${template.template}</pre>
      <div class="template-tips">
        <strong>Tips:</strong>
        <ul>${template.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
      </div>
      <button class="btn-use-template" onclick="window.app.useTemplate('${template.id}')">
        Use Template
      </button>
    </div>
  `).join('');
}

// Post Scorer Panel
function initPostScorer() {
  // Already integrated into composer
}

// Algorithm Guide
function initAlgorithmGuide() {
  const guideContent = document.getElementById('algorithm-guide');
  if (!guideContent) return;

  guideContent.innerHTML = `
    <section class="guide-section">
      <h3>How the LinkedIn Algorithm Works</h3>
      <p>${ALGORITHM_OVERVIEW.philosophy}</p>

      <h4>Ranking Signals</h4>
      <div class="signals-grid">
        ${ALGORITHM_OVERVIEW.ranking_signals.map(s => `
          <div class="signal-card">
            <div class="signal-name">${s.name}</div>
            <div class="signal-weight ${s.weight}">${s.weight} importance</div>
            <div class="signal-desc">${s.description}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="guide-section">
      <h3>The Golden Hour</h3>
      <p>First ${GOLDEN_HOUR.duration} after posting determines your reach.</p>

      <div class="thresholds">
        ${Object.entries(GOLDEN_HOUR.thresholds).map(([level, data]) => `
          <div class="threshold ${level}">
            <span class="impressions">${data.impressions}</span>
            <span class="outcome">${data.outcome}</span>
          </div>
        `).join('')}
      </div>

      <h4>Golden Hour Strategies</h4>
      <ul>
        ${GOLDEN_HOUR.strategies.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </section>

    <section class="guide-section">
      <h3>Content Format Performance</h3>
      <table class="format-table">
        <thead>
          <tr><th>Format</th><th>Performance Boost</th><th>Notes</th></tr>
        </thead>
        <tbody>
          ${CONTENT_FORMAT_PERFORMANCE.map(f => `
            <tr>
              <td>${f.format}</td>
              <td class="boost">${f.boost}</td>
              <td>${f.note}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </section>

    <section class="guide-section">
      <h3>What Gets Penalized</h3>
      <div class="spam-triggers">
        ${SPAM_TRIGGERS.map(t => `
          <div class="trigger ${t.severity}">
            <span class="trigger-name">${t.trigger}</span>
            <span class="penalty">${t.penalty}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="guide-section">
      <h3>Engagement Value</h3>
      <h4>High-Value Engagement</h4>
      ${ENGAGEMENT_VALUE.high_value.map(e => `
        <div class="engagement-item high">
          <span class="type">${e.type}</span>
          <span class="multiplier">${e.multiplier}</span>
        </div>
      `).join('')}

      <h4>Low-Value Engagement</h4>
      ${ENGAGEMENT_VALUE.low_value.map(e => `
        <div class="engagement-item low">
          <span class="type">${e.type}</span>
          <span class="multiplier">${e.multiplier}</span>
        </div>
      `).join('')}
    </section>

    <section class="guide-section">
      <h3>Optimal Posting Schedule</h3>
      <p><strong>Frequency:</strong> ${OPTIMAL_POSTING.frequency.optimal}</p>
      <p><strong>Best Days:</strong> ${OPTIMAL_POSTING.timing.best_days.join(', ')}</p>
      <p><strong>Best Times:</strong> ${OPTIMAL_POSTING.timing.best_hours.join(', ')}</p>
      <p><strong>Spacing:</strong> ${OPTIMAL_POSTING.spacing.minimum} - ${OPTIMAL_POSTING.spacing.reason}</p>
    </section>
  `;
}

// Scheduler
function initScheduler() {
  renderQueue();
  renderCalendar();

  document.getElementById('add-to-queue')?.addEventListener('click', addCurrentToQueue);
  document.getElementById('export-queue')?.addEventListener('click', showExportOptions);
  document.getElementById('suggest-times')?.addEventListener('click', showSuggestedTimes);
}

function renderQueue() {
  const queueList = document.getElementById('queue-list');
  if (!queueList) return;

  const queue = contentQueue.getQueue();

  if (queue.length === 0) {
    queueList.innerHTML = '<p class="empty">No posts scheduled. Add posts to your queue to get started.</p>';
    return;
  }

  queueList.innerHTML = queue.map(post => {
    const date = new Date(post.scheduledDate);
    return `
      <div class="queue-item" data-id="${post.id}">
        <div class="queue-date">
          <span class="day">${date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
          <span class="date">${date.toLocaleDateString()}</span>
          <span class="time">${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
        </div>
        <div class="queue-content">${post.content.substring(0, 100)}...</div>
        <div class="queue-actions">
          <button onclick="window.app.editQueueItem('${post.id}')">Edit</button>
          <button onclick="window.app.removeFromQueue('${post.id}')">Remove</button>
          <button onclick="window.app.markAsPosted('${post.id}')">Mark Posted</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderCalendar() {
  // Simple week view
  const calendarView = document.getElementById('calendar-view');
  if (!calendarView) return;

  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const posts = calendar.getByDate(date);

    days.push({
      date,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: date.getDate(),
      posts
    });
  }

  calendarView.innerHTML = `
    <div class="calendar-week">
      ${days.map(day => `
        <div class="calendar-day ${day.date.toDateString() === today.toDateString() ? 'today' : ''}">
          <div class="day-header">
            <span class="day-name">${day.dayName}</span>
            <span class="day-num">${day.dayNum}</span>
          </div>
          <div class="day-posts">
            ${day.posts.map(p => `
              <div class="calendar-post" title="${p.content.substring(0, 50)}">
                ${new Date(p.scheduledDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </div>
            `).join('') || '<span class="no-posts">-</span>'}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function addCurrentToQueue() {
  if (!state.currentPost.content) {
    showNotification('Write a post first!', 'error');
    return;
  }

  // Show date picker modal
  showModal('schedule-modal', `
    <h3>Schedule Post</h3>
    <div class="form-group">
      <label>Date & Time</label>
      <input type="datetime-local" id="schedule-datetime" min="${new Date().toISOString().slice(0, 16)}">
    </div>
    <div id="suggested-times-container"></div>
    <div class="modal-actions">
      <button onclick="window.app.confirmSchedule()">Schedule</button>
      <button onclick="window.app.closeModal()">Cancel</button>
    </div>
  `);

  // Show suggested times
  const suggestions = suggestNextPostTime(contentQueue.getQueue());
  const container = document.getElementById('suggested-times-container');
  if (container && suggestions.length) {
    container.innerHTML = `
      <h4>Suggested Times</h4>
      <div class="time-suggestions">
        ${suggestions.slice(0, 5).map(s => `
          <button class="time-suggestion ${s.quality}" onclick="window.app.selectTime('${s.date.toISOString()}')">
            ${s.dayName} ${s.timeStr}
            <span class="quality-badge">${s.quality}</span>
          </button>
        `).join('')}
      </div>
    `;
  }
}

// URL Parser
function initUrlParser() {
  document.getElementById('parse-urls')?.addEventListener('click', parseUrls);
  document.getElementById('generate-from-urls')?.addEventListener('click', generateFromParsedUrls);
}

async function parseUrls() {
  const textarea = document.getElementById('url-list');
  if (!textarea) return;

  const urls = textarea.value.split('\n').filter(u => u.trim());
  if (urls.length === 0) {
    showNotification('Enter at least one URL', 'error');
    return;
  }

  const resultsContainer = document.getElementById('parsed-results');
  resultsContainer.innerHTML = '<p>Parsing URLs...</p>';

  const results = await parseMultipleUrls(urls, (progress) => {
    resultsContainer.innerHTML = `<p>Parsing ${progress.current}/${progress.total}...</p>`;
  });

  state.parsedArticles = results.filter(r => r.success);

  resultsContainer.innerHTML = results.map(r => `
    <div class="parsed-article ${r.success ? 'success' : 'error'}">
      ${r.success ? `
        <h4>${r.title}</h4>
        <p>${r.description?.substring(0, 150)}...</p>
        <div class="article-meta">
          <span>${r.wordCount} words</span>
          <span>${r.readingTime} min read</span>
          <span>${r.keywords?.slice(0, 3).join(', ')}</span>
        </div>
      ` : `
        <p class="error">Failed to parse: ${r.url}</p>
        <p class="error-message">${r.error}</p>
      `}
    </div>
  `).join('');
}

function generateFromParsedUrls() {
  if (!state.parsedArticles?.length) {
    showNotification('Parse some URLs first', 'error');
    return;
  }

  const postStyle = document.getElementById('post-style')?.value || 'insight';
  const generatedPosts = state.parsedArticles.map(article =>
    generatePostFromArticle(article, { style: postStyle })
  );

  // Show generated posts
  const container = document.getElementById('generated-posts');
  if (container) {
    container.innerHTML = generatedPosts.map((post, i) => `
      <div class="generated-post">
        <h4>Post ${i + 1}: ${state.parsedArticles[i].title}</h4>
        <pre>${post.content}</pre>
        <div class="post-actions">
          <button onclick="window.app.useGeneratedPost(${i})">Use This</button>
          <button onclick="window.app.addGeneratedToQueue(${i})">Add to Queue</button>
        </div>
      </div>
    `).join('');
  }

  state.generatedPosts = generatedPosts;
}

// Settings
function initSettings() {
  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'light' : 'dark';
    settings.set({ theme });
    applyTheme(theme);
  });

  // Export/Import
  document.getElementById('export-data')?.addEventListener('click', () => dataTransfer.exportAll());
  document.getElementById('import-data')?.addEventListener('click', importData);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      const result = dataTransfer.importAll(text);
      showNotification(result.message, result.success ? 'success' : 'error');
      if (result.success) {
        location.reload();
      }
    }
  };
  input.click();
}

// Utility Functions
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function showModal(id, content) {
  let modal = document.getElementById(id);
  if (!modal) {
    modal = document.createElement('div');
    modal.id = id;
    modal.className = 'modal';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `<div class="modal-content">${content}</div>`;
  modal.classList.add('show');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
}

function showTip() {
  const tipContainer = document.getElementById('tip-of-day');
  if (tipContainer) {
    tipContainer.textContent = getRandomTip();
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Global API for HTML onclick handlers
window.app = {
  removeHashtag: (tag) => {
    state.currentPost.hashtags = state.currentPost.hashtags.filter(t => t !== tag);
    updateHashtagDisplay();
    analyzeCurrentPost();
  },

  useHook: (encodedTemplate) => {
    const template = decodeURIComponent(encodedTemplate);
    const textarea = document.getElementById('post-content');
    if (textarea) {
      textarea.value = template + '\n\n' + textarea.value;
      state.currentPost.content = textarea.value;
      analyzeCurrentPost();
      switchTab('compose');
    }
    analytics.track('hook_used', { template });
  },

  addHashtagToPost: (tag) => {
    if (!state.currentPost.hashtags.includes(tag)) {
      state.currentPost.hashtags.push(tag);
      updateHashtagDisplay();
      analyzeCurrentPost();
      showNotification(`Added #${tag}`);
    }
  },

  useTemplate: (templateId) => {
    const template = POST_TEMPLATES.find(t => t.id === templateId);
    if (template) {
      const textarea = document.getElementById('post-content');
      if (textarea) {
        textarea.value = template.template;
        state.currentPost.content = template.template;
        analyzeCurrentPost();
        switchTab('compose');
      }
      analytics.track('template_used', { template: templateId });
    }
  },

  removeFromQueue: (id) => {
    contentQueue.removeFromQueue(id);
    renderQueue();
    renderCalendar();
    showNotification('Removed from queue');
  },

  markAsPosted: (id) => {
    contentQueue.markAsPosted(id);
    renderQueue();
    showNotification('Marked as posted');
  },

  editQueueItem: (id) => {
    const item = contentQueue.getQueue().find(p => p.id === id);
    if (item) {
      state.currentPost.content = item.content;
      state.currentPost.hashtags = item.hashtags || [];
      state.currentPost.id = item.id;
      document.getElementById('post-content').value = item.content;
      updateHashtagDisplay();
      analyzeCurrentPost();
      switchTab('compose');
    }
  },

  selectTime: (isoString) => {
    document.getElementById('schedule-datetime').value = isoString.slice(0, 16);
  },

  confirmSchedule: () => {
    const datetime = document.getElementById('schedule-datetime').value;
    if (!datetime) {
      showNotification('Select a date and time', 'error');
      return;
    }

    contentQueue.addToQueue(state.currentPost, new Date(datetime));
    closeModal();
    renderQueue();
    renderCalendar();
    showNotification('Post scheduled!');
    clearPost();
  },

  closeModal,

  useGeneratedPost: (index) => {
    if (state.generatedPosts?.[index]) {
      state.currentPost.content = state.generatedPosts[index].content;
      state.currentPost.hashtags = state.generatedPosts[index].suggestedHashtags || [];
      document.getElementById('post-content').value = state.currentPost.content;
      updateHashtagDisplay();
      analyzeCurrentPost();
      switchTab('compose');
    }
  },

  addGeneratedToQueue: (index) => {
    if (state.generatedPosts?.[index]) {
      const suggestions = suggestNextPostTime(contentQueue.getQueue());
      if (suggestions.length) {
        contentQueue.addToQueue({
          content: state.generatedPosts[index].content,
          hashtags: state.generatedPosts[index].suggestedHashtags || []
        }, suggestions[0].date);
        renderQueue();
        renderCalendar();
        showNotification('Added to queue!');
      }
    }
  }
};

// Export for module usage
export default {
  initApp,
  state
};
