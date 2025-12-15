import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ChandiHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Chandi Havan',
        description: 'Book Chandi Havan in Pune (Shat Chandi Yagya). Most powerful Shakti Puja for victory over enemies, court cases, and negativity. Expert Pandits for Durga Saptashati Havan.',
        provider: {
            '@type': 'LocalBusiness',
            name: 'PanditForPujaBooking.com',
            telephone: '+91-8446272142',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
            },
        },
        areaServed: {
            '@type': 'City',
            name: 'Pune',
        },
        offers: {
            '@type': 'Offer',
            price: '11000',
            priceCurrency: 'INR',
        },
    }

    
    // 3. Sections for Jump to Navigation
    const sections = [
        { id: 'intro', title: 'Introduction' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' }
    ]


    return (
        <>
            <Head>
                <title>Chandi Havan in Pune | Durga Saptashati Homam for Power</title>
                <meta name="description" content="Book expert pandit for Chandi Havan (Shat Chandi) in Pune. The ultimate Shakti ritual to destroy negative energy, win court cases, and gain prosperity." />
                <meta name="keywords" content="chandi havan pune, shat chandi yagya, durga saptashati havan, pandit for chandi homam, nav chandi puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Breadcrumb */}
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Chandi Havan</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/navratri-udyapan-hero.png"
                            alt="Chandi Havan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Ultimate Shakti Yagya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Chandi Havan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Victory Over All Obstacles</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Chandi Havan involves 700 mantras of the Durga Saptashati. It is the most powerful ritual known in Hinduism to invoke the fierce aspect of the Goddess to destroy enemies, legal troubles, and negativity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Chandi Havan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Chandi%20Havan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p>
                                    <strong>Chandi Havan</strong> (or Chandi Homam) requires reciting the 13 chapters of the <em>Durga Saptashati</em> (Devi Mahatmyam) and offering oblations into the fire. It is often performed as <strong>Nav Chandi</strong> (9 recitations) or <strong>Shat Chandi</strong> (100 recitations).
                                </p>
                                <p>
                                    This is an elaborate ritual requiring multiple Pandits and significant preparation. It invokes the combined power of Mahakali, Mahalakshmi, and Mahasaraswati to bless the devotee with strength, wealth, and wisdom.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        "Ya Devi Sarvabhuteshu...": This Yagya creates a high-energy field that acts as a spiritual armor for the entire family.
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why Perform Chandi Havan?</h2>
                                <ul>
                                    <li><strong>Victory in Court Cases:</strong> Known to turn the tide in legal battles.</li>
                                    <li><strong>Defeating Enemies:</strong> Neutralizes competitors and hidden enemies.</li>
                                    <li><strong>Planetary Relief:</strong> Pacifies all malefic planetary effects simultaneously.</li>
                                    <li><strong>Health & Prosperity:</strong> Cures unknown diseases and removes poverty.</li>
                                </ul>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">The Grand Ritual</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Takes 4-6 hours with multiple priests.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Punyahavachan & Sankalp</h3>
                                                <p className="text-gray-700">Purification and stating the intent of the mega ritual.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Devi Mahatmya Paath</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Recitation of Argala, Keelak, and Kavach.</li>
                                                        <li>Full reading of 700 verses of Saptashati.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Havan (Sacrificial Fire)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Every verse is followed by "Swaha" and an oblation into the fire.</li>
                                                        <li>Use of Payasam (Kheer) and special herbs.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Kanya Pujan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worshipping young girls (Kumari) as forms of the Goddess.</li>
                                                        <li>Offering them food and gifts.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Purnahuti</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Silk Saree, Coconut, and Betel nuts offered to Agni.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Massive Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    Since this is a Yagya, the quantity of Samagri is large.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🥥</span> Major Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Ghee (2kg+).</li>
                                            <li>Dried Coconut (20+ pieces).</li>
                                            <li>Havan Samagri (5kg).</li>
                                            <li>Silk Saree (Red).</li>
                                            <li>Honey, Sugar, Curd.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🌺</span> Offerings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Red Hibiscus/Roses (Plenty).</li>
                                            <li>Fruits (5 varieties).</li>
                                            <li>Sweets (lots of Kheer/Halwa).</li>
                                            <li>Gifts for Kanya Pujan.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Expert Team Only</h2>
                                        <p className="text-gold-100 mb-6">Chandi Havan cannot be performed by novices. It requires strict pronunciation and Vidhi. Our senior Acharyas lead this.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Sanskrit Scholars & Acharyas",
                                                "Complete team of 3-5 Pandits",
                                                "Authentic Samagri & Vidhi",
                                                "Kanya Pujan management",
                                                "Satisfaction guaranteed"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center text-white">
                                                    <span className="w-6 h-6 rounded-full bg-saffron-500 flex items-center justify-center text-xs mr-3">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold-500/30">
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-white mb-2">Book Chandi Havan</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹11,000+ <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Includes team of Pandits.</p>
                                            <Button variant="primary" className="w-full mb-3" href="#booking">Request Quote</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Can this be done at home?",
                                            a: "Nav Chandi (smaller version) can be done at home. Shat Chandi (larger version) usually requires a larger space or temple hall."
                                        },
                                        {
                                            q: "Is it safe?",
                                            a: "Absolutely. When done by expert Pandits with Satvik intention, it only brings positivity and protection."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.q}</h3>
                                            <p className="text-gray-700">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                                                            {/* Table of Contents Widget */}
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">
                                                    {sec.title}
                                                </a>
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

{/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Chandi Yagya</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Invoke Divine Shakti</p>

                                
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"We were facing severe legal issues in our business. The Shat Chandi Havan performed by your Gurujis changed the energy completely. We won the case."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">VJ</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Vikram J.</p>
                                                <p className="text-[10px] text-gray-500">Deccan, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Chandi Havan" />

                <Footer />
            </main>
        </>
    )
}
