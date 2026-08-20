import { useEffect } from 'react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { LegalNav } from '../../components/legal/LegalNav';
import { LegalSection } from '../../components/legal/LegalSection';

export function PrivacyPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Privacy Policy — Zero-Knowledge Commitment',
      description:
        'Our strict zero-knowledge privacy policy: no tracking, no plain secrets sent to servers, and local-first data storage.',
      canonical: '/privacy',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Zero-Knowledge Commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            2FA Vault is designed with a fundamental premise: your security tokens and recovery codes belong to you alone.
          </p>
        </div>
      </Section>

      {/* Main Content with Sidebar */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[24px] border border-border bg-surface p-4 sticky top-24 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 pb-2 block">
                Documentation
              </span>
              <LegalNav />
            </div>
          </div>

          {/* Policy Text */}
          <div className="lg:col-span-8 space-y-8">
            <LegalSection title="1. Privacy at a Glance">
              <p>
                We do not sell, rent, monetize, or profile your personal data. 2FA Vault contains no advertising SDKs,
                no behavioral trackers, and no third-party analytics scripts.
              </p>
            </LegalSection>

            <LegalSection title="2. Local Storage & Zero-Knowledge Isolation">
              <p>
                All account secrets (TOTP/HOTP seeds, issuer names, usernames, notes, and single-use recovery codes)
                are encrypted locally on your Android device using <strong className="text-foreground">AES-256-GCM</strong>.
              </p>
              <p>
                The cryptographic key needed to decrypt your vault (the Vault Master Key) is stored only on your
                physical device, wrapped by Android KeyStore hardware-backed credentials. At no point is the Vault
                Master Key transmitted to our servers or stored in unencrypted memory on disk.
              </p>
            </LegalSection>

            <LegalSection title="3. Authentication vs. Vault Decryption">
              <p>
                When you create an account for optional multi-device sync, authentication is handled through Supabase / Cloudflare.
                Your login password and authentication session tokens are cryptographically segregated from your vault data.
                Authenticating to the sync server does not grant our backend or any third party the ability to read or decrypt your vault.
              </p>
            </LegalSection>

            <LegalSection title="4. Optional Encrypted Cloud Synchronization">
              <p>
                If you enable cloud sync, 2FA Vault transmits only AES-256-GCM encrypted ciphertext payloads along with
                item UUIDs, monotonic revision numbers, and updated timestamps. The server acts as a server-blind relay
                and cannot inspect or derive plaintext seeds from these encrypted payloads.
              </p>
            </LegalSection>

            <LegalSection title="5. Device Hardware Permissions">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Camera:</strong> Used exclusively to scan 2FA QR codes.
                  Camera frames are processed in volatile memory on-device and are never recorded or transmitted.
                </li>
                <li>
                  <strong className="text-foreground">Biometrics (Fingerprint / Face):</strong> Used to unlock your
                  local Key Encryption Key. Raw biometric data is processed entirely by the Android OS Secure Element
                  and is never accessible to application code.
                </li>
                <li>
                  <strong className="text-foreground">File System:</strong> Used only when you explicitly import or
                  export an encrypted backup or recovery code file.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="6. Clipboard & Screen Privacy Protection">
              <p>
                When you copy a 2FA code or recovery code, 2FA Vault schedules an automatic clipboard purge after 30 seconds
                to prevent residual tokens from being accessed by background applications. Additionally, the app uses Android
                <code className="font-mono text-xs text-foreground px-1 bg-surface-elevated rounded">FLAG_SECURE</code> to
                prevent unauthorized screenshots and screen recording.
              </p>
            </LegalSection>

            <LegalSection title="7. Data Retention & Deletion">
              <p>
                You have full control over your data. You can delete individual accounts, purge spaces, or reset your entire
                vault at any time. When you delete your cloud sync account, all associated encrypted payloads and device
                metadata are permanently deleted from our database.
              </p>
            </LegalSection>

            <LegalSection title="8. Contact">
              <p>
                If you have questions about this Privacy Policy or our cryptographic boundaries, you can open an issue on
                the official support channel once one is published on this website.
              </p>
            </LegalSection>
          </div>
        </div>
      </Section>
    </div>
  );
}
