import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  PainPointsSection,
  ServicesSection,
  DifferentiatorsSection,
  MetricsSection,
  TeamSection,
  CTASection,
} from '@/components/sections'

export default function LandingPage() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <MetricsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
