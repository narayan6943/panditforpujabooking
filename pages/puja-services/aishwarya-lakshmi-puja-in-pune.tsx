import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AishwaryaLakshmiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Aishwarya Lakshmi Puja in Pune',
        description: 'Book Pandit for Aishwarya Lakshmi Puja in Pune. For fame, social recognition, artistic success, and material wealth.',
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
            price: '2500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '45'
        }
    }

    return (
        <>
            <Head>
                <title>Aishwarya Lakshmi Puja in Pune | Fame & Recognition</title>
                <meta name="description" content="Book Pandit for Aishwarya Lakshmi Puja in Pune. The only puja that grants both Wealth (Dhan) and Recognition (Yash). Ideal for artists, influencers, and professionals." />
                <meta name="keywords" content="aishwarya lakshmi puja pune, fame and wealth puja, puja for recognition, success in arts puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/aishwarya-lakshmi-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-purple-50 to-white">
                <section className="relative bg-purple-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1.5">
                                    <span className="text-purple-200 text-sm font-semibold tracking-wide uppercase">Wealth + Fame</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Aishwarya Lakshmi <br />
                                    <span className="text-yellow-400">Radiance & Glory</span>
                                </h1>
                                <p className="text-lg text-purple-100/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    "Aishwarya" implies lordship, supremacy, and glory. This puja is not just for money—it's for being <strong>recognized, respected, and famous</strong> for your work.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-purple-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book for Fame
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Aishwarya%20Lakshmi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-purple-900 border-b-2 border-yellow-400 pb-2">Why Aishwarya Lakshmi?</h2>
                                <p>
                                    Many people have wealth but lack respect or fame. Others have talent but no money. Aishwarya Lakshmi grants the unique combination of <strong>Material Success + Social Recognition</strong>.
                                </p>
                                <p>
                                    She is depicted riding a horse (symbol of speed and regality) or sitting on a lotus, bestowing all comforts.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌟</span> Radiant Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Fame & Recognition</h4>
                                            <p className="text-sm text-gray-600">Essential for artists, actors, influencers, and consultants.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Career Advancement</h4>
                                            <p className="text-sm text-gray-600">Helps get promoted to positions of authority where you lead others.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-purple-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Family Prestige</h4>
                                            <p className="text-sm text-gray-600">Restores family honor and reputation in society.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-purple-900">Vedic Ritual Steps</h2>
                                <p className="text-gray-600">Duration: <strong>2 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Deepa Arohana</h4>
                                            <p className="text-sm text-gray-600">Lighting multiple ghee lamps to dispel darkness and ignorance.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Shodashopachara</h4>
                                            <p className="text-sm text-gray-600">16-step exhaustive worship using fragrant flowers (Jasmine/Mogra).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Aishwarya Ashtakam</h4>
                                            <p className="text-sm text-gray-600">Chanting the special hymn dedicated to the 8 forms of prosperity.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">Who Needs This?</h2>
                                <p className="text-gray-700">
                                    If you feel you are working hard but <strong>not getting the credit</strong> you deserve, or if your name is being tarnished by rumors, Aishwarya Lakshmi is the deity to worship.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-purple-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How is it different from normal Lakshmi Puja?", a: "Normal puja is for money. This is for 'Yash' (Fame) + 'Dhan' (Money)." },
                                        { q: "Can this help in court cases?", a: "Indirectly yes, by restoring reputation. For court victory, Baglamukhi is better." },
                                        { q: "Cost of the Puja?", a: "Starts from ₹2,500." },
                                        { q: "Items needed?", a: "White fragrant flowers are special to her." },
                                        { q: "Time required?", a: "About 2 hours. Can be done morning or evening." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
                                            <p className="font-bold text-purple-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Aishwarya Lakshmi Puja" />

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
                                            <div className="text-4xl font-bold text-purple-900">₹2,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-yellow-600 font-bold mt-1">✔ For Fame & Glory</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-purple-900">2 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-purple-900">Certified</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Aishwarya%20Lakshmi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Confidential & Private
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-purple-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-600">★</span> Reputation Mgmt
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-600">★</span> Success Focused
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-purple-950 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Shine Brighter</h2>
                        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
                            The world is waiting for your light. Clear the obstacles today.
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
