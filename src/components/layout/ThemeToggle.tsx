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
          'inline-flex items-center rounded-xl bg-surface-elevated p-1 border border-border',
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
                'flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer',
                isActive
                  ? 'bg-surface text-foreground shadow-sm font-semibold'
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
        'inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-surface-elevated cursor-pointer',
        className
      )}
      title={`Current: ${theme} theme. Click to cycle.`}
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4 text-foreground transition-transform duration-200 hover:rotate-12" />
    </button>
  );
}
