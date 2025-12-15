import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MangalaGauriVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mangala Gauri Vrat Udyapan',
        description: 'Book Pandit for Mangala Gauri Vrat Udyapan in Pune. Shravan Tuesday fast completion for newly wed brides.',
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
                <title>Mangala Gauri Vrat Udyapan in Pune | Shravan Mangalwar Udyapan</title>
                <meta name="description" content="Book expert Pandit for Mangala Gauri Vrat Udyapan in Pune. Traditional ceremony for newly married women with 16 lamps ritual and Devi Puja." />
                <meta name="keywords" content="mangala gauri vrat udyapan pune, mangalagaur udyapan, shravan tuesday fast udyapan, newly wed puja" />
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
                            <span className="text-maroon-900 font-semibold">Mangala Gauri Udyapan</span>
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
                            src="/images/navratri-hero.png"
                            alt="Mangala Gauri Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Akhand Saubhagya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Mangala Gauri Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">For Long Happy Married Life</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                A sacred tradition for newly wed women in Maharashtra. Conclude your Shravan Tuesday Everlasting Sumangali Vrat with a grand Udyapan ceremony.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Mangalagaur
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mangala%20Gauri%20Vrat%20Udyapan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Mangala Gauri Vrat Udyapan</strong> is a celebration of womanhood, marital devotion, and divine grace. Observed primarily in Maharashtra, Karnataka, and Andhra Pradesh, this Vrat is dedicated to Goddess Parvati in her benevolent form as 'Mangala Gauri'—the bestower of auspiciousness on Tuesdays (Mangalwar) of the holy Shravan month.
                                </p>
                                <p>
                                    It is a mandatory tradition for newly married women (Nav-Vadhu) to observe this fast for the first five years of their marriage. The purpose is crystal clear: to seek unwavering longevity (Ayushya) for their husbands and peace in their new homes.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> is the grand concluding ceremony, usually performed in the 5th year, though some opt to do it after the 1st year itself. Unlike a solemn silent prayer, Mangala Gauri is vibrant—marked by the gathering of women (Haldi-Kumkum), exchange of 'Wan' (gifts), and the famous night-long cultural games known as 'Mangalagaur Khel'.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Why 16 is Special?</h2>
                                <p>
                                    The number <strong>16 (Solah)</strong> is the soul of this Vrat. It represents the 16 adornments (Solah Shringar) of a married woman. In the Puja, everything is offered in counts of 16:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>16 Wick Lamps (Diya).</li>
                                    <li>16 Types of Leaves (Patri).</li>
                                    <li>16 Grain Laddoos.</li>
                                    <li>16 Baskets (Wan) given to 16 Married Women.</li>
                                </ul >
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Mangala Gauri Katha: Defeating Death</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    This ancient story illustrates how a devoted wife's prayers can reverse even the destiny written by Yama (God of Death).
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Merchant and the Blessed-Cursed Son</h3>
                                    <p>
                                        There lived a wealthy merchant named Dharmapala in a city. Despite having immense wealth, he was childless and unhappy. After immense penance, Lord Shiva blessed him with a son but with a caveat: "Your son will be brilliant and handsome, but he will live only for 16 years. He will die of snakebite."
                                    </p>
                                    <p>
                                        Dharmapala accepted the child, named him Shivashankar, but lived in constant fear. As the boy approached his 16th year, his parents decided to send him on a pilgrimage to Kashi with his maternal uncle, hoping the holy atmosphere would save him.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Marriage to a 'Mangala Gauri' Devotee</h3>
                                    <p>
                                        On their way, they stopped at a city where a wedding was taking place. The groom was sickly/ugly (in some versions), and his father, wanting to secure a beautiful bride, tricked Shivashankar (handsome) into sitting in the wedding mandap as the proxy groom. Shivashankar married the girl, whose name was found to be Susheela.
                                    </p>
                                    <p>
                                        That night, Shivashankar, being honest, told the bride the truth. "I am a proxy. Also, I am destined to die soon. I am leaving for Kashi." He left her his ring and departed. The bride, Susheela, was a staunch devotee of Mangala Gauri. She had observed the Vrat faithfully. She refused to marry the real groom later and waited for her husband.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Snake and the Vrat's Power</h3>
                                    <p>
                                        Meanwhile, Shivashankar reached the age of 16. As predicted, while sleeping in a garden (or temple), a snake approached to bite him.
                                    </p>
                                    <p>
                                        However, back home, Susheela was performing her <strong>Mangala Gauri Puja</strong>. She was offering 16 laddus to the Goddess. The mother of the snake (a Nagin) appeared there. Susheela, without fear, offered milk and respect to the Nagin. Pleased by the devotion and adhering to the power of the Vrat which grants "Akhand Saubhagya" (unbroken widowhood-free life), the celestial forces intervened.
                                    </p>
                                    <p>
                                        The snake that approached Shivashankar could not bite him. The merit of his wife's fast acted as a shield. Death had to retreat. Shivashankar completed his pilgrimage and returned to the city. He showed the ring, reunited with Susheela, and they returned to his parents, who were overjoyed to see their son alive past 16.
                                    </p>
                                    <p className="font-bold text-maroon-900 mt-4">
                                        Since then, it is believed that observing Mangala Gauri Vrat protects the husband from "Alpa-Mrityu" (untimely death) and accidents.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Ceremony Guide</h2>
                                    <p className="text-gold-200 mt-2">A Festival of 16 Lamps</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. The Altar & Installation</h3>
                                        <p className="text-gray-700">
                                            The Udyapan is best done on a Tuesday in Shravan.
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                            <p><strong>Step 1:</strong> Clean the area and make a Rangoli.</p>
                                            <p><strong>Step 2:</strong> Place a Chowki. Spread a red cloth.</p>
                                            <p><strong>Step 3 (The Deity):</strong> An idol of Annapurna (Silver/Brass) is traditionally used. It is placed in a small plate with rice. Often, a "Shiva Linga" is also placed alongside as Gauri is incomplete without Shiva.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. The Shodoshopchar Puja (16 Steps)</h3>
                                        <p className="text-gray-700">
                                            The Pandit leads the devotee through the 16-step worship.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Patri Puja (Leaf Offering):</strong> This is unique. 16 types of leaves (Mango, Bel, Shami, Durva, Champa, etc.) are offered one by one while chanting 16 names of Gauri (Umaya namah, Patraya namah, Parvatyai namah...).</li>
                                            <li><strong>Pushpa Puja:</strong> Similarly, 16 types of flowers are offered.</li>
                                            <li><strong>Dora Bandhan:</strong> A red thread with 16 knots is worshipped and tied on the hand for protection.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. The 16 Lamp Ritual (Diya Puja)</h3>
                                        <p className="text-gray-700">
                                            Devotees prepare 16 lamps using Wheat Flour (Atta Diyas). In each lamp, 4 wicks (representing Dharma, Artha, Kama, Moksha) are placed.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>These 16 lamps are lit and placed on the altar.</li>
                                            <li>The 'Aarti' is performed using these 16 lamps. It is a mesmerizing sight.</li>
                                            <li>The warmth/light symbolizes the warmth of the home and life.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Wan Daan (Checking the Baskets)</h3>
                                        <p className="text-gray-700">
                                            For Udyapan, 16 'Wan' (Bamboo baskets or stainless steel plates) are prepared. In each Wan, you must place:
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Suhag items (Bangles, comb, mirror).</li>
                                            <li>A blouse piece/cloth.</li>
                                            <li>Fruits/Sweets (Laddoo).</li>
                                            <li>Grain (Rice/Wheat).</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2">
                                            These 16 Wans are gifted to the Mother-in-Law (who is treated as Gauri) and 15 other married women (Sumangalis). Touching their feet and seeking blessings is crucial.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Mangalagaur Khel (Night Vigil)</h3>
                                        <p className="text-gray-700">
                                            Unlike other fasts that end with a meal, Mangala Gauri is celebrated by staying awake. Women gather, sing traditional Marathi/folk songs describing the wedding of Shiva-Parvati, and play games like 'Phugadi', 'Zimma', 'Pingga', and 'Katwat'. This joy and laughter ward off negative energies from the house.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Udyapan requires a large number of items due to the count of 16. Please prepare a week in advance.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">The '16' Essentials</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Wans:</strong> Baskets/Plates (Steel/Bamboo).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Blouse Pieces:</strong> For the Wans.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Betel Nuts & Leaves:</strong> For offering.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Fruits:</strong> Seasonal.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Laddoos:</strong> Wheat/Besan.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Wick Lamps:</strong> Made of dough.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>16 Types of Leaves:</strong> Gather from garden (Tulsi, Mango, Rose leaf, etc).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">General Puja Samagri</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Idol:</strong> Annapurna Devi/Parvati.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Saree:</strong> For the main Goddess offering.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Green Bangles:</strong> A must for Gauri.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Black Beads:</strong> Mangalsutra string.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Panchamrit items:</strong> Milk, Curd, Ghee, Honey, Sugar.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Rangoli colors.</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "I completed 1 year. Should I do Udyapan now or wait for 5 years?",
                                            a: "Traditionally, the Udyapan is the 'Closing' done after the vow is complete, which is usually 5 years. However, ancient scripts allow performing 'Varsha-Udyapan' (Yearly conclusion). If you are moving abroad or cannot continue, you can perform the Final Udyapan after 1 year with fullvidhi."
                                        },
                                        {
                                            q: "Can I do the Puja alone if I don't have a group?",
                                            a: "Yes. While Mangala Gauri is often a community event, the core puja is individual. You need a Pandit to guide the mantra chanting. You can invite friends solely for the Haldi-Kumkum and meal."
                                        },
                                        {
                                            q: "What food should be eaten during the fast?",
                                            a: "The devotee should eat only one meal (Eka-bhukta) of 'Alni' (Salt-less) food. Usually, sweet dishes like Shrikhand-Puri or Kheer are consumed. Avoiding salt on this day is highly meritorious."
                                        },
                                        {
                                            q: "What if I can't find 16 types of leaves?",
                                            a: "Do not worry. The intention matters. Gather as many different types as possible (Mango, Guava, Hibiscus, Rose, Tulsi, Durva). For the rest, you can offer Akshat (Rice) chanting 'Patram Samarpayami'."
                                        },
                                        {
                                            q: "Why is the games (Khel) part important?",
                                            a: "The Khel keeps the women awake (Jagran). Staying awake symbolizes alertness in guarding the household and health of the husband. The physical activity also builds bonds among women."
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

                            {/* Benefits Detailed */}
                            <section id="benefits" className="bg-maroon-50 rounded-2xl p-8 border border-maroon-100">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Blessings of the Divine Mother</h2>
                                <p className="text-gray-700 mb-6 text-lg">
                                    Women who uphold this Vrat with joy and devotion are said to be blessed with:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💖</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Husband's Longevity</h4>
                                            <p className="text-gray-600">The primary benefit is protection against widowhood and accidents for the spouse.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🏡</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Peaceful Home</h4>
                                            <p className="text-gray-600">Removes 'Klesh' (bickering) and strengthens the bond with in-laws (Saas-Bahu).</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">👶</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Healthy Progeny</h4>
                                            <p className="text-gray-600">Ensures the health and brightness of children (Vansh Vridhi).</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🌟</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Spiritual Strength</h4>
                                            <p className="text-gray-600">Builds community, friendship, and spiritual reliance among women.</p>
                                        </div>
                                    </div>
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Mangalagaur</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Traditional Maharashtrian Udyapan</p>

                                
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Mangala Gauri Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
