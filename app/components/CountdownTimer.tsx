'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const numberToWords = (num: number): string => {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (num < 20) return ones[num]
  if (num < 100) {
    const ten = Math.floor(num / 10)
    const one = num % 10
    return tens[ten] + (one ? '-' + ones[one] : '')
  }
  return num.toString()
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-04-25T09:00:00')

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
                className="font-['Suisse_Intl'] text-xl md:text-xl font-medium text-white w-full text-center"
              >
                {numberToWords(timeLeft.days)}
              </motion.div>
            </AnimatePresence>
            <div className="font-['Suisse_Intl'] text-md text-[#0acdf0]/60 w-full text-center">days</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.hours}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['Suisse_Intl'] text-xl md:text-xl font-medium text-white w-full text-center"
              >
                {numberToWords(timeLeft.hours)}
              </motion.div>
            </AnimatePresence>
            <div className="font-['Suisse_Intl'] text-md text-[#0acdf0]/60 w-full text-center">hours</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.minutes}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['Suisse_Intl'] text-xl md:text-xl font-medium text-white w-full text-center"
              >
                {numberToWords(timeLeft.minutes)}
              </motion.div>
            </AnimatePresence>
            <div className="font-['Suisse_Intl'] text-md text-[#0acdf0]/60 w-full text-center">minutes</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeLeft.seconds}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-['Suisse_Intl'] text-xl md:text-xl font-medium text-white w-full text-center"
              >
                {numberToWords(timeLeft.seconds)}
              </motion.div>
            </AnimatePresence>
            <div className="font-['Suisse_Intl'] text-md text-[#0acdf0]/60 w-full text-center">seconds</div>
          </div>
        </div>
        <br />
        <div className="font-['Editorial_Old'] font-ultralight italic text-2xl text-white w-full text-center [font-feature-settings:'dlig'_1]">until the datathon!</div>
        <br />
        <div className="font-['Suisse_Intl'] text-sm/6 text-white/50 w-full text-center">Location: Silver Center for Arts and Sciences</div>
        <div className="font-['Geist'] text-sm text-white/50 w-full text-center">
         April 25 9:00 AM - April 26 1:00 PM
        </div>
      </motion.div>
    </div>
  )
} 