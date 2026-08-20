import { Smartphone, Key, FolderGit2, Palette, ShieldAlert, WifiOff } from 'lucide-react';
import { Container } from '../layout/Container';

const HIGHLIGHTS = [
  {
    icon: WifiOff,
    title: '100% Offline TOTP',
    description: 'Calculates RFC 6238 codes directly on-device with zero network requests.',
  },
  {
    icon: Key,
    title: 'Integrated Recovery Codes',
    description: 'Keep emergency single-use backup codes alongside your 2FA seeds.',
  },
  {
    icon: FolderGit2,
    title: 'Spaces & Smart Tags',
    description: 'Organize personal, work, and client accounts into isolated spaces.',
  },
  {
    icon: Palette,
    title: 'Account Avatar Studio',
    description: 'Visual brand icons, geometric badges, and custom color accents.',
  },
  {
    icon: ShieldAlert,
    title: 'Hardware Biometric Lock',
    description: 'Android KeyStore hardware-backed encryption with auto-lock & clipboard purge.',
  },
  {
    icon: Smartphone,
    title: 'Server-Blind Sync',
    description: 'Sync across your Android devices with zero-knowledge AES-256-GCM encryption.',
  },
];

export function FeatureRail() {
  return (
    <div className="border-y border-border bg-surface-elevated/40 py-12">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border/80 bg-surface p-5 transition-all hover:border-zinc-500/40 hover:shadow-xs"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
