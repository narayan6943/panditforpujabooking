import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GaneshSthapanaPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ganesh Sthapana Puja in Pune',
        description: 'Book Ganesh Sthapana Puja in Pune for Ganesh Chaturthi. Expert Pandit for Murti Sthapana, Pran Pratishtha, and Uttar Puja (Visarjan).',
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
            price: '2100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '350'
        }
    }

    return (
        <>
            <Head>
                <title>Ganesh Sthapana Puja in Pune | Ganesh Chaturthi Pandit</title>
                <meta name="description" content="Book Pandit for Ganesh Sthapana Puja in Pune. Authentic Pran Pratishtha rituals for Ganesh Chaturthi. Pre-book your slot for Home or Society Mandal." />
                <meta name="keywords" content="ganesh sthapana puja pune, ganesh chaturthi pandit booking, pran pratishtha vidhi, ganpati visarjan puja, ganesh utsav puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/ganesh-sthapana-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-saffron-50/20 to-white">
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Ganpati Bappa Morya</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Ganesh Sthapana Puja <br />
                                    <span className="text-gold-400">Welcome the King</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Celebrate Pune's biggest festival with authentic Vedic rituals. Our expert Pandits perform the "Shodashopachar Puja" (16-step worship) to invoke life (Pran Pratishtha) into your Ganesh idol.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book for Chaturthi
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Sthapana" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Pran Pratishtha is Essential</h2>
                                <p>
                                    Buying an idol is not enough. The idol becomes a deity only after "Pran Pratishtha" is performed by a learned Pandit invoking the correct mantras.
                                </p>
                                <p>
                                    This ritual invites the cosmic consciousness of Lord Ganesha into the clay form, allowing you to establish a direct connection with the divine during the festival.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🐘</span> Festival Blessings
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Education & Wisdom</h4>
                                            <p className="text-sm text-gray-600">Lord Ganesha is the patron of students and intellectuals.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Riddhi & Siddhi</h4>
                                            <p className="text-sm text-gray-600">With Ganesha come his consorts representing Prosperity and Spiritual Power.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Happiness</h4>
                                            <p className="text-sm text-gray-600">"Sukh Karta Dukh Harta" - He brings joy and takes away sorrow.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Rituals We Perform</h2>
                                <p className="text-gray-600">We cover both Sthapana (Arrival) and Uttar Puja (Departure).</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shudhikaran & Sankalp</h4>
                                            <p className="text-sm text-gray-600">Purifying the house and taking a vow to serve the Lord for 1.5, 5, or 10 days.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Pran Pratishtha</h4>
                                            <p className="text-sm text-gray-600">The main ritual of infusing life energy into the idol using Durva grass.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shodashopachar Puja</h4>
                                            <p className="text-sm text-gray-600">Offering 16 items including Modak, Red Flowers, Attar, Yamuna water, etc.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Maha Aarti</h4>
                                            <p className="text-sm text-gray-600">Performing the famous "Jai Dev Jai Dev" aarti with the entire family.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Mandal & Society Booking</h2>
                                <p className="text-gray-700 mb-4">
                                    We also specialize in large-scale pujas for Housing Societies and Sarvajanik Mandals. Our senior Gurujis can perform the daily morning-evening Aarti for all 10 days.
                                </p>
                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    Request Society Quote
                                </Button>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "When should we book?", a: "Book at least 1 month in advance. Slots fill up extremely fast for Chaturthi morning." },
                                        { q: "How much time does it take?", a: "A proper home sthapana takes about 45 minutes to 1 hour." },
                                        { q: "Cost of Sthapana?", a: "Starts from ₹2,100 for home puja. Rates are higher during peak morning hours." },
                                        { q: "Do you also do Visarjan Puja?", a: "Yes, we can send a Pandit for the 'Uttar Puja' before you immerse the idol." },
                                        { q: "What if we don't get a morning slot?", a: "Ganesh Chaturthi entire day is auspicious. Afternoon or evening slots are equally good." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Ganesh Sthapana Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Festive Special</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">45 - 60 Mins</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Ganpati Bhakt</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Sthapana">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Book Early to Avoid Rush
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Pune's Favorite</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 1000+ Bookings
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Punctual Gurujis
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Book For Chaturthi</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Slots are limited. Secure your Panditji for the festival today.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
