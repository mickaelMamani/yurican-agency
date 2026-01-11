import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-bold mb-4',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-blue-100/80' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
