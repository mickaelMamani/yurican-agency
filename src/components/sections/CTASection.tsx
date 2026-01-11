import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendlyModal } from '@/components/common/CalendlyModal'

export function CTASection() {
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-24 px-6 text-center bg-gradient-storm">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre RevOps ?
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            30 minutes pour comprendre vos enjeux et voir comment on peut accélérer votre
            croissance.
          </p>

          <Button
            onClick={() => setCalendlyOpen(true)}
            className="px-10 py-6 bg-white text-primary rounded-lg font-display font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
          >
            Réserver mon audit gratuit
          </Button>

          <div className="flex justify-center gap-8 mt-8 text-sm text-blue-200/70">
            <span>✓ Gratuit</span>
            <span>✓ 30 min</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </>
  )
}
