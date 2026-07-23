const fs = require("fs");
const f = "G:/视频处理工具/sourdough-calculator/app/layout.jsx";
let c = fs.readFileSync(f, "utf8");
const before = c;
c = c.replace(
  "export const metadata = {\n  title:",
  "export const metadata = {\n  metadataBase: new URL('https://sourdough-hydrationcalculator.com/'),\n  title:"
);
if (c === before) { console.log("FAIL"); process.exit(1); }
fs.writeFileSync(f, c, "utf8");
console.log("OK: metadataBase added");
