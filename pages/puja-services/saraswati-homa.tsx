import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SaraswatiHomaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Saraswati Homa in Pune',
        description: 'Book Pandit for Saraswati Homa in Pune. Best puja for students exams success, memory power, and artistic skills.',
        provider: {
            '@type': 'LocalBusiness',
            name: 'PanditForPujaBooking.com',
            telephone: '+91-8446272142',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
            },
        },
        areaServed: {
            '@type': 'City',
            name: 'Pune',
        },
        offers: {
            '@type': 'Offer',
            price: '3100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '85'
        }
    }

    return (
        <>
            <Head>
                <title>Saraswati Homa in Pune | For Education & Exams</title>
                <meta name="description" content="Book Pandit for Saraswati Homa in Pune. The ultimate Vedic ritual for students success in exams, sharpening memory, and artistic mastery." />
                <meta name="keywords" content="saraswati homa pune, puja for exam success, vidya arambham puja, saraswati puja for students" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/saraswati-homa" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-yellow-50 to-white">
                <section className="relative bg-yellow-400 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-50 text-sm font-semibold tracking-wide uppercase">Goddes of Knowledge</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Saraswati Homa <br />
                                    <span className="text-white/90">Master Your Exams</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-white pl-4 leading-relaxed">
                                    Whether it's Board exams, NEET, JEE, or learning music/arts—Maa Saraswati is the source of all wisdom. This Homa removes mental blocks and sharpens memory.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold shadow-lg shadow-yellow-600/20 border-none">
                                        Book for Success
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Saraswati%20Homa" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                            Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-12">

                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-yellow-800 border-b-2 border-yellow-400 pb-2">Why Saraswati Homa?</h2>
                                <p>
                                    "Saraswati" means the one who flows (like a river of knowledge). For students struggling with concentration, low memory, or exam fear, invoking Her fire energy (Homa) burns away sloth and ignorance (Tamas).
                                </p>
                                <p>
                                    It is also essential for those starting a new course or learning a new art (Vidya Arambham).
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-yellow-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">📚</span> Student Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sharper Memory</h4>
                                            <p className="text-sm text-gray-600">Enhances 'Medha Shakti' (Retention power) for remembering syllabus.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Exam Confidence</h4>
                                            <p className="text-sm text-gray-600">Removes fear, anxiety, and 'blanking out' during papers.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Speech & Logic</h4>
                                            <p className="text-sm text-gray-600">Blesses Vaak Siddhi—great for law students and debaters.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-yellow-800">The Ritual Vidhi</h2>
                                <p className="text-gray-600">Duration: <strong>2 - 2.5 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-yellow-900">Ganpati & Navagraha</h4>
                                            <p className="text-sm text-gray-600">Pacifying Mercury (Budh) and Jupiter (Guru) for intelligence.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-yellow-900">Saraswati Ahuti</h4>
                                            <p className="text-sm text-gray-600">Offering white flowers, honey, and ghee into Agni with the 'Saraswati Moola Mantra'.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-yellow-900">Book/Pen Blessing</h4>
                                            <p className="text-sm text-gray-600">Placing the student's books, pens, or musical instruments near the Havan for consecration.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-yellow-900">Medha Suktam</h4>
                                            <p className="text-sm text-gray-600">Chanting the Vedic hymn for intellect and wisdom.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-4">Exam Season Special</h2>
                                <p className="text-gray-700 mb-4">
                                    During Board Exams (Feb-March), we offer special short versions of this puja (Sankalp Puja) for students who cannot sit for long durations.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-yellow-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Best day for Saraswati Homa?", a: "Saraswati Puja day (Vasant Panchami), Thursdays, or Moola Nakshatra." },
                                        { q: "Can my child sit for the puja?", a: "Yes, it is highly recommended for the child to resolve (Sankalp) and offer Ahutis." },
                                        { q: "Cost of the Homa?", a: "Starts from ₹3,100." },
                                        { q: "Is it good for artists?", a: "Yes, for musicians, dancers, and writers, it removes creative blocks." },
                                        { q: "What samagri?", a: "White clothes, white flowers, and honey are key items." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors">
                                            <p className="font-bold text-yellow-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Saraswati Homa" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                                    <div className="bg-yellow-500 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-yellow-800">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Includes Study Materials Blessing</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-yellow-800">2.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-yellow-800">Friendly with Kids</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-white text-yellow-600 border border-yellow-200 hover:bg-yellow-50 shadow-md">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Saraswati%20Homa">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Trusted by Toppers
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-yellow-800 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Medha Sukta Expert
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Encouraging Atmosphere
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-yellow-600 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Unlock Your Potential</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            Knowledge is the greatest wealth. Secure it with divine grace.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-white text-yellow-800 hover:bg-yellow-50 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
