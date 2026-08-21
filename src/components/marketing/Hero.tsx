import { Link } from 'react-router-dom';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { ReleaseBadge } from './ReleaseBadge';
import { StoreBadge } from './StoreBadge';
import { DeviceFrame } from './DeviceFrame';
import { Container } from '../layout/Container';
import { LATEST_RELEASE } from '../../data/releases';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 glow-zinc bg-grid-pattern">
      <Container size="lg">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 space-y-6">
            <ReleaseBadge />

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground leading-[1.1]">
                Codes and recovery.{' '}
                <span className="text-muted-foreground">
                  One secure vault.
                </span>
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Generate 2FA TOTP codes 100% offline and keep single-use recovery credentials together
                in a zero-knowledge, hardware-wrapped vault on your Android phone.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
              <Link to="/download" className="w-full sm:w-auto">
                <Button variant="default" size="xl" className="w-full sm:w-auto gap-2.5 shadow-lg">
                  <Download className="h-5 w-5" />
                  <span>{LATEST_RELEASE.apkUrl ? 'Download APK' : 'View Android release'}</span>
                </Button>
              </Link>

              <StoreBadge playStoreUrl={LATEST_RELEASE.playStoreUrl} />
            </div>

            {/* Security Highlights Under Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Offline code generation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>AES-256-GCM Encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                <span>Optional encrypted sync</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/security"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span>Explore the cryptographic security architecture</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <DeviceFrame variant="interactive-mock" />
          </div>
        </div>
      </Container>
    </div>
  );
}
