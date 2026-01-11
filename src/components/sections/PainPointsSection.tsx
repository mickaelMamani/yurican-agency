import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { painPoints } from '@/lib/constants'

export function PainPointsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Ces problèmes vous parlent ?" className="mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <Card
              key={i}
              className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl hover:border-primary-light transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0 pb-4">
                <div className="text-4xl mb-4">{point.icon}</div>
                <CardTitle className="font-display text-xl font-bold text-primary">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600">{point.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
