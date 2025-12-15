import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Hinjewadi, Pune',
      service: 'Griha Pravesh Puja',
      rating: 5,
      text: 'Excellent service! The pandit was very knowledgeable and performed the puja with great devotion. The booking process was smooth and the pricing was transparent. Highly recommended!',
      date: '2 weeks ago',
    },
    {
      name: 'Priya Sharma',
      location: 'Wakad, Pune',
      service: 'Lakshmi Puja',
      rating: 5,
      text: 'I booked Lakshmi puja for my business and the results were amazing. The pandit explained everything clearly and the ceremony was beautiful. My business has seen positive changes since then.',
      date: '1 month ago',
    },
    {
      name: 'Amit Patel',
      location: 'Kothrud, Pune',
      service: 'Satyanarayan Puja',
      rating: 5,
      text: 'Very professional service. The pandit arrived on time, performed the puja authentically, and was very respectful. The online booking made everything so convenient.',
      date: '3 weeks ago',
    },
    {
      name: 'Sunita Desai',
      location: 'Baner, Pune',
      service: 'Marriage Puja',
      rating: 5,
      text: 'We booked our wedding puja through this platform and it was perfect! The pandit was experienced, the rituals were performed correctly, and our family was very happy. Thank you!',
      date: '2 months ago',
    },
    {
      name: 'Vikram Singh',
      location: 'Aundh, Pune',
      service: 'Rudrabhishek Puja',
      rating: 5,
      text: 'Amazing experience! The Rudrabhishek puja was performed with complete devotion. The pandit was very knowledgeable about the rituals. I felt a positive change in my life after the puja.',
      date: '1 month ago',
    },
    {
      name: 'Meera Joshi',
      location: 'Viman Nagar, Pune',
      service: 'Office Opening Puja',
      rating: 5,
      text: 'We opened our new office and booked the puja through this platform. The service was excellent, the pandit was professional, and the ceremony brought positive energy to our workplace.',
      date: '3 weeks ago',
    },
    {
      name: 'Suresh Iyer',
      location: 'Hadapsar, Pune',
      service: 'Kaal Sarp Dosh Puja',
      rating: 5,
      text: 'I had Kaal Sarp dosha in my horoscope and booked the remedy puja. The pandit performed all the rituals correctly and I can see positive changes in my life. Very satisfied!',
      date: '2 months ago',
    },
    {
      name: 'Anjali Reddy',
      location: 'Kharadi, Pune',
      service: 'Diwali Puja',
      rating: 5,
      text: 'Booked Lakshmi-Ganesh puja for Diwali. The pandit was punctual, performed the puja beautifully, and explained the significance of each ritual. Our family was very happy.',
      date: '3 months ago',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Testimonials - PanditForPujaBooking.com',
    description: 'Read customer testimonials and reviews for PanditForPujaBooking.com services.',
  }

  return (
    <>
      <Head>
        <title>Testimonials | Customer Reviews - PanditForPujaBooking.com</title>
        <meta
          name="description"
          content="Read testimonials and reviews from satisfied customers who booked pandits through PanditForPujaBooking.com. Real experiences from Pune residents."
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
              Customer Testimonials
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See what our customers say about our services
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '4.8', label: 'Average Rating' },
              { number: '500+', label: 'Happy Customers' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '50+', label: 'Verified Pandits' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-saffron-600 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-saffron-600">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium text-saffron-600">{testimonial.service}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-saffron-600 to-saffron-700 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your puja today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/puja-services">
                <Button variant="secondary" size="lg">
                  Browse Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  Contact Us
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

