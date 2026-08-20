import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { ChangelogCard } from '../../components/changelog/ChangelogCard';
import { DownloadCard } from '../../components/marketing/DownloadCard';
import { getChangelogBySlug } from '../../content/changelog';
import { RELEASES } from '../../data/releases';

export function ChangelogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getChangelogBySlug(slug) : undefined;

  useEffect(() => {
    if (entry) {
      updatePageMetadata({
        title: `Release Notes — v${entry.version}`,
        description: entry.summary,
        canonical: `/changelog/${entry.slug}`,
      });
    }
  }, [entry]);

  if (!entry) {
    return <Navigate to="/changelog" replace />;
  }

  const matchingRelease = RELEASES.find((r) => r.version === entry.version);

  return (
    <div className="flex flex-col">
      {/* Top Breadcrumb */}
      <div className="border-b border-border bg-surface-elevated/40 py-4">
        <Container size="default">
          <Link
            to="/changelog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Releases</span>
          </Link>
        </Container>
      </div>

      {/* Main Release Card & Download */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <ChangelogCard entry={entry} isDetail />

          {matchingRelease && (
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold text-foreground">
                Release Artifacts & Verification
              </h3>
              <DownloadCard release={matchingRelease} showAllDetails />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
