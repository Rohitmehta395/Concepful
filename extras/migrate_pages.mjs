import fs from "node:fs";
import path from "node:path";

const pagesDir = path.join(process.cwd(), "artifacts/conceptful/src/pages");
const appDir = path.join(process.cwd(), "artifacts/conceptful/src/app");

const moves = [
  ["about.tsx", "about/page.tsx"],
  ["campaigns.tsx", "campaigns/page.tsx"],
  ["contact.tsx", "contact/page.tsx"],
  ["home.tsx", "page.tsx"],
  ["pricing.tsx", "pricing/page.tsx"],
  ["team.tsx", "team/page.tsx"],
  ["not-found.tsx", "not-found.tsx"],
  ["case-studies/index.tsx", "case-studies/page.tsx"],
  ["case-studies/clarity-system.tsx", "case-studies/clarity-system/page.tsx"],
  ["services/index.tsx", "services/page.tsx"],
  ["services/detail.tsx", "services/[slug]/page.tsx"],
  ["resources/page.tsx", "resources/[slug]/page.tsx"],
];

for (const [srcFile, destFile] of moves) {
  const src = path.join(pagesDir, srcFile);
  const dest = path.join(appDir, destFile);
  
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(src, dest);
    
    // Also inject "use client" if it's a page component
    let content = fs.readFileSync(dest, "utf8");
    if (!content.includes("\"use client\"") && !content.includes("'use client'")) {
      content = "\"use client\";\n" + content;
      fs.writeFileSync(dest, content);
    }
    console.log(`Moved ${srcFile} to ${destFile}`);
  } else {
    console.log(`Skipped ${srcFile} (not found)`);
  }
}

// Clean up pages dir
fs.rmSync(pagesDir, { recursive: true, force: true });
console.log("Deleted src/pages directory.");
