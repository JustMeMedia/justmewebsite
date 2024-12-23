import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
}

export function AnimatedIcon({ icon: Icon, className }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn('inline-block', className)}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
}