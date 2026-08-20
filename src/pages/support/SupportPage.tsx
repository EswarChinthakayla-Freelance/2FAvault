import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bug, MessageSquare, ExternalLink, ShieldAlert } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { GithubIcon } from '../../components/brand/GithubIcon';
import { SITE_CONFIG } from '../../content/site';
import { PACKAGE_INFO } from '../../data/releases';

export function SupportPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Support & Community Channels',
      description:
        'Official support, bug reports, and community channels for 2FA Vault on GitHub.',
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
            Need help or found a bug? Connect directly with the 2FA Vault project maintainers.
          </p>
        </div>
      </Section>

      {/* Support Options */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub Issues */}
            <Card className="hover:border-zinc-500/50 transition-colors">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground">
                  <Bug className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Report an Issue or Bug</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <p>
                  Found an issue on a specific device or Android version? Open an issue on our public GitHub repository with reproducible steps.
                </p>
                <a
                  href={`${PACKAGE_INFO.repositoryUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="default" size="sm" className="w-full gap-2 font-semibold">
                    <GithubIcon size={16} />
                    <span>Open GitHub Issue</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Discussions / Feature Requests */}
            <Card className="hover:border-zinc-500/50 transition-colors">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">Feature Requests & Ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <p>
                  Have ideas for new space organization tools, custom avatars, or backup formats? Join the discussion on GitHub.
                </p>
                <a
                  href={`${PACKAGE_INFO.repositoryUrl}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2 font-semibold">
                    <GithubIcon size={16} />
                    <span>Join GitHub Discussions</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted" />
                  </Button>
                </a>
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
              If you discover a potential cryptographic vulnerability or sensitive data leak, please do not open a public issue.
              Contact the maintainers directly via email at{' '}
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="font-mono text-xs font-semibold text-foreground underline underline-offset-4"
              >
                {SITE_CONFIG.supportEmail}
              </a>
              {' '}or use GitHub Private Vulnerability Reporting.
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
