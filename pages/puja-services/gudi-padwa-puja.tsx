import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GudiPadwaPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gudi Padwa Puja in Pune',
        description: 'Book Pandit for Gudi Padwa Puja in Pune. Authentic Gudi Ubharne and New Year Sankalp rituals. Start your Hindu New Year with blessings.',
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
            reviewCount: '320'
        }
    }

    return (
        <>
            <Head>
                <title>Gudi Padwa Puja in Pune | Marathi New Year Puja</title>
                <meta name="description" content="Book Pandit for Gudi Padwa Puja in Pune. Traditional Gudi decoration and New Year Sankalp rituals. Expert Guruji for home puja." />
                <meta name="keywords" content="gudi padwa puja pune, marathi new year puja, gudi ubharne vidhi, pandit for gudi padwa, ugadi puja pune" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/gudi-padwa-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-green-50/20 to-white">
                <section className="relative bg-green-700 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Marathi New Year</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Gudi Padwa Puja <br />
                                    <span className="text-yellow-400">New Year, New Beginnings</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                                    Welcome the Hindu New Year (Chaitra Shukla Pratipada) by raising the auspicious Gudi of victory. Seek blessings for health, success, and prosperity for the coming year.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Gudi Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gudi%20Padwa%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-green-900 border-b-2 border-yellow-500 pb-2">Significance of Gudi Padwa</h2>
                                <p>
                                    Gudi Padwa marks the beginning of the Shalivahan Shaka Samvat. The Gudi (flag) symbolizes the victory of King Shalivahan and Lord Rama's return to Ayodhya.
                                </p>
                                <p>
                                    It is one of the 'Sade Teen Muhurat' (Three and a half auspicious days), meaning any new venture started on this day is bound to succeed without looking for a specific time.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-green-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌿</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Victory & Success</h4>
                                            <p className="text-sm text-gray-600">The Upraised Gudi invites victory energies into the home.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health & Immunity</h4>
                                            <p className="text-sm text-gray-600">Eating Neem & Jaggery purifies the blood and boosts immunity for the changing season.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Warding off Evil</h4>
                                            <p className="text-sm text-gray-600">The Gudi acts as a shield against negative energies entering the house.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-green-900">Authentic Vidhi</h2>
                                <p className="text-gray-600">The puja is performed early in the morning, ideally during sunrise. Duration: <strong>45 mins</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Gudi Preparation (Ubharne)</h4>
                                            <p className="text-sm text-gray-600">Tying the silk cloth, neem leaves, sugar garland (gathi), and kalash on the bamboo stick.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Sankalp & Ganesh Puja</h4>
                                            <p className="text-sm text-gray-600">Taking a resolution (Sankalp) for the New Year and invoking Lord Ganesha.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Gudi Pujan</h4>
                                            <p className="text-sm text-gray-600">Offering Haldi-Kumkum, flowers, and Akshata to the erected Gudi (Brahma Dhwaj).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Naivedya (Neem-Jaggery)</h4>
                                            <p className="text-sm text-gray-600">Offering the special mixture of bitter neem and sweet jaggery, symbolizing acceptance of life's ups and downs.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-green-50 p-8 rounded-2xl border border-green-200">
                                <h2 className="text-2xl font-serif font-bold text-green-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Essential items for Gudi Padwa:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Bamboo Stick (Medium/Long)</span>
                                    <span>• Silk Cloth (Saree/Blouse Piece)</span>
                                    <span>• Neem Leaves & Mango Leaves</span>
                                    <span>• Sugar Garland (Gathi)</span>
                                    <span>• Silver/Copper Kalash</span>
                                    <span>• Flowers & Sweets</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-green-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Why do we hoist the Gudi?", a: "The Gudi serves as a flag of victory and is believed to ward off evil and invite prosperity into the home." },
                                        { q: "Can we reuse the bamboo stick?", a: "Yes, the bamboo stick can be reused. The cloth should ideally be new or very clean." },
                                        { q: "Is this same as Ugadi?", a: "Yes, Gudi Padwa is celebrated as Ugadi in Karnataka and Andhra Pradesh with similar New Year significance." },
                                        { q: "What time is the puja?", a: "Ideally, the Gudi should be hoisted immediately after sunrise." },
                                        { q: "Cost of Pandit for Gudi Padwa?", a: "It starts from ₹2,100 for the morning puja ritual." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                            <p className="font-bold text-green-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Gudi Padwa Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-500">
                                    <div className="bg-green-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-green-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Morning Slot</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-green-900">45 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-green-900">Marathi Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 shadow-md border-none">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gudi%20Padwa%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🎋 Start New Year Right
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-green-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Authentic Method
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Punctual Arrival
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Vedic Knowledge
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-green-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Nuthan Varshabhinandan!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            Start the Shalivahan Shaka with divine blessings.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
