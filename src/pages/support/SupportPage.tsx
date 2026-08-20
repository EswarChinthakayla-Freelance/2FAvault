import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldAlert } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export function SupportPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Support & Community Channels',
      description:
        'Troubleshooting and security guidance for 2FA Vault, with links to the public FAQ.',
      canonical: '/support',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Direct Support Channels
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Support & Community
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Start with the product FAQ. An official contact channel will be listed here when one is configured.
          </p>
        </div>
      </Section>

      {/* Support Options */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Troubleshooting & common questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <p>
                  Find guidance about offline operation, APK installation, recovery keys, encrypted synchronization, and trusted devices.
                </p>
                <Link to="/faq" className="block sm:w-fit">
                  <Button variant="default" size="sm" className="w-full gap-2 font-semibold">
                    <BookOpen className="h-4 w-4" />
                    <span>Open the FAQ</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Security Disclosure Card */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-foreground border border-border">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Responsible Security Vulnerability Disclosure
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Do not post recovery keys, TOTP seeds, backup codes, exported vaults, or diagnostic logs containing private data in a public channel. A private disclosure channel is not currently configured on this site.
            </p>
          </div>

          {/* FAQ Quick Link */}
          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground">
              Looking for quick answers? Check out our{' '}
              <Link to="/faq" className="text-foreground font-semibold hover:underline">
                Frequently Asked Questions
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
