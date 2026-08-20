import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from './ThemeToggle';
import { BrandLockup } from '../brand/BrandLockup';
import { NAV_ITEMS } from '../../content/site';
import { LATEST_RELEASE } from '../../data/releases';
import { cn } from '../../lib/cn';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="text-foreground hover:bg-surface-elevated"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop overlay to dim background content */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Opaque Sheet Drawer */}
          <div
            className="fixed top-16 inset-x-0 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-zinc-950 border-b border-border p-6 shadow-2xl flex flex-col justify-between space-y-6 animate-in slide-in-from-top-2 fade-in duration-200"
            style={{
              backgroundColor: 'var(--sheet-bg, inherit)',
            }}
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-border flex items-center justify-between">
                <BrandLockup size="sm" showTagline />
                <span className="text-[11px] font-mono text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded-md border border-border">
                  Android Security
                </span>
              </div>

              <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-zinc-100 dark:bg-zinc-900 text-foreground font-semibold border border-border'
                          : 'text-muted-foreground hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 hover:text-foreground'
                      )}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-500 font-mono">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs text-muted-foreground font-mono">
                  Latest: v{LATEST_RELEASE.version}
                </span>
                <ThemeToggle />
              </div>

              <Link to="/download" onClick={closeMenu}>
                <Button variant="default" size="lg" className="w-full gap-2 font-semibold shadow-md">
                  <Download className="h-4 w-4" />
                  <span>Download APK (v{LATEST_RELEASE.version})</span>
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
