import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RadhaAshtamiVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Radha Ashtami Vrat Udyapan',
        description: 'Book Pandit for Radha Ashtami Vrat Udyapan in Pune. Celebrate the birth of Radha Rani with devotion and love.',
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

    return (
        <>
            <Head>
                <title>Radha Ashtami Vrat Udyapan in Pune | Radha Rani Puja</title>
                <meta name="description" content="Book expert Pandit for Radha Ashtami Vrat Udyapan in Pune. Authentic puja for Radha Rani, ensuring ultimate devotion and Krishna's love." />
                <meta name="keywords" content="radha ashtami vrat udyapan pune, radha rani puja, barsana puja pune, radha birthday puja" />
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
                            <span className="text-maroon-900 font-semibold">Radha Ashtami Udyapan</span>
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
                            alt="Radha Ashtami Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Love</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Radha Ashtami Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Grace of Sri Radha</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Without Radha, Krishna is incomplete. Celebrate Her appearance day (15 days after Janmashtami) to attain pure devotion (Bhakti).
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Radha%20Ashtami%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Radha Ashtami Vrat Udyapan</strong> celebrates the birth of Srimati Radharani, the internal pleasure potency (Hladini Shakti) of Lord Krishna. While Janmashtami celebrates the King, Radha Ashtami celebrates the Queen of Vrindavan. The Udyapan marks the successful completion of vows taken to earn Her causeless mercy.
                                </p>
                                <p>
                                    The scriptures (Padma Purana) declare: <em>"Just as Lord Krishna is the Supreme Godhead, Srimati Radharani is the Supreme Goddess."</em> One cannot attain Krishna without the grace of Radha. This Udyapan is the golden key to enter the eternal pastimes (Rasa Leela) of the Divine Couple.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                                    <h4 className="text-lg font-bold text-maroon-800 m-0 mb-2">The Secret of "Radhe Radhe"</h4>
                                    <p className="m-0 text-sm">
                                        Krishna is known as "Madhana Mohana" (Enchanter of Cupid), but Radha is known as "Madhana Mohana Mohini" (The Enchanter of the Enchanter). Her worship controls the Controller of the Universe.
                                    </p>
                                </div>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Divine Appearance in Barsana</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The mystery of the blind baby who waited for the Lord.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Golden Lotus</h3>
                                    <p>
                                        King Vrishabhanu and Mother Kirtida were performing a Yajna. One day, while cleaning the yajna arena, the King found a dazzling golden baby girl resting on a blooming lotus flower in a pond (now called Radha Kund/Bhanu Khor). Overjoyed, he brought her to his palace in Raval (later moving to Barsana).
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Closed Eyes</h3>
                                    <p>
                                        To everyone's dismay, the beautiful child kept her eyes tightly shut. The King feared she was blind. Narada Muni visited specifically to see her but she remained closed-eyed.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The First Sight</h3>
                                    <p>
                                        Soon after, Nanda Maharaja and Yashoda came from Gokul with baby Krishna to visit Vrishabhanu. As soon as baby Krishna crawled near the cradle and looked in, Radha opened her eyes for the first time. She had vowed not to see anything of this material world before seeing her beloved Lord.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Royal Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Performed at Noon (Abhijit Muhurat).</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="border-l-4 border-gold-400 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">1. Abhishek (Noon)</h3>
                                        <p className="text-gray-700 mb-4">Just like Janmashtami, the main ritual is at 12:00 PM (Noon), but the mood is softer (Vatsalya/Madhurya).</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li><strong>Panchamrit Snan:</strong> Bathing the Deity (Vigraha) with Milk, Curd, Ghee, Honey, Sugar water.</li>
                                            <li><strong>Maha-Abhishek:</strong> With fruit juices, herbal waters, and specifically <em>Kesar (Saffron) milk</em> as she has a golden complexion (Tapta-Kanchana).</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-saffron-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">2. Shringar & Bhog</h3>
                                        <p className="text-gray-700 mb-4">She is the queen of decoration.</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li><strong>Neelambari:</strong> Offering a blue saree/lehenga is considered very auspicious.</li>
                                            <li><strong>56 Bhog:</strong> A grand offering including her favorites: <strong>Arbi (Colocasia) curry</strong>, Hot Milk, Malpua, and 'Kachoris'.</li>
                                            <li><strong>Tambul:</strong> Giving betel nut (Paan) is a special part of her service.</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-maroon-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">3. Havan & Kanya Pujan</h3>
                                        <p className="text-gray-700 mb-4">Concluding the Vrat.</p>
                                        <ul className="space-y-2 text-gray-700">
                                            <li><strong>Radha Gayatri Mantra:</strong> <em>"Om Vrishabhanujaye Vidmahe, Krishnapriyaye Dhimahi, Tanno Radha Prachodayat"</em> is chanted 108 times into the fire.</li>
                                            <li><strong>Suvasini/Kanya Puja:</strong> Feeding married women or young girls (gopis) and gifting them Shringar items.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Radha Rani loves fragrance and simplicity. Include scented flowers.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Mandatory Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> Jasmine (Juhi/Bela) and Parijat are her favorites.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cloth:</strong> Blue or Pink silk cloth for the altar.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Mirrors:</strong> Small mirror for the deity (She loves to see herself).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Ittar:</strong> Rose or Heena perfume.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Havan & Bhog</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan:</strong> Sesame, Ghee, Peepal wood.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Vegetable:</strong> Arbi (Taro) root is a MUST for Bhog.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Sweets:</strong> Mawa barfi, Rabri.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Gifts:</strong> Bangles, Bindi for women guests.</li>
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
                                            q: "Can men observe this Vrat Udyapan?",
                                            a: "Absolutely. In fact, many male saints (like the Six Goswamis) are the greatest devotees of Radha. Observing this vrat grants control over one's senses and attracts Krishna's grace."
                                        },
                                        {
                                            q: "What is the specific fasting rule?",
                                            a: "Devotees fast until noon (12:00 PM). After the Abhishek and Bhog offering, they take 'Ek-bhukta' (one grain meal) or fruit meal. The Udyapan feast includes specific delicacies like Arbi."
                                        },
                                        {
                                            q: "I don't have a Radha idol. What to do?",
                                            a: "If you have a Krishna idol, you can visualize Radha beside Him or worship a picture. Alternatively, worship the Holy Name 'Radhe' written with turmeric on a betel leaf."
                                        },
                                        {
                                            q: "Why is Arbi (Taro root) offered?",
                                            a: "It is a Braj tradition. It is believed that Arbi was easily available in the forests of Vrindavan and Mother Yashoda/Kirtida used to cook it frequently for the children. It pleases the Divine Couple."
                                        },
                                        {
                                            q: "Is it beneficial for marriage problems?",
                                            a: "Yes. Since Radha-Krishna are the eternal couple, worshipping them on this day removes 'Doshas' in married life and helps find a compatible partner."
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
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Radhe Radhe</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Bolo Radhe Krishna.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Radha Ashtami Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
