import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function EkadashiVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ekadashi Vrat Udyapan Puja',
        description: 'Book verified pandit for Ekadashi Vrat Udyapan in Pune. Complete Vedic rituals including Jagran, Havan, and Dwadashi Paran.',
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
            price: '3500',
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
                <title>Ekadashi Vrat Udyapan in Pune | Complete Concluding Ritual with Jagran</title>
                <meta name="description" content="Book expert pandit for Ekadashi Vrat Udyapan in Pune. Authentic Vedic vidhi consisting of Vishnu Puja, Night Jagran, Havan, and Dwadashi Paran. Samagri included." />
                <meta name="keywords" content="ekadashi vrat udyapan pune, ekadashi udyapan vidhi, gyaras udyapan, vishnu puja pune, nirjala ekadashi udyapan" />
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
                            <span className="text-maroon-900 font-semibold">Ekadashi Vrat Udyapan</span>
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
                            src="/images/ekadashi-udyapan-hero.png"
                            alt="Ekadashi Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Sarva Puna Prapti</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ekadashi Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Complete Vedic Conclusion with Expert Pandits in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Conclude your cycle of Ekadashi Vrats with the sacred Udyapan ceremony. Involves Vishnu Sahasranama, Havan, Night Vigil (Jagran), and Dwadashi Paran rituals for Moksha and divine grace.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan Now
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ekadashi%20Vrat%20Udyapan" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Ekadashi Vrat Udyapan</strong> is the glorious culmination of observing the sacred eleventh-day fasts dedicated to Lord Vishnu. Ekadashi, known as the 'King of Vrats', is the most effective way to cleanse past karma and attain Moksha.
                                </p>
                                <p>
                                    Traditionally, a devotee observes 24 Ekadashis in a year (plus 2 during Adhik Maas, totaling 26). Upon completing this cycle, or after a vow of 3 years, the <strong>Udyapan</strong> is performed to offer the merits of the fast to Lord Narayana. It acts as the "Purnahuti" (final offering) without which the fruit of the fasting is said to be incomplete.
                                </p>
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
                                    <h4 className="text-lg font-bold text-maroon-800 m-0 mb-2">The "Moksha" Connection</h4>
                                    <p className="m-0 text-sm">
                                        The scriptures state: <em>"Na Gayatryah Param Mantram, Na Matuhu Paradaivatam, Na Ekadashyah Param Vratam"</em> (There is no mantra superior to Gayatri, no god superior to Mother, and no fast superior to Ekadashi). The Udyapan amplifies this power 1000s of times.
                                    </p>
                                </div>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: Birth of Ekadashi</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The divine Shakti that defeated the unconquerable.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Threat of Mura</h3>
                                    <p>
                                        In Satya Yuga, a demon named <strong>Mura</strong> defeated Indra and conquered the heavens. The Devas rushed to Lord Vishnu for protection. Vishnu fought Mura for 1,000 years but could not defeat him. Exhausted, the Lord retired to a cave in Badrikashram (Simhavati) to rest.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Emergence of the Goddess</h3>
                                    <p>
                                        Seeing Vishnu asleep, Mura attempted to kill him. Suddenly, a radiant maiden manifested from Vishnu's body (his Yoga Maya). She fought Mura and instantly reduced him to ashes with her roar.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Vishnu's Boon</h3>
                                    <p>
                                        When Vishnu awoke, he was pleased with the maiden's valor. Since she appeared on the 11th day (Ekadashi) of the waning moon, He named her <strong>Ekadashi</strong>. He granted her a boon: "Anyone who fasts on your day will be freed from all sins and attain my abode (Vaikuntha)." Thus, the tradition began.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Vedic Udyapan Rituals</h2>
                                    <p className="text-gold-200 mt-2">A Two-Day Divine Process</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="border-l-4 border-gold-400 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 1: Dashami/Ekadashi Evening</h3>
                                        <p className="text-gray-700 mb-4">The preparation begins the evening before or on the morning of Ekadashi.</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li><strong>Sarvatobhadra Mandala:</strong> A grand geometric altar is drawn using colored rice/powders.</li>
                                            <li><strong>12 Kalash Sthapana:</strong> 12 copper pots ( Kumbh) are installed representing the 12 months/Ekadashis.</li>
                                            <li><strong>Vishnu Pratima:</strong> A golden or silver image of Vishnu-Lakshmi is consecrated.</li>
                                            <li><strong>Jagran:</strong> Devotees stay awake all night singing Bhajans (like "Om Jai Jagdish Hare") and reading the Gita.</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-saffron-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">Day 2: Dwadashi Morning</h3>
                                        <p className="text-gray-700 mb-4">The conclusion ceremony involves fire and charity.</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li><strong>Havan:</strong> Offerings of sesame (Til), barley and ghee into the sacred fire while chanting Vishnu Mantras.</li>
                                            <li><strong>Brahman Bhojan:</strong> Feeding 12 or 24 Brahmins (representing the lunar fortnights).</li>
                                            <li><strong>Godan (Cow Donation):</strong> Symbolic or actual donation of a cow (or silver cow) to a Brahmin. This is considered the highest charity.</li>
                                            <li><strong>Paran (Breaking Fast):</strong> The devotee breaks the fast only after the Brahmins have eaten.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Essential logic: "Yellow" items for Vishnu and "Sweet" items for satisfaction.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Mandatory Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Kalash:</strong> 12 Copper or Clay pots.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Vastra:</strong> 12 sets of clothes for the pots + 1 for Idol.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Idol:</strong> Vishnu-Lakshmi (Gold/Silver/Brass).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Leaves:</strong> Tulsi (Basil) is mandatory. Mango leaves.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Havan & Donation</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan:</strong> Black Sesame (Til), Barley (Jau), Ghee, Havan Kund.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Donation (Dan):</strong> Umbrella, Shoes, Geeta Book, Fruits.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cow:</strong> Silver Cow (small) or Picture for Godan.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Food:</strong> Rice, Dal, Vegetables (Satvik) for Brahmins.</li>
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
                                            q: "Do I have to invite 12 Brahmins? What if I can't?",
                                            a: "Traditionally, 12 Brahmins represent the 12 months. However, if not possible, you can invite 1 knowledgeable Pandit to perform the Havan and feed 12 couples, or donate raw grain kits (Seedha) to a temple in the name of 12 Brahmins."
                                        },
                                        {
                                            q: "Is Jagran (staying awake) compulsory?",
                                            a: "For Udyapan, Jagran is highly recommended as it destroys the sins accumulated over thousands of births. However, if health does not permit, you can stay awake until midnight or listen to the Vishnu Sahasranama before sleeping."
                                        },
                                        {
                                            q: "Can I do Udyapan if I missed some Ekadashis?",
                                            a: "Yes. The Udyapan acts as a 'Prayaschitta' (penance) for any flaws or breaks in your fasting regime. You should sincerely ask for forgiveness during the Havan."
                                        },
                                        {
                                            q: "Why is rice forbidden on Ekadashi?",
                                            a: "Mythologically, it is believed that the demon Mura took shelter in a grain of rice to hide from Ekadashi Mata. Eating rice on this day is considered equivalent to consuming the sins of the demon."
                                        },
                                        {
                                            q: "Can we do Udyapan in Chaturmas?",
                                            a: "Generally, Auspicious ceremonies (Kamya Karmas) are avoided in Chaturmas (July-Oct) when Vishnu is asleep. However, the 'Dev Uthani Ekadashi' (which ends Chaturmas) is the MOST auspicious day for Udyapan."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan Pandit</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Conclude your Vrat with devotion</p>

                                

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Need advice on Muhurat?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Ekadashi%20Udyapan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Devotee Voices</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"The Jagran and Udyapan ceremony was conducted very spiritually. Guruji's voice during the Sahasranama chanting was divine."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">VP</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Vinod Patil</p>
                                                <p className="text-[10px] text-gray-500">Sinhagad Road, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Ekadashi Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
