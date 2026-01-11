import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { metrics } from '@/lib/constants'

export function MetricsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-storm">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <AnimatedCounter
              key={i}
              end={metric.value}
              suffix={metric.suffix}
              prefix={metric.suffix === '%' ? '+' : ''}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
