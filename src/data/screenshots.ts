export type ScreenshotItem = {
  id: string;
  title: string;
  category: 'vault' | 'recovery' | 'organization' | 'security' | 'customization';
  description: string;
  image: string;
  alt: string;
  badge?: string;
};

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'vault-home',
    title: 'Instant TOTP Generation',
    category: 'vault',
    description:
      'Crisp 6-digit and 8-digit codes with live countdown rings, one-tap copy, and zero network requirement.',
    image: '/screenshots/screen-home.png',
    alt: '2FA Vault main account list displaying active 2FA codes with circular countdown timers',
    badge: 'Local-First',
  },
  {
    id: 'recovery-codes',
    title: 'Integrated Recovery Vault',
    category: 'recovery',
    description:
      'Keep backup codes alongside the account they protect. Concealed by default, one-tap reveal, and automatic clipboard purge.',
    image: '/screenshots/screen-recovery.png',
    alt: '2FA Vault recovery codes management screen showing encrypted backup codes with used indicators',
    badge: 'Encrypted',
  },
  {
    id: 'spaces-organization',
    title: 'Spaces & Smart Tags',
    category: 'organization',
    description:
      'Categorize sensitive accounts into Personal, Work, Cloud, and Crypto Spaces. Instant search across all accounts.',
    image: '/screenshots/screen-spaces.png',
    alt: 'Account organization screen with Spaces and colored tags',
    badge: 'Spaces',
  },
  {
    id: 'avatar-studio',
    title: 'Brand Avatars & Custom Studio',
    category: 'customization',
    description:
      'Deterministic geometric fallback avatars or curated brand SVG logos with customizable color accents.',
    image: '/screenshots/screen-avatars.png',
    alt: 'Avatar Studio screen showing geometric avatars and brand logo customization options',
    badge: 'Customization',
  },
  {
    id: 'security-center',
    title: 'App Lock & Biometrics',
    category: 'security',
    description:
      'Hardware-backed biometrics (Fingerprint/Face), PIN fallback, auto-lock on blur, and Screen Privacy Shield.',
    image: '/screenshots/screen-security.png',
    alt: 'Security Center screen showing biometric unlock, PIN protection, and privacy shield settings',
    badge: 'Security',
  },
  {
    id: 'devices-sync',
    title: 'End-to-End Encrypted Sync',
    category: 'security',
    description:
      'Seamless multi-device sync. All payloads are encrypted locally with your Vault Master Key before leaving the phone.',
    image: '/screenshots/screen-devices.png',
    alt: 'Trusted Devices management screen showing active synced devices',
    badge: 'Zero-Knowledge',
  },
];
