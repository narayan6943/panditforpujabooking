import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MahalakshmiHomaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mahalakshmi Homa in Pune',
        description: 'Book Pandit for Mahalakshmi Homa in Pune. Powerful fire ritual for immense wealth, overcoming financial crisis, and business success.',
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
            price: '5500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '78'
        }
    }

    return (
        <>
            <Head>
                <title>Mahalakshmi Homa in Pune | Powerful Wealth Fire Ritual</title>
                <meta name="description" content="Book Pandit for Mahalakshmi Homa in Pune. The most powerful fire ritual (Havan) to attract immense wealth, solve financial crisis, and boost business profits." />
                <meta name="keywords" content="mahalakshmi homa pune, wealth havan pune, financial crisis remedy, business growth puja, lotus havan" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/mahalakshmi-homa" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-red-50 to-white">
                <section className="relative bg-red-800 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Ultimate Wealth Ritual</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Mahalakshmi Homa <br />
                                    <span className="text-yellow-400">Fire of Abundance</span>
                                </h1>
                                <p className="text-lg text-red-100/90 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                                    Offers 108 Lotuses into the sacred fire to invoke the supreme grace of Mahalakshmi. This is the most powerful remedy for severe financial crisis or business stagnation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Homa
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mahalakshmi%20Homa" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-red-900 border-b-2 border-yellow-500 pb-2">Vidhi Significance</h2>
                                <p>
                                    Fire (Agni) is the swiftest messenger to the Gods. In the Mahalakshmi Homa, we offer <strong className="text-red-700">Kamala (Lotus flowers)</strong>, Bilva leaves, and Ghee while chanting the Shree Suktam.
                                </p>
                                <p>
                                    This combination acts as a magnet for positive vibrations, clearing "Daridra Yoga" (Poverty curses) from your horoscope.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-red-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🔥</span> Homa Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Financial Breakthrough</h4>
                                            <p className="text-sm text-gray-600">Best for overcoming huge debts, bankruptcy, or stalled payments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Business Growth</h4>
                                            <p className="text-sm text-gray-600">Attracts new clients, opportunities, and steady cash flow.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Luxury & Comforts</h4>
                                            <p className="text-sm text-gray-600">Ensures you enjoy the wealth you earn (Bhoga & Aishwarya).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-red-900">The Ritual Process</h2>
                                <p className="text-gray-600">Elaborate ritual requiring <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Maha Sankalp</h4>
                                            <p className="text-sm text-gray-600">Stating your business name, Gotra, and specific financial goals.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Shree Suktam Path</h4>
                                            <p className="text-sm text-gray-600">Reciting the 16 verses of Shree Suktam 16 times.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Kamala Havan</h4>
                                            <p className="text-sm text-gray-600">Offering 108 fresh pink lotuses dipped in pure cow ghee into the fire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Purnahuti</h4>
                                            <p className="text-sm text-gray-600">Final offering of a silk cloth, coins, and dry fruits to seal the energy.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-4">Required Samagri</h2>
                                <p className="text-gray-700 mb-4">
                                    We arrange everything, including the 108 Lotuses which are often hard to find. We only use <strong>Organic Ghee</strong> and high-quality fragrant woods.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Best day for this Homa?", a: "Fridays, Purnima (Full Moon), and Diwali are the most powerful days." },
                                        { q: "Difference between Puja and Homa?", a: "Homa involves Agni (fire) and is 10x more powerful for rapid results." },
                                        { q: "Cost of Mahalakshmi Homa?", a: "Starts from ₹5,500 due to the cost of lotuses and large quantity of ghee/wood." },
                                        { q: "Can I do it at my office?", a: "Yes, it is highly recommended to do it at the business premises." },
                                        { q: "Is it safe indoors?", a: "Yes, we use smokeless Havan Kunds or manage ventilation properly." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
                                            <p className="font-bold text-red-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Mahalakshmi Homa" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
                                    <div className="bg-red-800 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-red-900">₹5,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Includes 108 Lotuses</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-red-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-red-900">Senior Acharya</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-red-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mahalakshmi%20Homa">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Trusted for Business Success
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-red-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Pure Ingradient
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Vedic Chants
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-red-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Unlock Infinite Wealth</h2>
                        <p className="text-red-200 mb-8 max-w-2xl mx-auto">
                            Don't let financial stress weigh you down. Invoke the Goddess of Wealth today.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
