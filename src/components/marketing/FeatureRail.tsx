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
                className="group flex items-start gap-4 rounded-[22px] border border-border bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_28px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lg active:scale-[0.99]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-surface-elevated border border-border text-foreground shadow-sm transition-transform group-hover:scale-105">
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
