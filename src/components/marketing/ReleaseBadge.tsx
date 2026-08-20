import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LATEST_RELEASE } from '../../data/releases';
import { cn } from '../../lib/cn';

export function ReleaseBadge({ className }: { className?: string }) {
  return (
    <Link
      to={`/changelog/${LATEST_RELEASE.version}`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground transition-all hover:bg-surface-elevated hover:text-foreground hover:border-zinc-500/50 group select-none',
        className
      )}
    >
      <span className="flex h-2 w-2 rounded-full bg-foreground animate-pulse" />
      <span className="font-semibold text-foreground">v{LATEST_RELEASE.version} Available</span>
      <span className="hidden sm:inline text-muted">•</span>
      <span className="hidden sm:inline text-muted-foreground">See what's new</span>
      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 text-muted-foreground" />
    </Link>
  );
}
