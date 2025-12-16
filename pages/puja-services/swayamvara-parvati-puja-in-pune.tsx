import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SwayamvaraParvatiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Swayamvara Parvati Puja in Pune',
        description: 'Book Pandit for Swayamvara Parvati Puja in Pune. The most potent Vedic remedy for delayed marriage and finding a soulmate.',
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
            price: '3500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '110'
        }
    }

    return (
        <>
            <Head>
                <title>Swayamvara Parvati Puja in Pune | Find Soulmate</title>
                <meta name="description" content="Book Pandit for Swayamvara Parvati Puja in Pune. The exact ritual performed by Goddess Parvati to get Lord Shiva as her husband. Removes all marriage obstacles." />
                <meta name="keywords" content="swayamvara parvati puja pune, mantra for love marriage, marriage delay remedy, parvati puja for husband" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/swayamvara-parvati-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-green-50 to-white">
                <section className="relative bg-emerald-700 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1.5">
                                    <span className="text-emerald-100 text-sm font-semibold tracking-wide uppercase">Ultimate Marriage Remedy</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Swayamvara Parvati <br />
                                    <span className="text-yellow-300">Destined Union</span>
                                </h1>
                                <p className="text-lg text-emerald-100/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    This is the <strong>most powerful</strong> homa in Vedic astrology for marriage. Legend says Parvati used this very mantra to overcome all penance obstacles and marry Lord Shiva.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Soulmate Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Swayamvara%20Parvati%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-emerald-800 border-b-2 border-yellow-400 pb-2">Vedic Importance</h2>
                                <p>
                                    Sage Agastya gave this powerful mantra (Swayamvara Parvati Moola Mantra) to the world. It works by creating a powerful magnetic vibration that attracts the <strong className="text-emerald-700">"destined soulmate"</strong> towards the devotee.
                                </p>
                                <p>
                                    It is more intense than Katyayani Puja and targets the root karmic blocks (Sarp Dosh/Pitru Dosh) affecting marriage.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-emerald-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌿</span> Why This Homa?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Extreme Delays</h4>
                                            <p className="text-sm text-gray-600">For those over 30/35 years of age unable to find a match.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Second Marriage</h4>
                                            <p className="text-sm text-gray-600">Helps widows/divorcees find a partner and happiness again.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Conceive Child</h4>
                                            <p className="text-sm text-gray-600">Often performed by couples to bless them with a child.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-emerald-800">The Mantra Ritual</h2>
                                <p className="text-gray-600">Duration: <strong>3 Hours</strong> (Includes 1008 Chants).</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Swayamvara Sankalp</h4>
                                            <p className="text-sm text-gray-600">Taking a specific vow for marriage within a specific timeframe.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Moola Mantra Japa</h4>
                                            <p className="text-sm text-gray-600">Reciting the complex Swayamvara Parvati Moola Mantra 1008 times with focus.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Havan</h4>
                                            <p className="text-sm text-gray-600">Offering various herbs, ghee, and Payasam (sweet rice) to Agni.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Mala Wearing</h4>
                                            <p className="text-sm text-gray-600">Panditji energizes a Mala which the devotee has to wear or keep.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-green-50 p-8 rounded-2xl border border-green-100">
                                <h2 className="text-2xl font-serif font-bold text-green-900 mb-4">Mantra Power</h2>
                                <p className="text-gray-700 italic">
                                    "Om Hreem Yoginim Yogini Yogeshwari Yoga Bhayankari Sakala Sthavara Jangamasya Mukha Hridayam Mama Vasham Akarsha Akarsha Swaha."
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How many times should I chant?", a: "We do 1008 times in the Homa. You should chant 108 times daily for 48 days for best results." },
                                        { q: "Difference from Gauri Puja?", a: "Gauri is for general blessings. This is specifically a Tantric/Vedic remedy for impossible delays." },
                                        { q: "Cost of Swayamvara Parvati Puja?", a: "Starts from ₹3,500 due to extensive chanting." },
                                        { q: "Can I do it online?", a: "Yes, you can join on video call while our Pandits perform the Homa." },
                                        { q: "Best day?", a: "Mondays, Fridays, or Panchami Tithi." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-emerald-300 transition-colors">
                                            <p className="font-bold text-emerald-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Swayamvara Parvati Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-200">
                                    <div className="bg-emerald-800 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-emerald-900">₹3,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-yellow-600 font-bold mt-1">✔ Includes Mantra Japa</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-emerald-900">3 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-emerald-900">Mantra Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-emerald-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Swayamvara%20Parvati%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Trusted by 1000+ Singles
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-emerald-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Correct Pronunciation
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Result Oriented
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-emerald-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Your Soulmate Awaits</h2>
                        <p className="text-emerald-200 mb-8 max-w-2xl mx-auto">
                            Let the divine energy guide you to your perfect match.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
