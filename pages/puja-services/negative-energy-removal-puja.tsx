import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NegativeEnergyRemovalPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Negative Energy Removal Puja in Pune',
        description: 'Book Negative Energy Removal Puja in Pune. Cleanse your home of bad vibes, evil eye, and paranormal disturbances. Expert Tantra-Mantra Vedic solutions.',
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
            price: '4100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '180'
        }
    }

    return (
        <>
            <Head>
                <title>Negative Energy Removal Puja in Pune | Home Cleansing Ritual</title>
                <meta name="description" content="Book Puja to Remove Negative Energy in Pune. Get rid of evil eye, unexplained fears, and heaviness in the house. Powerful Sudarshan & Hanuman Havan." />
                <meta name="keywords" content="negative energy removal puja pune, home cleansing puja, remove ghost puja pune, evil eye protection, sudarshan homa pune" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/negative-energy-removal-puja" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Spiritual Cleansing</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Negative Energy Removal <br />
                                    <span className="text-gold-400">Purify Your Home</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Do you feel heavy, anxious, or uncomfortable in your own house? Our specialized Vedic rituals cleanse the aura of your home, removing all traces of negativity, evil eye, and unwanted spirits.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Cleansing
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Negative%20Energy%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Signs of Negative Energy</h2>
                                <p>
                                    Just as dust accumulates on surfaces, psychic debris accumulates in the atmosphere. Common signs include:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Constant mood swings and tiredness.</li>
                                    <li>Electronic items breaking frequently without reason.</li>
                                    <li>Plants dying despite care.</li>
                                    <li>Children crying incessantly at night.</li>
                                </ul>
                                <p>
                                    Our puja utilizes the fierce forms of Lord Vishnu (Sudarshan) and Lord Hanuman to burn this negativity to ashes.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🧹</span> Purification Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Lightness</h4>
                                            <p className="text-sm text-gray-600">The house immediately feels lighter, brighter, and more breathable.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sleep Quality</h4>
                                            <p className="text-sm text-gray-600">Nightmares cease, and residents enjoy deep, restorative sleep.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Protection Shield</h4>
                                            <p className="text-sm text-gray-600">Creates a spiritual perimeter that prevents new negativity from entering.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Cleansing Rituals</h2>
                                <p className="text-gray-600">We use Satvik Vedic methods (no black magic). Duration: <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Gomutra & Salt cleanse</h4>
                                            <p className="text-sm text-gray-600">Sprinkling Cow Urine and Sea Salt water in every corner to physically absorb negativity.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sudarshan Homa</h4>
                                            <p className="text-sm text-gray-600">Invoking the Sudarshan Chakra to cut through energetic blockages and evil spirits.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Rakshoghna Suktam</h4>
                                            <p className="text-sm text-gray-600">Chanting specific Vedic hymns designed to drive away demons and negativity.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Dhuni (Fumigation)</h4>
                                            <p className="text-sm text-gray-600">Spreading the holy smoke of Guggul and Loban throughout the house.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">When is it Urgent?</h2>
                                <p className="text-gray-700 mb-4">You should book this immediately if:</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>You feel someone is "watching" you when alone.</li>
                                    <li>You see shadows moving in peripheral vision.</li>
                                    <li>There is a sudden onset of bad luck or accidents.</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is this Black Magic?", a: "NO. We are Vedic Brahmins. We use positive divine energies (Satvik Tantra) to REMOVE black magic, not create it." },
                                        { q: "Cost of Cleansing?", a: "Packages start from ₹4,100 depending on the size of the house and severity." },
                                        { q: "Is it safe for kids?", a: "Yes, it is completely safe. The positive vibrations are beneficial for them." },
                                        { q: "How long does the effect last?", a: "If followed by daily lamp lighting, the effect is permanent." },
                                        { q: "Do you come to the house?", a: "Yes, this puja MUST be done at the affected location to be effective." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Negative Energy Removal Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹4,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Full Cleansing</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Exorcism Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Negative%20Energy%20Removal">
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
                                            <span className="text-gold-500">★</span> Vetted Pandits
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Powerful Solutions
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Reclaim Your Home</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Don't live in fear. Restore the light and positivity in your sanctuary.
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
