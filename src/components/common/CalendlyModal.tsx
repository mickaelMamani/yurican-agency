import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { InlineWidget } from 'react-calendly'

interface CalendlyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/yurican'

export function CalendlyModal({ open, onOpenChange }: CalendlyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-display text-2xl text-primary">
            Réserver votre audit gratuit
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <InlineWidget
            url={CALENDLY_URL}
            styles={{
              height: 'calc(80vh - 80px)',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
