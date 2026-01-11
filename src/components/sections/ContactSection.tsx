import { InlineWidget } from 'react-calendly'
import { Mail, MapPin, Linkedin, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: import.meta.env.VITE_CONTACT_EMAIL || 'contact@yurican.fr',
    href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'contact@yurican.fr'}`,
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Paris, France',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Suivez-nous',
    href: 'https://linkedin.com/company/yurican',
  },
]

const reassurances = [
  'Audit de 30 min offert',
  'Sans engagement',
  'Experts data France',
]

export function ContactSection() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/yurican'

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact info */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Réservez un créneau de 30 minutes avec notre équipe pour discuter de vos enjeux RevOps
              et découvrir comment nous pouvons vous aider.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-primary hover:text-primary-light transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-slate-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance badges */}
            <div className="space-y-3">
              {reassurances.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Calendly widget */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <InlineWidget
              url={calendlyUrl}
              styles={{
                height: '700px',
                minWidth: '320px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
