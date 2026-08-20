import { Release } from '../types/release';

export const RELEASES: Release[] = [
  {
    version: '1.0.0',
    build: 1,
    releasedAt: '2026-08-20',
    title: 'Initial General Availability Release',
    summary:
      'The foundational release of 2FA Vault featuring zero-knowledge AES-256-GCM local storage, offline TOTP generation, recovery code storage with import, and end-to-end encrypted sync.',
    // Publish these fields together only after the exact signed artifact exists.
    apkUrl: undefined,
    playStoreUrl: undefined, // Google Play coming soon
    apkSha256: undefined,
    apkSizeBytes: undefined,
    minimumAndroid: 'Android 10 (API 29)+',
    targetArchitecture: 'Universal APK (arm64-v8a, armeabi-v7a, x86_64)',
    status: 'stable',
    isLatest: true,
  },
];

export const LATEST_RELEASE: Release = RELEASES.find((r) => r.isLatest) || RELEASES[0];

export const PACKAGE_INFO = {
  packageName: 'com.twosides.twosecurevault',
  appName: '2FA Vault',
  author: '2FA Vault Open Source Contributors',
  license: 'MIT',
  repositoryUrl: undefined,
  latestVersion: LATEST_RELEASE.version,
  latestBuild: LATEST_RELEASE.build,
};
