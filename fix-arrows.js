const fs = require('fs');
const pathMod = require('path');
const baseDir = process.env.BASE_DIR || process.cwd();
const blogDir = pathMod.join(baseDir, 'app', 'blog');

function walk(dir, results = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const p = pathMod.join(dir, item.name);
    if (item.isDirectory()) walk(p, results);
    else if (item.name === 'page.jsx') results.push(p);
  }
  return results;
}
const pages = walk(blogDir).filter((p) => pathMod.basename(pathMod.dirname(p)) !== 'page');
console.log('Found ' + pages.length + ' pages');

let fixed = 0;
for (const p of pages) {
  let c = fs.readFileSync(p, 'utf8');
  const orig = c;
  // Fix literal \u2190 and \u2192 to real arrows
  c = c.split(String.fromCharCode(92, 117, 50, 49, 57, 48)).join(String.fromCodePoint(0x2190));
  c = c.split(String.fromCharCode(92, 117, 50, 49, 57, 50)).join(String.fromCodePoint(0x2192));
  if (c !== orig) {
    fs.writeFileSync(p, c);
    fixed++;
  }
}
console.log('Fixed ' + fixed + ' pages with literal \\uXXXX arrows');