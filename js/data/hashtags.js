// Hashtag database organized by category and industry
export const HASHTAG_CATEGORIES = {
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

export const HASHTAG_TIPS = [
  'Use 3-5 hashtags per post for optimal reach',
  'Mix high-reach and niche hashtags for best visibility',
  'Place hashtags at the end of your post, not inline',
  'Avoid hashtags with millions of posts - your content gets lost',
  'Create a branded hashtag for your content series',
  'Trending hashtags can boost visibility but must be relevant',
  'Research hashtags before using - some have negative associations',
  'Follow hashtags relevant to your industry to find content ideas'
];

export const REACH_LEVELS = {
  'very-high': { label: 'Very High', description: '10M+ followers', color: '#22c55e' },
  'high': { label: 'High', description: '1M-10M followers', color: '#84cc16' },
  'medium': { label: 'Medium', description: '100K-1M followers', color: '#eab308' },
  'low': { label: 'Niche', description: '<100K followers', color: '#f97316' }
};
