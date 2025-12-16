import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RudraHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Rudra Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Rudra Havan in Pune. Powerful Shiva fire ritual. Remove negativity, gain protection, spiritual power. Expert pandits.',
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
                <title>Rudra Havan in Pune – Powerful Shiva Fire Ritual</title>
                <meta name="description" content="Book Rudra Havan in Pune. Powerful Lord Shiva fire ritual. Remove negativity, gain divine protection, spiritual power. Expert pandits. Rudram chanting." />
                <meta name="keywords" content="Rudra Havan Pune, Rudra Homam, Shiva Fire Ritual, Rudram Chanting, Powerful Havan" />
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
                            <span className="text-maroon-900 font-semibold">Rudra Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Fierce Divine Power</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Rudra Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Powerful Shiva Fire Ritual</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Rudra, the fierce form of Shiva, through powerful fire ritual. Destroy negativity, gain protection, and receive divine blessings.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Rudra Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Rudra%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Rudra Havan</strong> is an extremely powerful Vedic fire ritual dedicated to Lord Rudra, the fierce and formidable aspect of Lord Shiva. This ceremony invokes Rudra's tremendous energy to destroy all negativity, remove obstacles, and grant divine protection and blessings.</p>

                                <h2 className="text-3xl font-bold mt-8">Lord Rudra - The Fierce Form</h2>
                                <p>Rudra is the Vedic name for Shiva, representing his fierce, destructive aspect. The name "Rudra" means "the roarer" or "the terrible one." While Shiva is meditative and peaceful, Rudra is dynamic and fierce - destroying evil, disease, and negativity.</p>

                                <p>According to the Yajurveda, there are eleven Rudras (Ekadasha Rudra), representing different aspects of Rudra's power. The Shri Rudram, found in the Krishna Yajurveda, is one of the most powerful Vedic hymns dedicated to Rudra.</p>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Rudra Havan</h2>
                                <ul>
                                    <li><strong>Negativity Destruction:</strong> Destroys all negative forces and energies</li>
                                    <li><strong>Disease Removal:</strong> Cures chronic and mysterious illnesses</li>
                                    <li><strong>Protection:</strong> Powerful shield against enemies and evil</li>
                                    <li><strong>Obstacle Removal:</strong> Clears all barriers to success</li>
                                    <li><strong>Spiritual Power:</strong> Grants tremendous spiritual energy</li>
                                    <li><strong>Karma Burning:</strong> Destroys negative karma</li>
                                    <li><strong>Mental Peace:</strong> Calms anger and restlessness</li>
                                    <li><strong>Saturn Pacification:</strong> Reduces malefic Saturn effects</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Rudra Havan</h2>
                                <ul>
                                    <li><strong>Maha Shivaratri:</strong> Most powerful time</li>
                                    <li><strong>Mondays:</strong> Especially during Shravan month</li>
                                    <li><strong>Pradosh:</strong> 13th lunar day</li>
                                    <li><strong>Severe Problems:</strong> Facing extreme difficulties</li>
                                    <li><strong>Health Crisis:</strong> Serious illness or disease</li>
                                    <li><strong>Enemy Attacks:</strong> Protection from opponents</li>
                                    <li><strong>Saturn Period:</strong> During Shani Mahadasha or Sade Sati</li>
                                    <li><strong>Spiritual Breakthrough:</strong> Seeking transformation</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Rudra Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Rudra Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Rudra worship with Rudram chanting and 108 ahutis.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Ekadasha Rudra Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹12,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with 11 Rudra forms, Rudrabhishek, and 1008 ahutis.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Rudra Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Observe strict fast</li>
                                    <li>Wear white or rudraksha mala</li>
                                    <li>Arrange bilva leaves, white flowers, milk</li>
                                    <li>Set up havan kund with proper mantras</li>
                                    <li>Maintain complete purity</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Rudra Invocation:</strong> Call the eleven Rudras</li>
                                    <li><strong>Shri Rudram Chanting:</strong> Recite powerful Vedic hymn</li>
                                    <li><strong>Rudrabhishek:</strong> Abhishek with sacred items</li>
                                    <li><strong>Chamakam:</strong> Chant blessings hymn</li>
                                    <li><strong>Havan:</strong> Offer 108 or 1008 ahutis</li>
                                    <li><strong>Purnahuti:</strong> Final grand offering</li>
                                    <li><strong>Rudra Aarti:</strong> Conclude with devotion</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Rudra Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Main Mantra:</strong> "Om Namo Bhagavate Rudraya"</li>
                                        <li><strong>Powerful:</strong> Shri Rudram (Vedic hymn)</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant Rudra mantra daily</li>
                                    <li>Wear rudraksha mala</li>
                                    <li>Offer bilva leaves on Mondays</li>
                                    <li>Practice intense meditation</li>
                                    <li>Maintain discipline and purity</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Divine Power</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rudra%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Rudra Havan" />
            <Footer />
        </>
    )
}
