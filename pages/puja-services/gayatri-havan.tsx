import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GayatriHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gayatri Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Gayatri Havan in Pune. Most powerful Vedic fire ritual. Purification, enlightenment, spiritual growth. Expert pandits.',
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
                <title>Gayatri Havan in Pune – Supreme Vedic Fire Ritual</title>
                <meta name="description" content="Book Gayatri Havan in Pune. Most powerful Vedic mantra fire ritual. Purification, enlightenment, spiritual growth. Expert pandits. Sacred fire ceremony." />
                <meta name="keywords" content="Gayatri Havan Pune, Gayatri Mantra Fire Ritual, Vedic Havan, Spiritual Purification, Gayatri Homam" />
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
                            <span className="text-maroon-900 font-semibold">Gayatri Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Supreme Vedic Mantra</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Gayatri Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Most Powerful Vedic Fire Ritual</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the supreme Gayatri Mantra through sacred fire ritual. Achieve purification, enlightenment, and spiritual transformation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Gayatri Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Gayatri%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Gayatri Havan</strong> is the most sacred and powerful Vedic fire ritual, invoking the supreme Gayatri Mantra - considered the mother of all Vedas. This ceremony purifies mind, body, and soul, grants enlightenment, and connects devotees with divine cosmic energy.</p>

                                <h2 className="text-3xl font-bold mt-8">The Supreme Gayatri Mantra</h2>
                                <p>The Gayatri Mantra is the most revered mantra in Hinduism, found in the Rigveda (3.62.10). It is addressed to Savitar (the Sun deity) and represents the light of divine consciousness.</p>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-maroon-600">
                                    <p className="font-bold text-lg mb-2">The Sacred Gayatri Mantra:</p>
                                    <p className="text-maroon-900 font-serif text-base">
                                        "Om Bhur Bhuvah Swah<br />
                                        Tat Savitur Varenyam<br />
                                        Bhargo Devasya Dhimahi<br />
                                        Dhiyo Yo Nah Prachodayat"
                                    </p>
                                    <p className="text-sm mt-3 text-gray-700">
                                        <strong>Meaning:</strong> We meditate on the glory of the Creator who has created the universe, who is worthy of worship, who is the embodiment of knowledge and light, who is the remover of all sins and ignorance. May He enlighten our intellect.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Gayatri Havan</h2>
                                <ul>
                                    <li><strong>Spiritual Purification:</strong> Cleanses karmic impurities</li>
                                    <li><strong>Enlightenment:</strong> Awakens higher consciousness</li>
                                    <li><strong>Mental Clarity:</strong> Enhances intellect and wisdom</li>
                                    <li><strong>Protection:</strong> Shields from negative energies</li>
                                    <li><strong>Health:</strong> Promotes physical and mental well-being</li>
                                    <li><strong>Success:</strong> Removes obstacles in all endeavors</li>
                                    <li><strong>Peace:</strong> Brings inner tranquility</li>
                                    <li><strong>Divine Connection:</strong> Strengthens bond with cosmic consciousness</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Gayatri Havan</h2>
                                <ul>
                                    <li><strong>Sunrise:</strong> Most powerful time for Gayatri worship</li>
                                    <li><strong>Upanayana:</strong> Sacred thread ceremony</li>
                                    <li><strong>New Beginnings:</strong> Starting spiritual practices</li>
                                    <li><strong>Purification Need:</strong> After negative experiences</li>
                                    <li><strong>Spiritual Growth:</strong> Seeking enlightenment</li>
                                    <li><strong>Purnima:</strong> Full moon days</li>
                                    <li><strong>Eclipses:</strong> Solar/lunar eclipses (very powerful)</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Gayatri Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Gayatri Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Gayatri worship with 108 mantra chanting and fire offerings.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Gayatri Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹8,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with 1008 Gayatri mantra chanting and extended fire ceremony.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Gayatri Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Wake up before sunrise and take purification bath</li>
                                    <li>Wear clean white or saffron clothes</li>
                                    <li>Face East direction (towards rising sun)</li>
                                    <li>Maintain complete purity and sattvic state</li>
                                    <li>Keep sacred thread (if initiated)</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Sankalp:</strong> Take sacred vow for the havan</li>
                                    <li><strong>Pranayama:</strong> Perform breath control exercises</li>
                                    <li><strong>Gayatri Jaap:</strong> Chant Gayatri Mantra 108, 1008, or 10,000 times</li>
                                    <li><strong>Agni Sthapana:</strong> Light sacred fire</li>
                                    <li><strong>Ahuti:</strong> Make offerings with each mantra repetition</li>
                                    <li><strong>Purnahuti:</strong> Final grand offering</li>
                                    <li><strong>Meditation:</strong> Silent contemplation on divine light</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant Gayatri Mantra daily at sunrise, noon, and sunset</li>
                                    <li>Maintain purity in thought, word, and deed</li>
                                    <li>Practice meditation regularly</li>
                                    <li>Serve others selflessly</li>
                                    <li>Study Vedic scriptures</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Spiritual Enlightenment</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gayatri%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Gayatri Havan" />
            <Footer />
        </>
    )
}
