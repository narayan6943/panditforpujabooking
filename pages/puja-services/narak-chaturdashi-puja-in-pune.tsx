import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NarakChaturdashiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Narak Chaturdashi Puja in Pune',
        description: 'Book Pandit for Narak Chaturdashi (Abhyanga Snan) Puja in Pune. Rituals for removing laziness, evil, and fear of hell.',
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
            reviewCount: '130'
        }
    }

    return (
        <>
            <Head>
                <title>Narak Chaturdashi Puja in Pune | Choti Diwali Rituals</title>
                <meta name="description" content="Book Pandit for Narak Chaturdashi Puja in Pune. Perform Abhyanga Snan, Yam Deep Dan, and Kali Chaudas puja rituals. Destroy negativity and fear." />
                <meta name="keywords" content="narak chaturdashi puja pune, choti diwali pandit, yam deep dan, kali chaudas puja, abhyanga snan vidhi" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/narak-chaturdashi-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-gray-50/20 to-white">
                <section className="relative bg-gray-900 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-100 text-sm font-semibold tracking-wide uppercase">Choti Diwali</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Narak Chaturdashi <br />
                                    <span className="text-yellow-300">Destroy the Evil</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Also known as Kali Chaudas or Roop Chaudas. Celebrate the victory of Lord Krishna/Satyabhama over Narakasura. Perform Yam Deep Dan to remove the fear of untimely death.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Narak%20Chaturdashi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-yellow-400 pb-2">Significance of the 14th Day</h2>
                                <p>
                                    Narak Chaturdashi marks the liberation of 16,000 queens by Lord Krishna after slaying the demon Narakasura. It symbolizes the removal of spiritual darkness.
                                </p>
                                <p>
                                    It is also believed that taking an oil bath (Abhyanga Snan) before sunrise on this day is equivalent to a holy dip in the Ganges, washing away sins and laziness.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🪔</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Fearlessness</h4>
                                            <p className="text-sm text-gray-600">Yam Deep Dan removes the fear of death and hell (Narak).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Beauty & Health</h4>
                                            <p className="text-sm text-gray-600">Herbal oil bath (Ubtan) brings glow and removes ailments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Victory over Evil</h4>
                                            <p className="text-sm text-gray-600">Blessings for overcoming personal vices and external enemies.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Puja Vidhi</h2>
                                <p className="text-gray-600">Rituals span from pre-dawn to evening. Duration: <strong>45 mins</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-gray-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Abhyanga Snan (Pre-dawn)</h4>
                                            <p className="text-sm text-gray-600">Applying scented oil and Utane (herbal paste) before sunrise, symbolizing purification.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-gray-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Kariit Breaking</h4>
                                            <p className="text-sm text-gray-600">Crushing the bitter fruit 'Kariit' under the foot, symbolizing the killing of Narakasura/negativity.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-gray-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Yam Deep Dan (Evening)</h4>
                                            <p className="text-sm text-gray-600">Lighting a four-faced lamp facing South for Lord Yama to ward off untimely death.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-gray-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Kali/Krishna Puja</h4>
                                            <p className="text-sm text-gray-600">Offering prayers to Goddess Kali or Lord Krishna for protection.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Specific items needed:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Scented Oil & Ubtan/Utane</span>
                                    <span>• Kariit (Bitter fruit)</span>
                                    <span>• Four-faced Diya</span>
                                    <span>• Mustard Oil</span>
                                    <span>• Black Sesame</span>
                                    <span>• Flowers & Sweets</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Why is it called Choti Diwali?", a: "It falls a day before the main Diwali (Lakshmi Pujan) and involves lighting lamps, hence the name." },
                                        { q: "What is Yam Deep Dan?", a: "It is a tradition of lighting a lamp for Yama, the God of Death, to pray for the longevity of family members." },
                                        { q: "Why wake up before sunrise?", a: "The scriptures state that Lakshmi resides in oil and Ganga in water during this specific time (Arunodaya)." },
                                        { q: "Is fasting required?", a: "No strict fast fits the day, but a sattvic diet is recommended until the puja is over." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                                            <p className="font-bold text-gray-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Narak Chaturdashi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-500">
                                    <div className="bg-gray-800 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-gray-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Early Morning Slot</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-gray-900">45 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-gray-900">Vedic Scholar</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-md border-none">
                                                    Call to Crush Evil
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Narak%20Chaturdashi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🦶 Kariit Todna
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gray-500">★</span> Yam Baal Vidhi
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gray-500">★</span> Punctual Arrival
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gray-500">★</span> Complete Guide
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gray-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Light over Darkness</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May your life be free from fear and filled with the light of knowledge.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
