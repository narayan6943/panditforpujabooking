import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-saffron-900 shadow-lg sticky top-0 z-50 border-b border-gold-500/30">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center border-2 border-white/20 shadow-inner">
              <span className="text-maroon-900 font-bold text-xl">प</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-white tracking-wide">
                PanditForPuja
              </span>
              <span className="text-xs text-gold-200 uppercase tracking-wider">Booking.com</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gold-100 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/puja-services" className="text-gold-100 hover:text-white transition-colors font-medium">
              Puja Services
            </Link>
            <Link href="/astrology" className="text-gold-100 hover:text-white transition-colors font-medium">
              Astrology
            </Link>
            <Link href="/pandits" className="text-gold-100 hover:text-white transition-colors font-medium">
              Our Pandits
            </Link>
            <Link href="/muhurat-calendar" className="text-gold-100 hover:text-white transition-colors font-medium">
              Muhurat Calendar
            </Link>
            <Link href="/blog" className="text-gold-100 hover:text-white transition-colors font-medium">
              Blog
            </Link>
            <a href="tel:+918446272142" className="text-gold-400 hover:text-gold-300 font-bold whitespace-nowrap">
              📞 +91-8446272142
            </a>
            <Button variant="primary" size="md" href="/puja-services" asLink className="shadow-gold-900/20">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gold-200 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <Link href="/" className="block text-gold-100 hover:text-white">
              Home
            </Link>
            <Link href="/puja-services" className="block text-gold-100 hover:text-white">
              Puja Services
            </Link>
            <Link href="/astrology" className="block text-gold-100 hover:text-white">
              Astrology
            </Link>
            <Link href="/pandits" className="block text-gold-100 hover:text-white">
              Our Pandits
            </Link>
            <Link href="/muhurat-calendar" className="block text-gold-100 hover:text-white">
              Muhurat Calendar
            </Link>
            <Link href="/blog" className="block text-gold-100 hover:text-white">
              Blog
            </Link>
            <a href="tel:+918446272142" className="block text-gold-400 hover:text-gold-300 font-bold py-2">
              📞 +91-8446272142
            </a>
            <Button variant="primary" size="md" className="w-full" href="/puja-services" asLink>
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

