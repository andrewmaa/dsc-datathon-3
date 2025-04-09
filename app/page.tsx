'use client'

import Link from "next/link"
import Image from "next/image"
import Header from "./components/Header"
import CountdownTimer from "./components/CountdownTimer"
import Footer from "./components/Footer"
import SplineScene from "./components/SplineScene"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./components/AnimatedSection"

export default function Home() {
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true)
    }, 1500) // Delay hero content by 1.5 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen relative">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <SplineScene />
        
        {/* Content container */}
        <div className={`relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center pointer-events-none transition-opacity duration-1000 ${
          showHero ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center w-full min-h-[300px] sm:min-h-[400px] sm:h-auto sm:w-[352px] lg:w-[440px] md:min-h-[584px] lg:min-h-[604px] bg-[#353535]/30 text-white backdrop-blur-[80px] rounded-[32px] sm:rounded-[48px] lg:rounded-[100px]">
            <div className="block w-full h-full px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8 z-10 sm:flex sm:justify-start">
              <div className="pointer-events-auto">
                <AnimatedSection delay={0.2}>
                  <h1 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-6 sm:mb-8">
                    Find answers from 
                    <span className="italic"> raw data.</span>
                  </h1>
                </AnimatedSection>

                <div className="font-['Suisse_Intl'] text-sm md:text-base text-white [font-feature-settings:'dlig'_1] space-y-6 sm:space-y-8">
                  <AnimatedSection delay={0.4}>
                    <p>Take unstructured data and turn it into actionable insights. Our datathon challenges you to build solutions that matter, using cutting-edge tools and techniques in data science and machine learning.</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.6}>
                    <p>Join us in creating technology that makes a real difference.</p>
                  </AnimatedSection>
                </div>

                {/* Register button */}
                <AnimatedSection delay={0.8} className="mt-6 sm:mt-8">
                  <Link
                    href="#register"
                    className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
                    <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-black disabled:text-black-50">
                      <span className="m-center-text !leading-none">Register</span>
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative z-8" style={{ backgroundColor: '#408cc2' }}>
        <div className="h-full flex flex-col lg:flex-row">
          <div className="basis-4/7 h-full group">
            <div className="inline-flex w-full h-full relative p-8 sm:p-10 rounded-[40px] sm:rounded-[48px] lg:rounded-[100px] aspect-[164/151] sm:aspect-[36/25] lg:aspect-[61/48]">
              <div className="block relative z-8 w-full h-full rounded-[40px] sm:rounded-[48px] lg:rounded-[100px] overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="flex flex-col justify-center items-center h-full p-8 text-white">
                  <div className="text-center mb-8">
                    <AnimatedSection delay={0.2}>
                      <h3 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                        DSC@NYU <br /> Datathon
                      </h3>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                      <div className="font-['Suisse_Intl'] text-sm md:text-base space-y-2">
                        <p>April 25-26, 2025</p>
                        <p>9:00 AM - 5:00 PM</p>
                        <p>UCLA Anderson School of Management</p>
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  <AnimatedSection delay={0.6}>
                    <div className="text-center">
                      <CountdownTimer />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center h-full pt-3 pb-14 md:pb-20 lg:py-14">
            <div className="px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex flex-col md:grid lg:flex lg:flex-col grid-cols-2 lg:ml-auto">
                  <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-4 md:mb-8">
                    Transform data into <span className="italic">insights</span>.
                  </h2>
                  <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-10">
                    <div className="font-['Suisse_Intl'] text-sm md:text-base text-white lg:text-left">
                      <p>Take unstructured data and turn it into actionable insights. Our datathon challenges you to build solutions that matter, using cutting-edge tools and techniques in data science and machine learning.</p>
                      <p className="mt-4">Join us in creating technology that makes a real difference.</p>
                    </div>
                    <div className="lg:text-left">
                      <Link
                        href="#learn-more"
                        className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
                        <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-black disabled:text-black-50">
                          <span className="m-center-text !leading-none">Learn More</span>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Second Text with Asset Section */}
      <section 
        id="tracks-section"
        className="relative z-10" 
        style={{ backgroundColor: '#faefd9' }}
      >
        <div className="h-full flex flex-col lg:flex-row">
          <div className="basis-3/5 h-full group lg:order-last">
            <div className="inline-flex w-full h-full relative p-4 sm:p-6 rounded-[40px] sm:rounded-[48px] lg:rounded-[100px] aspect-[164/151] sm:aspect-[36/25] lg:aspect-[61/48]">
              <div className="block relative z-10 w-full h-full rounded-[40px] sm:rounded-[48px] lg:rounded-[100px] p-8 flex items-center justify-center">
                <AnimatedSection delay={0.4}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[ // Sample Tracks Data
                      {
                        title: "Track 1: Predictive Insights",
                        description: "Develop models to predict future trends based on historical data. Focus on time series analysis and forecasting techniques."
                      },
                      {
                        title: "Track 2: NLP for Social Good",
                        description: "Analyze text data to uncover insights related to social issues. Utilize sentiment analysis, topic modeling, and text classification."
                      },
                      {
                        title: "Track 3: Computer Vision Challenge",
                        description: "Build systems that can interpret and understand visual information from images or videos. Explore object detection, image segmentation, and recognition."
                      },
                       {
                        title: "Track 4: Open Challenge",
                        description: "Bring your own dataset and problem! Propose and tackle a unique data science challenge that excites you."
                      }
                    ].map((track, index) => (
                      <motion.div 
                        key={index} 
                        className="p-6 rounded-xl backdrop-blur-sm h-full flex flex-col"
                        initial={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#000000" }}
                        whileHover={{ backgroundColor: "#000000", color: "#FFFFFF" }} 
                        transition={{ duration: 0.3 }} 
                      >
                        <h3 className="font-semibold text-lg mb-2">{track.title}</h3> 
                        <p className="font-['Suisse_Intl'] text-sm flex-grow">{track.description}</p> 
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center h-full pt-3 pb-14 md:pb-20 lg:py-14 lg:order-first">
            <div className="px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex flex-col">
                  <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-black tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                    More than just <span className="italic">data analysis</span>.
                  </h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="font-['Suisse_Intl'] text-sm md:text-base text-black">
                      <p>Transform your data analysis with our comprehensive toolkit. Build models that not only process data but understand context, create visualizations that tell stories, and develop solutions that scale.</p>
                      <p className="mt-4">Add machine learning for insights that would make a data scientist proud.</p>
                    </div>
                    
                    <div>
                      <Link
                        href="#learn-more"
                        className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-black hover:bg-black/80 disabled:bg-black/20 disabled:border-black/20" />
                        <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-white disabled:text-black-40">
                          <span className="m-center-text !leading-none">Learn More</span>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative z-10" style={{ backgroundColor: '#faefd9' }}>
        <div className="h-full flex flex-col lg:flex-row">
          <div className="basis-3/5 h-full group lg:order-first">
            <div className="inline-flex w-full h-full relative p-4 sm:p-6 rounded-[40px] sm:rounded-[48px] lg:rounded-[100px]">
              <Image 
                src="/corner-1.webp" 
                alt="Corner app interface" 
                className="object-cover object-[75%_25%] w-full h-full rounded-[40px] sm:rounded-[48px] lg:rounded-[100px] z-10 block aspect-[164/151] sm:aspect-[36/25] lg:aspect-[61/48]"
                width={164}
                height={151}
                priority
              />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center h-full pt-3 pb-14 md:pb-20 lg:py-14 lg:order-last">
            <div className="px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex md:grid lg:flex flex-col grid-cols-2">
                  <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-black tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                    Sponsored by <br /> <span className="italic">corner</span>, a new way to explore the world.
                  </h2>
                  <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-10">
                    <div className="font-['Suisse_Intl'] text-sm md:text-base text-black">
                      <p>Corner is a social mapping app that combines personalized place discovery with social networking features. At its core, Corner provides each user with a personalized map of saved places, enriched by recommendations from friends and like-minded explorers.  <br /><br />The app&apos;s algorithm tailors your map to your interests and taste, guiding you to the places you&apos;ll actually want to go—without the distractions. Whether you&apos;re saving your hidden gems, uncovering new favorites, or making plans with friends, Corner puts your world on the map.</p>
                    </div>
                    
                    <div>
                      <Link
                        href="https://corner.inc"
                        className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-black hover:bg-black/80 disabled:bg-black/20 disabled:border-black/20" />
                        <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-white disabled:text-black-40">
                          <span className="m-center-text !leading-none">Learn More</span>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                    answer: `<p>The event will be held on April 25-26, 2024. The schedule will be posted on the event website closer to the event date.</p>`
                  }
                ] as const).map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="group relative" id={`faq-${index}`}>
                    <div className="absolute inset-x-0 top-0 border-t border-white/20 group-hover:border-white transition-colors duration-300" />
                    <AccordionTrigger className="font-['Suisse_Intl'] text-base sm:text-lg text-left hover:no-underline hover:opacity-100 opacity-60 pt-4 pb-4 cursor-pointer">
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