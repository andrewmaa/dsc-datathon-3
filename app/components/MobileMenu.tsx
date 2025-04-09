'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  isAuthenticated: boolean;
}

export default function MobileMenu({ isOpen, onClose, onLogout, isAuthenticated }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 150, 
            damping: 25
          }}
          className="block overflow-hidden"
        >
          <nav className="w-full block text-white text-center uppercase text-sm">
            <ul className="grid grid-cols-1 gap-5 pb-4">
              <li>
                <Link
                  href="/tracks"
                  className="font-mono text-sm hover:text-[#0acdf0] transition-colors relative flex items-center justify-center gap-1.5 px-1"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = 'tracks-section';
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    onClose(); // Close menu after clicking
                  }}
                >
                  <span>Tracks</span>
                </Link>
              </li>
              
              <li>
                <Link
                  href="/schedule"
                  className="font-mono text-sm hover:text-[#0acdf0] transition-colors relative flex items-center justify-center gap-1.5 px-1"
                  onClick={onClose}
                >
                  <span>Schedule</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="font-mono text-sm hover:text-[#0acdf0] transition-colors relative flex items-center justify-center gap-1.5 px-1"
                  onClick={onClose}
                >
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="font-mono text-sm hover:text-[#0acdf0] transition-colors relative flex items-center justify-center gap-1.5 px-1"
                  onClick={onClose}
                >
                  <span>Register</span>
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <button
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="font-mono text-sm hover:text-[#0acdf0] transition-colors relative flex items-center justify-center gap-1.5 px-1 w-full cursor-pointer"
                  >
                    <span>LOGOUT</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 