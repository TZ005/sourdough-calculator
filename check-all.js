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

const issues = [];
for (const p of pages) {
  const slug = pathMod.basename(pathMod.dirname(p));
  const c = fs.readFileSync(p, 'utf8');
  const problems = [];
  
  // 1. <article> tag
  if (c.indexOf('<article') < 0) problems.push('no <article>');
  if (c.lastIndexOf('</article>') < 0) problems.push('no </article>');
  
  // 2. picture before h1
  const picIdx = c.indexOf('<picture>');
  const h1Idx = c.indexOf('<h1');
  if (picIdx > 0 && h1Idx > 0 && picIdx > h1Idx) problems.push('picture after h1');
  
  // 3. picture count
  const picCount = (c.match(/<picture>/g) || []).length;
  if (picCount > 1) problems.push(picCount + ' pictures');
  
  // 4. Related Articles inside article
  const relIdx = c.indexOf('Related Articles');
  const artEnd = c.lastIndexOf('</article>');
  if (relIdx > 0 && artEnd > 0 && relIdx > artEnd) problems.push('Related outside article');
  
  // 5. References inside article
  const refIdx = c.indexOf('References');
  if (refIdx > 0 && artEnd > 0 && refIdx > artEnd) problems.push('References outside article');
  
  // 6. NextPostNav before Related Articles
  const navIdx = c.indexOf('<NextPostNav');
  if (navIdx > 0 && relIdx > 0 && navIdx < relIdx) problems.push('NextPostNav before Related');
  
  if (problems.length > 0) {
    issues.push({slug: slug, problems: problems});
  }
}
console.log('Pages with issues: ' + issues.length);
issues.forEach(i => console.log('  ' + i.slug + ': ' + i.problems.join(', ')));