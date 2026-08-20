import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_ROUTES, SITE_URL } from './seo-routes.mjs';

const directory = path.dirname(fileURLToPath(import.meta.url));
const read = (relative) => fs.readFileSync(path.resolve(directory, '..', relative), 'utf8');
const failures = [];
const html = read('dist/index.html');
const robots = read('dist/robots.txt');
const sitemap = read('dist/sitemap.xml');
const requiredHtml = [/<title>[^<]+<\/title>/, /name="description"/, /rel="canonical"/, /property="og:image"/, /name="twitter:card"/];
requiredHtml.forEach((pattern) => { if (!pattern.test(html)) failures.push(`dist/index.html missing ${pattern}`); });
const canonicalOutput = (html + sitemap).replaceAll(SITE_URL, '');
if (/localhost|https?:\/\/[^\s"<]+\.vercel\.app/.test(canonicalOutput)) failures.push('Production output contains a localhost or non-canonical Vercel deployment URL.');
if (!robots.includes('Allow: /') || !robots.includes(`${SITE_URL}/sitemap.xml`)) failures.push('robots.txt does not expose the production sitemap.');
for (const route of SEO_ROUTES) if (!sitemap.includes(`<loc>${SITE_URL}${route.path}</loc>`)) failures.push(`Sitemap missing ${route.path}`);
if (new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])).size !== SEO_ROUTES.length) failures.push('Sitemap contains duplicate or unexpected canonical URLs.');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('SEO production output verification passed.');
