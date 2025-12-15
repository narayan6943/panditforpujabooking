import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DiwaliPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Diwali Lakshmi Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book certified pandit for Diwali Lakshmi Puja in Pune. Vedic rituals for wealth and prosperity. Includes Samagri, Muhurat 2026, and Business Puja.',
        serviceType: 'Hindu Festival Puja',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Diwali Puja in Pune' },
        { id: 'about', title: 'Significance' },
        { id: 'comparison', title: 'Diwali vs Other Pujas' },
        { id: 'packages', title: 'Packages & Costs' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Diwali Puja in Pune – Lakshmi Puja 2026 | Certified Pandit</title>
                <meta name="description" content="Book certified Pandit for Diwali Lakshmi Puja in Pune. Authentic Vedic rituals for home & office. Complete Samagri, Muhurat 2026, and Kuber Puja included." />
                <meta name="keywords" content="Diwali Puja Pune, Lakshmi Puja Pandit Pune, Diwali Puja Booking, Office Diwali Puja, Laxmi Pujan Pune 2026" />
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
                            <span className="text-maroon-900 font-semibold">Diwali Puja</span>
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
                            src="/images/lakshmi-puja-hero.png"
                            alt="Diwali Lakshmi Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Festival of Lights</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Diwali Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Book Certified Pandit for Lakshmi Puja 2026</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invite unlimited wealth and prosperity this Deepavali. Authentic Vedic Lakshmi-Ganesha Puja for your home and office.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Diwali Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Diwali%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Diwali Puja in Pune</strong> is the most auspicious Vedic ritual to worship Goddess Lakshmi and Lord Ganesha, inviting unlimited wealth, prosperity, family harmony, and obstacle-free success into homes, offices, shops, and factories. Families, NRIs, IT professionals, and business owners in <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> book certified pandits for Diwali Puja to ensure Lakshmi Puja muhurat 2026 aligns perfectly with Nakshatras for maximum financial blessings.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">What is Diwali Puja?</h3>
                                <p>
                                    Diwali Puja (Deepavali Puja/Lakshmi Puja) celebrates the triumph of light over darkness, invoking Goddess Lakshmi (wealth), Lord Ganesha (obstacles removal), Kuber (treasurer), and Saraswati (knowledge). Performed on Amavasya tithi (Kartik month), it spiritually cleanses homes/offices, activates wealth corners, and sets the tone for the Vikram Samvat New Year.
                                </p>
                                <p>
                                    In Pune's festival culture – from Koregaon Park's elite celebrations to Hinjewadi's corporate Lakshmi Pujas – this ritual prevents financial losses, health issues, and relationship discord. Certified pandits chant 108 Lakshmi mantras, perform 51-ahuti homa, and install Shri Yantra for 12-month prosperity protection.
                                </p>
                            </section>

                            {/* Comparisons */}
                            <section id="comparison" className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Diwali Puja vs Lakshmi Puja vs Dhanteras Puja</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-50 text-maroon-900">
                                            <tr>
                                                <th className="p-3 border-b">Ritual</th>
                                                <th className="p-3 border-b">Date</th>
                                                <th className="p-3 border-b">Focus</th>
                                                <th className="p-3 border-b">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Dhanteras</td>
                                                <td className="p-3">Trayodashi</td>
                                                <td className="p-3">Health, buying gold/vessels</td>
                                                <td className="p-3">1.5 hrs</td>
                                            </tr>
                                            <tr className="border-b bg-saffron-50">
                                                <td className="p-3 font-semibold">Diwali Puja</td>
                                                <td className="p-3">Amavasya</td>
                                                <td className="p-3">Lakshmi + Ganesha + Kuber</td>
                                                <td className="p-3">3-4 hrs</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-3 font-semibold">Govardhan</td>
                                                <td className="p-3">Pratipada</td>
                                                <td className="p-3">Nature gratitude</td>
                                                <td className="p-3">2 hrs</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold">Bhai Dooj</td>
                                                <td className="p-3">Dwitiya</td>
                                                <td className="p-3">Sibling protection</td>
                                                <td className="p-3">1 hr</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Packages */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Diwali Puja Cost & Packages Pune 2026</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { title: "Basic Home Lakshmi Puja", price: "₹4,200", duration: "2 hrs", desc: "Lakshmi + Ganesha + Aarti. Perfect for small families." },
                                        { title: "Standard Vedic Puja", price: "₹5,800", duration: "2.5 hrs", desc: "Includes Kuber Puja + 21-ahuti homa. Most popular." },
                                        { title: "Premium Prosperity Puja", price: "₹8,500", duration: "3.5 hrs", desc: "Yantra installation + 51-ahuti homa + Video coverage." },
                                        { title: "Business/Office Puja", price: "₹7,500", duration: "3 hrs", desc: "Office blessing, Cash register puja, and Employee prasad." },
                                        { title: "NRI Live Streaming", price: "₹10,500", duration: "3 hrs", desc: "Live zoom puja + Shri Yantra courier to USA/UK." },
                                    ].map((pkg, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                            <div>
                                                <h4 className="font-bold text-maroon-800 text-lg">{pkg.title}</h4>
                                                <p className="text-gray-600 text-sm">{pkg.desc}</p>
                                                <span className="text-xs text-gray-500">Duration: {pkg.duration}</span>
                                            </div>
                                            <div className="text-center min-w-[120px]">
                                                <div className="text-2xl font-bold text-saffron-600">{pkg.price}</div>
                                                <Button size="sm" variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* GST extra. Includes Samagri, Dakshina, and Travel (up to 20km).</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Diwali Puja Samagri List (Pandit Brings Everything)</h2>
                                <p className="text-sm text-gray-700 mb-4">We provide a 100% complete Diwali Samagri kit. You just need to keep the space clean.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                    <div className="bg-maroon-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-maroon-800 border-b border-maroon-200 pb-2 mb-2">Pandit Kit Contains</h4>
                                        <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                                            <li>Lakshmi-Ganesha idols (clay/marble)</li>
                                            <li>Shri Yantra (copper) & Kuber Yantra</li>
                                            <li>Ghee (3L cow ghee), Samidha (50 bundles)</li>
                                            <li>Haldi, Kumkum, Chandan, Akshata</li>
                                            <li>Lotus flowers (50), Marigold garlands</li>
                                            <li>11 Brass lotas, 21 Silver diyas</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-800 border-b border-gray-200 pb-2 mb-2">Family Arrangements</h4>
                                        <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                                            <li>Clean Puja Room / Northeast corner</li>
                                            <li>Sweets (Kheer, Laddoos) for Prasad</li>
                                            <li>Fruits (Coconut, Apple, Bananas)</li>
                                            <li>Paan, Supari, Cloves</li>
                                            <li>New Account Books (for business)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Step-by-Step Diwali Puja Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li>
                                        <strong>Achaman & Sankalp:</strong> Pandit sips Ganga jal 3x and declares the Sankalp for the owner's family, stating name, gotra, and purpose of puja.
                                    </li>
                                    <li>
                                        <strong>Ganapati Puja:</strong> Invocation of Lord Ganesha with 21 modaks and durva grass to remove obstacles.
                                    </li>
                                    <li>
                                        <strong>Kalash Sthapana:</strong> Establishment of 5 Kalashas representing Lakshmi, Ganesha, Kuber, Dhanteras, and Govardhan energies.
                                    </li>
                                    <li>
                                        <strong>Lakshmi Puja (Core):</strong> 108 Lotus flower offering with "Om Shreem Hreem Kleem" mantra chanting. Includes Panchamrit abhishek of the idol.
                                    </li>
                                    <li>
                                        <strong>Kuber Puja:</strong> Activation of the North direction (wealth zone) with coins, gems, and Kuber Yantra.
                                    </li>
                                    <li>
                                        <strong>Maha Havan:</strong> Fire ritual with 51 Ahutis of ghee, til, and samidha, concluding with a Purnahuti coconut.
                                    </li>
                                    <li>
                                        <strong>Shri Yantra Prana Pratishta:</strong> Energizing the Shri Yantra for permanent wealth protection in the home/office.
                                    </li>
                                    <li>
                                        <strong>Maha Aarti & Prasad:</strong> Final 21-diya Aarti and distribution of sanctified Kheer prasad to all.
                                    </li>
                                </ol>
                            </section>


                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Diwali Lakshmi Puja Muhurat 2026 (Pune)</h2>
                                <p><strong>Date:</strong> October 27, 2026 (Tuesday) - Kartik Amavasya</p>
                                <div className="overflow-x-auto not-prose">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-900 text-white">
                                            <tr>
                                                <th className="p-3">Time Slot</th>
                                                <th className="p-3">Timing</th>
                                                <th className="p-3">Ideal For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3 font-semibold">Early Morning</td>
                                                <td className="p-3">5:45 - 7:15 AM</td>
                                                <td className="p-3">Homes (Wakad/Baner) - Avoid Traffic</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-3 font-semibold">Morning Office</td>
                                                <td className="p-3">9:30 - 11:00 AM</td>
                                                <td className="p-3">Offices/Shops (Hinjewadi/Camp)</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-3 font-semibold">Evening Pradosh</td>
                                                <td className="p-3">6:45 - 8:30 PM</td>
                                                <td className="p-3">Main Lakshmi Puja (Families)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm mt-2"><strong>Nakshatra:</strong> Swati | <strong>Yoga:</strong> Siddha | <strong>Avoid Rahu Kaal:</strong> 7:30 - 9:00 AM</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Why Book Our Diwali Puja Pandits in Pune?</h3>
                                <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>15+ Years Experience:</strong> Authentic Vedic knowledge.</li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>Punctual:</strong> We handle festival traffic to be on time.</li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>Language:</strong> Marathi, Hindi, English, Telugu available.</li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>Complete Kit:</strong> Zero stress for your family.</li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>Post-Puja Report:</strong> 15 prosperity tips included.</li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2">✅</span> <strong>NRI Special:</strong> Live streaming and Yantra shipping.</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Diwali Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Best time for Diwali Puja 2026?", a: "Oct 27, 2026. Evening Muhurat 6:45-8:30 PM is best for families." },
                                        { q: "Does Pandit provide samagri?", a: "Yes, our packages include 100% complete samagri including idols, flowers, and ghee." },
                                        { q: "Do you do office pujas?", a: "Yes, we cover offices in Hinjewadi, Kharadi, and shops in Camp/Pimpri." },
                                        { q: "Can we customize the puja?", a: "Absolutely. You can add Govardhan Puja, Kuber Yantra, or specific family rituals." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Lakshmi Aayengi, Ganesha Laayenge!</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Secure your slot for the year's most powerful prosperity ritual.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Limited slots available for October 2026. Book now to avoid disappointment.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Diwali Puja</Button>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

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
                                </div>

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Lakshmi Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Wealth & Prosperity Rituals</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Diwali%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Diwali Puja" />
            <Footer />
        </>
    )
}
