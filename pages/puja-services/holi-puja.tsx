import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HoliPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Holi Puja in Pune',
        description: 'Book Pandit for Holi Puja in Pune. Perform Holika Dahan and colors puja. Victory of devotion (Bhakta Prahlad) over evil.',
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
            ratingValue: '4.8',
            reviewCount: '190'
        }
    }

    return (
        <>
            <Head>
                <title>Holi Puja in Pune | Holika Dahan Rituals</title>
                <meta name="description" content="Book Pandit for Holi Puja in Pune. Authentic Holika Dahan Vidhi and Puran Poli Naivedya rituals. Celebrate the victory of Vishnu Bhakti." />
                <meta name="keywords" content="holi puja pune, holika dahan pandit, simga puja vidhi, dhulivandan puja, color festival rituals" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/holi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-pink-50/20 to-white">
                <section className="relative bg-pink-700 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-800 via-pink-700/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-300/20 border border-yellow-300/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-100 text-sm font-semibold tracking-wide uppercase">Festival of Colors</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Holi Puja <br />
                                    <span className="text-yellow-300">Victory of Faith</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Celebrate Holika Dahan, symbolizing the burning of ego and negativity, and the triumph of pure devotion (Prahlad) through the grace of Lord Narasimha/Vishnu.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-pink-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Holika Dahan
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Holi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-pink-900 border-b-2 border-yellow-400 pb-2">The Legend of Holika</h2>
                                <p>
                                    Holi celebrates the protection of Prahlad by Lord Vishnu when his aunt Holika tried to burn him. Holika (representing evil) was burnt to ashes, while Prahlad (representing faith) came out unscathed.
                                </p>
                                <p>
                                    Performing this puja cleanses the environment of impurities and pathogens during the season change (Vasant Ritu).
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-pink-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🔥</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Removes Negativity</h4>
                                            <p className="text-sm text-gray-600">The bonfire destroys negative energies and evil spirits.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Wins over Enemies</h4>
                                            <p className="text-sm text-gray-600">Symbolic of victory over those wishing you harm.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Family Bonding</h4>
                                            <p className="text-sm text-gray-600">Communities come together to offer prayers for collective well-being.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-pink-900">Holika Dahan Vidhi</h2>
                                <p className="text-gray-600">The puja is performed in the evening (Pradosh Kaal) on Purnima. Duration: <strong>1 Hour</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-pink-900">Holika Sthapana</h4>
                                            <p className="text-sm text-gray-600">Assembling the pyre with cow dung, wood, and dry leaves in a public/open space.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-pink-900">Ganesh & Agni Puja</h4>
                                            <p className="text-sm text-gray-600">Worshipping Lord Ganesha and the Fire God (Agni Dev) before lighting the pyre.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-pink-900">Pradakshina</h4>
                                            <p className="text-sm text-gray-600">Devotees circumambulate the fire offering coconut, grains, and water to pray for health.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-pink-900">Puran Poli Naivedya</h4>
                                            <p className="text-sm text-gray-600">Offering the special sweet dish 'Puran Poli' to the fire.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-pink-50 p-8 rounded-2xl border border-pink-200">
                                <h2 className="text-2xl font-serif font-bold text-pink-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Items for Holika Puja:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Cotton Thread (Kachha Sut)</span>
                                    <span>• Cow Dung Cakes (Uple)</span>
                                    <span>• Roli, Akshat, Flowers</span>
                                    <span>• Coconut & Sugarcane</span>
                                    <span>• Wheat/Gram stalks</span>
                                    <span>• Water vessel (Kalash)</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-pink-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can we do this at home?", a: "Holika Dahan is usually a community event, but a small symbolic puja can be done in your building compound." },
                                        { q: "What is Bhadra time?", a: "Holika Dahan should NEVER be done during Bhadra Mukha (inauspicious time). Our Pandit ensures strict adherence to Muhurat." },
                                        { q: "Is the next day Rang Panchami?", a: "The day after is Dhulivandan (playing with dust/colors). Rang Panchami is 5 days later." },
                                        { q: "Why offer coconut to fire?", a: "It symbolizes offering one's ego and hardness, asking the fire to purify us." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-pink-300 transition-colors">
                                            <p className="font-bold text-pink-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Holi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-500">
                                    <div className="bg-pink-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-pink-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Society Booking Available</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-pink-900">45 - 60 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-pink-900">Expert Guruji</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-pink-900 shadow-md border-none">
                                                    Call to Organize
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Holi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🌈 Celebrate with Joy
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-pink-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-pink-500">★</span> Shubh Muhurat Only
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-pink-500">★</span> Full Vidhi Knowledge
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-pink-500">★</span> Community Experts
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-pink-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Holi Hai!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May your life be as colorful as the festival itself.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-pink-900 hover:bg-yellow-300 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
