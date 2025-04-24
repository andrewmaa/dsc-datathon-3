'use client'

import Link from "next/link"
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

import Header from "./components/Header"

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
          <div className="flex items-center w-full min-h-[300px] sm:min-h-[400px] sm:h-auto sm:w-[352px] lg:w-[440px] md:min-h-[584px] lg:min-h-[604px] bg-[#000000]/30 text-white backdrop-blur-[80px] rounded-[32px] sm:rounded-[48px] lg:rounded-[100px]">
            <div className="block w-full h-full px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8 z-10 sm:flex sm:justify-start">
              <div className="pointer-events-auto">
                <AnimatedSection delay={0.2}>
                  <h1 className="font-['Editorial_Old'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-4 sm:mb-6 md:mb-8">
                    Find answers from 
                    <span className="italic"> raw data.</span>
                  </h1>
                </AnimatedSection>

                <div className="font-['SuisseIntl'] text-sm md:text-base text-white [font-feature-settings:'dlig'_1] space-y-4 sm:space-y-6 md:space-y-8">
                  <AnimatedSection delay={0.4}>
                    <p className="text-sm sm:text-base">Take unstructured data and turn it into actionable insights. Our datathon challenges you to build solutions that matter, using cutting-edge tools and techniques in data science and machine learning.</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.6}>
                    <p className="text-sm sm:text-base">Join us in creating technology that makes a real difference.</p>
                  </AnimatedSection>
                </div>

                {/* Register button */}
                <AnimatedSection delay={0.8} className="mt-4 sm:mt-6 md:mt-8">
                  <Link
                    href="/register"
                    className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px]"
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
      <section className="relative z-8" style={{ backgroundColor: '#1099e3' }}>
        <div className="h-full flex flex-col lg:flex-row">
          <div className="basis-4/7 h-full group">
            <div className="inline-flex w-full h-full relative p-4 sm:p-6 md:p-8 rounded-[32px] sm:rounded-[48px] lg:rounded-[100px] aspect-[164/151] sm:aspect-[36/25] lg:aspect-[61/48]">
              <div className="block relative z-8 w-full h-full rounded-[32px] sm:rounded-[48px] lg:rounded-[100px] overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="flex flex-col justify-center items-center h-full p-4 sm:p-6 text-white mb-4 sm:mb-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <AnimatedSection delay={0.2}>
                      <h3 className="font-['SuisseIntl'] font-book text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-1 sm:mb-2 md:mb-3 flex items-center justify-center">
                        <span className="flex items-center">dsc</span>
                        <span className="text-white text-4xl font-[300] mx-3 flex items-center">×</span>
                        <Image 
                          src="https://andrewma.b-cdn.net/images/dsc/corner-logo.png" 
                          alt="Logo" 
                          width={100} 
                          height={100} 
                          className="flex items-center"
                          unoptimized
                        />
                        <span className="text-white text-4xl font-[300] mx-3 flex items-center">×</span>
                        <span className="flex items-center">bac</span>
                      </h3>
                      <h3 className="font-['Editorial_Old'] italic text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-4 sm:mb-6 md:mb-8">
                        Datathon
                      </h3>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                      <div  className="font-system-ui leading-tighter font-semibold tracking-[-0.06em] text-lg md:text-xl space-y-2">
                        <p>April 25 @ 5:00 PM - April 26 @ 6:00 PM</p>
                        <p>NYU Silver Center for Arts and Sciences, Room 207</p>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center h-full pt-4 pb-8 sm:pt-6 sm:pb-10 md:pb-16 lg:py-10">
            <div className="px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex flex-col md:grid lg:flex lg:flex-col grid-cols-2">
                  <h2 className="font-['Editorial_Old'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-4 sm:mb-6 md:mb-8 mt-8">
                    Transform data into <span className="italic">insights</span>.
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10">
                    <div className="font-['SuisseIntl'] text-sm md:text-base text-white lg:text-left">
                      <p>Take unstructured data and turn it into actionable insights. Our datathon challenges you to build solutions that matter, using cutting-edge tools and techniques in data science and machine learning.</p>
                      <p className="mt-4">Join us in creating technology that makes a real difference.</p>
                    </div>
                    <div className="lg:text-left">
                      <button
                        className="scale-[1.01] cursor-pointer inline-block uppercase font-mono text-sm/none outline-none group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
                        <Link href="/schedule"className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px]">
                        <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-black disabled:text-black-50">
                          <span className="m-center-text !leading-none">View the Schedule</span>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                          </svg>
                        </div>
                        </Link>
                      </button>
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
        className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20" 
        style={{ backgroundColor: '#F7F5F2' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Content on the left */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex md:grid lg:flex flex-col grid-cols-2">
                  <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-black tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                    More than just <span className="italic">data analysis.</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-10">
                    <div className="font-['SuisseIntl'] text-sm md:text-base text-black">
                      <p>Transform your data analysis with our comprehensive toolkit. Build models that not only process data but understand context, create visualizations that tell stories, and develop solutions that scale. <br /><br />Add machine learning for insights that would make a data scientist proud.</p>
                    </div>
                    
                    <div>
                      <button
                        className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-black hover:bg-black/80 disabled:bg-black/20 disabled:border-black/20" />
                        <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-white disabled:text-black-40">
                          <span className="m-center-text !leading-none">Learn More</span>

                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                            <path d="M12.6667 7.33333H12V5.33333C12 2.9401 10.0599 1 7.66667 1C5.27343 1 3.33333 2.9401 3.33333 5.33333V7.33333H2.66667C2.29848 7.33333 2 7.63181 2 8V13.3333C2 13.7015 2.29848 14 2.66667 14H12.6667C13.0349 14 13.3333 13.7015 13.3333 13.3333V8C13.3333 7.63181 13.0349 7.33333 12.6667 7.33333ZM4.66667 5.33333C4.66667 3.49238 6.15871 2 8 2C9.84129 2 11.3333 3.49238 11.3333 5.33333V7.33333H4.66667V5.33333Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Track grid on the right */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.4}>
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                  {[ // Sample Tracks Data
                    {
                      title: "Track 1: Easy",
                      description: "Recommended for individuals with beginner Python/DS experience.<br /> <br />Taken 0-2 DS/Python classes."
                    },
                    {
                      title: "Track 2: Hard", 
                      description: "Recommended for individuals with intermediate to advanced Python/DS experience.<br /> <br />Taken 3-5 DS/Python classes."
                    }
                  ].map((track, index) => (
                    <motion.div 
                      key={index} 
                      className="p-6 sm:p-8 rounded-xl backdrop-blur-sm h-full flex flex-col bg-white/50 hover:bg-black/5 transition-colors duration-300 will-change-[background-color,color]"
                      initial={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#000000" }}
                      whileHover={{ backgroundColor: "#000000", color: "#FFFFFF" }} 
                      transition={{ duration: 0.08, ease: "easeOut" }} 
                    >
                      <h3 className="font-system-ui font-semibold tracking-[-0.06em] text-2xl sm:text-2xl mb-3">{track.title}</h3> 
                      <p className="font-mono text-base flex-grow" dangerouslySetInnerHTML={{ __html: track.description }}></p> 
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      {/* Corner Section */}
      <section className="relative z-10" style={{ backgroundColor: '#90a2fc' }}>
        <div className="h-full flex flex-col lg:flex-row">
          <div className="basis-1/2 h-full group lg:order-first">
            <div className="inline-flex w-full h-full relative p-4 sm:p-6 rounded-[60px] sm:rounded-[88px] lg:rounded-[120px]">
              <Image 
                src="https://andrewma.b-cdn.net/images/dsc/corner-1.png" 
                alt="Corner app interface" 
                className="object-contain w-full h-full rounded-[60px] sm:rounded-[88px] lg:rounded-[120px] z-10 block p-4 sm:p-6 lg:p-8"
                width={400}
                height={300}
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center h-full pt-3 pb-14 md:pb-20 lg:py-14 lg:order-last">
            <div className="px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex md:grid lg:flex flex-col grid-cols-2">
                  <h2 className="font-system-ui font-semibold text-4xl md:text-5xl lg:text-6xl font-[200] leading-tighter text-black tracking-[-0.06em] [font-feature-settings:'dlig'_1] mb-8">
                    Sponsored by <br /> <span className="italic font-system-ui">corner</span>, a new way to explore the world.
                  </h2>
                  <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-10">
                    <div className="font-['SuisseIntl'] text-sm md:text-base text-black">
                      <p>corner is built on a simple truth: 1 rec from a
trusted friend is worth 1,000 reviews from
strangers. every spot on our map is personally
added by someone who loved it enough to share
- no algorithms randomly pulling in places, just
real people marking their favorite corners of the
world.
<br /><br />
our curated map shows you places your friends
have been to and vibe-checked, so you know
exactly what you&apos;re getting into before you make
those weekend plans. scroll through unfiltered
and (sometimes) unhinged reviews for info you
won&apos;t find on other maps.</p>
                    </div>
                    
                    <div>
                      <Link
                        href="https://corner.inc"
                        target="_blank"
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
      <section 
        id="tracks-section"
        className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20" 
        style={{ backgroundColor: '#47edc6' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Content on the left */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="lg:max-w-sm flex md:grid lg:flex flex-col grid-cols-2">
                  <h2 className={`${poppins.className} font-semibold text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight text-black tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8`}>
                    In partnership with the <span className="italic">Stern Business Analytics Club.</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-10">
                    <div className="font-['SuisseIntl'] text-sm md:text-base text-black">
                      <p>The Stern Business Analytics Club is Stern&apos;s only data science club focused on providing resources and support for students interested in applying data analysis to business solutions in their chosen industry.</p>
                    </div>
                    
                    <div>
                      <Link
                        href="https://www.sternbac.org/"
                        target="_blank"
                        className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green"
                      >
                        <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-black hover:bg-black/80" />
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
            
            {/* Image on the right */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.4}>
                <div className="relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-[32px] sm:rounded-[48px] lg:rounded-[100px]">
                  <Image 
                    src="https://andrewma.b-cdn.net/images/dsc/stern-bac.avif" 
                    alt="Stern Business Analytics Club Logo" 
                    className="object-cover object-[75%_50%] w-full h-full"
                    width={1600}
                    height={900}
                    quality={100}
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
{/* Upcoming Events Section */}
<section className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32" style={{ backgroundColor: '#191919' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight text-white tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-6 text-center">
                Upcoming <span className="italic">Events</span>
              </h2>
              <p className="font-['SuisseIntl'] text-white/70 text-center max-w-2xl mx-auto">
                Join us for an exciting weekend of data science and innovation. Here&apos;s what to expect.
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20" />
            
            <div className="space-y-16">
              {[
                {
                  date: "Thursday, April 17",
                  time: "5:00 PM - 6:00 PM",
                  title: "Datathon Social & Kickoff",
                  location: "Leslie e-lab",
                  description: "Learn more about this year's event and find potential groupmates.",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Datathon+Social+%26+Kickoff&dates=20250417T170000/20250417T180000&location=Leslie+e-lab&details=Learn+more+about+this+year%27s+event+and+find+potential+groupmates."
                },
                {
                  date: "Monday, April 21",
                  time: "5:00 PM - 7:00 PM",
                  title: "Pre-Processing Workshop",
                  location: "5 Washington Place, Room 101",
                  description: "Learn essential data preprocessing techniques including data cleaning, feature engineering, and exploratory data analysis to prepare for the datathon.",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Pre-Processing+Workshop&dates=20250421T170000/20250421T190000&location=5+Washington+Place%2C+Room+101&details=Learn+essential+data+preprocessing+techniques+including+data+cleaning%2C+feature+engineering%2C+and+exploratory+data+analysis+to+prepare+for+the+datathon."
                },
                {
                  date: "Tuesday, April 22",
                  time: "5:00 PM - 7:00 PM",
                  title: "Machine Learning Workshop",
                  location: "Silver Center, Room 411",
                  description: "Deep dive into machine learning algorithms, model selection, and evaluation metrics that will help you build effective solutions during the datathon.",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Machine+Learning+Workshop&dates=20250422T170000/20250422T190000&location=Silver+Center%2C+Room+411&details=Deep+dive+into+machine+learning+algorithms%2C+model+selection%2C+and+evaluation+metrics+that+will+help+you+build+effective+solutions+during+the+datathon."
                },
                {
                  date: "Wednesday, April 23",
                  time: "5:00 PM - 6:00 PM",
                  title: "Fireside Chat with Corner",
                  location: "KMEC, Room 2-65",
                  description: "Join an intimate discussion with Corner employees about their app, real-world applications of data science in fintech and career opportunities in the field.",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Fireside+Chat+with+Corner&dates=20250423T163000/20250423T181500&location=KMEC%2C+Room+2-65&details=Join+an+intimate+discussion+with+Corner+employees+about+their+app%2C+real-world+applications+of+data+science+in+fintech+and+career+opportunities+in+the+field."
                },
                {
                  date: "Friday, April 25",
                  time: "5:00 PM - 8:00 PM",
                  title: "Datathon Kickoff",
                  location: "Silver Center, Room 207",
                  description: "Get ready for an exciting weekend! Form your teams, receive the dataset and problem statement, and begin working on your solutions.",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Datathon+Kickoff&dates=20250425T170000/20250425T200000&location=Silver+Center%2C+Room+207&details=Get+ready+for+an+exciting+weekend%21+Form+your+teams%2C+receive+the+dataset+and+problem+statement%2C+and+begin+working+on+your+solutions."
                },
                {
                  date: "Saturday, April 26",
                  time: "6:00 PM",
                  title: "Dinner & Closing Remarks",
                  location: "TBA",
                  description: "TBA",
                  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Datathon%3A+Dinner+%26+Closing+Remarks&dates=20250426T180000/20250426T190000&location=TBA&details=TBA"
                }
              ].map((event, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`flex items-center justify-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2">
                      <div className={`p-6 rounded-xl backdrop-blur-sm ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/5'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-3 h-3 rounded-full bg-[#0acdf0]" />
                          <div>
                            <p className="font-['SuisseIntl'] text-sm text-white/70">{event.date}</p>
                            <p className="font-['SuisseIntl'] text-sm text-[#0acdf0]">{event.time}</p>
                          </div>
                        </div>
                        <h3 className="font-['SuisseIntl'] text-xl text-white mb-2">{event.title}</h3>
                        <p className="font-['SuisseIntl'] text-sm text-white/70 mb-2">
                          <span className="text-[#0acdf0]">Location: </span>
                          {event.location}
                        </p>
                        <p className="font-['SuisseIntl'] text-white/70 mb-4">{event.description}</p>
                        <a
                          href={event.calendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2C8.55228 2 9 2.44772 9 3V7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2Z" fill="currentColor"/>
                          </svg>
                          Add to Calendar
                        </a>
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
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
                    answer: `<p>Check out our <a href="/support" class="underline underline-offset-2 decoration-1 hover:decoration-2">support</a> page for more resources. We'll have mentors and resources available throughout the event to help you with any difficulties you face while tackling the challenges. Don't hesitate to ask for help!</p>`
                  },
                  {
                    question: "How do I register for the event?",
                    answer: `<p>Fill out the form <a href="/register" class="underline underline-offset-2 decoration-1 hover:decoration-2">here</a>. All participants must be enrolled in a undergraduate degree program at NYU and adhere to the <a href="/code-of-conduct" class="underline underline-offset-2 decoration-1 hover:decoration-2">code of conduct</a>.</p>`
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