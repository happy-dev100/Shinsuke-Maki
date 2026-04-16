import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { TechTag } from '@/components/ui/TechTag';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: 'projects' });
  const l = locale as 'en' | 'ja';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/projects"
        className="inline-block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-10"
      >
        {t('back_to_projects')}
      </Link>

      <div className="mb-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h1>
          <div className="flex items-center gap-3 mt-1 flex-shrink-0">
            {project.demo && project.demo !== '/' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <ExternalLink size={14} />
                {t('visit')}
              </a>
            )}
          </div>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
          {project.description[l]}
        </p>
      </div>

      {project.image && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
          {t('tech_stack')}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>

      <hr className="border-neutral-100 dark:border-neutral-900 mb-10" />

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            {t('overview')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.overview[l]}
          </p>
        </div>

        {project.duration && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('duration')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.duration[l]}
            </p>
          </div>
        )}

        {project.teamSize && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('team_size')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.teamSize[l]}
            </p>
          </div>
        )}

        {project.myRole && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('my_role')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.myRole[l]}
            </p>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            {t('challenges')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.challenges[l]}
          </p>
        </div>
      </div>
    </div>
  );
}
