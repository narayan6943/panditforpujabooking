import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MakarSankrantiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Makar Sankranti Puja in Pune',
        description: 'Book Pandit for Makar Sankranti Puja in Pune. Perform Surya Puja, Sugad Pujan, and Dan-Punya rituals. Transition into Uttarayan.',
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
            reviewCount: '150'
        }
    }

    return (
        <>
            <Head>
                <title>Makar Sankranti Puja in Pune | Surya Puja & Sugad Pujan</title>
                <meta name="description" content="Book Pandit for Makar Sankranti Puja in Pune. Authentic Surya Dev Puja and traditional Sugad Pujan rituals to celebrate Uttarayan and harvest." />
                <meta name="keywords" content="makar sankranti puja pune, surya puja pandit, sugad pujan vidhi, uttarayan puja, sankranti havan" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/makar-sankranti-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-yellow-50/20 to-white">
                <section className="relative bg-orange-600 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-100 text-sm font-semibold tracking-wide uppercase">Harvest Festival</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Makar Sankranti Puja <br />
                                    <span className="text-yellow-300">Welcome the Sun</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Mark the transition of the Sun into Capricorn (Makar Rashi) and the beginning of the auspicious Uttarayan period. Worship Surya Dev and perform Sugad Pujan for prosperity and health.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Surya Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Makar%20Sankranti%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-orange-900 border-b-2 border-yellow-400 pb-2">Transitions of Energy</h2>
                                <p>
                                    Makar Sankranti is one of the few Hindu festivals based on the solar calendar. It marks the end of winter solstice and the start of longer days.
                                </p>
                                <p>
                                    Spiritually, it is the time to wake up from the slumber of ignorance and move towards the light of knowledge (Uttarayan). It is highly meritorious to bathe in holy rivers and offer Arghya to the Sun God.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-orange-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">☀️</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health & Vitality</h4>
                                            <p className="text-sm text-gray-600">Surya Puja strengthens bones, eyes, and overall immunity.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Crop & Wealth</h4>
                                            <p className="text-sm text-gray-600">Harvest festival rituals ensure abundance of grains and food in the house.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Social Harmony</h4>
                                            <p className="text-sm text-gray-600">Exchanging Til-Gul resolves past conflicts ("Til gul ghya, god god bola").</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-orange-900">Puja Vidhi</h2>
                                <p className="text-gray-600">Rituals are typically performed in the morning. Duration: <strong>45 mins</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Surya Arghya</h4>
                                            <p className="text-sm text-gray-600">Offering water mixed with kumkum, red flowers, and sesame seeds to the rising Sun.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Ganesh Puja</h4>
                                            <p className="text-sm text-gray-600">Invoking Lord Ganesha for obstacle-free celebrations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Sugad Pujan (women)</h4>
                                            <p className="text-sm text-gray-600">Worshipping small clay pots (Sugads) filled with seasonal harvest (sugarcane, carrots, berries).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Dan-Punya (Charity)</h4>
                                            <p className="text-sm text-gray-600">Donating sesame, jaggery, warm clothes, and khichdi to Brahmins/needy.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-2xl font-serif font-bold text-orange-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Items specific to Sankranti:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Black Sesame (Til)</span>
                                    <span>• Jaggery (Gul)</span>
                                    <span>• Sugarcane pieces</span>
                                    <span>• Bor (Berries) & Carrots</span>
                                    <span>• 5 Clay Pots (Sugad)</span>
                                    <span>• Haldi-Kumkum</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-orange-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Why do we wear black on this day?", a: "Sankranti is the coldest day of winter. Black absorbs heat, keeping the body warm. It creates a positive vibe on this specific day." },
                                        { q: "Is it necessary to donate?", a: "Yes, 'Gupta Dan' (Secret Charity) on Sankranti is said to return 100-fold blessings." },
                                        { q: "What is Haldi-Kumkum ceremony?", a: "Married women invite friends to exchange Haldi-Kumkum and gifts (Vaan) to celebrate marital bliss." },
                                        { q: "Can men perform Sugad Pujan?", a: "Sugad Pujan is traditionally done by married women, but Surya Puja can be done by everyone." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-orange-300 transition-colors">
                                            <p className="font-bold text-orange-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Makar Sankranti Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-500">
                                    <div className="bg-orange-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-orange-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Uttarayan Special</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-orange-900">45 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-orange-900">Vedic Shastri</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-orange-900 shadow-md border-none">
                                                    Call to Perfect
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Makar%20Sankranti%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🪁 Til-Gul Ghya
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-orange-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> Knowledge of Sugad Vidhi
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> Authentic Mantras
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> Punctual Service
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-orange-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Happy Makar Sankranti!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May your life be filled with sweetness like Til-Gul.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
