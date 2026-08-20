import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border border-border bg-surface-elevated text-foreground hover:bg-border/60',
        secondary:
          'border border-transparent bg-surface-muted text-foreground',
        outline: 'border border-border text-foreground',
        success:
          'border border-zinc-700/80 bg-zinc-800/80 text-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100',
        warning:
          'border border-zinc-700 bg-zinc-800/60 text-zinc-200',
        accent:
          'border border-zinc-600 bg-zinc-800 text-zinc-100',
        destructive:
          'border border-zinc-700 bg-zinc-900 text-zinc-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
