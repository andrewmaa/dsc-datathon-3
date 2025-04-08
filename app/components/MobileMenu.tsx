'use client'

import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="block transition-all duration-300 ease-in-out">
      <div className="w-full block text-white text-center uppercase text-sm">
        <ul className="grid grid-cols-1 gap-6 pt-6 pb-6">
          <li>
            <Link 
              href="/products/orchid-limited-pre-release" 
              className="hover:text-neon-green transition-colors relative flex items-center justify-center gap-1.5 py-4 px-6"
              onClick={onClose}
            >
              <span>Orchid</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/collections/shop-all" 
              className="hover:text-neon-green transition-colors relative flex items-center justify-center gap-1.5 py-4 px-6"
              onClick={onClose}
            >
              <span>Shop All</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/pages/support" 
              className="hover:text-neon-green transition-colors relative flex items-center justify-center gap-1.5 py-4 px-6"
              onClick={onClose}
            >
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
} 