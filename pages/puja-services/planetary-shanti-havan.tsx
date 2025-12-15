import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function PlanetaryShantiHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Planetary Shanti Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Planetary Shanti Havan in Pune. Pacify all planets, remove doshas, ensure harmony. Expert pandits for comprehensive planetary fire ritual.',
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
                <title>Planetary Shanti Havan in Pune – Complete Planetary Peace</title>
                <meta name="description" content="Book Planetary Shanti Havan in Pune. Pacify all planets, remove doshas, ensure cosmic harmony. Expert pandits for comprehensive planetary fire ritual." />
                <meta name="keywords" content="Planetary Shanti Havan Pune, Graha Shanti, Planet Pacification, Dosh Removal, Navagraha Havan" />
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
                            <span className="text-maroon-900 font-semibold">Planetary Shanti Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Cosmic Harmony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Planetary Shanti Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Complete Planetary Peace Ritual</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Comprehensive fire ritual to pacify all planets, remove doshas, and ensure complete cosmic harmony in your life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Planetary Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Planetary%20Shanti%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Planetary Shanti Havan</strong> is a comprehensive Vedic fire ritual that addresses all planetary afflictions in your horoscope. This powerful ceremony pacifies malefic planets, strengthens benefic ones, and creates complete cosmic harmony for overall life success.</p>

                                <h2 className="text-3xl font-bold mt-8">Complete Planetary Harmony</h2>
                                <p>Unlike specific planet havans, this ritual provides holistic planetary balance by addressing all nine planets (Navagraha) plus Rahu-Ketu doshas, Mangal Dosh, Shani effects, and other planetary combinations. It's the ultimate solution for comprehensive astrological remedies.</p>

                                <h3 className="text-2xl font-bold mt-6">All Planets Addressed</h3>
                                <ul>
                                    <li><strong>Sun (Surya):</strong> Authority, health, father</li>
                                    <li><strong>Moon (Chandra):</strong> Mind, emotions, mother</li>
                                    <li><strong>Mars (Mangal):</strong> Energy, courage, property</li>
                                    <li><strong>Mercury (Budh):</strong> Intelligence, communication, business</li>
                                    <li><strong>Jupiter (Guru):</strong> Wisdom, children, prosperity</li>
                                    <li><strong>Venus (Shukra):</strong> Love, luxury, arts</li>
                                    <li><strong>Saturn (Shani):</strong> Discipline, karma, longevity</li>
                                    <li><strong>Rahu:</strong> Ambition, foreign connections, innovation</li>
                                    <li><strong>Ketu:</strong> Spirituality, liberation, past karma</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Planetary Shanti Havan</h2>
                                <ul>
                                    <li><strong>Complete Dosh Removal:</strong> Addresses all planetary doshas</li>
                                    <li><strong>Life Balance:</strong> Harmonizes all life areas</li>
                                    <li><strong>Obstacle Removal:</strong> Clears planetary barriers</li>
                                    <li><strong>Health:</strong> Improves physical and mental well-being</li>
                                    <li><strong>Relationships:</strong> Enhances family and social harmony</li>
                                    <li><strong>Career:</strong> Ensures professional success</li>
                                    <li><strong>Wealth:</strong> Attracts prosperity</li>
                                    <li><strong>Spiritual Growth:</strong> Advances on spiritual path</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Planetary Shanti Havan</h2>
                                <ul>
                                    <li><strong>Multiple Doshas:</strong> When facing several planetary afflictions</li>
                                    <li><strong>Life Challenges:</strong> Persistent problems in multiple areas</li>
                                    <li><strong>Mahadasha Change:</strong> Entering new planetary period</li>
                                    <li><strong>Annual Ritual:</strong> Yearly planetary balance</li>
                                    <li><strong>Major Life Events:</strong> Marriage, business, relocation</li>
                                    <li><strong>Eclipses:</strong> During solar/lunar eclipses</li>
                                    <li><strong>Astrological Consultation:</strong> When astrologer recommends</li>
                                    <li><strong>Preventive Measure:</strong> Maintaining cosmic harmony</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Planetary Shanti Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Planetary Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹6,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Navagraha worship with 108 ahutis per planet and planetary mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Planetary Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹21,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with all planets, 1008 ahutis each, gemstone energization, and personalized remedies.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Planetary Shanti Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Consult astrologer for birth chart analysis</li>
                                    <li>Observe fast or light sattvic diet</li>
                                    <li>Arrange offerings for all nine planets</li>
                                    <li>Set up havan kund facing East</li>
                                    <li>Keep horoscope and gemstones for energization</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Navagraha Invocation:</strong> Call all nine planets</li>
                                    <li><strong>Individual Planet Worship:</strong> Detailed puja for each planet</li>
                                    <li><strong>Planetary Mantra Jaap:</strong> 108 mantras per planet</li>
                                    <li><strong>Havan:</strong> 108 ahutis for each planet with specific offerings</li>
                                    <li><strong>Gemstone Energization:</strong> Bless planetary gemstones</li>
                                    <li><strong>Personalized Remedies:</strong> Based on horoscope</li>
                                    <li><strong>Purnahuti:</strong> Grand final offering</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Key Planetary Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Sun:</strong> "Om Suryaya Namah"</li>
                                        <li><strong>Moon:</strong> "Om Chandraya Namah"</li>
                                        <li><strong>Mars:</strong> "Om Mangalaya Namah"</li>
                                        <li><strong>Mercury:</strong> "Om Budhaya Namah"</li>
                                        <li><strong>Jupiter:</strong> "Om Gurave Namah"</li>
                                        <li><strong>Venus:</strong> "Om Shukraya Namah"</li>
                                        <li><strong>Saturn:</strong> "Om Shanaye Namah"</li>
                                        <li><strong>Rahu:</strong> "Om Rahave Namah"</li>
                                        <li><strong>Ketu:</strong> "Om Ketave Namah"</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant planetary mantras daily</li>
                                    <li>Wear energized gemstones as recommended</li>
                                    <li>Follow planet-specific remedies (fasting, donations)</li>
                                    <li>Maintain horoscope-aligned lifestyle</li>
                                    <li>Annual repetition for continued harmony</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Planetary Peace</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Planetary%20Shanti%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Planetary Shanti Havan" />
            <Footer />
        </>
    )
}
