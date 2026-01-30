// LinkedIn Algorithm Intelligence - Updated 2025/2026
// Sources: Hootsuite, Buffer, Sprout Social, Richard van der Blom research

export const ALGORITHM_OVERVIEW = {
  philosophy: "LinkedIn is NOT designed for virality. It's designed to share knowledge with people who find it useful.",
  ranking_signals: [
    {
      name: 'Relevance',
      weight: 'high',
      description: 'How closely your post matches the interests of your defined audience'
    },
    {
      name: 'Expertise',
      weight: 'high',
      description: 'Whether you demonstrate subject matter knowledge in a consistent niche'
    },
    {
      name: 'Engagement Quality',
      weight: 'high',
      description: 'Meaningful comments (15+ words) matter more than likes'
    },
    {
      name: 'Early Performance',
      weight: 'medium',
      description: 'First 60-90 minutes ("Golden Hour") determines broader reach'
    }
  ]
};

export const CONTENT_DISTRIBUTION_STAGES = [
  {
    stage: 1,
    name: 'Quality Filter',
    description: 'AI classifies as spam, low-quality, or high-quality',
    duration: 'Immediate',
    tip: 'Avoid spam triggers like excessive hashtags or engagement bait'
  },
  {
    stage: 2,
    name: 'Small Audience Test',
    description: 'Shown to a small segment of your network',
    duration: '60-90 minutes',
    tip: 'Early engagement here determines if you get broader reach'
  },
  {
    stage: 3,
    name: 'Broader Distribution',
    description: 'If Stage 2 performs well, shown to extended network',
    duration: 'Hours to days',
    tip: 'Continue engaging with comments to extend reach'
  },
  {
    stage: 4,
    name: 'Relevance Scoring',
    description: 'Content matched to users by topic interest',
    duration: 'Ongoing',
    tip: 'Niche expertise helps here - stay consistent with topics'
  }
];

export const GOLDEN_HOUR = {
  duration: '60-90 minutes',
  thresholds: {
    poor: { impressions: '<500', outcome: 'Unlikely to perform well' },
    average: { impressions: '500-1000', outcome: 'Moderate reach potential' },
    good: { impressions: '1000+', outcome: 'Strong second and third hour performance' }
  },
  strategies: [
    'Post when your audience is most active',
    'Respond to every comment within the first hour',
    'Ask engaging questions that prompt comments',
    'Notify close connections about your post',
    'Engage with others before posting to be active in feed'
  ]
};

export const CONTENT_FORMAT_PERFORMANCE = [
  { format: 'Native Video', boost: '+69%', note: 'Show logo/brand in first 4 seconds' },
  { format: 'Document/Carousel', boost: '+45%', note: 'Educational content, 8-12 slides optimal' },
  { format: 'Text + Image', boost: '+25%', note: 'Single image posts still perform well' },
  { format: 'Text Only', boost: 'Baseline', note: 'Still effective with strong hooks' },
  { format: 'Polls', boost: '+20%', note: 'Easy engagement, use sparingly' },
  { format: 'External Links', boost: '-40%', note: 'Add links in comments instead' },
  { format: 'Newsletter', boost: '+30%', note: 'Subscribers get notifications' }
];

export const ENGAGEMENT_VALUE = {
  high_value: [
    { type: 'Detailed comment (15+ words)', multiplier: '10x', reason: 'Shows genuine engagement' },
    { type: 'Thoughtful questions', multiplier: '8x', reason: 'Sparks conversation' },
    { type: 'Save/Bookmark', multiplier: '7x', reason: 'Signals valuable content' },
    { type: 'Repost with commentary', multiplier: '6x', reason: 'Extends reach with endorsement' },
    { type: 'Share via DM', multiplier: '5x', reason: 'Private endorsement signal' }
  ],
  low_value: [
    { type: 'Like/Reaction', multiplier: '1x', reason: 'Low effort signal' },
    { type: 'Short comment (<5 words)', multiplier: '2x', reason: 'Minimal effort' },
    { type: 'Repost without commentary', multiplier: '1x', reason: 'No personal endorsement' }
  ]
};

