import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function LakshmiKuberaPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Lakshmi Kubera Puja in Pune',
        description: 'Book Lakshmi Kubera Puja in Pune for Wealth & Prosperity. Authentic puja for Diwali or Fridays. Worship of Goddess Lakshmi and Lord Kubera.',
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
            reviewCount: '750'
        }
    }

    return (
        <>
            <Head>
                <title>Lakshmi Kubera Puja in Pune | Wealth & Prosperity Puja</title>
                <meta name="description" content="Book Lakshmi Kubera Puja in Pune for Financial Growth. appease the Goddess of Wealth and the Treasurer of Gods. Expert Vedic Pandits for Diwali & Friday Puja." />
                <meta name="keywords" content="lakshmi kubera puja pune, wealth puja, diwali puja pandit, financial problem solution puja, mahalakshmi puja vidhi" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/lakshmi-kubera-puja-in-pune" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Unlock Abundance</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Lakshmi Kubera Puja <br />
                                    <span className="text-gold-400">Blessings of Wealth</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Invoke the dual powers of Goddess Mahalakshmi (Wealth) and Lord Kubera (Treasurer) to remove debts, attract money, and ensure financial stability for your home and business.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Wealth Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Kubera%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Significance of Lakshmi-Kubera</h2>
                                <p>
                                    While Goddess Lakshmi is the embodiment of wealth and fortune, Lord Kubera is the celestial banker who protects and distributes that wealth. Worshipping them together is the ultimate Vedic remedy for financial woes.
                                </p>
                                <p>
                                    It is said that Lord Venkateshwara (Balaji) himself took a loan from Kubera for his marriage, illustrating Kubera's immense capacity to provide funds.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">💰</span> Spiritual Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Debt Removal</h4>
                                            <p className="text-sm text-gray-600">Helps in clearing old loans and recovering stuck money.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Business Growth</h4>
                                            <p className="text-sm text-gray-600">Increases cash flow and profit margins in trade.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Asset Protection</h4>
                                            <p className="text-sm text-gray-600">Ensures that the wealth you earn remains with you and isn't wasted on medical bills or losses.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Puja Vidhi & Rituals</h2>
                                <p className="text-gray-600">Duration: <strong>2 to 2.5 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kalash Sthapana</h4>
                                            <p className="text-sm text-gray-600">Invoking the deities into the Kalash with specific mantras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shri Suktam Path</h4>
                                            <p className="text-sm text-gray-600">Reciting the 16 verses of Shri Suktam, which is the most loved hymn of Goddess Lakshmi.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kubera Mantra Japa</h4>
                                            <p className="text-sm text-gray-600">Chanting "Om Yakshaya Kuberaya..." to unlock financial knots.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Havan (Fire Ritual)</h4>
                                            <p className="text-sm text-gray-600">Offering lotus seeds (kamalgatta) and ghee into the fire to please Mahalakshmi.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Auspicious Days</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Diwali (Lakshmi Pujan):</strong> The most powerful night for this puja.</li>
                                    <li><strong>Dhanteras:</strong> Dedicated to Kubera and Dhanvantari.</li>
                                    <li><strong>Fridays:</strong> The day of Venus and Lakshmi.</li>
                                    <li><strong>Akshaya Tritiya:</strong> The day of never-ending prosperity.</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Cost of Lakshmi Puja?", a: "Standard package starts at ₹3,100. Diwali bookings may have different rates due to demand." },
                                        { q: "Do I need a Kubera Yantra?", a: "It is highly recommended. Our Pandit can bring an energized Yantra for you to keep in your locker/cash box." },
                                        { q: "Can we do it at the office?", a: "Yes, it is very common to perform this in offices and factories for profit growth." },
                                        { q: "What offerings are best?", a: "Lotus flowers, pomegranate, and red sweets are Goddess Lakshmi's favorites." },
                                        { q: "Do you cover my area?", a: "Yes, we have Pandits across Pune including Pimpri-Chinchwad." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Lakshmi Kubera Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Inc. Travel</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">2 - 2.5 Hours</span>
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
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Satisfaction Guarantee
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Businesses Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.9/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Prosperity Focus
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Attract Wealth Today</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Open the doors to financial freedom. Book your Lakshmi Kubera Puja now.
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
