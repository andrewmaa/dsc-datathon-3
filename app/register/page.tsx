'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

type FormData = {
  name: string
  email: string
  netid: string
  year: string
  major: string[]
  customMajor?: string
  experienceLevelPython: number
  experienceLevelML: number
  experienceLevelDeepL: number
  skills: string[]
  skillsToGain: string
  netid1: string
  name1: string
  netid2: string
  name2: string
  netid3: string
  name3: string
  confirmation: string
}

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      console.log('Submitting data:', data)

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

      console.log('Server response:', response)

      const responseData = await response.json()
      console.log('Server response:', responseData)

      setSubmitSuccess(true)
    } catch (error) {
      console.error('Registration failed:', error)
      setSubmitError('Registration failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'other') {
      setIsOtherSelected(event.target.checked)
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
                    Register
                    <svg width="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4666 4.02416C12.7684 2.72241 14.8789 2.72241 16.1807 4.02416C17.4824 5.32591 17.4824 7.43646 16.1807 8.73821L15.2804 9.63846C15.2148 8.45312 14.7292 7.2867 13.8237 6.38118C12.9181 5.47567 11.7517 4.99008 10.5664 4.92442L11.4666 4.02416Z" fill="currentColor"/>
                      <path d="M12.9398 7.26507C13.9659 8.29124 14.2731 9.76416 13.8611 11.0578L9.69916 15.2197C9.39707 15.5218 9.05113 15.7541 8.68215 15.916C6.96946 16.8092 4.13163 17.4746 2.92652 17.7316C2.64713 17.7912 2.40143 17.5566 2.4513 17.2753C2.69291 15.9125 3.40861 12.4666 4.70785 10.8196C4.79249 10.7108 4.88482 10.606 4.98483 10.506L9.14709 6.34371C10.4407 5.93178 11.9136 6.2389 12.9398 7.26507Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Join us for an exciting datathon experience. Fill out the form below to register. <br /></p> 
                    <div className="bg-blue-100 border border-blue-200 text-blue-700 px-4 py-3 rounded-xl relative mb-4 " role="alert">
                  <strong className="font-semibold">Note:</strong>
                  <br />
                  <span className="block sm:inline">You must be enrolled in an NYU undergraduate program to participate.</span>
                </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {submitError && (
            <AnimatedSection>
              <div className="bg-red-400/10 border border-red-400 p-6 rounded-lg mb-8">
                <p className="font-['SuisseIntl'] text-red-400">{submitError}</p>
              </div>
            </AnimatedSection>
          )}

          {submitSuccess ? (
            <AnimatedSection>
              <div className="bg-[#0acdf0]/10 border border-[#0acdf0] p-6 rounded-lg">
                <h3 className="text-2xl italic font-['Editorial_Old'] [font-feature-settings:'dlig'_1] mb-4">Registration Successful!</h3>
                <p className="font-['SuisseIntl']">Thank you for registering. We&apos;ll be in touch with more details soon.</p>
              </div>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Personal Information</h2>
                  
                  

                  <div>
                    <label htmlFor="email" className="block font-['SuisseIntl'] text-sm mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@nyu\.edu$/i,
                          message: 'Please use your NYU email address (@nyu.edu)'
                        }
                      })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block font-['SuisseIntl'] text-sm mb-2">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="netid" className="block font-['SuisseIntl'] text-sm mb-2">NetID *</label>
                    <input
                      id="netid"
                      type="text"
                      {...register('netid', { required: 'NetID is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.netid && <p className="text-red-400 text-sm mt-1">{errors.netid.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="year" className="block font-['SuisseIntl'] text-sm mb-2">Year of Study *</label>
                    <div className="flex items-center justify-between gap-2">
                      {['Freshman', 'Sophomore', 'Junior', 'Senior'].map((year) => (
                        <label key={year} className="flex-1">
                          <input
                            type="radio"
                            value={year.toLowerCase()}
                            {...register('year', { required: 'Year of study is required' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{year}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year.message}</p>}
                  </div>
                  <div>
                    <label className="block font-['SuisseIntl'] text-sm mb-2">Major(s) *</label>
                    <div className="space-y-3">
                      {[
                        { value: 'data-science', label: 'Data Science' },
                        { value: 'computer-science', label: 'Computer Science' },
                        { value: 'math', label: 'Math' },
                        { value: 'economics', label: 'Economics' },
                        { value: 'other', label: 'Other...' }
                      ].map((major) => (
                        <label key={major.value} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            value={major.value}
                            {...register('major', { required: 'Please select at least one major' })}
                            className="h-4 w-4 rounded border-white/20 bg-transparent text-[#0acdf0] checked:border-transparent"
                            onChange={handleMajorChange}
                          />
                          <span className="font-['SuisseIntl'] text-sm text-white/90 group-hover:text-white transition-colors">{major.label}</span>
                        </label>
                      ))}
                    </div>
                    {isOtherSelected && (
                      <div className="mt-3">
                        <label htmlFor="customMajor" className="block font-['SuisseIntl'] text-sm mb-2">Please specify your major *</label>
                        <input
                          id="customMajor"
                          type="text"
                          {...register('customMajor', { required: 'Please specify your major' })}
                          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                        />
                        {errors.customMajor && <p className="text-red-400 text-sm mt-1">{errors.customMajor.message}</p>}
                      </div>
                    )}
                    {errors.major && <p className="text-red-400 text-sm mt-1">{errors.major.message}</p>}
                  </div>

                  
                </div>

                {/* Team Information */}
                <div className="space-y-6">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Your Experience</h2>
                  
                  

                  <div>
                    <label htmlFor="experienceLevelPython" className="block font-['SuisseIntl'] text-sm mb-2">Rate your Python experience (1-5) *</label>
                    <div className="flex items-center justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value} className="flex-1">
                          <input
                            type="radio"
                            value={value}
                            {...register('experienceLevelPython', { required: 'Please rate your Python experience' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{value}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.experienceLevelPython && <p className="text-red-400 text-sm mt-1">{errors.experienceLevelPython.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="experienceLevelML" className="block font-['SuisseIntl'] text-sm mb-2">Rate your Machine Learning experience (1-5) *</label>
                    <div className="flex items-center justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value} className="flex-1">
                          <input
                            type="radio"
                            value={value}
                            {...register('experienceLevelML', { required: 'Please rate your Machine Learning experience' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{value}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.experienceLevelML && <p className="text-red-400 text-sm mt-1">{errors.experienceLevelML.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="experienceLevelDeepL" className="block font-['SuisseIntl'] text-sm mb-2">Rate your Deep Learning experience (1-5) *</label>
                    <div className="flex items-center justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value} className="flex-1">
                          <input
                            type="radio"
                            value={value}
                            {...register('experienceLevelDeepL', { required: 'Please rate your Deep Learning experience' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{value}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.experienceLevelDeepL && <p className="text-red-400 text-sm mt-1">{errors.experienceLevelDeepL.message}</p>}
                  </div>
                  <div>
                    <label className="block font-['SuisseIntl'] text-sm mb-2">Which of these skills do you have? *</label>
                    <div className="space-y-3">
                      {[
                        { value: 'python', label: 'Python (pandas, numpy)' },
                        { value: 'machine-learning', label: 'Machine Learning (scikit-learn, xgboost)' },
                        { value: 'deep-learning', label: 'Deep Learning (tensorflow, pytorch)' },
                        { value: 'presentation', label: 'Presentation (data visualization, slides)' },
                        { value: 'leadership', label: 'Leadership/Project Management' },
                        { value: 'none', label: 'None of the above' }
                      ].map((skill) => (
                        <label key={skill.value} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            value={skill.value}
                            {...register('skills', { required: 'Please select at least one skill' })}
                            className="h-4 w-4 rounded border-white/20 bg-transparent text-[#0acdf0] checked:border-transparent"
                          />
                          <span className="font-['SuisseIntl'] text-sm text-white/90 group-hover:text-white transition-colors">{skill.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.skills && <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="skillsToGain" className="block font-['SuisseIntl'] text-sm mb-2">What skills do you hope to gain from this event? *</label>
                    <textarea
                      id="skillsToGain"
                      {...register('skillsToGain', { required: 'This field is required' })}
                      rows={4}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.skillsToGain && <p className="text-red-400 text-sm mt-1">{errors.skillsToGain.message}</p>}
                  </div>
                  <div className="mb-6">
                    <label className="block font-['SuisseIntl'] text-sm mb-2">Teammate Information</label>
                    <label className="block font-['SuisseIntl'] text-white/70 text-xs mb-5">Each person needs to be in a team of at least 3. We will have a social/mixer event on April 17 from 5-6pm in Leslie e-lab to meet other people looking for teammates!</label>
                    
                    <div className="mt-3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="netid1" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 1 NetID *</label>
                          <input
                            id="netid1"
                            type="text"
                            {...register('netid1', { required: 'Teammate 1 NetID is required' })}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                          {errors.netid1 && <p className="text-red-400 text-sm mt-1">{errors.netid1.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="name1" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 1 Full Name *</label>
                          <input
                            id="name1"
                            type="text"
                            {...register('name1', { required: 'Teammate 1 Full Name is required' })}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                          {errors.name1 && <p className="text-red-400 text-sm mt-1">{errors.name1.message}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="netid2" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 2 NetID *</label>
                          <input
                            id="netid2"
                            type="text"
                            {...register('netid2', { required: 'Teammate 2 NetID is required' })}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="name2" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 2 Full Name *</label>
                          <input
                            id="name2"
                            type="text"
                            {...register('name2', { required: 'Teammate 2 Full Name is required' })}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="netid3" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 3 NetID</label>
                          <input
                            id="netid3"
                            type="text"
                            {...register('netid3')}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="name3" className="block font-['SuisseIntl'] text-sm mb-2">Teammate 3 Full Name</label>
                          <input
                            id="name3"
                            type="text"
                            {...register('name3')}
                            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                  
                  

                {/* Additional Information */}
                <div className="space-y-6 mt-8">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Confirmation</h2>
                  <div>
                    <label htmlFor="confirmation" className="block font-['SuisseIntl'] text-sm mb-2">I am aware that I need to be there <span className="font-bold"> IN PERSON</span> for the start of the event at Silver Room 207 on Friday April 25th at 5:00 PM in order to participate. *</label>
                    <div className="flex items-center justify-between gap-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex-1">
                          <input
                            type="radio"
                            value={option.toLowerCase()}
                            {...register('confirmation', { required: 'Please confirm your attendance' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{option}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.confirmation && <p className="text-red-400 text-sm mt-1">{errors.confirmation.message}</p>}
                    {watch('confirmation') === 'no' && <p className="text-red-400 text-sm mt-1">You must confirm attendance to submit the form.</p>}
                  </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || watch('confirmation') === 'no'}
                    className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] w-full cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
                    <div className="inline-flex gap-2 items-center justify-center h-10 px-4 relative min-w-[120px] text-black disabled:text-black-50">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⟳</span>
                          <span>SUBMITTING...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>SUBMIT</span>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                          </svg>
                        </span>
                      )}
                    </div>
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