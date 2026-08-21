# 2FA Vault

A privacy-focused authenticator for securely managing time-based one-time passwords (TOTP), single-use recovery codes, encrypted backups, and trusted-device synchronization.

---

## Overview

**2FA Vault** is designed around a strict local-first, zero-knowledge security model.

Your authenticator data remains usable and fully functional on-device even when you are offline or cloud synchronization is unavailable.

---

## Highlights

- **TOTP Authenticator Accounts:** RFC 6238 and RFC 4226 compliant (SHA-1, SHA-256, SHA-512).
- **QR Code Scanning & Image Import:** High-speed camera scanner with zero-telemetry local decoding and gallery import.
- **Manual Account Setup:** Full support for custom periods (15s–120s), variable digit lengths (6–8 digits), and custom issuers.
- **Recovery Code Vault:** Dedicated single-use recovery credential management attached directly to 2FA accounts.
- **Spaces & Organization:** Segment accounts into Personal, Work, Cloud, Crypto, and custom Spaces with tags and favorites.
- **Zero-Knowledge Encryption:** AES-256-GCM local storage with biometric Key Encryption Key (KEK) wrapping.
- **Emergency Recovery Key:** 24-character armored recovery key derived via PBKDF2 with 100,000 iterations.
- **Trusted Multi-Device Sync:** Optional server-blind monotonic sync engine over encrypted transport.
- **App Lock & Biometrics:** Instant re-authentication, inactivity auto-lock, and PIN fallback.
- **Privacy & Screen Protection:** Android `FLAG_SECURE` screen shielding and automatic clipboard purge.
- **Modern Themes & Accessibility:** Strict monochrome light and dark modes with reduced-motion support.

---

## Security Model

2FA Vault follows a client-side zero-knowledge encryption architecture:

- **Local-First Cryptography:** Sensitive vault information is encrypted on your device with AES-256-GCM before it is persisted to SQLite or synchronized.
- **Server-Blind Synchronization:** The synchronization backend coordinates encrypted records and monotonically advancing version vectors; it cannot decrypt or view your credentials.
- **Hardware-Protected Keys:** Master encryption keys are protected using Android Keystore and biometric hardware backing.

See [`docs/SECURITY-MODEL.md`](./docs/SECURITY-MODEL.md) for the complete security architecture and threat model.

---

## Local-First

Core authenticator functionality does not require a network connection.

TOTP generation is performed locally using the device clock. Cloud synchronization is an optional replication layer and never determines whether locally stored authenticator codes work.

---

## Download

Official Android builds are published through GitHub Releases and the official 2FA Vault website:

- **Website Download:** [2fa-vault.vercel.app/download](https://2-f-avault.vercel.app/download)
- **GitHub Releases:** [github.com/EswarChinthakayla-Freelance/2FAvault/releases](https://github.com/EswarChinthakayla-Freelance/2FAvault/releases)

For APK verification instructions, see [`docs/VERIFY-APK.md`](./docs/VERIFY-APK.md).

---

## Releases

Each production release includes:

- Version number and build tag
- Android Universal APK (`arm64-v8a`, `armeabi-v7a`, `x86_64`)
- SHA-256 integrity checksum
- Detailed changelog and release notes
- Upgrade notes and cryptographic migration paths

See [`CHANGELOG.md`](./CHANGELOG.md) for complete version history.

---

## Technology Stack

### Mobile Application
- **Framework:** React Native, Expo SDK 57, Expo Router
- **Language:** TypeScript 5.9 (Strict Type Checking)
- **Database:** Local-First SQLite (`expo-sqlite`) with AES-256-GCM encrypted payload columns
- **Cryptography:** `@noble/ciphers` (AES-256-GCM), `@noble/hashes` (PBKDF2, SHA-256, HMAC)
- **Hardware Integration:** `expo-secure-store`, `expo-local-authentication`, `expo-screen-capture`

### Showcase Website
- **Framework:** React 19, Vite, TypeScript
- **Styling:** Tailwind CSS v4 (Monochrome Dark & Light Themes)
- **Icons:** Hugeicons React Free Core Catalog

---

## Privacy Policy

2FA Vault is built on the principle of minimal data collection. We do not track, log, profile, or monetize your authentication secrets.

See [`PRIVACY.md`](./PRIVACY.md).

---

## Reporting Security Issues

Please **do not** disclose security vulnerabilities through public GitHub issues.

See [`SECURITY.md`](./SECURITY.md) for our responsible disclosure process.

---

## Documentation

- [System Architecture](docs/ARCHITECTURE.md)
- [Security Model & Cryptography](docs/SECURITY-MODEL.md)
- [Downloads & Distribution](docs/DOWNLOADS.md)
- [APK Verification Guide](docs/VERIFY-APK.md)
- [Release Process](docs/RELEASES.md)
- [Changelog](CHANGELOG.md)
- [Frequently Asked Questions](docs/FAQ.md)
- [Project Roadmap](docs/ROADMAP.md)

---

## Disclaimer

2FA Vault is security-sensitive software. Keep independent recovery methods for important accounts and verify downloaded application packages before installation.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
