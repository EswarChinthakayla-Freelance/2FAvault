import { useEffect } from 'react';
import { Smartphone, FileCheck, Terminal } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { DownloadCard } from '../../components/marketing/DownloadCard';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { LATEST_RELEASE, PACKAGE_INFO } from '../../data/releases';

export function DownloadPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Download APK & Release Integrity',
      description:
        'Download the official 2FA Vault Android APK with verified SHA-256 checksums and integrity verification guide.',
      canonical: '/download',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Official Release Distribution
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Get 2FA Vault for Android
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Download the official release directly or verify cryptographic integrity before sideloading.
          </p>
        </div>
      </Section>

      {/* Primary Download Card */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <DownloadCard release={LATEST_RELEASE} showAllDetails />

          {/* System Requirements & Package Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-foreground" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">Minimum OS:</span>
                  <span>{LATEST_RELEASE.minimumAndroid}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">Target Architectures:</span>
                  <span>arm64-v8a, armeabi-v7a, x86_64</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">Permissions:</span>
                  <span>Camera (QR scan only), Biometrics</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-foreground font-medium">Network Access:</span>
                  <span>Optional (for multi-device sync)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-foreground" />
                  Package Metadata
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">Package ID:</span>
                  <span className="font-mono text-xs text-foreground">{PACKAGE_INFO.packageName}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">License:</span>
                  <span>{PACKAGE_INFO.license} Open Source</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-medium">Release Track:</span>
                  <span className="capitalize">{LATEST_RELEASE.status}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-foreground font-medium">Signing Status:</span>
                  <span className="text-foreground font-semibold">Official Release Key</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sideloading FAQ & Help */}
          <div id="verify" className="rounded-3xl border border-border bg-surface-elevated/40 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Terminal className="h-5 w-5 text-foreground" />
              Frequently Asked Installation Questions
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Why does Android show "Install unknown apps"?</strong>
                <br />
                When you download an APK through a mobile browser, Android requires you to grant temporary permission to install apps from that browser. This is standard Android security.
              </p>
              <p>
                <strong className="text-foreground">How does SHA-256 protect me?</strong>
                <br />
                Computing the SHA-256 hash of your downloaded APK and comparing it against our published checksum guarantees that the file you received is byte-for-byte identical to our official build artifact.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
