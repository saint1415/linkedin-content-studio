// URL Parser - Extract content from articles and generate LinkedIn posts

// Parse article content from URL (using proxy for CORS)
export async function parseUrl(url) {
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
export function generatePostFromArticle(article, options = {}) {
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
export async function parseMultipleUrls(urls, onProgress) {
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

export default {
  parseUrl,
  parseMultipleUrls,
  generatePostFromArticle
};
