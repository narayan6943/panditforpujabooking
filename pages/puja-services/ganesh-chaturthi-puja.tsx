import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GaneshChaturthiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ganesh Chaturthi Puja in Pune',
        description: 'Book Pandit for Ganesh Chaturthi Sthapana Puja in Pune. Authentic Pran Pratishtha and Shodashopchar Puja. Eco-friendly rituals.',
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
            ratingValue: '4.9',
            reviewCount: '540'
        }
    }

    return (
        <>
            <Head>
                <title>Ganesh Chaturthi Puja in Pune | Book Pandit for Sthapana</title>
                <meta name="description" content="Book Pandit for Ganesh Chaturthi Puja in Pune. Authentic Pran Pratishtha, Shodashopchar Puja, and Visarjan Vidhi. 100% Verified Gurujis." />
                <meta name="keywords" content="ganesh chaturthi puja pune, ganpati sthapana pandit, ganesh puja booking, pran pratishtha vidhi, ecofriendly ganesh puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/ganesh-chaturthi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-orange-50/20 to-white">
                <section className="relative bg-orange-600 text-maroon-900 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-maroon-900/10 border border-maroon-900/20 rounded-full px-4 py-1.5">
                                    <span className="text-maroon-900 text-sm font-semibold tracking-wide uppercase">Pune's Favorite Festival</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Ganesh Chaturthi Puja <br />
                                    <span className="text-orange-100">Pran Pratishtha</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-maroon-900 pl-4 leading-relaxed">
                                    Welcome Bappa with authentic Vedic rituals. Our Pandits perform the complete Shodashopchar Puja, invoking life into the idol (Pran Pratishtha) to bring wisdom, prosperity, and joy to your home.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-maroon-900 text-white hover:bg-maroon-800 font-bold shadow-lg shadow-maroon-900/20">
                                        Book for Sthapana
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Chaturthi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-orange-400 pb-2">Why Ganesh Chaturthi?</h2>
                                <p>
                                    Ganesh Chaturthi marks the arrival of Lord Ganesha to earth from Kailash Parvat with his mother Goddess Parvati/Gauri. It is the most significant 10-day festival in Maharashtra.
                                </p>
                                <p>
                                    The core of the puja is <strong>Pran Pratishtha</strong>, a powerful ritual where the Pandit invokes the divine presence of Ganpati into the clay idol. Without this, the idol remains just a statue. Proper worship ensures the removal of all obstacles (Vighna) for the coming year.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🕉️</span> Divine Blessings
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Removes Obstacles</h4>
                                            <p className="text-sm text-gray-600">Clears path for success in career, business, and education.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Wisdom & Intellect</h4>
                                            <p className="text-sm text-gray-600">Grants Buddhi (Wisdom) and Siddhi (Success) to the family.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">New Beginnings</h4>
                                            <p className="text-sm text-gray-600">Most auspicious time to start new ventures or buy property.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">The Sthapana Vidhi</h2>
                                <p className="text-gray-600">The main Sthapana puja takes about <strong>45 to 60 minutes</strong>. Our Pandit Ji will perform:</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Swasti Vachan & Sankalp</h4>
                                            <p className="text-sm text-gray-600">Invoking the main deities and taking a vow for the wellbeing of the host.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shodol Upchar & Pran Pratishtha</h4>
                                            <p className="text-sm text-gray-600">The most important step: Invoking life into the idol with Mantra chanting and offering 16 types of service.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Abhishek (Symbolic) & Alankar</h4>
                                            <p className="text-sm text-gray-600">Betel nut Ganpati Abhishek and decorating the main idol with flowers/Durva.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Naivedya & Maha Aarti</h4>
                                            <p className="text-sm text-gray-600">Offering 21 Modaks and performing the main Aarti "Sukhkarta Dukhharta".</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">We will provide a detailed checklist after booking. Key items include:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Clay Idol (Shadu Mati)</span>
                                    <span>• Red Hibiscus Flowers</span>
                                    <span>• Durva (Grass) - 21</span>
                                    <span>• Modak (21 count)</span>
                                    <span>• Betel Leaves & Nuts</span>
                                    <span>• Coconut & Fruits</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is eco-friendly Ganesh mandatory?", a: "While not mandatory religiously, we strongly encourage Shadu Mati idols as Visarjan in water bodies is purer." },
                                        { q: "Can we do Sthapana ourselves?", a: "You can, but Pran Pratishtha involves specific Sanskrit mantras that invoke the deity which a trained Pandit performs correctly." },
                                        { q: "Do you come for Visarjan puja too?", a: "Yes, you can book Pandit ji separately for Uttar Puja (Visarjan) on 1.5, 5, 7, or 10 days." },
                                        { q: "What is the best time for Sthapana?", a: "Usually 'Madhyahna' (Mid-day) is considered Ganesha's birth time and best for Sthapana." },
                                        { q: "Cost of Sthapana Puja?", a: "It starts from ₹2,100 depending on your location in Pune and date availability." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-orange-300 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Ganesh Chaturthi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-400">
                                    <div className="bg-orange-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Sthapana Puja from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Full Ceremony</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">45 - 60 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Vedic Expert</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-md border-none">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Chaturthi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔔 Book Early (Huge Demand)
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> 12+ Years Experience
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> 5000+ Sthapanas Done
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> Punctual Gurujis
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Ganpati Bappa Morya!</h2>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                            Slots fill up very fast during the festival. Reserve your Pandit ji today.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-orange-500 text-maroon-900 hover:bg-orange-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
