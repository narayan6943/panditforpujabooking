import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KamakhyaDeviPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kamakhya Devi Puja in Pune',
        description: 'Book Kamakhya Devi Puja in Pune for fertility, solving relationship issues, and fulfilling deep desires. Authentic Tantric rituals by experts.',
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
            ratingValue: '4.9',
            reviewCount: '85'
        }
    }

    return (
        <>
            <Head>
                <title>Kamakhya Devi Puja in Pune | Fertility & Relationship Success</title>
                <meta name="description" content="Book Pandit for Kamakhya Devi Puja in Pune. The most powerful puja for child conception (fertility), removing love obstacles, and fulfilling wishes." />
                <meta name="keywords" content="kamakhya devi puja pune, fertility puja, love problem solution puja, tantra puja for marriage, kamakhya sindoor" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/kamakhya-devi-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-pink-50/20 to-white">
                <section className="relative bg-pink-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-950 via-pink-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-pink-500/20 border border-pink-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-pink-300 text-sm font-semibold tracking-wide uppercase">Mother of Desire</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Kamakhya Devi Puja <br />
                                    <span className="text-pink-400">Creation & Love</span>
                                </h1>
                                <p className="text-lg text-pink-100/90 border-l-4 border-pink-500 pl-4 leading-relaxed">
                                    Maa Kamakhya is the "Bleeding Goddess" of fertility and desire. This puja is the ultimate remedy for couples facing infertility, marital discord, or obstacles in love marriage.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-pink-600 text-white hover:bg-pink-500 font-bold shadow-lg shadow-pink-600/20 border-none">
                                        Book for Fertility
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kamakhya%20Devi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-pink-400 pb-2">Why Kamakhya Puja?</h2>
                                <p>
                                    Located in Assam, the Kamakhya temple is one of the 51 Shakti Peethas. It represents the creative power (Yoni) of Sati.
                                </p>
                                <p>
                                    Worshipping her form invokes the primal energy of creation, making it highly effective for conception and resolving complex relationship issues (Vashikaran for good intent).
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌺</span> Divine Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Solved Infertility</h4>
                                            <p className="text-sm text-gray-600">Helps couples conceive by removing hormonal/karmic blocks.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Love Problems</h4>
                                            <p className="text-sm text-gray-600">Resolves misunderstandings and brings back lost love (if meant to be).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Remove Black Magic</h4>
                                            <p className="text-sm text-gray-600">Specifically magic done to delay marriage or break families.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Tantric Ritual Steps</h2>
                                <p className="text-gray-600">Duration: <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kumkum Archana</h4>
                                            <p className="text-sm text-gray-600">Worshipping the Devi Yantra with massive amounts of sacred vermilion (Kumkum).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Yoni Mudra Offering</h4>
                                            <p className="text-sm text-gray-600">Performing specific hand gestures (Mudras) to please the Mother.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kamakhya Homa</h4>
                                            <p className="text-sm text-gray-600">Usage of lotus flowers, ghee, and 'Kamakhya Sindoor' in the fire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                                        <div className="min-w-[40px] font-bold text-pink-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Blessing</h4>
                                            <p className="text-sm text-gray-600">You receive the energized 'Kamakhya Sindoor' to apply daily.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-pink-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Kamakhya Sindoor</h2>
                                <p className="text-gray-700 mb-4">
                                    The "Rakt-Vastra" (Cloth soaked in the Goddess's ample flow during Ambubachi Mela) is extremely rare. We use a portion of this sacred blessing during the puja to energize your aura.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can this help me conceive?", a: "Yes, it is the most recommended puja for Santhan prapti (progeny) issues." },
                                        { q: "Is it Vashikaran?", a: "It has Vashikaran (attraction) elements, but we only perform it for legitimate relationships (husband-wife)." },
                                        { q: "Cost of Kamakhya Puja?", a: "Starts from ₹5,100 including the Sindoor prasadam." },
                                        { q: "Menstruating women allowed?", a: "Ironically, yes. Unlike other temples, this Goddess celebrates menstruation, so it is not a taboo here." },
                                        { q: "Is it safe?", a: "Yes, absolutely safe and Satvik/Rajasic form of worship." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-pink-300 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Kamakhya Devi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-200">
                                    <div className="bg-pink-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹5,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Rare & Powerful</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Shakti Worshipper</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-white shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kamakhya%20Devi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Privacy Guaranteed
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-pink-500">★</span> 99% Privacy
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-pink-500">★</span> Authentic Sindoor
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Mother Fulfills All Desires</h2>
                        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
                            Don't lose hope. The blessings of Kamakhya Devi can create miracles.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-pink-600 text-white hover:bg-pink-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
