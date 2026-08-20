import { useState } from 'react';
import { DeviceFrame, MobileTabType } from './DeviceFrame';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/cn';
import { Home, Folder, Activity, Shield, Settings, Sparkles } from 'lucide-react';

export function ScreenshotShowcase() {
  const [activeTab, setActiveTab] = useState<MobileTabType>('home');

  const tabMetadata: Record<
    MobileTabType,
    {
      title: string;
      badge: string;
      description: string;
      features: string[];
      icon: any;
    }
  > = {
    home: {
      title: 'Home & Instant TOTP Code Generation',
      badge: 'Active OTP',
      description:
        'Crisp 6-digit and 8-digit RFC-compliant codes generated 100% locally. Features live circular countdown timers, one-tap clipboard copy, and quick Spaces filtering.',
      features: ['Real-time 30s countdown animation', 'Spaces tagging & search filter', 'Direct copy with auto-clear notice', 'Recovery code count indicators'],
      icon: Home,
    },
    vault: {
      title: 'Vault Spaces & Categorized Folders',
      badge: 'Spaces & Organization',
      description:
        'Organize sensitive credentials into dedicated Spaces like Personal, Work & Infrastructure, and Crypto. Group accounts logically with hardware-isolated keys.',
      features: ['Isolate personal and enterprise credentials', 'Custom space avatars and tag colors', 'Encrypted space metadata', 'Quick bulk assignment'],
      icon: Folder,
    },
    activity: {
      title: 'Local Audit Log & Sync Activity',
      badge: 'Privacy Audit',
      description:
        'Transparent, local-only record of all security actions. Track OTP code copies, biometric unlocks, vault exports, and encrypted sync cycles without any telemetry leaving your device.',
      features: ['Local-only audit history', 'Zero telemetry to remote servers', 'Real-time sync event timestamps', 'Biometric & unlock event logging'],
      icon: Activity,
    },
    security: {
      title: 'Security Center & Hardware Keystore',
      badge: 'Hardware Security',
      description:
        'Real-time cryptographic health checkup. Verifies Android KeyStore hardware backing, biometric authentication gates, immediate background lock, and FLAG_SECURE screenshot blocking.',
      features: ['Vault health score calculation', 'Hardware-backed VMK wrapping', 'FLAG_SECURE screenshot prevention', 'Automatic clipboard wipe timers'],
      icon: Shield,
    },
    settings: {
      title: 'Vault Settings & Cloud Relay Sync',
      badge: 'Zero-Knowledge Sync',
      description:
        'Configure zero-knowledge encrypted cloud sync, manage your 24-word Emergency Recovery Key, export encrypted .2favault backups, and customize app appearance.',
      features: ['Server-blind encrypted sync', 'Emergency recovery key verification', 'AES-256-GCM encrypted backup exports', 'Strict monochrome dark & light themes'],
      icon: Settings,
    },
  };

  const currentMeta = tabMetadata[activeTab];

  const handleTabSelect = (tab: MobileTabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="space-y-10">
      {/* Mobile Tab Navigation Switcher */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'home', label: '1. Home / Codes', icon: Home },
          { id: 'vault', label: '2. Vault & Spaces', icon: Folder },
          { id: 'activity', label: '3. Audit Activity', icon: Activity },
          { id: 'security', label: '4. Security Center', icon: Shield },
          { id: 'settings', label: '5. Settings & Sync', icon: Settings },
        ].map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabSelect(item.id as MobileTabType)}
              className={cn(
                'flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all whitespace-nowrap cursor-pointer',
                isActive
                  ? 'bg-foreground text-background shadow-sm'
                  : 'bg-surface-elevated text-muted-foreground hover:text-foreground border border-border'
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Preview Row with Live Mobile Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-elevated/40 rounded-3xl border border-border p-6 sm:p-10">
        {/* Left: Device Mockup with Synced Tab Selection */}
        <div className="lg:col-span-6 flex justify-center">
          <DeviceFrame
            variant="interactive-mock"
            activeTab={activeTab}
            onTabChange={(t) => handleTabSelect(t)}
          />
        </div>

        {/* Right: Screen Details & Live Feature Highlights */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-bold font-mono">
                {currentMeta.badge}
              </Badge>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                Mobile UI Simulation
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {currentMeta.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {currentMeta.description}
            </p>
          </div>

          {/* Interactive Feature Checklist */}
          <div className="space-y-2 pt-4 border-t border-border">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Screen Highlights & Capabilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {currentMeta.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-border bg-surface text-xs text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive instruction note */}
          <div className="p-3.5 rounded-2xl border border-border/80 bg-surface/50 text-xs text-muted-foreground flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-foreground shrink-0" />
            <span>
              <strong>Try it directly:</strong> Tap the 5 tabs in the phone simulator or the buttons above to switch views and interact with codes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
