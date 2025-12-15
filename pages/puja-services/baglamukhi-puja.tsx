import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function BaglamukhiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Baglamukhi Puja in Pune',
        description: 'Book Baglamukhi Puja in Pune for victory in court cases, legal disputes, and defeating enemies. Expert Pandit for Pitambara Devi Havan.',
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
            price: '5100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '112'
        }
    }

    return (
        <>
            <Head>
                <title>Baglamukhi Puja in Pune | Win Court Cases & Legal Battles</title>
                <meta name="description" content="Book Pandit for Baglamukhi Puja in Pune. Powerful Havan for winning court cases, stopping enemies, and legal victory. Authentic Pitambara Devi rituals." />
                <meta name="keywords" content="baglamukhi puja pune, court case winning puja, enemy protection puja, pitambara devi havan, legal victory puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/baglamukhi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-yellow-50/20 to-white">
                <section className="relative bg-yellow-600 text-maroon-900 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-maroon-900/10 border border-maroon-900/20 rounded-full px-4 py-1.5">
                                    <span className="text-maroon-900 text-sm font-semibold tracking-wide uppercase">Victory Guaranteed</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Maa Baglamukhi Puja <br />
                                    <span className="text-yellow-100">Silencer of Enemies</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-maroon-900 pl-4 leading-relaxed">
                                    Facing false accusations, prolonged court cases, or jealous competitors? Maa Baglamukhi (Pitambara) is the Mahavidya who paralyzes the speech and intellect of enemies, granting you absolute victory.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-maroon-900 text-white hover:bg-maroon-800 font-bold shadow-lg shadow-maroon-900/20">
                                        Win Legal Battle
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Baglamukhi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-yellow-400 pb-2">Who is Goddess Baglamukhi?</h2>
                                <p>
                                    She is the 8th Mahavidya, known as "Stambhana Shakti" (The power to stop/paralyze). She holds a club to smash misconceptions and pulls the tongue of the demon to stop evil speech.
                                </p>
                                <p>
                                    Her puja is performed exclusively in <strong>Yellow (Pitambar)</strong> color. It is the most potent remedy in Vedic astrology for winning legal disputes and silencing gossip.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">⚖️</span> Victory Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Win Court Cases</h4>
                                            <p className="text-sm text-gray-600">Turns the tide in divorce, property, or criminal cases in your favor.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Stop Rumors</h4>
                                            <p className="text-sm text-gray-600">Silences people spreading false information or defamation against you.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Political Success</h4>
                                            <p className="text-sm text-gray-600">Highly recommended for politicians facing opposition or election hurdles.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Powerful Vidhi</h2>
                                <p className="text-gray-600">This is a Tantric puja, performed with strict rules. Duration: <strong>4 to 5 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Haridra Ganpati Puja</h4>
                                            <p className="text-sm text-gray-600">Worshipping a specialized form of Ganesha made of turmeric root.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sankalp with Enemy Name</h4>
                                            <p className="text-sm text-gray-600">Taking a specific vow mentioning the case number or enemy name (secretly).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">36,000 Mantra Japa</h4>
                                            <p className="text-sm text-gray-600">Chanting the Beej Mantra "Hleem" by multiple Pandits simultaneously.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-yellow-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Haldi Havan</h4>
                                            <p className="text-sm text-gray-600">Performing Havan exclusively using yellow mustard (sarson) and turmeric sticks.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Rules & Diet</h2>
                                <div className="space-y-2 text-gray-700">
                                    <p>⚠️ <strong>Strict Brahmacharya:</strong> Must be maintained for 1 day before.</p>
                                    <p>⚠️ <strong>Yellow Clothes:</strong> You MUST wear yellow clothes during the puja.</p>
                                    <p>⚠️ <strong>Sececy:</strong> Do not tell anyone (especially enemies) that you are performing this puja.</p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can I do this for divorce?", a: "Yes, it is very effective for getting a favorable settlement in divorce cases." },
                                        { q: "Is it dangerous?", a: "No, we perform the 'Satvik' form of Baglamukhi puja which only stops the enemy, it doesn't harm them physically." },
                                        { q: "Cost of Baglamukhi Puja?", a: "Starts from ₹5,100 due to specialized yellow samagri and multiple Pandits." },
                                        { q: "Can women perform this?", a: "Yes, Goddess Baglamukhi is a female power herself. Women can definitely perform it." },
                                        { q: "How many days for result?", a: "Usually, significant changes are seen within 45 days or by the next court hearing." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Baglamukhi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-400">
                                    <div className="bg-yellow-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹5,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Tantra Vidhi</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">4 - 5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Tantra Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-md border-none">
                                                    Call to Win
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Baglamukhi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Confidential
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> 98% Success Rate
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Secretive Process
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Stop Your Enemies</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            Don't let them ruin your peace. Invoke the power of Baglamukhi today.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-maroon-900 hover:bg-yellow-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
