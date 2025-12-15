import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { allAstrologyServices, getAstrologyData } from '@/data/astrology-services'

export default function AstrologyIndex() {
  const services = allAstrologyServices.map(slug => ({
    slug,
    ...getAstrologyData(slug),
  }))

  return (
    <>
      <Head>
        <title>Astrology Services in Pune | Expert Astrologers Online</title>
        <meta
          name="description"
          content="Book expert astrologers in Pune for kundli making, horoscope reading, matchmaking, gemstone consultation, and all astrology services. Same-day booking available."
        />
      </Head>

      <Header />

      <main>
        <div className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Astrology Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert astrology services by verified astrologers in Pune
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/astrology/${service.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-saffron-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {service.metaDescription}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-saffron-600 font-semibold">{service.cost}</span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

