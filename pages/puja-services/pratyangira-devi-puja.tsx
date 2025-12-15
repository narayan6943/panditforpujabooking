import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function PratyangiraDeviPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Pratyangira Devi Puja in Pune',
        description: 'Book Pratyangira Devi Puja in Pune for protection against severe black magic, evil eye, and enemies. Authentic Ugra Devata Homa by experts.',
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
            price: '5500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '45'
        }
    }

    return (
        <>
            <Head>
                <title>Pratyangira Devi Puja in Pune | Remove Black Magic & Evil Eye</title>
                <meta name="description" content="Book Pandit for Pratyangira Devi Puja in Pune. The most powerful Havan to reverse black magic (Abhichara) and protect against hidden enemies." />
                <meta name="keywords" content="pratyangira devi puja pune, black magic reversal puja, nikumbala yagna, atharvana bhadrakali homa, enemy destruction puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/pratyangira-devi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-red-950 to-black text-white">
                <section className="relative bg-red-900 py-16 md:py-24 overflow-hidden border-b border-red-700">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-red-800/60 border border-red-500/50 rounded-full px-4 py-1.5">
                                    <span className="text-red-300 text-sm font-semibold tracking-wide uppercase">Reverse All Evil</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-red-500">
                                    Maha Pratyangira Homa <br />
                                    <span className="text-white">The Lion-Faced Mother</span>
                                </h1>
                                <p className="text-lg text-gray-300 border-l-4 border-red-600 pl-4 leading-relaxed">
                                    She is "Atharvana Bhadrakali", the goddess who reverses black magic. If you are a victim of severe negativity, jealousy, or witchcraft, Pratyangira Devi is the ultimate shield and sword.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-red-700 text-white hover:bg-red-600 font-bold shadow-lg shadow-red-900/40 border-none">
                                        Book Protection Homa
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Pratyangira%20Devi%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                            Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12 bg-white text-gray-900">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-12">

                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-black border-b-2 border-red-600 pb-2">Who is Pratyangira Devi?</h2>
                                <p>
                                    She has the face of a lion and body of a woman (Narasimhi). She emerged from the third eye of Lord Shiva to pacify the ferocious Narasimha avatar of Vishnu.
                                </p>
                                <p>
                                    She is worshipped specifically to <strong>reverse</strong> any negative energy sent towards you. Unlike other pujas that shield you, this puja sends the evil back to its source.
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-black mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🛡️</span> Protective Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Black Magic Reversal</h4>
                                            <p className="text-sm text-gray-600">Nullifies affects of Voodoo, Witchcraft, or evil spells.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Psychic Protection</h4>
                                            <p className="text-sm text-gray-600">Stops bad dreams, sleep paralysis, and sense of heavy presence.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Accident Prevention</h4>
                                            <p className="text-sm text-gray-600">Protects from sudden accidents or unnaturally frequent mishaps.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-black">Red Chillies Ritual</h2>
                                <p className="text-gray-600">Performed preferably on <strong>Amavasya or Purnima</strong>. Duration: <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-black">Maha Sankalp</h4>
                                            <p className="text-sm text-gray-600">Declaring the intent to remove specific disturbances.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-black">Dried Red Chillies Havan</h4>
                                            <p className="text-sm text-gray-600">The unique offering of dried red chillies into the fire. Miraculously, the smoke does not cause coughing if negativity is present.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-black">Narasimha Mantra</h4>
                                            <p className="text-sm text-gray-600">Chanting ferocious mantras to invoke the lion energy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-black">Bhasma Dharan</h4>
                                            <p className="text-sm text-gray-600">Applying the sacred ash (Raksha Bhasma) from the homa on the forehead.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-4">Important Guidelines</h2>
                                <div className="space-y-2 text-gray-700">
                                    <p>⚠️ <strong>Not for Revenge:</strong> Do not perform this to harm others; it is for defense only.</p>
                                    <p>⚠️ <strong>Consultation:</strong> We recommend a consultation before booking this strong puja.</p>
                                    <p>⚠️ <strong>Diet:</strong> Strict vegetarian diet for 3 days before and after.</p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-black mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is it safe?", a: "Yes, when performed by our trained Vidya-Upashaks, it is perfectly safe and beneficial." },
                                        { q: "Why red chillies?", a: "Red chillies absorb the negative energy and burn it away in the Agni (fire)." },
                                        { q: "Cost of Pratyangira Homa?", a: "Starts from ₹5,500." },
                                        { q: "Can I do it alone?", a: "Yes, the person affected can sit for the puja alone or with family." },
                                        { q: "How fast are the results?", a: "Usually immediate relief is felt in terms of lightness of mind and better sleep." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-red-500 transition-colors">
                                            <p className="font-bold text-black text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Pratyangira Devi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
                                    <div className="bg-black p-4 text-center">
                                        <h3 className="text-red-500 font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-black">₹5,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-red-600 font-bold mt-1">✔ Tantric Reversal</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-black">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-black">Devi Upashak</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-md border-none">
                                                    Call for Protection
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Pratyangira%20Devi%20Puja">
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
                                    <h4 className="font-bold text-black mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Powerful Vidhi
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Safe Environment
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-black py-12 text-white text-center border-t border-gray-800">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Reverse The Evil</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let the Divine Mother shield you with her ferocity.
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
