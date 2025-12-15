import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-maroon-950 text-gold-100 border-t-8 border-gold-600 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-mandala-dark opacity-5 pointer-events-none"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-maroon-900 font-bold text-xl">प</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-white">
                  PanditForPuja
                </span>
                <span className="text-xs text-gold-300">Booking.com</span>
              </div>
            </div>
            <p className="text-sm text-gold-100/80 leading-relaxed">
              Trusted by 10,000+ families. Certified Vedic pandits for Griha Pravesh, Satyanarayan, and all 16 Sanskars. Authentic rituals with complete samagri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4 tracking-wide border-b border-gold-800 pb-2 inline-block">Puja Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/puja-services/griha-pravesh-puja" className="hover:text-white transition-colors">
                  Griha Pravesh
                </Link>
              </li>
              <li>
                <Link href="/puja-services/satyanarayan-puja" className="hover:text-white transition-colors">
                  Satyanarayan Puja
                </Link>
              </li>
              <li>
                <Link href="/puja-services/marriage-puja" className="hover:text-white transition-colors">
                  Marriage Puja
                </Link>
              </li>
              <li>
                <Link href="/puja-services" className="hover:text-white transition-colors text-gold-400">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4 tracking-wide border-b border-gold-800 pb-2 inline-block">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pandit-services/pune" className="hover:text-white transition-colors">
                  Pandit in Pune
                </Link>
              </li>
              <li>
                <Link href="/pandit-services/mumbai" className="hover:text-white transition-colors">
                  Pandit in Mumbai
                </Link>
              </li>
              <li>
                <Link href="/pandit-services/delhi" className="hover:text-white transition-colors">
                  Pandit in Delhi
                </Link>
              </li>
              <li>
                <Link href="/pandit-services/bangalore" className="hover:text-white transition-colors">
                  Pandit in Bangalore
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4 tracking-wide border-b border-gold-800 pb-2 inline-block">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+918446272142" className="hover:text-white transition-colors text-gold-400 font-bold text-lg flex items-center">
                  <span className="mr-2">📞</span> +91-8446272142
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li className="pt-4 flex flex-col space-y-2 text-xs text-gold-100/60">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-900/50 mt-12 pt-8 text-center text-sm">
          <p className="text-gold-200/60">&copy; {currentYear} Pandit For Puja Booking. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 opacity-50">
            <span>🕉️</span> <span>📿</span> <span>🕯️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

