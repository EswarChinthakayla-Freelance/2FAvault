# Release Process & Governance

This document describes the release engineering lifecycle, versioning guidelines, and quality gates for **2FA Vault**.

---

## 1. Versioning Scheme

Production releases adhere to **Semantic Versioning 2.0.0** (`MAJOR.MINOR.PATCH`):
- **`MAJOR`:** Incompatible changes or cryptographic protocol upgrades.
- **`MINOR`:** New functionality, screen additions, or storage features (backwards-compatible).
- **`PATCH`:** Bug fixes, UI contrast refinements, and performance patches.

---

## 2. Release Artifacts

Direct-download releases published to GitHub Releases must include:
- `2fa-vault-vX.Y.Z.apk` (Universal signed APK)
- `2fa-vault-vX.Y.Z.sha256` (Integrity checksum manifest)

---

## 3. Pre-Flight Release Verification Gates

Before any build is designated for production, it must pass all 8 release gates:

```bash
npm run release:check
```

The release checklist enforces:
1. **Static No-Secrets Scanner:** Zero forbidden API keys or test credentials.
2. **Sensitive Logging Scanner:** Zero plaintext secrets in log sinks.
3. **Icon Audit:** 100% Hugeicons compliance with zero missing glyphs.
4. **Bundle Footprint Audit:** Lean dependency tree with zero duplicate UI libraries.
5. **Environment Configuration Validation:** Valid production endpoints.
6. **Production App & EAS Audit:** Minimized permissions and clean routing tree.
7. **TypeScript Typecheck:** Zero compiler errors (`tsc --noEmit`).
8. **Automated Test Suite:** 100% pass rate across all 474+ cryptographic, unit, and integration tests.

---

## 4. Publishing Workflow

1. Update version number in `package.json`, `app.json`, and `app.config.ts`.
2. Update release notes in `CHANGELOG.md` and `web/src/data/releases.ts`.
3. Run `npm run release:check`.
4. Build the release APK via EAS CLI (`npm run build:apk`).
5. Calculate the SHA-256 hash (`Get-FileHash ...`).
6. Create a Git release tag (`git tag v1.0.0`).
7. Create a new GitHub Release using `.github/RELEASE_TEMPLATE.md`.
8. Attach the APK binary and publish.
9. Deploy the updated showcase website on Vercel.
