import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SuryaDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Surya Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pandit for Surya Dosh Shanti Puja in Pune. Remedies for weak Sun. Boost confidence, health, and social status. Authentic Aditya Hridaya Stotra chanting.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Surya Dosh Shanti' },
        { id: 'about', title: 'Sun Afflictions' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Surya Dosh Shanti Puja in Pune – Confidence & Vitality</title>
                <meta name="description" content="Suffering from low confidence or eye troubles? Book Surya Dosh Shanti Puja in Pune. Expert Pandits for Surya Grahan Dosh and weak Sun remedies." />
                <meta name="keywords" content="Surya Dosh Shanti Pune, Sun Affliction Remedies, Aditya Hridaya Stotra Puja, Surya Grahan Dosh Nivaran" />
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
                            <span className="text-maroon-900 font-semibold">Surya Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/surya-dev-puja-hero.png"
                            alt="Surya Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Power • Health • Reputation</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Surya Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Restore Your Inner Light</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The Sun represents the Soul, vitality, and authority. Its affliction leads to health issues, disgrace, and low self-esteem. Appease Surya Dev for success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Surya Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Surya%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Surya (Sun)</strong> is the king of planets, governing vitality, eyesight, heart, father, and social standing. When the Sun is debilitated (in Libra) or afflicted by Rahu (Surya Grahan Dosh) or Saturn, the individual faces constant struggles, lack of recognition, and health problems.</p>
                                <p><strong>Surya Dosh Shanti Puja</strong> involves ancient Vedic rituals to strengthen the Sun's positive rays in your life, performed by expert Brahmins.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Impact of Weak Sun</h3>
                                <ul>
                                    <li><strong>Health:</strong> Poor eyesight, heart troubles, bone issues, and low immunity.</li>
                                    <li><strong>Career:</strong> Lack of promotion, conflict with bosses/government.</li>
                                    <li><strong>Personal:</strong> Low confidence, strained relationship with father.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Surya Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Aditya Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Surya Mantra Jaap (7,000 chants), Arghya offering, and Havan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Surya Grahan Nivaran</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Targeted for Grahan Dosh. 28,000+ Jaap, Aditya Hridaya Stotra Path & Copper Daan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (Red/Copper Items)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Red Cloth, Red Flowers (Hibiscus/Rose)</li>
                                    <li>Wheat (Gehu) - grain of the Sun</li>
                                    <li>Jaggery (Gud)</li>
                                    <li>Copper coins or Vessel</li>
                                    <li>Red Sandalwood (Rakta Chandan)</li>
                                    <li>Ruby (Manik) substitute (optional)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Sankalp:</strong> Intent for health and fame.</li>
                                    <li><strong>Ganesh & Navagraha Puja:</strong> Awakening the cosmic forces.</li>
                                    <li><strong>Surya Yantra Puja:</strong> Infusing energy into the Yantra.</li>
                                    <li><strong>Recitation:</strong> Chanting <em>Aditya Hridaya Stotra</em> (powerful hymn for victory).</li>
                                    <li><strong>Mantra Jaap:</strong> Chanting <em>"Om Hram Hreem Hraum Sah Suryaya Namah"</em> (7,000+ times).</li>
                                    <li><strong>Havan:</strong> Offering Aak (Madar) wood sticks to the fire.</li>
                                    <li><strong>Daan:</strong> Donating Wheat, Jaggery, and Copper on Sunday.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Health:</strong> Strengthens eyesight, bones, and heart health.</li>
                                    <li><strong>Authority:</strong> Removes hurdles in government jobs or political career.</li>
                                    <li><strong>Confidence:</strong> Builds self-esteem and charisma.</li>
                                    <li><strong>Father's Wellbeing:</strong> Improves relationship with father and his health.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this effective for government jobs?", a: "Yes, Sun rules the government. Strengthening it removes obstacles in government exams and careers." },
                                        { q: "When should it be done?", a: "Sundays, especially those in Shukla Paksha, or on Maccara Sankranti/Ratha Saptami." },
                                        { q: "What is Surya Grahan Dosh?", a: "When Sun is with Rahu/Ketu. It dims one's personality and potential. This puja removes that eclipse effect." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Shine Brighter</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Remove the clouds of bad luck and let your success shine.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Surya Shanti</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Surya Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Boost Confidence & Success</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Surya%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Surya Dosh Shanti" />
            <Footer />
        </>
    )
}