export const SPAM_TRIGGERS = [
  { trigger: 'More than 5 hashtags', penalty: 'Reduced reach', severity: 'high' },
  { trigger: 'Multiple posts in <24 hours', penalty: 'Newest post penalized', severity: 'high' },
  { trigger: 'Engagement bait phrases', penalty: 'Quality filter flag', severity: 'high' },
  { trigger: 'External links in post', penalty: '-40% reach', severity: 'medium' },
  { trigger: 'Tagging 10+ people', penalty: 'Spam classification', severity: 'high' },
  { trigger: 'Editing post after publishing', penalty: 'Reset distribution', severity: 'medium' },
  { trigger: 'Repetitive content', penalty: 'Reduced visibility', severity: 'medium' },
  { trigger: 'Pods/engagement groups', penalty: 'Detection and penalty', severity: 'high' }
];

export const ENGAGEMENT_BAIT_PHRASES = [
  'Like if you agree',
  'Comment YES below',
  'Share this post',
  'Tag someone who',
  'Repost for reach',
  'Follow me for more',
  'Like = Yes, Comment = No',
  'Who else agrees?',
  '1000 likes and I\'ll',
  'Don\'t scroll without'
];

export const OPTIMAL_POSTING = {
  frequency: {
    optimal: '2-3 times per week',
    max: '1 post per day',
    note: 'Consistency > frequency. Quality > quantity.'
  },
  timing: {
    best_days: ['Tuesday', 'Wednesday', 'Thursday'],
    best_hours: ['7-8 AM', '12-1 PM', '5-6 PM'],
    timezone_note: 'Post for YOUR audience timezone, not yours',
    tip: 'Test different times and track performance'
  },
  spacing: {
    minimum: '18-24 hours between posts',
    reason: 'Multiple posts compete against each other'
  }
};

export const NICHE_AUTHORITY = {
  importance: 'Critical for algorithm favor',
  how_it_works: 'Consistent posting on one topic tags you as expert',
  benefits: [
    'Content shown more widely in that domain',
    'Higher ranking for topic-related searches',
    'Featured in topic feeds',
    'More likely to be suggested to follow'
  ],
  strategy: [
    'Pick 2-3 related topics max',
    'Use consistent hashtags for your niche',
    'Reference previous posts to build content web',
    'Engage with others in your niche'
  ]
};

export const POST_STRUCTURE_TIPS = {
  hook: {
    importance: 'Critical - determines if people stop scrolling',
    length: 'First 2-3 lines visible before "see more"',
    tips: [
      'Start with bold statement or question',
      'Create curiosity gap',
      'Avoid weak openers like "I think" or "Just wanted to share"'
    ]
  },
  body: {
    length: 'Optimal: 1200-1500 characters for text posts',
    formatting: [
      'Use line breaks for readability',
      'Bullet points or numbered lists',
      'Short paragraphs (1-2 sentences)',
      'White space is your friend'
    ]
  },
  cta: {
    importance: 'Drives the engagement that fuels distribution',
    tips: [
      'Ask specific questions, not generic ones',
      'Make it easy to respond',
      'Avoid engagement bait phrases',
      'Genuine curiosity > manipulation'
    ]
  }
};

export const PROFILE_OPTIMIZATION = {
  factors: [
    { element: 'Profile completeness', impact: 'High', tip: 'Fill every section' },
    { element: 'Headline', impact: 'High', tip: 'Include keywords for your niche' },
    { element: 'About section', impact: 'High', tip: 'Tell your story, include keywords' },
    { element: 'Creator mode', impact: 'High', tip: 'Enable for content features' },
    { element: 'Featured section', impact: 'Medium', tip: 'Showcase best content' },
    { element: 'Custom URL', impact: 'Low', tip: 'Clean URL for sharing' }
  ],
  creator_mode: {
    benefits: [
      'Follow button instead of Connect',
      'Featured hashtags on profile',
      'Access to LinkedIn Live',
      'Newsletter feature',
      'Better content analytics'
    ]
  }
};

export const REPLY_STRATEGY = {
  importance: 'Replies extend post reach and build relationships',
  timing: 'Reply within first hour is critical',
  tips: [
    'Reply to every comment with substance',
    'Ask follow-up questions to keep thread alive',
    'Tag relevant people who might add value',
    'Your replies count as engagement too'
  ],
  reply_length: 'Aim for 15+ words like commenters should'
};

export const GROWTH_BENCHMARKS = {
  followers: {
    beginner: '0-1K',
    growing: '1K-10K',
    established: '10K-50K',
    influencer: '50K-100K',
    thought_leader: '100K+'
  },
  engagement_rates: {
    poor: '<1%',
    average: '2-3%',
    good: '4-6%',
    excellent: '7-10%',
    viral: '10%+'
  },
  note: 'Engagement rate = (likes + comments) / impressions × 100'
};
