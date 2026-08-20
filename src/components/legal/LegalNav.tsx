import { Link, useLocation } from 'react-router-dom';
import { Shield, FileText, HelpCircle, Info } from 'lucide-react';
import { cn } from '../../lib/cn';

const LEGAL_LINKS = [
  { href: '/about', label: 'About 2FA Vault', icon: Info },
  { href: '/privacy', label: 'Privacy Policy', icon: Shield },
  { href: '/security', label: 'Security Philosophy', icon: Shield },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/support', label: 'Support & Contact', icon: FileText },
];

export function LegalNav({ className }: { className?: string }) {
  const location = useLocation();

  return (
    <nav className={cn('flex flex-col gap-1', className)} aria-label="Legal & Information Navigation">
      {LEGAL_LINKS.map((link) => {
        const Icon = link.icon;
        const isActive = location.pathname === link.href;
        return (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              'flex min-h-11 items-center gap-3 rounded-[14px] border px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.985]',
              isActive
                ? 'border-border bg-surface-elevated text-foreground shadow-sm'
                : 'border-transparent text-muted-foreground hover:border-border hover:bg-surface-elevated/50 hover:text-foreground'
            )}
          >
            <Icon className={cn('h-4 w-4', isActive ? 'text-primary' : 'text-muted')} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
