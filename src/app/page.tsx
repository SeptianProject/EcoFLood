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
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-surface-primary text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-surface-primary/90 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  )
}

export default Page 