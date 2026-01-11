import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { caseStudies } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function CaseStudiesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Ils ont transformé leur RevOps" className="mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <Card
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="bg-slate-50 p-6 border-b border-slate-100">
                <Badge variant="secondary" className="mb-2 w-fit">
                  {study.industry}
                </Badge>
                <CardTitle className="font-display text-lg font-bold text-primary">
                  {study.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 font-medium mb-4">{study.headline}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary-light hover:text-primary font-medium text-sm transition-colors"
                >
                  Lire le cas <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="font-display">
            Voir tous les cas clients
          </Button>
        </div>
      </div>
    </section>
  )
}
