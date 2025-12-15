import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function BajrangBaanPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Bajrang Baan Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Bajrang Baan Paath in Pune. The Arrow of Hanuman Mantra for destroying enemies, fear, and negativity. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '1100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Bajrang Baan Paath in Pune – The Arrow of Hanuman</title>
                <meta name="description" content="Book Bajrang Baan Paath in Pune. Recite the fierce 'Bajrang Baan' mantra to destroy negativity, enemies, and evil spirits. Powerful protection ritual. ₹1,100 onwards." />
                <meta name="keywords" content="Bajrang Baan Paath Pune, Hanuman Protection Mantra, Destroy Enemies, Remove Black Magic, Bajrang Bali Power" />
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
                            <span className="text-maroon-900 font-semibold">Bajrang Baan Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Nishchaya Prema Prateet Te, Vinay Karein Sanmaan</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Bajrang Baan Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">The Invincible Arrow of Protection</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Unlike the soothing Chalisa, the Bajrang Baan (Thunderbolt Arrow) is a fierce oath-bound mantra used only when all other remedies fail. It compels Lord Hanuman to intervene.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Bajrang Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Bajrang%20Baan%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Bajrang Baan</strong> literally means the "Arrow of Hanuman". It is a very potent hymn composed by Goswami Tulsidas. It is unique because it contains <strong>"Shapath" (Oaths)</strong>. In this mantra, the devotee swears by Lord Rama ("Inhe Maaru Tohi Shapath Ram Ki") to compel Hanuman to destroy the enemies or negativity affecting them.</p>

                                <div className="bg-red-50 p-4 border-l-4 border-red-500 my-4">
                                    <p className="font-bold text-red-800">Note of Caution:</p>
                                    <p className="text-red-700 text-sm">Because it involves swearing by Lord Rama, this Paath should be done <strong>only</strong> for genuine, severe problems and with absolute purity. It is not for trivial desires.</p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Use Bajrang Baan?</h2>
                                <ul>
                                    <li><strong>Black Magic & Evil Eye:</strong> To cut through negative energies sent by others.</li>
                                    <li><strong>Incurable Diseases:</strong> When medicines stop working.</li>
                                    <li><strong>Deep Fear/Haunting:</strong> If one feels the presence of spirits or ghosts.</li>
                                    <li><strong>Life-Threatening Enemies:</strong> For protection against physical harm.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Verses</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Bhoot Pret Pishaach Nishaachar... Inhe Maaru Tohi Shapath Ram Ki"
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "Ghosts, spirits, goblins, and demons... Destroy them! I swear you by the name of Lord Rama to do so."
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">Bajrang Baan Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">21 Recitations</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Strong protection shield.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1 Hour</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Sindoor offering</li>
                                            <li>✓ Red Thread (Mauli) Energizing</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Shatru Nashak Yagya</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">108 Paath + Havan with red chillies.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ Havan with Ghee & Chillies</li>
                                            <li>✓ Coconut smashing ritual</li>
                                            <li>✓ Lemon cutting (Nazar Utarna)</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">The "Kila" (Fortification)</h3>
                                <p>The ritual involves creating a protective boundary:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Sankalp:</strong> Stating the precise problem clearly.</li>
                                    <li><strong>Mantra:</strong> Chant the Baan loudly with anger/force (Raudra Bhav) against the negativity.</li>
                                    <li><strong>Offering:</strong> Offering cloves (Laung) or camphor to the fire.</li>
                                    <li><strong>Raksha Sutra:</strong> Tying a red thread blessed with the mantra on the wrist.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is it dangerous?</h3>
                                <p>Not "dangerous", but it generates high heat (Ugra Shakti). It should not be done for fun or without a valid reason.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can I do it daily?</h3>
                                <p>It is better to do Hanuman Chalisa daily and keep Bajrang Baan for Tuesdays/Saturdays or specific crisis periods.</p>

                                <h3 className="text-xl font-bold mt-4">3. Why red chillies?</h3>
                                <p>In Tantric Havan for enemy destruction (Shatru Nasha), dry red chillies are offered to burn away the evil eye.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can women recite it?</h3>
                                <p>Yes, but with strict rules (hair tied, full focus, not during mensuration). Pregnant women should avoid the fierce Havan.</p>

                                <h3 className="text-xl font-bold mt-4">5. Does it work for health?</h3>
                                <p>Yes, specifically for mysterious illnesses where doctors can't find a cause.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can I read it from a book?</h3>
                                <p>Yes, but ensure the text is correct. Many online versions have errors. Our pandits use the authentic Geeta Press version.</p>

                                <h3 className="text-xl font-bold mt-4">7. Do I need to light a lamp?</h3>
                                <p>Yes, a Ghee lamp with a red wick (using Mauli thread) is recommended.</p>

                                <h3 className="text-xl font-bold mt-4">8. Who brings the Samagri?</h3>
                                <p>Our team brings everything needed for the Puja (Sindoor, oil, flowers, wood).</p>

                                <h3 className="text-xl font-bold mt-4">9. Can we do it for property disputes?</h3>
                                <p>Yes, it is very effective for removing illegal possession or court hurdles.</p>

                                <h3 className="text-xl font-bold mt-4">10. Is vegetarianism a must?</h3>
                                <p>Strictly yes. No non-veg, no alcohol, no onion/garlic on the day of puja.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Bajrang Baan</h4>
                                        <p className="text-gold-100 text-sm mb-4">Jai Hanumant Sant Hitkaari</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Bajrang%20Baan%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Bajrang Baan Paath" />
            <Footer />
        </>
    )
}
