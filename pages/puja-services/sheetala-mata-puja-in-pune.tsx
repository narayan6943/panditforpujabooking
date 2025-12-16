import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SheetalaMataPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sheetala Mata Puja in Pune',
        description: 'Book Pandit for Sheetala Mata Puja in Pune. Healing puja for skin diseases, chickenpox, measles, and general immunity.',
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
            reviewCount: '40'
        }
    }

    return (
        <>
            <Head>
                <title>Sheetala Mata Puja in Pune | Cure Skin Disease & Pox</title>
                <meta name="description" content="Book Pandit for Sheetala Mata Puja in Pune. The divine remedy for chickenpox, measles, fever, and skin infections. Performed on Sheetala Ashtami or as required." />
                <meta name="keywords" content="sheetala mata puja pune, puja for skin disease, chickenpox cure puja, sheetala ashtami puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/sheetala-mata-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-blue-50 to-white">
                <section className="relative bg-teal-600 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-teal-50 text-sm font-semibold tracking-wide uppercase">Goddess of Cooling</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Sheetala Mata Puja <br />
                                    <span className="text-yellow-200">Heal & Protect</span>
                                </h1>
                                <p className="text-lg text-teal-50/90 border-l-4 border-yellow-300 pl-4 leading-relaxed">
                                    Traditionally worshipped to cure diseases like Chickenpox and Measles. "Sheetal" means Cool—She cools the burning sensation of fever and infections.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-white text-teal-700 hover:bg-teal-50 font-bold shadow-lg shadow-teal-900/20 border-none">
                                        Book for Health
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sheetala%20Mata%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-teal-800 border-b-2 border-yellow-400 pb-2">Why Sheetala Mata?</h2>
                                <p>
                                    In Indian tradition, when medical science struggles with viral fevers and eruptions, faith in Sheetala Mata brings relief. She carries a broom (to dust off germs), a fan (to cool the patient), and a pot of healing water.
                                </p>
                                <p>
                                    This puja is specifically for families suffering from recurring skin issues or during an outbreak of pox.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-teal-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-teal-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🏺</span> Healing Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-teal-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Cures Skin Diseases</h4>
                                            <p className="text-sm text-gray-600">Effective for boils, acne, rashes, and pox-related scars.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-teal-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Immunity Boost</h4>
                                            <p className="text-sm text-gray-600">Protects children from seasonal viral infections.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-teal-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Reduces Fever</h4>
                                            <p className="text-sm text-gray-600">Spiritual cooling for high-temperature conditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-teal-800">Traditional Vidhi (Basoda)</h2>
                                <p className="text-gray-600">Duration: <strong>1.5 - 2 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                                        <div className="min-w-[40px] font-bold text-teal-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-teal-900">Cold Food Offering</h4>
                                            <p className="text-sm text-gray-600">Unique rule: Only cold (stale) food prepared the previous night (Basoda) is offered. No fresh hot food.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                                        <div className="min-w-[40px] font-bold text-teal-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-teal-900">Neem Leaves Ritual</h4>
                                            <p className="text-sm text-gray-600">Using Neem leaves for purification and cooling during the puja.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                                        <div className="min-w-[40px] font-bold text-teal-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-teal-900">Sheetala Ashtak Path</h4>
                                            <p className="text-sm text-gray-600">Reading the Sheetala Ashtak Stotra to invoke her healing grace.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                                        <div className="min-w-[40px] font-bold text-teal-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-teal-900">Donkey Feeding</h4>
                                            <p className="text-sm text-gray-600">Offering food mentally or physically to a donkey (her Vahana).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
                                <h2 className="text-2xl font-serif font-bold text-teal-800 mb-4">No Agni/Fire</h2>
                                <p className="text-gray-700 mb-4">
                                    Unlike other pujas, <strong>we do NOT light a Havan or heavy lamps</strong> for Sheetala Mata, as she represents coolness. The puja is simple, soothing, and focuses on cold offerings.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-teal-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "When is Sheetala Ashtami?", a: "It falls 8 days after Holi (Chaitra Krishna Ashtami)." },
                                        { q: "Can we do this anytime?", a: "Yes, if someone in the family has a skin ailment, it can be done any day." },
                                        { q: "Cost of the Puja?", a: "Starts from ₹2,100." },
                                        { q: "Is it safe during illness?", a: "Yes, it is non-intrusive and brings psychological peace to the patient." },
                                        { q: "What food to make?", a: "Sweet rice (Oliya), Puri, and Halwa made usually the night before." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-teal-300 transition-colors">
                                            <p className="font-bold text-teal-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Sheetala Mata Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-200">
                                    <div className="bg-teal-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-teal-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Healing Ritual</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-teal-900">2 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-teal-900">Experienced</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-teal-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sheetala%20Mata%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Compassionate Service
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-teal-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Hygiene Focus
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

                <section className="bg-teal-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Heal with Faith</h2>
                        <p className="text-teal-200 mb-8 max-w-2xl mx-auto">
                            May the cool benevolent gaze of Sheetala Mata restore health.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-teal-900 hover:bg-yellow-300 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
