# Frequently Asked Questions (FAQ)

---

### General Questions

#### 1. What makes 2FA Vault different from standard authenticator apps?
Most authenticator apps only store TOTP keys and leave your single-use account recovery codes in unencrypted text files or spreadsheets. 2FA Vault bridges this gap by managing both **TOTP codes** and **single-use recovery codes** together in one unified, zero-knowledge encrypted vault.

#### 2. Does 2FA Vault work without an internet connection?
**Yes, 100%.** TOTP code calculation is purely mathematical and relies on your device clock. You can generate codes, view recovery codes, and organize your vault entirely offline in Airplane Mode.

---

### Security & Cryptography

#### 3. How are my credentials encrypted?
All secrets are encrypted with **256-bit AES-GCM** using a locally generated Vault Master Key (VMK). The VMK is hardware-wrapped using your device's biometric keystore.

#### 4. Can the 2FA Vault backend see or decrypt my accounts?
**No.** All encryption and decryption happen exclusively on your device before any data is stored in SQLite or synced. The backend receives only encrypted ciphertext.

#### 5. What happens if I lose my phone?
When you first set up 2FA Vault, you receive a **24-character Armored Emergency Recovery Key** (`2FV1-XXXX-...`). You can install 2FA Vault on a new device, sign in, and enter your recovery key to decrypt and restore all your accounts and recovery codes.

---

### Synchronization & Devices

#### 6. Is cloud sync mandatory?
**No.** Cloud sync is completely optional. You can use 2FA Vault in 100% offline standalone mode.

#### 7. How does multi-device sync work securely?
When sync is enabled, records are encrypted on device A and synchronized over an encrypted transport to device B. Only devices authorized with your account credentials can exchange encrypted records.

#### 8. How do I revoke a lost or stolen device?
In **Settings $\rightarrow$ Devices**, tap **Revoke** next to any authorized device. This immediately invalidates that device's sync token and isolates your vault.
