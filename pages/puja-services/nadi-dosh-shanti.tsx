import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NadiDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Nadi Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pandit for Nadi Dosh Shanti Puja in Pune. Resolve Nadi incompatibility in matchmaking. Ensure a healthy and long-lasting marriage.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Nadi Dosh Shanti' },
        { id: 'about', title: 'About Nadi Dosh' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Rituals' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Nadi Dosh Shanti Puja in Pune – Marriage Compatibility Remedy</title>
                <meta name="description" content="Resolve Nadi Dosh in Kundali matching with expert Shanti Puja in Pune. Essential for ensuring health, progeny, and marital bliss for compatible couples." />
                <meta name="keywords" content="Nadi Dosh Shanti Pune, Nadi Dosh Nivaran, Marriage Compatibility Puja, Mahamrityunjaya Jap for Nadi Dosh" />
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
                            <span className="text-maroon-900 font-semibold">Nadi Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/vivah-puja-hero.png"
                            alt="Nadi Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Matchmaking & Compatibility</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Nadi Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">For A Healthy Marriage & Progeny</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Overcome the major obstacle in Kundali Milan. Ensure the health of the couple and the well-being of future generations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Nadi Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Nadi%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Nadi Dosh</strong> is considered one of the most critical defects in Vedic Astrology matchmaking (Gun Milan), often carrying 8 points (Ashta Koota). When both partners have the same Nadi (Adi, Madhya, or Antya), it creates an incompatibility that can affect the physical health of the couple and the health of their progeny.</p>
                                <p>However, Vedic texts provide powerful remedies. The <strong>Nadi Dosh Shanti Puja</strong> effectively neutralizes these negative effects, allowing the couple to proceed with marriage and live a happy, healthy life.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Impact of Nadi Dosh</h3>
                                <ul>
                                    <li><strong>Health Issues:</strong> Frequent illness to one or both partners.</li>
                                    <li><strong>Progeny Concerns:</strong> Difficulties in conceiving or health issues for the child.</li>
                                    <li><strong>Marital Conflict:</strong> Lack of physical or temperamental attraction.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Nadi Dosh Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Ganpati Pujan, Mahamrityunjaya Jaap (small count), and Havan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Nadi Dosh Nivaran</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Detailed Puja with 1.25 Lakh Mahamrityunjaya Mantra Jaap (by multiple pandits) & Gold Nadi Daan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Gold or Silver Nadi Image/Coin (Cow, Snake, etc. as per Nadi)</li>
                                    <li>Grains equal to the weight of the devotee (Tula Daan - optional)</li>
                                    <li>Rudraksha Mala</li>
                                    <li>Panchamrit (Milk, Curd, Ghee, Honey, Sugar)</li>
                                    <li>Red and White Cloth</li>
                                    <li>Havan Samagri (Ghee, Til, Jav)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Shanti Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Sankalp:</strong> Stating the Gotra and Nadi of both partners to neutralize the dosh.</li>
                                    <li><strong>Ganesh & Varun Puja:</strong> Invoking auspiciousness.</li>
                                    <li><strong>Navagraha Shanti:</strong> Appeasing all 9 planets, with special focus on Jupiter (Guru) and Venus (Shukra).</li>
                                    <li><strong>Mahamrityunjaya Jaap:</strong> The most critical part. Chanting "Om Tryambakam..." to protect life and health.</li>
                                    <li><strong>Nadi Daan:</strong> Donating gold/silver items representing the Nadi, along with grains and clothes to a Brahmin.</li>
                                    <li><strong>Havan (Fire Lab):</strong> Offering oblations to Agni to seal the protective energies.</li>
                                    <li><strong>Brahmin Bhojan:</strong> Feeding the priests.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Marital Longevity:</strong> Protects the couple from severe health crisis or separation.</li>
                                    <li><strong>Healthy Progeny:</strong> Removes genetic/energetic obstacles for healthy children.</li>
                                    <li><strong>Mental Peace:</strong> Removes fear and anxiety about the marriage.</li>
                                    <li><strong>Family Acceptance:</strong> Often helps in convincing orthodox families who worry about the Dosh.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can we marry if Nadi Dosh exists?", a: "Yes, many successful marriages exist despite Nadi Dosh, provided proper Shanti Puja is performed before the wedding." },
                                        { q: "Is there an exception for Nadi Dosh?", a: "Yes, if the rashis are different but Nakshatra lords are friends, or if it is in the same Nakshatra but different Charan, the dosha is often cancelled. Our pandit checks this." },
                                        { q: "When should it be done?", a: "It is best done before the marriage ceremony. It can also be done post-marriage if problems arise." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Secure Your Marriage</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Don't let astrological compatibility block your union.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Nadi Shanti</Button>
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
                                
                                
                                {/* Book a Free Consulting CTA */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-lg p-4 border border-gold-200">
                                        <h5 className="font-bold text-maroon-900 text-sm mb-2 text-center">Book a Free Consulting</h5>
                                        <p className="text-xs text-gray-600 mb-3 text-center">Get expert guidance from our Vedic Pandits</p>
                                        <a href="tel:+918446272142" className="block w-full">
                                            <Button variant="primary" className="w-full text-sm py-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500">
                                                Call Now
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20a%20free%20consulting" target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
                                            <button className="w-full text-sm py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                                                WhatsApp Us
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Nadi Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Remove Matchmaking Dosh</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Nadi%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Nadi Dosh Shanti" />
            <Footer />
        </>
    )
}
