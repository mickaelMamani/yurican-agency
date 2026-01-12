import { SectionTitle } from '@/components/common/SectionTitle'
import { ServiceCard } from '@/components/common/ServiceCard'
import { services } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Ce qu'on fait (vraiment bien)"
          subtitle="De l'audit à l'automatisation, nous couvrons l'ensemble de votre chaîne de revenus"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
