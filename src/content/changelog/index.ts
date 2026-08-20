import { ChangelogEntry } from '../../types/changelog';

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    slug: '1-0-0',
    version: '1.0.0',
    build: 1,
    title: '2FA Vault 1.0.0 — General Availability',
    releasedAt: '2026-08-20',
    status: 'stable',
    apkUrl: '/2fa-vault-1.0.0.apk',
    apkSha256: '3c0e9f1cc4e100ca644ba40e81e0771c8ebf77456ee059fbb446e932ab454ea7',
    apkSizeBytes: 146735694,
    summary:
      'The initial stable release of 2FA Vault. Featuring zero-knowledge AES-256-GCM local storage, offline TOTP/HOTP calculation, integrated recovery code management, Avatar Studio, and end-to-end encrypted cloud sync.',
    highlights: [
      'Offline TOTP & HOTP generation with animated countdown rings',
      'Integrated single-use Recovery Code storage with file import',
      'App Lock with biometric unlock, PIN fallback, and Screen Privacy Shield',
      'Spaces & custom tag organization',
      'Optional Server-Blind Cloud Sync with device pairing',
    ],
    sections: [
      {
        type: 'new',
        title: 'Core Features',
        items: [
          'Full RFC 6238 TOTP and RFC 4226 HOTP engine with SHA-1, SHA-256, and SHA-512 support',
          'Integrated Recovery Codes vault: attach single-use backup codes directly to accounts',
          'Support for importing recovery codes from .txt and structured .json exports',
          'Avatar Studio: curated brand SVG library and deterministic geometric avatars',
          'Spaces management: organize accounts into Personal, Work, Cloud, and Crypto vaults',
          'Search index: instant sub-millisecond filtering across issuers and account usernames',
        ],
      },
      {
        type: 'security',
        title: 'Security & Cryptography',
        items: [
          'AES-256-GCM authenticated encryption with structured AAD context binding',
          'Hardware-backed biometrics with AES-256 Key Encryption Key (KEK) wrapping',
          '24-character armored Emergency Recovery Key derived via PBKDF2 (100,000 iterations)',
          'Clipboard auto-clear after 30 seconds for copied 2FA tokens and recovery codes',
          'Android FLAG_SECURE protection preventing screenshots and recents previews',
        ],
      },
      {
        type: 'improved',
        title: 'Performance & Usability',
        items: [
          'Instant cold-start launch and sub-50ms vault hydration from SQLite',
          'Dynamic Dark and Light themes with high-contrast zinc palettes',
          'One-tap code copy with subtle haptic feedback',
          'Export and import of password-protected encrypted vault snapshots',
        ],
      },
    ],
  },
];

export function getChangelogBySlug(slug: string): ChangelogEntry | undefined {
  return CHANGELOG_ENTRIES.find((entry) => entry.slug === slug || entry.version === slug);
}
