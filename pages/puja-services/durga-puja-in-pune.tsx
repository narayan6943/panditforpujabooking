import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DurgaPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Durga Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Durga Puja in Pune. Invoke divine power and prosperity. Complete Samagri, Muhurat 2026, and Vedic Vidhi included.',
        serviceType: 'Hindu Festival Puja',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Durga Puja in Pune' },
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
                <title>Durga Puja in Pune – Invoke Divine Power | Certified Pandit</title>
                <meta name="description" content="Book certified Pandit for Durga Puja in Pune. Celebrate Navratri with authentic Vedic rituals. Includes Samagri, Muhurat 2026, and Havan." />
                <meta name="keywords" content="Durga Puja Pune, Navratri Puja Pandit Pune, Durga Puja Booking, Corporate Durga Puja, Durga Puja Vidhi" />
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
                            <span className="text-maroon-900 font-semibold">Durga Puja</span>
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
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Durga Puja - Navratri"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Invoke Divine Power & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Durga Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Book Certified Pandit Ji for Navratri</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Celebrate the victory of good over evil. Authentic Vedic Durga Puja rituals for family welfare, career growth, and spiritual upliftment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Durga Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Durga%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Durga Puja in Pune</strong> is one of the most revered Hindu festivals, celebrating Goddess Durga’s victory over evil and symbolizing strength, protection, and prosperity. In Pune, neighborhoods like <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> actively perform Durga Puja to invite the blessings of Maa Durga for family welfare, career growth, and spiritual upliftment.
                                </p>
                                <p>
                                    Durga Puja involves meticulous Vedic rituals executed by certified pandits who ensure that every step aligns with shastras and traditional practices. Our pandits are highly experienced, with over 10 years of practice performing hundreds of successful Durga Puja ceremonies across Pune.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance & Rituals</h3>
                                <p>
                                    The ritual begins with <strong>Achaman and Sankalp</strong>, purifying the devotee. <strong>Kalash Sthapana</strong> follows, placing sacred pots to invoke the divine presence. Central to Durga Puja is the <strong>Navaratri</strong> celebration, with each day dedicated to different forms of Goddess Durga.
                                </p>
                                <p>
                                    <strong>Havan</strong> (fire ritual) forms the spiritual core, where ghee, sesame seeds, and herbs are offered to remove negativity. For office or commercial spaces, corporate Durga Puja includes Havan and Lakshmi-Kubera Puja to promote success and financial growth.
                                </p>
                            </section>

                            {/* Packages (Inferred) */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Durga Puja Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Home Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Ideal for families. Includes Kalash Sthapana, Durga Puja, and Aarti.</p>
                                        <div className="text-xs text-gray-500">Duration: 2-3 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Full Havan Package</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹8,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete ritual with Navagraha Shanti and detailed Durga Havan.</p>
                                        <div className="text-xs text-gray-500">Duration: 4-5 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Corporate/Office Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">For business success. Includes Lakshmi-Kubera Puja and Team Aarti.</p>
                                        <div className="text-xs text-gray-500">Duration: 3-4 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Society/Community Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">Custom</div>
                                        <p className="text-sm text-gray-700 mb-3">Grand scale puja for societies with multiple priests and large setups.</p>
                                        <div className="text-xs text-gray-500">Duration: Custom</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices are indicative. Includes Samagri & Dakshina. Contact for exact quote.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Durga Puja Samagri List (100% Provided)</h2>
                                <p className="text-sm text-gray-700 mb-4">Our pandits supply 100% authentic samagri. You need to provide a clean space and basic household items.</p>

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
                                                <td className="p-3">Maa Durga Idol</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Central deity worship</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Kalash</td>
                                                <td className="p-3">Copper Kalash</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Sacred vessel</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Liquids</td>
                                                <td className="p-3">Ganga Jal, Ghee</td>
                                                <td className="p-3">2L / 2kg</td>
                                                <td className="p-3">Purification & Havan</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Dry Items</td>
                                                <td className="p-3">Rice, Kumkum</td>
                                                <td className="p-3">1kg / 250g</td>
                                                <td className="p-3">Offerings</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Offerings</td>
                                                <td className="p-3">Flowers, Fruits, Sweets</td>
                                                <td className="p-3">Various</td>
                                                <td className="p-3">Decoration & Naivedya</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold">Havan</td>
                                                <td className="p-3">Herbs & Wood</td>
                                                <td className="p-3">2kg</td>
                                                <td className="p-3">Fire ritual</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Step-by-Step Durga Puja Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Achaman & Sankalp:</strong> Purification and intention setting (10 mins).</li>
                                    <li><strong>Ganapati Puja:</strong> Invoking Lord Ganesha to remove obstacles (15 mins).</li>
                                    <li><strong>Kalash Sthapana:</strong> Placement of kalash with coconut and mango leaves (15 mins).</li>
                                    <li><strong>Navadurga Puja:</strong> Worship of nine forms of Goddess Durga with mantras (40–60 mins).</li>
                                    <li><strong>Havan:</strong> Fire ritual offering ghee, herbs, and sacred wood (60 mins).</li>
                                    <li><strong>Lakshmi-Kubera Puja (Optional):</strong> Attracting prosperity (15 mins).</li>
                                    <li><strong>Naivedya & Prasad:</strong> Offering fruits and sweets to Maa Durga (20 mins).</li>
                                    <li><strong>Aarti:</strong> Final devotional ceremony (20 mins).</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Durga Puja in 2026 (Pune)</h2>
                                <p>Performing Durga Puja during an auspicious muhurat amplifies spiritual benefits.</p>
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
                                                <td className="p-3">September</td>
                                                <td className="p-3">14, 15</td>
                                                <td className="p-3">Navami</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-3">October</td>
                                                <td className="p-3">5, 6</td>
                                                <td className="p-3">Dashami</td>
                                                <td className="p-3">7:00–9:00 AM</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3">October</td>
                                                <td className="p-3">7, 8</td>
                                                <td className="p-3">Vijayadashami</td>
                                                <td className="p-3">6:30–8:30 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm mt-2 italic">For offices in Hinjewadi/Viman Nagar, mid-morning is recommended. For homes in Wakad/Baner, early morning is ideal.</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Durga Puja</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Spiritual Protection:</strong> Removal of negative energies and improved intuition.</li>
                                    <li><strong>Family Harmony:</strong> Strengthened bonds and unity.</li>
                                    <li><strong>Career & Wealth:</strong> Growth, prosperity, and recognition.</li>
                                    <li><strong>Health:</strong> Reduction of stress and emotional balance.</li>
                                    <li><strong>Vastu Dosha:</strong> Correction of energy imbalances in homes/offices.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Durga Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Durga Puja?", a: "Sacred Vedic festival dedicated to Goddess Durga, symbolizing power, protection, and prosperity." },
                                        { q: "Do you provide all samagri?", a: "Yes, our pandits bring all required items including idols, ghee, flowers, fruits, and Havan samagri." },
                                        { q: "Can the puja be performed at offices?", a: "Absolutely, we perform both residential and corporate Durga Puja in Pune." },
                                        { q: "Is muhurat important?", a: "Yes, right muhurat maximizes auspiciousness. We provide personalized timings." },
                                        { q: "Can optional rituals be added?", a: "Yes, Lakshmi-Kubera Puja and protective yantra installations can be included." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Embrace Tradition & Divine Grace</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Experience holistic benefits encompassing prosperity, harmony, health, and joy.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book your expert pandit for Durga Puja in Pune today!
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Durga Puja</Button>
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
                                
                                
                                {/* Book a Free Consulting CTA */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-lg p-4 border border-gold-200">
                                        <h5 className="font-bold text-maroon-900 text-sm mb-2 text-center">Book a Free Consulting</h5>
                                        <p className="text-xs text-gray-600 mb-3 text-center">Get expert guidance from our Vedic Pandits</p>
                                        <a href="tel:+918446272142" className="block w-full">
                                            <Button variant="primary" className="w-full text-sm py-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500">
                                                Call Now
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20a%20free%20consulting" target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
                                            <button className="w-full text-sm py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                                                WhatsApp Us
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Durga Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Navratri Special 2026</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Durga%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Durga Puja" />
            <Footer />
        </>
    )
}
