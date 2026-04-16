'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

export function LogoMark() {
  return (
    <Link href="/" aria-label="Home" className="group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Rotating dashed circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-400 dark:border-neutral-500 group-hover:border-neutral-700 dark:group-hover:border-neutral-300 transition-colors"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        {/* Kanji */}
        <span className="relative text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 select-none">
          牧
        </span>
      </div>
    </Link>
  );
}
