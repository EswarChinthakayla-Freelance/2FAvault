import { CHANGELOG_ENTRIES } from '../../content/changelog';
import { ChangelogCard } from './ChangelogCard';

export function ChangelogTimeline() {
  return (
    <div className="space-y-8">
      {CHANGELOG_ENTRIES.map((entry) => (
        <ChangelogCard key={entry.slug} entry={entry} />
      ))}
    </div>
  );
}
