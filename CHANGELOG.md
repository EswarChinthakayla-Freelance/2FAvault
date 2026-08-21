# Changelog

All notable changes to **2FA Vault** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Hardware security key integration planning (FIDO2/WebAuthn).
- Desktop client preview architecture.

---

## [1.0.0] - 2026-08-21

### Added
- **100% Offline TOTP / HOTP Engine:** RFC 6238 and RFC 4226 compliant with SHA-1, SHA-256, and SHA-512 support.
- **Integrated Recovery Code Vault:** Single-use recovery credential storage attached to accounts with duplicate detection and `.txt`/`.json` import.
- **Spaces & Custom Tag Organization:** Segregate accounts into Personal, Work, Cloud, and Crypto Spaces.
- **Avatar Studio:** Curated offline brand catalog with 40+ brand badges and deterministic avatar fallbacks.
- **Encrypted Cloud Sync:** Monotonic, server-blind encrypted replication layer.
- **Trusted Device Management:** Manage and revoke authorized sync devices with cryptographic session invalidation.
- **Screen Privacy Shield:** Android `FLAG_SECURE` integration preventing unauthorized screenshots and app-switcher recording.
- **Clipboard Protection:** Auto-clearing clipboard monitor with token verification.
- **App Lock & Biometrics:** Biometric authentication with PIN fallback and inactivity timeout.
- **Monochrome Design System:** High-contrast light and dark themes with reduced-motion accessibility.

### Security
- Zero-knowledge AES-256-GCM local storage.
- Biometric Key Encryption Key (KEK) wrapping using Android Keystore.
- 24-character armored emergency recovery key derived via PBKDF2 with 100,000 iterations.
- Strict data classification rules preventing Level 2 (Identity) and Level 3 (Secrets) leakage in database and logs.
