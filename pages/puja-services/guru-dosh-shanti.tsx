import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GuruDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Guru Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pandit for Guru Dosh Shanti Puja in Pune. Remedies for Jupiter Affliction (Guru Chandal Dosh). Improve wisdom, marriage prospects, and education.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Guru Dosh Shanti' },
        { id: 'about', title: 'Jupiter Affliction' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Guru Dosh Shanti Puja in Pune – Wisdom & Prosperity</title>
                <meta name="description" content="Struggling with education or marriage delay? Book Guru Dosh Shanti Puja in Pune. Authentic remedies for weak Jupiter and Guru Chandal Dosh." />
                <meta name="keywords" content="Guru Dosh Shanti Pune, Jupiter Affliction Remedies, Guru Chandal Dosh Puja, Brihaspati Puja Pune" />
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
                            <span className="text-maroon-900 font-semibold">Guru Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/satyanarayan-puja-hero.png"
                            alt="Guru Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Wisdom • Wealth • Marriage</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Guru Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Strengthen Your Jupiter</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Jupiter (Guru) is the karaka of wisdom, wealth, and husband in a woman's chart. Its affliction blocks progress and happiness. Perform Shanti for divine grace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Guru Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Guru%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Guru (Jupiter)</strong> is the most benevolent planet in Vedic Astrology, representing knowledge, dharma, children, and expansion. However, when afflicted (e.g., debilitated in Capricorn, or with Rahu forming <strong>Guru Chandal Dosh</strong>), it loses its ability to protect and guide.</p>
                                <p><strong>Guru Dosh Shanti Puja</strong> is performed to appease Brihaspati Dev, removing obstacles in education, marriage, and spiritual pursuits.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Symptoms of Weak Jupiter</h3>
                                <ul>
                                    <li><strong>Lack of Wisdom:</strong> Poor decision-making and lack of focus in studies.</li>
                                    <li><strong>Marriage Delays:</strong> Especially for women, finding a suitable partner becomes difficult.</li>
                                    <li><strong>Financial Instability:</strong> Despite hard work, wealth does not accumulate.</li>
                                    <li><strong>Health:</strong> Liver, diabetes, or obesity issues.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Guru Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Brihaspati Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Guru Mantra Jaap (19,000 chants), Vishnu Puja, and Yellow Donation.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Guru Chandal Nivaran</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Targeted for Guru-Rahu conjunction. 76,000+ Jaap, Special Havan, and Gold/Turmeric Daan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (Yellow Items)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Yellow Cloth, Yellow Flowers (Marigold)</li>
                                    <li>Chana Dal (Split Bengal Gram)</li>
                                    <li>Turmeric (Haldi) - sticks and powder</li>
                                    <li>Yellow Sweets (Laddoo, Banana)</li>
                                    <li>Topaz or Yellow Sapphire (Pukhraj) - optional for donation/worship</li>
                                    <li>Books/Scriptures (symbol of knowledge)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Sankalp:</strong> Stating the Gotra and purpose (Vidya, Vivah, or Dhan).</li>
                                    <li><strong>Ganesh & Vishnu Puja:</strong> Jupiter is closely connected to Lord Vishnu.</li>
                                    <li><strong>Brihaspati Yantra Puja:</strong> Energizing the Yantra with turmeric water.</li>
                                    <li><strong>Mantra Jaap:</strong> Chanting <em>"Om Gram Greem Graum Sah Gurave Namah"</em> (19,000 times).</li>
                                    <li><strong>Peepal Tree Worship:</strong> Watering the Peepal tree (often part of the ritual).</li>
                                    <li><strong>Havan:</strong> Offering yellow mustard seeds and Peepal wood.</li>
                                    <li><strong>Daan:</strong> Giving knowledge (books) or food (Chana Dal) to Brahmins/Students.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Education:</strong> Improved memory, focus, and academic success for students.</li>
                                    <li><strong>Marriage:</strong> Removes delays and brings a wise, supportive life partner.</li>
                                    <li><strong>Wealth:</strong> Attracts ethical wealth and abundance.</li>
                                    <li><strong>Spirituality:</strong> Deepens understanding of Dharma and brings the blessings of a Guru/Mentor.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this puja good for students?", a: "Yes, it is highly recommended for students facing lack of concentration or exam failures." },
                                        { q: "Which day is best?", a: "Thursdays (Guruvar) are dedicated to Jupiter. Doing puja on a Thursday in Shukla Paksha is ideal." },
                                        { q: "What is Guru Chandal Dosh?", a: "It is formed when Jupiter and Rahu are in the same house. It corrupts wisdom and leads to unethical behavior. Specific Shanti is needed." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Illuminate Your Path</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Seek the wisdom and blessings of the Divine Preceptor.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Guru Shanti</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Guru Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Blessings for Marriage & Wisdom</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Guru%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Guru Dosh Shanti" />
            <Footer />
        </>
    )
}
