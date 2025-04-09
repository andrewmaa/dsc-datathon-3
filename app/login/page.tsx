'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'
import CountdownTimer from '../components/CountdownTimer'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
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
        router.push(redirectTo)
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
                  Login
                </h2>
                <p className="font-['Suisse_Intl'] text-base sm:text-lg text-left opacity-100 pt-4 pb-4">
                  We&apos;ll be releasing more details about the event soon. In the meantime, you can follow us on <a href="https://www.instagram.com/dscnyu/" target="_blank" className="underline underline-offset-2 decoration-1 hover:decoration-2">Instagram</a> and join our <a href="https://discord.gg/6m7GrGHgKH" target="_blank" className="underline underline-offset-2 decoration-1 hover:decoration-2">Discord</a> for updates.
                </p>
                <div className="mt-8">
                  <CountdownTimer />
                </div>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['Suisse_Intl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Enter the password to access the event details.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0acdf0] focus:border-transparent"
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
                      className="group relative w-full overflow-hidden rounded-full bg-white text-black px-6 py-3 transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
                        <span>Login</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
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