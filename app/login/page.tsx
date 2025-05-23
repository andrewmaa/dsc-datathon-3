'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'
import CountdownTimer from '../components/CountdownTimer'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') || '/'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Set auth cookie
        document.cookie = 'auth-token=true; path=/; max-age=86400' // 24 hours
        // Force a hard navigation to ensure the middleware picks up the new cookie
        window.location.href = redirectTo
      } else {
        setError('Invalid password')
      }
    } catch {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  <span className="flex items-center gap-4">
                    Login
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7V9.5H7C5.61929 9.5 4.5 10.6193 4.5 12V19C4.5 20.3807 5.61929 21.5 7 21.5H17C18.3807 21.5 19.5 20.3807 19.5 19V12C19.5 10.6193 18.3807 9.5 17 9.5H16.75V7C16.75 4.37665 14.6234 2.25 12 2.25ZM15.25 9.5V7C15.25 5.20507 13.7949 3.75 12 3.75C10.2051 3.75 8.75 5.20507 8.75 7V9.5H15.25ZM12 13.75C12.4142 13.75 12.75 14.0858 12.75 14.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V14.5C11.25 14.0858 11.5858 13.75 12 13.75Z" fill="currentColor"/>
                    </svg>

                  </span>
                </h2>
                <p className="font-['SuisseIntl'] text-base sm:text-lg text-left opacity-100 pt-4 pb-4">
                  You must be registered for the datathon to access this page. The password will be released via Discord.
                </p>
                <div className="mt-8">
                  <CountdownTimer />
                </div>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Enter the password to access the event details. Do not share this password with anyone.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="password" className="block font-['SuisseIntl'] text-sm mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                        placeholder="Enter password"
                      />
                    </div>
                    {error && (
                      <div className="text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] w-full cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
                      <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-black disabled:text-black-50">
                        <span className="m-center-text !leading-none">LOGIN</span>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
} 