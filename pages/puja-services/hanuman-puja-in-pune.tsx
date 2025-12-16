import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HanumanPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hanuman Chalisa Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Hanuman Chalisa Paath in Pune. Recite for strength, protection and removing obstacles. Complete Samagri and Vedic Vidhi included.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Hanuman Chalisa Paath' },
        { id: 'about', title: 'Significance' },
        { id: 'packages', title: 'Packages & Costs' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Hanuman Chalisa Paath in Pune – Strength & Protection</title>
                <meta name="description" content="Book certified Pandit for Hanuman Chalisa Paath in Pune. Recite 40 verses for strength, courage & protection. Authentic Vedic rituals for home & office." />
                <meta name="keywords" content="Hanuman Chalisa Paath Pune, Hanuman Puja Pune, Sundarkand Path Pune, Bajrang Baan Path, Hanuman Jayanti Puja" />
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
                            <span className="text-maroon-900 font-semibold">Hanuman Puja</span>
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
                            alt="Hanuman Chalisa Paath"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Strength, Courage & Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Hanuman Chalisa Paath in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Recite with Expert Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke the strength and blessings of Lord Hanuman. Authentic 40-verse recitation for protection from obstacles and negativity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Hanuman Paath
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Hanuman%20Chalisa%20Paath" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Hanuman Chalisa Paath in Pune</strong> is a devotional practice that involves chanting the 40 verses praising Lord Hanuman, the symbol of strength, courage, and devotion. In Pune, residents across <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> perform this paath to gain protection from obstacles, enhance mental and physical strength, and attract positivity.
                                </p>
                                <p>
                                    The ritual is simple yet powerful, usually performed in the morning or evening. Our pandits guide devotees through proper intonation, hand gestures, and offerings to maximize spiritual results.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance & Ritual Process</h3>
                                <p>
                                    Hanuman Chalisa Paath strengthens confidence, reduces fear and anxiety, and removes negative influences. This ritual is especially recommended for students, business professionals, and families seeking protection from chronic issues or spiritual blockages.
                                </p>
                            </section>

                            {/* Packages (Inferred) */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Hanuman Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Single recitation with Ganapati Puja and Prasad offering.</p>
                                        <div className="text-xs text-gray-500">Duration: 45-60 mins</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">108 Recitations</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Group chanting of Hanuman Chalisa 108 times for maximum power.</p>
                                        <div className="text-xs text-gray-500">Duration: 3-4 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Sundarkand Path</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Recitation of Sundarkand chpater from Ramayana. Highly auspicious.</p>
                                        <div className="text-xs text-gray-500">Duration: 2-3 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Office Protection Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">Custom</div>
                                        <p className="text-sm text-gray-700 mb-3">For business premises to remove obstacles and negative vibes.</p>
                                        <div className="text-xs text-gray-500">Duration: Custom</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices are indicative. Includes Samagri & Dakshina. Contact for exact quote.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Hanuman Paath Samagri List (100% Provided)</h2>
                                <p className="text-sm text-gray-700 mb-4">We provide all essential samagri. You only need to provide a clean space and fresh water.</p>

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
                                                <td className="p-3">Lord Hanuman Idol</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Focus of devotion</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Offerings</td>
                                                <td className="p-3">Flowers (Marigold/Rose)</td>
                                                <td className="p-3">50</td>
                                                <td className="p-3">Offerings</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Naivedya</td>
                                                <td className="p-3">Banana, Coconut, Jaggery</td>
                                                <td className="p-3">11 each</td>
                                                <td className="p-3">Food Offering</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50">
                                                <td className="p-3 font-semibold">Atmosphere</td>
                                                <td className="p-3">Incense, Diyas</td>
                                                <td className="p-3">12 each</td>
                                                <td className="p-3">Purification & Light</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Step-by-Step Hanuman Chalisa Paath Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Achaman & Sankalp:</strong> Purification and setting intentions (10 mins).</li>
                                    <li><strong>Ganapati Puja:</strong> Removing obstacles (15 mins).</li>
                                    <li><strong>Lighting Diya & Incense:</strong> Creating a sacred space (10 mins).</li>
                                    <li><strong>Recitation:</strong> Chanting Hanuman Chalisa 40 verses (20–40 mins).</li>
                                    <li><strong>Naivedya Offering:</strong> Fruits, sweets, and water (15 mins).</li>
                                    <li><strong>Aarti & Concluding Rituals:</strong> Lighting lamps, distributing Prasad (10 mins).</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Hanuman Paath</h2>
                                <p>Tuesdays and Saturdays are considered most auspicious.</p>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Early Morning (6:30–8:30 AM):</strong> Ideal for Wakad, Baner, Kharadi, Viman Nagar.</li>
                                    <li><strong>Evening (5:30–7:00 PM):</strong> Ideal for Aundh, Koregaon Park, Pimpri Chinchwad, Camp.</li>
                                </ul>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Hanuman Chalisa Paath</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Strength & Courage:</strong> Strengthens confidence and determination.</li>
                                    <li><strong>Protection:</strong> Removes fear, negativity, anxiety, and protects from accidents.</li>
                                    <li><strong>Energy:</strong> Enhances physical and mental energy.</li>
                                    <li><strong>Prosperity:</strong> Attracts spiritual blessings and prosperity.</li>
                                    <li><strong>Devotion:</strong> Builds faith, especially in children and students.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Hanuman Chalisa Paath</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Hanuman Chalisa Paath?", a: "Recitation of 40 verses praising Lord Hanuman to gain protection and strength." },
                                        { q: "What is the duration?", a: "20–40 minutes depending on repetitions." },
                                        { q: "Is Samagri provided?", a: "Yes, including lamps, flowers, incense, and Prasad." },
                                        { q: "Can it be performed at offices?", a: "Yes, suitable for home or corporate environments." },
                                        { q: "Is Muhurat important?", a: "Auspicious timings increase spiritual potency." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Gain Strength & Courage</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Invoke the blessings of Bajrangbali for a fearless life.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book your expert pandit for Hanuman Chalisa Paath in Pune today!
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Hanuman Paath</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Hanuman Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Strength & Protection</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Hanuman%20Paath" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Hanuman Puja" />
            <Footer />
        </>
    )
}
