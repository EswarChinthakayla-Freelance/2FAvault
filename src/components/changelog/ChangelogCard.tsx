import { Link } from 'react-router-dom';
import { Download, ArrowRight, Check } from 'lucide-react';
import { ChangelogEntry } from '../../types/changelog';
import { ReleaseTypeBadge } from './ReleaseTypeBadge';
import { VersionMetadata } from './VersionMetadata';
import { Button } from '../ui/button';
import { formatBytes } from '../../lib/formatVersion';

interface ChangelogCardProps {
  entry: ChangelogEntry;
  isDetail?: boolean;
}

export function ChangelogCard({ entry, isDetail = false }: ChangelogCardProps) {
  return (
    <article className="rounded-[28px] border border-border bg-surface p-5 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_18px_48px_rgba(0,0,0,0.07)] space-y-6 transition-all hover:-translate-y-0.5 hover:border-foreground/15">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-5">
        <VersionMetadata
          version={entry.version}
          build={entry.build}
          releasedAt={entry.releasedAt}
          status={entry.status}
        />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {isDetail ? (
            entry.title
          ) : (
            <Link
              to={`/changelog/${entry.slug}`}
              className="hover:text-foreground/70 transition-colors"
            >
              {entry.title}
            </Link>
          )}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {entry.summary}
        </p>
      </div>

      {/* Sections: New / Improved / Fixed / Security */}
      <div className="space-y-6">
        {entry.sections.map((sec, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2">
              <ReleaseTypeBadge type={sec.type} />
              {sec.title && (
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  {sec.title}
                </span>
              )}
            </div>
            <ul className="space-y-2 pl-1">
              {sec.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-surface-elevated border border-border text-foreground mt-0.5">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer / Downloads */}
      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
        {entry.apkUrl && (
          <a href={entry.apkUrl} download>
            <Button variant="default" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Download APK ({formatBytes(entry.apkSizeBytes)})</span>
            </Button>
          </a>
        )}

        {!isDetail && (
          <Link
            to={`/changelog/${entry.slug}`}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-border bg-surface-elevated px-3 text-xs font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-surface-muted ml-auto group"
          >
            <span>View Full Release Notes</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
}
