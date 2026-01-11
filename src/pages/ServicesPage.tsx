import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Header, Footer } from '@/components/layout'
import { ServicesSection, ProcessSection, CTASection } from '@/components/sections'

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-body">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-subtle">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Services</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              De l'audit à l'automatisation, nous couvrons l'ensemble de votre chaîne de revenus
              avec une expertise technique unique en France.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
