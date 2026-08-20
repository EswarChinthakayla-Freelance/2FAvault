import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme, Theme } from '../../hooks/useTheme';
import { cn } from '../../lib/cn';

interface ThemeToggleProps {
  className?: string;
  variant?: 'cycle' | 'segmented';
}

export function ThemeToggle({ className, variant = 'cycle' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (variant === 'segmented') {
    const options: { value: Theme; label: string; icon: typeof Sun }[] = [
      { value: 'light', label: 'Light', icon: Sun },
      { value: 'system', label: 'System', icon: Laptop },
      { value: 'dark', label: 'Dark', icon: Moon },
    ];

    return (
      <div
        className={cn(
          'inline-flex min-h-11 items-center rounded-[15px] bg-surface-elevated p-1 border border-border shadow-inner',
          className
        )}
      >
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = theme === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTheme(opt.value)}
              className={cn(
                'flex min-h-9 items-center gap-1.5 rounded-[11px] border border-transparent px-2.5 py-1 text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer',
                isActive
                  ? 'border-border bg-surface text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title={`Switch to ${opt.label} theme`}
              aria-label={`Switch to ${opt.label} theme`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Cycle variant
  const handleCycle = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const Icon =
    theme === 'system' ? Laptop : resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={handleCycle}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-border bg-surface text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-surface-elevated active:translate-y-px active:scale-[0.97] cursor-pointer',
        className
      )}
      title={`Current: ${theme} theme. Click to cycle.`}
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4 text-foreground transition-transform duration-200 hover:rotate-12" />
    </button>
  );
}
