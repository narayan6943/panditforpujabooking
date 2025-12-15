import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function SatyanarayanVratUdyapanPage() {
    const faqs = [
        {
            question: "How many Pandits are needed for Udyapan?",
            answer: "Traditionally, 1 main Pandit is sufficient for a household Udyapan. However, for grander ones with large Havans, 2 Pandits (one for Puja, one for Havan prompting) may be recommended."
        },
        {
            question: "Is Brahma Bhojan/feeding Brahmins mandatory?",
            answer: "Yes, feeding Brahmins is a key part of Udyapan. If you cannot effectively cook and serve at home, our Pandits can accept 'Sidha' (uncooked grains/ration) or a monetary equivalent to donate to a temple kitchen."
        },
        {
            question: "Can we do Udyapan at a temple instead of home?",
            answer: "Yes, many people in Pune prefer doing Udyapan at nearby Vishnu or Sai Baba temples. We can send our Pandit to the temple of your choice, provided the temple authorities allow private rituals."
        },
        {
            question: "How long does the Udyapan take?",
            answer: "A complete Vedic Udyapan with Havan takes approximately 3 to 4 hours. It is much longer than the regular 1.5-hour puja."
        }
    ]

    const serviceSchema = generateServiceSchema({
        name: 'Satyanarayan Vrat Udyapan Puja',
        description: 'Book verified pandit for Satyanarayan Vrat Udyapan in Pune. Complete Vedic concluding ritual with 1008 Tulsi archana and havan.',
        image: 'https://www.panditforpujabooking.com/images/satyanarayan-puja-hero.png',
        price: '3500',
        reviewCount: '150',
        ratingValue: '4.8',
        url: 'https://www.panditforpujabooking.com/puja-services/satyanarayan-vrat-udyapan'
    })

    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Udyapan?' },
        { id: 'importance', title: 'Importance' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2025' },
    ]

    return (
        <>
            <SEOHead
                title="Satyanarayan Vrat Udyapan in Pune | Complete Concluding Ritual with Expert Pandit"
                description="Book expert pandit for Satyanarayan Vrat Udyapan in Pune. Perform the sacred concluding ritual with 1008 Tulsi archana, Havan, and Brahma Bhojan. Authentic Vedic Vidhi."
                keywords="satyanarayan vrat udyapan pune, satyanarayan udyapan vidhi, udyapan puja pune, concluding satyanarayan vrat"
                canonicalUrl="https://www.panditforpujabooking.com/puja-services/satyanarayan-vrat-udyapan"
                schema={{ '@graph': [serviceSchema, faqSchema] }}
            />

            <Header />

            <main className="bg-saffron-50/30">
                <Breadcrumbs />

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/satyanarayan-puja-hero.png"
                            alt="Satyanarayan Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Sacred Vrat Conclusion</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Satyanarayan Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Complete Vedic Ritual with Verified Pandit Ji in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Satyanarayan Vrat Udyapan is the grand concluding ceremony performed after observing the monthly fasts. It involves elaborate rituals including Havan, 1008 Tulsi Archana, and Brahma Bhojan to gain the full fruits of your devotion.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Satyanarayan%20Udyapan%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    In Pune, many devout families observe the Satyanarayan Vrat on every Purnima (Full Moon) or Sankranti. According to the Skanda Purana, after successfully observing this fast for a specific period (usually 1 year or 11/21 Purnimas), one must perform the <strong>Udyapan</strong> (concluding ceremony) to express gratitude to Lord Vishnu and officially complete the vow.
                                </p>
                                <p>
                                    Unlike the regular monthly puja, the Udyapan is a more elaborate occasion. It requires stricter adherence to Vedic norms, larger offerings, and specific rituals like the <strong>Havan (Fire Lab)</strong> and <strong>1008 Tulsi Dal Archana</strong>, which are not typically part of the monthly routine.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Planning your Satyanarayan Vrat Udyapan? Our expert pandits in Pune ensure all rituals—from Kalash Sthapana to Purnahuti—are performed with precision. Samagri list provided.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🌺</span>
                                    Difference Between Regular Puja & Udyapan
                                </h2>
                                <p>
                                    While the core katha remains the same, the Udyapan is the "Grand Finale" of your vrat. It signifies the fulfillment of your sankalp (vow).
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 mb-2">Regular Monthly Puja</h4>
                                        <ul className="list-disc pl-5 text-sm mb-0">
                                            <li>Shorter duration (1-1.5 hours).</li>
                                            <li>Basic Sodashopachara Puja.</li>
                                            <li>Usually no Havan.</li>
                                            <li>Focus on Katha Shravan (listening).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-maroon-50 p-5 rounded-lg shadow-sm border border-maroon-100">
                                        <h4 className="font-bold text-maroon-800 mb-2">Udyapan Ceremony</h4>
                                        <ul className="list-disc pl-5 text-sm mb-0">
                                            <li>Longer duration (3-4 hours).</li>
                                            <li>Elaborate decorations & multiple priests.</li>
                                            <li><strong>Mandatory Havan</strong> & Purnahuti.</li>
                                            <li>Brahma Bhojan (feeding priests) & gifts.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why Perform Satyanarayan Udyapan?</h2>
                                <p>
                                    The scriptures state that a Vrat is incomplete without its formal Udyapan. Just as a seed needs water to fruit, your fasting requires Udyapan to yield full spiritual merit.
                                </p>
                                <h3>Key Spiritual Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Marks the successful completion of a sacred vow.",
                                        "Amplifies the blessings of Lord Satyanarayan (Vishnu).",
                                        "Removes obstacles in career and family life.",
                                        "Ensures prosperity and abundance of grains (Dhan-Dhanya).",
                                        "Grants Moksha and divine protection."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Udyapan Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">We follow the strict Paddhati described in the Revakhanda.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Mandap & Decoration</h3>
                                                <p className="text-gray-700">A special mandap is erected with 4 banana pillars. The altar is decorated with fresh flowers, mango leaves, and rangoli.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Ganapati & Varun Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Swasti Vachan (Peace Mantras).</li>
                                                        <li>Sankalp for Vrat completion.</li>
                                                        <li>Kalash Sthapana invoking lord Varun.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Navagraha & Ashta Dikpal</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worship of 9 Planets (Navagraha).</li>
                                                        <li>Worship of 8 Directional Guardians (Dikpals).</li>
                                                        <li>Invoking Panch Lokpal.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Main Satyanarayan Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Prana Pratishtha of Lord Satyanarayan idol.</li>
                                                        <li>Panchamrit Abhishek.</li>
                                                        <li><strong>1008 Tulsi Archana</strong> (offering basil leaves).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Havan & Visarjan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Agni Sthapana.</li>
                                                        <li>Offerings of 'Charu' (cooked rice & ghee).</li>
                                                        <li>Reciting 5 chapters of Katha.</li>
                                                        <li>Purnahuti & Aashirwad.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Udyapan Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    The Udyapan requires significantly more items than the regular puja. We bring the specialized puja samagri (kalash, dhoti, sacred threads etc.).
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> We Can Bring
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Satyanarayan Photo/Idol.</li>
                                            <li>All Havan Samagri (Wood, Ghee, Til).</li>
                                            <li>Kumkum, Haldi, Abir, Gulal.</li>
                                            <li>Moli (Sacred Red Thread), Janeu.</li>
                                            <li>Supari (Betel Nuts) - 50+ pcs.</li>
                                            <li>Camphor, Dhoop, Agarbatti.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> You Arrange
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li><strong>Tulsi Leaves (1000+)</strong> - Very Important.</li>
                                            <li>Bananas (4 pillars for mandap) & Fruits.</li>
                                            <li>Panchamrit (Milk, Curd, Ghee, Honey, Sugar).</li>
                                            <li>Sweets (Prasad - Sheera is must).</li>
                                            <li>Flowers (Garlands & loose).</li>
                                            <li>40 Betel Leaves (Paan ke patte).</li>
                                            <li>Coconut (5-7 pcs).</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurats for Udyapan in 2025-26</h2>
                                <p>
                                    Udyapan is best performed on a <strong>Purnima (Full Moon)</strong> day, or on the same tithi you observed the fast (e.g., Ekadashi or Sankranti).
                                </p>
                                <div className="bg-gold-50 p-4 rounded text-center mb-6">
                                    <p className="m-0 font-medium">Udyapan should ideally be done in the morning (roughly 3-4 hour ritual).</p>
                                </div>
                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
                                        <thead className="bg-maroon-900 text-gold-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Month</th>
                                                <th className="py-3 px-4 text-left">Purnima Date</th>
                                                <th className="py-3 px-4 text-left">Significance</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                ["January 2025", "13 Jan (Paush Purnima)", "Highly Auspicious"],
                                                ["February 2025", "12 Feb (Magha Purnima)", "Good for donations"],
                                                ["March 2025", "14 March (Holi/Phalguna)", "Spring Festival"],
                                                ["April 2025", "12 April (Chaitra Purnima)", "Hanuman Jayanti"],
                                                ["May 2025", "12 May (Vaishakh Purnima)", "Buddha Purnima"],
                                                ["June 2025", "11 June (Jyeshtha Purnima)", "Vat Purnima"]
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-semibold text-maroon-700">{row[0]}</td>
                                                    <td className="py-3 px-4">{row[1]}</td>
                                                    <td className="py-3 px-4">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Why Book Udyapan with Us?</h2>
                                        <p className="text-gold-100 mb-6">Udyapan is a once-in-a-period event. Don't compromise with shortcuts. Our verified Guruji ensures the dignity of your vrat.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Vedic Ritual Specialists (North & South Indian styles available)",
                                                "Complete Havan Setup & Cleaning included",
                                                "Transparent Pricing - No hidden dakshina demands",
                                                "Punctual & Professionally dressed Pandits",
                                                "Samagri brought by us (optional)"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Satyanarayan Udyapan</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹3,500 <span className="text-sm font-normal text-gray-300">onwards</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Price includes Pandit Dakshina + Travel. Samagri cost extra.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Get Custom Quote on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.question}</h3>
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan Today</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Sacred conclusion to your vows</p>

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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                        <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City Area (Pune)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Kothrud, Baner, Wakad" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2" href="tel:+918446272142">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Our Pandit will call you within 30 mins to confirm details.
                                    </p>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Prefer to chat?</p>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Satyanarayan%20Udyapan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Devotee Experiences</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"We were looking for a knowledgeable pandit for our Udyapan in Baner. The detailed Tulsi Archana and Havan were performed so beautifully. Felt very blessed."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">MR</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Mrs. Rane</p>
                                                <p className="text-[10px] text-gray-500">Baner, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"Very professional service. Guruji explained the meaning of Udyapan vidhi which made it meaningful for our kids too."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">SK</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Suresh Kulkarni</p>
                                                <p className="text-[10px] text-gray-500">Kothrud</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="satyanarayan-vrat-udyapan"
                        category="vrat-udyapan"
                        maxItems={4}
                    />
                </div>

                <PujaServiceLocations pujaName="Satyanarayan Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
