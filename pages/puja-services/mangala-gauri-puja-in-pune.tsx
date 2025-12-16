import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MangalaGauriPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mangala Gauri Puja in Pune',
        description: 'Book Pandit for Mangala Gauri Puja in Pune. Authentic Shravan Tuesday puja for early marriage and husband\'s long life and health.',
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
            reviewCount: '95'
        }
    }

    return (
        <>
            <Head>
                <title>Mangala Gauri Puja in Pune | Early Marriage & Bliss</title>
                <meta name="description" content="Book Pandit for Mangala Gauri Puja in Pune. Performed on Shravan Tuesdays for early marriage (Vivah Yoga) and well-being of the husband. Complete Vidhi included." />
                <meta name="keywords" content="mangala gauri puja pune, shravan mangalar gauru puja, puja for husband life, early marriage puja pune" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/mangala-gauri-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-red-50 to-white">
                <section className="relative bg-red-600 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Shravan Tuesday Special</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Mangala Gauri Puja <br />
                                    <span className="text-yellow-300">Blessings for Marriage</span>
                                </h1>
                                <p className="text-lg text-red-50/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Performed by newly married women for 5 years and by unmarried girls seeking a good husband. Goddess Gauri ensures the longevity and health of the spouse.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mangala%20Gauri%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-red-900 border-b-2 border-yellow-500 pb-2">Why Mangala Gauri?</h2>
                                <p>
                                    Dedicated to Goddess Parvati (Gauri), this vrat is strictly observed on Tuesdays of the holy month of Shravan. It is believed that observing this vrat eliminates "Mangal Dosh" and ensures a happy, conflict-free married life ("Saubhagya").
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-red-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">❤️</span> Divine Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Husband's Protection</h4>
                                            <p className="text-sm text-gray-600">Protects the spouse from accidents and illnesses (Akhand Saubhagya).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Resolves Mangal Dosh</h4>
                                            <p className="text-sm text-gray-600">Pacifies planetary afflictions delaying marriage.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Peaceful Home</h4>
                                            <p className="text-sm text-gray-600">Removes constant bickering between couples.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-red-900">Traditional Vidhi</h2>
                                <p className="text-gray-600">Duration: <strong>2 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Sola Vati Deep Aartis</h4>
                                            <p className="text-sm text-gray-600">Special feature: Waving of lamps with 16 wicks (Sola Vati) before the Goddess.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Gauri Sthapana</h4>
                                            <p className="text-sm text-gray-600">Installation of the idol/image and invoking Prana Pratishtha.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Katha & Vayan</h4>
                                            <p className="text-sm text-gray-600">Reading the story of the merchant Dharampal and exchanging sweets/clothes with other women.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-4">Udyapan for Newly Weds</h2>
                                <p className="text-gray-700 mb-4">
                                    It is customary for newly married women in Maharashtra to perform this for the first 5 years. We organize the complete <strong>Udyapan Puja</strong> in the 5th year with gifts for 16 women.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can unmarried girls do this?", a: "Yes, it is highly recommended for girls facing delays in marriage to find a good groom." },
                                        { q: "Only in Shravan?", a: "The Vrat for 5 years is in Shravan. However, a one-time relief puja can be done on any Tuesday." },
                                        { q: "Cost of Mangala Gauri Puja?", a: "Starts from ₹2,100 (basic). Udyapan cost depends on gifts." },
                                        { q: "Is fasting needed?", a: "Yes, a salt-free diet is traditionally observed on this day." },
                                        { q: "What items to bring?", a: "16 types of leaves, 16 betel nuts, and 16 wicks are unique requirements." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-red-300 transition-colors">
                                            <p className="font-bold text-red-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Mangala Gauri Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
                                    <div className="bg-red-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-red-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Traditional Vidhi</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-red-900">2 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-red-900">Experienced</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-red-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mangala%20Gauri%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Happy Family Guaranteed
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-red-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> 95 Five-Star Reviews
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Method
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-red-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Bless Your Marriage</h2>
                        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                            Ensure a lifetime of togetherness with the grace of Mangala Gauri.
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
