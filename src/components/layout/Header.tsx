import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { MobileNav } from './MobileNav'
import { CalendlyModal } from '@/components/common/CalendlyModal'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const scrolled = useScrollPosition(100)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  // On non-home pages, always show solid header
  const showSolidHeader = scrolled || !isHomePage

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          showSolidHeader ? 'bg-white shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo variant={showSolidHeader ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              'hidden md:flex items-center gap-8',
              showSolidHeader ? 'text-gray-700' : 'text-white/90'
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'hover:opacity-80 transition-opacity font-medium',
                  location.pathname === item.href && 'text-primary font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className={cn(
                'hidden md:inline-flex font-display font-semibold transition-all',
                showSolidHeader
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
              className={cn('md:hidden', showSolidHeader ? 'text-gray-700' : 'text-white')}
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
