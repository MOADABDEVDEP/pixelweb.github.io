'use client'

import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import FeaturesSection from '@/components/FeaturesSection'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <main className="min-h-screen">
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
