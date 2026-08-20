import { cn } from '../../lib/cn';

interface StoreBadgeProps {
  playStoreUrl?: string;
  className?: string;
}

export function StoreBadge({ playStoreUrl, className }: StoreBadgeProps) {
  if (!playStoreUrl) {
    return (
      <div
        className={cn(
          'inline-flex min-h-12 items-center gap-3 rounded-[14px] border border-border bg-surface-elevated px-4 py-2.5 shadow-sm opacity-80 cursor-default select-none',
          className
        )}
        title="Google Play release is coming soon"
      >
        <svg className="h-6 w-6 fill-current text-muted" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.436V3.25c0-.547.22-1.047.609-1.436zm11.242 11.245l2.259 2.259-10.74 6.137 8.481-8.396zm0-2.118L6.37 2.545l10.74 6.137-2.259 2.259zm1.485 1.059l3.35-1.914a1.25 1.25 0 0 1 0 2.167l-3.35 1.914-1.129-1.083 1.129-1.084z" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            Google Play
          </span>
          <span className="text-xs font-semibold text-foreground">Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex min-h-12 items-center gap-3 rounded-[14px] border border-border bg-surface px-4 py-2.5 text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-surface-elevated hover:shadow-md transition-all active:translate-y-px active:scale-[0.985]',
        className
      )}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.436V3.25c0-.547.22-1.047.609-1.436zm11.242 11.245l2.259 2.259-10.74 6.137 8.481-8.396zm0-2.118L6.37 2.545l10.74 6.137-2.259 2.259zm1.485 1.059l3.35-1.914a1.25 1.25 0 0 1 0 2.167l-3.35 1.914-1.129-1.083 1.129-1.084z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
          Get it on
        </span>
        <span className="text-sm font-bold text-foreground">Google Play</span>
      </div>
    </a>
  );
}
