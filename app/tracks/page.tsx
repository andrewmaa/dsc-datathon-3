'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedSection } from '../components/AnimatedSection'

export default function TracksPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <section className="relative z-10 py-24 md:py-28 lg:py-40" style={{ backgroundColor: '#191919', color: '#ffffff' }}>
        <div className="section-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Description */}
          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h1 className="font-['Editorial_Old'] text-4xl md:text-5xl lg:text-6xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Tracks
                </h1>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2 max-w-md">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Choose between two exciting tracks for the datathon. Each track offers unique challenges and opportunities to showcase your data science skills.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mb-16">
            <AnimatedSection>
            <div className="bg-[#0acdf0]/10 border border-[#0acdf0] text-[#0acdf0] px-4 py-3 rounded-xl mb-4" role="alert">
                    <span className="block sm:inline">Jump to: <button type="button" onClick={(e) => { e.preventDefault(); document.getElementById('track1')?.scrollIntoView({behavior: 'smooth'});}} className="font-semibold underline cursor-pointer">
                      Track 1: User Archetypes
                      </button> or <button type="button" onClick={(e) => { e.preventDefault(); document.getElementById('track2')?.scrollIntoView({behavior: 'smooth'});}} className="font-semibold underline cursor-pointer">
                      Track 2: Vibe Search
                      </button>.</span> <br /> <br />
                      <span className="block sm:inline">
                        Finished with your project? <a href="/submissions" className="font-semibold underline cursor-pointer">Submit your project here</a>.
                      </span>
            </div>
            </AnimatedSection>
          </div>

          {/* Track 1 */}
          <div id="track1" className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Track 1: User Archetypes [easy]
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Why is corner better than other map and review platforms..?
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Background
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    We have a much younger, cooler, and hip user-base. As a result, we can often predict when a place is going to pop-off 1-2 months before it blows up on tiktok.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Of course, as our platform is scaling, the diversity of our user base increases. How can we maintain a great experience as the density of users like you decreases?
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80">
                    A big issue with apps like google maps is the flood of content from <span className="font-bold">everyone</span>. what if we could show you just the content from users who are similar to you? Think beyond just traditional segmentation by demographic features (like age and gender) - but based on taste.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Problem
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Your task is to figure out the best way to segment these users or in other words; how users relate to each other. What &ldquo;<span className="font-bold">archetypes</span>&rdquo; exist on corner?
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80">
                    Perform an <span className="font-bold">exploratory</span> analysis that clusters users based on their interests in places. Emphasis on &ldquo;exploratory&rdquo; — there is no right answer. What are patterns you can identify? How can we figure out if two users are similar to each other? What is obvious (e.g. people&apos;s taste in bars form clearer clusters than their taste in cafes because bars are very diverse compared to cafes)? What is surprising?
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Dataset
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    We&apos;re providing you with ~1.2K real users (all anonymized to protect people&apos;s privacy obviously) as well as ~20K real places from NYC and SF. The data is organized into 3 tables:
                  </p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">users</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">user_id</code> : anonymized user id</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">places</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">place_id</code> : anonymized place id</li>
                        <li><code className="text-[#0acdf0]">place_name</code> : randomly included to help you</li>
                        <li><code className="text-[#0acdf0]">short_description</code> : what kind of place it is</li>
                        <li><code className="text-[#0acdf0]">description</code> : longer description of what the place is</li>
                        <li><code className="text-[#0acdf0]">emoji</code> : 😄🍵🕺</li>
                        <li><code className="text-[#0acdf0]">tags</code> : that kind of place it is (restaurant, bar, cafe, night club, etc)</li>
                        <li><code className="text-[#0acdf0]">key_words</code> : some interesting words we extract from the data we have</li>
                        <li><code className="text-[#0acdf0]">lat</code> : latitude</li>
                        <li><code className="text-[#0acdf0]">lng</code> : longitude</li>
                        <li><code className="text-[#0acdf0]">neighborhood</code> : which part of the city this place is</li>
                        <li><code className="text-[#0acdf0]">city</code> : either new_york or sf</li>
                        <li><code className="text-[#0acdf0]">photo</code> : a photo that google maps provided to us</li>
                        <li><code className="text-[#0acdf0]">embedding</code>* : open-ai&apos;s text-embedding-ada-002</li>
                      </ul>
                      <p className="font-['SuisseIntl'] text-base text-white/80 mt-4 italic">
                        * the embedding column is generated through a process of gathering all the information we have about a place. It offers a very good vector representation of each spot. For example: doing cosine similarity off one place&apos;s vector will yield the most similar places in terms of vibes, occasion, type of place, etc.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">user_place</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">user_id</code> : joins with the users table</li>
                        <li><code className="text-[#0acdf0]">place_id</code> : joins with the place table</li>
                        <li><code className="text-[#0acdf0]">timestamp</code> : when the user saved the place</li>
                        <li><code className="text-[#0acdf0]">status</code> : either &ldquo;want to try&rdquo; (not been yet), &ldquo;visited&rdquo;, &ldquo;fav&rdquo;, &ldquo;dislike&rdquo;</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="https://andrewma.b-cdn.net/dsc/p1.zip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-[#0acdf0] text-base font-medium rounded-md text-[#0acdf0] hover:bg-[#0acdf0]/10 transition-colors duration-200">
                      <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Track 1 Dataset
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  What You&apos;re Doing
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Create a <strong>report</strong> which explores the data with the theme of classifying users and relating them to each other. Present your findings in an engaging, concise, and practical way. Use visualizations where possible to help drive home your points. The main findings should be easy to understand for a non-technical audience. Include in your analysis how Corner can practically apply these findings to improve the app experience.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Include a separate Jupyter notebook that contains your methods (intended for a technical audience).
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Some suggestions on what to explore:
                  </p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>What are the &ldquo;bins&rdquo; we can categorize our users into?</li>
                    <li>What features are the most predictive of user similarity?</li>
                    <li>Given an input user, how can we determine which other user they have the most similar taste with?</li>
                    <li>There are &ldquo;pivot&rdquo; places— where if two users have this place in common, it is highly likely they are similar. Take for example a boutique shop like Le Pere — which offers a very unique style of clothing. All the users who have this place saved likely have the same fashion sensibilities. How do we identify these spots?</li>
                    <li>The dataset contains places from two very different cities (NYC and SF). How are users different between these two cities? How does this change the clustering? Can we generalize clustering globally or is it specific to a region?</li>
                    <li>What data should we start collecting to improve our ability to cluster?</li>
                  </ul>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mt-4 italic">
                    Some things to think about:
                  </p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                    <li>Is using places in common effective? Any user who has saved a lot of places would have a lot of places in common with any other user.</li>
                    <li>How can we still categorize a user if they have very few places? This is commonly known as the &ldquo;cold start&rdquo; problem for recommendation systems. How much data do we need on a user before our techniques start working?</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Judging Criteria
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Communication (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Clarity</strong>: Clear and concise presentation of findings</li>
                        <li><strong>Visualization</strong>: Effective use of charts and diagrams</li>
                        <li><strong>Documentation</strong>: Well-documented code and analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Technical Execution (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Methodology</strong>: Sound analytical approach</li>
                        <li><strong>Completeness</strong>: Thorough exploration of the data</li>
                        <li><strong>Validation</strong>: Robust testing of findings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Practicality (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Actionability</strong>: Clear recommendations</li>
                        <li><strong>Implementation</strong>: Feasible solutions</li>
                        <li><strong>Impact</strong>: Potential business value</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Innovation (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Creativity</strong>: Novel approaches to analysis</li>
                        <li><strong>Insight</strong>: Unexpected discoveries</li>
                        <li><strong>Vision</strong>: Forward-thinking ideas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Track 2 */}
          <div id="track2" className="border-t border-white/20 my-20"></div>

          <div className="flex justify-between gap-y-10 gap-x-4 flex-col md:flex-row mb-10 md:mb-14 lg:mb-20">
            <div className="max-w-md lg:max-w-lg md:basis-1/2">
              <AnimatedSection>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Track 2: Vibe Search [hard]
                </h2>
              </AnimatedSection>
            </div>

            <div className="md:basis-1/2">
              <AnimatedSection delay={0.2}>
                <div className="font-['SuisseIntl'] text-[18px] leading-[22px] space-y-4">
                  <p>
                    Corner has always been about answering &ldquo;<a href="https://www.corner.inc/wtfdwg/vol1" target="_blank" rel="noopener noreferrer" className="text-[#0acdf0]">WTFDWG?</a>&rdquo;. Life is made up of moments a moments happen in places. We want to be the very best at connecting people to the places that they want to go to.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Background
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80">
                    In this problem, we will explore how we can perform searches that feel a lot more human and personal. Our users are often looking for very specific yet intangible things. Beyond just &ldquo;Italian food&rdquo; or &ldquo;restaurant&rdquo;. Some real queries that come to mind:
                  </p>
                  <div className="bg-white/5 rounded-xl p-4 my-4 font-['SuisseIntl'] text-base italic">
                    &ldquo;where to find hot guys?&rdquo;<br/>
                    &ldquo;where to take someone on a second date?&rdquo;<br/>
                    &ldquo;dance-y bars that have disco balls&rdquo;
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Problem
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Traditional search systems are very bad at finding these places using lexical matching. Relying on key words alone is not smart enough. RAG (Retrieval Augmented Generation) helps us solve this problem. Models are now capable of semantically relating things which allows us to perform searches beyond just looking for the same words. Instead, we can allow people to search by vibes. We call this Vibe Search™.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Your task is to build Vibe Search™ for a small set of places in NYC. Create a RAG-based system that does not necessarily rely on key-words, allowing users to express what they are looking for more naturally. Your system can be multi-modal; using a combination of the text inputs (reviews) that we have collected from user reviews as well as photos we have of the place.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 italic mb-4">
                    It&apos;s very difficult to understand a user&apos;s intention with the few words they provide in their query. How do we map their intent to a result that feels right? What are the inputs to the system we can use to understand what places are good for and then serve them as results for the right query?
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80">
                    That&apos;s a real question we ask at corner all the time.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Dataset
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    We&apos;re providing you with 1.5K of the most popular spots on Corner in NYC.
                  </p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">places</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">place_id</code> : the unique id for a place</li>
                        <li><code className="text-[#0acdf0]">name</code> : name of the place</li>
                        <li><code className="text-[#0acdf0]">neighborhood</code> : where in the city this place is</li>
                        <li><code className="text-[#0acdf0]">latitude</code> : y-coordinate on earth</li>
                        <li><code className="text-[#0acdf0]">longitude</code> : x-coordinate on earth</li>
                        <li><code className="text-[#0acdf0]">tags</code> : what type(s) of place this is</li>
                        <li><code className="text-[#0acdf0]">short_description</code> : a short phrase about the place</li>
                        <li><code className="text-[#0acdf0]">emoji</code> : 😉</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">media</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">place_id</code> : joins with the place table</li>
                        <li><code className="text-[#0acdf0]">media_url</code> : url to get the photo</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">reviews</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-none pl-5 space-y-2">
                        <li><code className="text-[#0acdf0]">place_id</code> : joins with the place table</li>
                        <li><code className="text-[#0acdf0]">review_text</code> : words from our users and other sources</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="https://andrewma.b-cdn.net/dsc/p2.zip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-[#0acdf0] text-base font-medium rounded-md text-[#0acdf0] hover:bg-[#0acdf0]/10 transition-colors duration-200">
                      <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Track 2 Dataset
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  What You&apos;re Doing
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Create a search system that turns a user&apos;s query (can really be anything) into the places that would best fit that query. Also build a simple UI that can display the results.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    Under the hood, take advantage of the structured information (tags, neighborhood, etc.) as well as the unstructured information (reviews, images). Explore what models are best suited for each task. For example, you might want to look into CLIP embeddings, Modern Bert for text embeddings. Open-source models are preferred but not required.
                  </p>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    The queries in the background section are just fun examples but more practically, how do you solve queries like the following:
                  </p>
                  <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2 mb-4">
                    <li>&ldquo;cafes to cowork from&rdquo; — needs to understand what &ldquo;coworking&rdquo; means; is there wifi, outlets etc.?</li>
                    <li>&ldquo;matcha latte in the east village&rdquo; — needs to be able to find specific menu items like &ldquo;matcha&rdquo; and know that the search bounds should focus on this particular neighborhood.</li>
                    <li>&ldquo;where can I spend a sunny day?&rdquo; — Initially, you might think that the results should show primarily parks but what about cafes or restaurants with outdoor seating or big windows where the sun streams in nicely?</li>
                    <li>what to do this weekend — This is perhaps the most open-ended (but real) query we get. How can we ensure a diverse mix of possible activities for the user to browse? How can we take real world inputs to further improve the results? For example, taking the weather and finding the user cozy libraries and tea shops for a rainy weekend.</li>
                  </ul>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mb-4">
                    The project is roughly broken two parts:
                  </p>
                  <ol className="font-['SuisseIntl'] text-base text-white/80 list-decimal pl-5 space-y-2">
                    <li>Ingestion: How will you design the schema for optimal retrieval? What is the embedding strategy? What parts should you embed vs keep as lexical / sparse data?</li>
                    <li>RAG: How will you perform the retrieval? How do you process a user&apos;s query and either refine it (e.g. filter results into a specific location) or expand it (e.g. when they ask for something vague and you want to show a diverse set of results)? How do you make sure that the search is as fast as possible?</li>
                    <li>Output: How will you display the output? How do you evaluate if your results match the query? Compare your results to google maps to see if they feel better or worse.</li>
                  </ol>
                  <p className="font-['SuisseIntl'] text-base text-white/80 mt-4">
                    Submit a hosted project where we can test your system and make a max 5 minute video demo that highlight the innovations you&apos;ve come up with.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
            <div className="max-w-md lg:max-w-lg">
              <AnimatedSection delay={0.2}>
                <h2 className="font-['Editorial_Old'] text-3xl md:text-4xl lg:text-5xl font-[200] leading-tight tracking-[-0.04em] [font-feature-settings:'dlig'_1] mb-8">
                  Judging Criteria
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="border-t border-white/20 pt-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Technical Solution (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Embedding Strategy</strong>: Effectiveness of chosen embedding techniques for both structured and unstructured data</li>
                        <li><strong>Query Understanding</strong>: System&apos;s ability to interpret nuanced, vibe-based queries beyond keywords</li>
                        <li><strong>Retrieval Accuracy</strong>: How well results match the semantic intent of queries</li>
                        <li><strong>Performance Efficiency</strong>: Speed and resource efficiency of the search solution</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">User Experience (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Result Relevance</strong>: How well results satisfy the user&apos;s actual intent</li>
                        <li><strong>Result Diversity</strong>: Appropriate variety in results for open-ended queries</li>
                        <li><strong>UI/UX Design</strong>: Clarity and appeal of how results are presented</li>
                        <li><strong>Contextual Awareness</strong>: Incorporation of relevant context (time, location, weather, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Implementation Quality (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Code Quality</strong>: Well-structured, documented, maintainable code</li>
                        <li><strong>Architecture Design</strong>: Thoughtful system architecture that balances flexibility and simplicity</li>
                        <li><strong>Data Handling</strong>: Effective preprocessing, cleaning, and utilization of available data</li>
                        <li><strong>Testing & Evaluation</strong>: Robust approach to measuring and validating search quality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Editorial_Old'] text-2xl font-[200] mb-4">Innovation & Insight (25%)</h3>
                      <ul className="font-['SuisseIntl'] text-base text-white/80 list-disc pl-5 space-y-2">
                        <li><strong>Novel Approaches</strong>: Creative techniques for embedding or retrieval beyond standard methods</li>
                        <li><strong>Multi-Modal Integration</strong>: Effective combination of text, image, and structured data</li>
                        <li><strong>Edge Case Handling</strong>: Smart solutions for difficult or ambiguous queries</li>
                        <li><strong>Future Potential</strong>: Scalability and extensibility of the approach to larger datasets or new features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 