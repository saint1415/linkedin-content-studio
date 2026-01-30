// Hook formulas and templates for LinkedIn posts
export const HOOK_CATEGORIES = {
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

export const HOOK_TEMPLATES = [
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

export const POWER_WORDS = [
  'instantly', 'proven', 'secret', 'discover', 'revealed',
  'breakthrough', 'exclusive', 'insider', 'surprising', 'essential',
  'critical', 'game-changing', 'powerful', 'ultimate', 'master',
  'transform', 'unlock', 'boost', 'skyrocket', 'guarantee'
];

export const WEAK_OPENERS = [
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
