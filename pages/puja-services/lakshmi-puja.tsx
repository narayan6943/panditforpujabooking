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

export default function LakshmiPujaPage() {
    // 1. Service Schema
    const baseServiceSchema = generateServiceSchema({
        name: 'Lakshmi Puja',
        description: 'Book verified pandit for Lakshmi Puja in Pune. Authentic Vedic rituals for wealth, prosperity, and financial stability. Samagri included.',
        price: '2100', // Assumed base price
        reviewCount: '750', // Assumed
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/lakshmi-puja',
        image: 'https://panditforpujabooking.com/images/lakshmi-puja-hero.png'
    })

    const serviceSchema = {
        ...baseServiceSchema,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Lakshmi Puja Packages',
            itemListElement: [
                {
                    '@type': 'Offer',
                    name: 'Home Lakshmi Puja Package',
                    description: 'For flats and villas; includes Lakshmi–Ganesh Puja, Kalash sthapana, aarti.',
                },
                {
                    '@type': 'Offer',
                    name: 'Shop/Office Lakshmi Puja',
                    description: 'Focus on business elements, safes, computers, and staff participation.',
                },
                {
                    '@type': 'Offer',
                    name: 'Premium Diwali Lakshmi Puja',
                    description: 'Extended ritual with Lakshmi Narayan or Lakshmi Kubera Havan.',
                }
            ]
        }
    }

    // 2. FAQs
    const faqs = [
        { question: "What is Lakshmi Puja and why is it performed?", answer: "It is the worship of Goddess Lakshmi to invite wealth, prosperity, and good fortune, especially on Diwali and financial milestones." },
        { question: "How long does Lakshmi Puja usually take?", answer: "Standard home/office puja takes 1-2 hours. Larger setups with havan may take 2-3 hours." },
        { question: "Is Lakshmi Puja only done on Diwali?", answer: "No, it is also done on Dhanteras, new office openings, house warmings, and start of financial years." },
        { question: "Do you provide all Lakshmi Puja samagri?", answer: "Yes, our packages include most specialized samagri; we share a small list of perishables for you to arrange." },
        { question: "Can Lakshmi Puja be done in rented homes?", answer: "Yes, it benefits the residents and the space regardless of ownership." },
        { question: "What should we wear for Lakshmi Puja?", answer: "Clean, modest traditional clothes like saree or kurta-pajama are advised." },
        { question: "Do you perform Lakshmi–Kubera Puja for businesses?", answer: "Yes, we have specific packages for offices and shops focusing on financial stability." },
        { question: "Is havan necessary for Lakshmi Puja?", answer: "It is beneficial but not compulsory, especially in apartments with fire restrictions." },
        { question: "Can Lakshmi Puja be booked outside Pune?", answer: "Yes, in many major cities including Mumbai, Bangalore, Delhi-NCR, etc." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Lakshmi Puja?' },
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
                title="Lakshmi Puja in Pune | Book Verified Pandit for Wealth & Prosperity"
                description="Book expert pandit for Lakshmi Puja in Pune. Perform auspicious Lakshmi-Ganesh worship for wealth and prosperity. Samagri included, muhurat guidance provided."
                keywords="lakshmi puja pune, diwali puja pune, book pandit for lakshmi puja, lakshmi ganesh puja, office puja pune"
                canonicalUrl="https://panditforpujabooking.com/puja-services/lakshmi-puja"
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
                            src="/images/lakshmi-puja-hero.png"
                            alt="Lakshmi Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Wealth & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Lakshmi Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Perform Auspicious Wealth & Prosperity Puja</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Lakshmi Puja is the sacred Vedic ritual dedicated to Goddess Lakshmi, performed to invite wealth, prosperity, and positive energy into home and business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Lakshmi Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    Lakshmi Puja is the sacred Vedic ritual dedicated to Goddess Lakshmi, performed to invite wealth, prosperity, and positive energy into home and business, especially on Diwali and other auspicious days. In Pune, from premium residences in Kothrud and Baner to IT hubs like Hinjewadi, Wakad, Kharadi, and Hadapsar, families, business owners, NRIs, and professionals book Lakshmi Puja to seek divine blessings for financial growth and stability. With <strong>PanditforPujaBooking.com</strong>, certified and experienced pandits perform complete Lakshmi Puja with all samagri, following authentic scriptures and regional traditions so you get a hassle-free, powerful ceremony.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Looking to book an experienced pandit for Lakshmi Puja in Pune? Contact us now on WhatsApp or click the “Book Lakshmi Puja” button – samagri included, muhurat guidance provided.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🕉️</span>
                                    What is Lakshmi Puja?
                                </h2>
                                <p>
                                    Lakshmi Puja is a Vedic ritual worship of Goddess Lakshmi, often along with Lord Ganesha and Lord Kubera, to attract wealth, abundance, and auspiciousness into home and workplace. It is traditionally performed on Diwali night, but many families also arrange it during new business openings, financial year start, and other important milestones.
                                </p>
                                <p><strong>Common occasions for Lakshmi Puja:</strong></p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Diwali (Deepavali) in homes, shops, offices, factories, and banks.</li>
                                    <li>New office opening, shop inauguration, or financial year closing/opening.</li>
                                    <li>Personal milestones such as new house, big investments, or debt-closure celebrations.</li>
                                </ul>

                                <div className="bg-maroon-50 p-6 rounded-xl border border-maroon-100 text-center">
                                    <p className="font-bold text-maroon-900 text-lg mb-2">Planning Lakshmi Puja in Pune for Diwali or your new office?</p>
                                    <p className="text-sm text-gray-600 mb-4">Share your date and area (Kothrud, Baner, Wakad, Kharadi, Hadapsar etc.) on WhatsApp – we’ll assign the right pandit.</p>
                                    <Button variant="secondary" size="sm" href="https://wa.me/918446272142">Chat with our team on WhatsApp</Button>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is Lakshmi Puja Important?</h2>
                                <p>
                                    Lakshmi Puja is believed to purify financial karma, remove obstacles in income, and invite lasting prosperity, not just quick gains. Scriptures highlight that sincere worship of Goddess Lakshmi, with ethical conduct and devotion, supports wealth with dharma and peace of mind.
                                </p>
                                <h3>Key reasons people across Pune, Mumbai, Bangalore, Delhi, and abroad perform Lakshmi Puja:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 list-none pl-0">
                                    {[
                                        "To invite Dhan, Dhanya, and Sampatti (wealth, grains, and overall abundance).",
                                        "To remove negativity, misfortune, and frequent financial instability.",
                                        "To seek blessings for growth in job, business, trade, and investments throughout the year.",
                                        "To sanctify new assets like a home, shop, or office from an economic and spiritual perspective."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic mt-4 bg-gray-50 p-3 rounded border-l-2 border-gray-300">
                                    <strong>CTA:</strong> Want to ensure Goddess Lakshmi’s blessings on your home or business? Book Lakshmi Puja in Pune with verified pandit ji today – don’t miss the step-by-step Vidhi below.
                                </p>
                            </section>

                            {/* Types of Lakshmi Puja */}
                            <section id="types">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Lakshmi Puja</h2>
                                <p className="text-gray-700 mb-6">Lakshmi Puja can be customized based on occasion, scale, and local tradition, while keeping the core worship of Goddess Lakshmi intact. Our pandits recommend the right variation based on whether it is a family or commercial ceremony.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        {
                                            title: "Diwali Lakshmi Ganesh Puja",
                                            desc: "Most popular form, performed on Amavasya of Kartik month. Includes Lakshmi–Ganesh worship, account book puja, and extensive diya lighting."
                                        },
                                        {
                                            title: "Office / Business Lakshmi Kubera Puja",
                                            desc: "Goddess Lakshmi is worshipped with Lord Kubera to ensure stable cash flow. Books of accounts, safes, and key business tools are specially blessed."
                                        },
                                        {
                                            title: "Lakshmi Puja with Griha Pravesh",
                                            desc: "Combined with Griha Pravesh and Vastu Shanti to attract spiritual and material prosperity in new properties."
                                        }
                                    ].map((type, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-saffron-500 hover:shadow-lg transition-shadow">
                                            <h3 className="text-xl font-bold text-maroon-900 mb-3">{type.title}</h3>
                                            <p className="text-gray-600 text-sm">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-gray-700 italic mb-2">Unsure whether you need Lakshmi–Ganesh, Lakshmi–Kubera, or combined Griha Pravesh Lakshmi Puja?</p>
                                    <a href="https://wa.me/918446272142" className="text-saffron-600 font-bold hover:underline">Message us your requirement →</a>
                                </div>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Lakshmi Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Our experienced pandits follow a clear Lakshmi Puja Vidhi aligned with traditional scriptures.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Pre-Puja Preparation & Shuddhi</h3>
                                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                    <li>Deep cleaning and decluttering of home or office.</li>
                                                    <li>Rangoli at main door and Lakshmi footprints drawn from entrance to altar.</li>
                                                    <li>Placing a clean red or yellow cloth on a chowki (altar).</li>
                                                </ul>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Ganesh Puja & Kalash Sthapana</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Invocation of Lord Ganesha to remove obstacles.</li>
                                                        <li>Kalash Sthapana with water, mango leaves, and coconut.</li>
                                                        <li>Lighting of main diya symbolizing removal of darkness.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Lakshmi Puja (Shodashopachar)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Meditation and formal avahan (invocation).</li>
                                                        <li>Offering 16 upacharas including flowers, dhoop, deep, naivedya.</li>
                                                        <li>Special focus on lotus seeds, coins, and grains.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Bahi-Khata & Business Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worship of business books, laptops, and safes.</li>
                                                        <li>Writing “Shubh Labh” on books.</li>
                                                        <li>Seeking blessings for ethical profit and growth.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Aarti & Prasad</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Joint aarti of Lakshmi, Ganesh, and Kubera.</li>
                                                        <li>Distribution of sweets (batasha, kheel, laddoo) and prasad.</li>
                                                        <li>Final prayer for forgiveness and wisdom.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-saffron-50 p-4 rounded-lg text-center">
                                            <p className="font-semibold text-maroon-900">Don’t miss the complete Lakshmi Puja Vidhi for your ceremony.</p>
                                            <Button variant="primary" size="sm" className="mt-2" href="tel:+918446272142">Book Now & Get Checklist</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Summary Table */}
                            <section>
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Summary Table – Lakshmi Puja Steps</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                                        <thead className="bg-maroon-50 text-maroon-900 border-b border-maroon-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left font-semibold">Step No.</th>
                                                <th className="py-3 px-4 text-left font-semibold">Main Ritual</th>
                                                <th className="py-3 px-4 text-left font-semibold">Brief Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                                            {[
                                                ["1", "Cleaning & Decoration", "Clean premises, make rangoli, draw Lakshmi footprints"],
                                                ["2", "Ganesh Puja", "Invoke Ganesha for obstacle removal"],
                                                ["3", "Kalash Sthapana", "Install Kalash with water, leaves, coconut"],
                                                ["4", "Lakshmi Puja", "Full Vedic worship of Goddess Lakshmi"],
                                                ["5", "Bahi–Khata Puja", "Bless books, safes, and tools of trade"],
                                                ["6", "Aarti & Prasad", "Perform aarti and share prasad with all"]
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
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">Like this simple Vidhi overview? Our pandits follow a similarly structured Lakshmi Puja in Pune so your team knows exactly what’s happening.</p>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Lakshmi Puja Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    PanditforPujaBooking.com takes care of almost the entire Lakshmi Puja samagri, ensuring nothing essential is missed even during peak Diwali rush.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> Items Pandit Usually Brings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Lakshmi Puja kalash set, lota, spoon.</li>
                                            <li>Haldi, kumkum, sindoor, chandan, akshata.</li>
                                            <li>Dhoop, agarbatti, camphor, wicks, diyas.</li>
                                            <li>Kamalgatta (lotus seeds), cowrie shells.</li>
                                            <li>Small Lakshmi-Ganesh yantras/coins.</li>
                                            <li>Panchpatra, bell, and conch.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> Items You Should Arrange
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Idols/photos of Lakshmi, Ganesh (Kubera if desired).</li>
                                            <li>Red/yellow cloth for altar.</li>
                                            <li>Coconuts, betel leaves, supari.</li>
                                            <li>Flowers (marigold/lotus), garlands.</li>
                                            <li>Diya set (21-51) with ghee/oil.</li>
                                            <li>Panchamrit ingredients & Sweets.</li>
                                            <li>New account books/laptop for bahi-khata puja.</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-maroon-900 mb-4">Samagri Table – Key Items and Purpose</h3>
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
                                                ["Lakshmi–Ganesh idols", "1 set", "Main deities for wealth and wisdom"],
                                                ["Kalash + coconut", "1 set", "Seat of auspicious energy"],
                                                ["Diya (clay/metal)", "21–51", "Dispelling darkness and poverty"],
                                                ["Kamalgatta (lotus seeds)", "1 small bowl", "Attracting stable wealth"],
                                                ["Coins/notes", "As per devotion", "Symbolic invitation of abundance"],
                                                ["Flowers & garlands", "250–500 g", "Decoration and offerings"],
                                                ["Panchamrit set", "5 ingredients", "Abhishek and sacred prasad"],
                                                ["Sweets (batasha, kheel)", "500–1000 g", "Naivedya and distribution"]
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
                                <h2 className="text-3xl font-bold">Best Muhurat for Lakshmi Puja in 2026</h2>
                                <p>
                                    For Diwali, Lakshmi Puja is usually done on Kartik Amavasya during Pradosh Kaal. This ensures the energy of the puja aligns with peak spiritual potency.
                                </p>
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-maroon-900">
                                    <h3 className="text-xl font-bold text-maroon-900 mb-4">Lakshmi Puja Muhurat 2026 (Diwali)</h3>
                                    <p className="font-bold text-lg mb-2">📅 Date: 14 October 2026 – Wednesday</p>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-saffron-600">🪔 Main Lakshmi Puja Muhurat (Pradosh Kaal):</p>
                                            <p className="text-gray-800">06:21 PM – 08:43 PM</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-saffron-600">🪔 Vrishabha Lagna Muhurat (Best for Wealth):</p>
                                            <p className="text-gray-800">06:21 PM – 08:20 PM</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-saffron-600">🪔 Nishita Kaal Muhurat (Midnight):</p>
                                            <p className="text-gray-800">11:49 PM – 12:38 AM</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">*Always confirm exact muhurat from a pandit for your location.</p>
                                </div>
                                <div className="mt-4 text-center">
                                    <a href="#booking" className="text-maroon-700 underline font-bold">Get personalized muhurat for your city</a>
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Lakshmi Puja</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Attracts financial opportunities, business growth, and career advancement.",
                                        "Reduces impact of past financial mistakes, debts, and instability.",
                                        "Purifies the energy of home, shop, and office.",
                                        "Enhances collective morale in families and teams.",
                                        "Deepens spiritual connection with wealth used for dharmic purposes."
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
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Lakshmi Puja Cost and Packages</h2>
                                <p className="text-gray-700 mb-6">PanditforPujaBooking.com offers flexible Lakshmi Puja packages tailored for homes, shops, and offices.</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Home Lakshmi Puja Package</h4>
                                        <p className="text-sm text-gray-600">For flats and villas; includes Lakshmi–Ganesh Puja, Kalash sthapana, aarti, and diya lighting guidance.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Shop/Office Puja + Bahi–Khata</h4>
                                        <p className="text-sm text-gray-600">Focus on business elements, safes, computers, and staff participation.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gold-100">
                                        <h4 className="font-bold text-maroon-900">Premium Diwali Lakshmi Puja with Havan</h4>
                                        <p className="text-sm text-gray-600">Extended ritual with Lakshmi Narayan or Lakshmi Kubera Havan for deeper cleansing.</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Get Lakshmi Puja Quote</Button>
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
                                                "10+ years experience in Diwali Lakshmi Puja and office pujas.",
                                                "Hundreds of pujas performed for homes and corporates.",
                                                "Coverage across Pune’s prime areas (Kothrud, Baner, etc.).",
                                                "Multilingual pandits (Marathi, Hindi, English, Gujarati).",
                                                "Clear samagri guidelines and punctual service."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-gold-400 mr-2">✓</span>
                                                    <span className="text-gold-50 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Service Coverage</h2>
                                        <p className="text-gold-100 text-sm mb-4">
                                            While focused on Pune, we are expanding to other major cities.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Pune', 'Mumbai', 'Thane', 'Bangalore', 'Hyderabad', 'Delhi-NCR', 'Nagpur', 'Ahmedabad'].map(city => (
                                                <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-gold-500/30">{city}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Booking Process */}
                            <section id="how-to-book">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">How to Book Lakshmi Puja</h2>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li><strong>Contact Us:</strong> Share details via form or WhatsApp.</li>
                                    <li><strong>Consultation:</strong> Receive suggested muhurat and package options.</li>
                                    <li><strong>Confirmation:</strong> Confirm with token; get pandit profile and checklist.</li>
                                    <li><strong>Puja Day:</strong> Get reminders and support till completion.</li>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Lakshmi Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Booking</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
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
                        currentSlug="lakshmi-puja"
                        category="wealth-prosperity"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Lakshmi Puja" />
            <Footer />
        </>
    )
}
