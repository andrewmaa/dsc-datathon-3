'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

type FormData = {
  teamName: string
  dataAgreement: string
  netId1: string
  netId2: string
  netId3: string
  netId4: string
  challenge: string
  githubRepo: string
  youtubeLink: string
  slidesLink: string
  reportLink: string
  comments: string
  feedback: string
}

export default function SubmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      comments: '',
      feedback: ''
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Add timestamp to the data
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString()
      }
      
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitSuccess(true)
    } catch (error) {
      console.error('Submission failed:', error)
      setSubmitError('Submission failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
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
                  Submit Your Project
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                  Please submit your datathon solution here. This includes a Jupyter notebook, a report, and a 5 minute presentation. Corner will judge all submissions and we will announce the winners within 1-2 weeks of the event.
                  </p>
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
                <h3 className="text-2xl italic font-['Editorial_Old'] [font-feature-settings:'dlig'_1] mb-4">Submission Successful!</h3>
                <p className="font-['SuisseIntl']">Thank you for submitting your project. We&apos;ll review it and get back to you soon.</p>
              </div>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {/* Team Information */}
                <div className="space-y-6">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Team Information</h2>

                  <div>
                    <label htmlFor="teamName" className="block font-['SuisseIntl'] text-sm mb-2">Team Name *</label>
                    <input
                      id="teamName"
                      type="text"
                      {...register('teamName', { required: 'Team name is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.teamName && <p className="text-red-400 text-sm mt-1">{errors.teamName.message}</p>}
                  </div>


                  {[
                    { id: 'netId1', label: 'NetID of team member #1 *', required: true },
                    { id: 'netId2', label: 'NetID of team member #2 *', required: true },
                    { id: 'netId3', label: 'NetID of team member #3 *', required: true },
                    { id: 'netId4', label: 'NetID of team member #4', required: false }
                  ].map(({ id, label, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-['SuisseIntl'] text-sm mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        type="text"
                        {...register(id as keyof FormData, { required: required ? 'This field is required' : false })}
                        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                      />
                      {errors[id as keyof FormData] && <p className="text-red-400 text-sm mt-1">{errors[id as keyof FormData]?.message}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="challenge" className="block font-['SuisseIntl'] text-sm mb-2">Which challenge solution are you submitting? *</label>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      {[
                        { value: 'easy', label: 'Easy Challenge' },
                        { value: 'hard', label: 'Hard Challenge' }
                      ].map((option) => (
                        <label key={option.value} className="flex-1">
                          <input
                            type="radio"
                            value={option.value}
                            {...register('challenge', { required: 'Please select a challenge' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.challenge && <p className="text-red-400 text-sm mt-1">{errors.challenge.message}</p>}
                  </div>
                </div>

                {/* Submission Links */}
                <div className="space-y-6">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Submission Links</h2>

                  <div>
                    <label htmlFor="githubRepo" className="block font-['SuisseIntl'] text-sm mb-2">
                    Please upload your cleaned up jupyter notebook with commented code. *
                    </label>
                    <input
                      id="githubRepo"
                      type="url"
                      {...register('githubRepo', { required: 'GitHub repository link is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.githubRepo && <p className="text-red-400 text-sm mt-1">{errors.githubRepo.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="youtubeLink" className="block font-['SuisseIntl'] text-sm mb-2">
                      Youtube video link to your presentation. Please make it unlisted or private. *
                    </label>
                    <input
                      id="youtubeLink"
                      type="url"
                      {...register('youtubeLink', { required: 'YouTube video link is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.youtubeLink && <p className="text-red-400 text-sm mt-1">{errors.youtubeLink.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="slidesLink" className="block font-['SuisseIntl'] text-sm mb-2">
                      A link to your slides presentation. Please make sure it&apos;s viewable to everyone outside of NYU. *
                    </label>
                    <input
                      id="slidesLink"
                      type="url"
                      {...register('slidesLink', { required: 'Slides link is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.slidesLink && <p className="text-red-400 text-sm mt-1">{errors.slidesLink.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="reportLink" className="block font-['SuisseIntl'] text-sm mb-2">
                      A link to your report. Please make sure it&apos;s viewable to everyone outside of NYU. *
                    </label>
                    <input
                      id="reportLink"
                      type="url"
                      {...register('reportLink', { required: 'Report link is required' })}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                    {errors.reportLink && <p className="text-red-400 text-sm mt-1">{errors.reportLink.message}</p>}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h2 className="font-['Editorial_Old'] text-4xl [font-feature-settings:'dlig'_1] mt-12">Additional Information</h2>

                  <div>
                    <label htmlFor="comments" className="block font-['SuisseIntl'] text-sm mb-2">
                      Any comments about your submission? If you have none, please write &quot;N/A&quot;.
                    </label>
                    <textarea
                      id="comments"
                      {...register('comments')}
                      rows={4}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block font-['SuisseIntl'] text-sm mb-2">
                      Do you have any feedback on this year&apos;s datathon? What did you enjoy? What could we improve?
                    </label>
                    <textarea
                      id="feedback"
                      {...register('feedback')}
                      rows={4}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-[#0acdf0] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-['SuisseIntl'] text-sm mb-2">
                      By marking &quot;Yes&quot;, you confirm that you and your team adhered to corner&apos;s data usage agreement linked <a href="/agreement" className="underline">here</a> throughout the entirety of the datathon and will continue to do so thereafter. Note that by violating the data usage agreement, you risk getting disqualified from the datathon and future DSC events. *
                    </label>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex-1">
                          <input
                            type="radio"
                            value={option.toLowerCase()}
                            {...register('dataAgreement', { required: 'You must agree to corner&apos;s data usage agreement' })}
                            className="sr-only peer"
                          />
                          <div className="flex items-center justify-center h-10 w-full rounded-lg border border-white/20 peer-checked:border-[#0acdf0] peer-checked:bg-[#0acdf0]/10 cursor-pointer transition-colors">
                            <span className="font-['SuisseIntl'] text-sm text-white/90 peer-checked:text-white">{option}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.dataAgreement && <p className="text-red-400 text-sm mt-1">{errors.dataAgreement.message}</p>}
                    {watch('dataAgreement') === 'no' && <p className="text-red-400 text-sm mt-1">You must agree to corner&apos;s data usage agreement to submit the form.</p>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || watch('dataAgreement') === 'no'}
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