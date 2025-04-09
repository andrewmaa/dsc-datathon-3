'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div 
        className="bg-[#353535]/50 backdrop-blur-[80px] rounded-b-3xl w-max mx-auto overflow-hidden"
        initial={{ paddingTop: 0 }}
        animate={{ paddingTop: mobileMenuOpen ? 32 : 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <header className="h-[--mast-height] w-full">
          <div className="flex justify-between items-center h-full px-4 sm:px-10 md:px-12 py-3">
            <div className="flex items-center gap-8">
              <button 
                className="block lg:hidden relative flex items-center text-white size-6 z-[60]"
                title="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {!mobileMenuOpen ? (
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6C2.5 5.44772 2.94772 5 3.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7H3.5C2.94772 7 2.5 6.55228 2.5 6ZM2.5 12C2.5 11.4477 2.94772 11 3.5 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H3.5C2.94772 13 2.5 12.5523 2.5 12ZM2.5 18C2.5 17.4477 2.94772 17 3.5 17H21.5C22.0523 17 22.5 17.4477 22.5 18C22.5 18.5523 22.0523 19 21.5 19H3.5C2.94772 19 2.5 18.5523 2.5 18Z" fill="white"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-6" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.41107 4.41058C4.73651 4.08514 5.26414 4.08514 5.58958 4.41058L10.0003 8.82133L14.4111 4.41058C14.7365 4.08514 15.2641 4.08514 15.5896 4.41058C15.915 4.73602 15.915 5.26366 15.5896 5.58909L11.1788 9.99984L15.5896 14.4106C15.915 14.736 15.915 15.2637 15.5896 15.5891C15.2641 15.9145 14.7365 15.9145 14.4111 15.5891L10.0003 11.1783L5.58958 15.5891C5.26414 15.9145 4.73651 15.9145 4.41107 15.5891C4.08563 15.2637 4.08563 14.736 4.41107 14.4106L8.82181 9.99984L4.41107 5.58909C4.08563 5.26366 4.08563 4.73602 4.41107 4.41058Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
              <Link href="/" className="flex items-center">
                <span className="text-white text-2xl font-bold font-['Suisse_Intl'] lowercase flex items-center mr-3">dsc</span>
                <span className="text-white text-2xl font-[200] flex items-center" style={{ marginTop: '-0.2em', marginRight: '-0.7em' }}>×</span>
                <div className="flex items-center min-w-[140px]">
                  <Image
                    src="https://andrewma.b-cdn.net/images/dsc/corner.png"
                    alt="CORNER"
                    width={200}
                    height={40}
                    className="h-8 w-auto object-contain"
                    style={{ minWidth: '140px', marginTop: '-0.25em' }}
                  />
                </div>
              </Link>
            </div>

            <nav className="flex items-center w-full">
              <div className="hidden items-center w-full h-full lg:flex">
                <ul className="flex justify-end gap-9 h-full text-sm text-white w-full">
                  <li className="flex items-center h-full group">
                    <div className="relative uppercase">
                      <Link 
                        href="/#tracks-section"
                        className="hover:text-[#0acdf0] font-mono transition-colors relative flex items-center gap-1.5 py-2 px-1.5 rounded-sm parent-link"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetId = 'tracks-section';
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <span className="flex-shrink-0">Tracks</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center h-full group">
                    <div className="relative uppercase">
                      <Link href="/register" className="hover:text-[#0acdf0] font-mono transition-colors relative flex items-center gap-1.5 py-2 px-1.5 rounded-sm parent-link">
                        <span className="flex-shrink-0">Register</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center h-full group">
                    <div className="relative uppercase">
                      <Link href="/schedule" className="hover:text-[#0acdf0] font-mono transition-colors relative flex items-center gap-1.5 py-2 px-1.5 rounded-sm parent-link">
                        <span className="flex-shrink-0">Schedule</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center h-full group">
                    <div className="relative uppercase">
                      <Link href="/support" className="hover:text-[#0acdf0] font-mono transition-colors relative flex items-center gap-1.5 py-2 px-1.5 rounded-sm parent-link">
                        <span className="flex-shrink-0">Support</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </motion.div>
    </motion.div>
  )
} 