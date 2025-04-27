'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

export default function RegisterPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  <span className="flex items-center gap-4">
                    Register
                    <svg width="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4666 4.02416C12.7684 2.72241 14.8789 2.72241 16.1807 4.02416C17.4824 5.32591 17.4824 7.43646 16.1807 8.73821L15.2804 9.63846C15.2148 8.45312 14.7292 7.2867 13.8237 6.38118C12.9181 5.47567 11.7517 4.99008 10.5664 4.92442L11.4666 4.02416Z" fill="currentColor"/>
                      <path d="M12.9398 7.26507C13.9659 8.29124 14.2731 9.76416 13.8611 11.0578L9.69916 15.2197C9.39707 15.5218 9.05113 15.7541 8.68215 15.916C6.96946 16.8092 4.13163 17.4746 2.92652 17.7316C2.64713 17.7912 2.40143 17.5566 2.4513 17.2753C2.69291 15.9125 3.40861 12.4666 4.70785 10.8196C4.79249 10.7108 4.88482 10.606 4.98483 10.506L9.14709 6.34371C10.4407 5.93178 11.9136 6.2389 12.9398 7.26507Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Join us for an exciting datathon experience. Fill out the form below to register. <br /></p> 
                    <div className="bg-[#0acdf0]/10 border border-[#0acdf0] text-[#0acdf0] px-4 py-3 rounded-xl relative mb-4 " role="alert">
                  <strong className="font-semibold">Note:</strong>
                  <br />
                  <span className="block sm:inline">You must be enrolled in an NYU undergraduate program to participate.</span>
                </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

            <AnimatedSection>
            <div className="bg-[#f23a3a]/10 border border-[#f23a3a] p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-['Editorial_Old'] [font-feature-settings:'dlig'_1] mb-4">Registration Closed</h3>
              <p className="font-['SuisseIntl'] text-[#f23a3a]">
                We&apos;re sorry, but registration for this event has now closed. Thank you for your interest in participating. We hope to see you at our next event!
              </p>
              </div>
            </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
} 