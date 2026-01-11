import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { MobileNav } from './MobileNav'
import { CalendlyModal } from '@/components/common/CalendlyModal'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const scrolled = useScrollPosition(100)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo variant={scrolled ? 'dark' : 'light'} />

          {/* Desktop Navigation */}
          <div
            className={cn(
              'hidden md:flex items-center gap-8',
              scrolled ? 'text-gray-700' : 'text-white/90'
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:opacity-80 transition-opacity font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className={cn(
                'hidden md:inline-flex font-display font-semibold transition-all',
                scrolled
                  ? 'bg-gradient-cta text-white hover:opacity-90'
                  : 'bg-white text-primary hover:bg-slate-100'
              )}
            >
              Prendre RDV
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn('md:hidden', scrolled ? 'text-gray-700' : 'text-white')}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        onBookClick={() => {
          setMobileOpen(false)
          setCalendlyOpen(true)
        }}
      />

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </>
  )
}
