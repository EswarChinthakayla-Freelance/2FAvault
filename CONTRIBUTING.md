# Contributing to 2FA Vault

Thank you for your interest in contributing to **2FA Vault**! We welcome bug reports, documentation improvements, feature suggestions, and code contributions from the community.

---

## Code of Conduct

All contributors and maintainers are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating in our project discussions or submitting pull requests.

---

## How Can I Contribute?

### 1. Reporting Bugs
- Search existing [GitHub Issues](https://github.com/EswarChinthakayla-Freelance/2FAvault/issues) to ensure your issue hasn't already been reported.
- If it hasn't, open a new issue using the **[Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.yml)**.
- Include clear reproduction steps, platform information, and sanitized logs.
- **Never include real credentials or TOTP secrets in bug reports.**

### 2. Requesting Features
- Open a feature request using the **[Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.yml)**.
- Describe the problem you are trying to solve and your proposed solution.

### 3. Submitting Pull Requests (PRs)
1. Fork the repository and create a descriptive feature branch from `main`:
   ```bash
   git checkout -b feat/my-new-feature
   ```
2. Ensure your code passes all type checks and pre-flight tests:
   ```bash
   npm run typecheck
   npm test
   npm run release:check
   ```
3. Commit your changes with a clear conventional commit message (`feat: ...`, `fix: ...`, `docs: ...`).
4. Push to your branch and open a Pull Request against `main`.

---

## Development Workflow

### Requirements
- Node.js 20.x or higher
- npm 10.x or higher
- Expo CLI / Android SDK (for mobile development)

### Setup
```bash
# Clone the repository
git clone https://github.com/EswarChinthakayla-Freelance/2FAvault.git
cd 2FAvault

# Install dependencies
npm install

# Run test suite
npm test

# Run pre-flight release gate check
npm run release:check
```

---

## Security Considerations for Code Contributions
- **Zero-Knowledge Principle:** No secret or credential should ever be logged, sent in telemetry, or stored unencrypted.
- **Data Classification:** Respect Level 1 (Public/Metadata), Level 2 (Identity), and Level 3 (Secret) data classification boundaries.
- **Crypto Library Usage:** Use audited cryptographic primitives (`@noble/ciphers`, `@noble/hashes`) and avoid custom crypto implementations.
