import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CalendlyModal } from '@/components/common/CalendlyModal'

export function HeroSection() {
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 relative overflow-hidden bg-gradient-storm"
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
            style={{
              background: 'radial-gradient(circle, #2F6AE8 0%, transparent 70%)',
              top: '10%',
              left: '10%',
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse"
            style={{
              background: 'radial-gradient(circle, #080092 0%, transparent 70%)',
              bottom: '20%',
              right: '15%',
              animationDelay: '1s',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Transformez vos données
            <br />
            en machine à revenus
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-1">
            L'agence RevOps technique qui maîtrise les données légales françaises et
            l'automatisation avancée. Nous transformons votre CRM en générateur de revenus.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up-delay-2">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className="px-8 py-6 bg-white text-primary rounded-lg font-display font-semibold text-lg shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
            >
              Réserver un audit gratuit
            </Button>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="px-8 py-6 border-2 border-white/50 text-white bg-transparent rounded-lg font-display font-medium hover:bg-white/10 hover:border-white transition-all"
            >
              Découvrir nos services →
            </Button>
          </div>

          {/* Reassurance badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200/70 animate-fade-in-up-delay-3">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Audit de 30 min offert
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Experts data France
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </>
  )
}
