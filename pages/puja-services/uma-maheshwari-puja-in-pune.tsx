import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function UmaMaheshwariPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Uma Maheshwari Puja in Pune',
        description: 'Book Pandit for Uma Maheshwari Puja in Pune. Joint worship of Lord Shiva and Parvati for marital harmony, resolving fights, and preventing divorce.',
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
            ratingValue: '4.9',
            reviewCount: '70'
        }
    }

    return (
        <>
            <Head>
                <title>Uma Maheshwari Puja in Pune | Restore Marital Bliss</title>
                <meta name="description" content="Book Pandit for Uma Maheshwari Puja in Pune. The unified worship of Shiva & Parvati (Uma-Maheshwara) to heal broken relationships, stop divorce, and bring peace." />
                <meta name="keywords" content="uma maheshwari puja pune, shiva parvati puja for marriage, save marriage puja, divorce problem solution puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/uma-maheshwari-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-blue-50 to-white">
                <section className="relative bg-slate-800 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1.5">
                                    <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">For Couples Only</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Uma Maheshwari Puja <br />
                                    <span className="text-blue-300">Perfect Union</span>
                                </h1>
                                <p className="text-lg text-slate-300 border-l-4 border-blue-400 pl-4 leading-relaxed">
                                    Lord Shiva and Goddess Parvati represent the ideal couple. This puja invokes their unified form to resolve conflicts, ego clashes, and misunderstandings between husband and wife.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-blue-600 text-white hover:bg-blue-500 font-bold shadow-lg shadow-blue-600/30 border-none">
                                        Book for Harmony
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Uma%20Maheshwari%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-slate-800 border-b-2 border-blue-400 pb-2">Why Perform This?</h2>
                                <p>
                                    Often, planetary positions (like Rahu-Ketu axis in 1st/7th house) cause distance between couples. Uma Maheshwari Puja balances the <strong>Masculine (Shiva)</strong> and <strong>Feminine (Shakti)</strong> energies in the home.
                                </p>
                                <p>
                                    It is specifically designed for couples who are fighting frequently, facing separation, or have lost the spark in their marriage.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🕊️</span> Relationship Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Stop Divorce</h4>
                                            <p className="text-sm text-gray-600">Helps reverse the decision of separation by softening hearts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Remove Ego</h4>
                                            <p className="text-sm text-gray-600">Dissolves the petty ego issues that cause major fights.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Better Understanding</h4>
                                            <p className="text-sm text-gray-600">Aligns the thinking of partners for a smoother life journey.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-slate-800">The Puja Process</h2>
                                <p className="text-gray-600">Duration: <strong>2 - 3 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                        <div className="min-w-[40px] font-bold text-blue-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Gauri-Shankar Abhishek</h4>
                                            <p className="text-sm text-gray-600">Simultaneous Abhishek of Shivling (Shiva) and Idol (Parvati) with milk and honey.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                        <div className="min-w-[40px] font-bold text-blue-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Gath-Bandhan</h4>
                                            <p className="text-sm text-gray-600">Just like in marriage, a cloth knot is tied between the two deities to symbolize eternal bond.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                        <div className="min-w-[40px] font-bold text-blue-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Uma-Maheshwar Stotra</h4>
                                            <p className="text-sm text-gray-600">Recitation of specific stotras that describe the love between the divine couple.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                        <div className="min-w-[40px] font-bold text-blue-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Havan</h4>
                                            <p className="text-sm text-gray-600">Offering herbs into Agni to burn away the negativities affecting the relationship.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h2 className="text-2xl font-serif font-bold text-blue-900 mb-4">Can't do it together?</h2>
                                <p className="text-gray-700 mb-4">
                                    If your spouse is unwilling or living separately, you can perform this puja alone (Sankalp Puja) to invite them back into your life. The vibration reaches them spiritually.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Best day for this puja?", a: "Mondays (for Shiva), Arudra Nakshatra, or your marriage anniversary." },
                                        { q: "Is it different from Swayamvara Parvati?", a: "Swayamvara Parvati is for finding a groom. Uma Maheshwari is for existing marriage harmony." },
                                        { q: "Cost of the Puja?", a: "Starts from ₹3,100." },
                                        { q: "Items needed?", a: "Bilva Patra for Shiva and Turmeric/Kumkum for Parvati are essential." },
                                        { q: "Can divorced people do it?", a: "It helps in finding a new partner or reconciling if that is the intent." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
                                            <p className="font-bold text-slate-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Uma Maheshwari Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                                    <div className="bg-slate-800 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-slate-900">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Couple Blessing</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-slate-900">2 - 3 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-slate-900">Shiva Devotee</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Uma%20Maheshwari%20Puja">
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
                                    <h4 className="font-bold text-slate-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-blue-500">★</span> Relationship Counseling
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-blue-500">★</span> Peaceful Ambience
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-slate-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">One Soul, Two Bodies</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Reconnect with your partner on a spiritual level.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-blue-600 text-white hover:bg-blue-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
