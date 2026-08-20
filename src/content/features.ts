import { FeatureItem } from '../types/site';

export const FEATURES: FeatureItem[] = [
  {
    id: 'offline-totp',
    title: 'Offline When It Matters',
    tagline: 'Pure local TOTP generation without network dependency',
    description:
      'All OTP calculations (RFC 6238 TOTP and RFC 4226 HOTP) execute directly on your device CPU. Your secret seeds are decrypted in volatile memory only for the fraction of a millisecond needed to render the code.',
    bullets: [
      'Standard 6-digit and 8-digit OTP algorithms (SHA-1, SHA-256, SHA-512)',
      'Configurable time periods (15s, 30s, 60s) with live animated countdown rings',
      'One-tap code copy with automatic 30-second clipboard purge',
      'Rapid QR code scanning or manual setup-key input',
    ],
    screenshotId: 'vault-home',
    iconName: 'ShieldCheck',
    badge: 'Zero Network Dependency',
  },
  {
    id: 'recovery-vault',
    title: 'Recovery Without the Scramble',
    tagline: 'Keep emergency backup codes alongside the account they protect',
    description:
      'Losing your authenticator is stressful; losing your 2FA backup codes is catastrophic. 2FA Vault bridges the gap by letting you securely store, import, and track single-use recovery codes inside the same encrypted container.',
    bullets: [
      'Store 8-character and 16-character backup codes safely',
      'Import directly from text files or structured JSON exports',
      'Codes are concealed behind a privacy mask by default',
      'Mark codes as used to avoid lockouts during emergencies',
    ],
    screenshotId: 'recovery-codes',
    iconName: 'Key',
    badge: 'First-Class Recovery',
  },
  {
    id: 'spaces-organization',
    title: 'Built Around Your Vault',
    tagline: 'Spaces, custom tags, and sub-millisecond search',
    description:
      'Keep dozens or hundreds of accounts organized without cognitive clutter. Separate work credentials from personal security, crypto exchanges, and critical infrastructure.',
    bullets: [
      'Organize accounts into dedicated Spaces (Personal, Work, Infrastructure, Crypto)',
      'Custom color-coded tags for rapid multi-dimensional filtering',
      'Pinned Favorites for instant access at the top of your list',
      'In-memory search index for instant filtering across issuers and account names',
    ],
    screenshotId: 'spaces-organization',
    iconName: 'Folder',
    badge: 'Spaces & Tags',
  },
  {
    id: 'avatar-studio',
    title: 'Deterministic Avatar Studio',
    tagline: 'Crisp brand logos and reproducible geometric avatars',
    description:
      'Instantly recognize accounts with bundled brand SVG icons. For unknown or self-hosted services, 2FA Vault deterministically generates aesthetic geometric avatars derived from the service name.',
    bullets: [
      'Curated catalog of official high-contrast brand icons',
      'Deterministic geometric fallback avatars with 6 custom shape styles',
      'Custom color overrides and visual personalization per account',
      'Never requests third-party icon CDNs, preserving network privacy',
    ],
    screenshotId: 'avatar-studio',
    iconName: 'Sparkles',
    badge: 'Private Visuals',
  },
  {
    id: 'app-lock-privacy',
    title: 'Hardware-Backed App Lock',
    tagline: 'Biometrics, PIN fallback, and Screen Privacy Shield',
    description:
      'Protect your open tokens from shoulder surfing and phone hand-offs. Hardware-backed biometrics (Fingerprint and Face Unlock) wrap your master key, ensuring cryptographic isolation.',
    bullets: [
      'Biometric authentication with AES-256 Key Encryption Key (KEK) wrapping',
      'Custom PIN fallback with PBKDF2-HMAC-SHA256 (100,000 iterations)',
      'Configurable auto-lock timeouts (Immediate, 30s, 1m, 5m, 15m)',
      'Screen Privacy Shield blocks Android recents previews and screenshots',
    ],
    screenshotId: 'security-center',
    iconName: 'Lock',
    badge: 'Hardware Security',
  },
  {
    id: 'encrypted-sync',
    title: 'Server-Blind Cloud Sync',
    tagline: 'End-to-end encrypted synchronization across trusted devices',
    description:
      'Sync your vault across multiple devices without trusting the cloud. Every item payload is sealed with AES-256-GCM before transmission. The server only sees blinded ciphertext and monotonic revision IDs.',
    bullets: [
      'Zero-knowledge architecture: server never sees unencrypted seeds or keys',
      'Device pairing with one-time verification tokens and device revocation',
      'Atomic outbox synchronization with automatic conflict resolution',
      'Fully optional: use 100% offline or connect for encrypted cloud backup',
    ],
    screenshotId: 'devices-sync',
    iconName: 'Cloud',
    badge: 'Optional & Encrypted',
  },
];
