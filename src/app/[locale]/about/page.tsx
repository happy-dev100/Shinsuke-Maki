import { useTranslations, useLocale } from 'next-intl';
import { MapPin, BriefcaseBusiness, Activity } from 'lucide-react';
import { personal } from '@/data/personal';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { AnimateList, AnimateItem } from '@/components/ui/AnimateList';
import { fadeLeft } from '@/lib/animations';
import { HeroShapeClient } from '@/components/sections/HeroShapeClient';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale() as 'en' | 'ja';

  const values = [
    { title: t('value_quality_title'), desc: t('value_quality_desc') },
    { title: t('value_reliability_title'), desc: t('value_reliability_desc') },
    { title: t('value_simplicity_title'), desc: t('value_simplicity_desc') },
    { title: t('value_learning_title'), desc: t('value_learning_desc') },
  ];

  const stats = [
    {
      icon: <BriefcaseBusiness size={16} />,
      label: t('experience_label'),
      value: t('experience_years'),
    },
    {
      icon: <MapPin size={16} />,
      label: t('location_label'),
      value: personal.location[locale],
    },
    {
      icon: <Activity size={16} />,
      label: t('availability_label'),
      value: t('availability'),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <AnimateIn>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t('intro')}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('story_title')}
            </h2>
            <div className="space-y-4">
              {t('story')
                .split('\n\n')
                .map((para, i) => (
                  <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {para}
                  </p>
                ))}
            </div>
          </AnimateIn>

          <div>
            <AnimateIn delay={0.1}>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                {t('values_title')}
              </h2>
            </AnimateIn>
            <AnimateList className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <AnimateItem key={v.title}>
                  <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl h-full hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </AnimateItem>
              ))}
            </AnimateList>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* 3D Shape */}
          <AnimateIn variants={fadeLeft} delay={0.1}>
            <HeroShapeClient />
          </AnimateIn>

          <AnimateIn variants={fadeLeft} delay={0.2}>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-1">
                    {s.icon}
                    <span className="uppercase tracking-wider">{s.label}</span>
                  </div>
                  <p className="text-neutral-900 dark:text-neutral-100 font-medium">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>

        </aside>
      </div>
    </div>
  );
}
