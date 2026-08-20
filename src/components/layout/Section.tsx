import React from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'default' | 'lg' | 'full';
  glow?: boolean;
  grid?: boolean;
  withContainer?: boolean;
}

export function Section({
  containerSize = 'default',
  glow = false,
  grid = false,
  withContainer = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative py-16 md:py-24 overflow-hidden',
        glow && 'glow-zinc',
        grid && 'bg-grid-pattern',
        className
      )}
      {...props}
    >
      {withContainer ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
