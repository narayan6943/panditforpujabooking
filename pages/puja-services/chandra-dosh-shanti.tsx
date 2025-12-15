import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ChandraDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Chandra Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pandit for Chandra Dosh Shanti Puja in Pune. Remedies for weak Moon (Grahan Dosh/Kemdrum Dosh). Restore mental peace and emotional stability.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Chandra Dosh Shanti' },
        { id: 'about', title: 'Moon Afflictions' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Vedic Rituals' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Chandra Dosh Shanti Puja in Pune – Mental Peace & Stability</title>
                <meta name="description" content="Afflicted Moon affecting your peace? Book Chandra Dosh Shanti Puja in Pune to remove Kemdrum/Grahan Dosh. Vedic remedies for depression and anxiety." />
                <meta name="keywords" content="Chandra Dosh Shanti Pune, Moon Affliction Remedies, Kemdrum Dosh Puja, Chandra Grahan Dosh, Mental Peace Puja" />
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
                            <span className="text-maroon-900 font-semibold">Chandra Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/navagraha-shanti-hero.png"
                            alt="Chandra Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Mental Peace & Emotional Balance</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Chandra Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Heal The Mind & Soul</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The Moon governs the Mind (Manas). An afflicted Moon leads to anxiety, depression, and instability. Restore calmness with Vedic Moon remedies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Chandra Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Chandra%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p><strong>Chandra Dosh</strong> occurs when the Moon is weak, debilitated (in Scorpio), or afflicted by malefic planets like Rahu (Grahan Dosh) or Saturn (Vish Yog). Since the Moon rules the mind and emotions, its affliction causes severe mental stress, overthinking, and emotional volatility.</p>
                                <p><strong>Chandra Dosh Shanti Puja</strong> involves worshipping Lord Shiva (who holds the crescent moon) and Chandra Dev to strengthen the mind and bring peace.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Types of Moon Afflictions</h3>
                                <ul>
                                    <li><strong>Kemdrum Dosh:</strong> When there are no planets on either side of the Moon. Leads to loneliness and poverty.</li>
                                    <li><strong>Chandra-Rahu (Grahan Yoga):</strong> Causes phobias, hallucinations, and confusion.</li>
                                    <li><strong>Chandra-Shani (Vish Yoga):</strong> Causes depression, pessimism, and chronic delays.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Chandra Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Moon Remedy</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Chandra Mantra Jaap (11,000 chants), Rudrabhishek, and Rice Donation.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Dosh Nivaran</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">For Severe Kemdrum/Grahan Dosh. 51,000+ Mantra Jaap, Havan, and Silver Moon Daan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (White Items)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>White Cloth, White Flowers (Lily/Jasmine)</li>
                                    <li>Rice, Sugar, Milk, Curd</li>
                                    <li>Silver Moon Image/Coin</li>
                                    <li>White Sandalwood (Chandan)</li>
                                    <li>Camphor (Kapoor) - loved by Moon</li>
                                    <li>Moti (Pearl) - optional for donation</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Ganesh Puja:</strong> Clearing obstacles.</li>
                                    <li><strong>Punyahavachan:</strong> Purification with water.</li>
                                    <li><strong>Chandra & Shiva Puja:</strong> Invoking Chandra Dev and performing Abhishekam to Shiva Linga (Somnath).</li>
                                    <li><strong>Mantra Jaap:</strong> Chanting the Beej Mantra <em>"Om Shram Shreem Shraum Sah Chandraya Namah"</em>.</li>
                                    <li><strong>Havan:</strong> Offering white sesame (til) and Palash wood sticks to the fire.</li>
                                    <li><strong>Daan (Donation):</strong> Giving away white items (Rice, Sugar, Cloth, Silver) to a Brahmin on Monday.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Emotional Stability:</strong> Reduces mood swings, anxiety, and depression.</li>
                                    <li><strong>Mother's Health:</strong> Improves the health and relationship with the mother.</li>
                                    <li><strong>Focus & Memory:</strong> Enhances concentration for students and professionals.</li>
                                    <li><strong>Fluid Balance:</strong> Helps in curing water-retention or blood-related health issues.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Which day is best for this puja?", a: "Mondays and Full Moon days (Purnima) are the most auspicious for Chandra Shanti." },
                                        { q: "Can I wear a Pearl (Moti)?", a: "Only if the Moon is a benefic planet in your chart. If it is malefic (6th, 8th, 12th lord), wearing a Pearl can harm. Puja is safe for everyone." },
                                        { q: "Is fasting required?", a: "Fasting on Mondays is recommended for faster results, but not mandatory during the puja." },
                                    ].map((faq, i) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.q}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Find Inner Peace</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Calm your mind and heal your emotions with divine blessings.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Chandra Shanti</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">{sec.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Chandra Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Restore Mental Peace</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Chandra%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Chandra Dosh Shanti" />
            <Footer />
        </>
    )
}
