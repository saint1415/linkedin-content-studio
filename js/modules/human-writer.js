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
export function analyzeText(text) {
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
export function humanizeText(text) {
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
export function getRandomTip() {
  return HUMAN_WRITING_TIPS[Math.floor(Math.random() * HUMAN_WRITING_TIPS.length)];
}

// Get authenticity suggestions
export function getAuthenticitySuggestions() {
  return AUTHENTICITY_SIGNALS;
}

// Check if opener is weak
export function checkOpener(text) {
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
export function scoreHook(hookText) {
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
export default {
  analyzeText,
  humanizeText,
  getRandomTip,
  getAuthenticitySuggestions,
  checkOpener,
  scoreHook
};
