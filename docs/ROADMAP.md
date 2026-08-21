# Product Roadmap

This document outlines the milestones, current release status, and upcoming architectural enhancements for **2FA Vault**.

---

## 🏁 Completed in v1.0.0 (General Availability)
- [x] **RFC 6238 & RFC 4226 Engine:** Offline TOTP/HOTP with SHA-1, SHA-256, SHA-512.
- [x] **Single-Use Recovery Code Vault:** Attach, track, and import recovery credentials.
- [x] **Zero-Knowledge Architecture:** AES-256-GCM client-side encryption with Android Keystore.
- [x] **Armored Recovery Key System:** 24-character emergency key derivation via PBKDF2 (100,000 rounds).
- [x] **Avatar Studio:** Curated offline brand catalog with automatic resolution.
- [x] **Spaces Organization:** Personal, Work, Cloud, and Crypto Spaces.
- [x] **Screen Privacy Shield & Auto-Clear Clipboard:** Prevent screenshot leaks and auto-wipe copied tokens.
- [x] **Multi-Device Synchronization:** Monotonic server-blind encrypted replication layer.
- [x] **Universal APK Distribution:** Standalone release pipeline with SHA-256 validation.

---

## 🚀 Upcoming in v1.1.0 – v1.2.0
- [ ] **FIDO2 / WebAuthn Hardware Key Support:** Store and manage hardware security key configurations.
- [ ] **Wear OS Companion App:** View current TOTP codes directly from your smartwatch with encrypted Bluetooth pairing.
- [ ] **Encrypted File Export:** Export password-protected encrypted vault archives (`.2fvault`).
- [ ] **Custom Category & Tag Colors:** Personalized visual tagging for Spaces.

---

## 🔭 Future Horizons (v2.0+)
- [ ] **Browser Extension (Chrome / Firefox / Brave):** Secure companion extension for one-click autofill with end-to-end device-paired channel.
- [ ] **Desktop Client (macOS / Linux / Windows):** Cross-platform standalone desktop companion.
- [ ] **Third-Party Security Audit:** Formal published cryptographic audit from an independent security firm.
