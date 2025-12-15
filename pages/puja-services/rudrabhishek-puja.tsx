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

export default function RudrabhishekPujaPage() {
    // 1. Custom Service Schema with OfferCatalog
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Rudrabhishek Puja',
        description: 'Book verified pandit for Rudrabhishek Puja in Pune. Vedic Shiva Abhishek for health, protection, and prosperity. Complete samagri included.',
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
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Rudrabhishek Puja Packages',
            itemListElement: [
                {
                    '@type': 'Offer',
                    name: 'Basic Rudrabhishek Puja (Single Rudra Path)',
                    description: 'Standard home or temple-style Rudrabhishek with one full Rudra chanting.',
                },
                {
                    '@type': 'Offer',
                    name: 'Multiple Rudra Path Rudrabhishek',
                    description: '5, 11, or more Rudra repetitions as per sankalp and need.',
                },
                {
                    '@type': 'Offer',
                    name: 'Maha Rudrabhishek (Laghu/Purna)',
                    description: 'Larger-scale puja with multiple pandits chanting many Rudras.',
                },
                {
                    '@type': 'Offer',
                    name: 'Rudrabhishek with Maha Mrityunjaya Jaap',
                    description: 'Combined package where Rudrabhishek is followed by specified counts of Maha Mrityunjaya mantra.',
                }
            ]
        }
    }

    // 2. FAQ Schema
    const faqs = [
        { question: "What is Rudrabhishek Puja and why is it done?", answer: "Rudrabhishek is a sacred abhishek of Lord Shiva with holy liquids and mantras, performed for health, protection, and relief from karmic troubles." },
        { question: "How long does a Rudrabhishek Puja take?", answer: "Standard single-Rudra puja takes 1.5–2 hours. Multiple Rudra or Maha Rudrabhishek can take 3–5 hours+." },
        { question: "Is fasting required for Rudrabhishek Puja?", answer: "Many observe a light fast or satvik diet. Consult the pandit for specific rules based on your health." },
        { question: "Do you provide all Rudrabhishek samagri?", answer: "Pandits bring specialized items; families usually arrange milk, curd, honey, fruits, and flowers locally." },
        { question: "Can Rudrabhishek Puja help with health problems?", answer: "Yes, it is traditionally beneficial for health and longevity, especially with Maha Mrityunjaya mantra. It complements medical care." },
        { question: "Is Rudrabhishek Puja done only in temples?", answer: "No, it is commonly performed at home, society halls, or offices based on convenience." },
        { question: "What is the best time to perform Rudrabhishek?", answer: "Shravan month, Mondays, Pradosh, and Maha Shivaratri are best. Any shubh muhurat works." },
        { question: "Do you offer Rudrabhishek Puja outside Pune?", answer: "Yes, we are expanding to Mumbai, Bengaluru, Delhi-NCR, etc. Verify at booking." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Rudrabhishek?' },
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
                title="Rudrabhishek Puja in Pune | Perform Powerful Shiva Abhishek with Certified Pandit Ji"
                description="Book verified pandit for Rudrabhishek Puja in Pune. Authentic Vedic rituals for health, protection, and prosperity. Complete samagri and muhurat guidance provided."
                keywords="rudrabhishek puja pune, shiva abhishek pune, book pandit for rudrabhishek, mahashivratri puja pune"
                canonicalUrl="https://panditforpujabooking.com/puja-services/rudrabhishek-puja"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-saffron-50/30">
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/rudrabhishek-puja-hero.png"
                            alt="Rudrabhishek Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Protection & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Rudrabhishek Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Perform Powerful Shiva Abhishek with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Rudrabhishek Puja is a highly auspicious Vedic ritual dedicated to Lord Shiva, performed for protection, health, prosperity, and relief from planetary troubles.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Rudrabhishek Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rudrabhishek%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    Rudrabhishek Puja is a highly auspicious Vedic ritual dedicated to Lord Shiva, where the Shivling is bathed with sacred substances like water, milk, curd, honey, ghee, and bilva leaves while chanting potent Vedic mantras. In Pune, from calm residential areas in Kothrud and Baner to busy IT corridors in Hinjewadi, Wakad, Kharadi, and Hadapsar, devotees perform Rudrabhishek Puja to seek protection, health, prosperity, and relief from planetary and karmic troubles. With <strong>PanditforPujaBooking.com</strong>, verified Shiva-specialist pandits with 10+ years of experience conduct authentic Rudrabhishek Puja in Pune, bringing complete samagri and strictly following Shaiva and Vedic traditions.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Looking to book an experienced pandit for Rudrabhishek Puja in Pune? Contact us now on WhatsApp or click “Book Rudrabhishek Puja” – certified rituals and samagri included.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🔱</span>
                                    What is Rudrabhishek Puja?
                                </h2>
                                <p>
                                    Rudrabhishek Puja is a sacred abhishek of Lord Shiva where different holy liquids (dravyas) are poured on the Shivling with continuous chanting of Shri Rudram and other Shiva mantras. This ritual is considered one of the most powerful ways to please Lord Shiva and seek blessings for health, longevity, peace of mind, and freedom from obstacles.
                                </p>
                                <p><strong>In Pune and across India, Rudrabhishek Puja is commonly performed:</strong></p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>During Shravan/Sawan month, Mondays, Pradosh, and Maha Shivaratri.</li>
                                    <li>When facing serious health issues, legal disputes, or chronic stress.</li>
                                    <li>For graha shanti, especially to pacify negative effects of Saturn (Shani), Rahu, and Ketu.</li>
                                </ul>

                                <div className="bg-maroon-50 p-6 rounded-xl border border-maroon-100 text-center">
                                    <p className="font-bold text-maroon-900 text-lg mb-2">Wondering if Rudrabhishek Puja is right for your health, career, or family issues?</p>
                                    <p className="text-sm text-gray-600 mb-4">Share your situation on WhatsApp – our team will suggest the right format and frequency.</p>
                                    <a href="https://wa.me/918446272142" target="_blank" className="inline-block bg-saffron-600 text-white px-4 py-2 rounded-md font-medium hover:bg-saffron-700 transition-colors">Chat on WhatsApp</a>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is Rudrabhishek Puja Important?</h2>
                                <p>
                                    Scriptures describe Lord Shiva as Ashutosh, easily pleased and quick to grant blessings, making Rudrabhishek a powerful remedy for both material and spiritual concerns. Regular or sankalp-based Rudrabhishek Puja helps cleanse negative karma, calm the mind, and protect the family from unseen obstacles and sudden misfortunes.
                                </p>
                                <h3>Key reasons devotees book Rudrabhishek Puja:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none pl-0">
                                    {[
                                        "Protection from accidents, chronic illness, and untimely difficulties.",
                                        "Relief from graha doshas and unfavorable dasha/antardasha phases.",
                                        "Mental peace, emotional stability, and support during major life transitions.",
                                        "Spiritual upliftment, increased devotion, and inner strength to face challenges."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic mt-4 bg-gray-50 p-3 rounded border-l-2 border-gray-300">
                                    <strong>CTA:</strong> Seeking strong protection and inner strength through Lord Shiva’s grace? Book Rudrabhishek Puja in Pune with our verified pandits – don’t miss the complete step-by-step Vidhi below.
                                </p>
                            </section>

                            {/* Types of Puja */}
                            <section id="types">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Rudrabhishek Puja</h2>
                                <p className="text-gray-700 mb-6">Different types of Rudrabhishek Puja are performed based on the number of Rudra chants, the scale of abhishek, and individual sankalp.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Basic Rudrabhishek Puja",
                                            subtitle: "(Single Rudra Path)",
                                            desc: "Standard home or temple-style Rudrabhishek with one full Rudra chanting. Suitable for families seeking general protection, peace, and prosperity."
                                        },
                                        {
                                            title: "Multiple Rudra Path",
                                            subtitle: "(5, 11, or more Rudras)",
                                            desc: "Recommended in serious health cases, strong graha doshas, or important life decisions."
                                        },
                                        {
                                            title: "Maha Rudrabhishek",
                                            subtitle: "(Laghu/Purna)",
                                            desc: "Larger-scale puja with multiple pandits chanting many Rudras, often in temples or big halls type. Ideal for joint families or society sankalp."
                                        },
                                        {
                                            title: "Rudrabhishek with Maha Mrityunjaya Jaap",
                                            subtitle: "(Combined Package)",
                                            desc: "Combined package where Rudrabhishek is followed by specified counts of Maha Mrityunjaya mantra. Very powerful for health and longevity."
                                        }
                                    ].map((type, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-saffron-500 hover:shadow-lg transition-shadow">
                                            <h3 className="text-xl font-bold text-maroon-900 mb-1">{type.title}</h3>
                                            <p className="text-saffron-600 font-semibold text-sm mb-3">{type.subtitle}</p>
                                            <p className="text-gray-600 text-sm">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-gray-700 italic mb-2">Not sure whether you need basic, multiple, or Maha Rudrabhishek?</p>
                                    <a href="https://wa.me/918446272142" className="text-saffron-600 font-bold hover:underline">Message us with details – we’ll recommend the ideal type →</a>
                                </div>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Rudrabhishek Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Our pandits perform Rudrabhishek Puja as per Shaiva scriptures, explaining each step clearly.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Preparation and Shuddhi</h3>
                                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                    <li>Cleaning of puja space, ideally northeast corner.</li>
                                                    <li>Spread clean white/yellow cloth. Devotees wear clean clothes.</li>
                                                </ul>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Ganesh Puja & Sankalp</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Short Ganapati Puja to remove obstacles.</li>
                                                        <li>Sankalp by yajman with gotra, purpose (health, dosh shanti, etc.).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Shivling & Kalash Sthapana</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Installation of Shivling on clean pindi.</li>
                                                        <li>Kalash Sthapana invoking holy waters and deities.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Abhishek (Main Ritual)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Pouring Gangajal/water, milk, curd, honey, ghee, sugar, panchamrit.</li>
                                                        <li>Offering Bhasma, chandan, bilva leaves.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Rudra Path & Aarti</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Chanting Shri Rudram (Namakam/Chamakam).</li>
                                                        <li>Offering flowers, bel leaves. Final Aarti & Ashish.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-saffron-50 p-4 rounded-lg text-center">
                                            <p className="font-semibold text-maroon-900">Want this complete step-by-step Rudrabhishek Puja Vidhi performed properly at your home or temple?</p>
                                            <Button variant="primary" size="sm" className="mt-2" href="#booking">Book Rudrabhishek Puja</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Summary Table */}
                            <section>
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Rudrabhishek Puja Steps – Summary Table</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                                        <thead className="bg-maroon-50 text-maroon-900 border-b border-maroon-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left font-semibold">Step No.</th>
                                                <th className="py-3 px-4 text-left font-semibold">Step Name</th>
                                                <th className="py-3 px-4 text-left font-semibold">Brief Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                                            {[
                                                ["1", "Shuddhi & Setup", "Clean area, arrange Shivling and altar"],
                                                ["2", "Ganesh Puja & Sankalp", "Invoke Ganesha, take vow for welfare"],
                                                ["3", "Shivling & Kalash Sthapana", "Install Shivling and sacred Kalash"],
                                                ["4", "Abhishek with Dravyas", "Bathe Shivling with water, milk, curd, etc."],
                                                ["5", "Rudra Path & Offerings", "Recite Rudram and offer bel, flowers"],
                                                ["6", "Aarti, Prasad & Blessings", "Final worship and distribute prasad"]
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Rudrabhishek Puja Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    PanditforPujaBooking.com provides a complete Rudrabhishek Puja samagri kit so that all essential items are available in the correct quantities.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> Samagri – Pandit Brings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Shivling abhishek tray, panchpatra, spoon, asan, bell.</li>
                                            <li>Kumkum, haldi, chandan, bhasma (vibhuti), akshata.</li>
                                            <li>Dhoop, agarbatti, camphor, wicks, ghee for lamp.</li>
                                            <li>Havan samagri if Rudra homa is included.</li>
                                            <li>Rudraksha mala or counters.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> Samagri – Homeowner Provide
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Clean water (5-10L) or Gangajal.</li>
                                            <li>Milk (1-2L), curd (500g), honey (100ml), ghee (100ml), sugar.</li>
                                            <li>Bilva (bel) leaves – 21+. White flowers.</li>
                                            <li>Coconuts (2), betel leaves/supari, fruits.</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-maroon-900 mb-4">Rudrabhishek Samagri – Purpose Table</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg border border-gold-200 text-sm">
                                        <thead className="bg-gold-100 text-maroon-900">
                                            <tr>
                                                <th className="py-2 px-3 text-left">Item</th>
                                                <th className="py-2 px-3 text-left">Qty</th>
                                                <th className="py-2 px-3 text-left">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gold-100">
                                            {[
                                                ["Water/Gangajal", "5-10 L", "Initial purification & abhishek"],
                                                ["Milk", "1-2 L", "Symbolizes purity & nourishment"],
                                                ["Curd", "500 g", "Represents strength & health"],
                                                ["Honey", "100 ml", "Sweetness in life"],
                                                ["Ghee", "100+ ml", "Prosperity & divine light"],
                                                ["Bilva leaves", "21+", "Very dear to Shiva"],
                                                ["Bhasma", "Bowl", "Detachment & spiritual power"]
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
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Rudrabhishek Puja in 2026</h2>
                                <p>
                                    Rudrabhishek Puja can be performed on many auspicious days, but certain periods like Shravan Mondays, Pradosh, and Shivratri amplify its benefits.
                                </p>
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-maroon-900">
                                    <h3 className="text-xl font-bold text-maroon-900 mb-4">Key Dates for 2026</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-800">
                                        <p><span className="font-semibold w-24 inline-block">January:</span> 17 Jan</p>
                                        <p><span className="font-semibold w-24 inline-block text-maroon-700">February:</span> 16 Feb (Maha Shivratri)</p>
                                        <p><span className="font-semibold w-24 inline-block">March:</span> 17 Mar</p>
                                        <p><span className="font-semibold w-24 inline-block">April:</span> 16 Apr</p>
                                        <p><span className="font-semibold w-24 inline-block">May:</span> 15 May</p>
                                        <p><span className="font-semibold w-24 inline-block">June:</span> 14 Jun</p>
                                        <p><span className="font-semibold w-24 inline-block">July:</span> 13 Jul</p>
                                        <p><span className="font-semibold w-24 inline-block text-maroon-700">August:</span> 11 Aug (Sawan Shivratri)</p>
                                        <p><span className="font-semibold w-24 inline-block">September:</span> 10 Sep</p>
                                        <p><span className="font-semibold w-24 inline-block">October:</span> 09 Oct</p>
                                        <p><span className="font-semibold w-24 inline-block">November:</span> 07 Nov</p>
                                        <p><span className="font-semibold w-24 inline-block">December:</span> 07 Dec</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">*Exact muhurat depends on Tithi, Nakshatra, and City. Always consult a pandit.</p>
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Rudrabhishek Puja</h2>
                                <p className="text-gray-700 mb-4">Rudrabhishek is essential for protection, health, and spiritual progress.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Protection from accidents, sudden losses, and negative influences.",
                                        "Support in chronic health issues and overall vitality.",
                                        "Relief from stress, anxiety, and emotional turbulence.",
                                        "Mitigation of Shani, Rahu, and Ketu graha doshas."
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-2xl mr-3">🧘</span>
                                            <p className="text-sm text-gray-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Cost & Packages */}
                            <section id="cost">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Rudrabhishek Puja Cost & Packages</h2>
                                <p className="text-gray-700 mb-6">Pricing depends on location, number of Rudra repetitions, and inclusion of Havan/Homa.</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Standard Rudrabhishek (Single Rudra)</h4>
                                        <p className="text-sm text-gray-600">Ideal for homes and small groups, typ. 1.5–2 hours.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Extended (Multiple Rudra Paths)</h4>
                                        <p className="text-sm text-gray-600">For stronger sankalp and complex issues, 2–4 hours+.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Maha Rudrabhishek with Havan</h4>
                                        <p className="text-sm text-gray-600">Large-scale, multi-pandit ritual for temples or societies.</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Get Rudrabhishek Quote</Button>
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
                                                "Shiva-specialist pandits with 10+ years of experience.",
                                                "Strong presence in Pune: Kothrud, Baner, Wakad, Hinjewadi.",
                                                "Language flexibility: Marathi, Hindi, Sanskrit.",
                                                "Clear guidance on samagri and fasting rules.",
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
                                            Pune based, extending to All India.
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
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">How to Book Rudrabhishek Puja</h2>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li><strong>Share Details:</strong> Contact via form or WhatsApp (name, gotra, address).</li>
                                    <li><strong>Consultation:</strong> Receive muhurat suggestions and packages.</li>
                                    <li><strong>Confirm:</strong> Pay token advance; get profile and checklist.</li>
                                    <li><strong>Puja Day:</strong> On-time arrival and Vedic performance.</li>
                                    <li><strong>Guidance:</strong> Post-puja guidance for future sadhana.</li>
                                </ol>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Rudrabhishek Puja and why is it done?", a: "Rudrabhishek is a sacred abhishek of Lord Shiva with holy liquids and mantras, performed for health, protection, and relief from karmic troubles." },
                                        { q: "How long does a Rudrabhishek Puja take?", a: "Standard single-Rudra puja takes 1.5–2 hours. Multiple Rudra or Maha Rudrabhishek can take 3–5 hours+." },
                                        { q: "Is fasting required for Rudrabhishek Puja?", a: "Many observe a light fast or satvik diet. Consult the pandit for specific rules based on your health." },
                                        { q: "Do you provide all Rudrabhishek samagri?", a: "Pandits bring specialized items; families usually arrange milk, curd, honey, fruits, and flowers locally." },
                                        { q: "Can Rudrabhishek Puja help with health problems?", a: "Yes, it is traditionally beneficial for health and longevity, especially with Maha Mrityunjaya mantra. It complements medical care." },
                                        { q: "Is Rudrabhishek Puja done only in temples?", a: "No, it is commonly performed at home, society halls, or offices based on convenience." },
                                        { q: "What is the best time to perform Rudrabhishek?", a: "Shravan month, Mondays, Pradosh, and Maha Shivaratri are best. Any shubh muhurat works." },
                                        { q: "Do you offer Rudrabhishek Puja outside Pune?", a: "Yes, we are expanding to Mumbai, Bengaluru, Delhi-NCR, etc. Verify at booking." }
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
                                                <a href={`#${sec.id} `} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Rudrabhishek</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Booking</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rudrabhishek%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
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
                        currentSlug="rudrabhishek-puja"
                        category="god"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Rudrabhishek Puja" />
            <Footer />
        </>
    )
}
