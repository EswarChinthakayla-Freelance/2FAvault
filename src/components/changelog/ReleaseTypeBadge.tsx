import { ChangeType } from '../../types/changelog';
import { Badge } from '../ui/badge';

export function ReleaseTypeBadge({ type }: { type: ChangeType }) {
  switch (type) {
    case 'new':
      return (
        <Badge variant="success" className="font-mono text-[10px] uppercase font-bold">
          NEW
        </Badge>
      );
    case 'improved':
      return (
        <Badge variant="accent" className="font-mono text-[10px] uppercase font-bold">
          IMPROVED
        </Badge>
      );
    case 'fixed':
      return (
        <Badge variant="warning" className="font-mono text-[10px] uppercase font-bold">
          FIXED
        </Badge>
      );
    case 'security':
      return (
        <Badge variant="destructive" className="font-mono text-[10px] uppercase font-bold">
          SECURITY
        </Badge>
      );
    case 'breaking':
      return (
        <Badge variant="destructive" className="font-mono text-[10px] uppercase font-bold">
          BREAKING
        </Badge>
      );
    default:
      return <Badge variant="outline">{type}</Badge>;
  }
}
