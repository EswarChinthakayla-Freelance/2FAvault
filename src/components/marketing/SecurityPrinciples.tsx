import React from 'react';
import { Shield, Key, Lock, Cpu, EyeOff, CloudOff, LifeBuoy } from 'lucide-react';
import { SECURITY_PRINCIPLES } from '../../content/security';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Shield,
  Key,
  LifeBuoy,
  EyeOff,
  CloudOff,
  Lock,
};

export function SecurityPrinciples() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SECURITY_PRINCIPLES.map((principle) => {
        const Icon = ICON_MAP[principle.iconName] || Shield;
        return (
          <Card
            key={principle.id}
            className="group hover:border-zinc-500/50 hover:bg-surface-elevated/50 transition-all duration-300"
          >
            <CardHeader className="space-y-3 pb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground shadow-xs group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                {principle.title}
              </CardTitle>
              <p className="text-xs font-medium text-muted-foreground">
                {principle.summary}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {principle.technicalDetails}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
