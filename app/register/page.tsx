'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

type FormData = {
  name: string
  email: string
  university: string
  major: string
  year: string
  teamName?: string
  dietaryRestrictions?: string
  experience: string
  whyAttend: string
}

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      await response.json()
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Registration failed:', error)
      setSubmitError('Registration failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1]">
                  Register
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['Suisse_Intl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Join us for an exciting hackathon experience. Fill out the form below to register.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {submitError && (
            <AnimatedSection>
              <div className="bg-red-400/10 border border-red-400 p-6 rounded-lg mb-8">
                <p className="font-['Suisse_Intl'] text-red-400">{submitError}</p>
              </div>
            </AnimatedSection>
          )}

          {submitSuccess ? (
            <AnimatedSection>
              <div className="bg-[#0acdf0]/10 border border-[#0acdf0] p-6 rounded-lg">
                <h3 className="text-2xl italic font-['Editorial_Old'] [font-feature-settings:'dlig'_1] mb-4">Registration Successful!</h3>
                <p className="font-['Suisse_Intl']">Thank you for registering. We&apos;ll be in touch with more details soon.</p>
              </div>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="font-['Editorial_Old'] text-2xl [font-feature-settings:'dlig'_1]">Personal Information</h3>
                  
                  <div>
                    <label htmlFor="name" className="block font-['Suisse_Intl'] text-sm mb-2">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-['Suisse_Intl'] text-sm mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="university" className="block font-['Suisse_Intl'] text-sm mb-2">University *</label>
                    <input
                      id="university"
                      type="text"
                      {...register('university', { required: 'University is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.university && <p className="text-red-400 text-sm mt-1">{errors.university.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="major" className="block font-['Suisse_Intl'] text-sm mb-2">Major *</label>
                    <input
                      id="major"
                      type="text"
                      {...register('major', { required: 'Major is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.major && <p className="text-red-400 text-sm mt-1">{errors.major.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="year" className="block font-['Suisse_Intl'] text-sm mb-2">Year of Study *</label>
                    <select
                      id="year"
                      {...register('year', { required: 'Year of study is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    >
                      <option value="">Select year</option>
                      <option value="freshman">Freshman</option>
                      <option value="sophomore">Sophomore</option>
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                      <option value="graduate">Graduate</option>
                    </select>
                    {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year.message}</p>}
                  </div>
                </div>

                {/* Team Information */}
                <div className="space-y-6">
                  <h3 className="font-['Editorial_Old'] text-2xl [font-feature-settings:'dlig'_1]">Team Information</h3>
                  
                  <div>
                    <label htmlFor="teamName" className="block font-['Suisse_Intl'] text-sm mb-2">Team Name (Optional)</label>
                    <input
                      id="teamName"
                      type="text"
                      {...register('teamName')}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="font-['Editorial_Old'] text-2xl [font-feature-settings:'dlig'_1]">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block font-['Suisse_Intl'] text-sm mb-2">Dietary Restrictions</label>
                    <input
                      id="dietaryRestrictions"
                      type="text"
                      {...register('dietaryRestrictions')}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block font-['Suisse_Intl'] text-sm mb-2">Experience Level *</label>
                    <select
                      id="experience"
                      {...register('experience', { required: 'Experience level is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="whyAttend" className="block font-['Suisse_Intl'] text-sm mb-2">Why do you want to attend? *</label>
                    <textarea
                      id="whyAttend"
                      {...register('whyAttend', { required: 'This field is required' })}
                      rows={4}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.whyAttend && <p className="text-red-400 text-sm mt-1">{errors.whyAttend.message}</p>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0acdf0] text-black font-['Suisse_Intl'] py-4 px-6 rounded-lg hover:bg-[#0acdf0]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
} 