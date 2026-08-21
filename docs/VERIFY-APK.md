# Verify an Android APK

Always download 2FA Vault from an official release source and verify its cryptographic checksum before sideloading or installing.

---

## 1. Download

Download the APK and copy its published **SHA-256 Checksum** from the official release page or website.

---

## 2. Calculate the SHA-256 Checksum

Open a terminal or command prompt and run the command for your operating system:

### Windows (PowerShell)
```powershell
Get-FileHash 2fa-vault-1.0.0.apk -Algorithm SHA256
```

### Windows (Command Prompt)
```cmd
certutil -hashfile 2fa-vault-1.0.0.apk SHA256
```

### macOS
```bash
shasum -a 256 2fa-vault-1.0.0.apk
```

### Linux
```bash
sha256sum 2fa-vault-1.0.0.apk
```

---

## 3. Compare the Result

The calculated SHA-256 hash must **match character-for-character** with the checksum published for that release.

```text
Expected Hash: 61D47138F89B4D345689B494B0E77B4D7E1A3730EDCBAB0A69BD1FDEBA9EF0B1
Calculated Hash: 61D47138F89B4D345689B494B0E77B4D7E1A3730EDCBAB0A69BD1FDEBA9EF0B1
```

> [!CAUTION]
> **If the checksums do not match:**
> **DO NOT INSTALL THE APK.**
> Delete the file immediately and re-download from an official repository channel.

---

## Why Checksum Verification Matters
A cryptographic checksum guarantees that:
1. The file was not corrupted during transit.
2. The APK has not been altered, tampered with, or injected with malicious code.
