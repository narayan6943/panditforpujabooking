import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GayatriHomaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gayatri Homa in Pune',
        description: 'Book Pandit for Gayatri Homa in Pune. Mother of all Vedas. Best for destroying past karma, spiritual growth, and purification (Shutdikaran).',
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
            price: '3100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '65'
        }
    }

    return (
        <>
            <Head>
                <title>Gayatri Homa in Pune | Mother of Vedas</title>
                <meta name="description" content="Book Pandit for Gayatri Homa in Pune. The most potent Havan for burning sins, purification (Shudhikaran), and attaining divine wisdom. Authentic Vedic Vidhi." />
                <meta name="keywords" content="gayatri homa pune, gayatri mantra havan, shudhikaran puja, puja for past karma removal" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/gayatri-homa" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-orange-50 to-white">
                <section className="relative bg-orange-500 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-orange-50 text-sm font-semibold tracking-wide uppercase">Veda Mata</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Gayatri Homa <br />
                                    <span className="text-yellow-200">Burn Past Karma</span>
                                </h1>
                                <p className="text-lg text-orange-100/90 border-l-4 border-yellow-300 pl-4 leading-relaxed">
                                    The Gayatri Mantra is the essence of all Vedas. Performing a Homa with this mantra burns accumulated sins and negativities, bringing tejas (radiance) and clarity to life.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Homa
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gayatri%20Homa" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-orange-800 border-b-2 border-yellow-400 pb-2">Significance</h2>
                                <p>
                                    Gayatri is not just a Goddess; she is the divine light (Savita) that illuminates our intellect (Dhiyo Yo Nah Prachodayat).
                                </p>
                                <p>
                                    It is said that one Gayatri Homa is equivalent to thousands of other pujas in terms of <strong>Purification (Shudhikaran)</strong>. It is often done after a death in the family (after the mourning period) or to restart life after a major failure.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-orange-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🔥</span> Havan Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-orange-800 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Karma Cleansing</h4>
                                            <p className="text-sm text-gray-600">Burns the seeds of past bad karma preventing current success.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-orange-800 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Spiritual Growth</h4>
                                            <p className="text-sm text-gray-600">Essential for those seeking enlightenment or deeper meditation.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-orange-800 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Longevity (Ayush)</h4>
                                            <p className="text-sm text-gray-600">Improves health and vitality (Prana Shakti) of the family.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-orange-800">Ritual Procedure</h2>
                                <p className="text-gray-600">Duration: <strong>2 - 3 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Punyahavachanam</h4>
                                            <p className="text-sm text-gray-600">Purification of the body and place with Varuna mantras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Gayatri Avahana</h4>
                                            <p className="text-sm text-gray-600">Invoking the solar energy of Gayatri into the fire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">1008 Ahutis</h4>
                                            <p className="text-sm text-gray-600">Offering Samidha (sacred wood) dipped in ghee with each chant.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Jayanti Homa</h4>
                                            <p className="text-sm text-gray-600">Concluding offerings for victory and peace.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                                <h2 className="text-2xl font-serif font-bold text-orange-800 mb-4">Upanayana Connection</h2>
                                <p className="text-gray-700 mb-4">
                                    This Homa is also the core part of the Thread Ceremony (Munja/Upanayana). If you are looking for a full Munja ceremony, please visit our <Link href="/puja-services" className="text-orange-600 font-bold hover:underline">All Services</Link> page.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-orange-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can women perform Gayatri Homa?", a: "Yes, in Vedic times women were Rishikas. We follow the tradition that allows everyone to worship light." },
                                        { q: "Best day?", a: "Sundays (Sun's day) or Gayatri Jayanti." },
                                        { q: "Cost of the Homa?", a: "Starts from ₹3,100." },
                                        { q: "Is fasting required?", a: "Light satvik food is recommended before the Homa." },
                                        { q: "Can this be done for house warming?", a: "Yes, usually combined with Vastu Shanti for powerful cleansing." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-orange-300 transition-colors">
                                            <p className="font-bold text-orange-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Gayatri Homa" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200">
                                    <div className="bg-orange-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-orange-900">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Includes Havan</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-orange-900">2.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-orange-900">Vedic Acharya</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-orange-900 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gayatri%20Homa">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Spiritual Peace Guaranteed
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-orange-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Pure Ghee Havan
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Mantras
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-orange-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Experience Divine Light</h2>
                        <p className="text-orange-200 mb-8 max-w-2xl mx-auto">
                            Let the Gayatri Homa illuminate your path and purify your life.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-orange-900 hover:bg-yellow-300 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
