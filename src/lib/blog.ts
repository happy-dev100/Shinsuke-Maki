import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir).filter((f) => {
    return fs.statSync(path.join(blogDir, f)).isDirectory();
  });
}

export function getBlogPost(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(blogDir, slug, `${locale}.mdx`);
  const fallbackPath = path.join(blogDir, slug, 'en.mdx');

  let fullPath = filePath;
  if (!fs.existsSync(fullPath)) {
    if (!fs.existsSync(fallbackPath)) return null;
    fullPath = fallbackPath;
  }

  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    content,
  };
}

export function getAllBlogPosts(locale: string): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug, locale))
    .filter((p): p is BlogPost => p !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
