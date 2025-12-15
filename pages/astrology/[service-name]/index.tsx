import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getAstrologyData, allAstrologyServices } from '@/data/astrology-services'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allAstrologyServices.map((service) => ({
    params: { 'service-name': service },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const serviceName = params?.['service-name'] as string
  const service = getAstrologyData(serviceName)

  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      service,
    },
  }
}

export default function AstrologyServicePage({ service }: { service: any }) {
  // We removed the client-side router hook and checks because we now have data via props

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'PanditForPujaBooking.com',
    },
  }

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <main>
        <nav className="bg-gray-50 py-4">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-saffron-600">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/astrology" className="text-gray-600 hover:text-saffron-600">
                Astrology
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{service.title}</span>
            </div>
          </div>
        </nav>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                {service.h1}
              </h1>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">{service.intro}</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Service Details
                </h2>
                <ul className="space-y-3">
                  {service.serviceDetails.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-saffron-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8 bg-saffron-50 rounded-lg p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Cost & Duration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Cost:</span>
                    <p className="text-xl font-semibold text-gray-900">{service.cost}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Duration:</span>
                    <p className="text-xl font-semibold text-gray-900">{service.duration}</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Who Should Book
                </h2>
                <p className="text-gray-700 leading-relaxed">{service.whoShouldBook}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Book Service</h3>
                  <a href="tel:+918446272142" className="block w-full bg-saffron-600 text-white text-center py-3 rounded-lg font-bold hover:bg-saffron-700 transition-colors mb-4">
                    Call +91-8446272142
                  </a>
                  <a href="https://wa.me/918446272142" className="block w-full border-2 border-green-500 text-green-600 text-center py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
