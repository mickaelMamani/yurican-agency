import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Header, Footer } from '@/components/layout'
import { ContactSection } from '@/components/sections'

export default function ContactPage() {
  return (
    <div className="min-h-screen font-body">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 px-6 bg-gradient-subtle">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Contact</span>
            </nav>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
