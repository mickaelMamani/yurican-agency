import { SectionTitle } from '@/components/common/SectionTitle'
import { TeamMemberCard } from '@/components/common/TeamMemberCard'
import { team } from '@/lib/constants'

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="4 experts. 50+ ans d'expérience cumulée."
          subtitle="Une équipe qui a fait ses preuves chez les leaders de la data B2B française"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              background={member.background}
              skills={member.skills}
              initials={member.initials}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
