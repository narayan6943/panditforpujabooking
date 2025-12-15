import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KanakadharaStotraPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kanakadhara Stotra Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Kanakadhara Stotra Paath in Pune. The Gold Rain hymn by Adi Shankaracharya. Attract immense wealth and remove poverty. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '2100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Kanakadhara Stotra Paath in Pune – Rain of Gold Ritual</title>
                <meta name="description" content="Book Kanakadhara Stotra Paath in Pune. Recite Adi Shankaracharya's powerful hymn for gold and wealth. Remove poverty and attract instant financial relief. ₹2,100 onwards." />
                <meta name="keywords" content="Kanakadhara Stotra Paath Pune, Gold Rain Hymn, Adi Shankaracharya Stotra, Wealth Mantra, Financial Crisis Relief" />
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
                            <span className="text-maroon-900 font-semibold">Kanakadhara Stotra Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Hymn of Gold Rain</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Kanakadhara Stotra Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Miraculous Wealth Attraction</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Legend says Adi Shankaracharya recited this to make golden gooseberries rain for a poor lady. Invoke the same grace to remove poverty and attract sudden fortune.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Kanakadhara Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Kanakadhara%20Stotra%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Kanakadhara Stotra</strong> ("Stream of Gold") is one of the most famous Sanskrit hymns by Adi Shankaracharya. It is a masterpiece of poetry and devotion, specifically designed to move the heart of Goddess Lakshmi to grant wealth even to those who are destined to be poor due to past karma.</p>

                                <h2 className="text-3xl font-bold mt-8">The Awakening Legend</h2>
                                <p>As a young brahmachari, Adi Shankaracharya went to beg for alms. He reached a hut of a very poor woman who had nothing to give but a single dry gooseberry (amla). Moved by her selflessness despite her poverty, Shankaracharya composed this hymn on the spot. Pleased by his devotion, Goddess Mahalakshmi showered <strong>golden gooseberries</strong> (Kanakadhara) upon the lady's hut.</p>
                                <p>This Stotra is thus known for its ability to change destiny and bring wealth where there was none.</p>

                                <h2 className="text-3xl font-bold mt-8">Why Perform This Paath?</h2>
                                <ul>
                                    <li><strong>Instant Relief:</strong> Known as a "Sadyo-Phala-Prada" stotra (giving immediate results). Ideally suited for urgent financial crises.</li>
                                    <li><strong>Removing "Alakshmi":</strong> It banishes the energy of misfortune and scarcity from the house.</li>
                                    <li><strong>Gold & Assets:</strong> Specifically associated with accumulating gold, jewelry, and fixed assets.</li>
                                    <li><strong>Divine Compassion:</strong> The hymn appeals to Lakshmi's compassion, asking her to look upon the devotee just for a moment ("Kshanam"), which is enough to change their life.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Verses & Meaning</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Angam Hareh Pulaka-Bhushana-Mashrayanti..."
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "Like the black bees hovering over the Tamala tree, may the glance of the Goddess, which rests on the chest of Lord Vishnu, fall upon me and grant me prosperity."
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Fridays & Full Moons:</strong> For regular benefits.</li>
                                    <li><strong>Akshaya Tritiya:</strong> The best day for buying gold and reciting this stotra.</li>
                                    <li><strong>Dhanteras:</strong> During Diwali festivities.</li>
                                    <li><strong>During Financial Crisis:</strong> Perform faithfully for 21 or 48 days.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Kanakadhara Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">21 Recitations of Kanakadhara Stotra.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 Hours</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Golden Flower Archana</li>
                                            <li>✓ Sankalp included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Sahasra Kanakadhara</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">100/1000 Recitations with Havan.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-5 Pandits</li>
                                            <li>✓ Full Day Ritual</li>
                                            <li>✓ Havan with Lotus Seeds (Kamal Gatta)</li>
                                            <li>✓ Special Dhanda Yantra</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Offerings for Wealth</h3>
                                <p>To amplify the effect of the recitation, specific items are used:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Kamal Gatta (Lotus Seeds):</strong> A rosary of lotus seeds is used for counting.</li>
                                    <li><strong>Gold/Silver Coins:</strong> Coins are placed in the Kalash and worshipped.</li>
                                    <li><strong>Amla (Gooseberry):</strong> Offered as prasad, honoring the legend.</li>
                                    <li><strong>Saffron Water:</strong> Used for Abhishek of the Lakshmi idol.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can I recite it in Hindi/English?</h3>
                                <p>Yes, understanding the meaning invokes emotion (Bhav). However, listening to the original Sanskrit concurrently is recommended because the <em>sound structure</em> (Chhandas) created by Shankaracharya has power.</p>

                                <h3 className="text-xl font-bold mt-4">2. Is it true that it brings gold?</h3>
                                <p>"Gold" here represents wealth in all forms—liquid cash, assets, and opportunities. Devotees often report unexpected financial gains after this Paath.</p>

                                <h3 className="text-xl font-bold mt-4">3. How many times should I recite it?</h3>
                                <p>Reciting it once daily is good. For specific problems, a cycle of 3 times a day for 48 days (Mandal) is prescribed.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I do it if I am in debt?</h3>
                                <p>Yes, it is the primary remedy for debt relief. It helps create new streams of income to pay off liabilities.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the difference from Sri Suktam?</h3>
                                <p>Sri Suktam is Vedic (from Rigveda) and focuses on royal power and prosperity. Kanakadhara is Puranic/Devotional and focuses specifically on the <em>compassion</em> of Lakshmi to help the destitute.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can this be done at the office?</h3>
                                <p>Yes, performing it at a business place attracts "Lakshmi" (wealth) into the business.</p>

                                <h3 className="text-xl font-bold mt-4">7. Do I need a Guru to start?</h3>
                                <p>No, this is a universal Stotra given by the Jagadguru for the welfare of all. Anyone can chant it with a pure heart.</p>

                                <h3 className="text-xl font-bold mt-4">8. Is "Kamal Gatta" Havan necessary?</h3>
                                <p>Offering lotus seeds dipped in ghee into the fire while chanting Kanakadhara verses is considered the ultimate wealth ritual (Havan).</p>

                                <h3 className="text-xl font-bold mt-4">9. Can women recite during periods?</h3>
                                <p>It is traditionally advised to take a break during those days and resume afterwards. Mental listening is fine.</p>

                                <h3 className="text-xl font-bold mt-4">10. Will I get a recording?</h3>
                                <p>Yes, we can share a high-quality recording of the Paath performed for you so you can listen to it daily and keep the vibrations alive.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Gold Rain Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Vande Vandaru...</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kanakadhara%20Stotra%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Kanakadhara Stotra Paath" />
            <Footer />
        </>
    )
}
