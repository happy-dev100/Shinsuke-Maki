import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { personal } from '@/data/personal';


export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const name = personal.name[locale as 'en' | 'ja'];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              {name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {t('built_with')}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {([
              ['/about', tNav('about')],
              ['/skills', tNav('skills')],
              ['/projects', tNav('projects')],
              ['/blog', tNav('blog')],
              ['/contact', tNav('contact')],
            ] as [string, string][]).map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>

        <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            © {new Date().getFullYear()} {name}. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
