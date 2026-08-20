export type ChangeType = 'new' | 'improved' | 'fixed' | 'security' | 'breaking';

export type ChangelogSection = {
  type: ChangeType;
  title?: string;
  items: string[];
};

export type ChangelogEntry = {
  slug: string;
  version: string;
  build: number;
  title: string;
  releasedAt: string;
  status: 'stable' | 'beta';
  summary: string;
  highlights?: string[];
  sections: ChangelogSection[];
  knownIssues?: string[];
  migrationNotes?: string[];
  apkUrl?: string;
  apkSha256?: string;
  apkSizeBytes?: number;
};
