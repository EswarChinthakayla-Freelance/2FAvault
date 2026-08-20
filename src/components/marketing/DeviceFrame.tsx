import { useState, useEffect } from 'react';
import {
  Home,
  Folder,
  Activity,
  Shield,
  Settings,
  Search,
  Plus,
  Copy,
  Check,
  Lock,
  Wifi,
  Battery,
  Key,
  ShieldCheck,
  ChevronRight,
  RefreshCw,
  FolderLock,
  User,
  Eye,
  EyeOff,
} from 'lucide-react';
import { VaultLoopMark } from '../brand/VaultLoopMark';
import { cn } from '../../lib/cn';

export type MobileTabType = 'home' | 'vault' | 'activity' | 'security' | 'settings';

interface DeviceFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  variant?: 'screenshot' | 'interactive-mock';
  defaultTab?: MobileTabType;
  activeTab?: MobileTabType;
  onTabChange?: (tab: MobileTabType) => void;
  className?: string;
}

export function DeviceFrame({
  imageSrc,
  imageAlt = '2FA Vault Mobile Interface',
  title,
  variant = 'screenshot',
  defaultTab = 'home',
  activeTab: externalActiveTab,
  onTabChange,
  className,
}: DeviceFrameProps) {
  const [internalTab, setInternalTab] = useState<MobileTabType>(defaultTab);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<string>('all');
  const [secondsRemaining, setSecondsRemaining] = useState(24);
  const [showRecoveryCode, setShowRecoveryCode] = useState(false);

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalTab;

  const handleTabClick = (tab: MobileTabType) => {
    if (externalActiveTab === undefined) {
      setInternalTab(tab);
    }
    onTabChange?.(tab);
  };

  // Live timer for OTP code countdown simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Progress for countdown ring (out of 30s)
  const timerDashoffset = 56.5 - (56.5 * secondsRemaining) / 30;

  return (
    <div
      className={cn(
        'relative mx-auto flex flex-col items-center select-none',
        className
      )}
    >
      {/* Outer Phone Bezel / Device Enclosure */}
      <div className="relative w-[310px] sm:w-[335px] rounded-[48px] bg-zinc-900 p-3 shadow-2xl ring-1 ring-zinc-800 transition-all duration-300">
        {/* Subtle Ambient Bezel Highlights */}
        <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Inner Screen Container */}
        <div className="relative flex aspect-[9/19.5] w-full flex-col overflow-hidden rounded-[38px] bg-zinc-950 text-foreground border border-zinc-800/80 shadow-inner">
          {/* Top Status Bar (Android / Modern Mobile) */}
          <div className="flex h-9 items-center justify-between px-6 pt-2 text-[11px] font-medium text-zinc-400">
            <span className="font-mono text-[10px] font-semibold text-zinc-300">09:41</span>
            
            {/* Center Front Camera Punch-Hole */}
            <div className="h-3.5 w-3.5 rounded-full bg-black ring-1 ring-zinc-800/90 shadow-xs" />
            
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Wifi className="h-3 w-3 text-zinc-400" />
              <Battery className="h-3.5 w-3.5 text-zinc-300" />
            </div>
          </div>

          {/* Screenshot Image or Full Interactive Mobile App Simulator */}
          {variant === 'screenshot' && imageSrc ? (
            <div className="relative flex flex-1 flex-col overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              {title && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 pt-8">
                  <p className="text-xs font-semibold text-white">{title}</p>
                </div>
              )}
            </div>
          ) : (
            /* Interactive Mobile UI with Real App Hierarchy */
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* App Top Toolbar */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                    <VaultLoopMark size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-[12px] tracking-tight text-white leading-tight">
                      2FA Vault
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-zinc-900 text-[9px] font-medium text-zinc-300 border border-zinc-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Synced
                  </span>
                  <div className="h-6 w-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 cursor-pointer hover:bg-zinc-800 transition-colors">
                    <Search className="h-3 w-3" />
                  </div>
                  <div className="h-6 w-6 rounded-lg bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold cursor-pointer hover:bg-white transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Dynamic Screen View Based on Active Tab */}
              <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 scrollbar-none">
                {/* 1. HOME SCREEN */}
                {activeTab === 'home' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    {/* Spaces Filter Chips */}
                    <div className="flex items-center gap-1 text-[10px] overflow-x-auto pb-0.5 scrollbar-none">
                      {[
                        { id: 'all', label: 'All (4)' },
                        { id: 'personal', label: 'Personal' },
                        { id: 'work', label: 'Work' },
                        { id: 'crypto', label: 'Crypto' },
                      ].map((space) => (
                        <button
                          key={space.id}
                          type="button"
                          onClick={() => setSelectedSpace(space.id)}
                          className={cn(
                            'px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer whitespace-nowrap',
                            selectedSpace === space.id
                              ? 'bg-zinc-100 text-zinc-950 shadow-xs'
                              : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
                          )}
                        >
                          {space.label}
                        </button>
                      ))}
                    </div>

                    {/* Account Card 1: GitHub */}
                    <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/90 p-2.5 transition-all hover:border-zinc-700/80 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-[11px] font-bold text-white shadow-xs">
                            GH
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white flex items-center gap-1">
                              GitHub
                              <span className="text-[9px] text-zinc-500 font-mono">Work</span>
                            </div>
                            <div className="text-[10px] text-zinc-400">octocat@github.com</div>
                          </div>
                        </div>

                        {/* Circular Countdown Ring */}
                        <div className="relative h-5 w-5 flex items-center justify-center">
                          <svg className="h-5 w-5 -rotate-90" viewBox="0 0 24 24">
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              className="stroke-zinc-800"
                              strokeWidth="2.5"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              className="stroke-zinc-200 transition-all duration-1000 ease-linear"
                              strokeWidth="2.5"
                              strokeDasharray="56.5"
                              strokeDashoffset={timerDashoffset}
                              fill="none"
                            />
                          </svg>
                          <span className="absolute text-[8px] font-bold font-mono text-zinc-200">
                            {secondsRemaining}
                          </span>
                        </div>
                      </div>

                      {/* OTP Code Display Pill */}
                      <div className="mt-2 flex items-center justify-between rounded-xl bg-zinc-950 px-2.5 py-1.5 border border-zinc-800/80">
                        <span className="font-mono text-base font-bold tracking-widest text-zinc-100">
                          739 204
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy('739204')}
                          className="flex items-center gap-1 rounded-lg px-1.5 py-0.5 text-[9px] font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCode === '739204' ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Account Card 2: Cloudflare with Recovery Code Drawer */}
                    <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/90 p-2.5 transition-all hover:border-zinc-700/80 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-[11px] font-bold text-zinc-200">
                            CF
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                              Cloudflare
                              <span className="rounded-full bg-zinc-800 px-1.5 py-0.2 text-[8px] font-mono text-zinc-300 border border-zinc-700">
                                8 codes
                              </span>
                            </div>
                            <div className="text-[10px] text-zinc-400">admin@production.net</div>
                          </div>
                        </div>

                        {/* Circular Countdown Ring */}
                        <div className="relative h-5 w-5 flex items-center justify-center">
                          <svg className="h-5 w-5 -rotate-90" viewBox="0 0 24 24">
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              className="stroke-zinc-800"
                              strokeWidth="2.5"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              className="stroke-zinc-400 transition-all duration-1000 ease-linear"
                              strokeWidth="2.5"
                              strokeDasharray="56.5"
                              strokeDashoffset={timerDashoffset}
                              fill="none"
                            />
                          </svg>
                          <span className="absolute text-[8px] font-bold font-mono text-zinc-300">
                            {secondsRemaining}
                          </span>
                        </div>
                      </div>

                      {/* OTP Code Display */}
                      <div className="mt-2 flex items-center justify-between rounded-xl bg-zinc-950 px-2.5 py-1.5 border border-zinc-800/80">
                        <span className="font-mono text-base font-bold tracking-widest text-zinc-100">
                          482 915
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy('482915')}
                          className="flex items-center gap-1 rounded-lg px-1.5 py-0.5 text-[9px] font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCode === '482915' ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Integrated Recovery Code Mini Badge */}
                      <div className="mt-2 pt-2 border-t border-zinc-800/70 flex items-center justify-between text-[9px] text-zinc-400">
                        <span className="flex items-center gap-1 text-zinc-300 font-medium">
                          <Key className="h-2.5 w-2.5 text-zinc-400" />
                          Backup Codes:
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowRecoveryCode(!showRecoveryCode)}
                          className="flex items-center gap-1 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                        >
                          {showRecoveryCode ? (
                            <span className="font-mono text-[9px] text-zinc-200 font-semibold">
                              4920-ABCD-8812
                            </span>
                          ) : (
                            <span className="font-mono text-[9px]">••••-••••-••••</span>
                          )}
                          {showRecoveryCode ? (
                            <EyeOff className="h-2.5 w-2.5" />
                          ) : (
                            <Eye className="h-2.5 w-2.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Account Card 3: AWS */}
                    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/60 p-2.5 opacity-90">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                            AWS
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold text-zinc-200">AWS Console</div>
                            <div className="text-[9px] text-zinc-500">root-prod</div>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-zinc-300 tracking-wider">
                          891 042
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. VAULT & SPACES SCREEN */}
                {activeTab === 'vault' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                        Vault Spaces
                      </span>
                      <span className="text-[10px] text-zinc-400">3 Spaces</span>
                    </div>

                    {/* Space Folder Items */}
                    {[
                      { name: 'Personal Accounts', count: '2 accounts', icon: User, color: 'text-zinc-200' },
                      { name: 'Work & Infrastructure', count: '2 accounts', icon: FolderLock, color: 'text-zinc-200' },
                      { name: 'Crypto & Exchanges', count: '1 account', icon: Key, color: 'text-zinc-200' },
                    ].map((folder, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/80 hover:border-zinc-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                            <folder.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">{folder.name}</div>
                            <div className="text-[10px] text-zinc-400 font-mono">{folder.count}</div>
                          </div>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
                      </div>
                    ))}

                    {/* Encrypted Recovery Vault Summary Card */}
                    <div className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 space-y-1.5 mt-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <Key className="h-3.5 w-3.5 text-zinc-300" />
                        <span>Recovery Codes Vault</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        All 4 backup sets are encrypted with your hardware KeyStore master key.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. ACTIVITY SCREEN */}
                {activeTab === 'activity' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                        Audit & Sync Log
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">Local Only</span>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { title: 'TOTP Code Copied', desc: 'GitHub (octocat)', time: 'Just now', icon: Copy },
                        { title: 'Encrypted Sync Push', desc: 'Supabase Server Relay', time: '2m ago', icon: RefreshCw },
                        { title: 'Biometric Unlock', desc: 'Fingerprint Verified', time: '14m ago', icon: ShieldCheck },
                        { title: 'Recovery Code Viewed', desc: 'Cloudflare Backup', time: '1h ago', icon: Eye },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2 rounded-xl border border-zinc-800/80 bg-zinc-900/60"
                        >
                          <div className="h-6 w-6 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                            <item.icon className="h-3 w-3" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="text-[11px] font-semibold text-white truncate">{item.title}</div>
                              <span className="text-[9px] text-zinc-500 font-mono">{item.time}</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. SECURITY SCREEN */}
                {activeTab === 'security' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                        Security Health
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 font-mono">98 / 100</span>
                    </div>

                    {/* Health Score Pill Card */}
                    <div className="p-2.5 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span>Vault Health: Optimal</span>
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full w-[98%] bg-zinc-100 rounded-full" />
                      </div>
                    </div>

                    {/* Security Switches / Status */}
                    <div className="space-y-1.5">
                      {[
                        { title: 'Hardware KeyStore', status: 'Enforced', icon: Lock },
                        { title: 'Biometric Lock', status: 'Active', icon: ShieldCheck },
                        { title: 'FLAG_SECURE', status: 'Protected', icon: Shield },
                        { title: 'Auto-Purge Clipboard', status: '30s', icon: Copy },
                      ].map((sec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-xl border border-zinc-800/80 bg-zinc-900/50 text-[11px]"
                        >
                          <div className="flex items-center gap-2">
                            <sec.icon className="h-3.5 w-3.5 text-zinc-400" />
                            <span className="font-medium text-zinc-200">{sec.title}</span>
                          </div>
                          <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {sec.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. SETTINGS SCREEN */}
                {activeTab === 'settings' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                        Settings & Sync
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">v1.0.0</span>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { label: 'Encrypted Cloud Sync', value: 'Connected', badge: 'Active' },
                        { label: 'Emergency Recovery Key', value: 'Saved & Verified', badge: 'Secure' },
                        { label: 'Export Encrypted Backup', value: 'AES-256-GCM', badge: 'Export' },
                        { label: 'App Theme', value: 'Monochrome Dark', badge: 'Dark' },
                      ].map((setting, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-xl border border-zinc-800 bg-zinc-900/70"
                        >
                          <div>
                            <div className="text-[11px] font-semibold text-white">{setting.label}</div>
                            <div className="text-[9px] text-zinc-400">{setting.value}</div>
                          </div>
                          <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {setting.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Exact 5-Tab Mobile Bottom Navigation Bar (Matches React Native Expo _layout.tsx) */}
              <div className="mt-auto flex items-center justify-around py-1.5 border-t border-zinc-800/90 bg-zinc-950/95 backdrop-blur-md shrink-0">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'vault', label: 'Vault', icon: Folder },
                  { id: 'activity', label: 'Activity', icon: Activity },
                  { id: 'security', label: 'Security', icon: Shield },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab.id as MobileTabType)}
                      className={cn(
                        'flex flex-col items-center justify-center py-0.5 px-2 rounded-lg transition-all duration-150 cursor-pointer group',
                        isActive
                          ? 'text-white'
                          : 'text-zinc-500 hover:text-zinc-300'
                      )}
                    >
                      <IconComponent
                        className={cn(
                          'h-4 w-4 transition-transform duration-150 group-active:scale-90',
                          isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                        )}
                      />
                      <span
                        className={cn(
                          'text-[9px] font-semibold tracking-tight transition-colors',
                          isActive ? 'text-white font-bold' : 'text-zinc-500'
                        )}
                      >
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Android Bottom Navigation Gesture Bar Pill */}
          <div className="flex h-4 items-center justify-center bg-zinc-950 shrink-0 pb-1">
            <div className="h-1 w-20 rounded-full bg-zinc-700/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
