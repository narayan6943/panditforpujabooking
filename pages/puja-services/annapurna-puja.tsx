import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AnnapurnaPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Annapurna Puja in Pune',
        description: 'Book Pandit for Annapurna Puja in Pune. Worship of the Goddess of Food for abundance in kitchen, hotel business, and family health.',
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
            reviewCount: '50'
        }
    }

    return (
        <>
            <Head>
                <title>Annapurna Puja in Pune | Goddess of Food</title>
                <meta name="description" content="Book Pandit for Annapurna Puja in Pune. Essential for hotels, restaurants, and home kitchens. Ensures no shortage of food (Dhanya) and health for the family." />
                <meta name="keywords" content="annapurna puja pune, puja for restaurant opening, food goddess puja, kitchen puja vidhi" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/annapurna-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-green-50 to-white">
                <section className="relative bg-emerald-600 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-emerald-50 text-sm font-semibold tracking-wide uppercase">Goddess of Nourishment</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Maa Annapurna Puja <br />
                                    <span className="text-yellow-200">Abundance of Food</span>
                                </h1>
                                <p className="text-lg text-emerald-50/90 border-l-4 border-yellow-300 pl-4 leading-relaxed">
                                    Mata Annapurna ensures that the "Bhandara" (grain store) of the house never runs dry. She is the presiding deity of Kashi and every kitchen.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-emerald-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book for Kitchen
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Annapurna%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-emerald-800 border-b-2 border-yellow-400 pb-2">Why Annapurna Puja?</h2>
                                <p>
                                    Food is Brahma ("Annam Brahma"). Before one can achieve spiritual growth or family peace, the basic need of nourishment must be met.
                                </p>
                                <p>
                                    This puja is critical for <strong>restaurants, catering businesses, canteens, and every household</strong> to ensure that the food cooked is tasty, healthy, and never falls short for guests.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-emerald-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌾</span> Prosperity Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Never-Ending Supply</h4>
                                            <p className="text-sm text-gray-600">Ensures "Akshaya Patra" - unending supply of grains and wealth.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Tasty & Healthy Food</h4>
                                            <p className="text-sm text-gray-600">Blesses the cook's hand (Swaad) so family stays healthy.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-emerald-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Atithi Satkar</h4>
                                            <p className="text-sm text-gray-600">Empowers you to feed guests and the poor (Annadanam).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-emerald-800">The Ritual Process</h2>
                                <p className="text-gray-600">Duration: <strong>1 - 1.5 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Rice Heap Sthapana</h4>
                                            <p className="text-sm text-gray-600">Installing the Goddess on a heap of rice or wheat grains.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Annapoorna Stotram</h4>
                                            <p className="text-sm text-gray-600">Reciting the beautiful Adishankaracharya composed stotra.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Bhog Offering</h4>
                                            <p className="text-sm text-gray-600">Offering pure Kheer (Rice Pudding) or sweet dish to the Devi.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                                        <div className="min-w-[40px] font-bold text-emerald-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-emerald-900">Vastu/Kitchen Blessings</h4>
                                            <p className="text-sm text-gray-600">Sprinkling the holy water in the pantry and kitchen area.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                                <h2 className="text-2xl font-serif font-bold text-emerald-800 mb-4">For Restaurants</h2>
                                <p className="text-gray-700 mb-4">
                                    For commercial kitchens, we perform a special <strong>'Bhandara Vriddhi'</strong> sankalp to reduce wastage and increase customer footfall.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Best day for Annapurna Puja?", a: "Akshaya Tritiya, Annapurna Jayanti (Margashirsha Purnima), or Fridays." },
                                        { q: "Can we keep Annapurna idol?", a: "Yes, small silver or brass idol in rice pot is very auspicious." },
                                        { q: "Cost of the Puja?", a: "Starts from ₹2,100." },
                                        { q: "Is it linked to Lakshmi?", a: "Yes, Annapurna is a form of Lakshmi and Parvati combined." },
                                        { q: "What offerings?", a: "Cooked rice, milk, and sugar are must." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-emerald-300 transition-colors">
                                            <p className="font-bold text-emerald-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Annapurna Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-200">
                                    <div className="bg-emerald-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-emerald-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Business Growth</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-emerald-900">1.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-emerald-900">Devi Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-emerald-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Annapurna%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Zero Wastage Life
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-emerald-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Hotel Industry Choice
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Traditional Stotras
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-emerald-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Full Plate, Full Life</h2>
                        <p className="text-emerald-200 mb-8 max-w-2xl mx-auto">
                            Ensure your family is always nourished with Mother Annapurna's blessings.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-emerald-900 hover:bg-yellow-300 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
