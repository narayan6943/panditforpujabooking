import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ChandiHomaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Chandi Homa in Pune',
        description: 'Book Chandi Homa in Pune (Nava Chandi / Sata Chandi). The ultimate Vedic ritual for massive success, removing huge obstacles, and health.',
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
            price: '9100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '60'
        }
    }

    return (
        <>
            <Head>
                <title>Chandi Homa in Pune | Nava Chandi & Sata Chandi Yagna</title>
                <meta name="description" content="Book Pandit for Chandi Homa in Pune. The most powerful Havan for grand success, health, and removing impossible obstacles. Authentic Nava Chandi Path." />
                <meta name="keywords" content="chandi homa pune, nava chandi yagna cost, sata chandi path vidhi, durga saptashati havan, grand puja for success" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/chandi-homa" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-red-50/20 to-white">
                <section className="relative bg-red-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-orange-500/20 border border-orange-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-orange-300 text-sm font-semibold tracking-wide uppercase">The King of Yagnas</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Maha Chandi Homa <br />
                                    <span className="text-orange-400">Supreme Victory</span>
                                </h1>
                                <p className="text-lg text-orange-100/90 border-l-4 border-orange-500 pl-4 leading-relaxed">
                                    When small remedies don't work, perform the Chandi Homa. It is the pinnacle of Shakti worship, capable of altering destiny, curing incurable diseases, and granting massive success.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-orange-600 text-white hover:bg-orange-500 font-bold shadow-lg shadow-orange-600/20 border-none">
                                        Book Grand Homa
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Chandi%20Homa" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-orange-400 pb-2">Why is Chandi Homa Unique?</h2>
                                <p>
                                    It honors Goddess Chandi - the combined ferocious form of Lakshmi, Saraswati, and Durga. It involves the chanting of <strong>700 Slokas (Durga Saptashati)</strong> followed by offering 1/10th of them into the sacred fire as Ahuti.
                                </p>
                                <p>
                                    It is said that "In Kaliyuga, Chandi Homa and Ganesh Puja give the fastest results."
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🔥</span> Extraordinary Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Life Transformation</h4>
                                            <p className="text-sm text-gray-600">Clears karmic blocks spanning previous births.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health Miracle</h4>
                                            <p className="text-sm text-gray-600">Specifically prescribed for critical health conditions and surgeries.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Massive Wealth</h4>
                                            <p className="text-sm text-gray-600">Attracts huge prosperity and removes all financial debts.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Nava Chandi Vidhi</h2>
                                <p className="text-gray-600">Requires <strong>5 to 9 Pandits</strong> and takes <strong>6 to 7 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Maha Sankalp</h4>
                                            <p className="text-sm text-gray-600">A detailed pledge taken by the host (Yajman) for their specific desire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">9 Full Paths</h4>
                                            <p className="text-sm text-gray-600">Reciting the entire Durga Saptashati 9 times by the group of Brahmins.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sacrificial Offerings</h4>
                                            <p className="text-sm text-gray-600">Offering silk sarees, honey, condensed milk (Payasam), and whole coconuts to the fire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kanya Pujan (Suvasini)</h4>
                                            <p className="text-sm text-gray-600">Worshipping 9 girls (Kanyas) and 1 married woman (Suvasini) as Devi.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Types of Chandi Homa</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Ganpathi-Navagraha-Chandi:</strong> Basic version for general well-being.</li>
                                    <li><strong>Nava Chandi:</strong> 9 recitations (Most popular for homes).</li>
                                    <li><strong>Sata Chandi:</strong> 100 recitations (For very big problems/temples).</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is it very expensive?", a: "It is a premium puja due to the number of Pandits (5-9) and large amount of Ghee/Samagri needed." },
                                        { q: "Cost of Chandi Homa?", a: "Nava Chandi starts from ₹9,100. Smaller versions available from ₹5,500." },
                                        { q: "Where to perform?", a: "Best done at home in an open space/terrace, or in a temple hall." },
                                        { q: "Can we eat during the puja?", a: "The main Yajman should fast (fruit/milk) until the Purnahuti is over." },
                                        { q: "What benefits can I expect?", a: "Relief from enemies, court cases, health issues, and black magic all in one go." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Chandi Homa" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
                                    <div className="bg-red-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹9,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Grand Ritual</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">5 - 7 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandits</span>
                                                <span className="font-bold text-maroon-900">5 - 9 Gurujis</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-red-800 hover:bg-red-700 text-white shadow-md border-none">
                                                    Call to Discuss
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Chandi%20Homa">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Life Changing Experience
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Authentic Method
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Experienced Team
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Change Your Destiny</h2>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                            The Chandi Homa is not just a puja, it is a rebirth.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-orange-600 text-white hover:bg-orange-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
