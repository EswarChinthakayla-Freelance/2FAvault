# Cryptographic Security Model & Threat Model

This document specifies the security guarantees, key derivation hierarchy, and threat boundaries of **2FA Vault**.

---

## 1. Cryptographic Key Hierarchy

```text
┌────────────────────────────────────────────────────────┐
│               Vault Master Key (VMK)                   │
│             32-byte Cryptographic Random               │
└───────────┬────────────────────────────────┬───────────┘
            │ Wrapped by                     │ Wrapped by
            ▼                                ▼
┌───────────────────────┐        ┌───────────────────────┐
│ Key Encryption Key    │        │  Armored Recovery Key │
│        (KEK)          │        │      (24-char)        │
│  Hardware Keystore    │        │  PBKDF2-HMAC-SHA256   │
│  + Biometric Prompt   │        │   100,000 Iterations  │
└───────────────────────┘        └───────────────────────┘
```

### Vault Master Key (VMK)
- **Generation:** Generated on device initialization via secure random byte generation (`crypto.getRandomValues(new Uint8Array(32))`).
- **Function:** Symmetric key used with AES-256-GCM to encrypt/decrypt sensitive fields in the SQLite database and sync packets.
- **In-Memory Lifetime:** Held in memory only while the vault is in an `unlocked` state. Automatically zeroized upon inactivity timeout or background transition.

### Key Encryption Key (KEK)
- **Backing:** Stored in Android Keystore / `expo-secure-store`.
- **Biometric Gate:** Unlocking requires active user authentication via `BiometricPrompt` (Fingerprint/Face Unlock).

### Armored Emergency Recovery Key
- **Format:** `2FV1-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX` (Base32 alphabet excluding easily confused characters).
- **Derivation:** PBKDF2 with HMAC-SHA256, 100,000 iterations, and a 16-byte random salt.
- **Purpose:** Restores access on a new device or in case biometric hardware configuration changes without server assistance.

---

## 2. Threat Model & Mitigations

| Threat Vector | Mitigation Strategy |
| :--- | :--- |
| **Compromised Sync Backend / Database Breach** | Zero-Knowledge Architecture. The backend only stores AES-256-GCM ciphertexts; it possesses no keys and cannot decrypt records. |
| **Physical Device Loss / Theft** | The SQLite database stores sensitive credentials encrypted at rest. Unlocking requires hardware-backed biometric verification or master recovery key. |
| **Malicious Background Apps / Screen Scraping** | Android `FLAG_SECURE` (`expo-screen-capture`) shields the app view from screen recording and Android Recent Apps screenshots. |
| **Clipboard Snooping** | Copying TOTP codes or recovery codes registers an auto-clearing background timer that securely wipes the system clipboard. |
| **Network Man-in-the-Middle (MitM)** | All communication utilizes TLS 1.3 encryption with payload-level client-side encryption. |

---

## 3. Data Classification Boundaries

2FA Vault enforces three strict data sensitivity tiers across the codebase:

- **Level 1 (Public / Operational):** Non-sensitive metadata (e.g., local timestamp, record UUID, monotonic revision integer). Allowed in SQLite plain columns and diagnostic logs.
- **Level 2 (Identity / Contextual):** User account identifiers, space names, service titles.
- **Level 3 (Secret / Zero-Knowledge):** TOTP shared secrets, single-use recovery codes, encryption keys, and secure notes. **Must never appear in plaintext logs, unencrypted database columns, or server payloads.**
