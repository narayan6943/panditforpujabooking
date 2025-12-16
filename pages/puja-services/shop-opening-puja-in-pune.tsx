import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShopOpeningPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shop Opening Puja in Pune',
        description: 'Book verified pandit for Shop Opening Puja in Pune. Sacred ritual for new retail outlets, showrooms, and commercial shops for prosperity and success.',
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
            { '@type': 'City', name: 'Pune' },
            { '@type': 'City', name: 'Baner' },
            { '@type': 'City', name: 'Wakad' },
            { '@type': 'City', name: 'Kharadi' },
            { '@type': 'City', name: 'Hinjewadi' }
        ],
        offers: {
            '@type': 'AggregateOffer',
            lowPrice: '2500',
            highPrice: '8000',
            priceCurrency: 'INR',
        },
    }

    const sections = [
        { id: 'intro', title: 'What is Shop Opening Puja?' },
        { id: 'importance', title: 'Why Important?' },
        { id: 'types', title: 'Types of Shop Puja' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'packages', title: 'Packages' },
        { id: 'faqs', title: 'FAQs' },
    ]

    const puneLocations = [
        'Baner', 'Wakad', 'Kharadi', 'Hinjewadi', 'Viman Nagar',
        'Hadapsar', 'Koregaon Park', 'Aundh', 'Pimpri Chinchwad',
        'Mundhwa', 'Yerawada', 'Camp'
    ]

    return (
        <>
            <Head>
                <title>Shop Opening Puja in Pune | Bless Your New Shop with Certified Pandit Ji</title>
                <meta name="description" content="Book expert pandit for Shop Opening Puja in Pune. Sacred Vedic rituals for new retail outlets, showrooms, and commercial shops. Samagri included. Verified Pandits across Baner, Wakad, Kharadi." />
                <meta name="keywords" content="shop opening puja pune, retail shop puja, showroom opening ceremony, business puja pune, shop inauguration puja" />
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
                            <span className="text-maroon-900 font-semibold">Shop Opening Puja</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Business Blessing Ceremony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shop Opening Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Bless Your New Shop with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Shop Opening Puja in Pune is a sacred and highly auspicious ritual performed to bless new retail outlets, showrooms, and commercial shops. The ceremony invokes divine blessings to ensure prosperity, customer footfall, smooth operations, and protection from financial or operational obstacles.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Shop Opening Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shop%20Opening%20Puja" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-gold-500/30">
                                <p className="text-gold-200 text-sm mb-2 font-semibold">Service Areas in Pune:</p>
                                <div className="flex flex-wrap gap-2">
                                    {puneLocations.map((location) => (
                                        <span key={location} className="px-3 py-1 bg-gold-500/20 border border-gold-400/30 rounded-full text-xs text-gold-100">
                                            {location}
                                        </span>
                                    ))}
                                </div>
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
                                    Shop owners across Pune—including those in Baner, Wakad, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp—trust our certified pandits with over ten years of experience to conduct this puja following strict Vedic traditions. All samagri is included, and each ritual is meticulously executed to maximize benefits for both business and family.
                                </p>

                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Looking to book an experienced pandit for Shop Opening Puja in Pune? Contact us today – samagri included! Our pandits provide doorstep services and ensure every participant is guided through the rituals.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🏪</span>
                                    What is Shop Opening Puja?
                                </h2>
                                <p>
                                    Shop Opening Puja is a Vedic ceremony conducted to bless new shops, showrooms, and retail establishments. It invokes deities such as Ganapati, Lakshmi, and Kubera to ensure financial stability, removal of obstacles, and business growth. In Pune, this ritual is particularly popular among shop owners in Baner, Wakad, Kharadi, and Hinjewadi, corporate retail chains in Koregaon Park and Viman Nagar, and small businesses in Hadapsar, Aundh, and Pimpri Chinchwad.
                                </p>
                                <p>
                                    The puja involves chanting specific mantras, Kalash Sthapana, Ganapati Puja, Lakshmi Kubera Havan, and distribution of prasad, all conducted by certified pandits to maximize spiritual and material benefits.
                                </p>
                                <p>
                                    For new shops in Mundhwa, Yerawada, and Camp, the puja is conducted to align the energy of the commercial space with prosperity, customer attraction, and smooth business operations. It is an essential ritual for entrepreneurs, tenants, and NRIs looking to open retail establishments in Pune.
                                </p>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is Shop Opening Puja Important?</h2>
                                <p>
                                    Shop Opening Puja is crucial for aligning the energies of the commercial space with divine blessings. This ritual is designed to protect the shop from financial losses, operational obstacles, and negative influences. For business owners in Baner, Wakad, Kharadi, Hinjewadi, and Viman Nagar, it provides confidence, clarity, and spiritual assurance before launching operations.
                                </p>
                                <p>
                                    Apart from financial and operational benefits, the Shop Opening Puja also creates a positive psychological environment for employees and shopkeepers. Employees participating in the rituals feel united, focused, and motivated. In high-competition retail markets of Pune, such rituals provide a distinct edge by establishing a spiritually harmonious and inviting atmosphere for customers.
                                </p>
                                <p>
                                    Our verified pandits ensure each mantra, Havan offering, and ritual step is meticulously performed, delivering maximum impact for both the business and its stakeholders. Shop owners in Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp can avail of our doorstep services for convenience.
                                </p>

                                <h3>Key Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 not-prose">
                                    {[
                                        'Ensures smooth business operations and customer satisfaction',
                                        'Invokes blessings for financial growth and prosperity',
                                        'Removes obstacles and negative energies from workspace',
                                        'Enhances employee morale and team cohesion',
                                        'Increases customer footfall and trust',
                                        'Protects from disputes and operational challenges'
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Types of Shop Opening Puja */}
                            <section id="types">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Shop Opening Puja</h2>
                                <p className="text-gray-700 mb-6">
                                    Shop Opening Puja varies according to the scale and type of business. Each type has specific samagri, mantras, and rituals to ensure precise alignment with business goals and positive energy flow.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Retail Shop Puja",
                                            subtitle: "Small Shops & Boutiques",
                                            desc: "Focuses on small shops, boutiques, and service-based outlets. Simplified rituals perfect for local businesses in Baner, Wakad, and Kharadi."
                                        },
                                        {
                                            title: "Showroom Puja",
                                            subtitle: "Large Commercial Spaces",
                                            desc: "Suitable for larger commercial spaces selling electronics, vehicles, or luxury items. Elaborate ceremonies for Koregaon Park and Aundh showrooms."
                                        },
                                        {
                                            title: "Market Stall Puja",
                                            subtitle: "Vendor Stalls",
                                            desc: "Caters to vendors in local markets. Quick and effective rituals for market-based businesses in Pimpri Chinchwad and Mundhwa."
                                        },
                                        {
                                            title: "Home-Based Shop Puja",
                                            subtitle: "Residential Business",
                                            desc: "Designed for businesses operated from residential premises. Perfect for home entrepreneurs in Viman Nagar and Hadapsar."
                                        }
                                    ].map((type, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-saffron-500 hover:shadow-lg transition-shadow">
                                            <h3 className="text-xl font-bold text-maroon-900 mb-1">{type.title}</h3>
                                            <span className="text-xs uppercase tracking-wider text-saffron-600 font-bold block mb-3">{type.subtitle}</span>
                                            <p className="text-gray-600 text-sm">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Shop Opening Puja Vidhi (Step-by-Step)</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Authentic Vedic procedure for business blessing</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <p className="text-gray-700 mb-6">
                                            The Shop Opening Puja Vidhi is meticulously structured to bless the new commercial space. Duration ranges from 2.5 hours for small shops to 4 hours for larger commercial establishments.
                                        </p>

                                        <div className="space-y-6">
                                            {[
                                                {
                                                    step: '1',
                                                    title: 'Achaman & Sankalp',
                                                    desc: 'Purification and vow-taking where participants commit to perform the puja with sincerity.',
                                                    time: '10 minutes'
                                                },
                                                {
                                                    step: '2',
                                                    title: 'Ganapati Puja',
                                                    desc: 'Removing obstacles and invoking Lord Ganesha for smooth business operations.',
                                                    time: '15 minutes'
                                                },
                                                {
                                                    step: '3',
                                                    title: 'Kalash Sthapana',
                                                    desc: 'Establishing sacred pot with coconut and mango leaves to signify purity and divine presence.',
                                                    time: '12 minutes'
                                                },
                                                {
                                                    step: '4',
                                                    title: 'Navagraha Puja',
                                                    desc: 'Planetary energy harmonization to balance cosmic influences on the business.',
                                                    time: '25 minutes'
                                                },
                                                {
                                                    step: '5',
                                                    title: 'Lakshmi Kubera Havan',
                                                    desc: 'Wealth and prosperity invocation through sacred fire ritual with specific mantras.',
                                                    time: '45 minutes'
                                                },
                                                {
                                                    step: '6',
                                                    title: 'Shop Tools Puja',
                                                    desc: 'Worship of commercial tools like cash registers, computers, machinery, or products.',
                                                    time: '30 minutes'
                                                },
                                                {
                                                    step: '7',
                                                    title: 'Aarti & Prasad Distribution',
                                                    desc: 'Final blessing with aarti and distribution of prasad to all participants.',
                                                    time: '20 minutes'
                                                }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-4 bg-saffron-50/30 p-4 rounded-lg border border-gold-100">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center font-bold text-lg">
                                                        {item.step}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <h4 className="font-bold text-maroon-900 text-lg">{item.title}</h4>
                                                            <span className="text-xs text-saffron-600 font-semibold bg-saffron-100 px-2 py-1 rounded">{item.time}</span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 bg-gold-50 p-4 rounded-lg text-center border border-gold-200">
                                            <p className="font-semibold text-maroon-900 mb-2">Our pandits are available across all Pune locations</p>
                                            <p className="text-sm text-gray-700">Complete samagri and guidance provided for smooth puja execution</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Shop Opening Puja Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    PanditforPujaBooking.com provides a complete, standardized Shop Opening samagri kit. Proper samagri and exact quantities prevent errors and maximize spiritual efficacy.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> Items We Provide
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Kalash with coconut & mango leaves</li>
                                            <li>Gangajal (sacred water)</li>
                                            <li>Pure ghee for Havan</li>
                                            <li>Rice, flowers, black sesame</li>
                                            <li>Turmeric, kumkum, sindoor</li>
                                            <li>Incense sticks and dhoop</li>
                                            <li>Camphor and cotton wicks</li>
                                            <li>Havan samagri and wood</li>
                                            <li>Puja plates and vessels</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏪</span> You Arrange
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Clean, sacred space in shop</li>
                                            <li>Fresh fruits (5 types)</li>
                                            <li>Sweets for prasad</li>
                                            <li>Shop tools (cash register, computer, products)</li>
                                            <li>New cloth (red/yellow)</li>
                                            <li>Milk for offerings</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-maroon-900 mb-4">Key Items & Purpose</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg border border-gold-200 text-sm">
                                        <thead className="bg-gold-100 text-maroon-900">
                                            <tr>
                                                <th className="py-2 px-3 text-left">Item</th>
                                                <th className="py-2 px-3 text-left">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gold-100">
                                            {[
                                                ["Kalash with coconut & mango leaves", "Purity and divine presence"],
                                                ["Gangajal & pure ghee", "Havan offerings and purification"],
                                                ["Rice, flowers, black sesame", "Symbolic offerings to deities"],
                                                ["Cash registers, computers, products", "Representing workplace tools for blessing"],
                                                ["Fruits & sweets", "Prasad for participants"]
                                            ].map((row, i) => (
                                                <tr key={i}>
                                                    <td className="py-2 px-3 font-medium">{row[0]}</td>
                                                    <td className="py-2 px-3">{row[1]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurat for Shop Opening Puja in 2026</h2>
                                <p>
                                    Selecting an auspicious muhurat ensures maximum effectiveness of the puja. For Pune, favorable days are determined according to the lunar calendar. Our pandits customize timings for shops in all Pune locations.
                                </p>

                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
                                        <thead className="bg-maroon-900 text-gold-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Month</th>
                                                <th className="py-3 px-4 text-left">Auspicious Date</th>
                                                <th className="py-3 px-4 text-left">Day</th>
                                                <th className="py-3 px-4 text-left">Ideal Time (IST)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                ["February", "16", "Friday", "7:00–9:00 AM"],
                                                ["March", "19", "Wednesday", "6:30–8:30 AM"],
                                                ["April", "17", "Monday", "7:00–9:00 AM"],
                                                ["May", "08", "Friday", "6:30–8:30 AM"],
                                                ["June", "12", "Friday", "7:00–9:00 AM"],
                                                ["September", "23", "Wednesday", "6:30–8:30 AM"],
                                                ["October", "16", "Friday", "7:00–9:00 AM"],
                                                ["November", "20", "Friday", "6:30–8:30 AM"]
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-semibold text-maroon-700">{row[0]}</td>
                                                    <td className="py-3 px-4">{row[1]}</td>
                                                    <td className="py-3 px-4">{row[2]}</td>
                                                    <td className="py-3 px-4">{row[3]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="text-xs text-gray-500 mt-2">*Consult our pandits for personalized muhurat according to shop location and type of business.</p>
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Shop Opening Puja</h2>
                                <p className="text-gray-700 mb-6">
                                    Performing Shop Opening Puja ensures smooth operations, financial growth, positive employee energy, and increased customer satisfaction. Shop owners across Pune report enhanced footfall and improved profitability post-puja.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Smooth business operations and daily workflow",
                                        "Financial growth and increased profitability",
                                        "Positive employee energy and team cohesion",
                                        "Increased customer satisfaction and footfall",
                                        "Protection from negative energies and disputes",
                                        "Enhanced business reputation and trust",
                                        "Spiritual foundation for long-term success",
                                        "Confidence and peace of mind for owners"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-2xl mr-3">✨</span>
                                            <p className="text-sm text-gray-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Packages */}
                            <section id="packages" className="bg-white rounded-2xl shadow-lg p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Cost & Packages</h2>
                                <p className="text-gray-700 mb-8">Flexible packages for Shop Opening Puja covering all Pune locations</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            name: "Basic",
                                            price: "₹2,500",
                                            features: [
                                                "1 Pandit",
                                                "108 Mantras",
                                                "2.5 Hours Duration",
                                                "Basic Samagri",
                                                "Ganapati Puja",
                                                "Simple Havan"
                                            ]
                                        },
                                        {
                                            name: "Standard",
                                            price: "₹5,000",
                                            features: [
                                                "2 Pandits",
                                                "1008 Mantras",
                                                "3 Hours Duration",
                                                "Complete Samagri",
                                                "Lakshmi Kubera Havan",
                                                "Shop Tools Puja",
                                                "Prasad Included"
                                            ],
                                            popular: true
                                        },
                                        {
                                            name: "Premium",
                                            price: "₹8,000",
                                            features: [
                                                "3 Pandits",
                                                "Extended Mantras",
                                                "4 Hours Duration",
                                                "Premium Samagri",
                                                "Personalized Kalash",
                                                "Guidance Session",
                                                "Post-Puja Instructions",
                                                "Photo Documentation"
                                            ]
                                        }
                                    ].map((pkg, i) => (
                                        <div key={i} className={`rounded-xl p-6 border-2 ${pkg.popular ? 'border-gold-500 bg-gradient-to-br from-gold-50 to-saffron-50 shadow-xl' : 'border-gray-200 bg-white'}`}>
                                            {pkg.popular && (
                                                <span className="inline-block px-3 py-1 bg-maroon-900 text-gold-300 text-xs font-bold rounded-full mb-3">MOST POPULAR</span>
                                            )}
                                            <h3 className="text-2xl font-bold text-maroon-900 mb-2">{pkg.name}</h3>
                                            <div className="text-3xl font-bold text-saffron-600 mb-6">{pkg.price}</div>
                                            <ul className="space-y-3 mb-6">
                                                {pkg.features.map((feature, j) => (
                                                    <li key={j} className="flex items-start text-sm text-gray-700">
                                                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button variant={pkg.popular ? "primary" : "outline"} size="md" className="w-full" href="tel:+918446272142">
                                                Book Now
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-serif font-bold text-gold-300 mb-6">Why Choose Our Verified Pandits?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <ul className="space-y-3">
                                            {[
                                                "10+ years average experience in Shop Opening rituals",
                                                "500+ successful Shop Opening Pujas in Pune",
                                                "Certified and background-verified pandits",
                                                "Complete samagri included in all packages"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-gold-400 mr-2">✓</span>
                                                    <span className="text-gold-50 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="space-y-3">
                                            {[
                                                "Doorstep services across all Pune locations",
                                                "Guidance throughout rituals and post-puja",
                                                "Language options: Marathi, Hindi, Sanskrit",
                                                "Flexible timing and personalized muhurat"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-gold-400 mr-2">✓</span>
                                                    <span className="text-gold-50 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "What is Shop Opening Puja?",
                                            a: "A Vedic ritual to bless new shops, retail outlets, and showrooms for prosperity and protection. It invokes deities like Ganapati, Lakshmi, and Kubera for business success."
                                        },
                                        {
                                            q: "Who should perform it?",
                                            a: "Shop owners, retail chains, start-ups, and home-based businesses should perform this puja before opening their commercial establishment."
                                        },
                                        {
                                            q: "How long does it take?",
                                            a: "Small shops: 2.5 hours. Large showrooms: up to 4 hours. Duration depends on the package selected and size of establishment."
                                        },
                                        {
                                            q: "Is samagri included in Pune services?",
                                            a: "Yes, all samagri items are provided by our pandits. You only need to arrange fresh perishables like fruits and sweets."
                                        },
                                        {
                                            q: "Can the puja be performed at any shop location?",
                                            a: "Absolutely! We provide services across all Pune locations including Baner, Wakad, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp."
                                        },
                                        {
                                            q: "Do I need to fast?",
                                            a: "Light fasting until Aarti is recommended but not mandatory. You can consult with our pandit for specific guidance."
                                        },
                                        {
                                            q: "Best muhurat for 2026?",
                                            a: "February 16, March 19, and April 17 are highly auspicious. Personalized dates available based on your business type and location."
                                        },
                                        {
                                            q: "What are post-puja instructions?",
                                            a: "Maintain cleanliness in the shop, donate as guided by the pandit, and chant mantras regularly for continued blessings and prosperity."
                                        }
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

                                {/* Table of Contents */}
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
                                <div className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Your Shop Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Query</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                {/* Service Areas */}
                                <div className="bg-gradient-to-br from-saffron-50 to-gold-50 rounded-xl shadow-md p-6 border-2 border-gold-200">
                                    <h4 className="font-bold text-maroon-900 mb-3">Service Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {puneLocations.map((location) => (
                                            <span key={location} className="px-2 py-1 bg-white border border-gold-300 rounded text-xs text-gray-700">
                                                {location}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Shop Opening Puja" />
            <Footer />
        </>
    )
}
