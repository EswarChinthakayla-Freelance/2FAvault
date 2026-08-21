# System Architecture

**2FA Vault** is structured around a local-first, zero-knowledge architectural pattern. All sensitive operations—cryptographic key derivation, TOTP computation, single-use recovery code encryption, and database persistence—occur strictly on-device.

---

## High-Level Architecture Diagram

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           2FA Vault Mobile App                          │
│                                                                         │
│  ┌───────────────────────┐             ┌─────────────────────────────┐  │
│  │   UI & Navigation     │             │     RFC 6238/4226 Engine    │  │
│  │  (React Native / Expo)│             │     (Offline TOTP/HOTP)     │  │
│  └──────────┬────────────┘             └──────────────┬──────────────┘  │
│             │                                         │                 │
│             ▼                                         ▼                 │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                     Vault Master Key Engine                       │  │
│  │      256-bit AES-GCM + Android Keystore Hardware Backing (KEK)    │  │
│  └──────────────────────────────────┬────────────────────────────────┘  │
│                                     │                                   │
│                  ┌──────────────────┴──────────────────┐                │
│                  ▼                                     ▼                │
│  ┌─────────────────────────────┐     ┌───────────────────────────────┐  │
│  │   Encrypted Local SQLite    │     │   Server-Blind Sync Engine    │  │
│  │   (Offline Local-First DB)  │     │   (Monotonic Version Vector)  │  │
│  └─────────────────────────────┘     └───────────────┬───────────────┘  │
└──────────────────────────────────────────────────────┼──────────────────┘
                                                       │ (Encrypted Ciphertext Only)
                                                       ▼
                                       ┌───────────────────────────────┐
                                       │   Zero-Knowledge Sync Cloud   │
                                       │   (Storage & Device Routing)  │
                                       └───────────────────────────────┘
```

---

## Core Subsystems

### 1. Offline TOTP / HOTP Engine
- **RFC Compliance:** Implements RFC 6238 (Time-Based One-Time Passwords) and RFC 4226 (HMAC-Based One-Time Passwords).
- **Supported Hash Algorithms:** SHA-1, SHA-256, and SHA-512.
- **Configurable Period & Digits:** Standard 30s period with support for 15s–120s steps, and 6, 7, or 8 digit codes.
- **Clock Drift Compensation:** Local calculation uses system epoch timestamp with configurable drift windows.

---

### 2. Recovery Code Vault Subsystem
- **Single-Use Tracking:** Stores and manages emergency account recovery codes associated with individual 2FA entries.
- **Duplicate Detection:** Automatic canonicalization and duplicate filtering upon manual entry or file import.
- **Supported File Formats:** Direct line-delimited `.txt` import and structured JSON backup formats.

---

### 3. Key Wrapping & Security Subsystem
- **Vault Master Key (VMK):** A 32-byte cryptographically secure random key (`crypto.getRandomValues`) that encrypts all vault items.
- **Key Encryption Key (KEK):** Master key wrapping using biometric credentials and hardware-backed Android Keystore.
- **Emergency Recovery Key:** 24-character human-readable armored string formatted as `2FV1-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX`. Derived via PBKDF2 (HMAC-SHA256, 100,000 iterations).

---

### 4. Server-Blind Synchronization
- **Transport Security:** All sync payloads consist of encrypted ciphertext (`ciphertext`, `iv`, `authTag`), monotonic record version, and item metadata.
- **Conflict Resolution:** Server-blind Last-Write-Wins (LWW) resolution based on monotonic revisions.
- **Device Authorization:** Cryptographic session tokens and per-device identifiers enable rapid remote device revocation.
