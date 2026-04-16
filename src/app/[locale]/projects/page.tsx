import { useTranslations, useLocale } from 'next-intl';
import { projects } from '@/data/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { AnimateList, AnimateItem } from '@/components/ui/AnimateList';

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'en' | 'ja';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />

      <AnimateList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {projects.map((project, i) => (
          <AnimateItem key={project.slug} className="h-full">
            <ProjectCard
              project={project}
              locale={locale}
              index={i}
              visitLabel={t('visit')}
              featuredLabel={t('featured')}
            />
          </AnimateItem>
        ))}
      </AnimateList>
    </div>
  );
}
