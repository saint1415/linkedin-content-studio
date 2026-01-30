// Post templates organized by category
export const TEMPLATE_CATEGORIES = {
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

export const POST_TEMPLATES = [
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

export const CTA_TEMPLATES = [
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
