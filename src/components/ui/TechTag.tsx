import { skillIconMap } from '@/lib/skillIcons';
import { cn } from '@/lib/utils';

interface TechTagProps {
  name: string;
  className?: string;
  showIcon?: boolean;
}

export function TechTag({ name, className, showIcon = true }: TechTagProps) {
  const def = skillIconMap[name];
  const Icon = def?.icon;
  const brandColor = def?.color !== 'currentColor' ? def?.color : undefined;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900',
        className
      )}
    >
      {showIcon && Icon && (
        <Icon
          size={11}
          style={brandColor ? { color: brandColor } : undefined}
          className={!brandColor ? 'text-neutral-500 dark:text-neutral-400' : ''}
        />
      )}
      {name}
    </span>
  );
}
