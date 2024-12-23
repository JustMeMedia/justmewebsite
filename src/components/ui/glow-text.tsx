import { cn } from '@/lib/utils';
import React from 'react';

interface GlowTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
}

export function GlowText({ 
  children, 
  color = 'purple',
  className,
  ...props 
}: GlowTextProps) {
  return (
    <div 
      className={cn(
        'animate-pulse-slow font-mono',
        color === 'purple' && 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]',
        color === 'blue' && 'text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}