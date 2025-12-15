import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DiwaliLakshmiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Diwali Lakshmi Puja in Pune',
        description: 'Book Pandit for Diwali Lakshmi Puja in Pune. Authentic Laxmi Pujan, Chopda Pujan, and Kuber Puja rituals. Expert Vedic Gurujis.',
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
            price: '3500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '1250'
        }
    }

    return (
        <>
            <Head>
                <title>Diwali Lakshmi Puja in Pune | Book Pandit for Laxmi Pujan</title>
                <meta name="description" content="Book Pandit for Diwali Lakshmi Puja in Pune. Authentic Vedic Laxmi Pujan, Kuber Puja, and Chopda Pujan for office/home. Limited slots available." />
                <meta name="keywords" content="diwali lakshmi puja pune, laxmi pujan pandit, chopda pujan pune, diwali pooja booking, office laxmi puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/diwali-lakshmi-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-red-50/20 to-white">
                <section className="relative bg-red-800 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-200 text-sm font-semibold tracking-wide uppercase">Festival of Lights</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Diwali Lakshmi Puja <br />
                                    <span className="text-yellow-400">Invite Wealth & Prosperity</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                                    Celebrate the most auspicious night of the year with authentic Vedic Lakshmi Pujan. Invite Goddess Lakshmi, Lord Ganesha, and Kuber to bless your home and office with abundance.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 font-bold shadow-lg shadow-yellow-500/20">
                                        Book for Diwali
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Diwali%20Lakshmi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-red-900 border-b-2 border-yellow-500 pb-2">The Importance of Laxmi Pujan</h2>
                                <p>
                                    On the night of Amavasya during Deepavali, Goddess Lakshmi visits the cleanest and most brightly lit homes. It is believed that performing a Shodashopchar Puja during the fixed 'Sthir Lagna' (Fixed Ascendant) ensures that wealth remains stable in the house for the entire year.
                                </p>
                                <p>
                                    For businesses, this is the start of the new financial year (Vikram Samvat), marked by <strong>Chopda Pujan</strong> (Account Book Worship).
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">✨</span> Key Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Financial Growth</h4>
                                            <p className="text-sm text-gray-600">Removes debts and attracts new streams of income.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Business Success</h4>
                                            <p className="text-sm text-gray-600">Chopda Pujan blesses the account books for a profitable year.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Peace & Harmony</h4>
                                            <p className="text-sm text-gray-600">Cleanses the home of negativity and 'Alakshmi' (Poverty).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-red-900">Complete Vedic Vidhi</h2>
                                <p className="text-gray-600">The puja lasts for <strong>45 to 60 minutes</strong>. The exact time depends on the Muhurat.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Ganesh & Kalash Puja</h4>
                                            <p className="text-sm text-gray-600">Invoking Lord Ganesha first to remove obstacles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Maha Lakshmi & Kuber Puja</h4>
                                            <p className="text-sm text-gray-600">Abhishek of Lakshmi idol/coin (Shree Yantra) and worship of Kuber (Treasurer).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Chopda/Laptop Puja</h4>
                                            <p className="text-sm text-gray-600">Worshipping account books, laptops, or tools of trade with 'Shubh-Labh'.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-red-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-red-900">Laxmi Suktam & Aarti</h4>
                                            <p className="text-sm text-gray-600">Chanting of Sri Suktam and performing the grand Aarti.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Items you need to arrange (Pandit ji brings specific herbs):</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Lakshmi Idol or Silver Coin</span>
                                    <span>• Account Books / Laptop</span>
                                    <span>• Lotus Flowers (Kamal)</span>
                                    <span>• Sweets (Laddoo)</span>
                                    <span>• 5 Types of Fruits</span>
                                    <span>• Coins for Kuber Puja</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "What is the best Muhurat?", a: "The best time is during 'Pradosh Kaal' (Evening) when 'Sthir Vrishabh Lagna' prevails. Our Pandit will tell you the exact time." },
                                        { q: "Can we do this in office?", a: "Yes, we specialize in corporate and office Lakshmi Pujas during the day or evening." },
                                        { q: "Do you bring Samagri?", a: "We have packages with and without Samagri. For Diwali, we recommend the full package." },
                                        { q: "Is broom worship included?", a: "Yes, worshipping the broom (symbol of cleanliness/Alakshmi removal) is part of the tradition." },
                                        { q: "How early should we book?", a: "Diwali is our busiest day. We stop taking bookings 5 days prior. Please book early." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors">
                                            <p className="font-bold text-red-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Diwali Lakshmi Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-500">
                                    <div className="bg-red-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Diwali Puja from</p>
                                            <div className="text-4xl font-bold text-red-900">₹3,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Peak Festival Rate</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-red-900">45 - 60 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-red-900">Expert Shastri</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-400 text-red-900 shadow-md border-none">
                                                    Call to Confirm
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Diwali%20Lakshmi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🕒 Slots filling fast!
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-red-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Fixed Muhurat Service
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Authentic Sanskrit Vidhi
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Trusted by 1000+ Families
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-red-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Happy Diwali! Shubh Deepavali!</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May Goddess Lakshmi bless your home with health, wealth, and happiness.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-500 text-red-900 hover:bg-yellow-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
