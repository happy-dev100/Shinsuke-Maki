import { Download } from 'lucide-react';
import { personal } from '@/data/personal';
import { AnimateIn } from '@/components/ui/AnimateIn';

interface ResumeSectionProps {
  title: string;
  subtitle: string;
  downloadLabel: string;
  formatLabel: string;
}

export function ResumeSection({
  title,
  subtitle,
  downloadLabel,
  formatLabel,
}: ResumeSectionProps) {
  return (
    <section className="py-16">
      <AnimateIn>
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-neutral-950 px-6 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_40%)]" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80 mb-2">
                {formatLabel}
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {title}
              </h2>
              <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            </div>
            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-400 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-cyan-300 transition-colors shrink-0"
            >
              <Download size={16} />
              {downloadLabel}
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
