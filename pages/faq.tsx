import React, { useState } from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is PanditForPujaBooking.com?',
          answer: 'PanditForPujaBooking.com is Pune\'s trusted online platform for booking verified pandits for pujas, astrology services, and spiritual ceremonies. We connect you with experienced, authentic pandits in just 2 minutes.',
        },
        {
          question: 'How do I book a pandit?',
          answer: 'Booking is simple! Browse our puja services, select the service you need, fill out the booking form with your preferred date and time, and submit. Our team will confirm your booking and connect you with a verified pandit.',
        },
        {
          question: 'Are all pandits verified?',
          answer: 'Yes, all pandits on our platform undergo a thorough verification process including background checks, experience validation, and credential verification. We ensure only authentic, experienced pandits are listed.',
        },
        {
          question: 'What areas do you serve?',
          answer: 'We primarily serve Pune and surrounding areas. We also provide services in Mumbai, other Maharashtra cities, and can arrange for services across India based on availability.',
        },
      ],
    },
    {
      category: 'Booking & Payment',
      questions: [
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 2-3 days in advance for better availability. However, we also accept same-day bookings when pandits are available.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept online payments through Razorpay (credit/debit cards, UPI, net banking, wallets). You can also pay directly to the pandit after service completion if preferred.',
        },
        {
          question: 'Is there a cancellation policy?',
          answer: 'Yes, you can cancel your booking up to 24 hours before the scheduled time for a full refund. Cancellations within 24 hours may incur a partial charge. Please check our Terms & Conditions for details.',
        },
        {
          question: 'Do you provide receipts or invoices?',
          answer: 'Yes, we provide digital receipts and invoices for all bookings. You can download them from your booking confirmation email or dashboard.',
        },
      ],
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What puja services do you offer?',
          answer: 'We offer 40+ puja services including Griha Pravesh, Lakshmi Puja, Satyanarayan Puja, Marriage Puja, Rudrabhishek, Kaal Sarp Dosh Puja, Office Opening Puja, and many more. Browse our complete list of services.',
        },
        {
          question: 'Do you provide astrology services?',
          answer: 'Yes, we offer 20+ astrology services including Kundli making, horoscope reading, matchmaking, gemstone consultation, and more. All services are performed by verified astrologers.',
        },
        {
          question: 'Can I book a pandit for a specific language?',
          answer: 'Yes, we have pandits who can perform pujas in Marathi, Hindi, Sanskrit, and other languages. Please specify your language preference during booking.',
        },
        {
          question: 'What items do I need to arrange for the puja?',
          answer: 'Our pandit will provide you with a complete list of required items (puja samagri) upon booking confirmation. Most items are available at local shops, or we can arrange them for an additional charge.',
        },
      ],
    },
    {
      category: 'Pandits',
      questions: [
        {
          question: 'How are pandits selected?',
          answer: 'Pandits are selected through a rigorous process including experience verification, background checks, knowledge assessment, and customer feedback. Only experienced, authentic pandits are approved.',
        },
        {
          question: 'Can I see pandit profiles before booking?',
          answer: 'Yes, you can browse our pandit profiles to see their experience, specializations, languages, and customer reviews before making a booking decision.',
        },
        {
          question: 'What if I\'m not satisfied with the pandit?',
          answer: 'Customer satisfaction is our priority. If you\'re not satisfied with the service, please contact us immediately. We\'ll address your concerns and ensure a resolution.',
        },
        {
          question: 'Can I request a specific pandit?',
          answer: 'Yes, if you have a preferred pandit, you can request them during booking. We\'ll try to accommodate your request based on availability.',
        },
      ],
    },
    {
      category: 'Pricing',
      questions: [
        {
          question: 'How much does a puja cost?',
          answer: 'Puja costs vary based on the type of puja, duration, and complexity. Basic pujas start from ₹1,500, while elaborate ceremonies can range up to ₹15,000. All prices are transparent with no hidden charges.',
        },
        {
          question: 'Are there any additional charges?',
          answer: 'The quoted price includes pandit fees and basic puja samagri. Additional charges may apply for premium samagri, travel to distant locations, or special requirements. All charges are disclosed upfront.',
        },
        {
          question: 'Do you offer package deals?',
          answer: 'Yes, we offer package deals for multiple pujas, festival packages, and monthly puja subscriptions. Contact us for custom package pricing.',
        },
        {
          question: 'Is the price negotiable?',
          answer: 'Our prices are fixed and transparent. However, for bulk bookings or special circumstances, please contact us and we\'ll try to accommodate your needs.',
        },
      ],
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap(category =>
      category.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      }))
    ),
  }

  return (
    <>
      <Head>
        <title>FAQ | Frequently Asked Questions - PanditForPujaBooking.com</title>
        <meta
          name="description"
          content="Frequently asked questions about booking pandits, puja services, pricing, and more. Get answers to all your questions about PanditForPujaBooking.com."
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 100 + index
                    const isOpen = openIndex === globalIndex
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md border border-gray-200"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <span className={`text-saffron-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="max-w-4xl mx-auto mt-16 bg-saffron-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-6 py-3 bg-saffron-600 text-white rounded-lg font-semibold hover:bg-saffron-700 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/puja-services">
                <button className="px-6 py-3 border-2 border-saffron-600 text-saffron-600 rounded-lg font-semibold hover:bg-saffron-50 transition-colors">
                  Browse Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

