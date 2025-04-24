'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#191919] text-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-x-10 gap-y-28 px-4 sm:px-6 lg:px-10">
        <section className="flex flex-col justify-between gap-10 md:h-[320px] order-last md:order-first">
          <div className="max-w-[500px] w-full grid grid-cols-1 gap-10 ">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-4 bg-white rounded-full px-4">
                <Image src="https://andrewma.b-cdn.net/images/dsc/logo.png" alt="Logo" width={250} height={250} />
              </div>
            </Link>
          </div>
          <p className="text-xs/6 text-left font-mono uppercase text-white-40 ">
            © 2025 Data Science Club @ NYU. Made with ❤️ by <a href="https://www.andrewma.io" target="_blank" className="hover:underline underline-offset-2">Andrew Ma</a>.
          </p>
        </section>

        <section className="flex flex-col justify-between gap-10 md:h-[320px] w-full max-w-md">
          <div className="block font-['SuisseIntl']">
            <h3 className="text-lg/none mb-6">Ready to join us?</h3>
            <Link
              href="/register"
              className="scale-[1.01] inline-block uppercase font-mono text-sm/none outline-none disabled:border group/cta relative border-2 transition-colors border-transparent rounded-[64px] focus-visible:border-neon-green w-full h-12"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-[64px] group-hover/cta:blur-[2px] group-hover/cta:scale-105 transition-all duration-500 bg-white hover:bg-black-20 disabled:bg-black-30 disabled:border-black-30" />
              <div className="inline-flex gap-2 items-center justify-center h-full px-4 relative min-w-[120px] text-black disabled:text-black-50 w-full">
                <span className="m-center-text !leading-none">Register</span>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 transition-transform duration-500 group-hover/cta:translate-x-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.30724 2.86177C8.56759 2.60142 8.9897 2.60142 9.25005 2.86177L13.9167 7.52843C14.1771 7.78878 14.1771 8.21089 13.9167 8.47124L9.25005 13.1379C8.9897 13.3983 8.56759 13.3983 8.30724 13.1379C8.04689 12.8776 8.04689 12.4554 8.30724 12.1951L11.8358 8.6665H4.11198C3.74379 8.6665 3.44531 8.36803 3.44531 7.99984C3.44531 7.63165 3.74379 7.33317 4.11198 7.33317H11.8358L8.30724 3.80458C8.04689 3.54423 8.04689 3.12212 8.30724 2.86177Z" fill="currentColor"/>
                </svg>
              </div>
            </Link>
          </div>

          <div>
            <nav className="grid grid-cols-2 gap-5 text-black-40 text-xs/none font-mono uppercase">
              <ul className="space-y-6 md:space-y-3">
              <li>
                  <Link href="/agreement" className="hover:underline underline-offset-2">
                    <span>Data Usage Agreement</span>
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="hover:underline underline-offset-2">
                    <span>Schedule</span>
                  </Link>
                </li>
              </ul>

              <ul className="space-y-6 md:space-y-3">
                <li>
                  <a href="https://www.instagram.com/dscnyu/" target="_blank" className="hover:underline underline-offset-2">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/6m7GrGHgKH" target="_blank" className="hover:underline underline-offset-2">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/data-science-club-nyu/" target="_blank" className="hover:underline underline-offset-2">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  )
} 