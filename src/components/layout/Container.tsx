import React from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg' | 'full';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  const maxWidth =
    size === 'sm'
      ? 'max-w-4xl'
      : size === 'default'
      ? 'max-w-6xl'
      : size === 'lg'
      ? 'max-w-7xl'
      : 'max-w-full';

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidth, className)}
      {...props}
    >
      {children}
    </div>
  );
}
