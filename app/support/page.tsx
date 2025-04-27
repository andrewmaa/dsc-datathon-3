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
      
      {/* support Section - translated from HTML */}
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
                    If you experience any issues, please reach out to us on <a href="https://discord.gg/zxxCatRvBt" className="underline underline-offset-2 decoration-1 hover:decoration-2">Discord</a> or <a href="mailto:datascienceclubnyu@gmail.com" className="underline underline-offset-2 decoration-1 hover:decoration-2"> our email</a> and we&apos;ll do our best to help.
                    Remember that all participants are required to adhere to {' '}
                    <a 
                      href="/agreement" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-1 hover:decoration-2" // Basic link styling
                    >
                      Corner&apos;s Data Usage Agreement
                    </a>.
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
                    question: "What is a Datathon?",
                    answer: `<p>Similar to hackathons, a datathon is an event where participants gather to solve practical problems through the application of data science tools and techniques, by working together in teams to generate insights and potential solutions.</p>`
                  },
                  {
                    question: "Who can participate?",
                    answer: `<p>Absolutely anyone can participate regardless of skill level! You must be enrolled in an NYU undergraduate program to participate.</p>`
                  },
                  {
                    question: "When is the event? Do I need to stay the entire time?",
                    answer: `<p>The datathon will begin 5:00 PM April 25th and end 6:00 PM April 26th. You are NOT required to be coding for the entire duration - we HIGHLY recommend getting some rest before recording your presentations!</p>`
                  },
                  {
                    question: "Where is the Datathon?",
                    answer: `<p>The event will take place at NYU Silver Center for Arts and Sciences, Room 207. You'll have access to this space throughout the event.</p>`
                  },
                  {
                    question: "Which challenge do I choose?",
                    answer: `<p>There will be different challenge tracks you can choose from. We recommend selecting a track that aligns with your skills and interests. Detailed information about each track will be available at the start of the event.</p>`
                  },
                  {
                    question: "I'm getting stuck... what do I do?", 
                    answer: `<p>Check out the resources section below for more help. We'll also have mentors and support available throughout the event to help you with any difficulties you face while tackling the challenges. Don't hesitate to ask!</p>`
                  },
                  {
                    question: "How do I register for the event?",
                    answer: `<p>Fill out the form <a href="/register" class="underline underline-offset-2 decoration-1 hover:decoration-2">here</a>. All participants must be enrolled in a undergraduate undergraduate undergraduate degree program at NYU and adhere to the <a href="/code-of-conduct" class="underline underline-offset-2 decoration-1 hover:decoration-2">code of conduct</a>.</p>`
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
                  Resources
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <Accordion type="multiple" className="space-y-0 relative before:absolute before:inset-x-0 before:top-0">
                {([
                  {
                    question: "Intro to ML Workshop Notebook",
                    answer: `<p>The link to this resource is located <a href="https://colab.research.google.com/drive/1lPrcDFi5VIoYW798oxoCpSZCodEB4LCu" target="_blank" class="underline underline-offset-2 decoration-1 hover:decoration-2">here</a>.</p>`
                  },
                  {
                    question: "Pre-Processing Workshop Github Repository",
                    answer: `<p>The link to this resource is located <a href="https://github.com/buzgalbraith/data-processing-workshop/tree/main" target="_blank" class="underline underline-offset-2 decoration-1 hover:decoration-2">here</a>.</p>`
                  },
                  {
                    question: "Will there be technical support during the event?",
                    answer: `<p>Yes, we will have graduate students present from 12-6pm on April 26th in Bobst LL138 if anyone needs help with their solution. If you have any questions or issues, you can also reach out to us on Discord.</p>`
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
                  Spaces and Location Information
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <h3 className="font-['SuisseIntl'] text-xl mb-4">Kickoff Event</h3>
                  <div className="space-y-2">
                    <p className="font-['SuisseIntl'] text-white/90"><span className="font-bold">Location:</span> Silver 207</p>
                    <p className="font-['SuisseIntl'] text-white/90"><span className="font-bold">Time:</span> 5pm (room is available for use until 8pm)</p>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <h3 className="font-['SuisseIntl'] text-xl mb-4">Study Spaces</h3>
                  <div className="space-y-2">
                    <p className="font-['SuisseIntl'] text-white/90"><span className="font-bold">Locations:</span> Bobst LL112, LL113, LL114, LL138</p>
                    <p className="font-['SuisseIntl'] text-white/90"><span className="font-bold">Availability:</span></p>
                    <ul className="font-['SuisseIntl'] text-white/90 list-disc pl-5">
                      <li>Friday, April 25: 5-11:30pm</li>
                      <li>Saturday, April 26: 6am-11:30pm</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <h3 className="font-['SuisseIntl'] text-xl mb-4">Designated Locations</h3>
                  <div className="space-y-2">
                    <p className="font-['SuisseIntl'] text-white/90">Day 1: Silver 207</p>
                    <p className="font-['SuisseIntl'] text-white/90">Day 2: Bobst LL138</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 