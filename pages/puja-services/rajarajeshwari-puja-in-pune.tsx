import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RajarajeshwariPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Rajarajeshwari Puja in Pune',
        description: 'Book Pandit for Rajarajeshwari Puja in Pune. The supreme worship of Sri Vidya for absolute power, wealth, and spiritual liberation.',
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
            ratingValue: '5.0',
            reviewCount: '30'
        }
    }

    return (
        <>
            <Head>
                <title>Rajarajeshwari Puja in Pune | Supreme Sri Vidya</title>
                <meta name="description" content="Book Pandit for Rajarajeshwari Puja (Sri Vidya) in Pune. The ultimate worship for high-level politicians, spiritual seekers, and seekers of absolute power." />
                <meta name="keywords" content="rajarajeshwari puja pune, sri vidya puja, lalita sahasrநாம puja, puja for supreme power" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/rajarajeshwari-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-purple-50 to-white">
                <section className="relative bg-purple-800 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Supreme Sri Vidya</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Maa Rajarajeshwari <br />
                                    <span className="text-yellow-400">Queen of Cosmos</span>
                                </h1>
                                <p className="text-lg text-purple-100/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Also known as Lalita Tripurasundari. This is the highest form of worship in Shakta tradition (Sri Vidya). It bestows royal power, absolute command, and ultimate liberation (Moksha).
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-purple-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Supreme Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rajarajeshwari%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-purple-900 border-b-2 border-yellow-400 pb-2">The Pinnacle of Worship</h2>
                                <p>
                                    Rajarajeshwari sits on the "Pancha Pretas" (Brahma, Vishnu, Rudra, Ishana, Sadasiva), signifying her control over the entire act of creation, preservation, and destruction.
                                </p>
                                <p>
                                    This puja is not for small materialistic gains but for <strong>Total Sovereignty</strong> over ones life and surroundings. It involves complex rituals, Sri Chakra Archana, and high-vibration mantras.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">👑</span> Royal Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-900 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Absolute Power</h4>
                                            <p className="text-sm text-gray-600">Grants command over people and situations (Vashikaran of positive kind).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-900 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Infinite Wealth</h4>
                                            <p className="text-sm text-gray-600">Her glance (Kataksha) created Lakshmi; thus wealth is a natural byproduct.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-900 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Moksha (Liberation)</h4>
                                            <p className="text-sm text-gray-600">For spiritual seekers, it opens the Sahasrara Chakra for realization.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-purple-900">Sri Vidya Rituals</h2>
                                <p className="text-gray-600">Duration: <strong>3 - 4 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                                        <div className="min-w-[40px] font-bold text-purple-800 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Sri Chakra Archana</h4>
                                            <p className="text-sm text-gray-600">Worshipping the geometric representation (Yantra) of the Goddess with Kumkum (Kumkumarchana).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                                        <div className="min-w-[40px] font-bold text-purple-800 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Lalita Sahasranama</h4>
                                            <p className="text-sm text-gray-600">Chanting the 1000 names of the Divine Mother which describe her complete nature.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                                        <div className="min-w-[40px] font-bold text-purple-800 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Suvasini Puja</h4>
                                            <p className="text-sm text-gray-600">Worshipping a married woman as the living embodiment of the Goddess.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                                        <div className="min-w-[40px] font-bold text-purple-800 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Mahanyasam</h4>
                                            <p className="text-sm text-gray-600">Specific Nyasa rituals to invoke divinity into one's own body before puja.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-purple-100 p-8 rounded-2xl border border-purple-200">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">Strict Purity Required</h2>
                                <p className="text-gray-700 mb-4">
                                    This puja requires high levels of external (physical) and internal (mental) purity. Our Pandits are specially initiated into Sri Vidya to perform this safely.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-purple-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Who should do this?", a: "CEOs, Politicians, Spiritual Heads, and those facing massive life challenges." },
                                        { q: "Is it dangerous?", a: "No, she is the Mother. But it commands respect and strict adherence to vidhi." },
                                        { q: "Cost of Sri Vidya Puja?", a: "Starts from ₹5,100 due to complexity and duration." },
                                        { q: "Best day?", a: "Purnima (Full Moon) and Fridays." },
                                        { q: "Can we keep Sri Chakra?", a: "Only if you can worship it daily. Otherwise, worship the photo." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
                                            <p className="font-bold text-purple-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Rajarajeshwari Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200">
                                    <div className="bg-purple-800 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-purple-900">₹5,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-yellow-600 font-bold mt-1">✔ Sri Vidya Tradition</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-purple-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-purple-900">Sri Vidya Upasaka</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rajarajeshwari%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Supreme Confidentiality
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-purple-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Initiated Pandits
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Yantras
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-purple-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Attain The Supreme</h2>
                        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
                            When the Empress smiles, the Universe obeys.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-purple-900 hover:bg-yellow-400 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
