import { useEffect } from 'react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { FeatureSection } from '../../components/marketing/FeatureSection';
import { FEATURES } from '../../content/features';
import { TrustCallout } from '../../components/marketing/TrustCallout';

export function FeaturesPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Features — Offline Authenticator & Recovery Hub',
      description:
        'Explore 2FA Vault features: offline TOTP/HOTP calculation, integrated recovery code storage, Spaces organization, Avatar Studio, and hardware-backed biometric lock.',
      canonical: '/features',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Feature Breakdown
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Engineered for Security, Speed, and Control
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            A comprehensive overview of the cryptographic and workflow capabilities built into 2FA Vault.
          </p>
        </div>
      </Section>

      {/* Feature Deep-Dives */}
      <Section>
        <div className="space-y-12">
          {FEATURES.map((feature, idx) => (
            <FeatureSection
              key={feature.id}
              feature={feature}
              reversed={idx % 2 !== 0}
            />
          ))}
        </div>
      </Section>

      {/* Trust Callout */}
      <Section className="border-t border-border bg-surface-elevated/30">
        <TrustCallout />
      </Section>
    </div>
  );
}
