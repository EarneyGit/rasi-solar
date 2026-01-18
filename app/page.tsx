import { HeroSection } from '@/components/HeroSection'
import { WhoWeServe } from '@/components/WhoWeServe'
import { OurSolutions } from '@/components/OurSolutions'
import { CaseStudies } from '@/components/CaseStudies'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhoWeServe />
      <OurSolutions />
      <CaseStudies />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
