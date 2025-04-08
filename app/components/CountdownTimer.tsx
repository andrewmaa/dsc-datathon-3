'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const eventDate = new Date('2025-04-25T09:00:00') // April 20, 2024 at 9:00 AM

    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="text-center">
        <div className="font-['Suisse_Intl'] text-2xl md:text-3xl font-medium">{timeLeft.days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="text-center">
        <div className="font-['Suisse_Intl'] text-2xl md:text-3xl font-medium">{timeLeft.hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="text-center">
        <div className="font-['Suisse_Intl'] text-2xl md:text-3xl font-medium">{timeLeft.minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="text-center">
        <div className="font-['Suisse_Intl'] text-2xl md:text-3xl font-medium">{timeLeft.seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  )
} 