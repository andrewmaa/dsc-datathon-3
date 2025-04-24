'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

export default function AgreementPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="section-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-system-ui font-medium text-4xl md:text-5xl lg:text-6xl font-[200] leading-tighter text-white tracking-[-0.06em] [font-feature-settings:'dlig'_1] mb-8">
                  <span className="italic">corner</span> data usage agreement
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Please review the following agreement carefully before participating in the datathon. This agreement outlines the terms and conditions for using the provided datasets.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Agreement Terms
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-12">
                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">1. Purpose and Scope</h3>
                  <p className="font-['SuisseIntl'] text-base text-white/80">This Agreement governs the use of proprietary data (&ldquo;Dataset&rdquo;) provided by Corner to Participant solely for the purpose of participating in the NYU Hackathon (&ldquo;Hackathon&rdquo;).</p>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">2. Dataset Description</h3>
                  <p className="font-['SuisseIntl'] text-base text-white/80">The Dataset contains anonymized information provided by Corner for use during the Hackathon. This Dataset represents proprietary business information and trade secrets of Corner.</p>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">3. Permitted Use</h3>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">Participant is granted a limited, non-exclusive, non-transferable right to use the Dataset solely for:</p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>Participating in the Hackathon</li>
                    <li>Analyzing data and patterns</li>
                    <li>Developing insights and presentations for the Hackathon</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">4. Restrictions</h3>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">Participant shall NOT:</p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>Share, distribute, publish, or transfer the Dataset to any third party</li>
                    <li>Use the Dataset for any commercial purpose</li>
                    <li>Attempt to re-identify or de-anonymize any individuals in the Dataset</li>
                    <li>Retain, store, or use the Dataset after the conclusion of the Hackathon</li>
                    <li>Create derivative datasets for use outside of the Hackathon</li>
                    <li>Use the Dataset for any purpose other than participation in the Hackathon</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">5. Confidentiality</h3>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">Participant agrees to:</p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>Maintain the Dataset in strict confidence</li>
                    <li>Implement appropriate security measures to prevent unauthorized access</li>
                    <li>Not disclose any part of the Dataset except as required for Hackathon participation</li>
                    <li>Notify Corner immediately of any unauthorized access or disclosure</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">6. Intellectual Property</h3>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>The Dataset remains the exclusive property of Corner</li>
                    <li>No rights, title, or interest in the Dataset are transferred to Participant</li>
                    <li>Corner retains all intellectual property rights in the Dataset</li>
                    <li>Any outcomes, analysis results, insights, code, presentations, or other materials developed during the Hackathon using the Dataset may be used by Corner for any purpose</li>
                    <li>Subject to the above, Participant&apos;s analysis results and insights developed during the Hackathon belong to Participant, subject to the confidentiality obligations in this Agreement</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">7. Term and Termination</h3>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>This Agreement is effective from the date of access to the Dataset</li>
                    <li>This Agreement terminates at the conclusion of the Hackathon</li>
                    <li>Upon termination, Participant shall immediately:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Cease all use of the Dataset</li>
                        <li>Delete all copies of the Dataset</li>
                        <li>Certify in writing that all Dataset materials have been destroyed</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">8. Liability and Indemnification</h3>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>The Dataset is provided &ldquo;as is&rdquo; without warranty of any kind</li>
                    <li>Participant shall indemnify Corner against any claims arising from Participant&apos;s use of the Dataset</li>
                    <li>Participant is liable for any breach of this Agreement</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-['SuisseIntl'] text-xl font-semibold mb-4">9. General Provisions</h3>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>This Agreement constitutes the entire understanding between the parties</li>
                    <li>This Agreement is binding upon Participant</li>
                    <li>This Agreement may only be modified in writing</li>
                    <li>Any disputes arising from this Agreement shall be resolved under the laws of New York</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 font-['SuisseIntl'] text-sm">
            <p className="text-white/70">This Data Usage Agreement (the &ldquo;Agreement&rdquo;) is entered into by and between:</p>
            <p className="font-semibold">Corner International Inc. (&ldquo;Corner&rdquo;) and Participant (any student, team, or individual participating in the NYU Hackathon)</p>
            <p className="mt-6 font-semibold">By accessing or using the Dataset, Participant acknowledges that they have read, understood, and agree to be bound by this Agreement.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
