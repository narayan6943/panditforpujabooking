import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VishnuPuranPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vishnu Puran Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Vishnu Puran Paath & Katha in Pune. Explore the preservation of the universe, Dashavatara, and Lord Vishnu\'s glories. Expert Vyas pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '11000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Vishnu Puran Paath in Pune – The Cosmic Preservation</title>
                <meta name="description" content="Book Vishnu Puran Paath & Katha in Pune. 7-Day discourse on the glories of Lord Vishnu, his Avatars, and the path of Bhakti. Expert narration. ₹11,000 onwards." />
                <meta name="keywords" content="Vishnu Puran Paath Pune, Vishnu Katha, Dashavatara Story, Vaishnava Rituals, Saptaha Parayan, Moksha Puja" />
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
                            <span className="text-maroon-900 font-semibold">Vishnu Puran Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Namo Narayanaya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vishnu Puran Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">The Saga of Preservation</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Dive into the oldest of the Puranas. Discover the secrets of creation, the divine Avatars (Rama, Krishna, Narasimha), and the path to ultimate liberation (Moksha).
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Vishnu Katha</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Vishnu%20Puran%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Sri Vishnu Purana</strong> is considered the "Purana Ratna" (Gem of Puranas). Narrated by Sage Parashara (father of Vyasa) to Maitreya, it lays down the systematic cosmology of the universe and establishes Lord Vishnu as the Supreme Preserver.</p>
                                <p>Unlike other Puranas which may be encyclopedic, Vishnu Puran is focused purely on <strong>Bhakti (Devotion)</strong> and <strong>Tattva (Philosophy)</strong>. It is the primary source for the stories of Prahlada, Dhruva, and the life of Lord Krishna.</p>

                                <h2 className="text-3xl font-bold mt-8">Key Highlights of the Text</h2>
                                <ul>
                                    <li><strong>Cosmology:</strong> Detailed description of how the universe is created, maintained, and destroyed (Yugas and Kalpas).</li>
                                    <li><strong>Avataras:</strong> Stories of Varaha, Narasimha, Vamana, Kurma, and Matsya.</li>
                                    <li><strong>Prahlada Charitra:</strong> The inspiring story of the boy devotee who faced demons with faith.</li>
                                    <li><strong>Dhruva Charitra:</strong> The story of determination and obtaining the Pole Star position.</li>
                                    <li><strong>Krishna Leela:</strong> A beautiful, early version of Krishna's life in Vrindavan.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Hearing Vishnu Puran</h2>
                                <ul>
                                    <li><strong>Moksha (Liberation):</strong> It is said that merely listening to the Vishnu Puran with faith guarantees freedom from the cycle of birth and death.</li>
                                    <li><strong>Peace in Family:</strong> The stories of Dhruva and Prahlada teach ideal family values and devotion.</li>
                                    <li><strong>Wealth & Prosperity:</strong> Vishnu is the husband of Lakshmi. His worship naturally brings abundance.</li>
                                    <li><strong>Cleansing of Sins:</strong> It washes away the impurities of the Kali Yuga.</li>
                                    <li><strong>Wisdom:</strong> It explains the deep philosophy of "Advaita" deeply embedded in Vaishnavism.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Ekadashi:</strong> The favorite day of Hari.</li>
                                    <li><strong>Kartik Month:</strong> Very auspicious for Vishnu worship.</li>
                                    <li><strong>Pitru Paksha:</strong> Often done for the peace of ancestors.</li>
                                    <li><strong>Adhik Maas (Purushottam Maas):</strong> The extra lunar month dedicated to Vishnu.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Vishnu Puran Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Katha Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Daily Paath (9 Days)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete reading of the text (Sanskrit).</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 9 Days</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Sankalp-based reading</li>
                                            <li>✓ No explanation (Pathan only)</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Vishnu Puran Katha</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹25,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Musical discourse with story explanation.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 7-9 Days</li>
                                            <li>✓ Vyas Pandit + Music</li>
                                            <li>✓ Hindi/Marathi Explanation</li>
                                            <li>✓ Daily Jhanki/Celebration</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">A Festival of Devotion</h3>
                                <p>A Katha is not just a ritual; it's a satsang:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Kalash Sthapana:</strong> Establishing the pot representing the universe.</li>
                                    <li><strong>Vyas Pujan:</strong> Worshipping the narrator as the representative of Sage Vyasa.</li>
                                    <li><strong>Katha:</strong> 3-4 hours of storytelling daily, interspersed with Bhajans.</li>
                                    <li><strong>Prasad:</strong> Daily distribution of food.</li>
                                    <li><strong>Vishnu Sahasranama Homa:</strong> The event concludes with a fire sacrifice chanting 1000 names.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is it different from Bhagwat Katha?</h3>
                                <p>Yes. Shrimad Bhagwat focus mainly on Krishna. Vishnu Puran covers the broader spectrum of Dashavatar and cosmology, with Krishna's story as a part of it. It is more philosophical.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can we do it for ancestors?</h3>
                                <p>Absolutely. It is one of the best ways to provide "Sadgati" (liberation) to departed souls.</p>

                                <h3 className="text-xl font-bold mt-4">3. How many days does it take?</h3>
                                <p>Usually 7 days (Saptaha) or 9 days (Navaha). We can customize based on your time availability.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I organize it at home?</h3>
                                <p>Yes, if you have a hall or large living room to seat 10-20 people. It brings immense positive vibrations to the property.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the main message?</h3>
                                <p>That everything is Vishnu ("Sarvam Vishnumayam Jagat"). It teaches you to see God in every atom.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Vishnu Katha</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Namo Bhagavate Vasudevaya</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹11,000+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vishnu%20Puran%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Vishnu Puran Paath" />
            <Footer />
        </>
    )
}
