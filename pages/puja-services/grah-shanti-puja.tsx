import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GrahShantiPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Grah Shanti Puja',
        description: 'Book verified pandit for Grah Shanti Puja in Pune. Pacify 9 planets along with Mangal, Rahu, Kettle. Includes Havan and Daan.',
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
            price: '3100',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Grah Shanti Puja in Pune | Pacify Planets for Wedding & Peace</title>
                <meta name="description" content="Book expert pandit for Grah Shanti Puja in Pune. Essential ritual before wedding or auspicious events to remove planetary obstacles. Complete Navagraha Vidhi." />
                <meta name="keywords" content="grah shanti puja pune, navagraha shanti, pre-wedding grah shanti, planetary peace puja, pandit for grah shanti" />
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
                            <span className="text-maroon-900 font-semibold">Grah Shanti Puja</span>
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
                            src="/images/grah-shanti-hero.png"
                            alt="Grah Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Planetary Harmony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Grah Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Remove Obstacles Before Marriage & Events</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Planets play a crucial role in the success of any endeavor. Grah Shanti is a vital pre-wedding ritual to ensure a smooth ceremony and happy married life by pacifying the 9 Grahas (Planets).
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Grah Shanti
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Grah%20Shanti%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Grah Shanti Puja</strong> is centered around worshipping the <em>Navagrahas</em> (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu). According to Vedic astrology, the position of these planets at the time of birth and their current transit affects our life events.
                                </p>
                                <p>
                                    This puja is traditionally performed 1 or 2 days before a wedding (Shubh Vivah), Munj (Thread Ceremony), or Griha Pravesh. It acts as a spiritual shield, ensuring that no planetary malefic effects cause hindrances (Vighna) during the auspicious event.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Our packages include "Havan" which invokes Agni (Fire God) to carry your prayers to the planets. This amplifies the effect of the Shanti significantly.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🪐</span>
                                    Difference from Navagraha Shanti?
                                </h2>
                                <p>
                                    While similar, <strong>Grah Shanti</strong> is usually an event-based ritual (like pre-wedding), whereas <strong>Navagraha Shanti</strong> can be done anytime to address specific horoscope doshas (like Sade Sati).
                                </p>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why Perform Grah Shanti?</h2>
                                <p>
                                    It is believed that even the gods are subject to the influence of planets. Hence, seeking their favor is wise.
                                </p>
                                <h3>Key Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Removes obstacles in marriage or thread ceremony.",
                                        "Promotes harmony between the couple/family.",
                                        "Reduces mental stress and anxiety.",
                                        "Mitigates the effects of bad planetary transits.",
                                        "Ensures successful completion of the main event."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Grah Shanti Vidhi (Steps)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Usually takes 2 to 2.5 hours.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Punyahavachan & Matruka Pujan</h3>
                                                <p className="text-gray-700">Purification mantras and worship of the Divine Mothers (Matrukas) to bless the event.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Navagraha Sthapana</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Creating the Mandal with colored rice/grains.</li>
                                                        <li>Installing Suparis representing 9 planets.</li>
                                                        <li>Invoking the planetary deities.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Navagraha Havan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Using specific sticks (Samidha) for each planet (e.g., Aak for Sun, Palash for Moon).</li>
                                                        <li>Giving 108 or 28 Ahutis for each planet.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Purnahuti & Halad Chadhavne</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Final offering to Agni.</li>
                                                        <li>(For weddings) Application of Turmeric (Haldi) often follows this puja.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Dakshina & Daan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Donating items related to specific planets (e.g., Black Urad for Saturn).</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Grah Shanti Samagri</h2>
                                <p className="text-gray-700 mb-6">
                                    The most critical items are the Navadhanya (9 Grains) and the Samidha (9 types of wood).
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> We Provide
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Complete Puja Samagri Kit.</li>
                                            <li><strong>Navadhanya Packet</strong> (Wheat, Rice, Moong, etc.).</li>
                                            <li><strong>Navagraha Samidha</strong> (9 wood types).</li>
                                            <li>Two Coconuts, Supari (25+).</li>
                                            <li>Red & White Cloth.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> You Arrange
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Flowers (Garlands, loose).</li>
                                            <li>5 Fruits (Banana etc.).</li>
                                            <li>Sweets (Prasad - Pedha).</li>
                                            <li>Gur (Jaggery) & Ghee.</li>
                                            <li>Durva (Grass).</li>
                                            <li>Plates & Bowls.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Peace of Mind for Your Event</h2>
                                        <p className="text-gold-100 mb-6">Weddings and functions are stressful. Our punctual Pandits handle the spiritual aspect perfectly, so you can focus on guests.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Quick & Efficient Vidhi (2 hours)",
                                                "No hassles with Samagri shopping",
                                                "Explanation of rituals in Hindi/Marathi/English",
                                                "Pocket-friendly Dakshina",
                                                "Available at short notice"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Grah Shanti (Wedding)</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹3,100 <span className="text-sm font-normal text-gray-300">Basic</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Price varies with Samagri inclusion.</p>
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
                                            q: "Is it done at the Groom's place or Bride's place?",
                                            a: "Grah Shanti is usually performed at both the Groom's and Bride's respective homes before the wedding ceremonies begin."
                                        },
                                        {
                                            q: "Can we combine this with Haldi ceremony?",
                                            a: "Yes, typically Grah Shanti is done in the morning, followed by the Mandap Muhurat and then the Haldi application."
                                        },
                                        {
                                            q: "Is Havan mandatory for Grah Shanti?",
                                            a: "Yes, Havan is the medium to feed the planetary deities. Without Havan, the Shanti is considered incomplete."
                                        },
                                        {
                                            q: "What if we don't know our exact birth time?",
                                            a: "In that case, the Pandit ji can perform the puja using the 'Naam Rashi' (Name Zodiac) or a general shanti Sankalp."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Grah Shanti</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">For Wedding/Munj/Event</p>

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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Area (Pune)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Kothrud, Kalyani Nagar" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        We will confirm Pandit availability shortly.
                                    </p>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Need help?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Grah%20Shanti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"Booked for my son's wedding in Magarpatta. The Guruji came on time and explained everything so well in Hindi. Very nice experience."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">AR</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Amit Rao</p>
                                                <p className="text-[10px] text-gray-500">Magarpatta City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Grah Shanti Puja" />

                <Footer />
            </main>
        </>
    )
}
