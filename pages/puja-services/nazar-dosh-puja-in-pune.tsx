import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NazarDoshPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Nazar Dosh Puja in Pune',
        description: 'Book Nazar Dosh Puja in Pune to remove evil eye effects. Protect your children, business, and home from jealousy and negative vibes.',
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
            ratingValue: '4.9',
            reviewCount: '150'
        }
    }

    return (
        <>
            <Head>
                <title>Nazar Dosh Puja in Pune | Evil Eye Removal Rituals</title>
                <meta name="description" content="Book Pandit for Nazar Dosh Puja in Pune. Remove evil eye from children, business, or new home. Authentic Vedic and Tantric remedies for Drishti Dosha." />
                <meta name="keywords" content="nazar dosh puja pune, evil eye removal puja, drishti dosha pariharam, nazar utarna mantra, remove jealousy puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/nazar-dosh-puja-in-pune" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Protection from Envy</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Nazar Dosh Nivaran <br />
                                    <span className="text-gold-400">Evil Eye Removal</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Is unexpected bad luck hitting your flourishing business or happy family? It could be "Nazar" (Evil Eye). We perform powerful Vedic rituals to neutralize jealousy and negative vibrations instantly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Remove Evil Eye
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Nazar%20Dosh%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">What is Nazar Dosh?</h2>
                                <p>
                                    According to ancient Indian belief, a strong gaze of jealousy or malice (Burri Nazar) can cause physical illness, business losses, or family disputes. This is not superstition but a transfer of negative psychic energy.
                                </p>
                                <p>
                                    Our puja invokes Lord Hanuman and Goddess Durga to create a "Kavach" (Shield) that reflects this negativity back to its source.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🛡️</span> Protective Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Restores Health</h4>
                                            <p className="text-sm text-gray-600">Effective for children who fall sick suddenly without medical reason.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Business Revival</h4>
                                            <p className="text-sm text-gray-600">Removes blocks causing sudden drop in customers or sales.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Peace of Mind</h4>
                                            <p className="text-sm text-gray-600">Stops unnecessary quarrels and restores harmony at home.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Our Proven Remedies</h2>
                                <p className="text-gray-600">Duration: <strong>1.5 to 2 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Hanuman Chalisa Path</h4>
                                            <p className="text-sm text-gray-600">Reciting the Chalisa 7 or 11 times to invoke Bajrangbali's protection.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Nimbu-Mirchi Ritual</h4>
                                            <p className="text-sm text-gray-600">The traditional method (Vedic style) of absorbing negativity into lemons and chilis.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Black Thread Ties</h4>
                                            <p className="text-sm text-gray-600">Panditji will energize a black thread (Raksha Sutra) for you to wear.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Bhairav Puja</h4>
                                            <p className="text-sm text-gray-600">Offering alcohol (symbolic) or black sesame to Lord Bhairav to cut evil influences.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Who Needs This?</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>New Born Babies:</strong> They are most susceptible to admiring glances that turn negative.</li>
                                    <li><strong>New Shops/Factories:</strong> Competitors' jealousy can harm machinery and sales.</li>
                                    <li><strong>Beautiful Homes:</strong> A new, well-decorated house often attracts the evil eye of passersby.</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How often should we do this?", a: "For businesses, once every Amavasya (New Moon) is recommended. For homes, once a year." },
                                        { q: "Is it same as Black Magic removal?", a: "No, Nazar is much milder than Black Magic. This puja is lighter and quicker." },
                                        { q: "Cost of Nazar Dosh Puja?", a: "Starts from ₹2,500. Very affordable and effective." },
                                        { q: "Can I do it myself?", a: "Simple remedies can be done, but a professionally chanted Raksha Mantra provides stronger protection." },
                                        { q: "Will the Pandit bring samagri?", a: "Yes, we bring all necessary items like black mustard, lemons, camphor, etc." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Nazar Dosh Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹2,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Instant Relief</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">1.5 - 2 Hours</span>
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
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Nazar%20Dosh%20Puja">
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
                                            <span className="text-gold-500">★</span> 4.9/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Traditional Methods
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Break the Evil Eye</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Don't let jealousy stop your progress. Protect your family and business today.
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
