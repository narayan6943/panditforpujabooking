import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function EngagementPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Engagement Puja (Sagai)',
        description: 'Book Pandit for Engagement Ceremony (Sagai/Roka) in Pune. Authentic Vedic Ring Ceremony rituals for a blessed new beginning.',
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
            price: '3500',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Engagement Puja in Pune | Sagai & Ring Ceremony Pandit</title>
                <meta name="description" content="Book expert Pandit for Engagement (Sagai) Puja in Pune. Vedic rituals for Ring Ceremony, Sakharpuda, and Roka to bless the couple's new journey." />
                <meta name="keywords" content="engagement puja pune, sagai pandit, ring ceremony puja, sakharpuda guruji, roka ceremony pandit" />
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
                            <span className="text-maroon-900 font-semibold">Engagement Puja</span>
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
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Engagement Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Shubh Sagai Sanskar</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Engagement Ceremony Puja <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">A Sacred Promise</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Start your journey towards marriage with the blessings of Lord Ganesha and the elders. Authenticity and tradition in every mantra.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Sagai Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Engagement%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Engagement (Sagai / Sakharpuda / Roka)</strong> is the formal agreement of marriage between two families. It is not just an exchange of rings but a religious commitment (Vogdan) made in the presence of Gods.
                                </p>
                                <p>
                                    The ceremony usually begins with Ganesh Puja to remove obstacles in the upcoming wedding planning, followed by Varuna Puja (Kalash) and the exchange of gifts and sweets. Our Pandits ensure a joyous and traditional atmosphere.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        We customize the puja based on your tradition: Ring Ceremony, Sakharpuda (Maharashtrian style), or Roka (North Indian style).
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Significance</h2>
                                <p>
                                    It marks the "Vak-Daan" - the word of honor given by the parents of the bride and groom to each other, securing the alliance.
                                </p>
                                <h3>Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Divine blessings for the courtship period.",
                                        "Removal of obstacles (Vighnas) for the upcoming wedding.",
                                        "Formalization of the relationship.",
                                        "Bonding of two families.",
                                        "Peace and harmony in future life."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Ceremony Vidhi</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Typical steps (Customizable).</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Ganesh Puja</h3>
                                                <p className="text-gray-700">Invoking Ganpati to ensure the path to marriage is smooth.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Kalash Pujan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worshipping the water pot as a witness (Sakshi) to the commitment.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Sankalp & Vagdan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Fathers of bride and groom exchange vows of alliance (cocoanut/sugar).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Ring Exchange</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>The couple exchanges rings followed by blessings (Ashirwad).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Sakharpuda / Tilak</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Feeding sugar (Sakhar) or applying Tilak depending on custom.</li>
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
                                    Simple preparation compared to marriage.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🕉️</span> Puja Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Idol/Photo of Ganesh.</li>
                                            <li>Kalash & Coconut.</li>
                                            <li>Turmeric (Haldi) & Kumkum.</li>
                                            <li>Flowers & Garlands.</li>
                                            <li>Sweets (Pedha/Laddoo).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🎁</span> Ceremony Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Rings (for exchange).</li>
                                            <li>Gifts/Clothes for couple.</li>
                                            <li>Sugar cones (Sakhar Puda).</li>
                                            <li>Dry fruits.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Start on a Good Note</h2>
                                        <p className="text-gold-100 mb-6">A well-conducted Engagement Puja sets the right tone for the wedding. Our Pandits are professional, soft-spoken, and manage the ceremony efficiently, whether at home or a hall.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Knowledge of regional customs",
                                                "Timely completion",
                                                "Flexible for Hall/Home",
                                                "Clear audio/mantra chanting",
                                                "Help with Vidhi list"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Engagement</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹3,500 <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Standard 1-2 hour ceremony.</p>
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
                                            q: "Is Engagement Puja same as Roka?",
                                            a: "Roka is a simpler, initial confirmation often done earlier. Engagement (Sagai) is more formal with ring exchange. We can conduct pujas for both stages."
                                        },
                                        {
                                            q: "Do we need a Muhurat for engagement?",
                                            a: "Yes, checking a Shubh Muhurat (auspicious time) is highly recommended for such a major life commitment. Why start something new at a bad time?"
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Engagement Inquiry</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Blessings for New Life</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                        <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Baner" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Confidential & Professional.
                                    </p>
                                </form>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"We booked the pandit for our Sakharpuda. He arrived on time and conducted the puja very nicely in Marathi. The family elders were very happy."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">SP</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Snehal P.</p>
                                                <p className="text-[10px] text-gray-500">Kothrud, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Engagement Puja" />

                <Footer />
            </main>
        </>
    )
}
