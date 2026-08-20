import React from 'react';
import { cn } from '../../lib/cn';

interface LegalSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalSection({ id, title, children, className }: LegalSectionProps) {
  return (
    <section id={id} className={cn('space-y-3 pt-6 border-t border-border first:border-0 first:pt-0', className)}>
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
