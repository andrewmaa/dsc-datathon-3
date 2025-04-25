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