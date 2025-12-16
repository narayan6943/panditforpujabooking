import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShivaHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shiva Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Shiva Havan in Pune. Transformation, liberation, spiritual power. Expert pandits for Lord Shiva fire ritual.',
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
                <title>Shiva Havan in Pune – Divine Transformation Fire Ritual</title>
                <meta name="description" content="Book Shiva Havan in Pune. Transformation, liberation, spiritual power. Expert pandits for Lord Shiva fire ritual. Mahadev Homam." />
                <meta name="keywords" content="Shiva Havan Pune, Mahadev Havan, Shiva Homam, Transformation Ritual, Spiritual Power" />
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
                            <span className="text-maroon-900 font-semibold">Shiva Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Transformation</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shiva Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Liberation</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Shiva, the supreme transformer, through powerful fire ritual. Achieve spiritual transformation, liberation, and divine consciousness.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Shiva Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Shiva%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Shiva Havan</strong> is a profound Vedic fire ritual dedicated to Lord Shiva, the supreme deity of transformation and liberation. This powerful ceremony destroys negativity, grants spiritual power, and leads devotees toward moksha (liberation).</p>

                                <h2 className="text-3xl font-bold mt-8">Lord Shiva - The Supreme Transformer</h2>
                                <p>Lord Shiva is the destroyer in the Hindu trinity, but destruction here means transformation - destroying ignorance to reveal truth, destroying ego to reveal the Self. He is Mahadeva (the great god), Nataraja (cosmic dancer), and Neelkanth (blue-throated one who drank poison to save the world).</p>

                                <p>Shiva resides on Mount Kailash in deep meditation, representing the ultimate yogi and ascetic. He is both the householder (with Parvati) and the renunciate, embodying the balance of worldly and spiritual life.</p>

                                <h3 className="text-2xl font-bold mt-6">Shiva's Symbols</h3>
                                <ul>
                                    <li><strong>Third Eye:</strong> Wisdom and destruction of ignorance</li>
                                    <li><strong>Trishul (Trident):</strong> Three gunas and three aspects of time</li>
                                    <li><strong>Damaru (Drum):</strong> Sound of creation</li>
                                    <li><strong>Crescent Moon:</strong> Time cycles</li>
                                    <li><strong>Ganga:</strong> Purification and grace</li>
                                    <li><strong>Serpent:</strong> Kundalini energy</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Shiva Havan</h2>
                                <ul>
                                    <li><strong>Spiritual Transformation:</strong> Destroys ego and ignorance</li>
                                    <li><strong>Liberation:</strong> Progress toward moksha</li>
                                    <li><strong>Negativity Removal:</strong> Burns all negative karma</li>
                                    <li><strong>Meditation Power:</strong> Deepens spiritual practices</li>
                                    <li><strong>Health:</strong> Especially for chronic diseases</li>
                                    <li><strong>Protection:</strong> Shields from all evils</li>
                                    <li><strong>Kundalini Awakening:</strong> Spiritual energy activation</li>
                                    <li><strong>Saturn Pacification:</strong> Reduces Shani effects</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Shiva Havan</h2>
                                <ul>
                                    <li><strong>Maha Shivaratri:</strong> Most auspicious (once yearly)</li>
                                    <li><strong>Mondays:</strong> Shiva's special day</li>
                                    <li><strong>Pradosh:</strong> 13th lunar day</li>
                                    <li><strong>Shravan Month:</strong> Entire month dedicated to Shiva</li>
                                    <li><strong>Spiritual Seeking:</strong> Deepening meditation practice</li>
                                    <li><strong>Transformation Need:</strong> Major life changes</li>
                                    <li><strong>Saturn Period:</strong> During Shani Mahadasha</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Shiva Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Shiva Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Shiva worship with 108 ahutis and Shiva mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Mahadev Maha Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹10,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Rudrabhishek, 1008 ahutis, and extended ceremonies.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Shiva Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Observe fast on Monday or Pradosh</li>
                                    <li>Wear white or saffron clothes</li>
                                    <li>Arrange bilva leaves, white flowers, milk</li>
                                    <li>Set up havan kund facing East</li>
                                    <li>Keep Shiva linga or picture</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Shiva Invocation:</strong> "Om Namah Shivaya"</li>
                                    <li><strong>Rudrabhishek:</strong> Abhishek with milk, honey, etc.</li>
                                    <li><strong>Rudram Chanting:</strong> Shri Rudram recitation</li>
                                    <li><strong>Mantra Jaap:</strong> "Om Namah Shivaya" 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with bilva leaves</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Shiva Aarti:</strong> Devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Shiva Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Panchakshari:</strong> "Om Namah Shivaya"</li>
                                        <li><strong>Maha Mrityunjaya:</strong> "Om Tryambakam Yajamahe..."</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant Om Namah Shivaya daily</li>
                                    <li>Fast on Mondays</li>
                                    <li>Offer bilva leaves to Shiva linga</li>
                                    <li>Practice meditation and yoga</li>
                                    <li>Live with detachment and simplicity</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Spiritual Transformation</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shiva%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Shiva Havan" />
            <Footer />
        </>
    )
}
