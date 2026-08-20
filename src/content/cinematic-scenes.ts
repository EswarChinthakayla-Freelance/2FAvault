export type CinematicSceneId = 'entry' | 'authenticator' | 'scanner' | 'recovery' | 'spaces' | 'security' | 'backup' | 'download';

export type CinematicScene = {
  id: CinematicSceneId;
  start: number;
  end: number;
  eyebrow: string;
  title: string;
  description: string;
};

export const CINEMATIC_SCENES: CinematicScene[] = [
  { id: 'entry', start: 0, end: 0.13, eyebrow: '2FA Vault', title: 'Codes and recovery. One secure vault.', description: 'TOTP authentication, recovery codes, encrypted backup and device recovery—built around a local-first vault.' },
  { id: 'authenticator', start: 0.13, end: 0.27, eyebrow: 'Offline authenticator', title: 'Your codes stay close.', description: 'Generate authenticator codes locally, even when the network is unavailable.' },
  { id: 'scanner', start: 0.27, end: 0.39, eyebrow: 'On-device capture', title: 'Scan. Verify. Save.', description: 'Authenticator QR codes are parsed and validated before they enter your vault.' },
  { id: 'recovery', start: 0.39, end: 0.52, eyebrow: 'Recovery codes', title: 'Recovery belongs with the account.', description: 'Store backup codes alongside the authenticator identity they protect.' },
  { id: 'spaces', start: 0.52, end: 0.65, eyebrow: 'Spaces and tags', title: 'Organize the way you think.', description: 'Spaces, tags and favorites turn a large vault into a visual identity map.' },
  { id: 'security', start: 0.65, end: 0.79, eyebrow: 'Security architecture', title: 'The cloud never becomes your vault.', description: 'Sensitive payloads are encrypted on the device before optional synchronization.' },
  { id: 'backup', start: 0.79, end: 0.91, eyebrow: 'Backup and devices', title: 'Built for the day you change phones.', description: 'Encrypted backup and trusted-device recovery are part of the design, not an afterthought.' },
  { id: 'download', start: 0.91, end: 1, eyebrow: 'Android release', title: 'Get 2FA Vault.', description: 'Review the current release, availability, and integrity information before installing.' },
];

export const CINEMATIC_MOTION = {
  depth: 72,
  rotation: 7,
  stageScreens: 8,
} as const;
