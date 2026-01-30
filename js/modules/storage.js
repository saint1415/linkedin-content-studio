// Local storage management for LinkedIn Content Studio

const STORAGE_KEYS = {
  DRAFTS: 'lcs_drafts',
  SETTINGS: 'lcs_settings',
  CALENDAR: 'lcs_calendar',
  HISTORY: 'lcs_history',
  PROFILE: 'lcs_profile',
  ANALYTICS: 'lcs_analytics'
};

// Storage utilities
export const storage = {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage get error:', e);
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage set error:', e);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage remove error:', e);
      return false;
    }
  },

  clear() {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};

// Draft management
export const drafts = {
  getAll() {
    return storage.get(STORAGE_KEYS.DRAFTS) || [];
  },

  save(draft) {
    const allDrafts = this.getAll();
    const existingIndex = allDrafts.findIndex(d => d.id === draft.id);

    const draftWithMeta = {
      ...draft,
      id: draft.id || `draft_${Date.now()}`,
      updatedAt: new Date().toISOString(),
      createdAt: draft.createdAt || new Date().toISOString()
    };

    if (existingIndex >= 0) {
      allDrafts[existingIndex] = draftWithMeta;
    } else {
      allDrafts.unshift(draftWithMeta);
    }

    // Keep only last 50 drafts
    const trimmed = allDrafts.slice(0, 50);
    storage.set(STORAGE_KEYS.DRAFTS, trimmed);
    return draftWithMeta;
  },

  delete(id) {
    const allDrafts = this.getAll();
    const filtered = allDrafts.filter(d => d.id !== id);
    storage.set(STORAGE_KEYS.DRAFTS, filtered);
  },

  get(id) {
    const allDrafts = this.getAll();
    return allDrafts.find(d => d.id === id);
  }
};

// Content calendar
export const calendar = {
  getAll() {
    return storage.get(STORAGE_KEYS.CALENDAR) || [];
  },

  addEntry(entry) {
    const entries = this.getAll();
    const newEntry = {
      ...entry,
      id: `cal_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    entries.push(newEntry);
    storage.set(STORAGE_KEYS.CALENDAR, entries);
    return newEntry;
  },

  updateEntry(id, updates) {
    const entries = this.getAll();
    const index = entries.findIndex(e => e.id === id);
    if (index >= 0) {
      entries[index] = { ...entries[index], ...updates };
      storage.set(STORAGE_KEYS.CALENDAR, entries);
      return entries[index];
    }
    return null;
  },

  deleteEntry(id) {
    const entries = this.getAll();
    const filtered = entries.filter(e => e.id !== id);
    storage.set(STORAGE_KEYS.CALENDAR, filtered);
  },

  getByDate(date) {
    const entries = this.getAll();
    const dateStr = new Date(date).toDateString();
    return entries.filter(e => new Date(e.scheduledDate).toDateString() === dateStr);
  },

  getByWeek(startDate) {
    const entries = this.getAll();
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    return entries.filter(e => {
      const entryDate = new Date(e.scheduledDate);
      return entryDate >= start && entryDate < end;
    });
  }
};

// Post history (for tracking what you've posted)
export const history = {
  getAll() {
    return storage.get(STORAGE_KEYS.HISTORY) || [];
  },

  add(post) {
    const posts = this.getAll();
    const newPost = {
      ...post,
      id: `hist_${Date.now()}`,
      postedAt: new Date().toISOString()
    };
    posts.unshift(newPost);
    // Keep last 100 posts
    const trimmed = posts.slice(0, 100);
    storage.set(STORAGE_KEYS.HISTORY, trimmed);
    return newPost;
  },

  delete(id) {
    const posts = this.getAll();
    const filtered = posts.filter(p => p.id !== id);
    storage.set(STORAGE_KEYS.HISTORY, filtered);
  },

  getByDateRange(startDate, endDate) {
    const posts = this.getAll();
    return posts.filter(p => {
      const date = new Date(p.postedAt);
      return date >= startDate && date <= endDate;
    });
  }
};

// User settings
export const settings = {
  defaults: {
    theme: 'dark',
    industry: 'general',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    defaultHashtags: [],
    contentPillars: [],
    postingDays: ['tuesday', 'wednesday', 'thursday'],
    postingTimes: ['08:00', '12:00'],
    notifications: true
  },

  get() {
    return { ...this.defaults, ...storage.get(STORAGE_KEYS.SETTINGS) };
  },

  set(newSettings) {
    const current = this.get();
    const updated = { ...current, ...newSettings };
    storage.set(STORAGE_KEYS.SETTINGS, updated);
    return updated;
  },

  reset() {
    storage.set(STORAGE_KEYS.SETTINGS, this.defaults);
    return this.defaults;
  }
};

// Profile information
export const profile = {
  get() {
    return storage.get(STORAGE_KEYS.PROFILE) || {
      name: '',
      headline: '',
      industry: '',
      targetAudience: '',
      contentPillars: [],
      personalBrand: ''
    };
  },

  set(profileData) {
    storage.set(STORAGE_KEYS.PROFILE, profileData);
    return profileData;
  }
};

// Analytics tracking (local only)
export const analytics = {
  get() {
    return storage.get(STORAGE_KEYS.ANALYTICS) || {
      postsCreated: 0,
      draftsGenerated: 0,
      templatesUsed: {},
      hooksUsed: {},
      hashtagsUsed: {},
      lastActive: null
    };
  },

  track(event, data = {}) {
    const stats = this.get();

    switch (event) {
      case 'post_created':
        stats.postsCreated++;
        break;
      case 'draft_generated':
        stats.draftsGenerated++;
        break;
      case 'template_used':
        stats.templatesUsed[data.template] = (stats.templatesUsed[data.template] || 0) + 1;
        break;
      case 'hook_used':
        stats.hooksUsed[data.category] = (stats.hooksUsed[data.category] || 0) + 1;
        break;
      case 'hashtag_used':
        data.hashtags?.forEach(tag => {
          stats.hashtagsUsed[tag] = (stats.hashtagsUsed[tag] || 0) + 1;
        });
        break;
    }

    stats.lastActive = new Date().toISOString();
    storage.set(STORAGE_KEYS.ANALYTICS, stats);
    return stats;
  },

  reset() {
    storage.remove(STORAGE_KEYS.ANALYTICS);
  }
};

// Export/Import functionality
export const dataTransfer = {
  exportAll() {
    const data = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      drafts: drafts.getAll(),
      calendar: calendar.getAll(),
      history: history.getAll(),
      settings: settings.get(),
      profile: profile.get(),
      analytics: analytics.get()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `linkedin-content-studio-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importAll(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

      if (data.drafts) storage.set(STORAGE_KEYS.DRAFTS, data.drafts);
      if (data.calendar) storage.set(STORAGE_KEYS.CALENDAR, data.calendar);
      if (data.history) storage.set(STORAGE_KEYS.HISTORY, data.history);
      if (data.settings) storage.set(STORAGE_KEYS.SETTINGS, data.settings);
      if (data.profile) storage.set(STORAGE_KEYS.PROFILE, data.profile);
      if (data.analytics) storage.set(STORAGE_KEYS.ANALYTICS, data.analytics);

      return { success: true, message: 'Data imported successfully' };
    } catch (e) {
      return { success: false, message: 'Invalid import file: ' + e.message };
    }
  }
};
