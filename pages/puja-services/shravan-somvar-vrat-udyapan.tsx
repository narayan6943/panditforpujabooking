import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShravanSomvarVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shravan Somvar Vrat Udyapan',
        description: 'Book Pandit for Shravan Somvar Vrat Udyapan in Pune. Finish your Shravan Monday fasts with traditional Shiva Puja and Brahmin Bhojan.',
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
                <title>Shravan Somvar Vrat Udyapan in Pune | Shravan Month Mondays</title>
                <meta name="description" content="Book expert Pandit for Shravan Somvar Vrat Udyapan in Pune. Authentic conclusion of Shravan Monday fasts with Rudrabhishek and Havan." />
                <meta name="keywords" content="shravan somvar vrat udyapan pune, shravan month fast, shravan monday puja, shiva puja udyapan" />
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
                            <span className="text-maroon-900 font-semibold">Shravan Somvar Udyapan</span>
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
                            src="/images/rudrabhishek-hero.png"
                            alt="Shravan Somvar Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Mondays</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shravan Somvar Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Blessings for the Whole Year</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Mondays in Shravan are the dearest to Lord Shiva. After observing fasts on these 4-5 Mondays, perform the Udyapan to seal your prayers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shravan%20Somvar%20Udyapan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Shravan Somvar Vrat</strong> is the pinnacle of devotion for Shaivites. The entire month of Shravan (July-August) is dedicated to Lord Shiva, but the Mondays ('Somvars') fall in a class of their own.
                                </p>
                                <p>
                                    It is believed that the cosmos is charged with Shiva Tattva (Shiva Element) during this month. Devotees who observe fasting on these 4 or 5 Mondays are said to be blessed with the fulfillment of all desires—be it a good spouse, health, or liberation (Moksha).
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> marks the successful completion of these fasts. It is typically performed on the last Monday of the Shravan month or on the following full moon (Shravan Purnima / Raksha Bandhan).
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: The Healing of Neelkanth</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    Why we pour water and milk on the Shivalinga.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Great Poison (Halahala)</h3>
                                    <p>
                                        According to the Puranas, the Samudra Manthan (Churning of the Cosmic Ocean) took place during the month of Shravan. Before the Nectar of Immortality (Amrit) emerged, a deadly poison known as <strong>Halahala</strong> surfaced, threatening to burn the three worlds.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Shiva's Sacrifice</h3>
                                    <p>
                                        To save the universe, Lord Shiva drank the poison but held it in his throat, which turned blue (Neelkanth). The intense heat of the poison caused him immense discomfort.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Cooling Ritual</h3>
                                    <p>
                                        To cool him down, the Devas poured the holy water of the Ganges and cold milk over him. This provided relief to the Lord. This act is commemorated every Shravan Somvar. Devotees perform <strong>Abhishek</strong> (pouring water/milk) on the Shivalinga to soothe the Lord and seek his blessings for removing the 'poison' (suffering) from their own lives.
                                    </p>
                                </div>
                            </section>

                            {/* The 12 Jyotirlingas Reference - New */}
                            <section id="jyotirlingas" className="bg-white rounded-2xl p-8 border border-gold-200 shadow-sm">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Connection to the 12 Jyotirlingas</h2>
                                <p className="text-gray-700 mb-6">
                                    It is highly meritorious to mentally bow to the 12 Jyotirlingas during the Shravan Puja:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    {["Somnath", "Mallikarjuna", "Mahakaleshwar", "Omkareshwar", "Kedarnath", "Bhimashankar", "Kashi Vishwanath", "Trimbakeshwar", "Vaidyanath", "Nageshwar", "Rameshwaram", "Grishneshwar"].map((name, i) => (
                                        <div key={i} className="bg-gray-50 p-3 rounded border border-gray-200 text-maroon-800 font-medium text-sm">
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">The Final Homage</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Laghu Rudrabhishek</h3>
                                        <p className="text-gray-700">
                                            This is the central part of the Udyapan. The Pandit creates a vivid atmosphere of divinity by chanting the <strong>Rudram</strong> (Namakam and Chamakam) from the Yajur Veda. The Shivalinga is bathed continuously with:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Milk:</strong> For long life and progeny.</li>
                                            <li><strong>Curd:</strong> For prosperity.</li>
                                            <li><strong>Ghee:</strong> For Moksha and health.</li>
                                            <li><strong>Honey:</strong> For music and arts.</li>
                                            <li><strong>Sugar Cane Juice:</strong> For destruction of sorrow.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Bilvashtakam & Pushpanjali</h3>
                                        <p className="text-gray-700">
                                            Offering 108 Bel Patra (Bilva leaves) with the chanting of the Bilvashtakam mantra ("Tridalam Trigunakaram..."). Each leaf is offered upside down as per tradition.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. The Havan</h3>
                                        <p className="text-gray-700">
                                            A sacred fire ritual where 108 ahutis of 'Kheer' (Rice Pudding) and 'Til' (Sesame) are offered with the 'Maha Mrityunjaya Mantra'. This protects the devotee from untimely death and accidents.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Shodashopchar Puja</h3>
                                        <p className="text-gray-700">
                                            Offering 16 items of luxury to the Lord, including Itra (perfume), Janeu (sacred thread), and Naivedya (Food offering).
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Brahmin Bhojan</h3>
                                        <p className="text-gray-700">
                                            Ideally, 11 Brahmins are fed, representing the 11 Rudras. If not possible, at least one Brahmin couple is fed and given Dakshina and clothes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Items required for a complete Rudrabhishek and Havan.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Abhishek Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Liquids:</strong> Cow Milk (1L), Curd, Ghee, Honey, Sugar.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Leaves:</strong> Bel Patra (108), Durva grass.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> White Kaner, Dhatura, Lotus.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Other:</strong> Bhasma (Ash), Chandan, Janeu.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Havan & General</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> Black Til, Barley (Jau), Ghee, Havan Kund.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Offerings:</strong> Coconut, Paan leaves, Supari, Fruits.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cloth:</strong> White cloth for Shiva (Vastra).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Naivedya:</strong> Homemade Kheer is essential.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "Can I eat salt during Shravan Somvar fast?",
                                            a: "Traditionally, salt is avoided. Devotees eat 'Sendha Namak' (Rock Salt) if necessary, or stick to a fruit-only diet (Phalahar). Some observe 'Nirjala' (waterless) fasts."
                                        },
                                        {
                                            q: "What if I start menstruating during a Monday?",
                                            a: "You should fast but not perform the Puja or touch the deity. You can mentally chant 'Om Namah Shivaya'. That Monday is still counted, but the Udyapan should be done when you are clean."
                                        },
                                        {
                                            q: "Is it necessary to visit a temple?",
                                            a: "While visiting a Shiva temple is highly auspicious, the Puja and Udyapan can be performed at home if you have a consecrated Shivalinga (made of Parad, Spatika, or Clay)."
                                        },
                                        {
                                            q: "What is the significance of green bangles?",
                                            a: "Green is the color of Shravan (nature/monsoon). Married women wear green bangles and clothes to pray for their husband's long life and health."
                                        },
                                        {
                                            q: "Can I do Udyapan if I missed one Monday?",
                                            a: "If it was unintentional (illness), pray for forgiveness and complete the count next year or continue. Udyapan is best done after a successful, unbroken sequence."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Complete Shravan Fast</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Jai Bhole Nath.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Shravan Somvar Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
