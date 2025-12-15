import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function PitraDoshPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Pitra Dosh Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Pitra Dosh Puja in Pune. Seek ancestral blessings and remove obstacles. Complete Samagri, Muhurat 2026, and Vedic Vidhi included.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Pitra Dosh Puja' },
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
                <title>Pitra Dosh Puja in Pune – Seek Ancestral Blessings</title>
                <meta name="description" content="Book certified Pandit for Pitra Dosh Puja in Pune. Remove ancestral obstacles and seek blessings. Authentic Vedic rituals for peace and harmony." />
                <meta name="keywords" content="Pitra Dosh Puja Pune, Pitra Dosh Nivaran Pune, Ancestral Puja Pune, Narayan Bali Puja, Tripindi Shradh Pune" />
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
                            <span className="text-maroon-900 font-semibold">Pitra Dosh Puja</span>
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
                            alt="Pitra Dosh Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Ancestral Blessings & Peace</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Pitra Dosh Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Seek Blessings with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Pacify ancestral karmic debts and remove obstacles. Authentic Vedic rituals for family harmony and peace of mind.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Pitra Dosh Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Pitra%20Dosh%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Pitra Dosh Puja in Pune</strong> is a significant Vedic ritual performed to pacify ancestral karmic debts and remove obstacles caused by Pitra Dosha. In Pune, residents across neighborhoods like <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> regularly consult certified pandits to perform this puja.
                                </p>
                                <p>
                                    The Pitra Dosh arises due to unsettled ancestral karma and can manifest as persistent obstacles, health issues, financial instability, or marital challenges. Performing the Pitra Dosh Puja brings relief from these problems, fosters family harmony, and restores peace of mind.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance & Ritual Process</h3>
                                <p>
                                    The puja includes <strong>Shraddha and Tarpan rituals</strong>, alongside detailed mantras and offerings that honor the forefathers. The process begins with purification and intention setting, followed by Ganapati Puja. Tarpan rituals are conducted using water, sesame seeds, and black til.
                                </p>
                            </section>

                            {/* Packages (Inferred) */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Pitra Dosh Puja Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes basic Tarpan, Pind Daan, and Pitra Dosh Nivaran Mantra chanting.</p>
                                        <div className="text-xs text-gray-500">Duration: 2-3 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Pitra Dosh Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja including Havan, detailed Tarpan, and Brahman Bhoj.</p>
                                        <div className="text-xs text-gray-500">Duration: 4-5 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Narayan Bali Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Special ritual for unnatural deaths or severe Pitra Dosh. Highly specialized.</p>
                                        <div className="text-xs text-gray-500">Duration: 5-6 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Tripindi Shradh</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Performed to pacify souls of three generations of ancestors.</p>
                                        <div className="text-xs text-gray-500">Duration: 3-4 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices are indicative. Includes Samagri & Dakshina. Contact for exact quote.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Pitra Dosh Puja Samagri List (100% Provided)</h2>
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
                                                <td className="p-3 font-semibold">Idol/Yantra</td>
                                                <td className="p-3">Rahu-Ketu Yantra</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Core worship focus</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Dry Items</td>
                                                <td className="p-3">Black Sesame (Til)</td>
                                                <td className="p-3">500g</td>
                                                <td className="p-3">Ancestral Offerings</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Offerings</td>
                                                <td className="p-3">Flowers, Fruits, Sweets</td>
                                                <td className="p-3">Various</td>
                                                <td className="p-3">Naivedya</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Havan</td>
                                                <td className="p-3">Ghee, Cow Dung Cakes</td>
                                                <td className="p-3">Various</td>
                                                <td className="p-3">Sacred Fire</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold">Liquids</td>
                                                <td className="p-3">Gangajal</td>
                                                <td className="p-3">2L</td>
                                                <td className="p-3">Purification</td>
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
                                    <li><strong>Tarpan Ritual:</strong> Offering water, sesame seeds, and black til to ancestors (30–45 mins).</li>
                                    <li><strong>Havan:</strong> 108 offerings with ghee, herbs, and samagri (45 mins).</li>
                                    <li><strong>Recitation of Mantras:</strong> Pitra Dosh Nivaran Mantras (30 mins).</li>
                                    <li><strong>Naivedya & Aarti:</strong> Fruits, sweets, and Prasad distribution (20 mins).</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Pitra Dosh Puja in 2026 (Pune)</h2>
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
                                <p className="text-sm mt-2 italic">Early morning recommended for Wakad, Baner. Evening for Viman Nagar, Koregaon Park.</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Pitra Dosh Puja</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Remove Obstacles:</strong> Pacifies ancestral karmic debts.</li>
                                    <li><strong>Family Harmony:</strong> Enhances family harmony, health, and longevity.</li>
                                    <li><strong>Stability:</strong> Improves financial stability and career growth.</li>
                                    <li><strong>Peace:</strong> Brings peace of mind and protection from misfortunes.</li>
                                    <li><strong>Progeny:</strong> Strengthens progeny-related blessings and marital well-being.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Pitra Dosh Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Pitra Dosh?", a: "Unsettled ancestral karma manifesting as obstacles, financial losses, or health issues." },
                                        { q: "How long is the puja?", a: "Typically 2.5–4 hours, including Havan and Tarpan." },
                                        { q: "Is samagri provided?", a: "Yes, complete offerings, including kalash, ghee, flowers, and fruits, are supplied." },
                                        { q: "Can it be performed at home?", a: "Absolutely, certified pandits travel to homes in all Pune neighborhoods." },
                                        { q: "Does this work for partial dosha?", a: "Yes, customized rituals are performed for Anshik or partial Pitra Dosh." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Honor Your Ancestors</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Seek blessings and remove obstacles with authentic Vedic rituals.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book your expert pandit for Pitra Dosh Puja in Pune today!
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Pitra Dosh Puja</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Pitra Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Seek Ancestral Blessings</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Pitra%20Dosh%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Pitra Dosh Puja" />
            <Footer />
        </>
    )
}
