import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { Tag } from '@/components/ui/Tag';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: 'blog' });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/blog"
        className="inline-block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-10"
      >
        {t('back_to_blog')}
      </Link>

      <article>
        <header className="mb-12">
          <div className="text-sm text-neutral-400 dark:text-neutral-500 mb-4">
            {t('published')} {formatDate(post.date, locale)}
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </header>

        <hr className="border-neutral-100 dark:border-neutral-900 mb-12" />

        <div className="prose prose-neutral dark:prose-invert text-neutral-700 dark:text-neutral-300">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
