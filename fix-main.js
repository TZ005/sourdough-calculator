const fs = require('fs');
const pathMod = require('path');
const baseDir = process.env.BASE_DIR || process.cwd();
const p = pathMod.join(baseDir, 'app', 'blog', 'page.jsx');
let c = fs.readFileSync(p, 'utf8');
// Remove force-dynamic and searchParams
c = c.replace('import Link from "next/link";\n\nexport const dynamic = "force-dynamic";\n', 'import Link from "next/link";\n');
c = c.replace('export default function Blog({ searchParams }) {\n  const page = Math.max(1, parseInt(searchParams?.page) || 1);\n  const totalPages = Math.ceil(POSTS.length / PAGE_SIZE);\n  const start = (page - 1) * PAGE_SIZE;\n  const end = start + PAGE_SIZE;\n  const displayedPosts = POSTS.slice(start, end);\n', 'export default function Blog() {\n  const PAGE_SIZE = 10;\n  const start = 0;\n  const displayedPosts = POSTS.slice(start, start + PAGE_SIZE);\n');
// Update the slice in map
c = c.replace('String(start + i + 1).padStart(2, "0")', 'String(i + 1).padStart(2, "0")');
// Add a note to add pagination component below
fs.writeFileSync(p, c);
console.log('Updated main page (no pagination here)');