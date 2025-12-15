import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShukravarLakshmiVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shukravar Lakshmi Vrat Udyapan',
        description: 'Book Pandit for Vaibhav Lakshmi Vrat Udyapan in Pune. Authentic Friday Pooja for wealth and prosperity.',
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
            price: '2100',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Shukravar Lakshmi Vrat Udyapan in Pune | Vaibhav Lakshmi Puja</title>
                <meta name="description" content="Book expert Pandit for Vaibhav Lakshmi Vrat Udyapan (Shukravar) in Pune. Complete Vidhi with book distribution and Kheer prasad." />
                <meta name="keywords" content="shukravar lakshmi vrat udyapan pune, vaibhav lakshmi udyapan, friday fast udyapan, wealth puja pandit" />
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
                            <span className="text-maroon-900 font-semibold">Vaibhav Lakshmi Udyapan</span>
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
                            src="/images/navratri-hero.png"
                            alt="Shukravar Lakshmi Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Wealth & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vaibhav Lakshmi Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Invite Abundance Home</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Complete your 11 or 21 Friday fasts with a devoted Udyapan ceremony. Seek the eternal blessings of Goddess Mahalakshmi.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vaibhav%20Lakshmi%20Udyapan" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Vaibhav Lakshmi Vrat</strong> is considered one of the most effective and strictly followed fasts among Hindu women (and men) to invite prosperity, wealth, and happiness into the household.
                                </p>
                                <p>
                                    Observed on Fridays ('Shukravar'), this Vrat is dedicated to Goddess Lakshmi in her form of 'Vaibhav' (Grandeur). It is believed that by observing this Vrat with true faith ('Shraddha') for 11 or 21 Fridays, lost wealth is recovered, family disputes are resolved, and childless couples are blessed with progeny.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> (Closing Ceremony) is the most critical part of this Vrat. It is said that without the Udyapan and the distribution of the Vrat Katha books, the fast remains incomplete and does not yield full fruit.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-pink-50 p-8 rounded-2xl border border-pink-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Miracle Legend: Sheila's Devotion</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    A story of how a virtuous woman restored her husband's lost fortune.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Falls of Fortune</h3>
                                    <p>
                                        In a big city, there lived a woman named <strong>Sheila</strong>. She was religious, patient, and content. Her husband was also a noble man. However, due to bad company, her husband fell into vices like gambling and drinking. They lost all their wealth and status, descending into abject poverty. Even food became scarce.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Old Woman's Visit</h3>
                                    <p>
                                        One Friday, an old woman with a divine glow visited Sheila's home. Seeing Sheila's sorrow, the old woman (who was Goddess Lakshmi in disguise) explained the <strong>Vaibhav Lakshmi Vrat</strong>. She taught Sheila the exact Vidhi: placing the Sri Yantra on a small heap of rice, offering a red flower, and chanting the Lakshmi mantras.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Restoration</h3>
                                    <p>
                                        Sheila observed the fast for 21 Fridays with utmost devotion. On the 21st Friday, she performed the Udyapan, distributed 7 books to women, and offered Kheer as Prasad. Miraculously, her husband's character transformed. He gave up his bad habits, worked hard, and their wealth returned manifold. Since then, the glory of Vaibhav Lakshmi Vrat has spread across the world.
                                    </p>
                                </div>
                            </section>

                            {/* The 8 Forms of Lakshmi Section - New */}
                            <section id="forms" className="bg-white rounded-2xl p-8 border border-gold-200 shadow-sm">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Invoking the 8 Forms (Ashta Lakshmi)</h2>
                                <p className="text-gray-700 mb-6">
                                    During the Puja, one bows to the Sri Yantra and the eight forms of the Mother:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">🪙</span>
                                        <span className="font-bold text-maroon-800">Dhan Lakshmi</span>
                                        <span className="text-xs text-gray-500">Wealth</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">🐘</span>
                                        <span className="font-bold text-maroon-800">Gaja Lakshmi</span>
                                        <span className="text-xs text-gray-500">Power/Royalty</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">👶</span>
                                        <span className="font-bold text-maroon-800">Santan Lakshmi</span>
                                        <span className="text-xs text-gray-500">Progeny</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">🌾</span>
                                        <span className="font-bold text-maroon-800">Dhanya Lakshmi</span>
                                        <span className="text-xs text-gray-500">Food/Grains</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">🎓</span>
                                        <span className="font-bold text-maroon-800">Vidya Lakshmi</span>
                                        <span className="text-xs text-gray-500">Knowledge</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">⚔️</span>
                                        <span className="font-bold text-maroon-800">Veera Lakshmi</span>
                                        <span className="text-xs text-gray-500">Courage</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">✌️</span>
                                        <span className="font-bold text-maroon-800">Vijaya Lakshmi</span>
                                        <span className="text-xs text-gray-500">Victory</span>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <span className="block text-2xl mb-1">🏠</span>
                                        <span className="font-bold text-maroon-800">Adi Lakshmi</span>
                                        <span className="text-xs text-gray-500">The Primordial</span>
                                    </div>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">The 21st Friday Ceremony</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Preparation</h3>
                                        <p className="text-gray-700">
                                            Rise early on the Friday of Udyapan. Clean the entire house. Wear clean clothes (preferably red, never black). Set up the altar facing East.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Kalash & Sri Yantra Sthapana</h3>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Place a handful of rice on a wooden patla/stool.</li>
                                            <li>Place a copper Kalash with water on the rice.</li>
                                            <li>Put a steel/silver bowl on top of the Kalash. In the bowl, place a gold or silver ornament (cleaned with water/milk). If not available, use a coin. This represents Lakshmi.</li>
                                            <li>Place the <strong>Sri Yantra</strong> picture behind or near the Kalash.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. The Vrat Katha Reading</h3>
                                        <p className="text-gray-700">
                                            Light a ghee lamp. Offer kumkum, turmeric, and <strong>red flowers</strong> (Hibiscus or Rose) to the Sri Yantra and the ornament. Read the 'Vaibhav Lakshmi Vrat Katha' aloud with devotion.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Naivedya Offering</h3>
                                        <p className="text-gray-700">
                                            Offer <strong>Kheer</strong> (Sweet Rice Pudding) or Halwa to the Goddess. This Prasad is later shared with family members.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Book Distribution (Crucial Step)</h3>
                                        <p className="text-gray-700">
                                            This is the unique aspect of this Vrat. You must invite 7, 11, 21, 51, or 101 women (married or unmarried). Apply Haldi-Kumkum to their foreheads, offer them the Kheer prasad, and <strong>gift each one a 'Vaibhav Lakshmi Vrat Katha' book</strong>.
                                        </p>
                                        <div className="bg-yellow-50 p-4 rounded-lg text-sm italic mt-2 text-gray-600 border border-yellow-200">
                                            "Mother Lakshmi, I have completed my Vrat today. Please fulfill my wishes as you fulfilled Sheila's."
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Items required for the Friday Puja.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Mandatory Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Photo/Yantra:</strong> Goddess Lakshmi / Sri Yantra.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Gold/Silver Item:</strong> Or a coin for worship.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Red Flowers:</strong> Rose or Hibiscus is best.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Books:</strong> 'Vaibhav Lakshmi Vrat Katha' books (11/21/51/101).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Offering & Distribution</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Prasad:</strong> Milk, Sugar/Jaggery, Rice (for Kheer).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Suhag Items:</strong> Haldi, Kumkum, Bangles (optional).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Coconut:</strong> For the Kalash.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruits:</strong> Bananas are auspicious.</li>
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
                                            q: "Can I observe this Vrat during menstruation?",
                                            a: "No. If you are menstruating on a Friday, you must skip that week's fast and not count it. The fast should only be observed when you are physically clean."
                                        },
                                        {
                                            q: "What if I am traveling or sick?",
                                            a: "If you cannot perform the puja at home due to travel or illness, skip that Friday. Do not fast. Resume from the next week when you can perform the full Vidhi."
                                        },
                                        {
                                            q: "Can unmarried girls do this Vrat?",
                                            a: "Yes, absolutely. Unmarried girls can observe this Vrat for a good husband and a happy future married life."
                                        },
                                        {
                                            q: "Do I have to invite women to my home?",
                                            a: "Ideally, yes. But if due to space or time constraints you cannot, you can gift the books and prasad to women at a temple or their homes. The distribution of the book is the key."
                                        },
                                        {
                                            q: "Can men observe this Vrat?",
                                            a: "Yes, many men observe this Vrat for business success and debt clearance. The rules remain the same."
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
                                <p className="text-center text-gray-500 text-sm mb-6">Invite Prosperity</p>

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
                                        Jai Ma Lakshmi.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Shukravar Lakshmi Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
