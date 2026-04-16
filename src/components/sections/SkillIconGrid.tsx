'use client';

import { motion } from 'framer-motion';
import { skillIconMap } from '@/lib/skillIcons';
import type { Skill } from '@/data/skills';
import { EASE, staggerContainer } from '@/lib/animations';

interface SkillIconGridProps {
  skills: Skill[];
}

export function SkillIconGrid({ skills }: SkillIconGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="flex flex-wrap gap-3"
    >
      {skills.map((skill, i) => {
        const def = skillIconMap[skill.name];
        const Icon = def?.icon;
        const color = def?.color ?? 'currentColor';

        return (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, ease: EASE, delay: i * 0.04 },
              },
            }}
          >
            <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all hover:-translate-y-0.5 w-[90px] h-[90px]">
              {Icon ? (
                <Icon
                  size={26}
                  style={{ color: color === 'currentColor' ? undefined : color }}
                  className={color === 'currentColor' ? 'text-neutral-700 dark:text-neutral-300' : ''}
                />
              ) : (
                <span className="text-lg font-bold text-neutral-400 leading-none">
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 text-center leading-tight font-medium w-full px-1 truncate" title={skill.name}>
                {skill.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
