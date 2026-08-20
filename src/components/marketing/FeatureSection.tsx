import { Check } from 'lucide-react';
import { FeatureItem } from '../../types/site';
import { DeviceFrame } from './DeviceFrame';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/cn';

interface FeatureSectionProps {
  feature: FeatureItem;
  reversed?: boolean;
}

export function FeatureSection({ feature, reversed = false }: FeatureSectionProps) {
  return (
    <div className="py-12 md:py-20">
      <div
        className={cn(
          'grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16',
          reversed && 'lg:flex-row-reverse'
        )}
      >
        {/* Text Col */}
        <div
          className={cn(
            'flex flex-col space-y-5 lg:col-span-6',
            reversed ? 'lg:order-2' : 'lg:order-1'
          )}
        >
          {feature.badge && (
            <div>
              <Badge variant="outline" className="text-xs font-semibold px-3 py-1">
                {feature.badge}
              </Badge>
            </div>
          )}

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {feature.title}
            </h2>
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              {feature.tagline}
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          <ul className="space-y-3 pt-2">
            {feature.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-elevated border border-border text-foreground mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Mockup Col */}
        <div
          className={cn(
            'flex items-center justify-center lg:col-span-6',
            reversed ? 'lg:order-1' : 'lg:order-2'
          )}
        >
          <DeviceFrame
            variant="interactive-mock"
            imageAlt={feature.title}
            defaultTab={
              feature.id === 'spaces-organization'
                ? 'vault'
                : feature.id === 'security-shield'
                ? 'security'
                : feature.id === 'zero-knowledge-sync'
                ? 'settings'
                : 'home'
            }
          />
        </div>
      </div>
    </div>
  );
}
