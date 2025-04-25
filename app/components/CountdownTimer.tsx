'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-04-25T17:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div 
        className="bg-[#0acdf0]/10 border border-[#0acdf0] p-8 rounded-lg w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.days}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['SuisseIntl'] text-2xl md:text-3xl font-medium text-white w-full text-center tabular-nums"
              >
                {timeLeft.days.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div className="font-['SuisseIntl'] text-md text-[#0acdf0]/60 w-full text-center">days</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.hours}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['SuisseIntl'] text-2xl md:text-3xl font-medium text-white w-full text-center tabular-nums"
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div className="font-['SuisseIntl'] text-md text-[#0acdf0]/60 w-full text-center">hours</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.minutes}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['SuisseIntl'] text-2xl md:text-3xl font-medium text-white w-full text-center tabular-nums"
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div className="font-['SuisseIntl'] text-md text-[#0acdf0]/60 w-full text-center">minutes</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.seconds}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['SuisseIntl'] text-2xl md:text-3xl font-medium text-white w-full text-center tabular-nums"
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div className="font-['SuisseIntl'] text-md text-[#0acdf0]/60 w-full text-center">seconds</div>
          </div>
        </div>
        <br />
        <div className="font-['Editorial_Old'] font-ultralight italic text-2xl text-white w-full text-center [font-feature-settings:'dlig'_1]">until the datathon!</div>
        <br />
        <div className="font-['SuisseIntl'] text-sm/6 text-white/50 w-full text-center">Location: Silver Center for Arts and Sciences</div>
        <div className="font-['Geist'] text-sm text-white/50 w-full text-center">
         April 25 5:00 PM - April 26 6:00 PM
        </div>
      </motion.div>
    </div>
  )
} 