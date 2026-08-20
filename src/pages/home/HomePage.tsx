import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { CinematicJourney } from '../../components/cinematic/CinematicJourney';
import { SecurityPrinciples } from '../../components/marketing/SecurityPrinciples';
import { ArchitectureDiagram } from '../../components/marketing/ArchitectureDiagram';
import { FaqPreview } from '../../components/marketing/FaqPreview';
import { TrustCallout } from '../../components/marketing/TrustCallout';
import { ChangelogCard } from '../../components/changelog/ChangelogCard';
import { Section } from '../../components/layout/Section';
import { Button } from '../../components/ui/button';
import { CHANGELOG_ENTRIES } from '../../content/changelog';
import { LATEST_RELEASE } from '../../data/releases';
import { SITE_CONFIG } from '../../content/site';

export function HomePage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Offline TOTP Authenticator & Secure Recovery Vault',
      description:
        'Generate 2FA TOTP codes offline and protect recovery credentials together in one zero-knowledge encrypted vault on your Android device.',
      canonical: '/',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '2FA Vault',
        description: 'A privacy-focused Android authenticator for offline TOTP codes, encrypted recovery codes, backups, and multi-device synchronization.',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Android 10 and later',
        url: `${SITE_CONFIG.url}/`,
      },
    });
  }, []);

  return (
    <div className="flex flex-col">
      <CinematicJourney />

      {/* 4. Security Architecture & Principles */}
      <Section className="border-t border-border bg-surface-elevated/30">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Zero-Knowledge Trust Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Local when it matters. Encrypted when it syncs.
            </h2>
            <p className="text-base text-muted-foreground">
              Your cryptographic keys are wrapped by device hardware and never touch any server.
            </p>
          </div>

          <ArchitectureDiagram />

          <div className="pt-6">
            <SecurityPrinciples />
          </div>
        </div>
      </Section>


      {/* 6. Latest Release Callout */}
      <Section className="border-t border-border bg-surface-elevated/20">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                Release Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Latest Release: v{LATEST_RELEASE.version}
              </h2>
            </div>
            <Link
              to="/changelog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors group"
            >
              <span>View full release history</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ChangelogCard entry={CHANGELOG_ENTRIES[0]} />
        </div>
      </Section>

      {/* 7. FAQ Preview */}
      <Section className="border-t border-border">
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqPreview />
        </div>
      </Section>

      {/* 8. Trust Principles */}
      <Section className="border-t border-border bg-surface-elevated/30">
        <TrustCallout />
      </Section>

      {/* 9. Final Download Banner */}
      <Section glow className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Ready to take control of your 2FA credentials?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Download the official Android release directly or verify its cryptographic checksum.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link to="/download">
              <Button variant="default" size="xl" className="w-full sm:w-auto gap-2.5 shadow-lg">
                <Download className="h-5 w-5" />
                <span>Get 2FA Vault (APK)</span>
              </Button>
            </Link>
            <Link to="/security">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <span>Read Security Architecture</span>
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
