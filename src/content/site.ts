import { NavItem } from '../types/site';

const configuredUrl = import.meta.env.VITE_PUBLIC_SITE_URL || import.meta.env.VITE_SITE_URL || 'https://2favault.org';

export const SITE_CONFIG = {
  name: '2FA Vault',
  tagline: 'Codes and recovery. One secure vault.',
  description:
    'Generate TOTP codes offline and protect recovery credentials together in one zero-knowledge encrypted vault on your Android device.',
  url: configuredUrl.replace(/\/$/, ''),
  ogImage: `${configuredUrl.replace(/\/$/, '')}/og-preview.png`,
  githubUrl: 'https://github.com/2favault/2favault',
  author: '2FA Vault Contributors',
  license: 'MIT',
  supportEmail: 'contact@2favault.org',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Security', href: '/security' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Download APK', href: '/download' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Security Architecture', href: '/security' },
    ],
  },
  {
    title: 'Security & Trust',
    links: [
      { label: 'Security Philosophy', href: '/security' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Integrity Verification', href: '/download#verify' },
      { label: 'Source Code (MIT)', href: 'https://github.com/2favault/2favault', isExternal: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'About 2FA Vault', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Support & Issues', href: '/support' },
    ],
  },
];
