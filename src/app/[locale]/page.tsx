import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { personal } from '@/data/personal';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { getAllBlogPosts } from '@/lib/blog';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { AnimateList, AnimateItem } from '@/components/ui/AnimateList';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillIconGrid } from '@/components/sections/SkillIconGrid';
import { formatDate } from '@/lib/utils';
import { fadeIn } from '@/lib/animations';

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');
  const tProjects = useTranslations('projects');
  const locale = useLocale() as 'en' | 'ja';

  const name = personal.name[locale];
  const title = personal.title[locale];
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getAllBlogPosts(locale).slice(0, 3);
  const aiSkills = skillCategories.find((c) => c.key === 'ai')?.skills ?? [];
  const coreSkills = skillCategories
    .filter((c) => c.key !== 'ai')
    .flatMap((c) => c.skills)
    .sort((a, b) => b.level - a.level)
    .slice(0, 5);
  const topSkills = [...aiSkills, ...coreSkills];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection
        greeting={t('greeting')}
        name={name}
        title={title}
        tagline={t('hero_tagline')}
        ctaProjects={t('cta_projects')}
        ctaContact={t('cta_contact')}
      />

      <AnimateIn variants={fadeIn}>
        <hr className="border-neutral-100 dark:border-neutral-900" />
      </AnimateIn>

      {/* Featured Projects */}
      <section className="py-16">
        <AnimateIn className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {t('featured_projects')}
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
          >
            {t('view_all_projects')} <ArrowRight size={14} />
          </Link>
        </AnimateIn>

        <AnimateList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              index={i}
              visitLabel={tProjects('visit')}
              featuredLabel={tProjects('featured')}
            />
          ))}
        </AnimateList>
      </section>

      <AnimateIn variants={fadeIn}>
        <hr className="border-neutral-100 dark:border-neutral-900" />
      </AnimateIn>

      {/* Skills */}
      <section className="py-16">
        <AnimateIn className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {t('skills_section')}
          </h2>
          <Link
            href="/skills"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
          >
            {t('view_all_skills')} <ArrowRight size={14} />
          </Link>
        </AnimateIn>
        <SkillIconGrid skills={topSkills} />
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <>
          <AnimateIn variants={fadeIn}>
            <hr className="border-neutral-100 dark:border-neutral-900" />
          </AnimateIn>
          <section className="py-16">
            <AnimateIn className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t('recent_posts')}
              </h2>
              <Link
                href="/blog"
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
              >
                {t('view_all_posts')} <ArrowRight size={14} />
              </Link>
            </AnimateIn>
            <AnimateList className="divide-y divide-neutral-100 dark:divide-neutral-900">
              {recentPosts.map((post) => (
                <AnimateItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-start justify-between gap-4 py-5 hover:opacity-70 transition-opacity"
                  >
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1 group-hover:underline underline-offset-4">
                        {post.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {formatDate(post.date, locale)}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-neutral-400 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </AnimateItem>
              ))}
            </AnimateList>
          </section>
        </>
      )}
    </div>
  );
}
