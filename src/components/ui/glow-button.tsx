import { forwardRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface GlowButtonProps extends ButtonProps {}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          'relative transition-all duration-300',
          variant === 'default' && [
            'bg-purple-600 hover:bg-purple-700',
            'after:absolute after:inset-0',
            'after:bg-purple-500/50 after:blur-lg after:opacity-0',
            'hover:after:opacity-100',
            'after:-z-10 after:transition-opacity',
          ],
          variant === 'outline' && [
            'border-purple-500 text-purple-400',
            'hover:bg-purple-500/20',
            'after:absolute after:inset-0',
            'after:bg-purple-500/30 after:blur-lg after:opacity-0',
            'hover:after:opacity-100',
            'after:-z-10 after:transition-opacity',
          ],
          className
        )}
        {...props}
      />
    );
  }
);