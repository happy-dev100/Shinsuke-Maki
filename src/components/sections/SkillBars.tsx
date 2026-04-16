'use client';

import { motion } from 'framer-motion';
import { EASE } from '@/lib/animations';
import { skillIconMap } from '@/lib/skillIcons';
import type { SkillCategory } from '@/data/skills';

interface SkillBarsProps {
  categories: SkillCategory[];
  categoryLabels: Record<string, string>;
  yearsLabel: string;
}

export function SkillBars({ categories, categoryLabels, yearsLabel }: SkillBarsProps) {
  return (
    <div className="space-y-14">
      {categories.map((category, ci) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE, delay: ci * 0.05 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
            {categoryLabels[category.key] ?? category.key}
          </h2>
          <div className="space-y-5">
            {category.skills.map((skill, si) => {
              const def = skillIconMap[skill.name];
              const Icon = def?.icon;
              const brandColor = def?.color !== 'currentColor' ? def?.color : undefined;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    ease: EASE,
                    delay: ci * 0.05 + si * 0.04,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      {Icon && (
                        <Icon
                          size={16}
                          style={brandColor ? { color: brandColor } : undefined}
                          className={!brandColor ? 'text-neutral-600 dark:text-neutral-400' : ''}
                        />
                      )}
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {skill.name}
                      </span>
                      <span className="text-xs text-neutral-400 dark:text-neutral-600">
                        {skill.years} {yearsLabel}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 dark:text-neutral-600 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden">
                    <motion.div
                      className={
                        brandColor
                          ? 'h-full rounded-full'
                          : 'h-full bg-neutral-900 dark:bg-neutral-100 rounded-full'
                      }
                      style={brandColor ? { background: brandColor } : undefined}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.8,
                        ease: EASE,
                        delay: ci * 0.05 + si * 0.04 + 0.1,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
