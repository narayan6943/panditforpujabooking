import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KitchenOpeningPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kitchen Opening Puja in Pune',
        description: 'Book Kitchen Opening Puja (Vastu) in Pune. Worship Annapurna Devi and Agni Dev before cooking in new kitchen. Boiling Milk ritual specialist.',
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
            price: '1500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '150'
        }
    }

    return (
        <>
            <Head>
                <title>Kitchen Opening Puja in Pune | Annapurna Vastu Puja</title>
                <meta name="description" content="Book Puja for New Kitchen in Pune. Authentic Boiling Milk ritual and Annapurna Devi worship. Ensure health (Arogya) and abundance (Dhan) in your new home." />
                <meta name="keywords" content="kitchen opening puja pune, boiling milk ritual, annapurna puja for kitchen, vastu for kitchen, new stove puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/kitchen-opening-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-saffron-50/20 to-white">
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Health & Abundance</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Kitchen Opening Puja <br />
                                    <span className="text-gold-400">Bless the Heart of Home</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    The kitchen is the source of health (Arogya) for the family. InVoke Goddess Annapurna and Agni Dev to ensure that the food cooked here always brings nourishment and prosperity.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Kitchen Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kitchen%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Kitchen Puja?</h2>
                                <p>
                                    According to Vastu Shastra, the Kitchen represents the <strong>Fire Element (Agni)</strong>. If the fire energy is balanced, the family enjoys good digestion, health, and cash flow (liquidity).
                                </p>
                                <p>
                                    Before lighting the stove for the first time in a new house (or after renovation), it is crucial to perform this simple yet powerful ritual to appease <strong>Annapurna Devi</strong> (Goddess of Food) and remove any negative vibrations from the cooking area.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🍲</span> Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health (Arogya)</h4>
                                            <p className="text-sm text-gray-600">Pure food leads to pure thoughts. The puja cleanses the 'Prana' in the food.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Safety</h4>
                                            <p className="text-sm text-gray-600">Protects against fire accidents and gas leaks by appeasing Agni Dev.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Abundance</h4>
                                            <p className="text-sm text-gray-600">Ensures the grain storage (Bhandar) never runs empty.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Ritual Steps</h2>
                                <p className="text-gray-600">This ceremony takes about <strong>30 to 45 minutes</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Stove Pujan</h4>
                                            <p className="text-sm text-gray-600">Cleaning the new gas stove, applying turmeric/kumkum dots, and worshipping it as a form of Agni.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Boiling Milk (Dugdha-Uman)</h4>
                                            <p className="text-sm text-gray-600">Boiling a pot of milk until it overflows. The direction of overflow predicts the family's fortune (all directions are good!).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sweet Preparation</h4>
                                            <p className="text-sm text-gray-600">Using that same milk to make a sweet (usually Kheer or Halwa) as the first offering to God.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">When to Perform?</h2>
                                <p className="text-gray-700 mb-4">
                                    Ideally done as the very first act of the <strong>Griha Pravesh</strong>.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Before cooking regular meals:</strong> Do not boil tea or water before this puja.</li>
                                    <li><strong>Renovation:</strong> If you installed a new modular kitchen or stove.</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is it part of Griha Pravesh?", a: "Yes, usually included. But if you renovated ONLY the kitchen, you can book this separately." },
                                        { q: "Cost for standalone puja?", a: "₹1,500 if booked separately from Griha Pravesh." },
                                        { q: "Do we need a new utensil?", a: "Yes, ideally use a new Stainless Steel or Copper pot for boiling the milk." },
                                        { q: "What if milk burns?", a: "Don't worry. The ritual is symbolic. Burning is just a physics accident, not a bad omen. Focus on the prayer." },
                                        { q: "Can we use induction stove?", a: "Yes, Agni is present in electricity too. The ritual remains the same." },
                                        { q: "Who should boil the milk?", a: "The lady of the house (Gruhalakshmi) typically performs this act." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Kitchen Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹1,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Inc. Travel</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">30 - 45 Mins</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Vedic Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kitchen%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Satisfaction Guarantee
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Families Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 5.0/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Authentic Method
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Start Cooking Auspiciously</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Ensure health and wealth with a proper Kitchen Opening Puja.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
