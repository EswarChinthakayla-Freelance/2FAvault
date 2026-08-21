import { VaultLoopMark } from './VaultLoopMark';
import { cn } from '../../lib/cn';

interface BrandLockupProps {
  size?: 'sm' | 'default' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function BrandLockup({
  size = 'default',
  showTagline = false,
  className,
}: BrandLockupProps) {
  const markSize = size === 'sm' ? 20 : size === 'lg' ? 32 : 24;
  const boxSize = size === 'sm' ? 30 : size === 'lg' ? 44 : 36;
  const radius = size === 'sm' ? 'rounded-lg' : size === 'lg' ? 'rounded-2xl' : 'rounded-xl';

  return (
    <div className={cn('flex items-center gap-3 select-none', className)}>
      <div
        className={cn(
          'flex items-center justify-center bg-zinc-950 text-white border border-zinc-800 dark:bg-zinc-900 dark:border-zinc-800 shadow-xs shrink-0',
          radius
        )}
        style={{ width: boxSize, height: boxSize }}
      >
        <VaultLoopMark size={markSize} glow color="#FAFAFA" />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={cn(
            'font-extrabold tracking-tight text-foreground leading-none',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'
          )}
        >
          2FA Vault
        </span>
        {showTagline && (
          <span className="text-[10px] text-muted-foreground font-mono mt-1">
            Android Security
          </span>
        )}
      </div>
    </div>
  );
}
