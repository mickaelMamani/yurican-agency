import { SectionTitle } from '@/components/common/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { values } from '@/lib/constants'

export function ValuesSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Nos Valeurs"
          subtitle="Ce qui nous guide au quotidien dans chaque projet"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="bg-white border border-slate-200 hover:border-primary-light hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{value.icon}</span>
                  <CardTitle className="font-display text-xl text-primary">
                    {value.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
