import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-light hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1',
        className
      )}
    >
      <CardHeader className="p-0 pb-4">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="font-display text-xl font-bold text-primary group-hover:text-primary-light transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-slate-600 text-sm mb-4">{description}</p>
      </CardContent>
    </Card>
  )
}
