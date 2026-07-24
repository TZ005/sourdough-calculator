const fs = require("fs");
const c = fs.readFileSync("G:/video-handling-tools/sourdough-calculator/app/page.jsx", "utf8");
const emojis = ["Bread icon", "Thermometer icon", "Razor icon", "Scale icon"];
emojis.forEach(e => {
  const re = new RegExp('aria-label="' + e + '">([\\s\\S]{0,50}?)</div>');
  const m = c.match(re);
  if (m) {
    const inner = m[1];
    const bytes = Buffer.from(inner, "utf8");
    console.log(e + ":");
    console.log("  inner: " + JSON.stringify(inner));
    console.log("  bytes: " + bytes.toString("hex"));
  }
});
