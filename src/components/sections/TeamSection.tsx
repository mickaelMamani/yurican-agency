import { SectionTitle } from '@/components/common/SectionTitle'
import { TeamMemberCard } from '@/components/common/TeamMemberCard'
import { team } from '@/lib/constants'

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="2 experts. 20+ ans d'expérience cumulée."
          subtitle="Une équipe qui a fait ses preuves chez les leaders de la data B2B française"
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {team.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              background={member.background}
              skills={member.skills}
              initials={member.initials}
              linkedin={member.linkedin}
              avatarUrl={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
