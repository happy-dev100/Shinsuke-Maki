'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import type { Variants } from 'framer-motion';

interface AnimateListProps {
  children: React.ReactNode;
  className?: string;
  itemVariants?: Variants;
}

export function AnimateList({ children, className, itemVariants = fadeUp }: AnimateListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateItemProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export function AnimateItem({ children, className, variants = fadeUp }: AnimateItemProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
