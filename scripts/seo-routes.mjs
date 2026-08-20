export const SITE_URL = (process.env.VITE_PUBLIC_SITE_URL || process.env.VITE_SITE_URL || 'https://2favault.org').replace(/\/$/, '');

export const SEO_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/download', priority: '0.9', changefreq: 'weekly' },
  { path: '/features', priority: '0.8', changefreq: 'monthly' },
  { path: '/security', priority: '0.9', changefreq: 'monthly' },
  { path: '/changelog', priority: '0.8', changefreq: 'monthly' },
  { path: '/changelog/1-0-0', priority: '0.7', changefreq: 'monthly', lastmod: '2026-08-20' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/support', priority: '0.6', changefreq: 'monthly' },
];
