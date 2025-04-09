'use client'

// import Link from "next/link" // Removed unused import
import Header from "../components/Header" // Adjusted path
import Footer from "../components/Footer" // Adjusted path
import { AnimatedSection } from "../components/AnimatedSection" // Adjusted path
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      {/* Support Section - translated from HTML */}
      <section 
        className="relative z-10 py-24 md:py-28 lg:py-40" // Increased vertical padding
        style={{ backgroundColor: '#191919', color: '#ffffff' }}
      >
        <div className="section-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container */}
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  <span className="flex items-center gap-4">
                    Support
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 8.75C12.6904 8.75 13.25 8.19036 13.25 7.5C13.25 6.80964 12.6904 6.25 12 6.25C11.3096 6.25 10.75 6.80964 10.75 7.5C10.75 8.19036 11.3096 8.75 12 8.75Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md"> {/* Added max-w-md like the HTML */}
              <AnimatedSection delay={0.2}> {/* Added delay */}
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4"> {/* Applied specific size/leading */}
                  <p>
                    It&apos;s easy to get lost in the data. 
                    If you experience any issues, please reach out to us and we&apos;ll do our best to help.
                    Remember that all participants are required to adhere to the guidelines set out in the {' '}
                    <a 
                      href="https://google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-1 hover:decoration-2" // Basic link styling
                    >
                      Code of Conduct
                    </a>.
                  </p>
                  <p>
                    If you have a feature request then head over{' '}
                    <a 
                      href="https://orchid.nolt.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400 transition-colors" // Basic link styling
                    >
                      here
                    </a>{' '}
                    and let us know what you think.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add other support content/sections here */}
      <section className="section-wrapper relative z-10 bg-black text-white">
        <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Frequently asked questions
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <Accordion type="multiple" className="space-y-0 relative before:absolute before:inset-x-0 before:top-0">
                {([
                  {
                    question: "How do I register for the event?",
                    answer: `<p>Registration is now open! To secure your spot, please visit our <a href="https://www.eventbrite.com/e/data-science-datathon-tickets-1000000000000000000" target="_blank" class="underline underline-offset-2 decoration-1 hover:decoration-2">Eventbrite page</a> and follow the instructions to complete your registration. No experience is required, and we welcome students from all backgrounds and disciplines.</p>`
                  },
                  {
                    question: "What is the event schedule?",
                    answer: `<p>The event will be held on April 25-26, 2025. The schedule will be posted on the event website closer to the event date.</p>`
                  }
                ] as const).map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="group relative" id={`faq-${index}`}>
                    <div className="absolute inset-x-0 top-0 border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                    <AccordionTrigger className="font-['SuisseIntl'] text-base sm:text-lg text-left hover:no-underline hover:opacity-100 opacity-60 pt-4 pb-4 cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base pb-8">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
        </div>
      </div>
      </section>
      <section className="section-wrapper relative z-10 bg-black text-white">
        <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Participation
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <Accordion type="multiple" className="space-y-0 relative before:absolute before:inset-x-0 before:top-0">
                {([
                  {
                    question: "How do I register for the event?",
                    answer: `<p>Registration is now open! To secure your spot, please visit our <a href="https://www.eventbrite.com/e/data-science-datathon-tickets-1000000000000000000" target="_blank" class="underline underline-offset-2 decoration-1 hover:decoration-2">Eventbrite page</a> and follow the instructions to complete your registration. No experience is required, and we welcome students from all backgrounds and disciplines.</p>`
                  },
                  {
                    question: "What is the event schedule?",
                    answer: `<p>The event will be held on April 25-26, 2025. The schedule will be posted on the event website closer to the event date.</p>`
                  }
                ] as const).map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="group relative" id={`faq-${index}`}>
                    <div className="absolute inset-x-0 top-0 border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                    <AccordionTrigger className="font-['SuisseIntl'] text-base sm:text-lg text-left hover:no-underline hover:opacity-100 opacity-60 pt-4 pb-4 cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base pb-8">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
        </div>
      </div>
      </section>
      <section className="section-wrapper relative z-10 bg-black text-white">
        <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Sponsors
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <Accordion type="multiple" className="space-y-0 relative before:absolute before:inset-x-0 before:top-0">
                {([
                  {
                    question: "How do I register for the event?",
                    answer: `<p>Registration is now open! To secure your spot, please visit our <a href="https://www.eventbrite.com/e/data-science-datathon-tickets-1000000000000000000" target="_blank" class="underline underline-offset-2 decoration-1 hover:decoration-2">Eventbrite page</a> and follow the instructions to complete your registration. No experience is required, and we welcome students from all backgrounds and disciplines.</p>`
                  },
                  {
                    question: "What is the event schedule?",
                    answer: `<p>The event will be held on April 25-26, 2025. The schedule will be posted on the event website closer to the event date.</p>`
                  }
                ] as const).map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="group relative" id={`faq-${index}`}>
                    <div className="absolute inset-x-0 top-0 border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                    <AccordionTrigger className="font-['SuisseIntl'] text-base sm:text-lg text-left hover:no-underline hover:opacity-100 opacity-60 pt-4 pb-4 cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base pb-8">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
        </div>
      </div>
      </section>
      <Footer />
    </main>
  )
} 