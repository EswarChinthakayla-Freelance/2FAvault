import { Shield, Smartphone, Server, ShieldCheck, FileKey, Database } from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-sm space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Zero-Knowledge Cryptographic Trust Boundary
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Visual representation of key derivation, local encryption, and server-blind synchronization.
        </p>
      </div>

      {/* Trust Boundary Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1: Device Hardware */}
        <div className="rounded-2xl border border-border bg-surface-elevated/60 p-5 space-y-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-surface px-2 py-0.5 rounded-full border border-border">
              Local Hardware
            </span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-foreground">Android KeyStore / Biometrics</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Hardware-backed Secure Element holds Key Encryption Key (KEK).
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-3 space-y-1 text-[11px] font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5 text-foreground font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>VMK Protected</span>
            </div>
            <p className="text-[10px]">AES-256-GCM wrapped key</p>
          </div>
        </div>

        {/* Step 2: Vault Engine */}
        <div className="rounded-2xl border border-zinc-700 bg-surface-elevated/80 p-5 space-y-4 relative shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
              App Boundary
            </span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-foreground">Local Vault Engine</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Decrypted payload lives solely in volatile memory during active app use.
            </p>
          </div>

          <div className="space-y-2 text-[11px] font-mono">
            <div className="rounded-xl border border-border bg-surface p-2.5 flex items-center justify-between">
              <span>TOTP / HOTP</span>
              <span className="text-foreground font-bold">Offline Gen</span>
            </div>
            <div className="rounded-xl border border-border bg-surface p-2.5 flex items-center justify-between">
              <span>Recovery Codes</span>
              <span className="text-muted-foreground font-bold">Encrypted</span>
            </div>
          </div>
        </div>

        {/* Step 3: Server Blind Relay */}
        <div className="rounded-2xl border border-border bg-surface-elevated/60 p-5 space-y-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-muted-foreground border border-border">
              <Server className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-surface px-2 py-0.5 rounded-full border border-border">
              Server-Blind
            </span>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-foreground">Sync & Storage Relay</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cloud only receives opaque ciphertext blobs. Zero knowledge of keys or seeds.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-3 space-y-1 text-[11px] font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5 text-foreground font-semibold">
              <Database className="h-3.5 w-3.5 text-zinc-400" />
              <span>Ciphertext Only</span>
            </div>
            <p className="text-[10px]">No plaintext or keys in DB</p>
          </div>
        </div>
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="rounded-2xl border border-border bg-surface-elevated p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-0.5">
          <h5 className="text-xs sm:text-sm font-bold text-foreground">
            Emergency Recovery Key Derivation
          </h5>
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            PBKDF2-HMAC-SHA256 (100,000 iterations) derives an unwrapping key to restore your VMK if hardware is lost.
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground whitespace-nowrap">
          <FileKey className="h-4 w-4" />
          <span>RFC 6238 / RFC 4226 Compliant</span>
        </div>
      </div>
    </div>
  );
}
