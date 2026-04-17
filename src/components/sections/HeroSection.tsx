'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { heroStagger, fadeUp } from '@/lib/animations';
import dynamic from 'next/dynamic';

const HeroShape = dynamic(
  () => import('./HeroShape').then((m) => m.HeroShape),
  { ssr: false }
);

interface HeroSectionProps {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
}

export function HeroSection({
  greeting,
  name,
  title,
  tagline,
  ctaProjects,
  ctaContact,
}: HeroSectionProps) {
  return (
    <section className="py-20 sm:py-28 md:py-36">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 min-w-0"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-neutral-500 dark:text-neutral-400 mb-3 text-lg"
          >
            {greeting}{' '}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">
              {name}
            </span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl leading-relaxed mb-10"
          >
            {tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:opacity-80 transition-opacity"
            >
              {ctaProjects}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              {ctaContact}
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D Shape */}
        <motion.div
          className="flex-shrink-0 flex justify-center md:justify-end"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ overflow: 'visible' }}
        >
          <HeroShape />
        </motion.div>
      </div>
    </section>
  );
}
