import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function NavratriVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Navratri Vrat Udyapan',
        description: 'Book verified pandit for Navratri Vrat Udyapan in Pune. Including Kanya Pujan, Havan, and complete Durga Saptashati rituals.',
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
            price: '4500',
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
                <title>Navratri Vrat Udyapan in Pune | Kanya Pujan & Havan Vidhi</title>
                <meta name="description" content="Book expert pandit for Navratri Vrat Udyapan in Pune. Complete Mahanavami rituals including Kanya Pujan, Havan, and Durga Saptashati Paath conclusion." />
                <meta name="keywords" content="navratri udyapan pune, kanya pujan vidhi, durga puja udyapan, navratri havan pune, mahanavami puja" />
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
                            <span className="text-maroon-900 font-semibold">Navratri Vrat Udyapan</span>
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
                            src="/images/navratri-udyapan-hero.png"
                            alt="Navratri Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Jaikara Sherawali Da</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Navratri Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Kanya Pujan & Havan Services in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Celebrate the conclusion of your 9-day Shakti Sadhana with divine Kanya Pujan and Havan. Our expert Pandits ensure the correct invocations for all 9 forms of Goddess Durga.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Navratri Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Navratri%20Udyapan" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Navratri Vrat Udyapan</strong> is the grand conclusion of the nine-day spiritual journey dedicated to Goddess Durga. Whether observed in Chaitra (Spring) or Sharad (Autumn), these nine nights are powerful for accumulating spiritual energy (Shakti).
                                </p>
                                <p>
                                    The Udyapan is crucial to "seal" the merits of the fast. It typically culminates on <strong>Maha Ashtami</strong> or <strong>Mahanavami</strong> with the auspicious <strong>Kanya Pujan</strong> (worship of young girls) and a Havan, signifying victory over internal and external demons.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-red-50 p-8 rounded-2xl border border-red-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: Victory of Shakti</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    How the Devi saved the universe.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Terror of Mahishasura</h3>
                                    <p>
                                        The demon Mahishasura had a boon that no man or god could kill him. Empowered by this arrogance, he defeated Indra and the Devas, ruling the three worlds with terror. The Trinity (Brahma, Vishnu, Mahesh) combined their energies to create a supreme female form—<strong>Goddess Durga</strong>.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Nine-Day Battle</h3>
                                    <p>
                                        Durga, mounted on a lion and armed with weapons from all gods, fought the demon army for nine days and nights. On the tenth day (Vijayadashami), she beheaded Mahishasura. The nine forms (Navadurga) worshipped during Navratri represent the different stages of this battle and aspects of her power.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Rama's Invocation</h3>
                                    <p>
                                        Another legend states that Lord Rama worshipped Durga for nine days before attacking Lanka. On the ninth day, She blessed him, and on the tenth, he killed Ravana. Thus, Navratri is the festival of victory.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Great Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Invoking the 9 Forms of Devi.</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Ghat Sthapana & Khetri Check</h3>
                                        <p className="text-gray-700">
                                            If 'Khetri' (Barley) was sown on Day 1, its growth is checked. Green, tall barley indicates prosperity. The Kalash established on Day 1 is worshipped again, and the water is later sprinkled in the house.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Havan (Fire Lab)</h3>
                                        <p className="text-gray-700">
                                            The Havan is the mouth of the Gods. Essential ahutis include Ghee, Honey, Pudding (Halwa/Kheer), and Kamal Gatta (Lotus seeds). The <strong>Navarna Mantra</strong> (Om Aim Hreem Kleem Chamundayai Vichche) is chanted 108 times.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Kanya Pujan (Kumari Puja)</h3>
                                        <p className="text-gray-700">
                                            This is the heart of the Udyapan. 9 young girls (pre-pubescent) are invited, representing the 9 Durgas. A young boy is also worshiped as 'Langur' (form of Bhairav/Hanuman), as Devi's worship is incomplete without him.
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Pada Prakshalan:</strong> Washing their feet with water.</li>
                                            <li><strong>Tilak & Moli:</strong> Applying vermilion and tying sacred thread.</li>
                                            <li><strong>Bhog:</strong> Feeding them Halwa, Puri, and Black Chana.</li>
                                            <li><strong>Dakshina:</strong> Giving gifts (bangles, chunari, stationery) and money.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Shringar Offering</h3>
                                        <p className="text-gray-700">
                                            A complete 'Solah Shringar' kit (Bindi, Sindoor, Bangles, Lipstick, Comb, Mirror, Red Chunari, Saree) is offered to the Goddess and then donated to a Brahmin woman.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Visarjan</h3>
                                        <p className="text-gray-700">
                                            Finally, the Kalash and Khetri are immersed in a flowing river or a clean water body, requesting the Goddess to visit again next year ("Agla Baras Jaldi Aana").
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Everything needed for Havan and Kanya Pujan.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Kanya Pujan & Gifts</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>For 9 Girls:</strong> 9 Plates/Bowls, 9 Chunaris, 9 Sets of Bangles.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Gifts:</strong> Stationery, hair clips, or small toys.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Dakshina:</strong> 9 Coins or Notes.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bhairav:</strong> One gift set for the boy.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Havan & Bhog</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan:</strong> Kund, Wood, Ghee, Havan Samagri packet.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Ahuti Extras:</strong> Kamal Gatta, Batashe, Dry Coconut (Gola).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Food:</strong> Halwa (Sooji), Black Chan, Puri (Fried bread).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Decor:</strong> Red flowers (Hibiscus), Mango leaves.</li>
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
                                            q: "Should I do Udyapan on Ashtami or Navami?",
                                            a: "Both are correct. North Indians often celebrate 'Kanjak' on Ashtami, while others do Mahanavami Havan. Follow your 'Kul Parampara' (family tradition). If unsure, Navami is universally accepted."
                                        },
                                        {
                                            q: "What if I can't find 9 girls?",
                                            a: "In cities, finding 9 girls can be hard. Worship as many as you find (e.g., 2 or 5). Imagine the rest as invoked in the betel, nuts (Supari). You can donate the remaining food/gifts to an orphanage or poor children later."
                                        },
                                        {
                                            q: "Why is a boy worshipped in Kanya Pujan?",
                                            a: "The boy represents 'Langur' or Lord Bhairav/Hanuman. Goddess Durga promised that her worship would only be complete if her guardian Bhairav is also honoured."
                                        },
                                        {
                                            q: "Can I eat grains on Udyapan day?",
                                            a: "You should perform the Puja and Havan while fasting (or on fruits). After feeding the Kanyas and Brahmins, you can break your fast with the Prasad (Halwa/Puri)."
                                        },
                                        {
                                            q: "Can menstruating women perform the Udyapan?",
                                            a: "No. The energy during Navratri is very high and requires strict purity. It is better to postpone the Udyapan to the next Navratri or have a male family member perform the main rites while you mentally participate from a distance."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Durga Udyapan</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Complete your Shakti Sadhana</p>

                                

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Questions about Kanya Pujan?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Navratri%20Udyapan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
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
                                        <p className="text-gray-600 text-sm italic mb-2">"We were struggling to find a pandit during Navratri rush. This team not only sent a knowledgeable Guruji but he also patiently waited for the kanya pujan to complete."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">ST</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Seema T.</p>
                                                <p className="text-[10px] text-gray-500">Kalyani Nagar, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Navratri Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
