import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GuruCharitraPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Guru Charitra Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Guru Charitra Paath in Pune. 7-Day Parayan of the sacred life of Lord Dattatreya. Remove obstacles, pitru dosh, and gain spiritual progress.',
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
                <title>Guru Charitra Paath in Pune – 7 Day Parayan</title>
                <meta name="description" content="Book Guru Charitra Paath in Pune. Perform the sacred Saptaha Parayan of Lord Dattatreya's life. Effective for career, health, and removal of Pitru Dosh. ₹5,100 onwards." />
                <meta name="keywords" content="Guru Charitra Paath Pune, Datta Parayan, Dattatreya Puja, Saptaha Parayan, Pitru Dosh Remedy, Ganagapur Vidhi" />
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
                            <span className="text-maroon-900 font-semibold">Guru Charitra Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Digambara Digambara Shripad Vallabh Digambara</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Guru Charitra Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred 7-Day Parayan</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the miraculous life of Lord Dattatreya and his incarnations Shripad Vallabh and Narasimha Saraswati. A powerful remedy for impossible problems.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Guru Charitra</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Guru%20Charitra%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Sri Guru Charitra</strong> is one of the most revered scriptures in Maharashtra and Karnataka. Written by Saraswati Gangadhar in the 15th century, is tells the life stories of <strong>Lord Dattatreya</strong>, specifically his incarnations <strong>Shripad Shri Vallabh</strong> and <strong>Shri Narasimha Saraswati</strong>.</p>
                                <p>It is not just a book but a "Mantratmaka" (filled with mantra power) text. Reading it with strict discipline (Parayan) is believed to cure incurable diseases, solve financial crises, and bless childless couples with progeny.</p>

                                <h2 className="text-3xl font-bold mt-8">The Saptaha Parayan (7-Day Reading)</h2>
                                <p>The most effective way to read Guru Charitra is the Saptaha Parayan, where the 52 chapters are completed in 7 days following a specific sequence.</p>
                                <ul>
                                    <li><strong>Day 1:</strong> Chapters 1 to 9</li>
                                    <li><strong>Day 2:</strong> Chapters 10 to 21</li>
                                    <li><strong>Day 3:</strong> Chapters 22 to 29</li>
                                    <li><strong>Day 4:</strong> Chapters 30 to 35</li>
                                    <li><strong>Day 5:</strong> Chapters 36 to 38</li>
                                    <li><strong>Day 6:</strong> Chapters 39 to 43</li>
                                    <li><strong>Day 7:</strong> Chapters 44 to 52</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Guru Charitra Paath</h2>
                                <ul>
                                    <li><strong>Pitru Dosh Nivaran:</strong> It is considered the most powerful remedy for ancestral curses (Pitru Dosh).</li>
                                    <li><strong>Progeny (Santan Prapti):</strong> Many childless couples perform this to be blessed with children.</li>
                                    <li><strong>Curing Illness:</strong> The text is filled with stories of miraculous healings of leprosy, stomach aches, and other diseases.</li>
                                    <li><strong>Job & Success:</strong> Removes stagnation in career and business.</li>
                                    <li><strong>Protection:</strong> Shields the family from black magic and evil eyes.</li>
                                    <li><strong>Devotion:</strong> Instills deep faith and peace of mind.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Strict Rules (Niyam)</h2>
                                <p>Guru Charitra Parayan requires strict purity:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Waking up before sunrise and bathing.</li>
                                    <li>Eating only Satvik food (often one meal a day).</li>
                                    <li>sleeping on the floor or a clean mat (Brahmacharya).</li>
                                    <li>Reading facing East or North.</li>
                                    <li>Maintaining absolute Truth and Sweetness in speech.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Datta Jayanti:</strong> The birthday of Lord Dattatreya (December).</li>
                                    <li><strong>Guru Purnima:</strong> Highly auspicious.</li>
                                    <li><strong>Thursdays:</strong> Any Thursday is good to start.</li>
                                    <li><strong>Shravan Month:</strong> For spiritual merit.</li>
                                    <li><strong>Before Marriage/House Warming:</strong> To clear obstacles.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Guru Charitra Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Parayan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">3-Day Parayan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Accelerated reading by Ved Murti Pandit.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Days</li>
                                            <li>✓ Complete 52 Chapters</li>
                                            <li>✓ Daily Aarti</li>
                                            <li>✓ Samapti Puja</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">7-Day Saptaha</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Traditional 7-Day Parayan with full Vidhi.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 7 Days</li>
                                            <li>✓ Senior Pandit</li>
                                            <li>✓ Daily Naivedya & Aarti</li>
                                            <li>✓ Final Day Havan & Brahmin Bhojan</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Daily Routine</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Sankalp:</strong> Taken on Day 1 for the specific desire.</li>
                                    <li><strong>Grantha Pujan:</strong> The holy book is worshipped as the deity himself.</li>
                                    <li><strong>Recitation:</strong> The Pandit reads clearly and loudly. You can listen or read along.</li>
                                    <li><strong>Avatarnika:</strong> The summary chapter is read daily.</li>
                                    <li><strong>Aarti:</strong> Performed after daily reading.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Samapti (Conclusion)</h3>
                                <p>On the 8th day (after 7 days of reading), a 'Samapti' puja is done which usually involves:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Havan:</strong> Offering of Datta Gayatris.</li>
                                    <li><strong>Dampati Bhojan:</strong> Feeding a married couple.</li>
                                    <li><strong>Dakshina:</strong> Offering gifts to priests.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can women read Guru Charitra?</h3>
                                <p>It is generally advised that women should not read it themselves but can <em>listen</em> to it being read by a Brahmin. This is due to the strong vibratory nature of the text. However, many modern schools allow women to read it with purity.</p>

                                <h3 className="text-xl font-bold mt-4">2. Why are the rules so strict?</h3>
                                <p>Lord Dattatreya is a 'Smartragami' (responds immediately to memory) but also tests the devotee's discipline. The strictness ensures the vessel (devotee) is pure enough to receive the high-voltage grace.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can we keep the book at home?</h3>
                                <p>Yes, but it must be wrapped in a clean cloth (usually yellow/orange) and kept in the puja room, not on a random shelf.</p>

                                <h3 className="text-xl font-bold mt-4">4. What if I miss a day?</h3>
                                <p>In a Saptaha, continuity is key. If you miss a day, the Parayan is broken. It is best to restart. This is why hiring a Pandit ensures completion without errors.</p>

                                <h3 className="text-xl font-bold mt-4">5. Can I eat non-veg during the week?</h3>
                                <p>Absolutely not. The entire family should follow a vegetarian diet, avoid alcohol, and maintain celibacy during the 7 days.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is it true it helps with ghosts/spirits?</h3>
                                <p>Yes, Chapter 19 and 21 specifically deal with the driving away of Brahma-Rakshasa (spirits). It is a supreme exorcism text.</p>

                                <h3 className="text-xl font-bold mt-4">7. Can I do it in English?</h3>
                                <p>Translations are available for understanding, but the Parayan should ideally be done in Marathi/Sanskrit (the original language or closest to it) for the mantra effect.</p>

                                <h3 className="text-xl font-bold mt-4">8. How many parayans should I do?</h3>
                                <p>Usually, 1 Saptaha is enough for one wish. For very difficult problems, people vow to do 7 Saptahas.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can it be done online?</h3>
                                <p>Yes, our Pandits can perform the reading in our Ashram in your name (Sankalp). You can listen to the live stream.</p>

                                <h3 className="text-xl font-bold mt-4">10. Do I have to visit Ganagapur?</h3>
                                <p>Visiting Ganagapur (Karnataka) is great, but doing the Parayan at home with devotion brings Ganagapur to your home.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Guru Charitra</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Dram Dattatreya Namah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹5,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Guru%20Charitra%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Guru Charitra Paath" />
            <Footer />
        </>
    )
}
