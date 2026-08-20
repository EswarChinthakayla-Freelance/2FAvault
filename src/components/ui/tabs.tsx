import * as React from 'react';
import { cn } from '../../lib/cn';

type TabsContextType = {
  value: string;
  onValueChange: (val: string) => void;
};

const TabsContext = React.createContext<TabsContextType | null>(null);

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [currentValue, setCurrentValue] = React.useState(defaultValue || '');

  const activeValue = value !== undefined ? value : currentValue;
  const handleValueChange = (val: string) => {
    setCurrentValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: activeValue, onValueChange: handleValueChange }}>
      <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-[15px] border border-border bg-surface-elevated p-1 text-muted shadow-inner',
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(TabsContext);
  const isActive = ctx?.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx?.onValueChange(value)}
      className={cn(
        'inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-[11px] border border-transparent px-3.5 py-1.5 text-sm font-semibold transition-all cursor-pointer active:scale-[0.98]',
        isActive
          ? 'border-border bg-surface text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-surface/50',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;

  return <div className={cn('outline-none', className)}>{children}</div>;
}
