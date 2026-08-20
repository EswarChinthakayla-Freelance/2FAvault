import { Lock, Code2, HeartHandshake } from 'lucide-react';

export function TrustCallout() {
  return (
    <div className="rounded-[28px] border border-border bg-surface p-6 sm:p-12 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_20px_55px_rgba(0,0,0,0.07)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border mx-auto md:mx-0">
            <Lock className="h-5 w-5" />
          </div>
          <h4 className="text-base font-bold text-foreground">Zero-Knowledge Guarantee</h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Your secrets are encrypted on your physical device before entering any database or network stream.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border mx-auto md:mx-0">
            <Code2 className="h-5 w-5" />
          </div>
          <h4 className="text-base font-bold text-foreground">100% Open Source (MIT)</h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every line of client cryptography and storage logic is publicly inspectable and auditable on GitHub.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border mx-auto md:mx-0">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <h4 className="text-base font-bold text-foreground">No Ads. No Trackers.</h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            No telemetry, no invasive marketing analytics, and no third-party profiling. Your privacy is paramount.
          </p>
        </div>
      </div>
    </div>
  );
}
