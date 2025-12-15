import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AdityaHridayaStotraPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Aditya Hridaya Stotra Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Aditya Hridaya Stotra Paath in Pune. The powerful Sun Hymn taught to Rama by Sage Agastya. For victory, health, and confidence. Expert pandits.',
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
                <title>Aditya Hridaya Stotra Paath in Pune – Victory & Health</title>
                <meta name="description" content="Book Aditya Hridaya Stotra Paath in Pune. Recite the sacred Sun Hymn for total victory over enemies, health, and confidence. The secret of Rama's power. ₹1,100 onwards." />
                <meta name="keywords" content="Aditya Hridaya Stotra Pune, Sun Puja, Surya Namaskar Mantra, Victory Mantra, Health and Eyesight Puja" />
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
                            <span className="text-maroon-900 font-semibold">Aditya Hridaya Stotra</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Suryaya Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Aditya Hridaya Stotra <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">The Secret of Absolute Victory</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The timeless hymn taught by Sage Agastya to Lord Rama on the battlefield of Lanka. Invoke the Sun God to dispel darkness, destroy enemies, and regain lost strength.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Sun Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Aditya%20Hridaya%20Stotra" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Aditya Hridaya Stotra</strong> (The Heart of the Sun) is found in the Yuddha Kanda of the Valmiki Ramayana. It is one of the most powerful hymns ever composed for courage and victory.</p>
                                <p>When Lord Rama was fatigued after fighting Ravana and stood deep in thought, Sage Agastya appeared and taught him this secret mantra. Reciting it just three times, Rama regained his strength and slew Ravana. It proves that the Sun (Aditya) is the soul of the universe and the source of all energy.</p>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Recitation</h2>
                                <ul>
                                    <li><strong>Victory (Jaya):</strong> Ensures success in litigation, exams, and battles of life.</li>
                                    <li><strong>Health (Arogya):</strong> The Sun is the deity of health ("Arogyam Bhaskaradicchet"). It cures skin diseases, eye problems, and heart issues.</li>
                                    <li><strong>Confidence:</strong> Removes self-doubt, depression, and fear.</li>
                                    <li><strong>Government Favor:</strong> The Sun represents authority. This paath helps in government jobs and official matters.</li>
                                    <li><strong>Longevity:</strong> Grants a long, active life.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Verses</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Aditya Hridayam Punyam Sarva Shatru Vinashanam"
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "This holy Hymn dedicated to the Sun God destroys all enemies and brings supreme victory."
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Sundays (Ravivar):</strong> The day of the Sun.</li>
                                    <li><strong>Ratha Saptami:</strong> The birthday of the Sun God.</li>
                                    <li><strong>Makar Sankranti:</strong> When the Sun enters Capricorn (Uttarayan).</li>
                                    <li><strong>Before Interviews/Court:</strong> For immediate confidence.</li>
                                    <li><strong>Sunrise:</strong> Best performed at dawn facing the East.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Aditya Hridaya Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">12 Recitations</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Chanting 12 times (for 12 Adityas).</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 Hours</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Arghya Offering (Water)</li>
                                            <li>✓ Surya Namaskar with Mantra</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Surya Yagya</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">108 Paath + Havan with Arka wood.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ Havan with Arka Samidha</li>
                                            <li>✓ Wheat & Jaggery Donation</li>
                                            <li>✓ Netra (Eye) Protection Puja</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Offering Arghya</h3>
                                <p>The most important part of Sun worship is <strong>Arghya</strong>.</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Copper Vessel:</strong> Water is taken in a copper pot, mixed with Kumkum, red flowers, and rice.</li>
                                    <li><strong>Offering:</strong> It is poured slowly towards the Sun while chanting "Om Suryaya Namah".</li>
                                    <li><strong>View:</strong> The devotee looks at the Sun <em>through</em> the falling stream of water. This splits the sunlight associated with healing spectrums.</li>
                                    <li><strong>Paath:</strong> The pandit then recites the Stotra.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can I look directly at the Sun?</h3>
                                <p>Only during sunrise (first hour). Later in the day, looking directly can damage eyes. Worship the symbol or the concept during later hours.</p>

                                <h3 className="text-xl font-bold mt-4">2. Is it useful for eyesight?</h3>
                                <p>Yes, the "Chakshushopanishad" is often recited with this for curing eye ailments. The Sun rules the eyes.</p>

                                <h3 className="text-xl font-bold mt-4">3. Why Arka wood?</h3>
                                <p>Arka (Calotropis) is the plant associated with the Sun. Its sticks are used in Havan to appease Surya.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I do it if I have Pitru Dosh?</h3>
                                <p>Sun represents the Father/Ancestors. Strengthening the Sun is a great remedy for Pitru Dosh.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the best time?</h3>
                                <p>Brahma Muhurta or Sunrise. But if done for a specific goal, "Abhijit Muhurat" (noon) is also good for victory.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can women do this?</h3>
                                <p>Yes, anyone can worship the Sun. It is universal.</p>

                                <h3 className="text-xl font-bold mt-4">7. Does it help in government jobs?</h3>
                                <p>Yes, astrologically, a strong Sun is needed for state authority and administrative posts.</p>

                                <h3 className="text-xl font-bold mt-4">8. How many times to recite?</h3>
                                <p>3 times is standard (as Rama did). 12 times for the 12 names of Sun is excellent.</p>

                                <h3 className="text-xl font-bold mt-4">9. Is salt allowed?</h3>
                                <p>People often fast on Sundays without salt ("Alona Vrat") to please the Sun. It reduces water retention and purifies the body.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can we do it inside the house?</h3>
                                <p>Yes, facing East. But doing it in an open balcony or terrace where sunlight falls is best.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Sun Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Jaya Jaya Bhaskara</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Aditya%20Hridaya%20Stotra" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Aditya Hridaya Stotra Paath" />
            <Footer />
        </>
    )
}
