import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function LakshmiAshtottaraPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Lakshmi Ashtottara Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Lakshmi Ashtottara Shatanamavali Paath in Pune. 108 Sacred Names of Goddess Lakshmi. For wealth, abundance, and prosperity. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '1500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Lakshmi Ashtottara Paath in Pune – 108 Sacred Names</title>
                <meta name="description" content="Book Lakshmi Ashtottara Shatanamavali Paath in Pune. Recitation of the 108 divine names of Goddess Lakshmi. Attract wealth, joy, and spiritual abundance. ₹1,500 onwards." />
                <meta name="keywords" content="Lakshmi Ashtottara Paath Pune, Lakshmi 108 Names, Shatanamavali Archana, Wealth Puja, Diwali Lakshmi Puja, Mahalakshmi Chanting" />
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
                            <span className="text-maroon-900 font-semibold">Lakshmi Ashtottara Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Shreem Mahalakshmiyei Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Lakshmi Ashtottara Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">108 Names of Divine Abundance</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke the grace of Goddess Mahalakshmi through her 108 potent names. A powerful ritual to attract wealth, remove financial blockages, and bring joy to your home.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Lakshmi Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Lakshmi%20Ashtottara%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Sri Lakshmi Ashtottara Shatanamavali</strong> consists of the 108 most sacred names of Goddess Mahalakshmi. Found in the Agni Purana and other ancient texts, each name represents a specific aspect of the Divine Mother—wealth, beauty, courage, knowledge, and sovereignty.</p>
                                <p>Reciting these names is not just a prayer; it is an <strong>Archana</strong>—a floral offering. Traditionally, with each name chanted ("Om Prakrityai Namah", "Om Vikrityai Namah"...), a fresh lotus flower or kumkum is offered to the deity, creating a powerful accumulation of divine energy.</p>

                                <h2 className="text-3xl font-bold mt-8">Significance of 108 Names</h2>
                                <p>Why 108? In Vedic cosmology, 108 represents the entire universe (1 = God/Truth, 0 = Emptiness/Completeness, 8 = Infinity). Chanting the 108 names signifies the worship of the Goddess in her infinite and complete form.</p>

                                <h3 className="text-2xl font-bold mt-6">Key Names & Meanings</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Om Prakrityai Namah:</strong> Adoration to Nature/Creation.</li>
                                    <li><strong>Om Vidyaayi Namah:</strong> Adoration to Wisdom.</li>
                                    <li><strong>Om Saubhagya Dayinyai Namah:</strong> Giver of Good Fortune.</li>
                                    <li><strong>Om Dhanalaxmyai Namah:</strong> Goddess of Wealth.</li>
                                    <li><strong>Om Daridrya Dhvamsinyai Namah:</strong> Destroyer of Poverty.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Ashtottara Paath</h2>
                                <ul>
                                    <li><strong>Financial Stability:</strong> Directly attacks the energy of scarcity (Daridrya) and invites flow of wealth.</li>
                                    <li><strong>Debt Removal:</strong> Helps clear old debts and financial stagnation.</li>
                                    <li><strong>Business Growth:</strong> Attracts new opportunities and customers.</li>
                                    <li><strong>Peace in Home:</strong> Lakshmi is also the goddess of domestic harmony; this paath stops regular quarrels.</li>
                                    <li><strong>Spiritual Wealth:</strong> Bestows the inner wealth of patience, kindness, and gratitude.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Fridays:</strong> The day of Goddess Lakshmi.</li>
                                    <li><strong>Diwali (Lakshmi Puja):</strong> The most powerful night for this recitation.</li>
                                    <li><strong>Akshaya Tritiya:</strong> For unending prosperity.</li>
                                    <li><strong>Purnima (Full Moon):</strong> Especially Sharad Purnima.</li>
                                    <li><strong>Sri Sukta Havan:</strong> Often performed along with Sri Sukta.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Lakshmi Ashtottara Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Regular Archana</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">108 Names Recitation + Kumkum Archana.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1 Hour</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Kumkum/Flower offering</li>
                                            <li>✓ Prasad included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Lotus Flower Archana</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">108 Names with 108 Fresh Lotus Flowers.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 2 Hours</li>
                                            <li>✓ 108 Lotuses (Kamal)</li>
                                            <li>✓ Sri Sukta Recitation included</li>
                                            <li>✓ Special energized coin</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Preparation for Archana</h3>
                                <p>The Archana (offering) is the core of this ritual:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Deep Prajwalan:</strong> Lighting a ghee lamp to welcome the Goddess.</li>
                                    <li><strong>Avahana:</strong> Invoking Lakshmi into the Kalash or Idol.</li>
                                    <li><strong>Anga Puja:</strong> Worshiping the different parts of the Goddess's form.</li>
                                    <li><strong>Ashtottara Shatanamavali:</strong> The main part. As each of the 108 names is chanted, a flower, coin, or pinch of Kumkum is offered at Her feet.</li>
                                    <li><strong>Neivedya:</strong> Offering sweets (Kheer is preferred).</li>
                                    <li><strong>Aarti:</strong> Final waving of lights.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. What is the difference between Ashtottara and Sahasranama?</h3>
                                <p>Ashtottara is 108 names, while Sahasranama is 1000 names. Ashtottara is more concise and perfect for daily or weekly worship, while Sahasranama is a longer ritual.</p>

                                <h3 className="text-xl font-bold mt-4">2. Why are Lotus flowers important?</h3>
                                <p>Lakshmi is "Padmapriya" (Lover of Lotuses) and "Padmasana" (Seated on Lotus). Offering a Lotus pleases Her instantly as it represents purity manifesting from mud (the world).</p>

                                <h3 className="text-xl font-bold mt-4">3. Can I perform this for business success?</h3>
                                <p>Yes, business owners often do this every Friday in their office. It clears the energy of the workspace and attracts clients.</p>

                                <h3 className="text-xl font-bold mt-4">4. What is Kumkum Archana?</h3>
                                <p>It is offering red vermillion powder with each name. This Kumkum becomes highly charged with divine energy and is later used by the devotee on their forehead for success ("Tilak").</p>

                                <h3 className="text-xl font-bold mt-4">5. Can men perform this?</h3>
                                <p>Absolutely. While women often lead Lakshmi pujas, men seeking financial stability and family welfare should definitely perform or participate in this.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is it effective for marriage?</h3>
                                <p>Yes, Lakshmi is also the goddess of beauty and charm. Worshiping her enhances one's aura, attracting good relationships.</p>

                                <h3 className="text-xl font-bold mt-4">7. Do I need to fast?</h3>
                                <p>It is good to be on a vegetarian diet on the day of the puja. Strict fasting is not required unless you are doing a specific Vrat.</p>

                                <h3 className="text-xl font-bold mt-4">8. Can we do this on Diwali only?</h3>
                                <p>Diwali is the <em>best</em> time, but doing it on any Friday or Full Moon keeps the energy of abundance active throughout the year.</p>

                                <h3 className="text-xl font-bold mt-4">9. What if I recite incorrect pronunciation?</h3>
                                <p>Sanskrit creates resonance. While devotion matters most, correct pronunciation amplifies the effect. Our pandits ensure the mantras are chanted with perfect Vedic intonation.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can I get the Kumkum after the puja?</h3>
                                <p>Yes, if you book with us, we send the "Prasadam Kumkum" to you by post if you are not present. Applying it daily brings positivity.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book 108 Names Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Shreem Hreem Shreem</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Ashtottara%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Lakshmi Ashtottara Paath" />
            <Footer />
        </>
    )
}
