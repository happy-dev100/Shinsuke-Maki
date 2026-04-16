import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title={t('page_title')} subtitle={t('subtitle')} />
      <ContactForm />
    </div>
  );
}
