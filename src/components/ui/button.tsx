import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[14px] border text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer before:pointer-events-none before:absolute before:inset-x-2 before:top-0 before:h-px before:bg-white/20 active:translate-y-px active:scale-[0.985]',
  {
    variants: {
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.18),0_7px_18px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.14)]',
        secondary:
          'border-border bg-surface-elevated text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-surface-muted',
        outline:
          'border-border bg-surface/80 text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-surface-elevated',
        ghost:
          'border-transparent text-foreground hover:border-border hover:bg-surface-elevated',
        link:
          'border-transparent text-foreground underline-offset-4 hover:underline p-0 h-auto before:hidden',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground shadow-sm hover:-translate-y-0.5 hover:bg-destructive/90',
        glow:
          'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,255,255,0.15)] dark:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-primary/95 active:scale-[0.98]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-xl px-6 text-base font-semibold',
        xl: 'h-14 rounded-2xl px-8 text-base font-semibold',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
