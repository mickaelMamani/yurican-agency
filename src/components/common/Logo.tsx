import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ variant = 'dark', size = 'md', showText = true, className }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-8', text: 'text-lg' },
    md: { icon: 'w-8 h-10', text: 'text-xl' },
    lg: { icon: 'w-10 h-12', text: 'text-2xl' },
  }

  const gradientId = `logoGrad-${variant}`

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg viewBox="0 0 40 48" className={sizes[size].icon}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={variant === 'light' ? '#2F6AE8' : '#080092'} />
            <stop offset="100%" stopColor="#2F6AE8" />
          </linearGradient>
        </defs>
        <path d="M20 4 L8 20 Q20 28 20 40 Q20 28 32 20 Z" fill={`url(#${gradientId})`} />
        <ellipse
          cx="20"
          cy="24"
          rx="14"
          ry="5"
          fill="none"
          stroke="#2F6AE8"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            'font-display font-bold',
            sizes[size].text,
            variant === 'light' ? 'text-white' : 'text-gray-900'
          )}
        >
          Yurican
        </span>
      )}
    </div>
  )
}
