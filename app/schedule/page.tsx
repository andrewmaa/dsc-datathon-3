'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'
import { useState } from 'react'
import Link from 'next/link'

interface ScheduleItem {
  time: string
  title: string
  description: string | React.ReactNode
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
        time: '4:45 PM',
        title: 'Datathon Kick-Off',
        description: 'Welcome to the DSC x Corner x BAC Datathon! Join us in Silver Room 207 at 5pm as we kick things off with introductions, the prompts, datasets, and prize packages!',
        location: 'Silver Center, Room 207'
      },
      {
        time: '6:00 PM',
        title: 'Datathon Officially Begins & Datasets are Released',
        description: (
          <>
            Available spaces are located {' '}
            <Link href="/support" className="text-[#0acdf0] hover:underline">
              here
            </Link>
            . Datasets are released {' '}
            <Link href="/tracks" className="text-[#0acdf0] hover:underline">
              here
            </Link>
            .
          </>
        ),
        location: 'Bobst Classrooms'
      },
      {
        time: '7:00 PM',
        title: 'Opening Dinner',
        description: 'Dinner is available in Silver 207! Come over for some delicious Thai food catered by Surross Thai Bistro.',
        location: 'Silver Center, Room 207'
      },
      {
        time: '8:00 PM',
        title: 'Best Team Name & Slogan Contest',
        description: 'As a team, please create a team name and slogan that would represent your team.  Reply in a thread under the respective Discord message with your "TEAM NAME: TEAM SLOGAN".',
        location: 'Virtual: Discord Server'
      },
      {
        time: '10:00 PM',
        title: 'Funniest Hallucination',
        description: 'Share the wildest, weirdest, or wackiest hallucination you\'ve seen during this Datathon. The more unhinged, the better. Bonus if it made you laugh out loud or question reality. Reply in a thread under the respective Discord message with your Team Name and a screenshot of the hallucination. ',
        location: 'Virtual: Discord Server'
      }
    ]
  },
  {
    day: 'Day 2',
    date: 'April 26, 2025',
    events: [
      {
        time: '10:00 AM',
        title: 'Datathon Scavenger Hunt',
        description: 'Want to get up and stretch your legs? Our spirit scavenger hunt is starting shortly. Head to Bobst LL138 as the starting point and for further instructions. Small prizes available – if you\'re quick enough!',
        location: 'Bobst LL138'
      },
      {
        time: '12:00 PM',
        title: 'Brunch',
        description: 'Feeling Hungry? Tired after staying up all night? We\'ve got you covered. Swing by Bobst LL138 to grab a bagel and some coffee!',
        location: 'Bobst LL138'
      },
      {
        time: '12:00 PM',
        title: 'Data Science Trivia',
        description: 'Getting tired of working on your solution? Mix things up and check out Bobst LL138 for some fun Data Science Trivia! Small prizes included!',
        location: 'Bobst LL138'
      },
      {
        time: '2:00 PM',
        title: 'Most Unique Corner List',
        description: 'Had a bit of time to experiment with Corner\'s App? Think your list is better curated than everyone else out there? Let\'s put it to the test – share your most unique corner list and let\'s see who really has the best taste! Reply in a thread under the respective Discord message with your Team Name and a screenshot of your corner list.',
        location: 'Virtual: Discord Server'
      },
      {
        time: '4:00 PM',
        title: 'Datathon Meme Contest',
        description: 'Create and share your funniest meme from this Datathon! Bonus points if the meme(s) includes at least 1 team member in the photo!!! Reply in a thread under the respective Discord message with your Team Name with the image attached. ',
        location: 'Virtual: Discord Server'
      },
      {
        time: '6:00 PM',
        title: 'Submission Period Ends',
        description: 'The submission period ends at 6pm. Please make sure to submit your final solution before then.',
        location: 'Virtual: Submissions Page'
      },
      {
        time: '6:00 PM',
        title: 'Closing Thoughts from DSC, BAC, and Corner & Dinner',
        description: 'Dinner is served in Bobst LL138. Prizes for Spirit Challenges will also be distributed. Thank you all for participating in the DSC x BAC Datathon!',
        location: 'Silver Center, Room 207'
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
                  <span className="flex items-center gap-4">
                    Schedule
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V3.5H14.25V2C14.25 1.58579 14.5858 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V3.5H18C19.6569 3.5 21 4.84315 21 6.5V8.5H3V6.5C3 4.84315 4.34315 3.5 6 3.5H8.25V2C8.25 1.58579 8.58579 1.25 9 1.25Z" fill="currentColor"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M18 22C19.6569 22 21 20.6569 21 19V10H3V19C3 20.6569 4.34315 22 6 22H18ZM9 14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14ZM8 19C8.55228 19 9 18.5523 9 18C9 17.4477 8.55228 17 8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14ZM12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19ZM17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14ZM16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19Z" fill="currentColor"/>
                    </svg>
                  </span>
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
                  className={`px-6 py-3 rounded-full font-['SuisseIntl'] text-sm transition-all duration-300 cursor-pointer ${
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
                <div className="font-['Editorial_Old'] italic text-2xl mb-8 [font-feature-settings:'dlig'_1]">
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
                          <div className="font-['SuisseIntl'] italic text-[#0acdf0] text-sm">
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-['Editorial_Old'] italic text-xl mb-2">
                            {item.title}
                          </div>
                          <div className="font-['SuisseIntl'] text-white/70 text-sm">
                            {typeof item.description === 'string' ? item.description : item.description}
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