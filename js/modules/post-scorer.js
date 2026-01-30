// LinkedIn Post Scorer - Predicts engagement potential
// Based on algorithm research and best practices

import { SPAM_TRIGGERS, ENGAGEMENT_BAIT_PHRASES } from '../data/algorithm.js';

// Main post scoring function
export function scorePost(post, options = {}) {
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
export function estimateEngagement(score, followerCount = 1000) {
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

export default {
  scorePost,
  estimateEngagement
};
