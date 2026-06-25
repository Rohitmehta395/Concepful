import fs from 'fs';
import path from 'path';

const rootPath = 'c:/Users/steve/Downloads/conceptful-website/conceptful-website';
const artifactsPath = path.join(rootPath, 'artifacts/conceptful');

// Read package.json files
const nextPackagePath = path.join(artifactsPath, 'package.json');
const nextPackage = JSON.parse(fs.readFileSync(nextPackagePath, 'utf8'));

// Catalog versions manually extracted
const catalog = {
  "@replit/vite-plugin-cartographer": "^0.5.1",
  "@replit/vite-plugin-dev-banner": "^0.1.1",
  "@replit/vite-plugin-runtime-error-modal": "^0.0.6",
  "@tailwindcss/vite": "^4.1.14",
  "@tanstack/react-query": "^5.90.21",
  "@types/node": "^25.3.3",
  "@types/react": "^19.2.0",
  "@types/react-dom": "^19.2.0",
  "@vitejs/plugin-react": "^5.0.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "drizzle-orm": "^0.45.2",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.545.0",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "tailwind-merge": "^3.3.1",
  "tailwindcss": "^4.1.14",
  "tsx": "^4.21.0",
  "vite": "^7.3.2",
  "zod": "^3.25.76"
};

// Remove workspace refs and resolve catalogs
delete nextPackage.devDependencies["@workspace/api-client-react"];
delete nextPackage.devDependencies["@workspace/api-zod"];
nextPackage.name = "conceptful-website";

for (const dep in nextPackage.devDependencies) {
  if (nextPackage.devDependencies[dep] === "catalog:") {
    nextPackage.devDependencies[dep] = catalog[dep] || "*";
  }
}
for (const dep in nextPackage.dependencies) {
  if (nextPackage.dependencies[dep] === "catalog:") {
    nextPackage.dependencies[dep] = catalog[dep] || "*";
  }
}

// Write the transformed package.json to the artifacts directory before moving it
fs.writeFileSync(nextPackagePath, JSON.stringify(nextPackage, null, 2));
console.log("Transformed package.json successfully!");
