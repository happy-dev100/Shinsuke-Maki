import { useTranslations } from 'next-intl';
import { skillCategories } from '@/data/skills';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SkillBars } from '@/components/sections/SkillBars';

export default function SkillsPage() {
  const t = useTranslations('skills');

  const categoryLabels: Record<string, string> = {
    frontend: t('frontend'),
    backend: t('backend'),
    database: t('database'),
    cloud_devops: t('cloud_devops'),
    tools: t('tools'),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />
      <SkillBars
        categories={skillCategories}
        categoryLabels={categoryLabels}
        yearsLabel={t('years_exp')}
      />
    </div>
  );
}
