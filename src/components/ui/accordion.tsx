import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

type AccordionContextType = {
  expanded: string[];
  toggle: (id: string) => void;
  type?: 'single' | 'multiple';
};

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  type = 'single',
  defaultValue,
  children,
  className,
}: {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}) {
  const [expanded, setExpanded] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggle = (id: string) => {
    if (type === 'single') {
      setExpanded((prev) => (prev.includes(id) ? [] : [id]));
    } else {
      setExpanded((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle, type }}>
      <div className={cn('divide-y divide-border overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.05),0_14px_38px_rgba(0,0,0,0.05)]', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('transition-colors', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  value,
  children,
  className,
}: {
  value?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const isExpanded = value ? ctx?.expanded.includes(value) : false;

  return (
    <button
      type="button"
      onClick={() => value && ctx?.toggle(value)}
      className={cn(
        'flex min-h-16 w-full items-center justify-between p-5 text-left font-medium text-foreground transition-all hover:bg-surface-elevated active:bg-surface-muted cursor-pointer select-none',
        className
      )}
      aria-expanded={isExpanded}
    >
      <span className="text-base font-semibold">{children}</span>
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 rounded-full border border-border bg-surface-elevated p-0.5 text-muted-foreground transition-all duration-200',
          isExpanded && 'rotate-180 text-foreground'
        )}
      />
    </button>
  );
}

export function AccordionContent({
  value,
  children,
  className,
}: {
  value?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const isExpanded = value ? ctx?.expanded.includes(value) : false;

  if (!isExpanded) return null;

  return (
    <div className={cn('px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed', className)}>
      {children}
    </div>
  );
}
