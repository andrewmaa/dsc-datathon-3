'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'
import Image from 'next/image'

interface Track {
  id: string
  title: string
  description: string
  image: string
  skills: string[]
  mentors: string[]
}

const tracks: Track[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Dive into the world of data analysis and visualization. Learn how to extract meaningful insights from complex datasets using modern tools and techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Tableau'],
    mentors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez']
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Explore the fundamentals of machine learning and artificial intelligence. Build predictive models and understand the mathematics behind modern AI systems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NumPy'],
    mentors: ['Dr. James Wilson', 'Prof. Emily Zhang']
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Learn how to build robust data pipelines and infrastructure. Master the art of data collection, processing, and storage at scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    skills: ['Apache Spark', 'Airflow', 'Kafka', 'SQL', 'AWS'],
    mentors: ['Dr. Robert Lee', 'Prof. Maria Garcia']
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Create compelling visual stories with data. Learn how to design effective visualizations that communicate complex information clearly and beautifully.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    skills: ['D3.js', 'Tableau', 'Power BI', 'Plotly', 'R Shiny'],
    mentors: ['Dr. Lisa Thompson', 'Prof. David Kim']
  }
]

export default function TracksPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  Tracks
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['Suisse_Intl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Choose your path and dive deep into a specific area of data science. Each track offers unique challenges and learning opportunities.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <AnimatedSection key={track.id} delay={index * 0.1}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-[#191919] rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />
                  <div className="relative p-6">
                    <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-['Editorial_Old'] text-2xl mb-4 [font-feature-settings:'dlig'_1]">
                      {track.title}
                    </h3>
                    <p className="font-['Suisse_Intl'] text-white/70 text-sm mb-6">
                      {track.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-['Suisse_Intl'] text-sm text-white/50 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {track.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-white/70"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-['Suisse_Intl'] text-sm text-white/50 mb-2">Mentors</h4>
                        <div className="flex flex-wrap gap-2">
                          {track.mentors.map((mentor) => (
                            <span
                              key={mentor}
                              className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/50"
                            >
                              {mentor}
                            </span>
                          ))}
                        </div>
                      </div>
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