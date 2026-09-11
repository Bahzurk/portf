// prerender.js
// Run AFTER `vite build`. Spins up the built site locally, visits each route
// with a headless browser, and overwrites dist/<route>/index.html with the
// fully-rendered HTML. Output stays 100% static — safe for Firebase Hosting free tier.

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const ROUTES = [
  '/',
  '/about',
  '/projects',
  '/projects/project-1',
  '/projects/project-2',
  '/projects/project-3',
  '/projects/project-4',
  '/projects/project-5',
  '/projects/project-6',
  '/contact',
  // '*' (NotFound) intentionally excluded — no SEO value in prerendering a 404
];

async function main() {
  // 1. Serve the already-built dist/ folder locally
  const server = await preview({ preview: { port: 4173 } });
  const base = `http://localhost:4173`;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox'], // needed in most CI/sandboxed environments
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = base + route;
    console.log(`Rendering ${url} ...`);

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Small buffer so react-i18next finishes loading translation JSON
    // before we capture the HTML (otherwise text can be blank/untranslated).
    await new Promise((r) => setTimeout(r, 300));

    const html = await page.content();

    // Figure out where to write this route's static HTML
    const outDir = route === '/'
      ? 'dist'
      : path.join('dist', route.replace(/^\//, ''));

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);

    await page.close();
  }

  await browser.close();
  await server.httpServer.close();
  console.log('Prerender complete. dist/ now contains static HTML for each route.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});