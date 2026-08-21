import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { BrandLockup } from '../brand/BrandLockup';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/button';
import { Container } from './Container';
import { NAV_ITEMS } from '../../content/site';
import { LATEST_RELEASE } from '../../data/releases';
import { cn } from '../../lib/cn';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200 backdrop-blur-md',
        scrolled
          ? 'bg-background/95 border-b border-border shadow-xs'
          : 'bg-background/90 border-b border-border/60'
      )}
    >
      <Container size="lg" className="flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <BrandLockup size="default" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'relative min-h-10 inline-flex items-center rounded-[14px] border px-3.5 py-1.5 text-sm font-semibold transition-all active:scale-[0.98] select-none',
                  isActive
                    ? 'border-border bg-surface-elevated text-foreground shadow-xs'
                    : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground hover:bg-surface-elevated/60'
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1.5 rounded-full bg-emerald-500/10 px-1.5 py-0.2 text-[10px] text-emerald-500 font-mono">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link to="/download">
            <Button variant="default" size="sm" className="gap-2 shadow-xs">
              <Download className="h-4 w-4" />
              <span>Get APK (v{LATEST_RELEASE.version})</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <MobileNav />
      </Container>
    </header>
  );
}
