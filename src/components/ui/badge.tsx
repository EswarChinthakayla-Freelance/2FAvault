import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  'inline-flex min-h-7 items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold tracking-[0.01em] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-border bg-surface-elevated text-foreground hover:bg-surface-muted',
        secondary:
          'border-border/70 bg-surface-muted text-foreground',
        outline: 'border-border bg-surface/70 text-foreground',
        success:
          'border-foreground/15 bg-foreground/8 text-foreground',
        warning:
          'border-foreground/15 bg-surface-elevated text-foreground',
        accent:
          'border-primary bg-primary text-primary-foreground',
        destructive:
          'border-destructive/30 bg-destructive/10 text-foreground',
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
