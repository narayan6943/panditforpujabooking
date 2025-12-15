import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GajalakshmiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gajalakshmi Puja in Pune',
        description: 'Book Pandit for Gajalakshmi Puja in Pune. Worship of Lakshmi with Elephants for royalty, political power, vehicle purchase, and animal welfare.',
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
            price: '3100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '52'
        }
    }

    return (
        <>
            <Head>
                <title>Gajalakshmi Puja in Pune | Royalty, Power & Vehicles</title>
                <meta name="description" content="Book Pandit for Gajalakshmi Puja in Pune. The form of Lakshmi flanked by elephants. Best for political success, buying luxury vehicles, and gaining authority." />
                <meta name="keywords" content="gajalakshmi puja pune, elephant lakshmi puja, vehicle purchase puja, political success puja, raj yoga puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/gajalakshmi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-gray-50 to-white">
                <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1.5">
                                    <span className="text-gray-200 text-sm font-semibold tracking-wide uppercase">Goddess of Royalty</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Gajalakshmi Puja <br />
                                    <span className="text-yellow-500">Power & Authority</span>
                                </h1>
                                <p className="text-lg text-gray-300 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                                    She is depicted with two elephants showering water on her. This form grants "Raj Yoga" (Royal Luck), political power, and high social status.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-600 text-white hover:bg-yellow-500 font-bold shadow-lg shadow-yellow-600/30 border-none">
                                        Book Royal Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gajalakshmi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-black border-b-2 border-yellow-500 pb-2">Why Gajalakshmi?</h2>
                                <p>
                                    Gaja means Elephant, a symbol of strength, wisdom, and royalty. Gajalakshmi was the form worshipped by Indra to regain his lost kingdom.
                                </p>
                                <p>
                                    This puja is unique because it isn't just about money—it's about <strong>Power, Influence, and Mobility</strong>.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-black mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🐘</span> Royal Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Political Success</h4>
                                            <p className="text-sm text-gray-600">Ideal for politicians, leaders, and those seeking promotion to management.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Vehicle Purchase</h4>
                                            <p className="text-sm text-gray-600">The best puja to perform before or after buying a luxury car/property.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Animal Welfare</h4>
                                            <p className="text-sm text-gray-600">Brings health to farm animals (cattle, horses) and pets.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-black">Process & Vidhi</h2>
                                <p className="text-gray-600">Duration: <strong>2 to 2.5 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-black">Gaja Pujan</h4>
                                            <p className="text-sm text-gray-600">If real elephants aren't available, we worship silver/clay idols of elephants with sugar cane and jaggery.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-black">Abhishekam</h4>
                                            <p className="text-sm text-gray-600">Offering continuous stream of water/milk to the Goddess, mimicking the elephants.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-black">Raj Yoga Sankalp</h4>
                                            <p className="text-sm text-gray-600">Special vows for attaining high Government positions or leadership roles.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-4">Buying a New Car?</h2>
                                <p className="text-gray-700 mb-4">
                                    Combine <strong>Gajalakshmi Puja</strong> with <strong>Vehicle Puja</strong> for the ultimate protection and luck for your new luxury vehicle. We offer a special combo package.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-black mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is an elephant required?", a: "No, silver, brass, or clay statutes are perfect substitutes." },
                                        { q: "Who should do this?", a: "Business owners, politicians, and anyone buying expensive assets." },
                                        { q: "Cost of Gajalakshmi Puja?", a: "Starts from ₹3,100." },
                                        { q: "Can I do it at home?", a: "Yes, it brings royal vibes to the home." },
                                        { q: "Best day?", a: "Thursdays (Guru) and Fridays (Shukra) are best for power and luxury." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors">
                                            <p className="font-bold text-black text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Gajalakshmi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                    <div className="bg-black p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-black">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-yellow-600 font-bold mt-1">✔ For Power & Status</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-black">2.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-black">Vedic Scholar</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gajalakshmi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Confidential Service
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-black mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-600">★</span> Raj Yoga Exparts
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-600">★</span> Complete Samagri
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-black py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Claim Your Throne</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Ensure your rise to power is blessed and obstacle-free.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-600 text-white hover:bg-yellow-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
