import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SaiSatcharitraPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sai Satcharitra Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Sai Satcharitra Paath in Pune. 7-Day Parayan of the sacred life of Shirdi Sai Baba. Miracles, healing, and peace. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '4100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Sai Satcharitra Paath in Pune – 7 Day Parayan</title>
                <meta name="description" content="Book Sai Satcharitra Paath in Pune. Perform the sacred 7-Day Parayan of Shirdi Sai Baba's life. Experience miracles thinking, healing, and wish fulfillment. ₹4,100 onwards." />
                <meta name="keywords" content="Sai Satcharitra Paath Pune, Sai Baba Parayan, Shirdi Sai Puja, Saptaha Parayan, Wish Fulfillment, Healing Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Sai Satcharitra Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Sai Ram</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Sai Satcharitra Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Miracles of Shirdi Sai Baba</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                "Shraddha & Saburi" - Faith and Patience. Reading the glorious life of Sai Baba is the surest way to invite His miraculous grace into your life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Sai Parayan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Sai%20Satcharitra%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Shri Sai Satcharitra</strong> is the biography of true saint Sai Baba of Shirdi, written by Hemadpant. It is not just a biography; it is a "Pothi" (sacred text) that has the power to answer questions, heal diseases, and fulfill wishes.</p>
                                <p>Baba himself said, <em>"If you read my stories with love, I will come out of the pages to help you."</em> Millions of devotees have experienced this truth.</p>

                                <h2 className="text-3xl font-bold mt-8">The Saptaha Parayan (7-Day Reading)</h2>
                                <p>The Parayan is the practice of reading the complete book (53 Chapters) in 7 days. This discipline builds immense spiritual energy.</p>
                                <ul>
                                    <li><strong>Day 1:</strong> Ch 1-9 (Childhood, Arrival in Shirdi)</li>
                                    <li><strong>Day 2:</strong> Ch 10-21 (Teachings and Leelas)</li>
                                    <li><strong>Day 3:</strong> Ch 22-29 (Miracles of Healing)</li>
                                    <li><strong>Day 4:</strong> Ch 30-35 (Baba's Omniscience)</li>
                                    <li><strong>Day 5:</strong> Ch 36-40 (Baba's Greatness)</li>
                                    <li><strong>Day 6:</strong> Ch 41-47 (Testing Devotees)</li>
                                    <li><strong>Day 7:</strong> Ch 48-53 (Mahasamadhi and Epilogue)</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Sai Satcharitra Paath</h2>
                                <ul>
                                    <li><strong>Wish Fulfillment:</strong> Whether it is a job, marriage, or child, a sincere Parayan yields results.</li>
                                    <li><strong>Healing:</strong> Many read specific chapters for health issues. Udi (sacred ash) is applied during the reading.</li>
                                    <li><strong>Peace of Mind:</strong> It removes anxiety and fear, instilling "Saburi" (patience).</li>
                                    <li><strong>Problem Solving:</strong> When confused, opening the book randomly often gives the answer to your specific problem.</li>
                                    <li><strong>Unity:</strong> It promotes harmony in the family, as Baba stood for love beyond caste and religion.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Thursdays:</strong> Baba's special day. Most Parayans start or end on a Thursday.</li>
                                    <li><strong>Guru Purnima:</strong> The most important festival for Sai devotees.</li>
                                    <li><strong>Ram Navami:</strong> A festival dear to Baba.</li>
                                    <li><strong>Sai Punyatithi (Dussehra):</strong> The day of His Mahasamadhi.</li>
                                    <li><strong>During Distress:</strong> Whenever life feels overwhelmed.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Sai Satcharitra Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Parayan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">1-Day Akhand Parayan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Continuous reading by a team of readers in 1 day.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 12-14 Hours non-stop</li>
                                            <li>✓ 2-3 Readers</li>
                                            <li>✓ Intense Energy</li>
                                            <li>✓ Baba's Aarti & Bhog</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">7-Day Saptaha</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Traditional daily reading concluding on Thursday.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 7 Days</li>
                                            <li>✓ Dedicated Reader</li>
                                            <li>✓ Daily Neivedya</li>
                                            <li>✓ Final Day Udyapan Puja</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Simple yet Deep</h3>
                                <p>Baba liked simplicity ("Bhav"), so the vidhi is less ritualistic but deeply devotional:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Baba's Photo/Idol:</strong> Placed on a nice cloth (Asan).</li>
                                    <li><strong>Light:</strong> A lamp (Nanda Deep) should be kept burning while reading.</li>
                                    <li><strong>Incense:</strong> Agarbatti or Loban.</li>
                                    <li><strong>Reading:</strong> Reading with understanding and emotion.</li>
                                    <li><strong>Naivedya:</strong> Offering sweets or fruits (Baba loved Halwa and Burfi).</li>
                                    <li><strong>Shraddha & Saburi:</strong> Offering two coins symbolically.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Paath Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Feed the poor (Annadan) - Baba loved this the most.</li>
                                    <li>Feed stray dogs or animals.</li>
                                    <li>Distribute Udi (sacred ash) to family members.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can I read it in English/Hindi?</h3>
                                <p>Yes! Unlike Vedic mantras, Sai Satcharitra works on "Bhav" (devotion). Read it in the language you understand best to connect with the stories.</p>

                                <h3 className="text-xl font-bold mt-4">2. Do I need to fast?</h3>
                                <p>Baba never encouraged fasting. He said, "God is not found on an empty stomach." Eat simple, moderate food, but do not starve.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can I do it at my home?</h3>
                                <p>Yes, your home becomes a Dwarkamai when you read it. Just ensure a quiet, clean corner.</p>

                                <h3 className="text-xl font-bold mt-4">4. What if I can't finish in 7 days?</h3>
                                <p>You can read at your own pace (daily 1 chapter). But the "Saptaha" (7-day) has a special resolution (Sankalp) energy.</p>

                                <h3 className="text-xl font-bold mt-4">5. Can I read for someone else?</h3>
                                <p>Yes, you can take a Sankalp for your child's health or husband's job and read it. Baba accepts the proxy devotion.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is Udi mandatory?</h3>
                                <p>If you have Shirdi Udi, great. If not, the ash from the incense stick (Agarbatti) used during your prayer can be treated as Udi.</p>

                                <h3 className="text-xl font-bold mt-4">7. Can I stop in between?</h3>
                                <p>Try not to. Dedicate that one week to Baba. If unavoidable emergencies happen, ask for forgiveness and continue.</p>

                                <h3 className="text-xl font-bold mt-4">8. Who wrote the book?</h3>
                                <p>Govind Raghunath Dabholkar (Hemadpant) wrote it in Marathi verse during Baba's lifetime with His permission.</p>

                                <h3 className="text-xl font-bold mt-4">9. Is it only for Hindus?</h3>
                                <p>No. Sai Baba has no religion. People of all faiths read Satcharitra.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can I listen to audio?</h3>
                                <p>Yes, listening is "Shravana Bhakti". It is equally effective if done with attention.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Sai Parayan</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Sai Ram</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹4,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sai%20Satcharitra%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Sai Satcharitra Paath" />
            <Footer />
        </>
    )
}
