import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_ROUTES, SITE_URL } from './seo-routes.mjs';

const directory = path.dirname(fileURLToPath(import.meta.url));
const escapeXml = (value) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SEO_ROUTES.map((route) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>${route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : ''}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.resolve(directory, '../public/sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap.xml with ${SEO_ROUTES.length} canonical routes.`);
