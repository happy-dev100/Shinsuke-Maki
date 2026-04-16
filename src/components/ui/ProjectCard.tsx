'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ExternalLink } from 'lucide-react';
import { TechTag } from './TechTag';
import { fadeUp } from '@/lib/animations';
import type { Project } from '@/data/projects';

const PLACEHOLDERS = [
  'from-neutral-800 to-neutral-600',
  'from-neutral-700 to-neutral-500',
  'from-neutral-900 to-neutral-700',
  'from-neutral-600 to-neutral-400',
  'from-neutral-800 to-neutral-500',
];

interface ProjectCardProps {
  project: Project;
  locale: 'en' | 'ja';
  index?: number;
  visitLabel: string;
  featuredLabel: string;
}

export function ProjectCard({
  project,
  locale,
  index = 0,
  visitLabel,
  featuredLabel,
}: ProjectCardProps) {
  const gradient = PLACEHOLDERS[index % PLACEHOLDERS.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className="group flex flex-col h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-900 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-950"
    >
      {/* Image / Placeholder */}
      <Link href={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-end p-5`}>
            <span className="text-white/20 font-bold text-5xl leading-none select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs px-2.5 py-1 bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-neutral-100 rounded-full font-medium backdrop-blur-sm">
            {featuredLabel}
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 leading-snug"
          >
            {project.title}
          </Link>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            {project.demo && project.demo !== '/' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <ExternalLink size={12} />
                {visitLabel}
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
