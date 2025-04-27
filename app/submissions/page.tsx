'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

export default function SubmissionsPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  Submit Your Project
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                  Please submit your datathon solution here. This includes a Jupyter notebook, a report, and a 5 minute presentation. Corner will judge all submissions and we will announce the winners within 1-2 weeks of the event.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection>
            <div className="bg-[#f23a3a]/10 border border-[#f23a3a] p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-['Editorial_Old'] [font-feature-settings:'dlig'_1] mb-4">Submissions Closed</h3>
              <p className="font-['SuisseIntl'] text-[#f23a3a]">
                The submission period has ended. Thank you for participating in the datathon!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
} 