import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VishnuHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vishnu Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Vishnu Havan in Pune. Divine protection, prosperity, peace. Expert pandits for Lord Vishnu fire ritual.',
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
                <title>Vishnu Havan in Pune – Divine Preservation Fire Ritual</title>
                <meta name="description" content="Book Vishnu Havan in Pune. Divine protection, prosperity, peace. Expert pandits for Lord Vishnu fire ritual. Narayana Homam." />
                <meta name="keywords" content="Vishnu Havan Pune, Narayana Havan, Vishnu Homam, Divine Protection, Preservation Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Vishnu Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Preservation</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vishnu Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Protection</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Vishnu, the divine preserver, through powerful fire ritual. Receive protection, prosperity, peace, and divine grace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Vishnu Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Vishnu%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Vishnu Havan</strong> is a sacred Vedic fire ritual dedicated to Lord Vishnu, the preserver and protector of the universe. This powerful ceremony invokes Vishnu's divine grace for protection, prosperity, peace, and overall well-being.</p>

                                <h2 className="text-3xl font-bold mt-8">Lord Vishnu - The Divine Preserver</h2>
                                <p>Lord Vishnu is one of the principal deities of Hinduism, forming the Trimurti (trinity) with Brahma (creator) and Shiva (destroyer). Vishnu preserves and maintains cosmic order (dharma). He reclines on the cosmic serpent Shesha in the ocean of milk, representing infinite consciousness.</p>

                                <p>Vishnu has taken ten major incarnations (Dashavatara) to restore dharma whenever evil threatens the world: Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, and Kalki (yet to come).</p>

                                <h3 className="text-2xl font-bold mt-6">Vishnu's Symbols</h3>
                                <ul>
                                    <li><strong>Sudarshan Chakra:</strong> Discus representing mind and time</li>
                                    <li><strong>Shankha (Conch):</strong> Sound of creation</li>
                                    <li><strong>Gada (Mace):</strong> Power and authority</li>
                                    <li><strong>Padma (Lotus):</strong> Purity and spiritual liberation</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Vishnu Havan</h2>
                                <ul>
                                    <li><strong>Divine Protection:</strong> Shields from all dangers and enemies</li>
                                    <li><strong>Prosperity:</strong> Attracts wealth and abundance</li>
                                    <li><strong>Peace:</strong> Brings mental tranquility and harmony</li>
                                    <li><strong>Health:</strong> Promotes physical and mental well-being</li>
                                    <li><strong>Dharma:</strong> Strengthens righteousness and ethics</li>
                                    <li><strong>Family Harmony:</strong> Ensures domestic peace</li>
                                    <li><strong>Spiritual Growth:</strong> Advances on spiritual path</li>
                                    <li><strong>Jupiter Strength:</strong> Enhances Jupiter in horoscope</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Vishnu Havan</h2>
                                <ul>
                                    <li><strong>Ekadashi:</strong> 11th lunar day (Vishnu's special day)</li>
                                    <li><strong>Thursdays:</strong> Jupiter's day</li>
                                    <li><strong>Vaikuntha Ekadashi:</strong> Most auspicious</li>
                                    <li><strong>Protection Need:</strong> Facing threats or dangers</li>
                                    <li><strong>Prosperity Desire:</strong> Seeking wealth and success</li>
                                    <li><strong>Spiritual Practice:</strong> Deepening devotion</li>
                                    <li><strong>Family Welfare:</strong> Ensuring household peace</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Vishnu Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Vishnu Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Vishnu worship with 108 ahutis and Vishnu Sahasranama.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Narayana Maha Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹10,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Dashavatara puja, 1008 ahutis, and extended ceremonies.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Vishnu Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Observe fast on Ekadashi or Thursday</li>
                                    <li>Wear yellow or white clothes</li>
                                    <li>Arrange yellow flowers, tulsi leaves, fruits</li>
                                    <li>Set up havan kund facing East or North</li>
                                    <li>Keep Vishnu idol or picture</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Vishnu Invocation:</strong> "Om Namo Narayanaya"</li>
                                    <li><strong>Vishnu Sahasranama:</strong> Recite 1000 names</li>
                                    <li><strong>Dashavatara Puja:</strong> Worship ten incarnations</li>
                                    <li><strong>Mantra Jaap:</strong> Chant 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with tulsi and yellow flowers</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Vishnu Aarti:</strong> Devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Vishnu Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Maha Mantra:</strong> "Om Namo Narayanaya"</li>
                                        <li><strong>Beej Mantra:</strong> "Om Namo Bhagavate Vasudevaya"</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant Vishnu mantra daily</li>
                                    <li>Fast on Ekadashi days</li>
                                    <li>Offer tulsi to Vishnu</li>
                                    <li>Read Bhagavad Gita or Vishnu Purana</li>
                                    <li>Practice dharma and righteousness</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Divine Protection</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vishnu%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Vishnu Havan" />
            <Footer />
        </>
    )
}
