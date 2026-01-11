import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBookClick: () => void
}

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Contact', href: '#contact' },
]

export function MobileNav({ open, onOpenChange, onBookClick }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Logo variant="dark" size="md" />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <Button
            onClick={onBookClick}
            className="w-full bg-gradient-cta text-white font-display font-semibold"
          >
            Réserver un audit gratuit
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
