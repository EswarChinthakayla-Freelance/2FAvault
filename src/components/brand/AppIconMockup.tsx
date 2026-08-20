import { VaultLoopMark } from './VaultLoopMark';
import { cn } from '../../lib/cn';

export function AppIconMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-3xl bg-zinc-950 p-6 shadow-2xl border border-zinc-800/80',
        className
      )}
    >
      <div className="absolute inset-0 rounded-3xl bg-radial from-emerald-500/10 to-transparent pointer-events-none" />
      <VaultLoopMark size={64} glow />
    </div>
  );
}
