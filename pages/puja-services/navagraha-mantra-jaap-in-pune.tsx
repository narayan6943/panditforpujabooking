import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NavagrahaMantraJaapPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Navagraha Mantra Jaap in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Navagraha Mantra Jaap in Pune. Complete pacification of all 9 planets. Balance your horoscope and life. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '5100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Navagraha Mantra Jaap in Pune – 9 Planets Remedial Puja</title>
                <meta name="description" content="Book Navagraha Mantra Jaap in Pune. Perform recitation for all 9 planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu). Balance your life. ₹5,100 onwards." />
                <meta name="keywords" content="Navagraha Mantra Jaap Pune, 9 Planets Puja, Vedic Astrology Remedy, Graha Shanti Jaap, Horoscope Balance" />
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
                            <span className="text-maroon-900 font-semibold">Navagraha Mantra Jaap</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Balance Cosmic Forces</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Navagraha Mantra Jaap <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Harmony of the Nine Planets</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience total life balance by appeasing all nine planetary forces. Pacify the negative, strengthen the positive, and remove doshas from your horoscope.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Navagraha Jaap</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Navagraha%20Mantra%20Jaap" target="_blank" rel="noopener noreferrer">
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
                                <p>Our life is deeply influenced by the nine cosmic influencers called <strong>Navagraha</strong> (Nine Planets). Each planet governs specific aspects of our existence—health, wealth, relationships, career, and mind. When these planets are weak or ill-placed in the birth chart (Kundali), life becomes a struggle.</p>
                                <p>The <strong>Navagraha Mantra Jaap</strong> is a comprehensive solution. Instead of focusing on just one planet, this ritual addresses the entire planetary cabinet, creating a harmonious symphony of energies.</p>

                                <h2 className="text-3xl font-bold mt-8">The Nine Planets & Their Benefits</h2>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Surya (Sun):</strong> Health, vitality, father, authority, government favor.</li>
                                    <li><strong>Chandra (Moon):</strong> Mind, emotions, mother, peace, fluids.</li>
                                    <li><strong>Mangal (Mars):</strong> Energy, courage, siblings, land, blood.</li>
                                    <li><strong>Budh (Mercury):</strong> Intellect, speech, business, communication.</li>
                                    <li><strong>Brihaspati (Jupiter):</strong> Wisdom, wealth, children, spirituality, gurus.</li>
                                    <li><strong>Shukra (Venus):</strong> Love, luxury, marriage, arts, vehicles.</li>
                                    <li><strong>Shani (Saturn):</strong> Discipline, longevity, justice, servants.</li>
                                    <li><strong>Rahu (North Node):</strong> Ambition, foreign travel, innovation, sudden events.</li>
                                    <li><strong>Ketu (South Node):</strong> Detachment, liberation, spirituality, mysterious illness.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Why Perform Navagraha Jaap?</h2>
                                <ul>
                                    <li><strong>Holistic Remedy:</strong> Often we have multiple doshas (e.g., Kal Sarp + Mangal Dosh). Navagraha Pasth covers everything.</li>
                                    <li><strong>Period of Transition:</strong> Essential during major Dasha changes (e.g., passing from Jupiter Maha Dasha to Saturn Maha Dasha).</li>
                                    <li><strong>Unknown Problems:</strong> When the cause of suffering is not clear ("Nazar" or hidden enemies), balancing all planets works best.</li>
                                    <li><strong>General Well-being:</strong> Even if things are good, this Jaap ensures they <em>stay</em> good by preventing future imbalances.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Mantra Details</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">Navagraha Stotra</h4>
                                    <p className="text-maroon-900 font-serif text-lg mb-2">
                                        "Namah Suryaya Chandraya Mangalaya Budhaya Cha<br />Guru Shukra Shanibhyash Cha Rahave Ketave Namah"
                                    </p>
                                    <p className="text-gray-700 italic">
                                        "I bow to the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu."
                                    </p>
                                </div>
                                <p>In the detailed Jaap, the specific Vedic or Beeja Mantra for <em>each</em> of the 9 planets is chanted a specific number of times (e.g., Sun 6000, Moon 10000, etc.) to complete the circuit.</p>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Birthday:</strong> To set the tone for the solar return year.</li>
                                    <li><strong>New Year:</strong> For annual prosperity.</li>
                                    <li><strong>Before Marriage:</strong> To remove horoscope mismatches.</li>
                                    <li><strong>House Warming:</strong> To clear Vastu energies.</li>
                                    <li><strong>Any Auspicious Muhurat:</strong> It fits any good day.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Navagraha Mantra Jaap Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Jaap Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">General Navagraha Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Combined chanting for all 9 planets (~10k chants total).</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ 1 Day</li>
                                            <li>✓ Partial Jaap for each planet</li>
                                            <li>✓ Navagraha Havan included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Navagraha Anushthan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹25,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete prescribed count for ALL 9 planets individually.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 5-7 Pandits for 3-5 Days</li>
                                            <li>✓ Total ~70,000+ Chants</li>
                                            <li>✓ Extensive Rituals</li>
                                            <li>✓ Havan for each planet</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Navagraha Mandel (Altar)</h3>
                                <p>The most beautiful part of this ritual is the setup:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Rice Mandala:</strong> Colored rice is used to stimulate the planets. Red for Sun/Mars, White for Moon/Venus, Yellow for Jupiter, Green for Mercury, Black for Saturn/Rahu/Ketu.</li>
                                    <li><strong>Grains (Dhanya):</strong> 9 different grains (Wheat, Rice, Toor, Moong, Chana, Val, Urad, etc.) are placed.</li>
                                    <li><strong>Fabrics:</strong> 9 pieces of colored cloth are used.</li>
                                    <li><strong>Idols/Betel Nuts:</strong> Symbols of the planets are invoked (Prana Pratishtha).</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">Ritual Steps</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Ganesh & Kalash Puja:</strong> Initial purification.</li>
                                    <li><strong>Punyahavachan:</strong> Sprinkling holy water.</li>
                                    <li><strong>Navagraha Invocation:</strong> Calling each planet into the Mandala.</li>
                                    <li><strong>Jaap:</strong> Chanting the mantras for each planet sequentially, starting from Surya (Sun) in the center.</li>
                                    <li><strong>Havan:</strong> Offering specific wood (Samidha) for each planet (e.g., Arka for Sun, Palash for Moon, Shami for Saturn).</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is this the same as Navagraha Puja?</h3>
                                <p>Navagraha Puja is a standard 1-hour ritual. Navagraha <strong>Mantra Jaap</strong> is a more intense, extended version where the mantras are repeated thousands of times for deeper impact.</p>

                                <h3 className="text-xl font-bold mt-4">2. Why are different grains used?</h3>
                                <p>Each grain resonates with the frequency of a planet. Offering these grains (Dan) helps detach the negative karma associated with that planet from your body.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can I do it myself?</h3>
                                <p>You can chant the simple "Navagraha Stotra" daily. But the full Tantrokta or Vedic Mantra Jaap with proper counts and Havan is complex and best left to pundits.</p>

                                <h3 className="text-xl font-bold mt-4">4. Will it change my destiny?</h3>
                                <p>Astrology says destiny is karma. These rituals provide the "Grace" (Kripa) to bear the karma or reduce its intensity greatly. It acts like an umbrella in the rain.</p>

                                <h3 className="text-xl font-bold mt-4">5. What if I don't know my birth time?</h3>
                                <p>Navagraha Jaap is the safest bet! Since it covers all planets, you don't need a precise diagnosis. It strengthens whatever is good and heals whatever is bad.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can it be done online?</h3>
                                <p>Yes, since the Mantras work on sound vibration and intention (Sankalp), listening to the live stream and praying while pandits chant is extremely effective.</p>

                                <h3 className="text-xl font-bold mt-4">7. How many pandits are needed?</h3>
                                <p>For the basic Shanti, 3 pandits are enough. For the complete Anushthan, we use 5-9 pandits depending on the timeline.</p>

                                <h3 className="text-xl font-bold mt-4">8. Are there any side effects?</h3>
                                <p>None. Navagraha Jaap is purely sattvic and balancing. It brings harmony, never harm.</p>

                                <h3 className="text-xl font-bold mt-4">9. Is Havan wood specific?</h3>
                                <p>Yes! This is critical. We use 9 types of sticks (Samidha) - Arka, Palash, Khadir, Apamarga, Pippal, Audumbar, Shami, Durva, and Kusha. Each has a medicinal and spiritual effect.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can I mix this with other Poojas?</h3>
                                <p>Yes, Navagraha Jaap is often the "prelude" to other major pujas like Vastu Shanti or Marriage rituals, as it clears the path for other blessings.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Navagraha Jaap</h4>
                                        <p className="text-gold-100 text-sm mb-4">Adityaya Somaya Mangalaya...</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹5,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Navagraha%20Mantra%20Jaap" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Navagraha Mantra Jaap" />
            <Footer />
        </>
    )
}
