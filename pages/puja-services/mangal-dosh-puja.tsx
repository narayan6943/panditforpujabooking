import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MangalDoshPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mangal Dosh Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Mangal Dosh Puja in Pune. Remove Mars Dosha for marital harmony and prosperity. Complete Samagri, Muhurat 2026, and Vedic Vidhi included.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Mangal Dosh Puja' },
        { id: 'about', title: 'Significance' },
        { id: 'packages', title: 'Packages & Costs' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Mangal Dosh Puja in Pune – Remove Mars Dosha | Certified Pandit</title>
                <meta name="description" content="Book certified Pandit for Mangal Dosh Puja in Pune. Remove Mars Dosha for marital bliss and harmony. Authentic Vedic rituals with complete samagri." />
                <meta name="keywords" content="Mangal Dosh Puja Pune, Kuja Dosha Remedy Pune, Mars Dosha Nivaran, Mangal Shanti Puja, Manglik Dosha Puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Breadcrumb */}
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Mangal Dosh Puja</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/satyanarayan-puja-hero.png"
                            alt="Mangal Dosh Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Marital Harmony & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Mangal Dosh Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Remove Mars Dosha with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Neutralize Mangal Dosha effects for marital bliss and family harmony. Authentic Vedic rituals for auspicious beginnings.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Mangal Dosh Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Mangal%20Dosh%20Puja" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p>
                                    <strong>Mangal Dosh Puja in Pune</strong> is a powerful Vedic ritual aimed at mitigating the negative effects of Mangal Dosha (also known as Kuja Dosha), which occurs when Mars occupies certain positions in the birth chart. In Pune, families across <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> seek certified pandits to perform this puja.
                                </p>
                                <p>
                                    Mangal Dosha can lead to marital conflicts, delayed marriage, financial instability, health issues, and familial disharmony if left unaddressed. Performing the Mangal Dosh Puja not only neutralizes these adverse effects but also ensures peace, stability, and auspicious beginnings for families.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance & Ritual Process</h3>
                                <p>
                                    The puja begins with <strong>Achaman & Sankalp</strong>, purifying the devotee and setting a dedicated intention to appease Mars. This is followed by <strong>Ganapati Puja</strong> to remove obstacles, <strong>Kalash Sthapana</strong> for divine energy, and <strong>Navagraha Puja</strong> to balance planetary influences. The pandit then performs <strong>Mangal Shanti Havan</strong>, offering ghee, herbs, and sesame seeds into the sacred fire while chanting potent mantras.
                                </p>
                            </section>

                            {/* Packages (Inferred) */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Mangal Dosh Puja Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Mangal Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Navagraha Puja, basic Havan, and Mangal Dosh Nivaran mantras.</p>
                                        <div className="text-xs text-gray-500">Duration: 2-2.5 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Mangal Dosh Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹9,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Full ritual with detailed Havan, Mars Yantra installation, and comprehensive mantras.</p>
                                        <div className="text-xs text-gray-500">Duration: 3.5-4 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Pre-Marriage Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Special puja for couples before marriage to ensure marital harmony.</p>
                                        <div className="text-xs text-gray-500">Duration: 4-5 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Anshik Dosha Remedy</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹6,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">For partial Mangal Dosha. Customized ritual based on birth chart.</p>
                                        <div className="text-xs text-gray-500">Duration: 2.5-3 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices are indicative. Includes Samagri & Dakshina. Contact for exact quote.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Mangal Dosh Puja Samagri List (100% Provided)</h2>
                                <p className="text-sm text-gray-700 mb-4">We provide all essential samagri. You only need to provide a clean space and basic household items.</p>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-50 text-maroon-900">
                                            <tr>
                                                <th className="p-3 border-b">Category</th>
                                                <th className="p-3 border-b">Item</th>
                                                <th className="p-3 border-b">Quantity</th>
                                                <th className="p-3 border-b">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Idols/Yantra</td>
                                                <td className="p-3">Mars Yantra</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Core focus for Mangal Dosha mitigation</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Kalash</td>
                                                <td className="p-3">Copper Kalash</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Sacred vessel</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Dry Items</td>
                                                <td className="p-3">Black Sesame</td>
                                                <td className="p-3">500g</td>
                                                <td className="p-3">Mars offering</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Offerings</td>
                                                <td className="p-3">Red Roses, Marigolds</td>
                                                <td className="p-3">50</td>
                                                <td className="p-3">Flowers</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold">Havan</td>
                                                <td className="p-3">Ghee, Cow Dung Cakes</td>
                                                <td className="p-3">Various</td>
                                                <td className="p-3">Sacred Fire</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Step-by-Step Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Achaman & Sankalp:</strong> Purification and intention setting (10 mins).</li>
                                    <li><strong>Ganapati Puja:</strong> Invocation for obstacle removal (15 mins).</li>
                                    <li><strong>Kalash Sthapana:</strong> Establishing divine presence (15 mins).</li>
                                    <li><strong>Navagraha Puja:</strong> Worship of nine planets for balance (25 mins).</li>
                                    <li><strong>Mangal Shanti Havan:</strong> Offerings with ghee and herbs while chanting mantras (40 mins).</li>
                                    <li><strong>Mangal Dosh Nivaran Mantras:</strong> Recitation for Mars dosha remedy (30 mins).</li>
                                    <li><strong>Naivedya & Aarti:</strong> Fruits, sweets, and Prasad distribution (20 mins).</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Mangal Dosh Puja in 2026 (Pune)</h2>
                                <p>Performing the puja on auspicious dates amplifies the results.</p>
                                <div className="overflow-x-auto not-prose">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-900 text-white">
                                            <tr>
                                                <th className="p-3">Month</th>
                                                <th className="p-3">Dates</th>
                                                <th className="p-3">Tithi/Event</th>
                                                <th className="p-3">Ideal Time (IST)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3">January</td>
                                                <td className="p-3">18, 19</td>
                                                <td className="p-3">Shukla Paksha</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-3">February</td>
                                                <td className="p-3">16</td>
                                                <td className="p-3">Maha Shivratri</td>
                                                <td className="p-3">6:00–8:00 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3">June</td>
                                                <td className="p-3">12</td>
                                                <td className="p-3">Nag Panchami</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-3">July</td>
                                                <td className="p-3">13, 20</td>
                                                <td className="p-3">Shravan Mondays</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm mt-2 italic">Early morning for Wakad, Baner, Kharadi. Evening for Viman Nagar, Koregaon Park.</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Mangal Dosh Puja</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Marital Harmony:</strong> Neutralizes marital conflicts and delays.</li>
                                    <li><strong>Family Peace:</strong> Ensures family harmony and financial stability.</li>
                                    <li><strong>Career Growth:</strong> Enhances career growth and personal confidence.</li>
                                    <li><strong>Protection:</strong> Provides protection from accidents and negative planetary influences.</li>
                                    <li><strong>Prosperity:</strong> Promotes peace, longevity, and progeny blessings.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Mangal Dosh Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Mangal Dosh?", a: "Mangal Dosh occurs when Mars occupies specific positions in the birth chart, causing obstacles in marriage, finances, or personal life." },
                                        { q: "How long is the puja?", a: "Typically 2.5–4 hours including Havan, Sankalp, and mantras." },
                                        { q: "Is samagri provided?", a: "Yes, pandits provide all essential items, including Mars Yantra, ghee, flowers, and fruits." },
                                        { q: "Can it be performed at home?", a: "Absolutely, expert pandits travel across Pune to perform the puja." },
                                        { q: "Does this work for partial dosha?", a: "Yes, the rituals can be customized for Anshik or partial Mangal Dosh." },
                                    ].map((faq, i) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.q}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Ensure Marital Bliss</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Remove Mars Dosha and invite harmony into your life.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book your expert pandit for Mangal Dosh Puja in Pune today!
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Mangal Dosh Puja</Button>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                {/* Table of Contents Widget */}
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">
                                                    {sec.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Mangal Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Remove Mars Dosha</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mangal%20Dosh%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Mangal Dosh Puja" />
            <Footer />
        </>
    )
}
