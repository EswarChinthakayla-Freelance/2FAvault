import { SecurityPrinciple } from '../types/site';

export const SECURITY_PRINCIPLES: SecurityPrinciple[] = [
  {
    id: 'local-first',
    title: 'Local-First Execution',
    summary: 'Your secrets never leave your device unencrypted under any circumstance.',
    technicalDetails:
      'All cryptographic operations—including TOTP calculations, key generation, payload encryption, and recovery code handling—are performed exclusively on your client device using hardware-accelerated WebCrypto/Noble primitives.',
    iconName: 'Cpu',
  },
  {
    id: 'authenticated-encryption',
    title: 'AES-256-GCM Authenticated Encryption',
    summary: 'Zero-knowledge encryption with contextual Additional Authenticated Data (AAD).',
    technicalDetails:
      'Vault items are sealed with 256-bit AES-GCM using unique, non-repeating 12-byte random nonces and canonical structured AAD binding the user ID, vault ID, item ID, and kind. Any tampering with ciphertext or metadata immediately invalidates the cryptographic authentication tag.',
    iconName: 'Shield',
  },
  {
    id: 'key-hierarchy',
    title: 'Three-Tier Key Hierarchy',
    summary: 'Hardware-wrapped Master Keys with separate Key Encryption Keys (KEKs).',
    technicalDetails:
      'The 256-bit Vault Master Key (VMK) is wrapped using an AES-256-GCM KEK protected by Android KeyStore/Biometrics. The VMK never touches disk in plaintext. When unlocked, it resides strictly in volatile memory and is scrubbed on lock.',
    iconName: 'Key',
  },
  {
    id: 'emergency-recovery',
    title: 'User-Controlled Recovery Authority',
    summary: '24-character armored recovery key derived via PBKDF2-HMAC-SHA256.',
    technicalDetails:
      'During setup, an Emergency Recovery Key is generated and formatted with Crockford Base32 grouping. PBKDF2-HMAC-SHA256 with 100,000 iterations and dedicated salt derives a recovery KEK capable of unwrapping the VMK package without server interaction.',
    iconName: 'LifeBuoy',
  },
  {
    id: 'screen-clipboard-privacy',
    title: 'Ephemeral Memory & Privacy Shield',
    summary: 'Automatic clipboard purging and Android Recents masking.',
    technicalDetails:
      'Copied OTP codes and recovery codes are automatically flushed from system clipboard after 30 seconds. Android FLAG_SECURE prevents unauthorized screenshots, screen recording, and exposure in the Android task switcher recents menu.',
    iconName: 'EyeOff',
  },
  {
    id: 'server-blind-sync',
    title: 'Server-Blind Sync Architecture',
    summary: 'The cloud coordinates encrypted blobs and monotonic revision numbers.',
    technicalDetails:
      'When optional cloud sync is enabled, the backend only receives encrypted ciphertext blobs, item UUIDs, and version cursors. Cloudflare Workers and Supabase have zero access to the VMK or plaintext account details.',
    iconName: 'CloudOff',
  },
];

export const SECURITY_LIMITATIONS = [
  {
    title: 'Compromised or Rooted OS',
    description:
      'If your Android operating system is compromised with kernel-level malware or an untrusted root exploit, in-memory keys could theoretically be intercepted during active unlocked execution.',
  },
  {
    title: 'Lost Recovery Key + Forgotten PIN/Biometrics',
    description:
      'Because 2FA Vault uses genuine zero-knowledge encryption, there is no backdoor or remote reset. If you lose your device and your Emergency Recovery Key, your vault cannot be decrypted by anyone, including the 2FA Vault maintainers.',
  },
  {
    title: 'Cloud Metadata Disclosure',
    description:
      'When using optional cloud sync, the server can observe synchronization frequency, timestamps, ciphertext payload byte sizes, and device connection identifiers, though never the contents within.',
  },
];
