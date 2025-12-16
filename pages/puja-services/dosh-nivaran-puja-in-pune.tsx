import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DoshNivaranPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dosh Nivaran Puja in Pune',
        description: 'Book Dosh Nivaran Puja in Pune. Remedies for Kaal Sarp Dosh, Mangal Dosh, Pitra Dosh, and Shani Sade Sati. Expert Astrologers and Pandits.',
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
            reviewCount: '480'
        }
    }

    return (
        <>
            <Head>
                <title>Dosh Nivaran Puja in Pune | Kaal Sarp & Mangal Dosh Remedies</title>
                <meta name="description" content="Book Pandit for Dosh Nivaran Puja in Pune. Effective remedies for Kaal Sarp Yog, Pitra Dosh, Manglik Dosh, and Shani Mahadasha. 100% Vedic and Confidential." />
                <meta name="keywords" content="dosh nivaran puja pune, kaal sarp dosh puja pune, mangal dosh nivaran, pitra dosh puja, shani shanti puja, astrology remedies pune" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/dosh-nivaran-puja-in-pune" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Astrological Remedies</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Dosh Nivaran Puja <br />
                                    <span className="text-gold-400">Overcome Destiny's Hurdles</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Facing continuous struggles despite your best efforts? It could be a 'Dosh' (defect) in your horoscope. We offer specialized Vedic remedies for Kaal Sarp, Pitra Dosh, Mangal, and Shani afflictions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Consult for Dosh
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Dosh%20Nivaran%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">What is a Horoscope Dosh?</h2>
                                <p>
                                    A 'Dosh' is a negative planetary combination in your Kundali (Birth Chart) that obstructs specific areas of life like marriage, career, or health. These are often karmic debts from past lives.
                                </p>
                                <p>
                                    <strong>Dosh Nivaran</strong> is the process of neutralizing these malefic effects through specific mantras, havans, and daan (charity) prescribed in the Vedic Astrological texts.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🔮</span> Common Dosh & Remedies
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Kaal Sarp Dosh</h4>
                                            <p className="text-sm text-gray-600"><strong>Symptoms:</strong> Repeated failures, nightmares, instability.<br /><strong>Remedy:</strong> Rudra Abhishek & Nag Bali.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Mangal Dosh (Manglik)</h4>
                                            <p className="text-sm text-gray-600"><strong>Symptoms:</strong> Delay in marriage, discord with spouse.<br /><strong>Remedy:</strong> Kumbh Vivah or Mangal Chandika Havan.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Pitra Dosh</h4>
                                            <p className="text-sm text-gray-600"><strong>Symptoms:</strong> No male child, constant sickness, poverty.<br /><strong>Remedy:</strong> Tarpan & Narayan Bali.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Shani Sade Sati</h4>
                                            <p className="text-sm text-gray-600"><strong>Symptoms:</strong> Extreme hardship, legal issues, bone pains.<br /><strong>Remedy:</strong> Shani Tailabhishek & Hanuman Puja.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Our Approach</h2>
                                <p className="text-gray-600">We don't use fear. We use faith. The process generally involves:</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Horoscope Analysis</h4>
                                            <p className="text-sm text-gray-600">First, we check your Kundali to confirm the Dosh. (Free if you book the puja).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sankalp & Jaap</h4>
                                            <p className="text-sm text-gray-600">Chanting the Beej Mantras of the afflicted planets (e.g., 23,000 chants for Shani).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Havan & Daan</h4>
                                            <p className="text-sm text-gray-600">Fire ritual followed by donating items (Black sesame, iron, clothes) to the needy.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Locations</h2>
                                <p className="text-gray-700 mb-4">
                                    Most Dosh Nivaran pujas can be done at your home in Pune. However, specific ones like <strong>Narayan Bali</strong> or full <strong>Kaal Sarp</strong> are traditionally best done at Trimbakeshwar (Nashik).
                                </p>
                                <p className="text-gray-700">
                                    <strong>We offer both:</strong>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Home Puja in Pune for mild doshas.</li>
                                        <li>Assisted Booking at Trimbakeshwar for severe doshas.</li>
                                    </ul>
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How do I know I have a Dosh?", a: "Send us your Birth Date, Time, and Place. Our Jyotish Acharyas will analyze it for you." },
                                        { q: "Cost of Dosh Nivaran?", a: "Simple Shanti Pujas in Pune start from ₹2,500. Trimbakeshwar packages start from ₹7,000." },
                                        { q: "Is it a one-time solution?", a: "Yes, major doshas like Kaal Sarp usually require a one-time ceremony to break the cycle." },
                                        { q: "Can I do it for my son/daughter?", a: "Yes, parents can perform the Sankalp on behalf of their children." },
                                        { q: "Is fasting required?", a: "Usually, the person for whom the puja is done should fast until the Havan Purnahuti." },
                                        { q: "Do you provide Gemstones?", a: "We can recommend them, but we don't sell them to avoid conflict of interest. We focus on Puja remedies." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Dosh Nivaran Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Remedies from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹2,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">Free Consultation</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Location</span>
                                                <span className="font-bold text-maroon-900">Home or Trimbak</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Expertise</span>
                                                <span className="font-bold text-maroon-900">Jyotish Acharya</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call for Analysis
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20discuss%20Horoscope%20Remedy">
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
                                            <span className="text-gold-500">★</span> Accurate Predictions
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Effective Remedies
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Change Your Destiny</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Don't suffer in silence. Vedic wisdom has a solution for every problem.
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
