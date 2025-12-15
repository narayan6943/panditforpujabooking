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

export default function NavagrahaPujaPage() {
    // 1. Service Schema
    const baseServiceSchema = generateServiceSchema({
        name: 'Navagraha Puja',
        description: 'Book verified pandit for Navagraha Puja in Pune. Vedic Graha Shanti for peace, protection, and prosperity. Complete samagri included.',
        price: '3500', // Assumed base price
        reviewCount: '620', // Assumed
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/navagraha-puja',
        image: 'https://panditforpujabooking.com/images/navagraha-puja-hero.jpg'
    })

    const serviceSchema = {
        ...baseServiceSchema,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Navagraha Puja Packages',
            itemListElement: [
                {
                    '@type': 'Offer',
                    name: 'Standard Navagraha Shanti Puja (Home)',
                    description: 'Single-purohit puja with individual worship of all nine grahas. Ideal for nuclear families.',
                },
                {
                    '@type': 'Offer',
                    name: 'Navagraha Shanti Puja with Homam',
                    description: 'Includes fire ritual (Homam) where Navagraha mantras are chanted and ahuti is offered.',
                },
                {
                    '@type': 'Offer',
                    name: 'Specific Graha-Focused Navagraha Puja',
                    description: 'Navagraha base puja plus special emphasis on one or two planets (e.g., Shani, Rahu, Ketu).',
                }
            ]
        }
    }

    // 2. FAQs and Schema
    const faqs = [
        { question: 'What is Navagraha Puja and why is it done?', answer: 'Navagraha Puja is a Vedic ritual to worship all nine planets to reduce their malefic effects and strengthen beneficial influences. It is done to remove obstacles, improve health, finances, and relationships, and create overall harmony.' },
        { question: 'How long does a Navagraha Puja take?', answer: 'A basic home Navagraha Shanti Puja usually takes around 1.5–2 hours. If Navagraha Homam and extended mantras are included, the duration can extend to 3–4 hours or more.' },
        { question: 'When should Navagraha Puja be performed?', answer: 'It is recommended when your horoscope shows strong graha doshas, or you face recurring obstacles. Shukla Paksha days and certain auspicious nakshatras are commonly chosen.' },
        { question: 'Is Navagraha Puja enough, or do I still need individual graha pujas?', answer: 'Navagraha Puja provides a holistic reset for all planets. In severe cases, pandits may advise additional focused pujas (e.g., Shani Shanti) after the Navagraha Puja.' },
        { question: 'Is samagri included in Navagraha Puja booking?', answer: 'Most specialized Navagraha samagri, yantra, and Homam items are arranged by the pandit. You typically provide fresh flowers, fruits, panchamrit ingredients, and coconuts.' },
        { question: 'Can Navagraha Puja help with Vastu dosh?', answer: 'Yes, Navagraha Shanti can assist where planetary placements and Vastu issues are interconnected. It is often paired with Vastu Shanti Puja for structural problems.' },
        { question: 'Can Navagraha Puja be done in a rented flat or office?', answer: 'Absolutely. The puja protects and harmonizes the energy of the people and current premises, whether owned or rented.' },
        { question: 'Do you offer Navagraha Puja outside Pune?', answer: 'Yes, this service is being extended to cities like Mumbai, Bengaluru, Delhi-NCR, Hyderabad, and others via local partner pandits.' }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Navagraha Puja?' },
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
                title="Navagraha Puja in Pune | Perform Powerful Graha Shanti with Certified Pandit Ji"
                description="Book verified pandit for Navagraha Puja in Pune. Vedic Graha Shanti for peace, protection, and prosperity. Complete samagri and muhurat guidance provided."
                keywords="navagraha puja pune, graha shanti puja pune, navagraha homam pune, book pandit for navagraha puja, shani dosh nivaran, rahu ketu shanti"
                canonicalUrl="https://panditforpujabooking.com/puja-services/navagraha-puja"
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
                        {/* Placeholder image until user provides one */}
                        <div className="w-full h-full bg-gradient-to-br from-maroon-800 to-black/80 flex items-center justify-center">
                            <span className="text-white/20 text-4xl font-serif">Navagraha Shanti</span>
                        </div>
                        {/* <Image
                            src="/images/navagraha-puja-hero.jpg"
                            alt="Navagraha Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        /> */}
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Balance Planetary Energies</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Navagraha Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Perform Powerful Graha Shanti with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Navagraha Puja is a powerful Vedic ritual performed to pacify the nine planetary energies and enhance their positive influence in life.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Navagraha Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Navagraha%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    Navagraha Puja is a powerful Vedic ritual performed to pacify the nine planetary energies (Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu, Ketu) and enhance their positive influence in life. In Pune, from peaceful residential pockets in Kothrud and Baner to growth corridors like Wakad, Hinjewadi, Kharadi, and Hadapsar, families, professionals, and NRIs book Navagraha Puja to reduce graha doshas, remove obstacles, and stabilize health, finances, and relationships. With <strong>PanditforPujaBooking.com</strong>, experienced, verified pandits perform Navagraha Shanti Puja and Homam with complete samagri, as per authentic Vedic astrology and your horoscope.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Looking to book an experienced pandit for Navagraha Puja in Pune? Contact us now on WhatsApp or click “Book Navagraha Puja” – graha analysis support and samagri included.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🪐</span>
                                    What is Navagraha Puja?
                                </h2>
                                <p>
                                    Navagraha Puja is a comprehensive planetary worship ritual aimed at balancing the energies of all nine planets that influence a person’s horoscope and life events. The puja includes mantra chanting, offerings to each graha, and often a Navagraha Homam (fire ritual) to reduce malefic effects and strengthen benefic influences.
                                </p>
                                <p><strong>People across Pune and other Indian cities choose Navagraha Puja when:</strong></p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Repeated obstacles, delays, or sudden losses affect career, business, or family.</li>
                                    <li>Astrologers identify specific doshas like Shani Dosh, Rahu–Ketu Dosh, Pitru Dosh, or general graha imbalance.</li>
                                    <li>Major life decisions or transitions (marriage, house purchase, foreign travel, big investments) are planned.</li>
                                </ul>

                                <div className="bg-maroon-50 p-6 rounded-xl border border-maroon-100 text-center">
                                    <p className="font-bold text-maroon-900 text-lg mb-2">Unsure which planets are troubling you?</p>
                                    <p className="text-sm text-gray-600 mb-4">Share your birth details on WhatsApp – our team can coordinate Navagraha Shanti Puja with customized graha focus.</p>
                                    <a href="https://wa.me/918446272142" target="_blank" className="inline-block bg-saffron-600 text-white px-4 py-2 rounded-md font-medium hover:bg-saffron-700 transition-colors">Chat on WhatsApp</a>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is Navagraha Puja Important?</h2>
                                <p>
                                    According to Vedic astrology, planetary placements shape opportunities, challenges, health patterns, and emotional tendencies; Navagraha Puja directly addresses these subtle influences. Instead of random remedies, a systematic Navagraha Shanti aligns your efforts with supportive cosmic forces and reduces friction caused by harsh graha positions.
                                </p>
                                <h3>Key reasons Navagraha Puja is considered important:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none pl-0">
                                    {[
                                        "Pacifies malefic planetary effects causing repeated failures, conflicts, or health issues.",
                                        "Strengthens benefic planets to support career growth, education, marriage, and wealth.",
                                        "Helps mitigate Vastu-related disturbances when property direction and chart both indicate issues.",
                                        "Offers a structured, traditional alternative to scattered individual graha remedies."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic mt-4 bg-gray-50 p-3 rounded border-l-2 border-gray-300">
                                    <strong>CTA:</strong> Facing continuous obstacles despite hard work? Book Navagraha Puja in Pune with our verified pandits – get strategic graha shanti instead of random fixes.
                                </p>
                            </section>

                            {/* Types of Puja */}
                            <section id="types">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Navagraha Puja</h2>
                                <p className="text-gray-700 mb-6">Different formats of Navagraha Puja and Homam are chosen based on severity of dosha, family size, and venue.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Standard Navagraha Shanti Puja",
                                            subtitle: "Home-Based",
                                            desc: "Home-based or small hall puja with individual worship of all nine grahas. Ideal for families facing moderate, recurring challenges in multiple areas of life."
                                        },
                                        {
                                            title: "Navagraha Shanti Puja with Homam",
                                            subtitle: "Includes Fire Ritual",
                                            desc: "Includes a fire ritual where Navagraha mantras are chanted and ahuti is offered for each planet. Recommended when astrology shows strong doshas or during major life milestones."
                                        },
                                        {
                                            title: "Specific Graha-Focused Navagraha Puja",
                                            subtitle: "Targeted Remedy",
                                            desc: "Navagraha base puja plus special emphasis on one or two planets (e.g., Shani, Rahu, Ketu, Mangal, Guru). Useful when one graha is clearly dominant in causing issues but holistic balance is also needed."
                                        },
                                        {
                                            title: "Temple-Linked / Sankalp-Based Puja",
                                            subtitle: "Power Kshetras",
                                            desc: "Navagraha Puja performed at or in sankalp with temples known for graha shanti, combined with a parallel home ritual. Beneficial for those who wish to connect with powerful kshetras."
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
                                    <p className="text-gray-700 italic mb-2">Not sure if you need a basic, homam-based, or graha-focused Navagraha Puja?</p>
                                    <a href="https://wa.me/918446272142" className="text-saffron-600 font-bold hover:underline">Message us your horoscope summary or issues – we’ll recommend the most effective option →</a>
                                </div>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Navagraha Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Our pandits follow a structured, Vedic-compliant Navagraha Puja Vidhi, adapted to your sampradaya.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Preparation, Shuddhi, and Altar Setup</h3>
                                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                    <li>Thorough cleaning of puja area; altar arranged facing east or north.</li>
                                                    <li>Placement of Navagraha yantra or nine graha idols/pictures in prescribed order.</li>
                                                    <li>Kalash sthapana with water, mango leaves, and coconut representing all deities.</li>
                                                </ul>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Ganesh Puja and Sankalp</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Short Ganesh Puja to remove obstacles in the Navagraha Shanti process.</li>
                                                        <li>Sankalp with yajman’s name, gotra, planetary issues, and desired outcomes.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Individual Graha Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Invocation and worship of each graha with specific mantra, color, and grain.</li>
                                                        <li>Special emphasis for planets that are malefic or weak in your horoscope.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Navagraha Homam (If Included)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Agni sthapana and chanting of Navagraha mantras with ahuti for each graha.</li>
                                                        <li>Havan samagri, ghee, and herbs offered to burn doshas and activate positive energies.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Aarti, Daan, and Prasad</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Navagraha aarti with family participation.</li>
                                                        <li>Daan (charity) items related to specific grahas as guided by pandit.</li>
                                                        <li>Distribution of prasad and final guidance on long-term graha upay.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-saffron-50 p-4 rounded-lg text-center">
                                            <p className="font-semibold text-maroon-900">Want this complete Navagraha Puja Vidhi done precisely for your family in Pune?</p>
                                            <Button variant="primary" size="sm" className="mt-2" href="#booking">Book Navagraha Shanti Puja</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Summary Table */}
                            <section>
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Navagraha Puja Steps – Summary Table</h2>
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
                                                ["1", "Shuddhi & Altar Setup", "Cleanse space, place Navagraha idols/yantra, kalash sthapana."],
                                                ["2", "Ganesh Puja & Sankalp", "Invoke Ganesha, take sankalp with horoscope details."],
                                                ["3", "Individual Graha Worship", "Offer mantras, grains, colors to each planet."],
                                                ["4", "Navagraha Homam (Optional)", "Fire ritual with Navagraha mantra ahuti."],
                                                ["5", "Aarti, Daan & Prasad", "Aarti, charity, and prasad distribution."]
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Navagraha Puja Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    PanditforPujaBooking.com arranges a detailed Navagraha Puja samagri kit so that each graha receives appropriate offerings as per tradition.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> Samagri – Pandit Brings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Navagraha yantra or puja set, copper/steel plates, panchpatra, spoon, bell.</li>
                                            <li>Kumkum, haldi, sandalwood paste, incense sticks, camphor, cotton wicks.</li>
                                            <li>Havan samagri, samidha, and graha-specific herbs if Homam is included.</li>
                                            <li>Colored cloth pieces or vastra and grains associated with each planet.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> Samagri – Homeowner Should Provide
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Nine small kalash or bowls for water/abhishek as per pandit’s style.</li>
                                            <li>Fresh flowers and garlands (at least 300–500 g, mixed colors).</li>
                                            <li>Fruits (minimum 9 types or as per capacity) and sweets for naivedya.</li>
                                            <li>Panchamrit ingredients: milk, curd, ghee, honey, sugar.</li>
                                            <li>Coconuts (2–5), betel leaves, supari, and basic puja cloths for the altar.</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-maroon-900 mb-4">Navagraha Puja Samagri – Purpose Table</h3>
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
                                                ["Navagraha yantra/idols", "1 set", "Represents all nine planetary deities."],
                                                ["Colored grains/vastras", "Small qty each", "Specific offerings to each graha."],
                                                ["Havan samagri & ghee", "1–2 pkts, 250ml", "Used in Navagraha Homam for mantra ahuti."],
                                                ["Flowers & garlands", "300–500 g", "Devotional offerings and decoration."],
                                                ["Panchamrit set", "5 ingredients", "Abhishek and prasad for collective blessings."],
                                                ["Coconuts & betel leaves", "2–5 / 11–21", "Mangala dravya for auspicious completion."]
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
                                    <p className="text-sm text-gray-600">Need a clear Navagraha Puja samagri checklist for Pune or other cities? Once you book, we’ll share a tailored list via PDF and WhatsApp.</p>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Navagraha Puja in 2026</h2>
                                <p>
                                    Navagraha Puja is most effective when timed with supportive tithis, nakshatras, and your specific horoscope. While exact muhurat is customized, certain periods are often preferred.
                                </p>
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-maroon-900">
                                    <h3 className="text-xl font-bold text-maroon-900 mb-4">Guidelines to Choose a Good Muhurat</h3>
                                    <div className="space-y-4">
                                        {[
                                            { rule: "Avoid Rahu-Kaal / Gulika / Bhadra", why: "These periods are considered unfavorable for new puja or important rituals." },
                                            { rule: "Prefer 'Amrit / Abhijit / Labh / Shubh' Choghadiya", why: "These are traditionally favourable for any auspicious work." },
                                            { rule: "Avoid Inauspicious Tithis", why: "Avoid Ashtami, Chaturdashi if Panchang marks them negative; prefer Shukla Paksha." },
                                            { rule: "Personalized Muhurat is Key", why: "Because Navagraha Puja is about balancing planetary energies, personalization ensures correct alignment." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row gap-2 pb-2 border-b border-gray-100 last:border-0">
                                                <div className="font-semibold text-maroon-800 sm:w-1/3">{item.rule}</div>
                                                <div className="text-sm text-gray-700 sm:w-2/3">{item.why}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">*Official muhurat selection depends on the individual’s birth chart, location, and actual planetary positions.</p>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="font-medium text-maroon-900">For exact Navagraha Puja and Homam muhurat in 2026 for Pune, Mumbai, Delhi, or Bangalore, <a href="#booking" className="text-saffron-600 underline">request a personalized slot.</a></p>
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Navagraha Puja</h2>
                                <p className="text-gray-700 mb-4">Navagraha Shanti Puja is known for delivering multi-dimensional benefits because it works at the root cause—planetary imbalances.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Reduction of adverse graha effects and obstacles in health, finances, and relationships.",
                                        "Enhancement of positive energies, leading to success and recognition.",
                                        "Improvement in mental peace, emotional stability, and spiritual growth.",
                                        "Support in resolving Vastu dosha-related disturbances.",
                                        "Better overall harmony in family and protective shield from setbacks."
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-2xl mr-3">✨</span>
                                            <p className="text-sm text-gray-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center mt-6 font-semibold text-maroon-800">
                                    Want holistic relief instead of piecemeal remedies? Book Navagraha Puja in Pune – our pandits perform detailed graha shanti customized to your chart.
                                </p>
                            </section>

                            {/* Cost & Packages */}
                            <section id="cost">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Navagraha Puja Cost and Packages</h2>
                                <p className="text-gray-700 mb-6">The cost depends on the scale (home vs hall), inclusion of Homam, number of pandits, and your city.</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Basic Navagraha Shanti Puja (Home)</h4>
                                        <p className="text-sm text-gray-600">Single-purohit puja with individual graha worship, suitable for nuclear families.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Navagraha Puja + Homam (Standard)</h4>
                                        <p className="text-sm text-gray-600">Includes fire ritual, ideal for moderate to strong graha doshas.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Advanced Navagraha & Specific Graha Focus</h4>
                                        <p className="text-sm text-gray-600">Extended Homam and additional jaap (e.g., Shani, Rahu, Guru), suitable for complex charts.</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Get Navagraha Puja Quote</Button>
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
                                                "Pandits experienced in Navagraha Shanti with 10+ years of practice.",
                                                "Coverage across Pune’s key areas – Kothrud, Baner, Wakad, Hinjewadi, etc.",
                                                "Ability to coordinate with your astrologer’s recommendations.",
                                                "Transparent communication about samagri, duration, and fasting.",
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
                                            Pune based, standardized model rolling out across India.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Pune', 'Mumbai', 'Thane', 'Nagpur', 'Bengaluru', 'Hyderabad', 'Chennai', 'Delhi-NCR', 'Ahmedabad'].map(city => (
                                                <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-gold-500/30">{city}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Booking Process */}
                            <section id="how-to-book">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">How to Book Navagraha Puja</h2>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li><strong>Send Details:</strong> Name, gotra, date/time preferences, city/area via form or WhatsApp.</li>
                                    <li><strong>Assessment:</strong> Share horoscope summary or key issues for graha assessment.</li>
                                    <li><strong>Options:</strong> Receive suggested muhurat options and package choices.</li>
                                    <li><strong>Confirm:</strong> Pay token; get pandit profile and samagri checklist.</li>
                                    <li><strong>Puja Day:</strong> Receive reminders and on-time pandit arrival.</li>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Navagraha Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Booking</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Navagraha%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
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
                        currentSlug="navagraha-puja"
                        category="remedies"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Navagraha Puja" />
            <Footer />
        </>
    )
}
