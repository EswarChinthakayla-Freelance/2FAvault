export type ReleaseStatus = 'stable' | 'beta' | 'deprecated';

export type Release = {
  version: string;
  build: number;
  releasedAt: string; // ISO 8601 or YYYY-MM-DD
  title: string;
  summary: string;
  apkUrl?: string;
  playStoreUrl?: string;
  apkSha256?: string;
  apkSizeBytes?: number;
  minimumAndroid?: string;
  targetArchitecture?: string;
  status: ReleaseStatus;
  isLatest?: boolean;
};

export type ReleaseVerificationInfo = {
  version: string;
  build: number;
  sha256: string;
  sizeFormatted: string;
  dateFormatted: string;
  minAndroid: string;
  packageName: string;
};
