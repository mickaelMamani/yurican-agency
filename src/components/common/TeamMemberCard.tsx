import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  name: string
  role: string
  background: string
  skills: string[]
  initials: string
  linkedin: string
  avatarUrl?: string
  className?: string
}

export function TeamMemberCard({
  name,
  role,
  background,
  skills,
  initials,
  linkedin,
  avatarUrl,
  className,
}: TeamMemberCardProps) {
  return (
    <div className={cn('text-center group', className)}>
      <Avatar className="w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-gradient-cta text-white text-2xl font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-display text-xl font-bold text-primary">{name}</h3>
      <p className="text-primary-light font-medium mb-2">{role}</p>
      <p className="text-slate-600 text-sm mb-1">{background}</p>
      <p className="text-slate-500 text-xs mb-3">{skills.join(', ')}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary-light hover:text-primary transition-colors text-sm"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
    </div>
  )
}
