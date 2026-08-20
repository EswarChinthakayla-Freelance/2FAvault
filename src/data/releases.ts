import { Release } from '../types/release';

export const RELEASES: Release[] = [
  {
    version: '1.0.0',
    build: 42,
    releasedAt: '2026-08-20',
    title: 'Initial General Availability Release',
    summary:
      'The foundational release of 2FA Vault featuring zero-knowledge AES-256-GCM local storage, offline TOTP generation, recovery code storage with import, and end-to-end encrypted sync.',
    apkUrl: '/downloads/2fa-vault-1.0.0.apk',
    playStoreUrl: undefined, // Google Play coming soon
    apkSha256: 'c91e4f9b83a216dc7e48b901fc88e9198302fa998311ab244b4198ec517373ac',
    apkSizeBytes: 26004684, // ~24.8 MB
    minimumAndroid: 'Android 10 (API 29)+',
    targetArchitecture: 'Universal APK (arm64-v8a, armeabi-v7a, x86_64)',
    status: 'stable',
    isLatest: true,
  },
];

export const LATEST_RELEASE: Release = RELEASES.find((r) => r.isLatest) || RELEASES[0];

export const PACKAGE_INFO = {
  packageName: 'com.twobuffers.twobvault',
  appName: '2FA Vault',
  author: '2FA Vault Open Source Contributors',
  license: 'MIT',
  repositoryUrl: 'https://github.com/2favault/2favault',
  latestVersion: LATEST_RELEASE.version,
  latestBuild: LATEST_RELEASE.build,
};
