import { SectionTitle } from '@/components/common/SectionTitle'
import { processSteps } from '@/lib/constants'

export function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Notre Méthodologie"
          subtitle="Une approche structurée pour des résultats rapides et mesurables"
          className="mb-16"
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white p-6 rounded-xl border border-slate-200 hover:border-primary-light hover:shadow-lg transition-all z-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-white font-display font-bold text-lg">
                    {step.step}
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
