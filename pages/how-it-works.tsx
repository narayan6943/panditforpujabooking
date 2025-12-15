import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Browse Services',
      description: 'Explore our 40+ puja services and 20+ astrology services. Find the perfect service for your needs.',
      icon: '🔍',
    },
    {
      number: '2',
      title: 'Select & Book',
      description: 'Choose your preferred service, date, and time. Fill out the simple booking form with your details.',
      icon: '📅',
    },
    {
      number: '3',
      title: 'Get Confirmed',
      description: 'Receive instant confirmation with pandit details. Our team will contact you to finalize arrangements.',
      icon: '✓',
    },
    {
      number: '4',
      title: 'Enjoy Service',
      description: 'Our verified pandit arrives on time and performs the puja with complete devotion and authenticity.',
      icon: '🙏',
    },
  ]

  return (
    <>
      <Head>
        <title>How It Works | PanditForPujaBooking.com - Simple Booking Process</title>
        <meta
          name="description"
          content="Learn how easy it is to book a pandit through PanditForPujaBooking.com. Simple 4-step process to get verified pandits for your puja needs."
        />
      </Head>

      <Header />

      <main>
        <div className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Book your pandit in just 4 simple steps
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-saffron-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Verified Pandits',
                  'Transparent Pricing',
                  'Same-Day Booking',
                  '24/7 Support',
                  'Authentic Rituals',
                  'Easy Online Payment',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-saffron-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Book your pandit today and experience the convenience
              </p>
              <Link href="/puja-services">
                <Button variant="primary" size="lg">
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

