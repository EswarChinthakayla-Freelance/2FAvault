# Security Policy

Security and zero-knowledge privacy are the core design requirements of **2FA Vault**.

---

## Reporting a Vulnerability

Please **do not report security vulnerabilities through public GitHub issues**.

If you discover a potential security flaw, cryptographic weakness, or vulnerability in 2FA Vault, please report it via private security advisory on GitHub or via email to the security response team:

- **GitHub Private Vulnerability Reporting:** [Open Security Advisory](https://github.com/EswarChinthakayla-Freelance/2FAvault/security/advisories/new)
- **Security Contact:** `security@twosides.twosecurevault.com`

### What to Include in Your Report
To help us triage and resolve the issue quickly, please provide:
1. Affected version and platform (e.g., Android 14, 2FA Vault v1.0.0).
2. Clear step-by-step instructions to reproduce the issue.
3. Observed behavior vs. expected secure behavior.
4. An assessment of potential security impact and exploitability.

> [!CAUTION]
> **Never include real TOTP secrets, recovery codes, passwords, private keys, or actual user credentials in vulnerability reports.**

---

## Security Architecture Summary

2FA Vault operates on a **zero-knowledge, local-first trust model**:

1. **Client-Side Encryption:** All authentication secrets (TOTP keys, backup codes, custom notes) are encrypted on the client device using AES-256-GCM before storage or transmission.
2. **Master Key Protection:** The 256-bit Vault Master Key (VMK) is wrapped by a Key Encryption Key (KEK) backed by hardware-backed Android Keystore and local biometrics.
3. **Server-Blind Synchronization:** The sync server only receives ciphertext, initialization vectors, and monotonically advancing version vectors. It has zero knowledge of the keys and cannot decrypt your data.
4. **Emergency Recovery:** An armored 24-character recovery key (derived via PBKDF2 with 100,000 iterations) enables device recovery without cloud key custody.

For complete cryptographic design details, see [`docs/SECURITY-MODEL.md`](./docs/SECURITY-MODEL.md).

---

## Supported Versions

| Version | Supported | Security Patches |
| :--- | :--- | :--- |
| **`v1.0.x` (Latest Stable)** | ✅ Yes | Active |
| **`< v1.0.0` (Legacy / Alpha)** | ❌ No | Best effort only |

---

## APK Verification

Always verify official APK release checksums before installing:

See [`docs/VERIFY-APK.md`](./docs/VERIFY-APK.md).
