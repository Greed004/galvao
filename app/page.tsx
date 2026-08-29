import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { AboutSection } from '@/components/about-section'
import { DifferentiatorsSection } from '@/components/differentiators-section'
import { ServicesSection } from '@/components/services-section'
import { CoverageSection } from '@/components/coverage-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { GallerySection } from '@/components/gallery-section'
import { SafetySection } from '@/components/safety-section'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import { QuoteSection } from '@/components/quote-section'
import { WhatsappSection } from '@/components/whatsapp-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <CoverageSection />
        <HowItWorksSection />
        <GallerySection />
        <SafetySection />
        <FaqSection />
        <CtaBand />
        <QuoteSection />
        <WhatsappSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
