# 2FA Vault — Showcase & Release Hub

A premium, local-first public showcase and distribution hub for **2FA Vault** (Android).

> **Zero-Knowledge Principle**: This web application is purely an informational, documentation, and release showcase. It does NOT contain in-browser vault storage, TOTP calculation, or secret handling.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with semantic dark/light zinc tokens
- **Icons**: [Hugeicons](https://hugeicons.com/) & [Lucide Icons](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (static-first client-side routing)
- **Deployment**: Vercel / Cloudflare Pages (Static SPA)

---

## Project Structure

```
web/
├── public/               # Static assets (sitemap, robots.txt, icons)
├── scripts/              # Release validation & sitemap generation
├── src/
│   ├── app/              # Router, providers, and layout shell
│   ├── components/
│   │   ├── brand/        # Vault Loop mark and brand lockups
│   │   ├── changelog/    # Release timeline and cards
│   │   ├── layout/       # Header, Footer, Container, Section, ThemeToggle
│   │   ├── legal/        # Legal nav & policy sections
│   │   ├── marketing/    # Hero, FeatureRail, DeviceFrame, DownloadCard, Diagrams
│   │   └── ui/           # Buttons, Badges, Cards, Accordions, Tabs, Separators
│   ├── content/          # Structured content (Features, Security, FAQ, Changelog)
│   ├── data/             # Canonical release manifest & screenshot metadata
│   ├── hooks/            # useTheme, useReducedMotion
│   ├── lib/              # cn, seo, formatters, download helpers
│   ├── pages/            # Home, Download, Features, Security, Changelog, About, Privacy, FAQ, Support, 404
│   └── styles/           # Tailwind CSS v4 globals with semantic tokens
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run release and integrity verification
npm run verify

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Release Verification Pipeline

Before publishing any release, the website validates:
1. `npm run validate:changelog`: Confirms valid semantic versioning and changelog consistency.
2. `npm run verify:downloads`: Confirms SHA-256 integrity hash format and release file targets.
3. `npm run build`: Confirms strict TypeScript type safety and Vite production bundling.
