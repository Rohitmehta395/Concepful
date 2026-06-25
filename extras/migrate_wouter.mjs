import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(process.cwd(), "artifacts/conceptful/src"));

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;

  if (content.includes("wouter")) {
    // Handle specific imports
    if (content.includes("import { Link, useLocation } from \"wouter\";")) {
      content = content.replace("import { Link, useLocation } from \"wouter\";", "import Link from \"next/link\";\nimport { usePathname } from \"next/navigation\";");
      content = content.replace(/const \[location\] = useLocation\(\);/g, "const location = usePathname();");
      changed = true;
    }
    if (content.includes("import { Link } from \"wouter\";")) {
      content = content.replace("import { Link } from \"wouter\";", "import Link from \"next/link\";");
      changed = true;
    }
    // Any remaining `Link` from wouter
    if (content.includes("from \"wouter\"")) {
       content = content.replace(/import\s+\{([^}]*Link[^}]*)\}\s+from\s+["']wouter["'];/g, "import Link from \"next/link\";");
       changed = true;
    }
    // Remove params in pages, e.g. `export default function Page({ params })` - Wouter uses `useRoute` or passes params to component. Next.js passes `params` to page.
    // We'll fix specific useRoute instances if they exist.
  }

  // Wouter useRoute replacement
  if (content.includes("useRoute")) {
    content = content.replace(/import\s+\{([^}]*useRoute[^}]*)\}\s+from\s+["']wouter["'];/, "");
    // Next.js passes params as a promise in Next 15, or directly. For now, we'll let TS complain and fix it.
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated imports in ${file}`);
  }
}
