import { useEffect } from 'react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { LegalNav } from '../../components/legal/LegalNav';
import { LegalSection } from '../../components/legal/LegalSection';
import { LATEST_RELEASE } from '../../data/releases';

export function AboutPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'About 2FA Vault — Purpose & Philosophy',
      description:
        'Learn why 2FA Vault was created and how its local-first, offline-ready security model works.',
      canonical: '/about',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Project Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            About 2FA Vault
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            A secure, local-first authenticator engineered to solve the real problem of 2FA account management and emergency recovery.
          </p>
        </div>
      </Section>

      {/* Content Layout with Sidebar */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Sidebar Nav */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-border bg-surface p-5 sticky top-24">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 pb-2 block">
                Documentation
              </span>
              <LegalNav />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <LegalSection title="Why 2FA Vault Exists">
              <p>
                Two-Factor Authentication (2FA) is one of the most critical safeguards for modern digital identities.
                However, mainstream authenticators suffer from two widespread architectural flaws:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Siloed Recovery Codes:</strong> When signing up for a service,
                  users receive one-time emergency backup codes. Almost all authenticators ignore these codes, forcing
                  users to save them in unencrypted notes, screenshots, or physical scraps of paper.
                </li>
                <li>
                  <strong className="text-foreground">Cloud-First Lock-In:</strong> Many modern authenticators require
                  mandatory cloud accounts, exposing authentication metadata and binding users to proprietary sync clouds.
                </li>
              </ul>
              <p>
                2FA Vault was created to treat <strong className="text-foreground">TOTP codes and recovery credentials as equal first-class citizens</strong> inside a single, zero-knowledge container.
              </p>
            </LegalSection>

            <LegalSection title="Local-First, Offline-Ready Architecture">
              <p>
                2FA Vault is built on the principle of local autonomy. When you open the app to retrieve a code,
                the app interacts solely with local flash storage and the device CPU. It does not send analytics,
                does not query external icon CDNs, and does not require an active internet connection.
              </p>
              <p>
                If you choose to enable multi-device sync, all records are encrypted with your Vault Master Key
                before leaving the device. The cloud acts as a server-blind relay for encrypted blobs.
              </p>
            </LegalSection>

            <LegalSection title="Licensing & Review">
              <p>
                The repository includes an MIT License. A public source repository link will be added here only when an official project location is configured and verified.
              </p>
            </LegalSection>

            <LegalSection title="Current Release & Metadata">
              <div className="rounded-2xl border border-border bg-surface-elevated p-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-sans">Current Version:</span>
                  <span className="text-foreground">v{LATEST_RELEASE.version} (Build {LATEST_RELEASE.build})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-sans">License:</span>
                  <span className="text-foreground">MIT License</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-sans">Target Platform:</span>
                  <span className="text-foreground">{LATEST_RELEASE.minimumAndroid}</span>
                </div>
              </div>
            </LegalSection>
          </div>
        </div>
      </Section>
    </div>
  );
}
