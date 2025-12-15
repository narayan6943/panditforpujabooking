import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function TulsiVivahPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Tulsi Vivah Puja in Pune',
        description: 'Book Pandit for Tulsi Vivah Puja in Pune. Perform the ceremonial marriage of Basil (Tulsi) and Shaligram (Vishnu). Authentic Wedding Vidhi.',
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
            reviewCount: '280'
        }
    }

    return (
        <>
            <Head>
                <title>Tulsi Vivah Puja in Pune | Tulsi Shaligram Marriage</title>
                <meta name="description" content="Book Pandit for Tulsi Vivah Puja in Pune. Authentic ceremonial marriage of Tulsi Devi and Shaligram/Krishna. Marks the start of wedding season." />
                <meta name="keywords" content="tulsi vivah puja pune, tulsi shaligram marriage, pandit for tulsi vivah, kartik purnima puja, tulsi wedding vidhi" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/tulsi-vivah-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-green-50/20 to-white">
                <section className="relative bg-green-800 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Divine Wedding</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Tulsi Vivah Puja <br />
                                    <span className="text-yellow-400">Union of Devotion</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                                    Perform the sacred marriage ceremony of Goddess Tulsi (Vrinda) and Lord Shaligram (Vishnu). This puja marks the end of Chaturmas and the beginning of the auspicious wedding season in Hinduism.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Tulsi Vivah
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Tulsi%20Vivah%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-green-900 border-b-2 border-yellow-500 pb-2">The Story of Tulsi Vivah</h2>
                                <p>
                                    Tulsi is considered the holiest plant in Hinduism, an incarnation of Vrinda. Her devotion was so powerful that Lord Vishnu blessed her to be his consort.
                                </p>
                                <p>
                                    Performing Tulsi Vivah is akin to performing the Kanyadaan (giving away of daughter) of Tulsi Mata to Lord Vishnu. It is believed to grant the merit of a thousand Ashwamedha Yagnas and brings immense marital bliss to the home.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-green-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">💍</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Merit of Kanyadaan</h4>
                                            <p className="text-sm text-gray-600">Couples without daughters can earn the merit of Kanyadaan through this puja.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Marital Harmony</h4>
                                            <p className="text-sm text-gray-600">Resolves conflicts between husband and wife and ensures a happy life.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Removes Obstacles</h4>
                                            <p className="text-sm text-gray-600">Tulsi is 'Vishnupriya', and her worship pleases Lord Vishnu to remove all hurdles.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-green-900">Wedding Ceremony (Vidhi)</h2>
                                <p className="text-gray-600">The puja is performed just like a traditional Hindu wedding. Duration: <strong>1.5 - 2 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Mandap Installation (Decor)</h4>
                                            <p className="text-sm text-gray-600">Decorating the Tulsi pot (Vrindavan) with sugarcane mandap and flowers.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Ganesh & Varun Puja</h4>
                                            <p className="text-sm text-gray-600">Initial blessings and invocation of all Gods attending the wedding.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Vivah Vidhi (Marriage)</h4>
                                            <p className="text-sm text-gray-600">Offering Mangalsutra, doing Kanyadaan, and tying the knot between Tulsi & Shaligram.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-green-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-green-900">Mangalashtaka & Aarti</h4>
                                            <p className="text-sm text-gray-600">Chanting the 8 auspicious verses (Mangalashtaka) and concluding with Aarti.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-green-50 p-8 rounded-2xl border border-green-200">
                                <h2 className="text-2xl font-serif font-bold text-green-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">You need to act as the bride's parents. Keep ready:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Sugarcane Sticks (for Mandap)</span>
                                    <span>• Sari/Blouse Piece for Tulsi</span>
                                    <span>• Green Bangles & Shringar</span>
                                    <span>• Shaligram Stone or Vishnu Idol</span>
                                    <span>• Tamarind & Amla</span>
                                    <span>• Wedding Garland (Varmala)</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-green-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "When is Tulsi Vivah?", a: "It typically starts from Prabodhini Ekadashi and ends on Kartik Purnima." },
                                        { q: "Can we do it in an apartment?", a: "Yes, you can do it with a small Tulsi pot in your balcony or living room." },
                                        { q: "Do we need to fast?", a: "It is good to fast until the marriage ceremony is completed in the evening." },
                                        { q: "Is a priest required?", a: "While simple puja can be done by self, a Pandit invokes the true wedding mantras which is highly auspicious." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                            <p className="font-bold text-green-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Tulsi Vivah Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-500">
                                    <div className="bg-green-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Vivah Puja from</p>
                                            <div className="text-4xl font-bold text-green-900">₹2,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Full Wedding Vidhi</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-green-900">1.5 - 2 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-green-900">Vedic Shastri</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 shadow-md border-none">
                                                    Call to Perfect
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Tulsi%20Vivah%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🌿 Divine Blessings
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-green-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Complete Marriage Rituals
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Knowledge of Mangalashtaka
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-green-500">★</span> Blessed by Tradition
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-green-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Shubh Tulsi Vivah!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May your family be blessed with abundance and love.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
