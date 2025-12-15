import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DurgaSaptashatiPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Durga Saptashati Paath',
        description: 'Book Durga Saptashati Paath in Pune (Chandi Paath). Complete recitation of 700 verses of Devi Mahatmyam. Blessings of Maa Durga for power and protection.',
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
            price: '2500',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Durga Saptashati Paath in Pune | Adhyay 1 to 13</title>
                <meta name="description" content="Book Pandits for Durga Saptashati Paath (Chandi Paath) in Pune. Complete recitation of 13 Chapters of Markandeya Purana to invoke the Goddess's grace." />
                <meta name="keywords" content="durga saptashati paath pune, chandi path, devi mahatmyam recitation, pandit for durga puja, navratri path" />
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
                            <span className="text-maroon-900 font-semibold">Durga Saptashati Paath</span>
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
                            alt="Durga Saptashati Paath"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Devi Mahatmyam</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Durga Saptashati Paath <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">700 Verses of Power</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The recitation of the Durga Saptashati is the most powerful way to awaken the Goddess energy. It narrates the victory of Goddess Durga over Mahishasura, Shumbha-Nishumbha, and acts as a shield against all evil.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Paath
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Durga%20Saptashati%20Paath" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Durga Saptashati</strong> (or Chandi Paath) is a part of the Markandeya Purana. It consists of 13 chapters and 700 verses (Shlokas). It is the central text of Shakti worship.
                                </p>
                                <p>
                                    Unlike a Havan which focuses on fire offerings, the <strong>Paath</strong> focuses on the vibration of sound. Chanting these Sanskrit verses with correct pronunciation invokes the fierce and protective nature of the Mother Goddess.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Navratri is the best time for Saptashati Paath, but it can be done on any auspicious day to remove "Grah Doshas" and enemies.
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Significance of Saptashati</h2>
                                <p>
                                    It is said that in Kaliyuga, Chandi (Durga) and Vinayaka (Ganesh) are the most easily pleased deities.
                                </p>
                                <h3>Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Destruction of poverty and sorrow.",
                                        "Victory over internal and external enemies.",
                                        "Protection from black magic/evil eye.",
                                        "Peace of mind and spiritual growth.",
                                        "Fulfillment of righteous desires."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Recitation Procedure</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Approx 3-4 Hours.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Shapoddhar Mantra</h3>
                                                <p className="text-gray-700">Reciting mantras to unlock the power of the Chandi verses (which were locked by Shiva).</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Purvang (Initial)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Kavach (Armor), Argala (Bolt), and Keelak (Pin) stotras recitation.</li>
                                                        <li>Ratri Suktam.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Main 13 Chapters</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Pratham Charitra (Mahakali).</li>
                                                        <li>Madhyam Charitra (Mahalakshmi).</li>
                                                        <li>Uttam Charitra (Mahasaraswati).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Uttarango (Final)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Devi Suktam.</li>
                                                        <li>Siddha Kunjika Stotram (Essential for completion).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Kshama Prarthana</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Asking for forgiveness for any errors in pronunciation.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    For Paath, we need items for Kalash Sthapana and Akhand Jyot.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🕯️</span> Setup Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Durga Idol/Photo.</li>
                                            <li>Kalash (Copper Pot) & Coconut.</li>
                                            <li>Red Cloth for Goddess.</li>
                                            <li>Ghee Lamp (Akhand Diya).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🌸</span> Offerings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Red Hibiscus Flowers (Mandatory).</li>
                                            <li>Kumkum & Haldi.</li>
                                            <li>Fruits (Pomegranate is best).</li>
                                            <li>Sweets.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Sanskrit Experts</h2>
                                        <p className="text-gold-100 mb-6">Durga Saptashati requires precise 'Ucharan' (pronunciation). Wrong pronunciation can have adverse effects. Our Pandits are highly trained.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Correct Samput techniques",
                                                "Appropriate speed of recitation",
                                                "Knowledge of Kunjika Stotra",
                                                "Punctual and pious",
                                                "Peaceful completion"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Durga Paath</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹2,500 <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Complete Saptashati Recitation.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
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
                                            q: "Can women perform this?",
                                            a: "Yes, Maa Durga is the Supreme Mother. Women can definitely read or host the Saptashati Paath, provided they maintain purity."
                                        },
                                        {
                                            q: "How many Pandits are needed?",
                                            a: "For a simple home Paath, 1 expert Pandit is sufficient. For Nav Chandi, usually 5 or 9 Pandits are required."
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
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Durga Path</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Jai Mata Di</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                        <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location (Pune)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Pune City" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        For Navratri & special days.
                                    </p>
                                </form>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"Hearing the Saptashati Paath in Sanskrit was a vibrating experience. The Pandit ji was very clear and knowledgeable."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">MR</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Manish R.</p>
                                                <p className="text-[10px] text-gray-500">Kalyani Nagar, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Durga Saptashati Paath" />

                <Footer />
            </main>
        </>
    )
}
