import { Link } from 'react-router-dom';
import { Shield, ExternalLink } from 'lucide-react';
import { BrandLockup } from '../brand/BrandLockup';
import { Container } from './Container';
import { FOOTER_SECTIONS } from '../../content/site';
import { LATEST_RELEASE } from '../../data/releases';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-foreground transition-colors">
      <Container size="lg" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLockup size="default" showTagline />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Open-source, local-first two-factor authenticator and encrypted recovery vault for Android.
              Zero-knowledge by design.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-emerald-500" />
                <span>MIT Licensed</span>
              </div>
            </div>
          </div>

          {/* Links Cols */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'isExternal' in link && link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {currentYear} 2FA Vault Contributors.</span>
            <span>Released under MIT License.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono">
              Latest: v{LATEST_RELEASE.version} (Build {LATEST_RELEASE.build})
            </span>
            <span>•</span>
            <span>{LATEST_RELEASE.minimumAndroid}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
