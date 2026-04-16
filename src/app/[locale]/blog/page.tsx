import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Tag } from '@/components/ui/Tag';
import { AnimateList, AnimateItem } from '@/components/ui/AnimateList';
import { formatDate } from '@/lib/utils';

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale() as 'en' | 'ja';
  const posts = getAllBlogPosts(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />

      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">{t('no_posts')}</p>
      ) : (
        <AnimateList className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {posts.map((post) => (
            <AnimateItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-6 py-8 hover:opacity-70 transition-opacity"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                    <span>{formatDate(post.date, locale)}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:underline underline-offset-4">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-neutral-400 flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimateItem>
          ))}
        </AnimateList>
      )}
    </div>
  );
}
