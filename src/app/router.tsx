import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';
import { ROUTES } from './routes';

const HomePage = lazy(() => import('../pages/home/HomePage').then((m) => ({ default: m.HomePage })));
const DownloadPage = lazy(() => import('../pages/download/DownloadPage').then((m) => ({ default: m.DownloadPage })));
const FeaturesPage = lazy(() => import('../pages/features/FeaturesPage').then((m) => ({ default: m.FeaturesPage })));
const SecurityPage = lazy(() => import('../pages/security/SecurityPage').then((m) => ({ default: m.SecurityPage })));
const ChangelogPage = lazy(() => import('../pages/changelog/ChangelogPage').then((m) => ({ default: m.ChangelogPage })));
const ChangelogDetailPage = lazy(() => import('../pages/changelog/ChangelogDetailPage').then((m) => ({ default: m.ChangelogDetailPage })));
const AboutPage = lazy(() => import('../pages/about/AboutPage').then((m) => ({ default: m.AboutPage })));
const PrivacyPage = lazy(() => import('../pages/privacy/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const FaqPage = lazy(() => import('../pages/faq/FaqPage').then((m) => ({ default: m.FaqPage })));
const SupportPage = lazy(() => import('../pages/support/SupportPage').then((m) => ({ default: m.SupportPage })));
const NotFoundPage = lazy(() => import('../pages/not-found/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

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
    window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
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
        <Suspense fallback={<div className="min-h-[60vh]" role="status" aria-label="Loading page" />}>
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
        </Suspense>
      </main>

      <SiteFooter />
      <ScrollToTopButton />
    </div>
  );
}
