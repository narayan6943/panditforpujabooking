import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VastuHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vastu Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Vastu Havan in Pune. Remove Vastu doshas, energize space, ensure prosperity. Expert pandits for home and office.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Vastu Havan in Pune – Space Purification Fire Ritual</title>
                <meta name="description" content="Book Vastu Havan in Pune. Remove Vastu doshas, energize space, ensure prosperity. Expert pandits for home and office Vastu correction fire ritual." />
                <meta name="keywords" content="Vastu Havan Pune, Vastu Shanti, Space Purification, Vastu Dosh Removal, Griha Pravesh Havan" />
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
                            <span className="text-maroon-900 font-semibold">Vastu Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Space Harmonization</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vastu Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Space Purification</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Purify and energize your home or office through powerful Vastu fire ritual. Remove doshas, harmonize energies, and ensure prosperity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Vastu Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Vastu%20Havan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section className="prose prose-lg max-w-none">
                                <p><strong>Vastu Havan</strong> is a powerful Vedic fire ritual performed to remove Vastu doshas (architectural defects) and harmonize the energy of a space. This sacred ceremony purifies the environment, balances the five elements, and ensures prosperity, health, and peace for occupants.</p>

                                <h2 className="text-3xl font-bold mt-8">Understanding Vastu Shastra</h2>
                                <p>Vastu Shastra is the ancient Indian science of architecture and space arrangement. It teaches how to align buildings with cosmic energies and natural forces. The word "Vastu" means dwelling, and the science aims to create harmony between humans and their environment.</p>

                                <p>According to Vastu, every direction is governed by a deity and element. When these are properly balanced, the space becomes conducive to health, wealth, and happiness. When imbalanced, Vastu doshas create obstacles.</p>

                                <h3 className="text-2xl font-bold mt-6">Directional Deities</h3>
                                <ul>
                                    <li><strong>East (Indra):</strong> Sun, new beginnings, health</li>
                                    <li><strong>Southeast (Agni):</strong> Fire, energy, kitchen</li>
                                    <li><strong>South (Yama):</strong> Ancestors, stability</li>
                                    <li><strong>Southwest (Nirriti):</strong> Earth, master bedroom</li>
                                    <li><strong>West (Varuna):</strong> Water, gains</li>
                                    <li><strong>Northwest (Vayu):</strong> Air, movement</li>
                                    <li><strong>North (Kubera):</strong> Wealth, prosperity</li>
                                    <li><strong>Northeast (Ishanya):</strong> Water, puja room</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Vastu Havan</h2>
                                <ul>
                                    <li><strong>Dosh Removal:</strong> Neutralizes Vastu defects</li>
                                    <li><strong>Energy Purification:</strong> Cleanses negative energies</li>
                                    <li><strong>Prosperity:</strong> Attracts wealth and success</li>
                                    <li><strong>Health:</strong> Promotes physical and mental well-being</li>
                                    <li><strong>Harmony:</strong> Ensures family peace</li>
                                    <li><strong>Protection:</strong> Shields from negative influences</li>
                                    <li><strong>Element Balance:</strong> Harmonizes five elements</li>
                                    <li><strong>Divine Blessings:</strong> Invokes directional deities</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Vastu Havan</h2>
                                <ul>
                                    <li><strong>Griha Pravesh:</strong> Before entering new home</li>
                                    <li><strong>Office Opening:</strong> Before starting business in new space</li>
                                    <li><strong>After Construction:</strong> Completing building work</li>
                                    <li><strong>Vastu Defects:</strong> When unable to make structural changes</li>
                                    <li><strong>Persistent Problems:</strong> Ongoing health, wealth, or relationship issues</li>
                                    <li><strong>Annual Purification:</strong> Once yearly for maintenance</li>
                                    <li><strong>After Renovation:</strong> Major changes to property</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Vastu Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Vastu Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Vastu purification with directional deity worship and fire offerings.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Vastu Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Vastu Purusha puja, all directional havans, and energization.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Vastu Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Clean entire space thoroughly</li>
                                    <li>Remove clutter and broken items</li>
                                    <li>Set up havan kund in center or Northeast</li>
                                    <li>Arrange offerings for all eight directions</li>
                                    <li>Keep Vastu Purusha yantra</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Vastu Purusha Puja:</strong> Worship the deity of space</li>
                                    <li><strong>Directional Deity Worship:</strong> Invoke all eight direction lords</li>
                                    <li><strong>Panchamrit Abhishek:</strong> Purification with five nectars</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis in all directions</li>
                                    <li><strong>Vastu Mantra Jaap:</strong> Chant Vastu mantras</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Prasad Distribution:</strong> Share blessings</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Vastu Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Main Mantra:</strong> "Om Vastu Purushaya Namah"</li>
                                        <li><strong>Protection:</strong> "Om Vastu Devaya Namah"</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Keep space clean and organized</li>
                                    <li>Light lamp in Northeast daily</li>
                                    <li>Place Vastu Yantra in home</li>
                                    <li>Maintain proper directional usage</li>
                                    <li>Avoid clutter accumulation</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Space Harmony</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vastu%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Vastu Havan" />
            <Footer />
        </>
    )
}
