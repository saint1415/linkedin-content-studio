// Best posting times data for LinkedIn
// Based on aggregate research from Hootsuite, Sprout Social, Buffer, HubSpot

export const BEST_TIMES_GENERAL = {
  summary: 'Best times are when professionals check LinkedIn: early morning, lunch, end of workday',
  peak_days: ['Tuesday', 'Wednesday', 'Thursday'],
  peak_hours: [
    { hour: '7:00 AM', quality: 'excellent', reason: 'Morning commute check' },
    { hour: '8:00 AM', quality: 'excellent', reason: 'Start of workday' },
    { hour: '12:00 PM', quality: 'good', reason: 'Lunch break scrolling' },
    { hour: '5:00 PM', quality: 'good', reason: 'End of workday wind-down' },
    { hour: '6:00 PM', quality: 'good', reason: 'Evening commute' }
  ],
  avoid: [
    { time: 'Late night (10 PM - 6 AM)', reason: 'Very low activity' },
    { time: 'Weekends', reason: '50% less engagement than weekdays' },
    { time: 'Friday afternoon', reason: 'People checked out for weekend' }
  ]
};

export const TIMES_BY_DAY = {
  monday: {
    quality: 'medium',
    best_times: ['8 AM', '12 PM'],
    note: 'People catching up, moderate attention'
  },
  tuesday: {
    quality: 'high',
    best_times: ['7-8 AM', '12 PM', '5-6 PM'],
    note: 'Peak engagement day - go with your best content'
  },
  wednesday: {
    quality: 'high',
    best_times: ['7-8 AM', '12 PM', '5-6 PM'],
    note: 'Strong mid-week engagement'
  },
  thursday: {
    quality: 'high',
    best_times: ['7-8 AM', '12 PM', '5-6 PM'],
    note: 'Last high-engagement day before weekend drop'
  },
  friday: {
    quality: 'medium-low',
    best_times: ['7-8 AM', '12 PM'],
    note: 'Morning only - engagement drops after lunch'
  },
  saturday: {
    quality: 'low',
    best_times: ['9-10 AM'],
    note: 'Some engagement possible, but significantly lower'
  },
  sunday: {
    quality: 'low',
    best_times: ['4-5 PM'],
    note: 'Sunday evening prep can catch some attention'
  }
};

export const TIMES_BY_INDUSTRY = {
  tech: {
    best_times: ['9-10 AM', '4-5 PM'],
    best_days: ['Tuesday', 'Wednesday'],
    note: 'Tech audience often starts later, works later'
  },
  finance: {
    best_times: ['6-7 AM', '12 PM'],
    best_days: ['Tuesday', 'Wednesday', 'Thursday'],
    note: 'Early risers, check before markets open'
  },
  healthcare: {
    best_times: ['7 AM', '12 PM', '8 PM'],
    best_days: ['Tuesday', 'Wednesday'],
    note: 'Shift workers check at various times'
  },
  marketing: {
    best_times: ['8-9 AM', '1 PM'],
    best_days: ['Tuesday', 'Thursday'],
    note: 'Marketers online during creative blocks'
  },
  sales: {
    best_times: ['7-8 AM', '5-6 PM'],
    best_days: ['Tuesday', 'Wednesday', 'Thursday'],
    note: 'Before calls start, after calls end'
  },
  hr: {
    best_times: ['8-9 AM', '12 PM'],
    best_days: ['Monday', 'Tuesday'],
    note: 'Active early week for recruiting'
  },
  consulting: {
    best_times: ['7 AM', '6 PM'],
    best_days: ['Monday', 'Tuesday', 'Wednesday'],
    note: 'Early/late - consultants travel midday'
  },
  education: {
    best_times: ['7-8 AM', '4-5 PM'],
    best_days: ['Tuesday', 'Wednesday'],
    note: 'Before/after school hours'
  }
};

export const TIMES_BY_AUDIENCE = {
  c_suite: {
    best_times: ['6-7 AM', '7-8 PM'],
    note: 'Executives check early morning and evening'
  },
  managers: {
    best_times: ['7-8 AM', '12-1 PM', '5-6 PM'],
    note: 'Standard business hours, lunch breaks'
  },
  individual_contributors: {
    best_times: ['8-9 AM', '12-1 PM', '5-6 PM'],
    note: 'Start of day, lunch, end of day'
  },
  job_seekers: {
    best_times: ['8-10 AM', '6-8 PM'],
    note: 'Active mornings and evenings'
  },
  entrepreneurs: {
    best_times: ['6-7 AM', '9-10 PM'],
    note: 'Early risers and night owls'
  },
  students: {
    best_times: ['10-11 AM', '8-9 PM'],
    note: 'Late morning, evening study breaks'
  }
};

export const TIMEZONE_STRATEGY = {
  tips: [
    'Post for your TARGET audience timezone, not your own',
    'If global audience, consider US Eastern Time (largest LinkedIn user base)',
    'B2B posts should align with business hours',
    'B2C can do evenings when people relax'
  ],
  major_markets: [
    { region: 'US East Coast', tz: 'ET', linkedin_users: 'Highest' },
    { region: 'US West Coast', tz: 'PT', linkedin_users: 'High' },
    { region: 'UK/Europe', tz: 'GMT/CET', linkedin_users: 'High' },
    { region: 'India', tz: 'IST', linkedin_users: 'Growing rapidly' },
    { region: 'Australia', tz: 'AEST', linkedin_users: 'Moderate' }
  ]
};

export const POSTING_FREQUENCY = {
  optimal: {
    frequency: '2-3 posts per week',
    spacing: '18-24 hours minimum between posts',
    reason: 'Consistency without competing with yourself'
  },
  aggressive: {
    frequency: '1 post per day (weekdays)',
    spacing: '24 hours',
    reason: 'Only if you can maintain quality'
  },
  conservative: {
    frequency: '1-2 posts per week',
    spacing: '3-4 days',
    reason: 'Better for busy schedules, focus on quality'
  },
  warnings: [
    'Multiple posts in 24 hours = second post gets penalized',
    'Gaps over 2 weeks hurt your algorithm standing',
    'Posting daily can reduce per-post engagement'
  ]
};

export const CONTENT_CALENDAR_TIPS = {
  weekly_structure: [
    { day: 'Monday', content_type: 'Industry insight or news commentary' },
    { day: 'Tuesday', content_type: 'How-to or educational content (peak day)' },
    { day: 'Wednesday', content_type: 'Personal story or lesson learned' },
    { day: 'Thursday', content_type: 'Engagement post or poll' },
    { day: 'Friday', content_type: 'Light/fun content or week recap' }
  ],
  monthly_themes: [
    'Week 1: Industry trends and predictions',
    'Week 2: How-to and tactical advice',
    'Week 3: Personal stories and lessons',
    'Week 4: Community engagement and Q&A'
  ],
  content_pillars: {
    description: 'Pick 3-5 topics you consistently post about',
    example: ['Leadership tips', 'Career growth', 'Industry news', 'Behind the scenes', 'Book recommendations'],
    benefit: 'Builds niche authority and algorithm favor'
  }
};
