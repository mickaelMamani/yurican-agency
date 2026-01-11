import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  PainPointsSection,
  ServicesSection,
  DifferentiatorsSection,
  MetricsSection,
  CaseStudiesSection,
  TeamSection,
  TestimonialsSection,
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
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
