import { useCounterAnimation } from '@/hooks/useCounterAnimation'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { count, ref } = useCounterAnimation(end, duration)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  )
}
