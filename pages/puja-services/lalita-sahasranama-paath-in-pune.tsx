import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function LalitaSahasranamaPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Lalita Sahasranama Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Lalita Sahasranama Paath in Pune. 1000 glorious names of Goddess Lalita Tripura Sundari. For Shakti, marital bliss, and spiritual awakening. Expert pandits.',
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
                <title>Lalita Sahasranama Paath in Pune – 1000 Names of Shakti</title>
                <meta name="description" content="Book Lalita Sahasranama Paath in Pune. Recite the 1000 sacred names of Sri Lalita Tripura Sundari. Powerful for marital harmony, protection, and Kundalini awakening. ₹2,100 onwards." />
                <meta name="keywords" content="Lalita Sahasranama Pune, Sri Vidya Puja, Tripura Sundari, Devi Mahatmyam, Shakti Puja, Kumkum Archana" />
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
                            <span className="text-maroon-900 font-semibold">Lalita Sahasranama Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Sri Matre Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Lalita Sahasranama Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">The Glory of the Divine Mother</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Sri Lalita Tripura Sundari, the playful and compassionate Queen of the Universe. This hymn is the heart of Sri Vidya Sadhana, bestowing both worldly pleasures (Bhoga) and liberation (Moksha).
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Lalita Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Lalita%20Sahasranama%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Lalita Sahasranama</strong> (1000 Names of Lalita) is a sacred text from the Brahmanda Purana. It was taught by Lord Hayagriva (avatar of Vishnu) to Sage Agastya. Unlike other Sahasranamas which may list attributes, this text describes the Goddess's form from head to toe (Keshadipada), her abode (Sripura), her battle with Bhandasura, and her subtle form as the Kundalini Shakti.</p>
                                <p>It is unique because <strong>no name is repeated</strong>, and every name acts as a powerful mantra in itself.</p>

                                <h2 className="text-3xl font-bold mt-8">Why is it Powerful?</h2>
                                <p>The Goddess Lalita is "Iccha-Shakti" (Will Power), "Jnana-Shakti" (Knowledge), and "Kriya-Shakti" (Action) combined. Reciting her names activates these energies in the devotee. It is said that merely listening to it with devotion repels the effects of black magic and premature death.</p>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Application</h2>
                                <ul>
                                    <li><strong>Marital Bliss:</strong> She is the perfect wife (Kameshvari). Worshipping her ensures harmony between couples and long life for the husband (Sumangali Yoga).</li>
                                    <li><strong>Protection:</strong> Names like "Rakshakari" and "Dustha Dura" create an impenetrable shield.</li>
                                    <li><strong>Fertility:</strong> Helpful for couples seeking progeny.</li>
                                    <li><strong>Beauty & Charisma:</strong> The devotee gains a magnetic aura (Tejas).</li>
                                    <li><strong>Spiritual Growth:</strong> It purifies the chakras and awakens the dormant spiritual energy.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Famous Names & Meanings</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">"Om Sri Mata" (The Sacred Mother)</h4>
                                    <p className="text-gray-700 mb-2">The very first name. She who looks after us like a mother.</p>
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">"Om Shivakama Sundaryai Namah"</h4>
                                    <p className="text-gray-700">The beautiful one desired by Shiva himself.</p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Fridays & Tuesdays:</strong> Special days for Devi.</li>
                                    <li><strong>Navratri:</strong> All 9 days are excellent.</li>
                                    <li><strong>Purnima (Full Moon):</strong> The Goddess is Moon-faced (<i>Chandra Mandala Madhyaga</i>).</li>
                                    <li><strong>Sankashti Chaturthi:</strong> Also good for removing obstacles.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Lalita Sahasranama Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Archana</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Kumkum Archana with 1000 Names.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 Hours</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Kumkum Offering (Archana)</li>
                                            <li>✓ Devi Ashtottara included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Sahasra Chandi Samput</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Intense ritual with Havan and Beeja Mantras.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-5 Pandits</li>
                                            <li>✓ Lalita Trishati + Sahasranama</li>
                                            <li>✓ Havan with Kheer/Ghee</li>
                                            <li>✓ Suvasini Puja (Worship of married women)</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Kumkum Archana</h3>
                                <p>The most popular way to perform this is <strong>Kumkum Archana</strong>. As each name is chanted, a pinch of red Kumkum (vermilion) is offered to the Meru (Sri Chakra) or the Idol. This Kumkum becomes "Prasad" and carries the vibration of the name.</p>

                                <h3 className="text-2xl font-bold mt-6">The Sequence</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Purva Bhaga:</strong> Introductory prayers (Nyasa).</li>
                                    <li><strong>Dhyana Shloka:</strong> Meditating on Her form ("Sinduraruna Vigraham...").</li>
                                    <li><strong>Sahasranama Stotram:</strong> Chanting the 1000 names.</li>
                                    <li><strong>Phala Shruti:</strong> Reading the benefits (mandatory for this Stotra).</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can anyone chant this?</h3>
                                <p>Tradition says one needs "Initiation" (Deeksha) for the seed mantras, but the Stotra itself can be chanted by anyone with devotion. Listening to it is safe for everyone.</p>

                                <h3 className="text-xl font-bold mt-4">2. Why is Phala Shruti mandatory?</h3>
                                <p>Lord Hayagriva specifically instructed Agastya that reciting the Stotra without the final section (Benefits/Phala Shruti) is incomplete. We ensure full recitation.</p>

                                <h3 className="text-xl font-bold mt-4">3. What is Suvasini Puja?</h3>
                                <p>Offering respect, food, and gifts to a married woman (Suvasini) considering her as Lalita Devi herself. This pleases the Goddess immensely.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I do it for my daughter's marriage?</h3>
                                <p>Yes, Lalita Devi is the granter of good husbands. Many perform this for "Vivaha Prapti".</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the Sri Chakra?</h3>
                                <p>It is the geometric representation of the Goddess. Worshipping the Sri Chakra with Lalita Sahasranama is the highest form of Tantra.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is it true it corrects Vastu?</h3>
                                <p>Yes, name 295 is <i>"Vastu Swaroopini"</i>. The vibrations clear the negative energies of a house.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Lalita Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Sri Matre Namah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lalita%20Sahasranama%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Lalita Sahasranama Paath" />
            <Footer />
        </>
    )
}
