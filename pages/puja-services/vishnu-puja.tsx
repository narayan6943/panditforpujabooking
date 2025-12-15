import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VishnuPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vishnu Sahasranama Path in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Vishnu Sahasranama Path in Pune. Recite 1000 names of Lord Vishnu for peace and prosperity. Complete Samagri, Muhurat 2026, and Vedic Vidhi included.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Vishnu Sahasranama Path' },
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
                <title>Vishnu Sahasranama Path in Pune – 1000 Names Recitation</title>
                <meta name="description" content="Book certified Pandit for Vishnu Sahasranama Path in Pune. Recite 1000 names of Lord Vishnu for peace, prosperity, and protection. Authentic Vedic rituals." />
                <meta name="keywords" content="Vishnu Sahasranama Path Pune, Vishnu Puja Pune, Satyanarayan Puja vs Vishnu Sahasranama, Vishnu Path Pandit Booking, Vishnu Puja Vidhi" />
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
                            <span className="text-maroon-900 font-semibold">Vishnu Puja</span>
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
                            alt="Vishnu Sahasranama Path"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Blessings & Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vishnu Sahasranama Path in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Recite 1000 Names with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Seek divine blessings for peace, prosperity, and protection. Authentic Vedic recitation of the thousand names of Lord Vishnu.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Vishnu Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Vishnu%20Sahasranama%20Path" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Vishnu Sahasranama Path in Pune</strong> is one of the most revered Vedic practices, where devotees recite the thousand names of Lord Vishnu to seek divine blessings for peace, prosperity, and protection from negative energies. In Pune, residents across neighborhoods such as <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> have embraced this sacred practice.
                                </p>
                                <p>
                                    The Vishnu Sahasranama Path involves the meticulous recitation of all thousand names of Lord Vishnu, often accompanied by chanting, music, and devotional offerings. This practice removes karmic blockages, strengthens spiritual alignment, and invokes protection against adversities.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance & Ritual Process</h3>
                                <p>
                                    Before beginning the recitation, devotees undergo <strong>Achaman and Sankalp</strong> to purify themselves. <strong>Ganapati Puja</strong> is performed to remove obstacles. <strong>Kalash Sthapana</strong> establishes the divine presence with a sacred pot filled with water, mango leaves, and coconut.
                                </p>
                                <p>
                                    During the Path, the pandit leads the chanting of the thousand names. Each name carries profound spiritual significance, increasing mental clarity suitable for residents of Mundhwa, Yerawada, and Camp who seek emotional relief.
                                </p>
                            </section>

                            {/* Packages (Inferred) */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Vishnu Puja Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Path</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Ganapati Puja, Kalash Sthapana, and Vishnu Sahasranama Path recitation.</p>
                                        <div className="text-xs text-gray-500">Duration: 1.5-2 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Path + Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete recitation coupled with a Havan for amplified benefits.</p>
                                        <div className="text-xs text-gray-500">Duration: 3-4 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Corporate Prosperity Path</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹8,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">For offices. Focuses on prosperity and removing professional obstacles.</p>
                                        <div className="text-xs text-gray-500">Duration: 2-3 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Special Occasion Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">Custom</div>
                                        <p className="text-sm text-gray-700 mb-3">For birthdays, anniversaries, or special spiritual milestones.</p>
                                        <div className="text-xs text-gray-500">Duration: Custom</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices are indicative. Includes Samagri & Dakshina. Contact for exact quote.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Vishnu Puja Samagri List (100% Provided)</h2>
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
                                                <td className="p-3 font-semibold">Idols</td>
                                                <td className="p-3">Lord Vishnu Idol/Photo</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Central focus of devotion</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Kalash</td>
                                                <td className="p-3">Copper Kalash</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Sacred vessel</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Liquids</td>
                                                <td className="p-3">Ganga Jal</td>
                                                <td className="p-3">2L</td>
                                                <td className="p-3">Purification</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Offerings</td>
                                                <td className="p-3">Flowers, Fruits, Sweets</td>
                                                <td className="p-3">Various</td>
                                                <td className="p-3">Offerings & Naivedya</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold">Atmosphere</td>
                                                <td className="p-3">Incense sticks, Diyas</td>
                                                <td className="p-3">12 each</td>
                                                <td className="p-3">Sanctity & Illumination</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Step-by-Step Vishnu Sahasranama Path Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Achaman & Sankalp:</strong> Purification and intention setting (10 mins).</li>
                                    <li><strong>Ganapati Puja:</strong> Invoking Lord Ganesha to remove obstacles (15 mins).</li>
                                    <li><strong>Kalash Sthapana:</strong> Establishing divine presence (15 mins).</li>
                                    <li><strong>Recitation of Vishnu Sahasranama:</strong> Chanting all 1000 names (90–120 mins).</li>
                                    <li><strong>Naivedya Offering:</strong> Fruits, sweets, and water (20 mins).</li>
                                    <li><strong>Aarti & Concluding Rituals:</strong> Lighting lamps and distributing Prasad (20 mins).</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Vishnu Puja in 2026 (Pune)</h2>
                                <p>Proper muhurat ensures maximum spiritual resonance.</p>
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
                                                <td className="p-3">March</td>
                                                <td className="p-3">19, 20</td>
                                                <td className="p-3">Chaitra Shukla</td>
                                                <td className="p-3">7:00–9:00 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3">June</td>
                                                <td className="p-3">12</td>
                                                <td className="p-3">Ashadha Shukla</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm mt-2 italic">Early morning recommended for Wakad, Baner, Kharadi. Evening for Hadapsar, Koregaon Park, Camp.</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Vishnu Sahasranama Path</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Peace & Positivity:</strong> Removes negative energies and karmic obstacles.</li>
                                    <li><strong>Mental Clarity:</strong> Promotes spiritual peace and emotional balance.</li>
                                    <li><strong>Harmony:</strong> Enhances familial harmony and prosperity.</li>
                                    <li><strong>Protection:</strong> Provides protection from accidents and misfortunes.</li>
                                    <li><strong>Growth:</strong> Improves focus, decision-making, and professional growth.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Vishnu Sahasranama Path</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Vishnu Sahasranama Path?", a: "Sacred practice of reciting 1000 names of Lord Vishnu to seek spiritual and material blessings." },
                                        { q: "How long is the recitation?", a: "Typically 90–120 minutes, depending on additional rituals." },
                                        { q: "Do you provide samagri?", a: "Yes, complete offerings are supplied for home or corporate Path." },
                                        { q: "Can this be performed at offices?", a: "Absolutely, ideal for corporate environments in Hinjewadi and Viman Nagar." },
                                        { q: "Is muhurat important?", a: "Yes, auspicious timing ensures enhanced spiritual benefits." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Attract Divine Grace</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Strengthen your faith and invite prosperity with the 1000 names of Vishnu.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book your expert pandit for Vishnu Sahasranama Path in Pune today!
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Vishnu Puja</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Vishnu Path</h4>
                                        <p className="text-gold-100 text-sm mb-4">Sahasranama Recitation</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vishnu%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Vishnu Puja" />
            <Footer />
        </>
    )
}
