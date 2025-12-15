import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { allPanditProfiles, getPanditData } from '@/data/pandit-profiles'

export default function PanditsIndex() {
  // Get top 12 detailed pandits
  const topPandits = allPanditProfiles.slice(0, 12)
  const allPandits = allPanditProfiles

  return (
    <>
      <Head>
        <title>Our Pandits - Verified Pandits in Pune | PanditForPujaBooking.com</title>
        <meta
          name="description"
          content="Browse 50+ verified pandits in Pune. Expert in Griha Pravesh, Marriage, Lakshmi Puja, and all Hindu rituals. Book your pandit online today."
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-saffron-50 via-white to-gold-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Our Verified Pandits
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Choose from 50+ verified, experienced pandits in Pune. All our pandits are background-checked
                and specialize in authentic Hindu rituals and ceremonies.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Pandits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Featured Pandits
              </h2>
              <p className="text-lg text-gray-600">
                Our most experienced and highly-rated pandits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topPandits.map((slug) => {
                const pandit = getPanditData(slug)
                const displayName = slug
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                  .replace(/Ji/g, ' Ji')

                return (
                  <Link
                    key={slug}
                    href={`/pandits/profile/${slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">प</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{displayName}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Expert in Vedic rituals and ceremonies
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <span>⭐ 4.8+</span>
                        <span>•</span>
                        <span>50+ Reviews</span>
                      </div>
                      <div className="mt-4">
                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Pandits Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                All Pandits ({allPandits.length})
              </h2>
              <p className="text-lg text-gray-600">
                Browse our complete directory of verified pandits
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allPandits.map((slug) => {
                const displayName = slug
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                  .replace(/Ji/g, ' Ji')

                return (
                  <Link
                    key={slug}
                    href={`/pandits/profile/${slug}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 text-center border border-gray-200"
                  >
                    <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">प</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {displayName}
                    </h4>
                    <p className="text-xs text-gray-500">View Profile</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-saffron-600 to-saffron-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Book a Pandit?
            </h2>
            <p className="text-xl mb-4 opacity-90">
              Browse our puja services or contact us directly
            </p>
            <p className="text-lg mb-8 opacity-90">
              Call us at <a href="tel:+918446272142" className="font-bold underline hover:opacity-80">+91-8446272142</a> for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/puja-services">
                <Button variant="secondary" size="lg">
                  Browse Puja Services
                </Button>
              </Link>
              <a href="tel:+918446272142">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

