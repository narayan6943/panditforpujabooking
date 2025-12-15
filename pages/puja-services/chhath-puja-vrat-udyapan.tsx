import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ChhathPujaVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Chhath Puja Vrat Udyapan',
        description: 'Book verified pandit for Chhath Puja Vrat Udyapan in Pune. Authentic Surya Shashthi rituals with Soop donation and Havan.',
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
                <title>Chhath Puja Vrat Udyapan in Pune | Surya Shashthi Rituals & Vidhi</title>
                <meta name="description" content="Book expert pandit for Chhath Puja Vrat Udyapan in Pune. Complete guidance for Surya Shashthi Udyapan, Arghya vidhi, and Soop Daan rituals. Authentic Bihari tradition." />
                <meta name="keywords" content="chhath puja udyapan pune, chhath puja vidhi, surya shashthi udyapan, chhath pandit pune, bihari pandit for chhath" />
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
                            <span className="text-maroon-900 font-semibold">Chhath Puja Udyapan</span>
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
                            src="/images/chhath-puja-hero.png"
                            alt="Chhath Puja Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Worship of the Sun God</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Chhath Puja Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Complete Surya Shashthi Rituals in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Perform the sacred Udyapan of the rigorous 36-hour Chhath Vrat with pure devotion. Our expert Pandits guide you through the Kharna, Sandhya Arghya, and Usha Arghya rituals along with the special Udyapan Havan.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Chhath Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Chhath%20Puja%20Udyapan" target="_blank" rel="noopener noreferrer">
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

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Chhath Puja</strong> is not just a festival; it is a rigorous "Mahaparv" of purity, discipline, and devotion primarily observed in Bihar, Jharkhand, and Uttar Pradesh. It is the only Vedic festival dedicated to Lord Surya (the visible God) and Chhathi Maiya (His sister), where no priest is required for the main Arghya, yet the <strong>Udyapan</strong> requires expert guidance for the Havan conclusion.
                                </p>
                                <p>
                                    The festival is a celebration of nature, involving worship of the Sun, Water, and agricultural produce (Sugarcane, Wheat, Fruits). The <strong>Udyapan</strong> is the grand closing ceremony performed by a devotee who wishes to complete their vow of performing Chhath for a specific number of years.
                                </p>
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
                                    <h4 className="text-lg font-bold text-maroon-800 m-0 mb-2">The 36-Hour Nirjala Challenge</h4>
                                    <p className="m-0 text-sm">
                                        The Vrat is considered one of the toughest, requiring a 36-hour waterless fast from Kharna evening (Day 2) to Usha Arghya morning (Day 4). It is believed to detoxify the body and align the mind with cosmic energy.
                                    </p>
                                </div>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend of Chhathi Maiya</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    Why we worship the Goddess of the Sixth Day.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">King Priyavrat's Miracle</h3>
                                    <p>
                                        Legend says King Priyavrat and Queen Malini were childless. After a Yajna, a child was born but was stillborn. As the King lamented at the cremation ground, a celestial goddess appeared. She introduced herself as <strong>Shashti Devi</strong> (Manas Putri of Brahma). She touched the infant, and he came back to life. The King then initiated her worship on the Shashti Tithi.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Karna's Anga Desh Connection</h3>
                                    <p>
                                        Karna, the son of the Sun God and King of Anga Desh (modern-day Munger/Bhagalpur region of Bihar), used to stand in waist-deep water daily to offer prayers to his father Surya. This established the tradition of offering Arghya from the water.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Draupadi's Vrat</h3>
                                    <p>
                                        It is also believed that on the advice of Sage Dhaumya, Draupadi performed Chhath Puja to help the Pandavas regain their lost kingdom and health.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The 4-Day Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">A journey from Nahay Khay to Paran.</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="border-l-4 border-gold-400 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 1: Nahay Khay (Purification)</h3>
                                        <p className="text-gray-700 mb-4">The Vrati takes a holy bath and cleans the entire house. The meal is strictly Satvik: <strong>Bottle Gourd (Lauki) sabzi, Chana Dal, and Rice</strong> cooked in earthen or bronze utensils.</p>
                                    </div>

                                    <div className="border-l-4 border-saffron-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 2: Kharna (Lohanda)</h3>
                                        <p className="text-gray-700 mb-4">The devotee fasts all day (without water). In the evening, <strong>Rasiya (Jaggery Kheer)</strong> and Rotis are prepared and offered to the Sun/Agni. The Vrati eats this प्रसाद in silence. After this, the 36-hour Nirjala fast begins.</p>
                                    </div>

                                    <div className="border-l-4 border-maroon-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 3: Sandhya Arghya (Setting Sun)</h3>
                                        <p className="text-gray-700 mb-4">The crucial day. Bamboo baskets (Daura/Soop) are filled with Thekua and fruits. Families process to the river Ghat. Standing in waist-deep water, the Vrati offers Arghya (milk/water) to the setting sun (Astachal Gami Surya).</p>
                                    </div>

                                    <div className="border-l-4 border-green-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 4: Usha Arghya & Udyapan</h3>
                                        <p className="text-gray-700 mb-4">Devotees gather at the Ghat before sunrise. Arghya is offered to the rising sun (Udayachal Surya). <br /><br /><strong>Udyapan Special Ritual:</strong> After the Arghya, a Havan is performed. The Vrati donates the decorated Soops to Brahmins and other devotees, marking the completion of the vow.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    The items used are completely eco-friendly and seasonal. Nothing artificial is used.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">The "Prasad"</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Thekua (Khajuria):</strong> Cookies made of Whole Wheat Flour, Jaggery, and Ghee. (No Maida/Sugar).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bhusuwa:</strong> Rice flour ladoos.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruits:</strong> Sugar Cane (Ganna) with leaves, Sweet Lime (Dabh), Banana bunches, Coconut.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Puja Hardware</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bamboo Soop:</strong> Winnowing baskets (essential for Arghya).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Daura:</strong> Big bamboo basket to carry offerings to Ghat.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Earthen Stove:</strong> Only clay stove (Chulha) using Mango wood is used for cooking Prasad.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> For the Udyapan conclusion.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Chhath Puja Dates 2025</h2>
                                <p>
                                    Chhath is performed twice a year: <strong>Kartik Chhath</strong> (Oct/Nov - Main) and <strong>Chaiti Chhath</strong> (April). Udyapan is preferred during Kartik Chhath.
                                </p>

                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
                                        <thead className="bg-maroon-900 text-gold-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Event</th>
                                                <th className="py-3 px-4 text-left">Chaiti Chhath Date</th>
                                                <th className="py-3 px-4 text-left">Kartik Chhath Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                ["Nahay Khay", "2 April 2025", "26 October 2025"],
                                                ["Kharna", "3 April 2025", "27 October 2025"],
                                                ["Sandhya Arghya", "4 April 2025", "28 October 2025"],
                                                ["Usha Arghya", "5 April 2025", "29 October 2025"],
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
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Authentic Bihari Tradition</h2>
                                        <p className="text-gold-100 mb-6">Chhath is about purity and strict adherence to rules. Our Pandits respect the sanctity of this Mahaparv.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Pandits fluent in Chhath mantras & vidhi",
                                                "Guidance on pure Thekua preparation (Niyam)",
                                                "Assistance with Ghat rituals for Arghya",
                                                "Complete Havan service for Udyapan",
                                                "Available in all major Pune areas"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Chhath Udyapan</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹5,100 <span className="text-sm font-normal text-gray-300">Pandit Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">We ensure the Udyapan is conducted flawlessly.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "Can I perform Chhath at home if I can't go to the river?",
                                            a: "Yes. While flowing water is ideal, in cities you can perform Arghya in a swimming pool, or even create a temporary artificial pond on your terrace using bricks and a plastic sheet. The water must be clean."
                                        },
                                        {
                                            q: "What if I accidentally drink water during the fast?",
                                            a: "The 'Nirjala' vow is strict. If broken accidentally, seek forgiveness from Surya Dev and try to continue. However, for a valid Udyapan, the fast must be unbroken. Consult a Pandit for 'Prayaschit'."
                                        },
                                        {
                                            q: "Why is Garlic and Onion prohibited?",
                                            a: "Chhath is a Tamasic-free festival. For the entire 4 days, not just the Vrati but the entire family must eat only Satvik food (no onion/garlic) to maintain the purity of the environment."
                                        },
                                        {
                                            q: "What is the science behind Chhath?",
                                            a: "Scientifically, the rituals are designed to absorb maximum Vitamin D and cosmic energy from the Sun during sunrise and sunset (when UV rays are lowest). Detoxification benefits of the fast are also cited."
                                        },
                                        {
                                            q: "Who is Chhathi Maiya?",
                                            a: "She is considered the 'Manas Putri' of Brahma and the sister of Surya. She is the protector of children and bestower of longevity."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.a}</p>
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Chhath Pandit</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Jai Chhathi Maiya!</p>

                                

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Need help with Samagri list?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Chhath%20Udyapan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
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
                                        <p className="text-gray-600 text-sm italic mb-2">"Finding a Pandit ji who knows authentic Chhath vidhi in Pune was tough until we found this service. The Udyapan at Bund Garden riverside was conducted perfectly."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">RJ</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Rajesh Jha</p>
                                                <p className="text-[10px] text-gray-500">Wagholi, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Chhath Puja Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
