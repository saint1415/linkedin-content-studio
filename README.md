# LinkedIn Content Studio

Free, powerful LinkedIn content creation tool. No API required. Your data stays in your browser.

## Live Demo

**[Try LinkedIn Content Studio](https://saint1415.github.io/linkedin-content-studio/)**

## Features

### Post Composer
- **Real-time scoring** - Get instant feedback on engagement potential (0-100 score)
- **AI detection check** - Flags robotic phrases and suggests human alternatives
- **Human score** - Ensure your content sounds authentic, not AI-generated
- **Live preview** - See exactly how your post will look
- **Hashtag management** - Add/remove hashtags with reach indicators

### Hook Generator
- **40+ proven hook templates** across 8 categories:
  - Curiosity Gap
  - Story Openers
  - Data/Stats
  - Hot Takes
  - Questions
  - List Previews
  - Confessions
  - Achievements
- **Effectiveness ratings** based on engagement data
- **One-click use** - Apply any hook directly to your post

### Post Templates
- **20+ battle-tested templates** for:
  - Thought leadership
  - Personal stories
  - How-to guides
  - List posts
  - Announcements
  - Engagement posts
  - Carousel ideas
  - Poll ideas
- **Pro tips** with each template

### Hashtag Research Tool
- **200+ hashtags** across 11 industries
- **Reach indicators** (Very High, High, Medium, Niche)
- **Trending vs evergreen** classification
- **One-click add** to current post

### Content Scheduler
- **Visual calendar view** - See your week at a glance
- **Smart scheduling** - AI suggests optimal posting times
- **Conflict detection** - Warns about posts too close together
- **Export to schedulers** - Buffer, Hootsuite CSV formats

### URL Content Parser
- **Batch URL processing** - Parse multiple articles at once
- **Auto-generate posts** from article content
- **4 post styles**: Key Insight, Summary, Question, Story
- **Keyword extraction** for hashtag suggestions

### Algorithm Guide
Built from research by Hootsuite, Buffer, Sprout Social, and Richard van der Blom:
- **How the algorithm works** - Ranking signals explained
- **Golden Hour strategy** - Critical first 60-90 minutes
- **Content format performance** - Video +69%, Documents +45%, Links -40%
- **Spam triggers to avoid** - What gets you penalized
- **Engagement value** - Which interactions matter most
- **Optimal posting schedule** - When and how often

### Best Times to Post
- **Day-by-day breakdown** with quality ratings
- **Industry-specific timing** for 8 sectors
- **Audience-type timing** (C-Suite, Managers, Job Seekers)
- **Posting frequency** recommendations

## Tech Stack

- **Pure HTML/CSS/JavaScript** - No build required
- **ES6 Modules** - Clean, modular code
- **No external dependencies** - Everything runs locally
- **Local Storage** - Your data never leaves your browser
- **GitHub Pages** - Free hosting

## Local Development

```bash
# Clone the repo
git clone https://github.com/saint1415/linkedin-content-studio.git
cd linkedin-content-studio

# Open in browser (no build needed)
open index.html
# or use a local server
python -m http.server 8000
```

## Project Structure

```
linkedin-content-studio/
├── index.html                 # Main application
├── css/
│   └── styles.css            # All styles
├── js/
│   ├── app.js                # Main app initialization
│   ├── data/
│   │   ├── algorithm.js      # LinkedIn algorithm data
│   │   ├── hashtags.js       # Hashtag database
│   │   ├── hooks.js          # Hook templates
│   │   ├── phrases.js        # AI detection phrases
│   │   ├── templates.js      # Post templates
│   │   └── timing.js         # Best posting times
│   └── modules/
│       ├── human-writer.js   # AI detection avoidance
│       ├── post-scorer.js    # Engagement scoring
│       ├── scheduler.js      # Content scheduling
│       ├── storage.js        # Local storage management
│       └── url-parser.js     # Article parsing
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
└── README.md
```

## Algorithm Insights

### What Works
- Native video: **+69%** performance boost
- Documents/carousels: **+45%** boost
- Posting Tue-Thu: Peak engagement days
- 3-5 hashtags: Optimal range
- 1200-1500 characters: Sweet spot for text posts
- Comments 15+ words: High-value engagement

### What Gets Penalized
- External links: **-40%** reach
- More than 5 hashtags: Spam filter trigger
- Multiple posts in 24 hours: Second post penalized
- Engagement bait phrases: Quality filter flag
- Editing posts after publishing: Reset distribution

### Golden Hour
First 60-90 minutes determines your reach:
- <500 impressions: Unlikely to perform well
- 500-1000 impressions: Moderate potential
- 1000+ impressions: Strong second/third hour

## Data Privacy

- **100% client-side** - No data sent to servers
- **Local storage only** - Everything stays in your browser
- **Export/import** - Backup your data anytime
- **No tracking** - We don't collect analytics

## Contributing

PRs welcome! Focus areas:
- More hook templates
- Additional industries for hashtags
- Improved AI detection patterns
- Better mobile responsiveness
- More export format options

## License

MIT

---

Built with algorithm research from:
- [Hootsuite](https://blog.hootsuite.com/linkedin-algorithm/)
- [Buffer](https://buffer.com/resources/linkedin-algorithm/)
- [Sprout Social](https://sproutsocial.com/insights/linkedin-algorithm/)
- [Richard van der Blom](https://www.linkedin.com/in/richardvanderblom/)
