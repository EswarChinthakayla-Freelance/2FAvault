import { FaqItem } from '../types/site';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'offline-mode',
    category: 'general',
    question: 'Does 2FA Vault work completely offline?',
    answer:
      'Yes. 2FA Vault is built local-first. You can install the app, scan QR codes, generate TOTP/HOTP codes, store recovery credentials, and configure App Lock without ever connecting to the internet. Network connectivity is only required if you choose to enable optional multi-device cloud synchronization.',
  },
  {
    id: 'server-secrets',
    category: 'security',
    question: 'Can the server or developers see my TOTP secrets?',
    answer:
      'No. All TOTP secret seeds, account metadata, recovery codes, and notes are encrypted on your device using AES-256-GCM before anything is persisted to local storage or transmitted to the sync server. The encryption key (Vault Master Key) is generated on your device and never uploaded to any server.',
  },
  {
    id: 'lost-device',
    category: 'recovery',
    question: 'What happens if I lose my phone or break it?',
    answer:
      'If you lose your device, you can restore your accounts on a new phone using your 24-character Emergency Recovery Key (provided during setup) together with your cloud backup or an exported encrypted backup file. Without your Recovery Key or an active trusted device, zero-knowledge data cannot be recovered.',
  },
  {
    id: 'recovery-key-explanation',
    category: 'recovery',
    question: 'What is the Emergency Recovery Key and how is it used?',
    answer:
      'The Emergency Recovery Key is an armored, 24-character cryptographic token formatted in Crockford Base32. It uses PBKDF2-HMAC-SHA256 (100,000 iterations) with a dedicated salt to derive the key needed to unwrap your Vault Master Key if biometric access or local device storage is lost.',
  },
  {
    id: 'import-recovery-codes',
    category: 'general',
    question: 'Can I import 2FA backup codes from text or JSON files?',
    answer:
      'Yes. 2FA Vault features an integrated Recovery Code parser supporting plain line-separated text files (.txt) and structured JSON files (.json). The app automatically normalizes codes, removes duplicates, and associates them directly with the target account.',
  },
  {
    id: 'direct-apk-download',
    category: 'installation',
    question: 'Can I download the APK directly instead of using the Play Store?',
    answer:
      'Yes. We provide official signed APKs directly on our Download page. Each release includes a verified SHA-256 cryptographic checksum so you can verify file integrity before installation.',
  },
  {
    id: 'android-apk-warning',
    category: 'installation',
    question: 'Why does Android warn me when installing the downloaded APK?',
    answer:
      'Android displays a standard "Install unknown apps" security warning whenever you install an application outside of Google Play. This is normal system behavior for sideloaded APKs. You can verify that the downloaded file matches our published SHA-256 checksum to ensure it has not been tampered with.',
  },
  {
    id: 'sign-in-decryption',
    category: 'sync',
    question: 'Does signing in to an account decrypt my vault?',
    answer:
      'No. User authentication (via Supabase Auth or Cloudflare) handles identity and device registration only. Your account password/session tokens are cryptographically isolated from your Vault Master Key. Authenticating to the sync service does not grant the server access to your plaintext secrets.',
  },
  {
    id: 'multi-device-sync',
    category: 'sync',
    question: 'How does multi-device synchronization work securely?',
    answer:
      'When you link a secondary device, it is authenticated through a trusted device pairing flow. Once authorized, devices exchange encrypted sync records containing only AES-256-GCM ciphertext. Each device decrypts records locally using the shared Vault Master Key.',
  },
  {
    id: 'revoked-device',
    category: 'security',
    question: 'Can a revoked device still access my data?',
    answer:
      'Revoking a device immediately stops it from receiving future cloud updates and invalidates its sync session. However, because data is stored locally on the device, any items that were already decrypted and cached on that physical hardware prior to revocation remain on that hardware until the app is uninstalled or cleared.',
  },
];
