// Simple build script to bundle JS files for production
const fs = require('fs');
const path = require('path');

// Read all data files
const dataFiles = [
  'js/data/hooks.js',
  'js/data/hashtags.js',
  'js/data/templates.js',
  'js/data/algorithm.js',
  'js/data/timing.js',
  'js/data/phrases.js'
];

// Read all module files
const moduleFiles = [
  'js/modules/storage.js',
  'js/modules/human-writer.js',
  'js/modules/post-scorer.js',
  'js/modules/scheduler.js',
  'js/modules/url-parser.js'
];

let bundledJS = '// LinkedIn Content Studio - Bundled Version\n(function() {\n"use strict";\n\n';

// Process data files - remove export keywords
dataFiles.forEach(file => {
  console.log('Processing:', file);
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/^export /gm, '');
  content = content.replace(/export default .*/gm, '');
  bundledJS += `// === ${file} ===\n${content}\n\n`;
});

// Process module files - remove imports and exports
moduleFiles.forEach(file => {
  console.log('Processing:', file);
  let content = fs.readFileSync(file, 'utf8');
  // Remove single-line imports
  content = content.replace(/^import .* from .*$/gm, '');
  // Remove multi-line imports (import { ... } from '...')
  content = content.replace(/^import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]*['"];?\s*$/gm, '');
  // Remove export keywords
  content = content.replace(/^export /gm, '');
  // Remove export default blocks (multi-line)
  content = content.replace(/^export default\s*\{[\s\S]*?\};?\s*$/gm, '');
  // Remove any remaining standalone 'default' keyword
  content = content.replace(/^default\s*\{[\s\S]*?\};?\s*$/gm, '');
  bundledJS += `// === ${file} ===\n${content}\n\n`;
});

// Process main app.js
console.log('Processing: js/app.js');
let appContent = fs.readFileSync('js/app.js', 'utf8');
// Remove single-line imports
appContent = appContent.replace(/^import .* from .*$/gm, '');
// Remove multi-line imports
appContent = appContent.replace(/^import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]*['"];?\s*$/gm, '');
// Convert exports to regular declarations
appContent = appContent.replace(/^export function /gm, 'function ');
appContent = appContent.replace(/^export const /gm, 'const ');
appContent = appContent.replace(/^export default [\s\S]*?^\};$/gm, '');
bundledJS += `// === js/app.js ===\n${appContent}\n\n`;

// Add initialization
bundledJS += `
// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

})();`;

// Write bundled file
fs.writeFileSync('js/bundle.js', bundledJS);
console.log('Bundle created: js/bundle.js');
console.log('Size:', Math.round(bundledJS.length / 1024), 'KB');
