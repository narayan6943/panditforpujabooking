import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NityaHomePujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Nitya Home Puja in Pune',
        description: 'Book Daily Puja Service (Nitya Puja) in Pune. Vedic Pandit visits your home daily/weekly for morning rituals, Abhishekam, and Aarti.',
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
            price: '5100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '110'
        }
    }

    return (
        <>
            <Head>
                <title>Daily Puja Service in Pune | Nitya Pooja by Pandit</title>
                <meta name="description" content="Hire Pandit for Daily Home Puja in Pune. Monthly subscriptions for Nitya Puja, Abhishek, and Aarti. Keep your home spiritually charged every morning." />
                <meta name="keywords" content="daily puja service pune, nitya puja pandit, hire pandit for daily puja, monthly puja subscription, morning aarti service" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/nitya-home-puja" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Monthly Subscription</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Nitya Home Puja <br />
                                    <span className="text-gold-400">Daily Divine Connection</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Busy schedule? Don't let your spiritual duties suffer. Hire a dedicated Vedic Pandit to visit your home daily or weekly to perform the morning rituals (Nitya Karma), ensuring your home remains a temple of peace.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        View Monthly Plans
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20hire%20Pandit%20for%20Daily%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">What is Nitya Puja Service?</h2>
                                <p>
                                    <strong>Nitya Puja</strong> refers to the mandatory daily worship that every household should perform to maintain the sanctity of the home. In today's fast-paced life, many find it difficult to spare 30-45 minutes every morning for a proper <em>Shodashopachara Puja</em> (16-step worship).
                                </p>
                                <p>
                                    Our service bridges this gap. A qualified Brahmin will come to your house every morning at a fixed time to bathe the idols (Abhishek), apply fresh sandalwood/kumkum, offer flowers, and perform the Aarti.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🕉️</span> Benefits of Daily Puja
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Consistency (Niyam)</h4>
                                            <p className="text-sm text-gray-600">God loves consistency. Daily rituals build a strong spiritual shield around the family.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Positive Atmosphere</h4>
                                            <p className="text-sm text-gray-600">The sound of mantras and bells (Ghanta) first thing in the morning dispels laziness and negativity.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Idol Maintenance</h4>
                                            <p className="text-sm text-gray-600">Your Deities (Vigrahas) remain clean, shiny, and properly dressed (Alankaram) every day.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">What the Pandit Ji Does?</h2>
                                <p className="text-gray-600">The daily visit typically lasts <strong>20 to 30 minutes</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Nirmalya Visarjan</h4>
                                            <p className="text-sm text-gray-600">Removing yesterday's old flowers and cleaning the altar.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Abhishekam</h4>
                                            <p className="text-sm text-gray-600">Bathing the idols (Shiva Linga, Ganesha, etc.) with water/milk.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Alankaram & Archana</h4>
                                            <p className="text-sm text-gray-600">Applying Chandan/Kumkum and offering fresh flowers while chanting 108 names.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Naivedya & Aarti</h4>
                                            <p className="text-sm text-gray-600">Offering sugar/jaggery and performing the final Aarti.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Subscription Plans</h2>
                                <p className="text-gray-700 mb-4">
                                    We offer flexible plans to suit your needs and budget.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Daily Plan:</strong> Pandit comes every morning (Mon-Sun).</li>
                                    <li><strong>Weekly Plan:</strong> Pandit comes only on specific days (e.g., Mondays & Thursdays).</li>
                                    <li><strong>Festival Plan:</strong> Pandit comes only during major festivals like Shravan, Ganpati, and Navratri.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">👴 For Elderly Parents</h3>
                                    <p className="text-sm text-gray-600">
                                        If your parents are old and can't manage the daily cleaning of the temple, this service is a perfect gift for their spiritual peace.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">✈️ For NRIs</h3>
                                    <p className="text-sm text-gray-600">
                                        Own a home in Pune but live abroad? We can visit your locked home periodically to light the lamp and keep the energy alive.
                                    </p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How much does it cost per month?", a: "Daily visits start from ₹5,100 per month. Weekly 2 visits start from ₹2,100 per month. Depends on location and duration." },
                                        { q: "Do we need to provide flowers?", a: "Yes, usually the host provides fresh flowers. However, we can arrange a flower subscription for an extra charge." },
                                        { q: "Will the same Pandit come every day?", a: "Yes, we assign a dedicated Pandit to your family to build a rapport. In case of emergency, a substitute is sent." },
                                        { q: "What keeps time?", a: "Usually between 6 AM to 10 AM. You can choose a slot that works for you." },
                                        { q: "Is Dakshina included?", a: "The monthly fee covers the Pandit's Dakshina and Travel. You don't need to pay daily." },
                                        { q: "Can we cancel anytime?", a: "Yes, it's a monthly renewal service. You can pause or cancel with 1 week's notice." },
                                        { q: "Do you serve all areas?", a: "Currently, this daily service is available in Kothrud, Baner, Aundh, Kalyani Nagar, Viman Nagar, and Kharadi due to high demand." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Nitya Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Plan Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Monthly Plans from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹2,100<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">For Weekly Visits</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Daily Visit Cost</span>
                                                <span className="font-bold text-maroon-900">~ ₹5,100/mo</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">20-30 Mins/Day</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">How to Start?</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Call Us</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Set Time Slot</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Pandit Visits</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Discuss
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20discuss%20Daily%20Puja%20Plan">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Trusted Background Verified Pandits
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Subscribe?</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Maintain Tradition
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Spiritual Discipline
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Bring Divinity Home Every Day</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Slots are limited for daily visits. Call now to reserve a Pandit for your area.
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
