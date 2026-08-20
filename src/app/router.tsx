import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';
import { HomePage } from '../pages/home/HomePage';
import { DownloadPage } from '../pages/download/DownloadPage';
import { FeaturesPage } from '../pages/features/FeaturesPage';
import { SecurityPage } from '../pages/security/SecurityPage';
import { ChangelogPage } from '../pages/changelog/ChangelogPage';
import { ChangelogDetailPage } from '../pages/changelog/ChangelogDetailPage';
import { AboutPage } from '../pages/about/AboutPage';
import { PrivacyPage } from '../pages/privacy/PrivacyPage';
import { FaqPage } from '../pages/faq/FaqPage';
import { SupportPage } from '../pages/support/SupportPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';
import { ROUTES } from './routes';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors selection:bg-zinc-800 selection:text-zinc-100 dark:selection:bg-zinc-200 dark:selection:text-zinc-900">
      <ScrollToTop />
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DOWNLOAD} element={<DownloadPage />} />
          <Route path={ROUTES.FEATURES} element={<FeaturesPage />} />
          <Route path={ROUTES.SECURITY} element={<SecurityPage />} />
          <Route path={ROUTES.CHANGELOG} element={<ChangelogPage />} />
          <Route path={ROUTES.CHANGELOG_DETAIL} element={<ChangelogDetailPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
          <Route path={ROUTES.FAQ} element={<FaqPage />} />
          <Route path={ROUTES.SUPPORT} element={<SupportPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>

      <SiteFooter />
      <ScrollToTopButton />
    </div>
  );
}
