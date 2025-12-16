import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'


export default function JanmashtamiVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Janmashtami Vrat Udyapan',
        description: 'Book Pandit for Janmashtami Vrat Udyapan in Pune. Celebrate Lord Krishna\'s birth with authentic midnight Puja and Abhishek.',
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
            price: '2500',
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
                <title>Janmashtami Vrat Udyapan in Pune | Krishna Janmotsav Puja</title>
                <meta name="description" content="Book expert Pandit for Janmashtami Vrat Udyapan in Pune. Conclude your Krishna Janmashtami fast with detailed Balswaroop Abhishek and Havan." />
                <meta name="keywords" content="janmashtami vrat udyapan pune, krishna janmashtami puja, gokulashtami udyapan, laddu gopal abhishek" />
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
                            <span className="text-maroon-900 font-semibold">Janmashtami Udyapan</span>
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
                            src="/images/satyanarayan-puja-hero.png"
                            alt="Janmashtami Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Birth</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Janmashtami Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Welcome Laddu Gopal</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The birth of Lord Krishna is the destroyer of all sins. Perform the Udyapan after fasting to invite His divine grace into your home.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Janmashtami%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Krishna Janmashtami</strong> marks the descent of Lord Vishnu in his most complete and charming avatar, Shri Krishna. It is celebrated on the Ashtami Tithi of the Krishna Paksha in the month of Bhadrapada, when the <strong>Rohini Nakshatra</strong> is ascendant.
                                </p>
                                <p>
                                    The fast observed on this day is considered extremely powerful. It is said to grant the merit of donating 20 million cows. The <strong>Udyapan</strong> is the ritualistic conclusion of this fast, typically performed annually or after a set period (like 12 years), ensuring that the devotee receives the full spiritual benefit of their austerity.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Divine Birth: From Prison to Vrindavan</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The story of the midnight miracle.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Prophecy</h3>
                                    <p>
                                        In the Dwapara Yuga, Mother Earth was burdened by the sins of the demon King Kansa. A divine prophecy announced that the eighth child of his sister Devaki would be his slayer. Terrified, Kansa imprisoned Devaki and her husband Vasudeva, mercilessly killing their first six newborns.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Midnight Arrival</h3>
                                    <p>
                                        On the stormy night of Ashtami, Lord Krishna was born as the eighth child. Miraculously, the prison guards fell asleep, and the chains broke. Vasudeva carried the divine infant in a basket across the raging Yamuna river to Gokul.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Exchange</h3>
                                    <p>
                                        In Gokul, he exchanged Krishna with Yashoda's newborn daughter (Maya). When Kansa tried to kill the girl, she transformed into Goddess Durga and warned him of his specific doom. This miraculous birth is reenacted in every home during the Janmashtami Puja involving the <strong>Kheera (Cucumber) ritual</strong>.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Celebrating the Divine Arrival</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Fasting (Vrat)</h3>
                                        <p className="text-gray-700">
                                            Devotees observe a strict fast all day. Some take 'Phalahar' (fruits/milk), while others observe 'Nirjala' (waterless). The fast is broken only after the Puja at midnight (Nishita Kaal) or the next morning (Paran) depending on family tradition.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. The Birth Ritual (Nal Chedan)</h3>
                                        <p className="text-gray-700">
                                            This is unique to Janmashtami. A <strong>Cucumber with a stalk</strong> is placed near the idol. At midnight, the stalk is cut with a coin, symbolizing the cutting of the umbilical cord and the separation of the baby from the mother's womb.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Panchamrit Abhishek</h3>
                                        <p className="text-gray-700">
                                            The idol of Laddu Gopal (Baby Krishna) is placed in a conch shell (Shankh) and bathed with Milk, Curd, Ghee, Honey, and Sugar water, followed by Gangajal. This is accompanied by the chanting of 'Purusha Sukta' or 'Hare Krishna'.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Shringaar & Jhula</h3>
                                        <p className="text-gray-700">
                                            The Lord is dressed in new silk clothes (yellow/pitambar). He is adorned with jewelry, fresh flower garlands (Vaijayanti Mala is his favorite), and placed on a decorated swing (Jhula). Rocking the Jhula is considered a great service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Chappan Bhog Offering</h3>
                                        <p className="text-gray-700">
                                            A grand offering of 56 items (or as many as possible). Essential items include Makhan (white butter), Mishri (rock sugar), Panjiri (coriander powder sweet), and Charanamrit with Tulsi leaves.
                                            <br /><em className="text-sm text-maroon-600">*Note: Tulsi is mandatory. Krishna does not accept food without Tulsi.*</em>
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">6. Havan & Paran (Next Morning)</h3>
                                        <p className="text-gray-700">
                                            For Udyapan, a Havan is performed the next morning (Navami). Ahutis of Kheer and Ghee are offered to Vishnu and the Demigods. Following this, the fast is broken (Paran).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Specific items for the Birthday Celebration.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Abhishek & Decor</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cucumber:</strong> With stalk (Essential for birth ritual).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Panchamrit:</strong> Milk, Curd, Ghee, Honey, Sugar.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Vastra:</strong> New Yellow Silk cloth, Flute, Peacock feather.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> Rose, Jasmine, Tulsi garland.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Bhog & Havan</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Makhan-Mishri:</strong> White Butter and Rock Candy.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Dhaniya Panjiri:</strong> Coriander powder mixed with sugar/dry fruits.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Tulsi Leaves:</strong> Mandatory for Bhog.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> Til, Jau, Ghee, Wood.</li>
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
                                            q: "When exactly should I break the fast (Paran)?",
                                            a: "The most auspicious time is after the sunrise on the next day (Ashtami Tithi end or Rohini Nakshatra end). Some break it at midnight after the Janam Puja, but for Udyapan, next morning is standard."
                                        },
                                        {
                                            q: "Can pregnant women fast on Janmashtami?",
                                            a: "Pregnant women should prioritize their health. If they wish to fast, they should take Phalahar (milk/fruits) excessively and avoid Nirjala fasting. Consult your doctor."
                                        },
                                        {
                                            q: "What if I don't have a Laddu Gopal idol?",
                                            a: "You can worship a picture of Baby Krishna or even Lord Vishnu/Shaligram. The devotion (Bhav) is more important than the physical idol."
                                        },
                                        {
                                            q: "Why is the Cucumber ritual done?",
                                            a: "It is a symbolic enactment of the birth. The cucumber is considered the 'womb' and the stalk the 'umbilical cord'. Cutting it signifies the safe delivery of the Lord."
                                        },
                                        {
                                            q: "Can I do Udyapan at a Krishna Temple?",
                                            a: "Yes, performing Udyapan at a temple (like ISKCON or a local temple) is excellent. You can sponsor the Bhog or Abhishek there."
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
                            
                        </div>

                    </div>
                </div>


                <PujaServiceLocations pujaName="Janmashtami Vrat Udyapan" />
                <Footer />
            </main>
        </>
    )
}
