'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE } from '@/lib/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', className)}>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mt-3 text-neutral-500 dark:text-neutral-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
