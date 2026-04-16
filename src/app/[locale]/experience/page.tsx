'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { experiences } from '@/data/experience';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Tag } from '@/components/ui/Tag';
import { EASE } from '@/lib/animations';

const GRADIENTS = [
  ['#1a1a2e', '#16213e'],
  ['#0f2027', '#203a43'],
  ['#1a1a1a', '#2d2d2d'],
  ['#0d1117', '#161b22'],
];

function formatPeriod(start: string, end: string | null, presentLabel: string): string {
  const fmt = (str: string) => {
    const [year, month] = str.split('-');
    return `${year}.${month}`;
  };
  return `${fmt(start)} — ${end ? fmt(end) : presentLabel}`;
}

export default function ExperiencePage() {
  const t = useTranslations('experience');
  const locale = useLocale() as 'en' | 'ja';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            const [gradFrom, gradTo] = GRADIENTS[index % GRADIENTS.length];

            return (
              <motion.div
                key={index}
                className="sm:pl-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
              >
                {/* Hoverable timeline dot */}
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="absolute left-0 top-2 -translate-x-1/2 hidden sm:flex items-center justify-center w-6 h-6 rounded-full z-10 cursor-pointer"
                >
                  <motion.div
                    animate={isActive ? { scale: 1.3 } : { scale: 1 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="w-4 h-4 rounded-full bg-white border-2 border-neutral-300 dark:border-neutral-600 shadow-sm"
                  />
                </div>

                {/* Tooltip image card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.88, x: 8 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.88, x: 8 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                      className="absolute left-5 top-0 z-50 w-80 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-2xl hidden sm:block"
                      style={{ transformOrigin: 'left center' }}
                    >
                      {/* Connector arrow */}
                      <div className="absolute left-0 top-6 -translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-neutral-200 dark:border-r-neutral-700" />
                      <div className="absolute left-0 top-6 -translate-x-[calc(100%-1px)] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-white dark:border-r-neutral-900" />

                      {exp.logo ? (
                        <div className="relative aspect-video w-full bg-neutral-100 dark:bg-neutral-900">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            fill
                            className="object-cover"
                            sizes="208px"
                          />
                        </div>
                      ) : (
                        <div
                          className="aspect-video w-full flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
                        >
                          <span
                            className="text-5xl font-bold select-none"
                            style={{ color: 'rgba(255,255,255,0.15)' }}
                          >
                            {exp.company.charAt(0)}
                          </span>
                        </div>
                      )}

                      <div className="px-4 py-3 bg-white dark:bg-neutral-900">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                          {exp.company}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {formatPeriod(exp.period.start, exp.period.end, t('present'))}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.role[locale]}
                    </h2>
                    <div className="flex items-center gap-2 mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                    {formatPeriod(exp.period.start, exp.period.end, t('present'))}
                  </span>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 text-sm">
                  {exp.description[locale]}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.responsibilities[locale].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-neutral-300 dark:text-neutral-700 mt-0.5 flex-shrink-0">›</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile hint */}
      <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-600 sm:hidden">
        {locale === 'ja' ? '※ドットのクリックはデスクトップで利用可能' : '※ Dot tooltips available on desktop'}
      </p>
    </div>
  );
}
