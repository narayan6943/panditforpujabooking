import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KatyayaniPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Katyayani Puja in Pune',
        description: 'Book Pandit for Katyayani Puja in Pune. The most powerful puja for early marriage and removing obstacles in finding a partner.',
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
            ratingValue: '4.9',
            reviewCount: '150'
        }
    }

    return (
        <>
            <Head>
                <title>Katyayani Puja in Pune | For Wish-Fulfilling Marriage</title>
                <meta name="description" content="Book Pandit for Katyayani Puja in Pune. The famous Vrat performed by Gopis to get Lord Krishna. Best for early marriage and finding your desired soulmate." />
                <meta name="keywords" content="katyayani puja pune, maa katyayani mantra, puja for early marriage, love marriage puja, remove marriage obstacles" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/katyayani-puja-in-pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-orange-50 to-white">
                <section className="relative bg-orange-600 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-orange-50 text-sm font-semibold tracking-wide uppercase">For Desired Husband</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Maa Katyayani Puja <br />
                                    <span className="text-yellow-100">Find Your Soulmate</span>
                                </h1>
                                <p className="text-lg text-orange-50/90 border-l-4 border-white pl-4 leading-relaxed">
                                    Maa Katyayani, the 6th form of Navdurga, was worshipped by the Gopis of Vraja to obtain Lord Krishna as their husband. This is the ultimate remedy for marriage delays.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-white text-orange-700 hover:bg-orange-50 font-bold shadow-lg shadow-orange-900/20 border-none">
                                        Book for Marriage
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Katyayani%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-orange-800 border-b-2 border-orange-400 pb-2">Vidhi Significance</h2>
                                <p>
                                    In the <strong className="text-orange-700">Bhagavata Purana</strong>, it is described that the Gopis made an idol of Goddess Katyayani on the banks of Yamuna and worshipped her with the mantra:
                                </p>
                                <blockquote className="bg-orange-50 p-4 rounded-r-lg border-l-4 border-orange-500 italic">
                                    "Katyayani Mahamaye Mahayoginyadheeshwari <br />
                                    Nandgopsutam Devi Patim Me Kuru Te Namah"
                                </blockquote>
                                <p>
                                    Reciting this powerful mantra along with the Homa removes all planetary obstacles (like Mangal Dosh or weak Jupiter) causing delays.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-orange-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">💍</span> Marriage Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Remove Delays</h4>
                                            <p className="text-sm text-gray-600">Speeds up the process of finding a suitable partner for those crossing marriageable age.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Love Marriage</h4>
                                            <p className="text-sm text-gray-600">Helps convince parents and removes obstacles in marrying the person you love.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Good Qualities</h4>
                                            <p className="text-sm text-gray-600">Ensures you get a partner with good character, similar to how Gopis got Krishna.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-orange-800">The Ritual (Havan is Key)</h2>
                                <p className="text-gray-600">Duration: <strong>2 - 3 Hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Sankalp with Name</h4>
                                            <p className="text-sm text-gray-600">Taking a vow to perform the puja for the specific intent of marriage.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Katyayani Mantra Jap</h4>
                                            <p className="text-sm text-gray-600">Chanting the specific mantra 108 or 1008 times (Samput mantra path).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Red Flower Offering</h4>
                                            <p className="text-sm text-gray-600">Maa Katyayani loves red flowers (Hibiscus/Rose) and honey.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                        <div className="min-w-[40px] font-bold text-orange-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900">Vivah Havan</h4>
                                            <p className="text-sm text-gray-600">Offering Ahutis with sweets and Ghee to speed up the Vivah Yoga.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                                <h2 className="text-2xl font-serif font-bold text-orange-800 mb-4">Required Details</h2>
                                <p className="text-gray-700 mb-4">
                                    We need the <strong>Birth Chart (Kundali)</strong> of the girl/boy to time the puja correctly. Sometimes we combine this with <strong>Kumbh Vivah</strong> (for Mangalik Dosh).
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-orange-800 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Can boys perform this?", a: "Yes, though traditionally done by Gopis, men perform it to find a good wife (Patni Prapti)." },
                                        { q: "How fast does it work?", a: "Many clients see proposals finalizing within 3 to 6 months of the Homa." },
                                        { q: "Cost of Katyayani Puja?", a: "Starts from ₹3,500 including Havan." },
                                        { q: "Is it different from Swayamvara Parvati?", a: "Yes, Katyayani is more fierce and quick-acting for removing obstacles." },
                                        { q: "Can parents do it?", a: "Yes, parents can take Sankalp on behalf of their children." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-orange-300 transition-colors">
                                            <p className="font-bold text-orange-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Katyayani Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200">
                                    <div className="bg-orange-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-orange-900">₹3,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Includes Havan</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-orange-900">3 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-orange-900">Acharya</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Katyayani%20Puja">
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
                                    <h4 className="font-bold text-orange-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> 150+ Success Stories
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-orange-500">★</span> Kundali Guidance
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-orange-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Manifest Your Dream Partner</h2>
                        <p className="text-orange-200 mb-8 max-w-2xl mx-auto">
                            The blessings of Katyayani can rewrite your destiny.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-white text-orange-800 hover:bg-orange-100 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
