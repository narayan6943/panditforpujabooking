import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KaalSarpDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kaal Sarp Dosh Shanti Puja',
        description: 'Book proven Kaal Sarp Dosh Shanti Puja in Pune (or guidance for Trimbakeshwar). Relief from Rahu-Ketu axis dosha. Complete Vedic ritual.',
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
        areaServed: [
            {
                '@type': 'City',
                name: 'Pune',
            },
            {
                '@type': 'City',
                name: 'Trimbakeshwar',
            }
        ],
        offers: {
            '@type': 'Offer',
            price: '5100',
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
                <title>Kaal Sarp Dosh Shanti Puja in Pune | Rahu Ketu Nivaran</title>
                <meta name="description" content="Book expert pandit for Kaal Sarp Dosh Shanti Puja in Pune. Resolve Naga Dosh/Sarp Dosh with authentic Rudra Abhishek and Rahu-Ketu Shanti." />
                <meta name="keywords" content="kaal sarp dosh puja pune, kaal sarp yog nivaran, rahu ketu shanti, nag dosh puja, pandit for kaal sarp" />
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
                            <span className="text-maroon-900 font-semibold">Kaal Sarp Dosh Shanti</span>
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
                            alt="Kaal Sarp Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Moksha from Naga Dosha</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Kaal Sarp Dosh Shanti <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Liberate Yourself from Rahu-Ketu's Grip</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                When all 7 planets are trapped between Rahu and Ketu, it creates Kaal Sarp Yog, leading to diverse life struggles. Our specialized Shanti Puja invokes Lord Shiva and Nag Devta to neutralize this intense energy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Kaal Sarp Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kaal%20Sarp%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Kaal Sarp Dosh</strong> is considered one of the most challenging conditions in Vedic Astrology. It occurs when all seven planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) are hemmed between the axis of <strong>Rahu</strong> (Dragon's Head) and <strong>Ketu</strong> (Dragon's Tail).
                                </p>
                                <p>
                                    This "Yoga" can cause struggles in every aspect of life – health, wealth, career, and marriage – despite hard work and talent. However, contrary to popular fear, this dosha can also lead to great spiritual rise if propitiated correctly through worship of <strong>Lord Shiva</strong> (Mahakala) and the <strong>Serpent Gods</strong>.
                                </p>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🐍</span>
                                    Types of Kaal Sarp Dosh
                                </h2>
                                <p>
                                    There are 12 main types (Anant, Kulik, Vasuki, Shankhpal, etc.) depending on the position of Rahu/Ketu. The puja vidhi varies slightly for each, but the core pacification remains the same.
                                </p>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Symptoms & Benefits</h2>
                                <p>
                                    Common symptoms include bad dreams about snakes, feeling stuck in life, betrayal by friends, and chronic health issues.
                                </p>
                                <h3>Puja Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Clears obstacles in career progression.",
                                        "Resolves marriage delays and family discord.",
                                        "Removes fear of snakes and nightmares.",
                                        "Improves health and vitality.",
                                        "Transforms the energy into specific 'Raja Yoga' if favorable."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Kaal Sarp Shanti Vidhi</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Intricate ritual involving Rudra & Nag Pujan.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Ganpati & Punyahavachan</h3>
                                                <p className="text-gray-700">Purification of the body and place.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Rahu-Ketu & Nag Pujan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worship of Silver/Lead Nag-Nagin pair.</li>
                                                        <li>Offerings of Milk, Sesame, and Flowers.</li>
                                                        <li>Chanting "Om Namah Shivaya" and "Maha Mrityunjaya Mantra".</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Rudrabhishek</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Bathing the Shiva Linga implies cooling the fiery energy of Rahu.</li>
                                                        <li>Using milk, curd, honey, and gangajal.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Havan & Balidan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Special Havan for Rahu and Ketu.</li>
                                                        <li>Purnahuti.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Visarjan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Leaving the Nag-Nagin pair in flowing water (River) to release the dosha.</li>
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
                                    Items like Lead Naga images are specific to this puja.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🗝️</span> Critical Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Silver/Lead Nag Nagin Pair.</li>
                                            <li>Black Til (Sesame) & Urad.</li>
                                            <li>Blue/Black Cloth.</li>
                                            <li>Rudraksha Mala.</li>
                                            <li>Shiva Linga (for Abhishekam).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🥛</span> Liquids & Others
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Cow Milk & Ghee.</li>
                                            <li>Honey, Curd, Sugar.</li>
                                            <li>Bilva Patra (Bel leaves).</li>
                                            <li>Dhatura/Akda flowers (for Shiva).</li>
                                            <li>Coconut.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Pune or Trimbakeshwar?</h2>
                                        <p className="text-gold-100 mb-6">While Trimbakeshwar is the main Kshetra for this, we perform the same Vedic vidhi in Pune for those who cannot travel, with effective results.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Option to book Pandit for Pune home visit",
                                                "Option to book Pandit at Trimbakeshwar (Nashik)",
                                                "Complete guidance on Niyam (rules)",
                                                "Provision of Nag-Nagin Murti",
                                                "Post-puja support"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Kaal Sarp Puja</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹5,100 <span className="text-sm font-normal text-gray-300">Pune</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Trimbakeshwar bookings also available.</p>
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
                                            q: "Can we get married if we have Kaal Sarp Dosh?",
                                            a: "Yes, but it is highly recommended to perform the Shanti Puja before marriage to avoid misunderstandings and health issues in the relationship."
                                        },
                                        {
                                            q: "Is it necessary to go to Trimbakeshwar?",
                                            a: "Trimbakeshwar is a Jyotirlinga and highly auspicious. However, if health or time doesn't permit, performing it at a Shiva temple or home in Pune with a qualified Pandit is also effective."
                                        },
                                        {
                                            q: "How many times should we do this puja?",
                                            a: "Usually, it is done once. However, some astrologers recommend repeating it after 12 years if the symptoms persist."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Kaal Sarp Shanti</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Remove the obstacles</p>

                                
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"I was skeptical but my parents insisted. The Pandit ji explained the science behind it. Since the puja, I feel much lighter and my job hunt was successful."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">VN</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Varun N.</p>
                                                <p className="text-[10px] text-gray-500">Moshi, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Kaal Sarp Dosh Shanti Puja" />

                <Footer />
            </main>
        </>
    )
}
