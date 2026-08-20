import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { Button } from '../../components/ui/button';

export function NotFoundPage() {
  useEffect(() => {
    updatePageMetadata({
      title: '404 — Page Not Found',
      description: 'The requested page could not be found.',
      canonical: '/404',
      robots: 'noindex, nofollow',
    });
  }, []);

  return (
    <Section glow className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-surface-elevated border border-border mx-auto text-foreground shadow-sm">
          <ShieldAlert className="h-8 w-8 text-foreground" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The page or release route you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="default" size="default" className="gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link to="/download">
            <Button variant="outline" size="default">
              <span>Download APK</span>
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
