// LinkedIn Content Studio - Bundled Version
(function() {
"use strict";

// === js/data/hooks.js ===
// Hook formulas and templates for LinkedIn posts
const HOOK_CATEGORIES = {
  curiosity: {
    name: 'Curiosity Gap',
    description: 'Create intrigue that makes readers want to learn more',
    icon: '?'
  },
  story: {
    name: 'Story Opener',
    description: 'Start with a personal narrative',
    icon: '📖'
  },
  data: {
    name: 'Data/Stats',
    description: 'Lead with compelling numbers',
    icon: '#'
  },
  controversy: {
    name: 'Hot Take',
    description: 'Challenge conventional wisdom',
    icon: '!'
  },
  question: {
    name: 'Question',
    description: 'Engage readers by asking them something',
    icon: '?'
  },
  listicle: {
    name: 'List Preview',
    description: 'Promise valuable takeaways',
    icon: '1.'
  },
  confession: {
    name: 'Confession',
    description: 'Vulnerability builds connection',
    icon: '~'
  },
  achievement: {
    name: 'Achievement',
    description: 'Share wins (humbly)',
    icon: '*'
  }
};

const HOOK_TEMPLATES = [
  // Curiosity hooks
  {
    category: 'curiosity',
    template: "I spent [TIME] doing [ACTIVITY]. Here's what nobody tells you:",
    example: "I spent 6 months cold calling 500 companies. Here's what nobody tells you:",
    effectiveness: 92
  },
  {
    category: 'curiosity',
    template: "The [TOPIC] advice everyone gives is wrong. Here's why:",
    example: "The networking advice everyone gives is wrong. Here's why:",
    effectiveness: 88
  },
  {
    category: 'curiosity',
    template: "[NUMBER] years in [INDUSTRY] taught me one thing:",
    example: "15 years in sales taught me one thing:",
    effectiveness: 85
  },
  {
    category: 'curiosity',
    template: "I said no to [IMPRESSIVE THING]. Best decision I ever made.",
    example: "I said no to a $200K job offer. Best decision I ever made.",
    effectiveness: 90
  },
  {
    category: 'curiosity',
    template: "Most [PROFESSIONALS] get [TOPIC] completely wrong.",
    example: "Most managers get feedback completely wrong.",
    effectiveness: 84
  },
  {
    category: 'curiosity',
    template: "This one [THING] changed how I [ACTION] forever:",
    example: "This one email changed how I approach sales forever:",
    effectiveness: 86
  },

  // Story hooks
  {
    category: 'story',
    template: "Last [TIME], I [DID SOMETHING]. It changed everything.",
    example: "Last Tuesday, I got fired. It changed everything.",
    effectiveness: 91
  },
  {
    category: 'story',
    template: "In [YEAR], I was [SITUATION]. Today, I [NEW SITUATION].",
    example: "In 2019, I was broke and lost. Today, I run a 7-figure business.",
    effectiveness: 87
  },
  {
    category: 'story',
    template: "My [PERSON] once told me: \"[QUOTE]\"",
    example: "My first boss once told me: \"Stop trying to be liked.\"",
    effectiveness: 83
  },
  {
    category: 'story',
    template: "I'll never forget when [PERSON] said [THING] to me.",
    example: "I'll never forget when a client said 'You're not worth it' to me.",
    effectiveness: 85
  },
  {
    category: 'story',
    template: "The worst [TIME PERIOD] of my career taught me [LESSON].",
    example: "The worst 3 months of my career taught me resilience.",
    effectiveness: 88
  },

  // Data hooks
  {
    category: 'data',
    template: "[PERCENTAGE]% of [GROUP] fail at [THING]. Here's the fix:",
    example: "73% of startups fail at hiring. Here's the fix:",
    effectiveness: 89
  },
  {
    category: 'data',
    template: "I analyzed [NUMBER] [THINGS]. The results surprised me:",
    example: "I analyzed 1,000 LinkedIn posts. The results surprised me:",
    effectiveness: 93
  },
  {
    category: 'data',
    template: "[NUMBER] [THINGS] in [TIME]. Here's exactly how:",
    example: "50 new clients in 90 days. Here's exactly how:",
    effectiveness: 91
  },
  {
    category: 'data',
    template: "Companies that [DO X] see [Y]% more [RESULT].",
    example: "Companies that invest in culture see 40% more retention.",
    effectiveness: 82
  },
  {
    category: 'data',
    template: "After [NUMBER] [UNITS], I learned [LESSON].",
    example: "After 500 interviews, I learned what really matters.",
    effectiveness: 86
  },

  // Controversy/Hot take hooks
  {
    category: 'controversy',
    template: "Unpopular opinion: [CONTROVERSIAL STATEMENT]",
    example: "Unpopular opinion: Work-life balance is a myth.",
    effectiveness: 88
  },
  {
    category: 'controversy',
    template: "Stop [COMMON PRACTICE]. It's killing your [RESULT].",
    example: "Stop multitasking. It's killing your productivity.",
    effectiveness: 86
  },
  {
    category: 'controversy',
    template: "[COMMON ADVICE] is terrible advice. Here's what works instead:",
    example: "\"Follow your passion\" is terrible advice. Here's what works instead:",
    effectiveness: 90
  },
  {
    category: 'controversy',
    template: "I'm going to say what nobody in [INDUSTRY] wants to admit:",
    example: "I'm going to say what nobody in tech wants to admit:",
    effectiveness: 92
  },
  {
    category: 'controversy',
    template: "We need to stop pretending [MYTH] is true.",
    example: "We need to stop pretending hustling 24/7 leads to success.",
    effectiveness: 84
  },

  // Question hooks
  {
    category: 'question',
    template: "What would you do if [SCENARIO]?",
    example: "What would you do if your top performer asked for a 50% raise?",
    effectiveness: 81
  },
  {
    category: 'question',
    template: "Why do [GROUP] struggle with [THING]?",
    example: "Why do smart people struggle with simple decisions?",
    effectiveness: 79
  },
  {
    category: 'question',
    template: "Have you ever [RELATABLE EXPERIENCE]?",
    example: "Have you ever felt like an imposter in your own meeting?",
    effectiveness: 85
  },
  {
    category: 'question',
    template: "What separates [A] from [B]?",
    example: "What separates good managers from great ones?",
    effectiveness: 83
  },

  // List preview hooks
  {
    category: 'listicle',
    template: "[NUMBER] [THINGS] that will [BENEFIT] (number [X] is crucial):",
    example: "7 habits that will 10x your focus (number 5 is crucial):",
    effectiveness: 87
  },
  {
    category: 'listicle',
    template: "The [NUMBER] biggest [TOPIC] mistakes I see [GROUP] making:",
    example: "The 5 biggest leadership mistakes I see new managers making:",
    effectiveness: 85
  },
  {
    category: 'listicle',
    template: "[NUMBER] things I wish I knew before [ACTION]:",
    example: "10 things I wish I knew before starting my business:",
    effectiveness: 89
  },
  {
    category: 'listicle',
    template: "How to [ACHIEVE GOAL] in [NUMBER] steps:",
    example: "How to land your dream job in 5 steps:",
    effectiveness: 82
  },

  // Confession hooks
  {
    category: 'confession',
    template: "I used to think [OLD BELIEF]. I was wrong.",
    example: "I used to think success meant working 80-hour weeks. I was wrong.",
    effectiveness: 88
  },
  {
    category: 'confession',
    template: "I made a mistake that cost me [LOSS]. Here's what I learned:",
    example: "I made a mistake that cost me my best client. Here's what I learned:",
    effectiveness: 91
  },
  {
    category: 'confession',
    template: "I'm embarrassed to admit this, but [CONFESSION].",
    example: "I'm embarrassed to admit this, but I used to be a terrible listener.",
    effectiveness: 86
  },
  {
    category: 'confession',
    template: "For years, I was afraid of [FEAR]. Then [WHAT CHANGED].",
    example: "For years, I was afraid of public speaking. Then I joined Toastmasters.",
    effectiveness: 84
  },

  // Achievement hooks
  {
    category: 'achievement',
    template: "Just [ACHIEVED MILESTONE]. Here's the honest truth about the journey:",
    example: "Just hit $1M in revenue. Here's the honest truth about the journey:",
    effectiveness: 85
  },
  {
    category: 'achievement',
    template: "[TIME] ago I [STARTING POINT]. Today [ACHIEVEMENT].",
    example: "2 years ago I had zero followers. Today I have 50K.",
    effectiveness: 87
  },
  {
    category: 'achievement',
    template: "We just [ACHIEVEMENT]. But here's what it actually took:",
    example: "We just closed our Series A. But here's what it actually took:",
    effectiveness: 89
  }
];

const POWER_WORDS = [
  'instantly', 'proven', 'secret', 'discover', 'revealed',
  'breakthrough', 'exclusive', 'insider', 'surprising', 'essential',
  'critical', 'game-changing', 'powerful', 'ultimate', 'master',
  'transform', 'unlock', 'boost', 'skyrocket', 'guarantee'
];

const WEAK_OPENERS = [
  'I think',
  'In my opinion',
  'I believe',
  'I wanted to share',
  'Just wanted to',
  'Quick update',
  'So excited to',
  'Thrilled to announce',
  'Happy to share',
  'Proud to say'
];


// === js/data/hashtags.js ===
// Hashtag database organized by category and industry
const HASHTAG_CATEGORIES = {
  general: {
    name: 'General Business',
    hashtags: [
      { tag: 'business', reach: 'very-high', type: 'evergreen' },
      { tag: 'entrepreneur', reach: 'very-high', type: 'evergreen' },
      { tag: 'success', reach: 'very-high', type: 'evergreen' },
      { tag: 'motivation', reach: 'very-high', type: 'evergreen' },
      { tag: 'growth', reach: 'high', type: 'evergreen' },
      { tag: 'strategy', reach: 'high', type: 'evergreen' },
      { tag: 'innovation', reach: 'high', type: 'evergreen' },
      { tag: 'productivity', reach: 'high', type: 'evergreen' },
      { tag: 'mindset', reach: 'high', type: 'evergreen' },
      { tag: 'goals', reach: 'medium', type: 'evergreen' }
    ]
  },
  leadership: {
    name: 'Leadership & Management',
    hashtags: [
      { tag: 'leadership', reach: 'very-high', type: 'evergreen' },
      { tag: 'management', reach: 'very-high', type: 'evergreen' },
      { tag: 'leadershipdevelopment', reach: 'high', type: 'evergreen' },
      { tag: 'teamwork', reach: 'high', type: 'evergreen' },
      { tag: 'executivecoaching', reach: 'medium', type: 'niche' },
      { tag: 'teambuilding', reach: 'medium', type: 'evergreen' },
      { tag: 'managementtips', reach: 'medium', type: 'niche' },
      { tag: 'leadershipskills', reach: 'medium', type: 'evergreen' },
      { tag: 'peoplemanagement', reach: 'medium', type: 'niche' },
      { tag: 'servantleadership', reach: 'low', type: 'niche' }
    ]
  },
  careers: {
    name: 'Career Development',
    hashtags: [
      { tag: 'careers', reach: 'very-high', type: 'evergreen' },
      { tag: 'careeradvice', reach: 'high', type: 'evergreen' },
      { tag: 'jobsearch', reach: 'high', type: 'evergreen' },
      { tag: 'hiring', reach: 'high', type: 'evergreen' },
      { tag: 'resume', reach: 'medium', type: 'evergreen' },
      { tag: 'interview', reach: 'medium', type: 'evergreen' },
      { tag: 'careergrowth', reach: 'medium', type: 'evergreen' },
      { tag: 'professionaldevelopment', reach: 'medium', type: 'evergreen' },
      { tag: 'networking', reach: 'high', type: 'evergreen' },
      { tag: 'jobseekers', reach: 'medium', type: 'evergreen' }
    ]
  },
  tech: {
    name: 'Technology',
    hashtags: [
      { tag: 'technology', reach: 'very-high', type: 'evergreen' },
      { tag: 'tech', reach: 'very-high', type: 'evergreen' },
      { tag: 'ai', reach: 'very-high', type: 'trending' },
      { tag: 'artificialintelligence', reach: 'very-high', type: 'trending' },
      { tag: 'machinelearning', reach: 'high', type: 'trending' },
      { tag: 'data', reach: 'high', type: 'evergreen' },
      { tag: 'software', reach: 'high', type: 'evergreen' },
      { tag: 'programming', reach: 'high', type: 'evergreen' },
      { tag: 'cybersecurity', reach: 'high', type: 'trending' },
      { tag: 'cloud', reach: 'high', type: 'evergreen' },
      { tag: 'saas', reach: 'medium', type: 'niche' },
      { tag: 'devops', reach: 'medium', type: 'niche' },
      { tag: 'webdevelopment', reach: 'medium', type: 'evergreen' },
      { tag: 'datascience', reach: 'high', type: 'evergreen' },
      { tag: 'genai', reach: 'high', type: 'trending' }
    ]
  },
  marketing: {
    name: 'Marketing & Sales',
    hashtags: [
      { tag: 'marketing', reach: 'very-high', type: 'evergreen' },
      { tag: 'digitalmarketing', reach: 'very-high', type: 'evergreen' },
      { tag: 'sales', reach: 'very-high', type: 'evergreen' },
      { tag: 'contentmarketing', reach: 'high', type: 'evergreen' },
      { tag: 'socialmedia', reach: 'high', type: 'evergreen' },
      { tag: 'branding', reach: 'high', type: 'evergreen' },
      { tag: 'seo', reach: 'high', type: 'evergreen' },
      { tag: 'copywriting', reach: 'medium', type: 'evergreen' },
      { tag: 'b2b', reach: 'high', type: 'evergreen' },
      { tag: 'b2bmarketing', reach: 'medium', type: 'niche' },
      { tag: 'b2bsales', reach: 'medium', type: 'niche' },
      { tag: 'emailmarketing', reach: 'medium', type: 'evergreen' },
      { tag: 'growthhacking', reach: 'medium', type: 'niche' },
      { tag: 'demandgeneration', reach: 'low', type: 'niche' }
    ]
  },
  startup: {
    name: 'Startups & VC',
    hashtags: [
      { tag: 'startup', reach: 'very-high', type: 'evergreen' },
      { tag: 'startups', reach: 'very-high', type: 'evergreen' },
      { tag: 'entrepreneurship', reach: 'very-high', type: 'evergreen' },
      { tag: 'venturecapital', reach: 'high', type: 'evergreen' },
      { tag: 'vc', reach: 'high', type: 'evergreen' },
      { tag: 'funding', reach: 'high', type: 'evergreen' },
      { tag: 'founders', reach: 'high', type: 'evergreen' },
      { tag: 'smallbusiness', reach: 'high', type: 'evergreen' },
      { tag: 'scaleup', reach: 'medium', type: 'niche' },
      { tag: 'seedfunding', reach: 'medium', type: 'niche' },
      { tag: 'angelinvestor', reach: 'medium', type: 'niche' },
      { tag: 'bootstrapped', reach: 'low', type: 'niche' }
    ]
  },
  hr: {
    name: 'HR & People',
    hashtags: [
      { tag: 'hr', reach: 'very-high', type: 'evergreen' },
      { tag: 'humanresources', reach: 'high', type: 'evergreen' },
      { tag: 'recruiting', reach: 'high', type: 'evergreen' },
      { tag: 'talent', reach: 'high', type: 'evergreen' },
      { tag: 'talentacquisition', reach: 'high', type: 'evergreen' },
      { tag: 'employeeengagement', reach: 'medium', type: 'evergreen' },
      { tag: 'workculture', reach: 'medium', type: 'evergreen' },
      { tag: 'companyculture', reach: 'medium', type: 'evergreen' },
      { tag: 'workplaceculture', reach: 'medium', type: 'evergreen' },
      { tag: 'dei', reach: 'medium', type: 'trending' },
      { tag: 'diversity', reach: 'high', type: 'evergreen' },
      { tag: 'remotework', reach: 'high', type: 'trending' },
      { tag: 'hybridwork', reach: 'medium', type: 'trending' },
      { tag: 'futureofwork', reach: 'high', type: 'trending' }
    ]
  },
  finance: {
    name: 'Finance & Investing',
    hashtags: [
      { tag: 'finance', reach: 'very-high', type: 'evergreen' },
      { tag: 'investing', reach: 'very-high', type: 'evergreen' },
      { tag: 'fintech', reach: 'high', type: 'trending' },
      { tag: 'banking', reach: 'high', type: 'evergreen' },
      { tag: 'personalfinance', reach: 'high', type: 'evergreen' },
      { tag: 'accounting', reach: 'high', type: 'evergreen' },
      { tag: 'wealthmanagement', reach: 'medium', type: 'niche' },
      { tag: 'financialplanning', reach: 'medium', type: 'evergreen' },
      { tag: 'cfo', reach: 'medium', type: 'niche' },
      { tag: 'economics', reach: 'medium', type: 'evergreen' }
    ]
  },
  healthcare: {
    name: 'Healthcare',
    hashtags: [
      { tag: 'healthcare', reach: 'very-high', type: 'evergreen' },
      { tag: 'health', reach: 'very-high', type: 'evergreen' },
      { tag: 'healthtech', reach: 'high', type: 'trending' },
      { tag: 'medtech', reach: 'medium', type: 'niche' },
      { tag: 'pharma', reach: 'high', type: 'evergreen' },
      { tag: 'biotech', reach: 'high', type: 'evergreen' },
      { tag: 'mentalhealth', reach: 'high', type: 'trending' },
      { tag: 'wellness', reach: 'high', type: 'evergreen' },
      { tag: 'digitalhealth', reach: 'medium', type: 'trending' },
      { tag: 'healthcareinnovation', reach: 'medium', type: 'niche' }
    ]
  },
  personal: {
    name: 'Personal Brand',
    hashtags: [
      { tag: 'personalbrand', reach: 'high', type: 'evergreen' },
      { tag: 'personalbranding', reach: 'high', type: 'evergreen' },
      { tag: 'thoughtleadership', reach: 'medium', type: 'evergreen' },
      { tag: 'linkedintips', reach: 'high', type: 'evergreen' },
      { tag: 'contentcreator', reach: 'high', type: 'evergreen' },
      { tag: 'creator', reach: 'high', type: 'trending' },
      { tag: 'creatoreconomy', reach: 'medium', type: 'trending' },
      { tag: 'influence', reach: 'medium', type: 'evergreen' },
      { tag: 'publicspeaking', reach: 'medium', type: 'evergreen' },
      { tag: 'storytelling', reach: 'medium', type: 'evergreen' }
    ]
  },
  skills: {
    name: 'Skills & Learning',
    hashtags: [
      { tag: 'learning', reach: 'high', type: 'evergreen' },
      { tag: 'education', reach: 'very-high', type: 'evergreen' },
      { tag: 'skills', reach: 'high', type: 'evergreen' },
      { tag: 'upskilling', reach: 'medium', type: 'trending' },
      { tag: 'reskilling', reach: 'medium', type: 'trending' },
      { tag: 'lifelessons', reach: 'high', type: 'evergreen' },
      { tag: 'continuouslearning', reach: 'medium', type: 'evergreen' },
      { tag: 'growthmindset', reach: 'high', type: 'evergreen' },
      { tag: 'selfimprovement', reach: 'high', type: 'evergreen' },
      { tag: 'onlinelearning', reach: 'medium', type: 'evergreen' }
    ]
  }
};

const HASHTAG_TIPS = [
  'Use 3-5 hashtags per post for optimal reach',
  'Mix high-reach and niche hashtags for best visibility',
  'Place hashtags at the end of your post, not inline',
  'Avoid hashtags with millions of posts - your content gets lost',
  'Create a branded hashtag for your content series',
  'Trending hashtags can boost visibility but must be relevant',
  'Research hashtags before using - some have negative associations',
  'Follow hashtags relevant to your industry to find content ideas'
];

const REACH_LEVELS = {
  'very-high': { label: 'Very High', description: '10M+ followers', color: '#22c55e' },
  'high': { label: 'High', description: '1M-10M followers', color: '#84cc16' },
  'medium': { label: 'Medium', description: '100K-1M followers', color: '#eab308' },
  'low': { label: 'Niche', description: '<100K followers', color: '#f97316' }
};


// === js/data/templates.js ===
// Post templates organized by category
const TEMPLATE_CATEGORIES = {
  thought_leadership: {
    name: 'Thought Leadership',
    icon: '💡',
    description: 'Establish authority in your field'
  },
  story: {
    name: 'Personal Story',
    icon: '📖',
    description: 'Connect through narrative'
  },
  how_to: {
    name: 'How-To / Tutorial',
    icon: '📝',
    description: 'Share actionable knowledge'
  },
  listicle: {
    name: 'List Post',
    icon: '📋',
    description: 'Easy-to-scan value'
  },
  announcement: {
    name: 'Announcement',
    icon: '📢',
    description: 'Share news and milestones'
  },
  engagement: {
    name: 'Engagement',
    icon: '💬',
    description: 'Start conversations'
  },
  carousel: {
    name: 'Carousel Ideas',
    icon: '🎠',
    description: 'Multi-slide content'
  },
  poll: {
    name: 'Poll Ideas',
    icon: '📊',
    description: 'Interactive content'
  }
};

const POST_TEMPLATES = [
  // Thought Leadership
  {
    id: 'tl-1',
    category: 'thought_leadership',
    name: 'Industry Insight',
    template: `[BOLD STATEMENT ABOUT YOUR INDUSTRY]

Here's what I've noticed after [TIME] in [INDUSTRY]:

Most people think [COMMON BELIEF].

But the reality is [ACTUAL TRUTH].

Here's why this matters:

→ [POINT 1]
→ [POINT 2]
→ [POINT 3]

The companies/people who understand this are [BENEFIT].

What's your take on this?`,
    tips: ['Lead with a bold, specific claim', 'Use "→" arrows for visual scanning', 'End with engagement question']
  },
  {
    id: 'tl-2',
    category: 'thought_leadership',
    name: 'Myth Buster',
    template: `[INDUSTRY] Myth: "[COMMON MYTH]"

Reality: [THE TRUTH]

I used to believe this too until [WHAT CHANGED].

Here's what actually works:

1. [TACTIC 1]
   - [DETAIL]

2. [TACTIC 2]
   - [DETAIL]

3. [TACTIC 3]
   - [DETAIL]

Stop [BAD ADVICE]. Start [GOOD ADVICE].

Drop a "💡" if this shifts your perspective.`,
    tips: ['Challenge widely-held beliefs', 'Show your own journey', 'Give actionable alternatives']
  },
  {
    id: 'tl-3',
    category: 'thought_leadership',
    name: 'Prediction/Trend',
    template: `My [INDUSTRY] prediction for [TIMEFRAME]:

[BOLD PREDICTION]

Here's why I'm confident:

📊 Signal 1: [DATA POINT]
📊 Signal 2: [DATA POINT]
📊 Signal 3: [DATA POINT]

What this means for you:

If you're a [ROLE 1]: [IMPLICATION]
If you're a [ROLE 2]: [IMPLICATION]

The early movers will [BENEFIT].

What's your prediction?`,
    tips: ['Be specific with timeline', 'Back up with evidence', 'Make it relevant to reader']
  },

  // Personal Story
  {
    id: 'story-1',
    category: 'story',
    name: 'Failure to Lesson',
    template: `[TIME] ago, I made a mistake that [CONSEQUENCE].

Here's what happened:

[BRIEF STORY - 2-3 SENTENCES]

I felt [EMOTION].

But that failure taught me:

1. [LESSON 1]
2. [LESSON 2]
3. [LESSON 3]

Now, whenever I [SITUATION], I [NEW BEHAVIOR].

Your failures aren't final. They're feedback.

What's a failure that shaped you?`,
    tips: ['Be vulnerable but not victim-focused', 'Extract clear lessons', 'Show growth']
  },
  {
    id: 'story-2',
    category: 'story',
    name: 'Origin Story',
    template: `[TIME PERIOD] ago, I was [PREVIOUS SITUATION].

• [DETAIL 1]
• [DETAIL 2]
• [DETAIL 3]

Then [TURNING POINT] happened.

I decided to [ACTION].

Fast forward to today:

• [ACHIEVEMENT 1]
• [ACHIEVEMENT 2]
• [ACHIEVEMENT 3]

The difference? [KEY INSIGHT]

If you're feeling [EMOTION] about your [TOPIC], remember:

[ENCOURAGING MESSAGE]`,
    tips: ['Contrast before/after clearly', 'Include specific details', 'Make it relatable']
  },
  {
    id: 'story-3',
    category: 'story',
    name: 'Pivotal Moment',
    template: `One conversation changed my career.

I was [SITUATION] when [PERSON] said:

"[QUOTE]"

At first, I [REACTION].

But then I realized [INSIGHT].

That single moment led me to:
→ [OUTCOME 1]
→ [OUTCOME 2]
→ [OUTCOME 3]

Sometimes all it takes is [LESSON].

Who said something that changed your path?`,
    tips: ['Use specific dialogue', 'Show initial resistance', 'Connect to bigger lesson']
  },

  // How-To
  {
    id: 'howto-1',
    category: 'how_to',
    name: 'Step-by-Step Guide',
    template: `How to [ACHIEVE RESULT] (step-by-step):

I've used this exact process to [YOUR RESULT].

Step 1: [ACTION]
↳ [DETAIL/TIP]

Step 2: [ACTION]
↳ [DETAIL/TIP]

Step 3: [ACTION]
↳ [DETAIL/TIP]

Step 4: [ACTION]
↳ [DETAIL/TIP]

Step 5: [ACTION]
↳ [DETAIL/TIP]

Bonus tip: [EXTRA VALUE]

Save this post for later. You'll need it.`,
    tips: ['Keep steps actionable', 'Include your own results', 'Use "↳" for sub-points']
  },
  {
    id: 'howto-2',
    category: 'how_to',
    name: 'Framework Share',
    template: `The [NAME] Framework for [RESULT]:

After [EXPERIENCE], I developed this system:

[LETTER/WORD 1] - [MEANING]
  • [EXPLANATION]

[LETTER/WORD 2] - [MEANING]
  • [EXPLANATION]

[LETTER/WORD 3] - [MEANING]
  • [EXPLANATION]

[LETTER/WORD 4] - [MEANING]
  • [EXPLANATION]

Use this framework when [SITUATION].

It's helped me [RESULT]. Hope it helps you too.`,
    tips: ['Create memorable acronym', 'Keep explanations brief', 'Show when to use it']
  },

  // List Post
  {
    id: 'list-1',
    category: 'listicle',
    name: 'Lessons Learned',
    template: `[NUMBER] lessons from [EXPERIENCE/TIME PERIOD]:

1. [LESSON]
   [BRIEF EXPLANATION]

2. [LESSON]
   [BRIEF EXPLANATION]

3. [LESSON]
   [BRIEF EXPLANATION]

4. [LESSON]
   [BRIEF EXPLANATION]

5. [LESSON]
   [BRIEF EXPLANATION]

Which one resonates most with you?`,
    tips: ['Make each lesson standalone', 'Keep explanations to 1-2 lines', 'End with engagement']
  },
  {
    id: 'list-2',
    category: 'listicle',
    name: 'Do This Not That',
    template: `Stop doing [X]. Start doing [Y].

Here's the full list:

❌ [BAD HABIT 1]
✅ [GOOD HABIT 1]

❌ [BAD HABIT 2]
✅ [GOOD HABIT 2]

❌ [BAD HABIT 3]
✅ [GOOD HABIT 3]

❌ [BAD HABIT 4]
✅ [GOOD HABIT 4]

❌ [BAD HABIT 5]
✅ [GOOD HABIT 5]

Small changes. Big results.

Which swap are you making first?`,
    tips: ['Use clear contrast', 'Keep pairs parallel', 'Make swaps actionable']
  },
  {
    id: 'list-3',
    category: 'listicle',
    name: 'Tools/Resources',
    template: `[NUMBER] [TOOLS/RESOURCES] that [BENEFIT]:

I use these daily. Sharing so you can too:

1️⃣ [TOOL 1]
   → Best for: [USE CASE]
   → Why I like it: [REASON]

2️⃣ [TOOL 2]
   → Best for: [USE CASE]
   → Why I like it: [REASON]

3️⃣ [TOOL 3]
   → Best for: [USE CASE]
   → Why I like it: [REASON]

4️⃣ [TOOL 4]
   → Best for: [USE CASE]
   → Why I like it: [REASON]

5️⃣ [TOOL 5]
   → Best for: [USE CASE]
   → Why I like it: [REASON]

What tools would you add to this list?`,
    tips: ['Be specific about use cases', 'Include free options', 'Share personal experience']
  },

  // Announcements
  {
    id: 'announce-1',
    category: 'announcement',
    name: 'New Role',
    template: `I'm excited to share that I've joined [COMPANY] as [ROLE].

[1-2 SENTENCES ABOUT WHY THIS MATTERS TO YOU]

A few things I'm looking forward to:
• [THING 1]
• [THING 2]
• [THING 3]

Thank you to [ACKNOWLEDGMENTS - people, previous company, etc.]

If you're working on [RELEVANT TOPIC], I'd love to connect.

Here's to new beginnings!`,
    tips: ['Show enthusiasm without being over the top', 'Thank specific people', 'Open door for connections']
  },
  {
    id: 'announce-2',
    category: 'announcement',
    name: 'Achievement/Milestone',
    template: `[ACHIEVEMENT]

[HONEST STATEMENT ABOUT HOW IT FEELS]

But here's what actually made this possible:

• [FACTOR 1]
• [FACTOR 2]
• [FACTOR 3]

The truth is: [HUMBLE INSIGHT]

What I learned along the way:

1. [LESSON 1]
2. [LESSON 2]
3. [LESSON 3]

Grateful for this milestone. Excited for what's next.

[OPTIONAL: THANK SPECIFIC PEOPLE]`,
    tips: ['Be humble about wins', 'Share what made it possible', 'Extract lessons for others']
  },

  // Engagement Posts
  {
    id: 'engage-1',
    category: 'engagement',
    name: 'This or That',
    template: `[TOPIC] debate:

[OPTION A] or [OPTION B]?

I'll go first: [YOUR CHOICE]

Here's why: [BRIEF REASON]

But I'm genuinely curious what you think.

Drop your answer below 👇`,
    tips: ['Pick genuinely debatable topics', 'Share your stance first', 'Keep it relevant to your audience']
  },
  {
    id: 'engage-2',
    category: 'engagement',
    name: 'Fill in the Blank',
    template: `Fill in the blank:

The best career advice I ever received was _________________.

I'll start:

"[YOUR ADVICE]" - [WHO SAID IT]

This changed how I [IMPACT].

What's yours?`,
    tips: ['Keep the blank simple', 'Share your own first', 'Respond to comments']
  },
  {
    id: 'engage-3',
    category: 'engagement',
    name: 'Hot Take Request',
    template: `What's your hottest [INDUSTRY/TOPIC] take?

Mine: [YOUR HOT TAKE]

I know this might be controversial, but [BRIEF JUSTIFICATION].

No judgment here. Drop your spiciest opinion below.

Let's have a real conversation 👇`,
    tips: ['Be genuine with your take', 'Create safe space for opinions', 'Engage with replies']
  },

  // Carousel Ideas
  {
    id: 'carousel-1',
    category: 'carousel',
    name: 'Ultimate Guide',
    template: `CAROUSEL POST IDEA: [TOPIC] Guide

Slide 1 (Cover):
"The Complete Guide to [TOPIC]"
[SUBTITLE: What you'll learn]

Slide 2 (Problem):
"[COMMON PROBLEM]"
[Why this matters]

Slides 3-7 (Solutions):
One tip per slide with:
• Clear heading
• Brief explanation
• Visual element

Slide 8 (Summary):
"Quick Recap:"
• [POINT 1]
• [POINT 2]
• [POINT 3]

Slide 9 (CTA):
"Found this helpful?"
• Save for later
• Follow for more
• Share with someone who needs this`,
    tips: ['Keep text minimal per slide', 'Use consistent design', 'Strong hook on slide 1']
  },
  {
    id: 'carousel-2',
    category: 'carousel',
    name: 'Before/After',
    template: `CAROUSEL POST IDEA: Transformation Story

Slide 1 (Cover):
"From [BEFORE STATE] to [AFTER STATE]"
[YOUR TIMEFRAME]

Slide 2 (Before):
"Where I started:"
• [DETAIL 1]
• [DETAIL 2]
• [DETAIL 3]

Slide 3 (Turning Point):
"The moment everything changed:"
[WHAT HAPPENED]

Slides 4-7 (Key Changes):
One change per slide:
"Change #X: [CHANGE]"
What I did: [ACTION]
Result: [OUTCOME]

Slide 8 (Results):
"Today:"
[KEY METRICS/ACHIEVEMENTS]

Slide 9 (Your Turn):
"You can do this too"
[ENCOURAGEMENT + CTA]`,
    tips: ['Be specific with numbers', 'Show the struggle', 'Make it replicable']
  },

  // Poll Ideas
  {
    id: 'poll-1',
    category: 'poll',
    name: 'Industry Debate',
    template: `POLL IDEA:

Question: "[DEBATABLE QUESTION]"

Options:
• [OPTION 1]
• [OPTION 2]
• [OPTION 3]
• Other (comment below)

Post text:
"This is something I've been thinking about...

[BRIEF CONTEXT]

Curious where you stand. Vote and tell me why in the comments!"`,
    tips: ['Pick genuinely divisive topics', 'Keep options clear', 'Ask for comment elaboration']
  },
  {
    id: 'poll-2',
    category: 'poll',
    name: 'Preference Poll',
    template: `POLL IDEA:

Question: "What's your preferred [TOPIC]?"

Options:
• [OPTION 1]
• [OPTION 2]
• [OPTION 3]
• Depends (explain below)

Post text:
"I'm genuinely curious about this one.

I personally prefer [YOUR CHOICE] because [REASON].

But I know there are strong opinions on all sides.

What's your pick and why?"`,
    tips: ['Include "depends" option', 'Share your preference', 'Create discussion']
  }
];

const CTA_TEMPLATES = [
  // Soft CTAs
  { text: 'What do you think?', type: 'soft' },
  { text: "What's your experience with this?", type: 'soft' },
  { text: 'Agree or disagree?', type: 'soft' },
  { text: 'Drop your thoughts below 👇', type: 'soft' },
  { text: "I'd love to hear your perspective.", type: 'soft' },
  { text: 'What would you add to this list?', type: 'soft' },

  // Engagement CTAs
  { text: 'Save this for later. You\'ll need it.', type: 'engagement' },
  { text: 'Share this with someone who needs to hear it.', type: 'engagement' },
  { text: 'Follow for more [TOPIC] insights.', type: 'engagement' },
  { text: 'Repost if this resonates ♻️', type: 'engagement' },
  { text: 'Hit the 🔔 to never miss a post.', type: 'engagement' },

  // Interactive CTAs
  { text: 'Comment "[WORD]" and I\'ll send you [RESOURCE].', type: 'interactive' },
  { text: 'DM me "[WORD]" for [RESOURCE].', type: 'interactive' },
  { text: 'Tag someone who needs to see this.', type: 'interactive' },
  { text: 'Drop a [EMOJI] if you agree.', type: 'interactive' }
];


// === js/data/algorithm.js ===
// LinkedIn Algorithm Intelligence - Updated 2025/2026
// Sources: Hootsuite, Buffer, Sprout Social, Richard van der Blom research

const ALGORITHM_OVERVIEW = {
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

const CONTENT_DISTRIBUTION_STAGES = [
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

const GOLDEN_HOUR = {
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

const CONTENT_FORMAT_PERFORMANCE = [
  { format: 'Native Video', boost: '+69%', note: 'Show logo/brand in first 4 seconds' },
  { format: 'Document/Carousel', boost: '+45%', note: 'Educational content, 8-12 slides optimal' },
  { format: 'Text + Image', boost: '+25%', note: 'Single image posts still perform well' },
  { format: 'Text Only', boost: 'Baseline', note: 'Still effective with strong hooks' },
  { format: 'Polls', boost: '+20%', note: 'Easy engagement, use sparingly' },
  { format: 'External Links', boost: '-40%', note: 'Add links in comments instead' },
  { format: 'Newsletter', boost: '+30%', note: 'Subscribers get notifications' }
];

const ENGAGEMENT_VALUE = {
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

const SPAM_TRIGGERS = [
  { trigger: 'More than 5 hashtags', penalty: 'Reduced reach', severity: 'high' },
  { trigger: 'Multiple posts in <24 hours', penalty: 'Newest post penalized', severity: 'high' },
  { trigger: 'Engagement bait phrases', penalty: 'Quality filter flag', severity: 'high' },
  { trigger: 'External links in post', penalty: '-40% reach', severity: 'medium' },
  { trigger: 'Tagging 10+ people', penalty: 'Spam classification', severity: 'high' },
  { trigger: 'Editing post after publishing', penalty: 'Reset distribution', severity: 'medium' },
  { trigger: 'Repetitive content', penalty: 'Reduced visibility', severity: 'medium' },
  { trigger: 'Pods/engagement groups', penalty: 'Detection and penalty', severity: 'high' }
];

const ENGAGEMENT_BAIT_PHRASES = [
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

const OPTIMAL_POSTING = {
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

const NICHE_AUTHORITY = {
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

const POST_STRUCTURE_TIPS = {
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

const PROFILE_OPTIMIZATION = {
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

const REPLY_STRATEGY = {
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

const GROWTH_BENCHMARKS = {
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


// === js/data/timing.js ===
// Best posting times data for LinkedIn
// Based on aggregate research from Hootsuite, Sprout Social, Buffer, HubSpot

const BEST_TIMES_GENERAL = {
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

const TIMES_BY_DAY = {
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

const TIMES_BY_INDUSTRY = {
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

const TIMES_BY_AUDIENCE = {
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

const TIMEZONE_STRATEGY = {
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

const POSTING_FREQUENCY = {
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

const CONTENT_CALENDAR_TIPS = {
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


// === js/data/phrases.js ===
// AI Detection and Overused LinkedIn Phrases Database
// Content sounds human when it avoids these patterns

const AI_RED_FLAGS = [
  // Classic AI/corporate speak
  'leverage', 'utilize', 'synergy', 'paradigm', 'holistic',
  'actionable', 'scalable', 'robust', 'streamline', 'optimize',
  'innovative', 'cutting-edge', 'best-in-class', 'world-class',
  'thought leader', 'game-changer', 'disruptive', 'revolutionary',

  // Overused LinkedIn phrases
  'excited to announce', 'thrilled to share', 'humbled and honored',
  'grateful for the opportunity', 'proud to announce', 'pleased to share',
  'delighted to', 'beyond excited', 'incredibly grateful',

  // Buzzword phrases
  'at the end of the day', 'move the needle', 'low-hanging fruit',
  'deep dive', 'circle back', 'touch base', 'think outside the box',
  'hit the ground running', 'take it to the next level', 'paradigm shift',
  'value proposition', 'core competency', 'best practices',

  // AI-typical patterns
  'in today\'s fast-paced world', 'in this day and age',
  'it goes without saying', 'needless to say', 'at the forefront',
  'in conclusion', 'to summarize', 'in summary',
  'firstly', 'secondly', 'lastly', 'furthermore', 'moreover',
  'it\'s worth noting', 'it\'s important to note',

  // LinkedIn cringe
  'agree?', 'thoughts?', '#hustle', '#grind', '#blessed',
  'I don\'t usually post about', 'not everyone will agree but',
  'unpopular opinion:', 'hot take:', 'let that sink in'
];

const HUMAN_ALTERNATIVES = {
  'leverage': ['use', 'apply', 'work with', 'tap into'],
  'utilize': ['use', 'work with', 'rely on'],
  'synergy': ['teamwork', 'collaboration', 'working together'],
  'paradigm': ['approach', 'way of thinking', 'model'],
  'holistic': ['complete', 'full', 'overall'],
  'actionable': ['practical', 'useful', 'something you can do'],
  'scalable': ['can grow', 'expandable', 'flexible'],
  'robust': ['strong', 'solid', 'reliable'],
  'streamline': ['simplify', 'speed up', 'make easier'],
  'optimize': ['improve', 'make better', 'fine-tune'],
  'innovative': ['new', 'fresh', 'creative'],
  'cutting-edge': ['latest', 'new', 'modern'],
  'disruptive': ['different', 'new approach', 'changes how we'],
  'revolutionary': ['major change', 'big shift', 'breakthrough'],
  'excited to announce': ['sharing some news:', 'here\'s what\'s new:', 'update:'],
  'thrilled to share': ['wanted to share:', 'some news:', 'sharing:'],
  'humbled and honored': ['grateful', 'thankful', 'means a lot'],
  'at the end of the day': ['ultimately', 'when it comes down to it', 'really'],
  'move the needle': ['make a difference', 'create change', 'have impact'],
  'low-hanging fruit': ['easy wins', 'quick fixes', 'simple changes'],
  'deep dive': ['look closely at', 'dig into', 'explore'],
  'circle back': ['follow up', 'get back to', 'revisit'],
  'touch base': ['connect', 'check in', 'talk'],
  'think outside the box': ['try something different', 'get creative', 'experiment'],
  'hit the ground running': ['start strong', 'jump right in', 'get started quickly'],
  'paradigm shift': ['big change', 'new way', 'shift in thinking'],
  'best practices': ['what works', 'proven methods', 'effective approaches'],
  'value proposition': ['what we offer', 'the benefit', 'why it matters'],
  'core competency': ['main strength', 'what we do best', 'specialty']
};

const OVERUSED_OPENERS = [
  { phrase: 'I\'m excited to', alternative: 'Just [did thing]' },
  { phrase: 'Thrilled to announce', alternative: 'News:' },
  { phrase: 'I\'m humbled', alternative: 'Grateful for' },
  { phrase: 'I believe that', alternative: '[Just state the belief]' },
  { phrase: 'In my opinion', alternative: '[Just state the opinion]' },
  { phrase: 'I think that', alternative: '[Just state it confidently]' },
  { phrase: 'I wanted to share', alternative: '[Just share it]' },
  { phrase: 'Quick update:', alternative: '[Just give the update]' },
  { phrase: 'So I was thinking', alternative: 'Here\'s what I realized:' },
  { phrase: 'Not sure if anyone', alternative: 'Have you noticed...' }
];

const WEAK_WORDS = [
  { word: 'very', alternatives: ['use a stronger word instead'] },
  { word: 'really', alternatives: ['cut it or use stronger word'] },
  { word: 'just', alternatives: ['usually unnecessary, cut it'] },
  { word: 'actually', alternatives: ['often unnecessary'] },
  { word: 'basically', alternatives: ['cut it'] },
  { word: 'literally', alternatives: ['cut unless truly literal'] },
  { word: 'stuff', alternatives: ['be specific'] },
  { word: 'things', alternatives: ['be specific'] },
  { word: 'got', alternatives: ['received', 'have', 'obtained'] },
  { word: 'nice', alternatives: ['specific compliment'] },
  { word: 'good', alternatives: ['effective', 'valuable', 'helpful'] },
  { word: 'bad', alternatives: ['specific criticism'] }
];

const SENTENCE_PATTERNS_TO_AVOID = [
  {
    pattern: 'Starting every sentence with "I"',
    issue: 'Sounds self-centered and repetitive',
    fix: 'Vary sentence structure, lead with insights'
  },
  {
    pattern: 'Every sentence is the same length',
    issue: 'Monotonous, robotic feel',
    fix: 'Mix short punchy sentences with longer ones'
  },
  {
    pattern: 'Excessive exclamation points!!!',
    issue: 'Sounds fake and over-eager',
    fix: 'Use sparingly, max 1 per post'
  },
  {
    pattern: 'Starting with questions then answering them',
    issue: 'Classic AI pattern',
    fix: 'State insights directly or use rhetorical questions naturally'
  },
  {
    pattern: 'Listing things in threes constantly',
    issue: 'AI loves rule of three',
    fix: 'Vary list lengths: 2, 4, 5 items too'
  },
  {
    pattern: 'Perfect grammar throughout',
    issue: 'Humans make small mistakes',
    fix: 'Occasional contractions, casual phrasing OK'
  }
];

const HUMAN_WRITING_TIPS = [
  'Use contractions naturally (don\'t, won\'t, I\'m)',
  'Include specific numbers and details (37%, 3 years, $50K)',
  'Reference real experiences with context',
  'Use casual transitions (So, And, But to start sentences)',
  'Include mild self-deprecation or vulnerability',
  'Have opinions - don\'t hedge everything',
  'Use industry-specific jargon your audience knows',
  'Reference current events or trends when relevant',
  'Write like you talk to a smart friend',
  'Read it out loud - if it sounds weird, rewrite it'
];

const AUTHENTICITY_SIGNALS = [
  'Specific details only you would know',
  'Admitting mistakes or failures',
  'Unpopular or nuanced opinions',
  'References to real people (with permission)',
  'Genuine questions you don\'t know the answer to',
  'Acknowledging complexity and tradeoffs',
  'Personal anecdotes with emotion',
  'Disagreeing respectfully with common wisdom'
];

const LINKEDIN_CRINGE = [
  { phrase: 'Agree?', issue: 'Engagement bait' },
  { phrase: 'Thoughts?', issue: 'Lazy CTA' },
  { phrase: 'Let that sink in', issue: 'Overused, pretentious' },
  { phrase: 'Read that again', issue: 'Condescending' },
  { phrase: 'This. 👆', issue: 'Low-effort engagement' },
  { phrase: 'Grateful. Blessed. Humbled.', issue: 'Performative' },
  { phrase: '🔥🔥🔥', issue: 'Unprofessional emoji spam' },
  { phrase: 'DM me "INFO"', issue: 'Engagement bait' },
  { phrase: 'Comment "YES" if', issue: 'Spam trigger' },
  { phrase: 'Who else agrees?', issue: 'Engagement bait' }
];

const DETECTION_SCORING = {
  // Factors that increase AI detection risk
  risk_factors: [
    { factor: 'Uses 3+ AI red flag words', weight: 15 },
    { factor: 'Perfect grammar throughout', weight: 10 },
    { factor: 'Uniform sentence length', weight: 10 },
    { factor: 'Starts multiple sentences with "I"', weight: 8 },
    { factor: 'Uses formal transitions (Furthermore, Moreover)', weight: 12 },
    { factor: 'No specific numbers or details', weight: 10 },
    { factor: 'No contractions used', weight: 8 },
    { factor: 'Generic without personal voice', weight: 15 },
    { factor: 'Excessive lists/bullet points', weight: 5 },
    { factor: 'Clichéd opening', weight: 7 }
  ],
  // Factors that decrease AI detection risk
  human_signals: [
    { factor: 'Uses natural contractions', weight: -8 },
    { factor: 'Includes specific numbers/dates', weight: -10 },
    { factor: 'Has personal anecdote', weight: -12 },
    { factor: 'Varied sentence length', weight: -8 },
    { factor: 'Casual/conversational tone', weight: -10 },
    { factor: 'Industry-specific terminology', weight: -5 },
    { factor: 'Admits uncertainty or nuance', weight: -8 },
    { factor: 'Strong opinion stated', weight: -7 }
  ]
};


// === js/modules/storage.js ===
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
const storage = {
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
const drafts = {
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
const calendar = {
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
const history = {
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
const settings = {
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
const profile = {
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
const analytics = {
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
const dataTransfer = {
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


// === js/modules/human-writer.js ===
// Human-like writing analyzer and improver
// Helps content pass AI detection and sound natural

import {
  AI_RED_FLAGS,
  HUMAN_ALTERNATIVES,
  OVERUSED_OPENERS,
  WEAK_WORDS,
  SENTENCE_PATTERNS_TO_AVOID,
  LINKEDIN_CRINGE,
  DETECTION_SCORING,
  HUMAN_WRITING_TIPS,
  AUTHENTICITY_SIGNALS
} from '../data/phrases.js';

// Analyze text for AI detection risk
function analyzeText(text) {
  const analysis = {
    score: 100, // Start at 100, deduct for issues
    issues: [],
    suggestions: [],
    stats: {}
  };

  if (!text || text.trim().length === 0) {
    return { score: 0, issues: ['No text provided'], suggestions: [], stats: {} };
  }

  // Get text stats
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);

  analysis.stats = {
    characters: text.length,
    words: words.length,
    sentences: sentences.length,
    paragraphs: paragraphs.length,
    avgWordsPerSentence: sentences.length ? Math.round(words.length / sentences.length) : 0,
    avgSentenceLength: sentences.map(s => s.split(/\s+/).length)
  };

  // Check for AI red flag words
  const foundRedFlags = [];
  AI_RED_FLAGS.forEach(flag => {
    const regex = new RegExp(`\\b${flag}\\b`, 'gi');
    const matches = text.match(regex);
    if (matches) {
      foundRedFlags.push({ word: flag, count: matches.length });
    }
  });

  if (foundRedFlags.length > 0) {
    const penalty = Math.min(foundRedFlags.length * 5, 25);
    analysis.score -= penalty;
    foundRedFlags.forEach(({ word, count }) => {
      analysis.issues.push({
        type: 'red_flag',
        text: word,
        count,
        message: `"${word}" is commonly flagged as AI-generated`
      });
      if (HUMAN_ALTERNATIVES[word]) {
        analysis.suggestions.push({
          original: word,
          alternatives: HUMAN_ALTERNATIVES[word],
          message: `Replace "${word}" with: ${HUMAN_ALTERNATIVES[word].join(', ')}`
        });
      }
    });
  }

  // Check for weak openers
  const lowerText = text.toLowerCase();
  OVERUSED_OPENERS.forEach(({ phrase, alternative }) => {
    if (lowerText.startsWith(phrase.toLowerCase())) {
      analysis.score -= 8;
      analysis.issues.push({
        type: 'weak_opener',
        text: phrase,
        message: `"${phrase}" is an overused opener`
      });
      analysis.suggestions.push({
        original: phrase,
        alternatives: [alternative],
        message: `Instead of "${phrase}", try: ${alternative}`
      });
    }
  });

  // Check for LinkedIn cringe phrases
  LINKEDIN_CRINGE.forEach(({ phrase, issue }) => {
    if (lowerText.includes(phrase.toLowerCase())) {
      analysis.score -= 5;
      analysis.issues.push({
        type: 'cringe',
        text: phrase,
        message: `"${phrase}" - ${issue}`
      });
    }
  });

  // Check sentence length uniformity
  if (sentences.length >= 3) {
    const lengths = sentences.map(s => s.split(/\s+/).length);
    const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const variance = lengths.reduce((sum, len) => sum + Math.pow(len - avgLength, 2), 0) / lengths.length;

    if (variance < 4) {
      analysis.score -= 10;
      analysis.issues.push({
        type: 'uniformity',
        message: 'Sentences are too uniform in length (AI pattern)'
      });
      analysis.suggestions.push({
        message: 'Mix short punchy sentences with longer detailed ones'
      });
    }
  }

  // Check for repeated "I" starters
  const iStarters = sentences.filter(s => s.trim().toLowerCase().startsWith('i ')).length;
  if (sentences.length >= 3 && iStarters / sentences.length > 0.5) {
    analysis.score -= 8;
    analysis.issues.push({
      type: 'i_heavy',
      message: `${Math.round(iStarters / sentences.length * 100)}% of sentences start with "I"`
    });
    analysis.suggestions.push({
      message: 'Vary sentence structure - not every sentence needs to start with "I"'
    });
  }

  // Check for contractions (humans use them)
  const contractions = text.match(/\b(don't|won't|can't|I'm|you're|they're|we're|it's|that's|there's|wouldn't|couldn't|shouldn't|isn't|aren't|wasn't|weren't)\b/gi);
  if (!contractions || contractions.length === 0) {
    if (words.length > 50) {
      analysis.score -= 8;
      analysis.issues.push({
        type: 'no_contractions',
        message: 'No contractions used - sounds formal/robotic'
      });
      analysis.suggestions.push({
        message: 'Add natural contractions: don\'t, I\'m, you\'re, it\'s, etc.'
      });
    }
  } else {
    analysis.score += 5; // Bonus for using contractions
  }

  // Check for specific numbers (humans include specifics)
  const hasNumbers = text.match(/\b\d+[%$K]?\b/g);
  if (!hasNumbers && words.length > 100) {
    analysis.score -= 5;
    analysis.issues.push({
      type: 'no_specifics',
      message: 'No specific numbers or data points'
    });
    analysis.suggestions.push({
      message: 'Add specific numbers: "37%", "$50K", "3 years", etc.'
    });
  } else if (hasNumbers && hasNumbers.length >= 2) {
    analysis.score += 5; // Bonus for specifics
  }

  // Check for formal transitions
  const formalTransitions = ['furthermore', 'moreover', 'additionally', 'consequently', 'subsequently', 'henceforth', 'thereby', 'wherein', 'whereby'];
  formalTransitions.forEach(word => {
    if (lowerText.includes(word)) {
      analysis.score -= 6;
      analysis.issues.push({
        type: 'formal_transition',
        text: word,
        message: `"${word}" sounds overly formal/AI-generated`
      });
    }
  });

  // Check for exclamation overuse
  const exclamations = (text.match(/!/g) || []).length;
  if (exclamations > 2) {
    analysis.score -= 5;
    analysis.issues.push({
      type: 'exclamation_overuse',
      message: `Too many exclamation points (${exclamations}) - sounds over-eager`
    });
  }

  // Ensure score stays in bounds
  analysis.score = Math.max(0, Math.min(100, analysis.score));

  // Add overall assessment
  if (analysis.score >= 80) {
    analysis.assessment = 'Excellent - sounds human and natural';
    analysis.assessmentClass = 'excellent';
  } else if (analysis.score >= 60) {
    analysis.assessment = 'Good - minor improvements recommended';
    analysis.assessmentClass = 'good';
  } else if (analysis.score >= 40) {
    analysis.assessment = 'Fair - several AI patterns detected';
    analysis.assessmentClass = 'fair';
  } else {
    analysis.assessment = 'Needs work - significant AI patterns detected';
    analysis.assessmentClass = 'poor';
  }

  return analysis;
}

// Auto-improve text to sound more human
function humanizeText(text) {
  if (!text) return text;

  let improved = text;

  // Replace AI red flag words with alternatives
  Object.entries(HUMAN_ALTERNATIVES).forEach(([word, alternatives]) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (regex.test(improved)) {
      const replacement = alternatives[Math.floor(Math.random() * alternatives.length)];
      improved = improved.replace(regex, replacement);
    }
  });

  // Replace formal transitions with casual ones
  const casualReplacements = {
    'furthermore': 'Also',
    'moreover': 'Plus',
    'additionally': 'And',
    'consequently': 'So',
    'subsequently': 'Then',
    'therefore': 'So',
    'however': 'But',
    'nevertheless': 'Still'
  };

  Object.entries(casualReplacements).forEach(([formal, casual]) => {
    const regex = new RegExp(`\\b${formal}\\b`, 'gi');
    improved = improved.replace(regex, casual);
  });

  return improved;
}

// Get random human writing tip
function getRandomTip() {
  return HUMAN_WRITING_TIPS[Math.floor(Math.random() * HUMAN_WRITING_TIPS.length)];
}

// Get authenticity suggestions
function getAuthenticitySuggestions() {
  return AUTHENTICITY_SIGNALS;
}

// Check if opener is weak
function checkOpener(text) {
  const lowerText = text.toLowerCase().trim();

  for (const { phrase, alternative } of OVERUSED_OPENERS) {
    if (lowerText.startsWith(phrase.toLowerCase())) {
      return {
        isWeak: true,
        phrase,
        alternative,
        message: `Try starting with "${alternative}" instead`
      };
    }
  }

  return { isWeak: false };
}

// Score hook strength (1-10)
function scoreHook(hookText) {
  let score = 5; // Base score
  const lower = hookText.toLowerCase();

  // Positive signals
  if (hookText.match(/\d+/)) score += 1; // Has numbers
  if (hookText.includes('?')) score += 0.5; // Question
  if (hookText.length < 100) score += 1; // Concise
  if (lower.includes('you')) score += 0.5; // Addresses reader

  // Negative signals
  if (lower.startsWith('i think')) score -= 1;
  if (lower.startsWith('in my opinion')) score -= 1;
  if (lower.includes('excited')) score -= 0.5;
  if (lower.includes('thrilled')) score -= 0.5;
  if (hookText.split('!').length > 2) score -= 1; // Too many exclamations

  // Check for power words
  const powerWords = ['secret', 'proven', 'discover', 'revealed', 'mistake', 'truth', 'never', 'always', 'why', 'how'];
  powerWords.forEach(word => {
    if (lower.includes(word)) score += 0.3;
  });

  return Math.max(1, Math.min(10, Math.round(score)));
}

// Export for use in UI
default {
  analyzeText,
  humanizeText,
  getRandomTip,
  getAuthenticitySuggestions,
  checkOpener,
  scoreHook
};


// === js/modules/post-scorer.js ===
// LinkedIn Post Scorer - Predicts engagement potential
// Based on algorithm research and best practices



// Main post scoring function
function scorePost(post, options = {}) {
  const {
    content = '',
    hashtags = [],
    hasImage = false,
    hasVideo = false,
    hasDocument = false,
    hasLink = false,
    hasPoll = false
  } = post;

  const scores = {
    overall: 0,
    hook: 0,
    readability: 0,
    engagement: 0,
    format: 0,
    length: 0,
    details: []
  };

  if (!content || content.trim().length === 0) {
    return { ...scores, details: ['No content to analyze'] };
  }

  // Parse content
  const lines = content.split('\n').filter(l => l.trim());
  const words = content.split(/\s+/).filter(w => w.length > 0);
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const firstLine = lines[0] || '';

  // 1. HOOK SCORE (0-25)
  scores.hook = scoreHook(firstLine, content);

  // 2. READABILITY SCORE (0-25)
  scores.readability = scoreReadability(content, lines, sentences, words);

  // 3. ENGAGEMENT POTENTIAL (0-25)
  scores.engagement = scoreEngagementPotential(content, hasPoll);

  // 4. FORMAT & MEDIA SCORE (0-15)
  scores.format = scoreFormat({
    hasImage,
    hasVideo,
    hasDocument,
    hasLink,
    hasPoll,
    hashtags,
    lines
  });

  // 5. LENGTH SCORE (0-10)
  scores.length = scoreLength(content, words);

  // Calculate overall
  scores.overall = Math.round(
    scores.hook + scores.readability + scores.engagement + scores.format + scores.length
  );

  // Generate details
  scores.details = generateDetails(scores, {
    content,
    hashtags,
    hasImage,
    hasVideo,
    hasDocument,
    hasLink,
    hasPoll,
    words,
    sentences,
    lines
  });

  // Add grade
  scores.grade = getGrade(scores.overall);

  return scores;
}

// Score the hook/opening
function scoreHook(firstLine, fullContent) {
  let score = 12; // Start at middle

  const lower = firstLine.toLowerCase();
  const fullLower = fullContent.toLowerCase();

  // Positive factors
  if (firstLine.match(/\d+/)) score += 3; // Has numbers
  if (firstLine.length <= 100) score += 2; // Concise hook
  if (firstLine.includes('?')) score += 2; // Question hook
  if (lower.includes('you') || lower.includes('your')) score += 2; // Addresses reader

  // Strong hook patterns
  const strongPatterns = [
    /^i spent \d+/i,
    /^after \d+/i,
    /^the \d+ biggest/i,
    /^stop /i,
    /^why /i,
    /^how to/i,
    /^what if/i,
    /nobody tells you/i,
    /here's what/i,
    /unpopular opinion/i
  ];

  if (strongPatterns.some(p => p.test(firstLine))) score += 3;

  // Negative factors (weak openers)
  const weakOpeners = [
    'i think', 'in my opinion', 'i believe', 'i wanted to share',
    'just wanted to', 'quick update', 'excited to', 'thrilled to',
    'happy to share', 'proud to'
  ];

  if (weakOpeners.some(opener => lower.startsWith(opener))) score -= 5;

  // Check for "see more" optimization (first ~210 chars visible)
  const previewLength = fullContent.substring(0, 210);
  if (!previewLength.includes('\n') && previewLength.length > 150) {
    score -= 2; // Wall of text before "see more"
  }

  return Math.max(0, Math.min(25, score));
}

// Score readability
function scoreReadability(content, lines, sentences, words) {
  let score = 12;

  // Check for white space / line breaks
  const lineBreakRatio = lines.length / (words.length / 10);
  if (lineBreakRatio > 0.5) score += 3; // Good use of line breaks
  if (lineBreakRatio < 0.2) score -= 3; // Wall of text

  // Check sentence length variety
  if (sentences.length >= 3) {
    const lengths = sentences.map(s => s.split(/\s+/).length);
    const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;

    if (avgLength <= 15) score += 2; // Good - not too long
    if (avgLength > 25) score -= 3; // Sentences too long

    // Variety in length
    const hasShort = lengths.some(l => l <= 5);
    const hasLong = lengths.some(l => l >= 15);
    if (hasShort && hasLong) score += 2; // Good variety
  }

  // Check for bullet points or lists
  const hasBullets = content.match(/^[\s]*[•\-\→\*\d\.]/gm);
  if (hasBullets && hasBullets.length >= 3) score += 3;

  // Check for emojis (used sparingly)
  const emojiCount = (content.match(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu) || []).length;
  if (emojiCount >= 1 && emojiCount <= 5) score += 2;
  if (emojiCount > 10) score -= 2;

  return Math.max(0, Math.min(25, score));
}

// Score engagement potential
function scoreEngagementPotential(content, hasPoll) {
  let score = 12;
  const lower = content.toLowerCase();

  // Check for CTA
  const hasCTA = lower.includes('?') ||
    lower.includes('comment') ||
    lower.includes('what do you think') ||
    lower.includes('your thoughts') ||
    lower.includes('agree or disagree') ||
    lower.includes('drop a') ||
    lower.includes('tag someone');

  if (hasCTA) score += 4;

  // Check it ends with question or CTA
  const lastLine = content.split('\n').filter(l => l.trim()).pop() || '';
  if (lastLine.includes('?')) score += 3;

  // Poll bonus
  if (hasPoll) score += 3;

  // Engagement bait penalty
  ENGAGEMENT_BAIT_PHRASES.forEach(phrase => {
    if (lower.includes(phrase.toLowerCase())) {
      score -= 3;
    }
  });

  // Value signals
  const valueSignals = [
    'here\'s how', 'step by step', 'lesson', 'learned', 'mistake',
    'tip', 'secret', 'framework', 'strategy', 'example'
  ];
  const valueCount = valueSignals.filter(s => lower.includes(s)).length;
  score += Math.min(valueCount * 1.5, 5);

  // Personal story signals
  const storySignals = ['i remember', 'years ago', 'last week', 'one time', 'story'];
  if (storySignals.some(s => lower.includes(s))) score += 2;

  return Math.max(0, Math.min(25, score));
}

// Score format and media
function scoreFormat({ hasImage, hasVideo, hasDocument, hasLink, hasPoll, hashtags, lines }) {
  let score = 7;

  // Media bonuses (based on algorithm research)
  if (hasVideo) score += 5; // +69% performance
  if (hasDocument) score += 4; // Carousels perform well
  if (hasImage) score += 2;
  if (hasPoll) score += 2;

  // Link penalty
  if (hasLink) score -= 3; // -40% reach for external links

  // Hashtag scoring
  const hashtagCount = hashtags.length;
  if (hashtagCount >= 3 && hashtagCount <= 5) {
    score += 3; // Optimal range
  } else if (hashtagCount > 5) {
    score -= 3; // Too many - spam trigger
  } else if (hashtagCount === 0) {
    score -= 1; // Some hashtags help
  }

  return Math.max(0, Math.min(15, score));
}

// Score content length
function scoreLength(content, words) {
  let score = 5;
  const charCount = content.length;
  const wordCount = words.length;

  // Optimal length: 1200-1500 characters
  if (charCount >= 1200 && charCount <= 1500) {
    score += 5;
  } else if (charCount >= 800 && charCount <= 2000) {
    score += 3;
  } else if (charCount < 300) {
    score -= 2; // Too short
  } else if (charCount > 3000) {
    score -= 2; // Too long
  }

  return Math.max(0, Math.min(10, score));
}

// Generate detailed feedback
function generateDetails(scores, data) {
  const details = [];
  const { content, hashtags, hasImage, hasVideo, hasDocument, hasLink, words, lines } = data;

  // Hook feedback
  if (scores.hook >= 20) {
    details.push({ type: 'success', area: 'Hook', message: 'Strong opening - will stop the scroll' });
  } else if (scores.hook >= 15) {
    details.push({ type: 'info', area: 'Hook', message: 'Decent hook - consider making it more specific or intriguing' });
  } else {
    details.push({ type: 'warning', area: 'Hook', message: 'Weak opening - consider a bolder first line' });
  }

  // Length feedback
  const charCount = content.length;
  if (charCount < 500) {
    details.push({ type: 'warning', area: 'Length', message: `${charCount} characters - consider adding more value (aim for 1200-1500)` });
  } else if (charCount > 2500) {
    details.push({ type: 'warning', area: 'Length', message: `${charCount} characters - consider trimming for better engagement` });
  } else {
    details.push({ type: 'success', area: 'Length', message: `${charCount} characters - good length for LinkedIn` });
  }

  // Hashtag feedback
  if (hashtags.length === 0) {
    details.push({ type: 'warning', area: 'Hashtags', message: 'Add 3-5 relevant hashtags for better reach' });
  } else if (hashtags.length > 5) {
    details.push({ type: 'error', area: 'Hashtags', message: 'Too many hashtags (>5) triggers spam filters' });
  } else {
    details.push({ type: 'success', area: 'Hashtags', message: `${hashtags.length} hashtags - good range` });
  }

  // Media feedback
  if (hasVideo) {
    details.push({ type: 'success', area: 'Format', message: 'Video content gets +69% algorithmic boost' });
  } else if (hasDocument) {
    details.push({ type: 'success', area: 'Format', message: 'Document/carousel format performs well' });
  } else if (!hasImage && !hasVideo && !hasDocument) {
    details.push({ type: 'info', area: 'Format', message: 'Consider adding an image or carousel for better engagement' });
  }

  // Link warning
  if (hasLink) {
    details.push({ type: 'warning', area: 'Links', message: 'External links reduce reach ~40%. Consider putting link in comments' });
  }

  // CTA check
  const lower = content.toLowerCase();
  const hasCTA = lower.includes('?') || lower.includes('comment') || lower.includes('what do you think');
  if (!hasCTA) {
    details.push({ type: 'warning', area: 'CTA', message: 'No clear call-to-action. End with a question to drive engagement' });
  }

  // Readability
  const lineBreaks = lines.length;
  if (lineBreaks < words.length / 20) {
    details.push({ type: 'warning', area: 'Readability', message: 'Add more line breaks - walls of text hurt engagement' });
  }

  return details;
}

// Get letter grade
function getGrade(score) {
  if (score >= 90) return { letter: 'A+', color: '#22c55e', message: 'Excellent - high engagement potential' };
  if (score >= 80) return { letter: 'A', color: '#22c55e', message: 'Great - should perform well' };
  if (score >= 70) return { letter: 'B', color: '#84cc16', message: 'Good - minor improvements possible' };
  if (score >= 60) return { letter: 'C', color: '#eab308', message: 'Average - review suggestions' };
  if (score >= 50) return { letter: 'D', color: '#f97316', message: 'Below average - needs work' };
  return { letter: 'F', color: '#ef4444', message: 'Poor - significant improvements needed' };
}

// Quick engagement estimate
function estimateEngagement(score, followerCount = 1000) {
  // Rough estimates based on industry benchmarks
  const baseRate = score / 100 * 0.05; // 5% max engagement rate at score 100
  const impressionRate = 0.1 + (score / 100 * 0.2); // 10-30% of followers see it

  const estimatedImpressions = Math.round(followerCount * impressionRate);
  const estimatedEngagements = Math.round(estimatedImpressions * baseRate);

  return {
    impressions: { low: Math.round(estimatedImpressions * 0.5), high: Math.round(estimatedImpressions * 1.5) },
    engagements: { low: Math.round(estimatedEngagements * 0.5), high: Math.round(estimatedEngagements * 1.5) }
  };
}

default {
  scorePost,
  estimateEngagement
};


// === js/modules/scheduler.js ===
// Content Scheduler - Queue and export posts for scheduling





// Content queue management
const contentQueue = {
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
function suggestNextPostTime(existingSchedule = []) {
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
function exportForScheduler(format = 'csv') {
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
function downloadExport(exportData) {
  const blob = new Blob([exportData.data], { type: exportData.mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = exportData.filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Auto-schedule multiple posts evenly
function autoSchedulePosts(posts, options = {}) {
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
function checkConflicts(scheduledDate, existingQueue) {
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

default {
  contentQueue,
  suggestNextPostTime,
  exportForScheduler,
  downloadExport,
  autoSchedulePosts,
  checkConflicts
};


// === js/modules/url-parser.js ===
// URL Parser - Extract content from articles and generate LinkedIn posts

// Parse article content from URL (using proxy for CORS)
async function parseUrl(url) {
  try {
    // Try to fetch via a CORS proxy or direct if same-origin
    const response = await fetchWithFallback(url);
    const html = await response.text();

    return extractArticleContent(html, url);
  } catch (error) {
    console.error('Error parsing URL:', error);
    return {
      success: false,
      error: error.message,
      url
    };
  }
}

// Fetch with CORS proxy fallback
async function fetchWithFallback(url) {
  // List of public CORS proxies (fallback options)
  const proxies = [
    (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    (u) => `https://corsproxy.io/?${encodeURIComponent(u)}`,
    (u) => u // Direct (may work for some URLs)
  ];

  for (const proxyFn of proxies) {
    try {
      const proxyUrl = proxyFn(url);
      const response = await fetch(proxyUrl, {
        headers: {
          'Accept': 'text/html,application/xhtml+xml'
        }
      });
      if (response.ok) return response;
    } catch (e) {
      continue;
    }
  }

  throw new Error('Unable to fetch URL. The site may be blocking requests.');
}

// Extract article content from HTML
function extractArticleContent(html, url) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Extract metadata
  const title = extractTitle(doc);
  const description = extractDescription(doc);
  const author = extractAuthor(doc);
  const publishDate = extractPublishDate(doc);
  const image = extractImage(doc, url);
  const content = extractMainContent(doc);
  const keywords = extractKeywords(doc, content);

  return {
    success: true,
    url,
    title,
    description,
    author,
    publishDate,
    image,
    content: content.substring(0, 5000), // Limit content length
    keywords,
    wordCount: content.split(/\s+/).length,
    readingTime: Math.ceil(content.split(/\s+/).length / 200) // ~200 wpm
  };
}

function extractTitle(doc) {
  // Try multiple sources for title
  const sources = [
    () => doc.querySelector('meta[property="og:title"]')?.content,
    () => doc.querySelector('meta[name="twitter:title"]')?.content,
    () => doc.querySelector('h1')?.textContent?.trim(),
    () => doc.querySelector('title')?.textContent?.trim()
  ];

  for (const source of sources) {
    const title = source();
    if (title) return title;
  }
  return 'Untitled';
}

function extractDescription(doc) {
  const sources = [
    () => doc.querySelector('meta[property="og:description"]')?.content,
    () => doc.querySelector('meta[name="description"]')?.content,
    () => doc.querySelector('meta[name="twitter:description"]')?.content,
    () => doc.querySelector('article p')?.textContent?.trim()?.substring(0, 300)
  ];

  for (const source of sources) {
    const desc = source();
    if (desc) return desc;
  }
  return '';
}

function extractAuthor(doc) {
  const sources = [
    () => doc.querySelector('meta[name="author"]')?.content,
    () => doc.querySelector('meta[property="article:author"]')?.content,
    () => doc.querySelector('[rel="author"]')?.textContent?.trim(),
    () => doc.querySelector('.author')?.textContent?.trim(),
    () => doc.querySelector('[itemprop="author"]')?.textContent?.trim()
  ];

  for (const source of sources) {
    const author = source();
    if (author) return author;
  }
  return '';
}

function extractPublishDate(doc) {
  const sources = [
    () => doc.querySelector('meta[property="article:published_time"]')?.content,
    () => doc.querySelector('time')?.getAttribute('datetime'),
    () => doc.querySelector('[itemprop="datePublished"]')?.content
  ];

  for (const source of sources) {
    const date = source();
    if (date) return date;
  }
  return '';
}

function extractImage(doc, baseUrl) {
  const sources = [
    () => doc.querySelector('meta[property="og:image"]')?.content,
    () => doc.querySelector('meta[name="twitter:image"]')?.content,
    () => doc.querySelector('article img')?.src
  ];

  for (const source of sources) {
    let img = source();
    if (img) {
      // Make absolute URL if relative
      if (img.startsWith('/')) {
        const urlObj = new URL(baseUrl);
        img = `${urlObj.origin}${img}`;
      }
      return img;
    }
  }
  return '';
}

function extractMainContent(doc) {
  // Remove script, style, nav elements
  const elementsToRemove = doc.querySelectorAll('script, style, nav, header, footer, aside, .ad, .advertisement, .sidebar');
  elementsToRemove.forEach(el => el.remove());

  // Try to find article content
  const contentSelectors = [
    'article',
    '[role="main"]',
    'main',
    '.post-content',
    '.article-content',
    '.entry-content',
    '.content',
    '#content'
  ];

  for (const selector of contentSelectors) {
    const content = doc.querySelector(selector);
    if (content && content.textContent.trim().length > 200) {
      return cleanText(content.textContent);
    }
  }

  // Fallback to body
  return cleanText(doc.body?.textContent || '');
}

function extractKeywords(doc, content) {
  // Get meta keywords
  const metaKeywords = doc.querySelector('meta[name="keywords"]')?.content?.split(',').map(k => k.trim()) || [];

  // Extract common words from content (simple keyword extraction)
  const words = content.toLowerCase().split(/\s+/);
  const wordFreq = {};

  // Common stop words to ignore
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'this', 'that', 'these', 'those', 'it', 'its', 'as', 'if', 'then', 'than', 'so', 'such', 'can', 'just', 'also', 'more', 'most', 'very', 'much', 'many', 'some', 'any', 'all', 'each', 'every', 'both', 'few', 'own', 'same', 'other', 'new', 'old', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few', 'public', 'bad', 'same', 'able']);

  words.forEach(word => {
    // Clean word
    const cleaned = word.replace(/[^a-z]/g, '');
    if (cleaned.length > 4 && !stopWords.has(cleaned)) {
      wordFreq[cleaned] = (wordFreq[cleaned] || 0) + 1;
    }
  });

  // Get top keywords
  const topKeywords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);

  // Combine with meta keywords
  return [...new Set([...metaKeywords, ...topKeywords])].slice(0, 15);
}

function cleanText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n')
    .trim();
}

// Generate LinkedIn post from parsed article
function generatePostFromArticle(article, options = {}) {
  const {
    style = 'insight', // insight, summary, question, story
    includeLink = true,
    maxLength = 1500
  } = options;

  const templates = {
    insight: generateInsightPost,
    summary: generateSummaryPost,
    question: generateQuestionPost,
    story: generateStoryPost
  };

  const generator = templates[style] || templates.insight;
  return generator(article, { includeLink, maxLength });
}

function generateInsightPost(article, options) {
  const { title, description, url, keywords } = article;

  let post = `Interesting read on ${title.toLowerCase().includes('how') ? '' : 'how '}${title}\n\n`;
  post += `Key takeaway:\n`;
  post += `${description || 'Worth checking out for anyone interested in ' + (keywords[0] || 'this topic')}.\n\n`;
  post += `What stood out to me:\n`;
  post += `→ [Add your insight here]\n`;
  post += `→ [Add another point]\n\n`;

  if (options.includeLink) {
    post += `Full article: ${url}\n\n`;
  }

  post += `What's your take on this?\n\n`;

  // Add hashtags from keywords
  const hashtags = keywords.slice(0, 4).map(k => `#${k.replace(/\s+/g, '')}`).join(' ');
  post += hashtags;

  return {
    content: post.substring(0, options.maxLength),
    suggestedHashtags: keywords.slice(0, 5)
  };
}

function generateSummaryPost(article, options) {
  const { title, description, url, keywords, readingTime } = article;

  let post = `📚 ${title}\n\n`;
  post += `Quick summary (${readingTime} min read):\n\n`;
  post += `${description}\n\n`;
  post += `Key points:\n`;
  post += `• [Point 1]\n`;
  post += `• [Point 2]\n`;
  post += `• [Point 3]\n\n`;

  if (options.includeLink) {
    post += `Read more: ${url}\n\n`;
  }

  post += `Save this for later if you found it useful 🔖`;

  const hashtags = keywords.slice(0, 4).map(k => `#${k.replace(/\s+/g, '')}`).join(' ');
  post += `\n\n${hashtags}`;

  return {
    content: post.substring(0, options.maxLength),
    suggestedHashtags: keywords.slice(0, 5)
  };
}

function generateQuestionPost(article, options) {
  const { title, description, url, keywords } = article;

  let post = `Just read an interesting piece about ${keywords[0] || 'this topic'}.\n\n`;
  post += `The article argues that [main point from: ${title}]\n\n`;
  post += `This got me thinking:\n\n`;
  post += `[Your question or take here]?\n\n`;
  post += `I'm genuinely curious what this community thinks.\n\n`;

  if (options.includeLink) {
    post += `Context: ${url}\n\n`;
  }

  post += `Drop your thoughts below 👇`;

  const hashtags = keywords.slice(0, 3).map(k => `#${k.replace(/\s+/g, '')}`).join(' ');
  post += `\n\n${hashtags}`;

  return {
    content: post.substring(0, options.maxLength),
    suggestedHashtags: keywords.slice(0, 5)
  };
}

function generateStoryPost(article, options) {
  const { title, url, keywords } = article;

  let post = `I came across something that changed how I think about ${keywords[0] || 'this'}.\n\n`;
  post += `The article "${title}" makes a compelling case for [main argument].\n\n`;
  post += `Here's what stuck with me:\n\n`;
  post += `[Your personal connection or story here]\n\n`;
  post += `This matters because [why it's relevant to your audience].\n\n`;

  if (options.includeLink) {
    post += `Worth a read: ${url}\n\n`;
  }

  post += `Has anyone else experienced something similar?`;

  const hashtags = keywords.slice(0, 3).map(k => `#${k.replace(/\s+/g, '')}`).join(' ');
  post += `\n\n${hashtags}`;

  return {
    content: post.substring(0, options.maxLength),
    suggestedHashtags: keywords.slice(0, 5)
  };
}

// Batch parse multiple URLs
async function parseMultipleUrls(urls, onProgress) {
  const results = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i].trim();
    if (!url) continue;

    try {
      const result = await parseUrl(url);
      results.push(result);

      if (onProgress) {
        onProgress({
          current: i + 1,
          total: urls.length,
          url,
          success: result.success
        });
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      results.push({
        success: false,
        url,
        error: error.message
      });
    }
  }

  return results;
}

default {
  parseUrl,
  parseMultipleUrls,
  generatePostFromArticle
};


// === js/app.js ===
// LinkedIn Content Studio - Main Application
// Pure JavaScript, no framework dependencies













// App State - initialize lazily to avoid errors at module load time
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
  settings: null,
  drafts: [],
  queue: []
};

// Initialize App
function initApp() {
  try {
    console.log('LinkedIn Content Studio initializing...');

    // Initialize state now that DOM is ready
    state.settings = settings.get();
    state.drafts = drafts.getAll();
    state.queue = contentQueue.getQueue();

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
  } catch (error) {
    console.error('Error initializing app:', error);
    // Show error to user
    document.body.innerHTML = `<div style="padding: 2rem; color: white; background: #1b1f23;">
      <h1>Error Loading App</h1>
      <p>There was an error loading LinkedIn Content Studio.</p>
      <pre style="background: #2d333b; padding: 1rem; border-radius: 8px; overflow: auto;">${error.message}\n${error.stack}</pre>
      <p>Please refresh the page or check the console for more details.</p>
    </div>`;
  }
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
default {
  initApp,
  state
};



// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

})();