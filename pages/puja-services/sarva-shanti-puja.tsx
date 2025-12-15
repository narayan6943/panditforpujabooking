import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SarvaShantiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sarva Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Sarva Shanti Puja in Pune. Universal remedy for removing all doshas, bad luck, and negative energies. Highly recommended for overall family peace.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Sarva Shanti Puja' },
        { id: 'about', title: 'Universal Remedy' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Sarva Shanti Puja in Pune – Complete Peace & Protection</title>
                <meta name="description" content="Facing multiple problems? Book Sarva Shanti Puja in Pune. A collective remedy (Samuhik Shanti) for Navagraha, Vastu, and Nakshatra doshas. Restore harmony." />
                <meta name="keywords" content="Sarva Shanti Puja Pune, Universal Peace Puja, All Dosh Nivaran Puja, Family Harmony Puja, Grah Shanti Pune" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Sarva Shanti Puja</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/navagraha-shanti-hero.png"
                            alt="Sarva Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Universal Peace & Harmony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Sarva Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Remove All Negativity</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                When problems come from all directions and the cause is unknown, Sarva Shanti is the ultimate Vedic solution. Pacify all planets, directions, and deities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Sarva Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Sarva%20Shanti%20Puja" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p><strong>Sarva Shanti Puja</strong> is a comprehensive Vedic ritual performed to pacify multiple negative influences simultaneously. It addresses <strong>Graha Dosh</strong> (Planetary), <strong>Vastu Dosh</strong> (Directional), and <strong>Pitra Dosh</strong> (Ancestral) in a single, powerful ceremony.</p>
                                <p>This puja is highly recommended when a family faces a series of misfortunes, health issues, or conflicts without any apparent reason. It restores the balance of the five elements and invites positive energy.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">What it Covers</h3>
                                <ul>
                                    <li><strong>Navagraha Shanti:</strong> Pacifying all 9 planets.</li>
                                    <li><strong>Dikpal Puja:</strong> Honoring the guardians of 10 directions.</li>
                                    <li><strong>Pancha Mahabhuta:</strong> Balancing Earth, Water, Fire, Air, Space.</li>
                                    <li><strong>Nakshatra Shanti:</strong> Remedying birth star afflictions.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Sarva Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Peace Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Navagraha Havan, Rudrabhishek, and Vastu Shanti basics.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Sarva Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with 5 Pandits. Includes Chandi Path, detailed Havan, and Daan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (Comprehensive)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Navagraha Sticks (Samidha) - 9 types</li>
                                    <li>Navagraha Grains - 9 types</li>
                                    <li>Panchagavya (Cow products mixture)</li>
                                    <li>Sarva Aushadhi (Mixture of sacred herbs)</li>
                                    <li>Full Red/White/Black Cloths</li>
                                    <li>Dry Fruits, Coconut, Ghee (large quantity)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Swasti Vachan:</strong> Invoking auspiciousness.</li>
                                    <li><strong>Raksha Bandhan:</strong> Protective thread for the host.</li>
                                    <li><strong>Pancha Devata Puja:</strong> Ganesh, Vishnu, Shiva, Durga, Surya.</li>
                                    <li><strong>Navagraha & Dikpal Puja:</strong> Worship of planets and directions.</li>
                                    <li><strong>Sarvato Bhadra Mandal:</strong> Worship of the cosmic diagram.</li>
                                    <li><strong>Maha Havan:</strong> Extensive fire ritual offering oblations to all deities to appease anger/doshas.</li>
                                    <li><strong>Purnahuti & Aarti:</strong> Final offering and prayers for peace.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Total Reset:</strong> Cleanses the aura of the entire house and family members.</li>
                                    <li><strong>Health & Vitality:</strong> Removes chronic health issues affecting the family.</li>
                                    <li><strong>Wealth Protection:</strong> Prevents sudden financial drains or theft.</li>
                                    <li><strong>Harmony:</strong> Resolves internal family disputes and brings unity.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this same as Satyanarayan Puja?", a: "No. Satyanarayan is for thanksgiving. Sarva Shanti is a remedial puja for removing negativity." },
                                        { q: "Can we do it in a new house?", a: "Yes, it is excellent to perform before or during Griha Pravesh to ensure a fresh start." },
                                        { q: "How long does it take?", a: "It is an elaborate puja taking 4 to 6 hours depending on the package." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Restore Harmony</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        One puja to solve them all. Embrace universal peace.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Sarva Shanti</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">{sec.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Sarva Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Universal Vitality</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sarva%20Shanti%20Puja" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Sarva Shanti Puja" />
            <Footer />
        </>
    )
}
