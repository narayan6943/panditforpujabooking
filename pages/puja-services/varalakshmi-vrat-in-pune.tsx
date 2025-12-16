import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VaralakshmiVratPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Varalakshmi Vrat Puja in Pune',
        description: 'Book Pandit for Varalakshmi Vrat Puja in Pune. Authentic South Indian style puja for prosperity and well-being of the husband.',
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
            ratingValue: '5.0',
            reviewCount: '60'
        }
    }

    return (
        <>
            <Head>
                <title>Varalakshmi Vrat Puja in Pune | South Indian Tradition</title>
                <meta name="description" content="Book Pandit for Varalakshmi Vrat Puja in Pune. Authentic traditional Vidhi for Shravan Friday. Grants 8 types of wealth (Ashta Lakshmi) and protects the husband." />
                <meta name="keywords" content="varalakshmi vrat puja pune, varamahalakshmi vratam, south indian pandit pune, shravan friday puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/varalakshmi-vrat-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-yellow-50 to-white">
                <section className="relative bg-yellow-600 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-100 text-sm font-semibold tracking-wide uppercase">Shravan Month Special</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Varalakshmi Vratam <br />
                                    <span className="text-red-200">Boon Bestowing Mother</span>
                                </h1>
                                <p className="text-lg text-yellow-50/90 border-l-4 border-red-400 pl-4 leading-relaxed">
                                    "Vara" means Boon. Worshipping Varalakshmi on the Friday before Shravan Purnima is equivalent to worshipping all 8 forms of Lakshmi (Ashta Lakshmi).
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-red-600 text-white hover:bg-red-700 font-bold shadow-lg shadow-red-900/20 border-none">
                                        Book Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Varalakshmi%20Vrat%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-yellow-800 border-b-2 border-red-600 pb-2">Significance of Varamahalakshmi</h2>
                                <p>
                                    This is a major festival in South India (Karnataka, Andhra, Tamil Nadu, Telangana). It is performed by married women (Sumangalis) for the well-being of their husbands and prosperity of the family.
                                </p>
                                <p>
                                    Legend says Goddess Parvati asked Lord Shiva for a vrat that yields all benefits, and he recommended the Varalakshmi Vratam.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-yellow-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-yellow-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">✨</span> Divine Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Husband's Longevity</h4>
                                            <p className="text-sm text-gray-600">Primary benefit is the health and long life of the spouse.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Ashta Aishwarya</h4>
                                            <p className="text-sm text-gray-600">Grants wealth, earth, learning, love, fame, peace, pleasure, and strength.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Progeny</h4>
                                            <p className="text-sm text-gray-600">Many devotees perform this for the blessing of children.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-yellow-800">Traditional Vidhi</h2>
                                <p className="text-gray-600">We provide pandits familiar with <strong>South Indian traditions</strong>. Duration: <strong>2 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-700 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-black">Kalash Alankaram</h4>
                                            <p className="text-sm text-gray-600">Decorating the Kalash with a saree, jewels, and a specially painted coconut (Mukha).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-700 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-black">Thoranam (Sacred Thread)</h4>
                                            <p className="text-sm text-gray-600">Worshipping the 'Noombu Saradu' (yellow thread with 9 knots) and tying it on the right wrist.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-700 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-black">Ashtottara Shatanamavali</h4>
                                            <p className="text-sm text-gray-600">Chanting the 108 names of Lakshmi with flower offerings.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-700 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-black">Vayana Danam</h4>
                                            <p className="text-sm text-gray-600">Giving thamboolam (betel leaves, fruits, coins) to other married women.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-4">Required Items (Samagri)</h2>
                                <p className="text-gray-700 mb-2">
                                    Our pandit will bring regular puja items. You need to arrange:
                                </p>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Kalash and Coconut (with face if possible)</li>
                                    <li>New Blouse Piece or Saree for Kalash</li>
                                    <li>9 varieties of flowers and fruits (ideal, but 5 is okay)</li>
                                    <li>Yellow threads for Charam</li>
                                    <li>Sweets (Payasam/Kheer)</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-yellow-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "When is Varalakshmi Vrat 2025?", a: "It falls on Friday, August 8th 2025 (Date may vary based on Panchang)." },
                                        { q: "Can I do it if I don't have a Kalash face?", a: "Yes, you can use turmeric to draw a face on the coconut, or just worship the Kalash as the Goddess." },
                                        { q: "Is it restricted to South Indians?", a: "Traditionally yes, but now many North Indians in Pune also perform it for its immense benefits." },
                                        { q: "Cost of the Puja?", a: "Starts from ₹2,500." },
                                        { q: "Can pregnant women perform it?", a: "Yes, it is auspicious for the child as well." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors">
                                            <p className="font-bold text-yellow-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Varalakshmi Vrat" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                                    <div className="bg-yellow-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-yellow-800">₹2,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ South Indian Style</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-yellow-800">2 - 2.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-yellow-800">Experienced</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-md border-none">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Varalakshmi%20Vrat%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Trusted by 500+ Families
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-yellow-800 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Method
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Punctual Pandits
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-yellow-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Blessings of Ashta Lakshmi</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            Ensure prosperity and health for your family with this divine observance.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-red-600 text-white hover:bg-red-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
