'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

interface Prize {
  title: string
  description: string
  items: string[]
  sponsor: string
}

interface PrizeCategory {
  category: string
  prizes: Prize[]
}

const prizes: PrizeCategory[] = [
  {
    category: 'Prizes',
    prizes: [
      {
        title: 'Challenge 1',
        description: 'Best Team Name & Slogan Contest',
        items: [
          'corner merch',
          '$30 giftcards for each member',
          'mentorship lunch and learn with corner team at corner office',
          '$35 giftcard and owala water bottle'
        ],
        sponsor: 'Corner & DSC'
      },
      {
        title: 'Challenge 2',
        description: 'Funniest Hallucination',
        items: [
          'corner merch',
          '$50 gift card/member to restaurant of choice',
          'mentorship lunch and learn with corner team at corner office',
          '$50 giftcard and echo dot'
        ],
        sponsor: 'Corner & DSC'
      }
    ]
  }
]

export default function PrizesPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  <span className="flex items-center gap-4">
                    Prizes
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Participate to win exciting prizes from Corner and DSC!
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {prizes.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-[#191919] rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />
                  <div className="relative p-6">
                    <div className="space-y-12">
                      {category.prizes.map((prize, prizeIndex) => (
                        <div key={prizeIndex}>
                          <div className="font-['Editorial_Old'] italic text-2xl mb-4 [font-feature-settings:'dlig'_1] text-[#0acdf0]">
                            {prize.title}
                          </div>
                          <div className="font-['Editorial_Old'] italic text-xl mb-4">
                            {prize.description}
                          </div>
                          <div className="space-y-8">
                            <div>
                              <div className="font-['SuisseIntl'] text-white/50 text-sm mb-2">From Corner:</div>
                              <ul className="list-disc pl-5 font-['SuisseIntl'] text-white/70 text-sm space-y-2">
                                {prize.items.slice(0, 3).map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="font-['SuisseIntl'] text-white/50 text-sm mb-2">From DSC:</div>
                              <ul className="list-disc pl-5 font-['SuisseIntl'] text-white/70 text-sm">
                                <li>{prize.items[3]}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
