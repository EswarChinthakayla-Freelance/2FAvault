import { Calendar, Tag, ShieldCheck } from 'lucide-react';
import { formatDate } from '../../lib/formatVersion';

interface VersionMetadataProps {
  version: string;
  build: number;
  releasedAt: string;
  status: 'stable' | 'beta';
}

export function VersionMetadata({
  version,
  build,
  releasedAt,
  status,
}: VersionMetadataProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <div className="flex items-center gap-1.5 font-mono">
        <Tag className="h-3.5 w-3.5" />
        <span>v{version}</span>
        <span className="text-muted">(Build {build})</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" />
        <span>{formatDate(releasedAt)}</span>
      </div>

      <div className="flex items-center gap-1">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
        <span className="capitalize">{status}</span>
      </div>
    </div>
  );
}
