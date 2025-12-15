import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MahaMrityunjayaHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Maha Mrityunjaya Havan',
        description: 'Book Maha Mrityunjaya Havan in Pune for health and longevity. Powerful Lord Shiva Fire Ritual to conquer fear of death and diseases.',
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
            price: '5500',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Maha Mrityunjaya Havan in Pune | For Health & Longevity</title>
                <meta name="description" content="Book expert pandit for Maha Mrityunjaya Havan in Pune. The ultimate Sanjeevani Havan for recovering from illness, avoiding accidents, and long life." />
                <meta name="keywords" content="maha mrityunjaya havan pune, rudra havan, health puja, pandit for mrityunjaya havan, shiva fire ritual" />
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
                            <span className="text-maroon-900 font-semibold">Maha Mrityunjaya Havan</span>
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
                            src="/images/rudrabhishek-puja-hero.png"
                            alt="Maha Mrityunjaya Havan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Great victory over death</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Maha Mrityunjaya Havan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Divine Protection for Health</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Shiva (Tryambakam) through the sacred fire to heal chronic ailments, prevent untimely mishaps, and bestow immortality (longevity). This is the most powerful Havan for health.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Health Havan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Maha%20Mrityunjaya%20Havan" target="_blank" rel="noopener noreferrer">
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
                                    The <strong>Maha Mrityunjaya Mantra</strong> (Om Tryambakam Yajamahe...) is known as the Moksha Mantra of Lord Shiva. When chanted while offering Ahutis of 'Durva' (Grass) and 'Amrita' (Guduchi/Giloy) into the Havan, it generates immense healing vibrations.
                                </p>
                                <p>
                                    This Havan is essentially a life-saving ritual. It is often performed for individuals suffering from critical illness, facing surgery, or having 'Markesh' (death-inflicting) period in their horoscope.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        "Mrita-Sanjeevani Vidya": This ritual is believed to have the power to rejuvenate even those on the brink of death.
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">When to Perform?</h2>
                                <ul>
                                    <li>On birthdays (Janma Nakshatra) for Ayushya Vriddhi (Longevity).</li>
                                    <li>Before major operations or surgeries.</li>
                                    <li>During prolonged illness.</li>
                                    <li>To remove fear of accidents or supernatural disturbances.</li>
                                </ul>
                                <h3>Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Creates a protective shield (Kavach).",
                                        "Rapid recovery from diseases.",
                                        "Mental peace and freedom from anxiety.",
                                        "Spiritual upliftment and Moksha.",
                                        "Family welfare."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Ritual Procedure</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Intense Chanting & Havan.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Rudra Kalash Sthapana</h3>
                                                <p className="text-gray-700">Installing the Kalash representing Lord Shiva with water, leaves, and coconut.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Mantra Jaap</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Chanting the Maha Mrityunjaya Mantra (e.g., 108, 1008, or more counts).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Havan (Amrita Ahuti)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Offering mixture of Ghee, Milk, and Durva grass.</li>
                                                        <li>Offering 'Udumbara' (Fig) sticks which represent healing.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Sweets Offering</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Offering 'Payasam' (Kheer) to the fire.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Aarti & Ashirwad</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>The Pandits bless the Yajman with the energized flowers and water.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Maha Mrityunjaya Samagri</h2>
                                <p className="text-gray-700 mb-6">
                                    Requires items with cooling properties.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🌿</span> Special Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Durva Grass (large quantity).</li>
                                            <li>Giloy (Amrita) sticks.</li>
                                            <li>Udumbara Samidha.</li>
                                            <li>Cow Milk & Ghee.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🍎</span> Fruits & Flowers
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>White Flowers (Mogra, Juhi).</li>
                                            <li>Bel Patra (Bilva leaves) - Essential.</li>
                                            <li>Fruits (Banana, Apple).</li>
                                            <li>Coconut water.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Dedicated Healing Prayers</h2>
                                        <p className="text-gold-100 mb-6">Our Pandit ji performs this Havan with extreme purity and focus, which is crucial for health rituals.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Correct Svar (Sound) of Mantra",
                                                "Use of pure ingredients",
                                                "Emotional support and counseling",
                                                "Sankalp for specific health issues",
                                                "Punctual and professional"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Healing Havan</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹5,500 <span className="text-sm font-normal text-gray-300">approx</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Depends on number of Jaap counts.</p>
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
                                            q: "Can we do this for someone in the hospital?",
                                            a: "Yes, the Sankalp can be taken by a family member (blood relation) on behalf of the patient, and the Havan can be done at home."
                                        },
                                        {
                                            q: "How many chants are recommended?",
                                            a: "Usually, a minimum of 1008 chants (taking about 3-4 hours) is recommended for health issues. For critical cases, 1.25 Lakh chants (done over multiple days) are advised."
                                        },
                                        {
                                            q: "What is the best day?",
                                            a: "Mondays, Pradosh, Shivratri, or the person's Janma Nakshatra day are best."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Puja</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">For Health & Longevity</p>

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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name (Beneficiary)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="For whom?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location (Pune)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Kothrud" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Urgent bookings available.
                                    </p>
                                </form>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"My father was in ICU. We requested this Havan at our home. Miraculously, his parameters started improving the very next day. Forever indebted to Lord Shiva."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">AK</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Anita K.</p>
                                                <p className="text-[10px] text-gray-500">Baner, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Maha Mrityunjaya Havan" />

                <Footer />
            </main>
        </>
    )
}
