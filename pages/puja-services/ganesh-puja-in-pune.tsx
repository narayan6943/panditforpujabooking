import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function GaneshPujaPage() {
    // 1. Service Schema
    const baseServiceSchema = generateServiceSchema({
        name: 'Ganesh Puja',
        description: 'Book verified pandit for Ganesh Puja in Pune. Authentic Vedic rituals for success, wisdom, and peace. Complete samagri included.',
        price: '2500', // Assumed base price for Ganesh Puja
        reviewCount: '1200', // Assumed high volume
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/ganesh-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/ganesh-puja-hero.jpg'
    })

    const serviceSchema = {
        ...baseServiceSchema,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Ganesh Puja Packages',
            itemListElement: [
                {
                    '@type': 'Offer',
                    name: 'Daily / Weekly Ganesh Puja',
                    description: 'Short, simple puja at home or office altar.',
                },
                {
                    '@type': 'Offer',
                    name: 'Sankashti Ganesh Puja',
                    description: 'Done on Sankashti Chaturthi with specific vrat and moonrise aarti.',
                },
                {
                    '@type': 'Offer',
                    name: 'Ganesh Chaturthi Puja and Sthapana',
                    description: 'Idol sthapana, pran-pratishtha, full shodashopachara puja for 1–10 days.',
                },
                {
                    '@type': 'Offer',
                    name: 'Special Occasion Ganesh Puja',
                    description: 'Before Griha Pravesh, Marriage Puja, Engagement Puja, office opening, etc.',
                }
            ]
        }
    }

    // 2. FAQs
    const faqs = [
        { question: "What is Ganesh Puja and why is it done?", answer: "Ganesh Puja is the worship of Lord Ganesha for removal of obstacles, success in new beginnings, and blessings of wisdom and prosperity." },
        { question: "How long does a typical Ganesh Puja take?", answer: "A standard home or office Ganesh Puja usually takes about 60–90 minutes. Festival or combined pujas may take 2–3 hours." },
        { question: "Is Ganesh Puja helpful for career and studies?", answer: "Yes, Lord Ganesha is associated with wisdom, making it strongly recommended for students and professionals to improve focus and confidence." },
        { question: "Do you provide Ganesh Puja samagri?", answer: "Yes, pandits bring core samagri; we share a small list of fresh items (flowers, fruits, sweets) for you to arrange." },
        { question: "Can Ganesh Puja be done in a rented flat or office?", answer: "Yes, it benefits the people living or working there regardless of ownership." },
        { question: "What is the best day to perform Ganesh Puja?", answer: "Ganesh Chaturthi, Sankashti Chaturthi, and Wednesdays/Mondays are very auspicious. Any shubh muhurat can also be chosen." },
        { question: "Can Ganesh Puja be combined with other pujas?", answer: "Yes, it is often performed at the beginning of Griha Pravesh, Marriage Puja, or Vastu Shanti." },
        { question: "Do you offer Ganesh Puja outside Pune?", answer: "Yes, we are expanding to Mumbai, Bengaluru, Delhi-NCR, etc. Confirm availability at booking." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Ganesh Puja?' },
        { id: 'importance', title: 'Importance' },
        { id: 'types', title: 'Types of Puja' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <SEOHead
                title="Ganesh Puja in Pune | Perform Auspicious Ganesh Puja with Certified Pandit Ji"
                description="Book verified pandit for Ganesh Puja in Pune. Authentic Vedic rituals for success, wisdom, and peace. Complete samagri and muhurat guidance provided."
                keywords="ganesh puja pune, book pandit for ganesh puja, ganesh chaturthi puja, ganpati puja pune"
                canonicalUrl="https://panditforpujabooking.com/puja-services/ganesh-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Ganesh Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Success & Wisdom</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ganesh Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Perform Auspicious Puja with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Ganesh Puja is the auspicious worship of Lord Ganesha, the remover of obstacles, performed for success, wisdom, and peace in family and professional life.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Ganesh Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    Ganesh Puja is the auspicious worship of Lord Ganesha, the remover of obstacles and lord of new beginnings, performed for success, wisdom, and peace in family and professional life. In Pune, from premium homes in Kothrud and Baner to IT hubs like Wakad, Hinjewadi, Kharadi, and Hadapsar, families, entrepreneurs, and NRIs regularly book Ganesh Puja for important milestones and festivals. With <strong>PanditforPujaBooking.com</strong>, verified pandits with 10+ years of experience conduct fully Vedic Ganesh Puja in Pune, bringing complete samagri and explaining every step clearly for your family.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Looking to book an experienced pandit for Ganesh Puja in Pune? Contact us on WhatsApp or click “Book Ganesh Puja” – samagri, muhurat guidance, and certified Vedic rituals included.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🕉️</span>
                                    What is Ganesh Puja?
                                </h2>
                                <p>
                                    Ganesh Puja is the traditional worship of Lord Ganesha, invoked before any important activity to remove obstacles and ensure a successful, peaceful beginning. The puja can be done daily, on special occasions, or during Ganesh Chaturthi and other festivals to invite wisdom, prosperity, and protection.
                                </p>
                                <p><strong>Common situations where families in Pune perform Ganesh Puja:</strong></p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Before starting new ventures, projects, or business expansions.</li>
                                    <li>At home before Griha Pravesh, marriage, exam results, or major decisions.</li>
                                    <li>On Ganesh Chaturthi and Sankashti Chaturthi as regular vrata and devotion.</li>
                                </ul>

                                <div className="bg-maroon-50 p-6 rounded-xl border border-maroon-100 text-center">
                                    <p className="font-bold text-maroon-900 text-lg mb-2">Not sure if Ganesh Puja is right for your current situation?</p>
                                    <p className="text-sm text-gray-600 mb-4">Share your concern (career, study, health, business) on WhatsApp – our pandit team will guide you.</p>
                                    <a href="https://wa.me/918446272142" target="_blank" className="inline-block bg-saffron-600 text-white px-4 py-2 rounded-md font-medium hover:bg-saffron-700 transition-colors">Chat on WhatsApp</a>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is Ganesh Puja Important?</h2>
                                <p>
                                    Lord Ganesha is revered as Vighnaharta (destroyer of obstacles), Buddhi-Prada (giver of wisdom), and Siddhi-Prada (giver of success), so invoking him ensures smoother efforts and better decision-making. Scriptures and tradition recommend Ganesh Puja before any major ceremony or venture to avoid unseen hurdles and attract good fortune.
                                </p>
                                <h3>Key reasons people prioritize Ganesh Puja:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none pl-0">
                                    {[
                                        "Removes obstacles in education, career, business, and family events.",
                                        "Brings mental clarity, stability, and confidence in important phases.",
                                        "Creates a sattvic, positive environment at home or office before new beginnings.",
                                        "Gains blessings of wisdom and good conduct for children and youth."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic mt-4 bg-gray-50 p-3 rounded border-l-2 border-gray-300">
                                    <strong>CTA:</strong> Want a smooth start for your new home, job, or business in Pune? Book Ganesh Puja with our verified pandit ji – don’t miss the Vidhi details below.
                                </p>
                            </section>

                            {/* Types of Ganesh Puja */}
                            <section id="types">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Ganesh Puja</h2>
                                <p className="text-gray-700 mb-6">Different forms of Ganesh Puja are performed depending on occasion, intensity, and family tradition.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Daily / Weekly Ganesh Puja",
                                            desc: "Short, simple puja at home or office altar. Ideal for regular blessings and removal of small day-to-day obstacles."
                                        },
                                        {
                                            title: "Sankashti Ganesh Puja",
                                            desc: "Done on Sankashti Chaturthi with specific vrat and moonrise aarti. Focused on relief from ongoing problems and fulfillment of wishes."
                                        },
                                        {
                                            title: "Ganesh Chaturthi Puja and Sthapana",
                                            desc: "Idol sthapana, pran-pratishtha, full shodashopachara puja for 1–10 days. Visarjan with proper rituals at the end of the festival."
                                        },
                                        {
                                            title: "Special Occasion Ganesh Puja",
                                            desc: "Before Griha Pravesh, Marriage Puja, Engagement Puja, office opening, exam, or big investments. Often combined with other pujas."
                                        }
                                    ].map((type, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-saffron-500 hover:shadow-lg transition-shadow">
                                            <h3 className="text-xl font-bold text-maroon-900 mb-3">{type.title}</h3>
                                            <p className="text-gray-600 text-sm">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-gray-700 italic mb-2">Need daily, festival, or special-occasion Ganesh Puja in Pune?</p>
                                    <a href="https://wa.me/918446272142" className="text-saffron-600 font-bold hover:underline">Message us your requirement – we’ll suggest the right puja type →</a>
                                </div>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Ganesh Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Our pandits follow a clear, traditional Ganesh Puja Vidhi while explaining significance in simple language.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Preparation and Shuddhi</h3>
                                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                    <li>Clean the puja area, preferably in the northeast corner or a calm space.</li>
                                                    <li>Draw rangoli and decorate the altar with a clean cloth (usually red or yellow).</li>
                                                    <li>Place the idol/photo of Lord Ganesha on a chowki facing east or north.</li>
                                                </ul>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Sankalp and Ganapati Avahan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Pandit takes sankalp in yajman’s name, gotra, address (e.g., Baner, Kothrud, Wakad, Pune) and purpose.</li>
                                                        <li>Light diya and agarbatti and invoke Lord Ganesha with mantras.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Kalash Sthapana & Shodashopachar</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Kalash filled with water, adorned with mango leaves and coconut symbolizing divine presence.</li>
                                                        <li>Sixteen-step worship (shodashopachar): asana, padya, arghya, achamana, snana, vastra, etc.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Offerings, Mantra Jaap and Aarti</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Offer durva grass, modak, fruits, and sweets; these are especially dear to Ganesha.</li>
                                                        <li>Recitation of Ganesh mantras and stotras.</li>
                                                        <li>Final aarti with family, followed by pradakshina and prasad distribution.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-saffron-50 p-4 rounded-lg text-center">
                                            <p className="font-semibold text-maroon-900">Want this complete step-by-step Ganesh Puja Vidhi conducted at your home or office in Pune?</p>
                                            <Button variant="primary" size="sm" className="mt-2" href="#booking">Book Ganesh Puja Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Summary Table */}
                            <section>
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Ganesh Puja Steps – Summary Table</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                                        <thead className="bg-maroon-50 text-maroon-900 border-b border-maroon-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left font-semibold">Step No.</th>
                                                <th className="py-3 px-4 text-left font-semibold">Ganesh Puja Step</th>
                                                <th className="py-3 px-4 text-left font-semibold">Brief Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                                            {[
                                                ["1", "Cleaning & Decoration", "Prepare space, rangoli, altar cloth"],
                                                ["2", "Idol Placement & Sankalp", "Place idol, take vow for family’s welfare"],
                                                ["3", "Kalash Sthapana", "Install kalash with water, leaves, coconut"],
                                                ["4", "Shodashopachar Ganesh Puja", "16-step detailed worship"],
                                                ["5", "Mantra Jaap & Offerings", "Offer durva, modak, fruits, sweets"],
                                                ["6", "Aarti, Pradakshina, Prasad", "Final worship and blessings for all"]
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium">{row[0]}</td>
                                                    <td className="py-3 px-4 font-semibold text-maroon-800">{row[1]}</td>
                                                    <td className="py-3 px-4">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Ganesh Puja Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    Our service provides a standard Ganesh Puja samagri kit so you do not have to chase multiple shops, especially during Ganesh Chaturthi.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> Samagri – Pandit Brings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Kalash, lota, panchpatra, spoon, bell, asana.</li>
                                            <li>Kumkum, haldi, sindoor, chandan, akshata.</li>
                                            <li>Dhoop, agarbatti, camphor, cotton wicks, diyas.</li>
                                            <li>Havan samagri if homa is included.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> Samagri – Homeowner Provide
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Lord Ganesha idol or high-quality photo.</li>
                                            <li>Red or yellow cloth (1–2 m) for altar.</li>
                                            <li>Durva grass (fresh bunch) and red flowers.</li>
                                            <li>Coconuts (1–2), betel leaves (5+), supari (5–11).</li>
                                            <li>Fruits (5 varieties), 500–1000g sweets/modaks.</li>
                                            <li>Panchamrit ingredients: milk, curd, ghee, honey, sugar.</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-maroon-900 mb-4">Ganesh Puja Samagri – Purpose Table</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg border border-gold-200 text-sm">
                                        <thead className="bg-gold-100 text-maroon-900">
                                            <tr>
                                                <th className="py-2 px-3 text-left">Item</th>
                                                <th className="py-2 px-3 text-left">Approx. Qty</th>
                                                <th className="py-2 px-3 text-left">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gold-100">
                                            {[
                                                ["Ganesh idol/photo", "1", "Main deity for worship"],
                                                ["Durva grass", "21+ blades", "Special offering to please Lord Ganesha"],
                                                ["Modak/sweets", "500–1000 g", "Favorite naivedya"],
                                                ["Red flowers", "100–200 g", "Offerings for devotion and energy"],
                                                ["Kalash & coconut", "1 set", "Represents auspicious divine presence"],
                                                ["Panchamrit set", "5 ingredients", "Abhishek and prasad"]
                                            ].map((row, i) => (
                                                <tr key={i}>
                                                    <td className="py-2 px-3 font-medium">{row[0]}</td>
                                                    <td className="py-2 px-3">{row[1]}</td>
                                                    <td className="py-2 px-3">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600 italic">Want a ready-made Ganesh Puja samagri checklist sent to your WhatsApp? Book your puja now.</p>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Ganesh Puja in 2026</h2>
                                <p>
                                    Ganesh Puja can be done on many days, but Ganesh Chaturthi, Sankashti Chaturthi, and suitable weekday-muhurats are highly preferred. For Ganesh Chaturthi, Madhyahna (midday) is considered ideal.
                                </p>
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-maroon-900">
                                    <h3 className="text-xl font-bold text-maroon-900 mb-4">Ganesh Chaturthi Muhurat 2026</h3>
                                    <p className="font-bold text-lg mb-2">📅 Date: 3 September 2026 – Thursday</p>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-saffron-600">🕉 Main Ganesh Puja Muhurat:</p>
                                            <p className="text-gray-800">11:03 AM – 01:37 PM</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-saffron-600">🌙 Chaturthi Tithi:</p>
                                            <p className="text-gray-800">Starts: 04:31 PM (2 Sept 2026) | Ends: 07:49 PM (3 Sept 2026)</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-red-600">🚫 Moon Sighting (Chandra Darshan Avoid):</p>
                                            <p className="text-gray-800">Do NOT see moon from: 09:59 AM – 08:29 PM (3 Sept 2026)</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">*Always confirm exact muhurat from a pandit for your location.</p>
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Ganesh Puja</h2>
                                <p className="text-gray-700 mb-4">Regular or occasion-based Ganesh Puja offers both spiritual and practical benefits.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Removes obstacles, delays, and unseen hurdles in projects and plans.",
                                        "Enhances concentration, wisdom, and decision-making.",
                                        "Brings peace of mind, reduces anxiety, and promotes harmonious relationships.",
                                        "Supports new beginnings like housewarming, marriage, or new job."
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-2xl mr-3">✨</span>
                                            <p className="text-sm text-gray-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Cost & Packages */}
                            <section id="cost">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Ganesh Puja Cost and Packages</h2>
                                <p className="text-gray-700 mb-6">Ganesh Puja pricing depends on duration, whether it includes homa, number of mantras, and location.</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Basic Ganesh Puja (Home/Office)</h4>
                                        <p className="text-sm text-gray-600">Short puja (about 60–90 minutes) with standard Ganesh worship and aarti.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Festival Ganesh Puja (Ganesh Chaturthi)</h4>
                                        <p className="text-sm text-gray-600">Includes pran-pratishtha, daily puja guidance, and visarjan ritual support.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Ganesh Puja with Havan / Combined</h4>
                                        <p className="text-sm text-gray-600">Ganesh Puja plus homa or combined with Griha Pravesh, Vastu Shanti, etc.</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Get Ganesh Puja Quote</Button>
                                </div>
                            </section>

                            {/* Service Coverage & Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Why Choose Our Verified Pandits?</h2>
                                        <ul className="space-y-3">
                                            {[
                                                "10+ years experience in Ganesh Pujas for families and businesses.",
                                                "Choice of Maharashtrian, North Indian, South Indian, or Gujarati style.",
                                                "Clear communication on samagri inclusion and do’s/don’ts.",
                                                "Strong presence across Pune: Kothrud, Baner, Wakad, Kharadi, etc.",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-gold-400 mr-2">✓</span>
                                                    <span className="text-gold-50 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Service Coverage & Expansion</h2>
                                        <p className="text-gold-100 text-sm mb-4">
                                            Pune First, Then All India. We are expanding our verified-pandit model.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Pune', 'Mumbai', 'Thane', 'Nagpur', 'Nashik', 'Bengaluru', 'Hyderabad', 'Delhi-NCR', 'Ahmedabad'].map(city => (
                                                <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-gold-500/30">{city}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Booking Process */}
                            <section id="how-to-book">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">How to Book Ganesh Puja</h2>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li><strong>Share Details:</strong> Contact via form or WhatsApp (name, gotra, address, date).</li>
                                    <li><strong>Consultation:</strong> Receive muhurat suggestions and package options.</li>
                                    <li><strong>Confirm:</strong> Confirm with token; get pandit profile and checklist.</li>
                                    <li><strong>Puja Day:</strong> On-time arrival and complete puja performance.</li>
                                    <li><strong>Guidance:</strong> Post-puja guidance for remedies or future pujas.</li>
                                </ol>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.question}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
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

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Ganesh Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Booking</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="ganesh-puja"
                        category="god"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Ganesh Puja" />
            <Footer />
        </>
    )
}
