export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
};

export type FaqItem = {
  id: string;
  category: 'general' | 'security' | 'sync' | 'recovery' | 'installation';
  question: string;
  answer: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  screenshotId?: string;
  iconName: string;
  badge?: string;
};

export type SecurityPrinciple = {
  id: string;
  title: string;
  summary: string;
  technicalDetails: string;
  iconName: string;
};
