import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RudriPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Rudri Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Rudri Paath (Rudra Ashtadhyayi) in Pune. Sacred Vedic hymn for Lord Shiva. Powerful for health, removal of fear, and moksha. Expert pandits.',
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
                <title>Rudri Paath in Pune – Rudra Ashtadhyayi Puja</title>
                <meta name="description" content="Book Rudri Paath (Rudra Ashtadhyayi) in Pune. Vedic recitation of the 8 chapters of Sri Rudram. The ultimate Shiva Puja for health, peace, and protection. ₹3,500 onwards." />
                <meta name="keywords" content="Rudri Paath Pune, Rudra Ashtadhyayi, Laghu Rudra, Shiva Puja, Namakam Chamakam, Vedic Rudra Abhishek" />
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
                            <span className="text-maroon-900 font-semibold">Rudri Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Namo Bhagavate Rudraya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Rudri Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">The Roar of Vedic Power</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the vibration of the Shukla Yajurveda. The Rudra Ashtadhyayi is the most ancient and powerful invocation of Lord Shiva for protection and liberation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Rudri Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Rudri%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Rudri (Rudra Ashtadhyayi)</strong> is the crystal jewel of the Vedas. Found in the Shukla Yajurveda, it consists of 8 chapters that describe the magnificent, terrifying, and benevolent forms of Lord Shiva. Reciting it is equivalent to bathing in the holy Ganges.</p>
                                <p>It contains the famous <strong>Namakam</strong> (prostrations to Rudra in all aspects of nature) and <strong>Chamakam</strong> (asking for blessings and fulfillment of desires).</p>

                                <h2 className="text-3xl font-bold mt-8">The 8 Chapters (Adhyayas)</h2>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Ganesh & Shiv Sankalp:</strong> Prayer for a focused mind.</li>
                                    <li><strong>Purusha Suktam:</strong> The cosmic form of God.</li>
                                    <li><strong>Indra & Guru Prayer:</strong> Honoring the teacher and king.</li>
                                    <li><strong>Maitra Varun:</strong> Solar energy invocation.</li>
                                    <li><strong>Namakam:</strong> The heart of Rudri. Bowing to Shiva in fire, water, wind, and even in thieves and robbers (seeing God in everything).</li>
                                    <li><strong>Mahashirsha:</strong> The great head of Rudra.</li>
                                    <li><strong>Jata:</strong> The matted hair of Shiva.</li>
                                    <li><strong>Chamakam:</strong> "Cha me" (Give this to me). Asking for health, food, strength, and gold.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Rudri Paath</h2>
                                <ul>
                                    <li><strong>Health & Longevity:</strong> It is the ultimate cure for fear of death and disease.</li>
                                    <li><strong>Removing Negativity:</strong> The vibration of Rudra dismantles negative patterns in the mind and environment.</li>
                                    <li><strong>Moksha:</strong> It purifies the soul of sins (Paap) accumulated over lifetimes.</li>
                                    <li><strong>Planetary Relief:</strong> Pacifies all malefic planets, especially Mars, Saturn, and Rahu.</li>
                                    <li><strong>Peace:</strong> Brings immediate calm to a restless home.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Mondays (Somvar):</strong> Shiva's day.</li>
                                    <li><strong>Pradosh:</strong> The twilight time dear to Shiva.</li>
                                    <li><strong>Mahashivratri:</strong> The Great Night of Shiva.</li>
                                    <li><strong>Shravan Month:</strong> The holy month.</li>
                                    <li><strong>Birthdays:</strong> For a protective shield (Kavach) for the year.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Rudri Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Eka Rudra (Standard)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">1 Recitation of Rudra Ashtadhyayi.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 Hours</li>
                                            <li>✓ 2 Pandits</li>
                                            <li>✓ Rudrabhishek with Milk/Water</li>
                                            <li>✓ Bilva Patra Archana</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Laghu Rudra (11 Avartan)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">11 Recitations (The Power of 11).</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 5-7 Pandits</li>
                                            <li>✓ Full Day Ritual</li>
                                            <li>✓ Laghu Rudra Havan</li>
                                            <li>✓ Extensive Abhishek</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">The Rhythm of Rudra</h3>
                                <p>The uniqueness of Rudri lies in its <strong>Swar (Intonation)</strong>.</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Abhishek:</strong> The Shiva Linga is continuously bathed with water, milk, curd, honey, and ghee while the mantra is chanted. This is because Shiva is "Abhishekapriya" (Lover of ablution).</li>
                                    <li><strong>Shringaar:</strong> After the bath, the Linga is beautifully decorated with Vibhuti (ash), Sandalwood, and Bilva leaves.</li>
                                    <li><strong>Vasordhara:</strong> For Laghu Rudra, a continuous stream of Ghee is poured into the fire while chanting the Chamakam.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is Rudri same as Rudrabhishek?</h3>
                                <p>Rudrabhishek is the <em>act</em> of bathing the Linga. Rudri is the <em>text</em> chanted during it. You can do Abhishek with simple names, but doing it with Rudri Paath is the highest form.</p>

                                <h3 className="text-xl font-bold mt-4">2. Why is pronunciation important?</h3>
                                <p>Vedic mantras depend on sound frequency. A slight change in tone changes the meaning. Our pandits are "Ghanapathis" trained in strict Vedic recitation.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can women perform Rudri?</h3>
                                <p>Women can perform the Abhishek and listen to the Paath. Traditional recitation of the Vedas is usually done by male priests, but women's participation in the puja is fully encouraged.</p>

                                <h3 className="text-xl font-bold mt-4">4. What is Salt Rudra?</h3>
                                <p>Sometimes, Rudrabhishek is done with saltwater or sugarcane juice for specific health or wealth desires. Standard is pure water/milk.</p>

                                <h3 className="text-xl font-bold mt-4">5. How long does Laghu Rudra take?</h3>
                                <p>It takes about 4-5 hours with a team of pandits chanting in unison.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can I do it at home?</h3>
                                <p>Yes, if you have a Shiva Linga (even small). If not, we can bring a temporary Sphatik (Crystal) or Parad (Mercury) Linga for the puja.</p>

                                <h3 className="text-xl font-bold mt-4">7. Is fasting required?</h3>
                                <p>For the host (Yajman), fasting until the puja concludes is recommended for maximum benefit.</p>

                                <h3 className="text-xl font-bold mt-4">8. Which is better: Temple or Home?</h3>
                                <p>Temple (Jyotirlinga) has high energy, but doing it at home purifies your personal living space, which is very important for domestic peace.</p>

                                <h3 className="text-xl font-bold mt-4">9. What is Ati Rudra?</h3>
                                <p>Ati Rudra is 14,641 recitations! It is a massive community event done over many days. We specialize in individual Eka and Laghu Rudra.</p>

                                <h3 className="text-xl font-bold mt-4">10. Do I get the Prasad?</h3>
                                <p>Yes, the "Teertham" (holy water) and dry fruits offered are the Prasad.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Rudri Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Har Har Mahadev</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹3,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rudri%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Rudri Paath" />
            <Footer />
        </>
    )
}
