// AI Detection and Overused LinkedIn Phrases Database
// Content sounds human when it avoids these patterns

export const AI_RED_FLAGS = [
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

export const HUMAN_ALTERNATIVES = {
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

export const OVERUSED_OPENERS = [
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

export const WEAK_WORDS = [
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

export const SENTENCE_PATTERNS_TO_AVOID = [
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

export const HUMAN_WRITING_TIPS = [
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

export const AUTHENTICITY_SIGNALS = [
  'Specific details only you would know',
  'Admitting mistakes or failures',
  'Unpopular or nuanced opinions',
  'References to real people (with permission)',
  'Genuine questions you don\'t know the answer to',
  'Acknowledging complexity and tradeoffs',
  'Personal anecdotes with emotion',
  'Disagreeing respectfully with common wisdom'
];

export const LINKEDIN_CRINGE = [
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

export const DETECTION_SCORING = {
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
