import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DussehraPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dussehra Puja in Pune',
        description: 'Book Pandit for Dussehra (Dasara) Puja in Pune. Authentic Ayudha Puja (Weapon/Tool Worship), Saraswati Puja, and Vijayadashami rituals.',
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
            ratingValue: '4.9',
            reviewCount: '410'
        }
    }

    return (
        <>
            <Head>
                <title>Dussehra Puja in Pune | Ayudha & Saraswati Puja</title>
                <meta name="description" content="Book Pandit for Dussehra Puja in Pune. Vijayadashami rituals including Ayudha Puja (Shastra Pujan) and Saraswati Pujan. Celebrate victory & success." />
                <meta name="keywords" content="dussehra puja pune, ayudha puja pandit, dasara puja booking, saraswati puja vijayadashami, shastra pujan pune" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/dussehra-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-yellow-50/20 to-white">
                <section className="relative bg-yellow-600 text-maroon-900 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-maroon-900/10 border border-maroon-900/20 rounded-full px-4 py-1.5">
                                    <span className="text-maroon-900 text-sm font-semibold tracking-wide uppercase">Victory Day</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Dussehra Puja <br />
                                    <span className="text-yellow-100">Vijayadashami Rituals</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-maroon-900 pl-4 leading-relaxed">
                                    Celebrate the victory of Good over Evil. Perform Ayudha Puja (Tools Worship) and Saraswati Puja on this auspicious day to ensure success in your profession and studies for the entire year.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-maroon-900 text-white hover:bg-maroon-800 font-bold shadow-lg shadow-maroon-900/20">
                                        Book Ayudha Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Dussehra%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-yellow-400 pb-2">Significance of Vijayadashami</h2>
                                <p>
                                    Dussehra (Vijayadashami) marks Lord Rama's victory over Ravana and Goddess Durga's triumph over Mahishasura. It is a day that celebrates the power of righteousness (Dharma).
                                </p>
                                <p>
                                    Traditionally, warriors worshipped their weapons (Shastra Pujan) on this day. In modern times, this translates to <strong>Ayudha Puja</strong>, where we worship our tools of trade—computers, vehicles, machinery, and books—seeking blessings for professional success.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🏹</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Career Success</h4>
                                            <p className="text-sm text-gray-600">Ayudha Puja ensures that your tools/skills yield the best results.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Academic Excellence</h4>
                                            <p className="text-sm text-gray-600">Saraswati Pujan on this day is crucial for students' memory and wisdom.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Victory in Ventures</h4>
                                            <p className="text-sm text-gray-600">Considered a 'Sade Teen Muhurat' day, perfect for starting new businesses.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">The Puja Process</h2>
                                <p className="text-gray-600">The puja can be done at home, office, or factory. Duration: <strong>45 - 60 mins</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Ganesh & Varun Puja</h4>
                                            <p className="text-sm text-gray-600">Initial prayers to remove obstacles and purify the premises.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Saraswati & Lakshmi Puja</h4>
                                            <p className="text-sm text-gray-600">Invoking the Goddesses of Knowledge and Wealth.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Ayudha Puja (Shastra Pujan)</h4>
                                            <p className="text-sm text-gray-600">Applying Haldi-Kumkum and flowers to books, laptops, vehicles, and tools.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Aparajita Puja & Aarti</h4>
                                            <p className="text-sm text-gray-600">Worshipping the Aparajita flower/plant for invincibility, followed by Aarti.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Items to keep ready:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Marigold Flowers (Zendu)</span>
                                    <span>• Apta Leaves (Sona)</span>
                                    <span>• Books / Laptop / Tools</span>
                                    <span>• Rice, Kumkum, Turmeric</span>
                                    <span>• Betel Leaves & Nuts</span>
                                    <span>• Sweets for Prasad</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Why do we exchange Apta leaves?", a: "Apta leaves are exchanged as 'Sona' (Gold), symbolizing the sharing of prosperity and good will." },
                                        { q: "Can we do vehicle puja on this day?", a: "Yes, Dussehra is the most popular day for vehicle puja. We can perform it along with the home puja." },
                                        { q: "Is it good for starting construction?", a: "Absolutely. Vijayadashami is an auspicious day for Bhoomi Pujan or any new beginning." },
                                        { q: "What is Shastra Pujan?", a: "It literally means 'Weapon Worship'. For students, books are weapons; for coders, laptops are weapons." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Dussehra Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-400">
                                    <div className="bg-yellow-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Dasara Special</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">45 - 60 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Expert Guruji</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-md border-none">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Dussehra%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        ⚔️ Celebrate Victory
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Proper Vedic Methods
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Corporate Experience
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Trusted by Thousands
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Shubh Dasara!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May this Dussehra bring you victory in all your endeavors.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-maroon-900 hover:bg-yellow-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
