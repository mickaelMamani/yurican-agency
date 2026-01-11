import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { differentiators } from '@/lib/constants'

export function DifferentiatorsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Pourquoi Yurican ?" className="mb-4" />
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto italic">
          "Les agences RevOps déploient des CRM. Nous y intégrons l'intelligence data France."
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((diff, i) => (
            <Card key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{diff.icon}</span>
                  <CardTitle className="font-display text-xl font-bold text-primary">
                    {diff.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-700 font-medium mb-4">{diff.desc}</p>
                <ul className="space-y-2">
                  {diff.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="text-primary-light">→</span> {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
