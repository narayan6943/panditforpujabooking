import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function About() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Us - PanditForPujaBooking.com',
    description: 'Learn about PanditForPujaBooking.com - Pune\'s trusted platform for booking verified pandits for pujas and astrology services.',
  }

  return (
    <>
      <Head>
        <title>About Us | PanditForPujaBooking.com - Trusted Pandit Booking Platform</title>
        <meta
          name="description"
          content="Learn about PanditForPujaBooking.com - Pune's trusted platform for booking verified pandits. Our mission, vision, and commitment to authentic spiritual services."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <main>
        <div className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              About PanditForPujaBooking.com
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner for authentic spiritual services in Pune
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At PanditForPujaBooking.com, our mission is to make authentic spiritual services
              accessible to everyone in Pune. We understand that finding the right pandit for
              your puja or astrology needs can be time-consuming and challenging. That's why we've
              created a platform that connects you with verified, experienced pandits in just 2 minutes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to preserving traditional Vedic practices while making them
              accessible through modern technology. Every pandit on our platform is carefully
              verified, ensuring you receive authentic, high-quality spiritual services.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We envision a future where authentic spiritual services are just a click away.
              Our goal is to become Pune's most trusted platform for pandit bookings, serving
              thousands of families with verified, professional spiritual services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We aim to reduce booking time from 20 minutes (traditional phone calls) to just
              2 minutes (online booking), while increasing booking volume and ensuring customer
              satisfaction through transparency and quality.
            </p>
          </section>

          {/* Why We Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why We Started</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The idea for PanditForPujaBooking.com came from a simple observation: finding a
              reliable pandit for important ceremonies was often a frustrating experience. People
              would spend hours calling multiple contacts, asking for recommendations, and still
              not be sure about the pandit's authenticity or pricing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We decided to solve this problem by creating a platform that:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4 ml-4">
              <li>Verifies all pandits through background checks and experience validation</li>
              <li>Provides transparent pricing with no hidden charges</li>
              <li>Offers same-day booking for urgent needs</li>
              <li>Ensures authentic Vedic practices and traditional rituals</li>
              <li>Provides 24/7 customer support</li>
            </ul>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authenticity',
                  description: 'We ensure all pandits follow authentic Vedic traditions and practices.',
                },
                {
                  title: 'Transparency',
                  description: 'Clear pricing, verified credentials, and honest communication.',
                },
                {
                  title: 'Reliability',
                  description: 'Verified pandits, same-day availability, and guaranteed service quality.',
                },
                {
                  title: 'Respect',
                  description: 'We respect all spiritual beliefs and traditions equally.',
                },
                {
                  title: 'Excellence',
                  description: 'Continuous improvement in service quality and customer satisfaction.',
                },
                {
                  title: 'Accessibility',
                  description: 'Making spiritual services accessible to everyone, anytime.',
                },
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16 bg-saffron-50 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Verified Pandits' },
                { number: '2 Min', label: 'Average Booking Time' },
                { number: '98%', label: 'Customer Satisfaction' },
                { number: '24/7', label: 'Customer Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-saffron-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready to Book Your Puja?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of satisfied customers who trust us for their spiritual needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/puja-services">
                <Button variant="primary" size="lg">
                  Browse Puja Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

