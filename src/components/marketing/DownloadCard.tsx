import { useState } from 'react';
import { Download, Check, Copy, ShieldCheck, Terminal, Clock3 } from 'lucide-react';
import { Release } from '../../types/release';
import { Button } from '../ui/button';
import { StoreBadge } from './StoreBadge';
import { copyToClipboard } from '../../lib/download';
import { formatBytes, formatDate } from '../../lib/formatVersion';

interface DownloadCardProps {
  release: Release;
  showAllDetails?: boolean;
}

export function DownloadCard({ release, showAllDetails = false }: DownloadCardProps) {
  const [copiedSha, setCopiedSha] = useState(false);

  const handleCopySha = async () => {
    if (release.apkSha256) {
      const success = await copyToClipboard(release.apkSha256);
      if (success) {
        setCopiedSha(true);
        setTimeout(() => setCopiedSha(false), 2500);
      }
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-foreground" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              Latest Stable Release
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
            2FA Vault v{release.version}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Build {release.build} • Released {formatDate(release.releasedAt)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-xl bg-surface-elevated border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
            {release.minimumAndroid}
          </span>
          <span className="rounded-xl bg-surface-elevated border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
            {release.targetArchitecture || 'Android release'}
          </span>
        </div>
      </div>

      {/* Main Download Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Direct APK Button */}
        {release.apkUrl ? (
          <a
            href={release.apkUrl}
            download
            className="flex flex-col justify-between p-5 rounded-2xl border border-zinc-700 bg-surface-elevated hover:border-zinc-500 transition-all group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
                  Direct Download
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {formatBytes(release.apkSizeBytes)}
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                Download Official APK
              </h4>
              <p className="text-xs text-muted-foreground">
                Standalone package for sideloading on any compatible Android device.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="default" size="default" className="w-full gap-2 font-semibold">
                <Download className="h-4 w-4" />
                <span>Download APK ({formatBytes(release.apkSizeBytes)})</span>
              </Button>
            </div>
          </a>
        ) : (
          <div className="min-h-48 p-5 rounded-2xl border border-dashed border-border bg-surface-elevated/50 flex flex-col items-center justify-center text-center gap-3">
            <Clock3 className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">Direct APK is not published yet</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Version details are available now. The download and checksum will appear together after the signed artifact is released.</p>
            </div>
          </div>
        )}

        {/* Google Play Store Card */}
        <div className="flex flex-col justify-between p-5 rounded-2xl border border-border bg-surface-elevated/40">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
              Google Play Store
            </span>
            <h4 className="text-lg font-bold text-foreground">Play Store Distribution</h4>
            <p className="text-xs text-muted-foreground">
              Official Play Store channel with automatic background updates.
            </p>
          </div>

          <div className="pt-4">
            <StoreBadge playStoreUrl={release.playStoreUrl} className="w-full justify-center" />
          </div>
        </div>
      </div>

      {/* SHA-256 Hash Verification */}
      {release.apkSha256 && (
        <div className="rounded-2xl border border-border bg-surface-elevated/60 p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <ShieldCheck className="h-4 w-4 text-foreground" />
              <span>SHA-256 Cryptographic Checksum</span>
            </div>
            <button
              type="button"
              onClick={handleCopySha}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {copiedSha ? (
                <>
                  <Check className="h-3.5 w-3.5 text-foreground" />
                  <span className="text-foreground font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy SHA-256</span>
                </>
              )}
            </button>
          </div>

          <div className="rounded-xl bg-surface border border-border p-2.5 overflow-x-auto">
            <code className="font-mono text-xs text-foreground/90 break-all select-all">
              {release.apkSha256}
            </code>
          </div>
        </div>
      )}

      {/* Verification Instructions Snippet */}
      {showAllDetails && release.apkUrl && release.apkSha256 && (
        <div className="space-y-3 pt-2 border-t border-border">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-mono">
            <Terminal className="h-3.5 w-3.5 text-foreground" />
            Integrity Verification Commands
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-border bg-surface-elevated p-3 space-y-1">
              <span className="font-semibold text-foreground">Linux / macOS (Terminal)</span>
              <pre className="font-mono text-[11px] text-muted-foreground overflow-x-auto bg-surface p-2 rounded-lg border border-border">
                shasum -a 256 2fa-vault-{release.version}.apk
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-surface-elevated p-3 space-y-1">
              <span className="font-semibold text-foreground">Windows (PowerShell)</span>
              <pre className="font-mono text-[11px] text-muted-foreground overflow-x-auto bg-surface p-2 rounded-lg border border-border">
                Get-FileHash 2fa-vault-{release.version}.apk -Algorithm SHA256
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
