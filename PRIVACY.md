# Privacy Policy

**Effective Date:** August 21, 2026

At **2FA Vault**, privacy is not an afterthought or an optional toggle — it is mathematically guaranteed by our architecture.

---

## 1. Zero Knowledge by Design

- **No Secret Access:** We cannot decrypt, view, index, search, or analyze your TOTP secrets, recovery codes, account names, or notes.
- **Local Key Ownership:** Your encryption keys are generated locally on your hardware and never leave your devices in plaintext.
- **No Third-Party Trackers:** 2FA Vault contains zero third-party analytics SDKs, advertising libraries, tracking pixels, or user profiling tools.

---

## 2. Information We Do NOT Collect

We **never** collect, transmit, or store:
- Plaintext TOTP / HOTP shared secret keys.
- Single-use account recovery codes.
- Biometric biometric data (handled exclusively by Android OS BiometricPrompt hardware).
- Master passwords, PINs, or emergency recovery keys.
- Application usage tracking, account identifiers, or service lists.

---

## 3. Optional Encrypted Synchronization

If you choose to enable cloud synchronization:
- **Ciphertext Only:** Only client-side encrypted payloads (AES-256-GCM), authentication tags, and non-sensitive version cursors are transmitted to the sync backend.
- **Authenticated Device Access:** Only devices authenticated with your account credentials can exchange encrypted records.
- **Immediate Revocation:** Revoking a device removes its sync access immediately.

---

## 4. Android Device Permissions

2FA Vault requests only the minimum permissions necessary for its features:

| Permission | Purpose |
| :--- | :--- |
| **`CAMERA`** | Required solely to scan TOTP setup QR codes in real time. Video feeds and frames are processed strictly in device memory and never transmitted or recorded. |
| **`USE_BIOMETRIC` / `USE_FINGERPRINT`** | Unlocks the local Key Encryption Key (KEK) using Android's hardware keystore. Biometric data never leaves the device's Secure Enclave/TEE. |

---

## 5. Contact

For privacy-related questions or audit requests:
- **Email:** `privacy@twosides.twosecurevault.com`
- **GitHub Repository:** [github.com/EswarChinthakayla-Freelance/2FAvault](https://github.com/EswarChinthakayla-Freelance/2FAvault)
