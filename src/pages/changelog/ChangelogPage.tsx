import { useEffect } from 'react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { ChangelogTimeline } from '../../components/changelog/ChangelogTimeline';

export function ChangelogPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Changelog & Release Notes',
      description:
        'Official version history and release notes for 2FA Vault on Android. Track new features, security updates, and performance improvements.',
      canonical: '/changelog',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Release Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Changelog & Release Notes
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            A chronological record of all improvements, features, bug fixes, and security enhancements in 2FA Vault.
          </p>
        </div>
      </Section>

      {/* Timeline List */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ChangelogTimeline />
        </div>
      </Section>
    </div>
  );
}
