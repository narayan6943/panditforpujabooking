import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MahaMrityunjayaJaapPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Maha Mrityunjaya Jaap in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Maha Mrityunjaya Jaap in Pune. 1.25 Lakh recitations for health, longevity, and conquering fear of death. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '3500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Maha Mrityunjaya Jaap in Pune – 1.25 Lakh Chants Anushthan</title>
                <meta name="description" content="Book Maha Mrityunjaya Jaap in Pune. Perform 1.25 Lakh chants (Sava Lakh) for life protection, curing critical illness, and conquering fear. ₹3,500 onwards." />
                <meta name="keywords" content="Maha Mrityunjaya Jaap Pune, Mrityunjaya Anushthan, Shiva Jaap, Health Puja, Critical Illness Remedy, Longevity Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Maha Mrityunjaya Jaap</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Great Death-Conquering Mantra</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Maha Mrityunjaya Jaap <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">For Health, Longevity & Protection</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                "Om Tryambakam Yajamahe..." The most powerful Shiva mantra to overcome severe illness, accidents, and the fear of untimely death.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Mrityunjaya Jaap</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Maha%20Mrityunjaya%20Jaap" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Maha Mrityunjaya Mantra</strong>, also known as the Rudra Mantra or Tryambakam Mantra, is found in the Rigveda. Dedicated to Lord Shiva (The Three-Eyed One), it is revered as the ultimate "Moksha Mantra" and "Life Saver." It is chanted to ward off untimely death, cure incurable diseases, and grant immortality (spiritual liberation).</p>

                                <h2 className="text-3xl font-bold mt-8">The Mantra & Meaning</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Om Tryambakam Yajamahe<br />
                                        Sugandhim Pushti-Vardhanam<br />
                                        Urvarukamiva Bandhanan<br />
                                        Mrityor Mukshiya Mamritat"
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "We worship the Three-Eyed One (Shiva), who is fragrant and nourishes all beings. May He liberate us from death (like a ripe cucumber falls effortlessly from its vine), for the sake of immortality."
                                    </p>
                                </div>
                                <p>The imagery of the cucumber (Urvaruka) is powerful—it symbolizes detachment and liberation without pain. Just as a ripe fruit separates effortlessly from the plant, the mantra prays for a life free from the painful clutches of disease and death.</p>

                                <h2 className="text-3xl font-bold mt-8">Why Perform 1.25 Lakh Jaap?</h2>
                                <p>While daily chanting is good, a focused <strong>Anushthan of 125,000 (Sava Lakh) chants</strong> is prescribed for critical situations. This generates a massive, concentrated field of healing energy. It is typically done when:</p>
                                <ul>
                                    <li>Someone is battling a serious illness (Cancer, heart issues, etc.).</li>
                                    <li>There is a danger of accidents or "Akaal Mrityu" (untimely death) in the horoscope.</li>
                                    <li>One is going through a dangerous surgery.</li>
                                    <li>To overcome severe mental trauma or fear.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Maha Mrityunjaya Jaap</h2>
                                <ul>
                                    <li><strong>Life Protection (Raksha Kavach):</strong> Creates a divine shield against accidents, calamities, and unknown dangers.</li>
                                    <li><strong>Healing & Health:</strong> Rejuvenates the body, boosts immunity, and aids recovery from chronic ailments.</li>
                                    <li><strong>Longevity (Ayushya):</strong> Increases life span and vitality.</li>
                                    <li><strong>Overcoming Fear:</strong> Destroys the deep-rooted fear of death and anxiety.</li>
                                    <li><strong>Family Welfare:</strong> Ensures the well-being and safety of all family members.</li>
                                    <li><strong>Spiritual Liberation:</strong> Unlike other health mantras, this also guides the soul towards Moksha.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Mondays:</strong> Dedicated to Lord Shiva.</li>
                                    <li><strong>Maha Shivaratri:</strong> The most powerful night for Shiva worship.</li>
                                    <li><strong>Shravan Month:</strong> The holy month of Shiva.</li>
                                    <li><strong>During Illness:</strong> Immediately upon diagnosis of serious health issues.</li>
                                    <li><strong>Birthdays (Janma Nakshatra):</strong> To bless the year ahead with health.</li>
                                    <li><strong>Markesh Dasha:</strong> Astrology periods indicating danger to life (Maraka planets).</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance</h2>
                                <ul>
                                    <li><strong>Maraka Dasha Remedy:</strong> If a person is running the dasha of a "Maraka" (Killer) planet (like 2nd or 7th house lord), this Jaap is the primary remedy.</li>
                                    <li><strong>Saturn & Mars Afflictions:</strong> Mitigates the danger of accidents caused by Saturn-Mars or Rahu-Mars conjunctions.</li>
                                    <li><strong>Moon Afflictions:</strong> Since Shiva holds the Moon, this mantra cures mental instability and depression caused by a weak Moon.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Maha Mrityunjaya Jaap Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Jaap Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Samput Jaap (11k/21k)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Shorter duration for general well-being or minor issues.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-5 Pandits</li>
                                            <li>✓ 1 Day</li>
                                            <li>✓ Rudrabhishek included</li>
                                            <li>✓ Havan included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Anushthan (1.25 Lakh)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹51,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete life-saving ritual. 1.25 Lakh chants.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 5-7 Pandits for 7-9 Days</li>
                                            <li>✓ Daily Rudrabhishek</li>
                                            <li>✓ Daily Havan</li>
                                            <li>✓ Full Vedic Vidhi</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Process (Vidhi)</h2>
                                <h3 className="text-2xl font-bold mt-6">Daily Routine of Pandits</h3>
                                <p>The atmosphere must be pure and charged with devotion:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Shiva Linga Sthapana:</strong> Establishing a Narmadeshwar or Crystal Linga.</li>
                                    <li><strong>Rudrabhishek:</strong> The Jaap often begins with a daily Abhishek using milk, water, honey, etc.</li>
                                    <li><strong>Sankalp:</strong> Taking the vow for the sick person's recovery.</li>
                                    <li><strong>Mala Jap:</strong> Focusing on the Rudraksha Mala, the pandits chant rhythmically.</li>
                                    <li><strong>Havan:</strong> Using healing herbs (Amrita/Giloy) and wood in the fire to transmit the energy.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Samput Notes</h3>
                                <p>Sometimes, the mantra is "Samputit" (encased) with other Beeja mantras (like Om Jum Sah) to make it even more potent for specific diseases. Our experts decide this based on the situation.</p>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is this different from a normal Puja?</h3>
                                <p>Yes, vastly different. A Puja is 1-2 hours. This is a 7-9 day marathon of chanting where vibration accumulation is the key. The sheer volume of 125,000 chants creates a massive energy field.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can it be done for someone in the ICU?</h3>
                                <p>Yes, this is often done for hospitalized patients. The family takes the Sankalp on their behalf. The vibrations work on the subtle body of the patient regardless of distance.</p>

                                <h3 className="text-xl font-bold mt-4">3. Why is it so expensive?</h3>
                                <p>The cost covers the Dakshina and food for 5-7 highly trained Brahmins for 7-9 days, along with significant amounts of Ghee, Havan Samagri, and Puja materials. It is a large-scale event.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I play a recording in the hospital room?</h3>
                                <p>Yes, playing a recording is helpful as a supplementary measure, but the *Anushthan* (generation of energy through conscious chanting) must be done by humans to be effective.</p>

                                <h3 className="text-xl font-bold mt-4">5. What if the patient passes away during the Jaap?</h3>
                                <p>While we pray for recovery, ultimately life is in God's hands. If the soul departs, the merit of the Jaap ensures a peaceful passing and liberation (Moksha) for the soul, which is the higher goal of the mantra.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is Havan necessary?</h3>
                                <p>Yes, Havan is the 'mouth' of the gods. The energy generated by chanting is 'fed' to the universe through the fire. For health issues, using special wood (Samidha) and herbs in Havan is crucial.</p>

                                <h3 className="text-xl font-bold mt-4">7. How many pandits are needed?</h3>
                                <p>Usually 5, 7, or 11 pandits sit together daily to complete 1.25 lakh chants within a manageable time frame (e.g., 7 days).</p>

                                <h3 className="text-xl font-bold mt-4">8. Can it be done for general wellness?</h3>
                                <p>Yes, many people do it once a year (often around their birthday) as a "Raksha Kavach" (Protection Shield) for the coming year.</p>

                                <h3 className="text-xl font-bold mt-4">9. Are there food restrictions for the family?</h3>
                                <p>The family members (the hosts) should ideally follow a vegetarian diet and avoid alcohol during the Jaap period to maintain purity.</p>

                                <h3 className="text-xl font-bold mt-4">10. Do you provide a video?</h3>
                                <p>Yes, we can provide video clips of the Sankalp, the daily Abhishek, and the Havan so you can feel connected to the ritual.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Anushthan</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Tryambakam Yajamahe</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹7,000+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Maha%20Mrityunjaya%20Jaap" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Maha Mrityunjaya Jaap" />
            <Footer />
        </>
    )
}
