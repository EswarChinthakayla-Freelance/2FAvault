import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { ArchitectureDiagram } from '../../components/marketing/ArchitectureDiagram';
import { SecurityPrinciples } from '../../components/marketing/SecurityPrinciples';
import { SECURITY_LIMITATIONS } from '../../content/security';

export function SecurityPage() {
  useEffect(() => {
    updatePageMetadata({
      title: 'Security Architecture & Cryptographic Model',
      description:
        'Detailed cryptographic specification of 2FA Vault: AES-256-GCM encryption, hardware-wrapped master keys, local TOTP calculation, and server-blind synchronization.',
      canonical: '/security',
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Zero-Knowledge Specification
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Security Philosophy & Architecture
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            We design 2FA Vault with genuine zero-knowledge boundaries. The server never holds your keys,
            and your authenticator operates with complete local autonomy.
          </p>
        </div>
      </Section>

      {/* Main Architecture Diagram */}
      <Section>
        <div className="space-y-12 max-w-5xl mx-auto">
          <ArchitectureDiagram />

          {/* Cryptographic Specifications Table */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Cryptographic Primitives & Specifications
            </h2>
            <div className="rounded-3xl border border-border bg-surface overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-surface-elevated text-foreground font-semibold border-b border-border">
                    <tr>
                      <th className="p-4">Component</th>
                      <th className="p-4">Algorithm / Primitive</th>
                      <th className="p-4">Key Size & Parameters</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground font-mono text-xs">
                    <tr>
                      <td className="p-4 font-semibold text-foreground font-sans">Vault Items</td>
                      <td className="p-4">AES-256-GCM</td>
                      <td className="p-4">256-bit key, 12-byte random nonce, AAD</td>
                      <td className="p-4 font-sans">Payload encryption of seeds & recovery codes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground font-sans">Master Key Wrap</td>
                      <td className="p-4">AES-256-GCM KEK</td>
                      <td className="p-4">256-bit hardware-wrapped KEK</td>
                      <td className="p-4 font-sans">Wraps VMK at rest in Android KeyStore</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground font-sans">PIN KDF</td>
                      <td className="p-4">PBKDF2-HMAC-SHA256</td>
                      <td className="p-4">100,000 iterations, 16-byte random salt</td>
                      <td className="p-4 font-sans">Derives KEK from user PIN fallback</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground font-sans">Recovery Key</td>
                      <td className="p-4">PBKDF2-HMAC-SHA256</td>
                      <td className="p-4">100,000 iterations, dedicated salt</td>
                      <td className="p-4 font-sans">Derives emergency VMK unwrapping key</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground font-sans">OTP Calculation</td>
                      <td className="p-4">HMAC-SHA1/256/512</td>
                      <td className="p-4">RFC 6238 (TOTP) / RFC 4226 (HOTP)</td>
                      <td className="p-4 font-sans">Generates 6/8-digit one-time passcodes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Security Principles Grid */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Core Security Principles
            </h2>
            <SecurityPrinciples />
          </div>

          {/* Honest Security Limitations */}
          <div className="rounded-3xl border border-border bg-surface-elevated/60 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="text-lg font-bold">Honest Security Limitations & Assumptions</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              No security software is invincible. We believe in transparently documenting our threat model and
              system boundaries rather than making unsubstantiated claims.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {SECURITY_LIMITATIONS.map((lim) => (
                <div
                  key={lim.title}
                  className="rounded-2xl border border-border bg-surface p-4 space-y-1.5"
                >
                  <h4 className="text-xs font-bold text-foreground">{lim.title}</h4>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                    {lim.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
