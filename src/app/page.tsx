'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import {
  HeroSection,
  WhyItMattersSection,
  FeaturesSection,
  ProcessSection,
  FeaturesHighlightSection,
  CTASection
} from '@/components/home'

const Page = () => {
  return (
    <div className='bg-background'>
      <Header />

      <HeroSection />
      <WhyItMattersSection />
      <FeaturesSection />
      <ProcessSection />
      <FeaturesHighlightSection />
      <CTASection />

      <Footer />
    </div>
  )
}

export default Page 