import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HanumanVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hanuman Vrat Udyapan',
        description: 'Book Pandit for Hanuman Vrat Udyapan in Pune. Authentic Tuesday/Saturday Puja for strength, courage, and protection.',
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
            price: '2100',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Hanuman Vrat Udyapan in Pune | Tuesday Fast Puja</title>
                <meta name="description" content="Book expert Pandit for Hanuman Vrat Udyapan in Pune. Properly conclude your Tuesday/Saturday fasts with Bajrangbali Puja and Sunderkand." />
                <meta name="keywords" content="hanuman vrat udyapan pune, tuesday fast udyapan, bajrangbali puja, sankat mochan puja" />
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
                            <span className="text-maroon-900 font-semibold">Hanuman Udyapan</span>
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
                            src="/images/ganesh-puja-hero.png"
                            alt="Hanuman Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Sankat Mochan</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Hanuman Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Strength & Protection</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Lord Hanuman is the destroyer of fear and sorrow. Perform the Udyapan after observing 11 or 21 Tuesday fasts for His eternal protection.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Hanuman%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Hanuman Vrat</strong>, observed on Tuesdays (Mangalvar) and sometimes Saturdays (Shanivar), is one of the most potent fasts for removing obstacles, fear, and negativity. Lord Hanuman is known as 'Sankat Mochan'—the destroyer of all perils.
                                </p>
                                <p>
                                    It is believed that in Kaliyuga, Hanuman Ji is the only deity who is 'Pratyaksha' (immediately present) on earth. Devotees observe this fast for 11 or 21 weeks to gain strength, courage, and protection from planetary afflictions (like Shani Sade Sati). The <strong>Udyapan</strong> marks the successful completion of this vow.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-red-50 p-8 rounded-2xl border border-red-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: The Eternal Sevak</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    Why Hanuman is the gateway to Rama.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Power of Devotion</h3>
                                    <p>
                                        When Lord Rama returned to Ayodhya, Hanuman continued to serve him with unmatched devotion. Seeing Sita Ma apply Sindoor (vermilion) in her hair for Rama's long life, Hanuman covered his entire body in Sindoor to ensure his Lord's immortality. This is why the <strong>Chola</strong> (Sindoor coating) is the most pleasing offering to him.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Promise of Protection</h3>
                                    <p>
                                        Before ascending to Vaikuntha, Lord Rama blessed Hanuman to remain on Earth as a Chiranjeevi (immortal) to protect his devotees until the end of the Kalpa. Wherever the Ramayana is recited, Hanuman is present there, hands folded in prayer.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Honoring the Son of Wind</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Chola Sthapana</h3>
                                        <p className="text-gray-700">
                                            The Udyapan involves a special <strong>Chola Chadhana</strong> ritual. A mixture of Orange Sindoor and Jasmine (Chameli) Oil is applied to the idol of Hanuman. This is believed to wash away the devotee's bad karma.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. The Garland Offerings</h3>
                                        <p className="text-gray-700">
                                            Two specific garlands are highly auspicious:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>Aak (Calotropis) Mala:</strong> Offered for removing illness and evil eye.</li>
                                            <li><strong>Paan (Betel Leaf) Mala:</strong> A garland of 108 Betel leaves offered for success in difficult tasks.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Path & Chanting</h3>
                                        <p className="text-gray-700">
                                            The Pandit recites the <strong>Sunderkand</strong> (the chapter of Ramayana detailing Hanuman's exploits in Lanka) or chants the Hanuman Chalisa 108 times. The atmosphere vibrates with 'Jai Shree Ram'.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Havan</h3>
                                        <p className="text-gray-700">
                                            A fire ritual where ahutis of Gugal, Ghee, and Jaggery are offered with the mantra <em>"Om Ham Hanumate Namah"</em>. This purifies the environment of the home.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Bhog & Brahmin Bhojan</h3>
                                        <p className="text-gray-700">
                                            Hanuman Ji loves simple sweets. <strong>Boondi</strong> or <strong>Motichoor Laddoos</strong> are essential. Brahmins are fed a Satvik meal (often including Churma), and Dakshina is given.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Items required for the Tuesday Ritual.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Mandatory Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Chola items:</strong> Orange Sindoor, Chameli Oil, Silver/Gold Vark (optional).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Vastra:</strong> Red or Saffron cloth (Langot/Dupatta).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> Marigold (Genda), Rose, Aak flowers.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Paan Leaves:</strong> 108 fresh leaves for garland.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Bhog & Havan</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Sweets:</strong> Besan Laddoos, Boondi, Churma.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruit:</strong> Bananas are his favorite.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan:</strong> Gugal, Loban, Ghee, Wood.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Other:</strong> Janeu, Kalava, Coconuts (with water).</li>
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
                                            q: "Can women perform the Chola ritual?",
                                            a: "Traditionally, women do not touch the main Hanuman idol to offer Chola out of respect for his Brahmacharya (celibacy). However, they can perform the rest of the Puja, recite hymns, and have the Pandit apply the Chola on their behalf."
                                        },
                                        {
                                            q: "What dietary rules must be followed?",
                                            a: "Absolute strict vegetarianism is mandatory. NO alcohol, non-veg, onion, or garlic should be consumed in the house on the day of Puja. Celibacy (Brahmacharya) is also expected on the day of the fast."
                                        },
                                        {
                                            q: "Can I do the Udyapan on Saturday instead of Tuesday?",
                                            a: "Yes. Tuesday is generally for strength and general blessings, while Saturday is specifically for protection against Shani (Saturn) related troubles. Both are appropriate."
                                        },
                                        {
                                            q: "What if I miss a Tuesday in between?",
                                            a: "If missed due to unavoidable reasons (illness/menstruation), skip that week and continue the count from the next. The total number (11 or 21) should be completed."
                                        },
                                        {
                                            q: "Is it good for students?",
                                            a: "Absolutely. Hanuman is the god of 'Buddhi' (Intellect) and 'Vidya' (Wisdom). Students perform this Udyapan for focus and success in exams."
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
                                <p className="text-center text-gray-500 text-sm mb-6">Jai Bajrangbali</p>

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
                                        Fear Will Leave You.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Hanuman Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
