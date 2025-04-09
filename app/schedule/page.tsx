'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'
import { useState } from 'react'

interface ScheduleItem {
  time: string
  title: string
  description: string
  location?: string
}

interface DaySchedule {
  day: string
  date: string
  events: ScheduleItem[]
}

const schedule: DaySchedule[] = [
  {
    day: 'Day 1',
    date: 'April 25, 2025',
    events: [
      {
        time: '9:00 AM',
        title: 'Registration & Breakfast',
        description: 'Check-in and enjoy some breakfast while meeting other participants.',
        location: 'Main Hall'
      },
      {
        time: '10:00 AM',
        title: 'Opening Ceremony',
        description: 'Welcome remarks and introduction to the datathon.',
        location: 'Main Hall'
      },
      {
        time: '10:30 AM',
        title: 'Team Formation',
        description: 'Find your team or join an existing one.',
        location: 'Main Hall'
      },
      {
        time: '11:00 AM',
        title: 'Hacking Begins',
        description: 'Start working on your projects with your team.',
        location: 'Various Rooms'
      },
      {
        time: '12:30 PM',
        title: 'Lunch',
        description: 'Take a break and enjoy some food.',
        location: 'Dining Area'
      },
      {
        time: '2:00 PM',
        title: 'Workshop: Data Analysis',
        description: 'Learn about data analysis techniques and tools.',
        location: 'Workshop Room A'
      },
      {
        time: '3:30 PM',
        title: 'Workshop: Machine Learning',
        description: 'Introduction to machine learning concepts.',
        location: 'Workshop Room B'
      },
      {
        time: '5:00 PM',
        title: 'Mentor Sessions',
        description: 'Get help and guidance from industry experts.',
        location: 'Mentor Area'
      },
      {
        time: '7:00 PM',
        title: 'Dinner',
        description: 'Refuel with dinner and network with other participants.',
        location: 'Dining Area'
      },
      {
        time: '9:00 PM',
        title: 'Late Night Snacks',
        description: 'Keep your energy up with some snacks.',
        location: 'Snack Area'
      },
      {
        time: '12:00 AM',
        title: 'Midnight Activity',
        description: 'Fun activity to keep everyone energized.',
        location: 'Main Hall'
      }
    ]
  },
  {
    day: 'Day 2',
    date: 'April 26, 2025',
    events: [
      {
        time: '2:00 AM',
        title: 'Quiet Hours Begin',
        description: 'Time to focus on your projects.',
        location: 'Various Rooms'
      },
      {
        time: '8:00 AM',
        title: 'Breakfast',
        description: 'Start the second day with breakfast.',
        location: 'Dining Area'
      },
      {
        time: '10:00 AM',
        title: 'Project Submissions Due',
        description: 'Finalize and submit your projects.',
        location: 'Submission Portal'
      },
      {
        time: '11:00 AM',
        title: 'Judging',
        description: 'Projects are evaluated by our panel of judges.',
        location: 'Judging Rooms'
      },
      {
        time: '1:00 PM',
        title: 'Lunch',
        description: 'Final meal together before the closing ceremony.',
        location: 'Dining Area'
      },
      {
        time: '2:00 PM',
        title: 'Closing Ceremony',
        description: 'Announcement of winners and closing remarks.',
        location: 'Main Hall'
      }
    ]
  }
]

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  Schedule
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Join us for an exciting weekend of hacking, learning, and networking. Here&apos;s what to expect during the event.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              {schedule.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-6 py-3 rounded-full font-['SuisseIntl'] text-sm transition-all duration-300 ${
                    activeDay === index
                      ? 'bg-white text-[#191919]'
                      : 'bg-transparent text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            {/* Schedule Content */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="font-['Editorial_Old'] text-2xl mb-8 [font-feature-settings:'dlig'_1]">
                  {schedule[activeDay].date}
                </div>
              </AnimatedSection>
              
              {schedule[activeDay].events.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-[#191919] rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />
                    <div className="relative p-6">
                      <div className="flex gap-6">
                        <div className="w-24 flex-shrink-0">
                          <div className="font-['SuisseIntl'] text-[#0acdf0] text-sm">
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-['Editorial_Old'] text-xl mb-2">
                            {item.title}
                          </div>
                          <div className="font-['SuisseIntl'] text-white/70 text-sm">
                            {item.description}
                          </div>
                          {item.location && (
                            <div className="font-['SuisseIntl'] text-white/50 text-xs mt-2">
                              {item.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 