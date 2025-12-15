import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VatSavitriVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vat Savitri Vrat Udyapan',
        description: 'Book Pandit for Vat Savitri Vrat Udyapan in Pune. Authentic Banyan Tree worship for husband\'s longevity and family protection.',
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
                <title>Vat Savitri Vrat Udyapan in Pune | Banyan Tree Puja</title>
                <meta name="description" content="Book expert Pandit for Vat Savitri Vrat Udyapan in Pune. Complete Vidhi with Banyan tree parikrama and Savitri-Satyavan Katha." />
                <meta name="keywords" content="vat savitri vrat udyapan pune, vat purnima puja, banyan tree puja, husband longevity puja" />
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
                            <span className="text-maroon-900 font-semibold">Vat Savitri Udyapan</span>
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
                            alt="Vat Savitri Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Savitri's Devotion</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vat Savitri Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Blessings of Longevity</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Perform the sacred Vat Purnima Udyapan to secure your husband's long life and health, just as Savitri won Satyavan back from Yama.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vat%20Savitri%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Vat Savitri Vrat</strong> (popularly known as <strong>Vat Purnima</strong> in Maharashtra) is one of the most significant festivals for married Hindu women. Observed on Jyeshtha Purnima (full moon), it is a day of deep spiritual connection with Nature and the Divine to secure the health and longevity of one's husband.
                                </p>
                                <p>
                                    The central figure of worship is the <strong>Vat Vriksha (Banyan Tree)</strong>. In Hinduism, the Banyan tree represents the 'Trimurti':
                                </p>
                                <ul className="list-disc pl-5">
                                    <li><strong>Roots:</strong> Lord Brahma (Creation).</li>
                                    <li><strong>Trunk:</strong> Lord Vishnu (Preservation).</li>
                                    <li><strong>Leaves/Canopy:</strong> Lord Shiva (Dissolution).</li>
                                </ul>
                                <p>
                                    The <strong>Udyapan</strong> marks the completion of a vow (usually observed for 12 years or for a lifetime). It is a grand ceremony where gratitude is offered to Savitri Devi (the deified chaste wife) and the Banyan Tree for protecting the marital bond.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend of Savitri and Satyavan</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    A tale of power, intellect, and love that even conquered Death.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Prophecy of Death</h3>
                                    <p>
                                        Savitri was the beautiful and intelligent daughter of King Ashwapati. When she came of age, she chose Satyavan, a prince living in exile in the forest with his blind parents, as her husband. However, Sage Narada warned her: "Satyavan is destined to die exactly one year from today." Despite this, Savitri remained firm in her choice, saying, "I have chosen him with my heart; I cannot choose another." She married him and lived the life of a hermit.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Confrontation with Yama</h3>
                                    <p>
                                        As the fateful day approached, Savitri undertook a severe fast for three days. On the final day, Satyavan went to cut wood in the forest, and Savitri accompanied him. While cutting wood under a Banyan tree, Satyavan felt dizzy and collapsed. Yama, the God of Death, appeared to take his soul.
                                    </p>
                                    <p>
                                        Savitri followed Yama. Yama tried to dissuade her, but she engaged him in a dharmic conversation about righteousness and duty. Pleased by her wisdom, Yama offered her three boons, but with one condition: "Anything except your husband's life."
                                    </p>
                                    <ul className="list-disc pl-5">
                                        <li><strong>First Boon:</strong> She asked for the eyesight and kingdom of her father-in-law. Granted.</li>
                                        <li><strong>Second Boon:</strong> She asked for 100 sons for her own father (Ashwapati). Granted.</li>
                                        <li><strong>Third Boon:</strong> She smartly asked, "Grant me 100 sons of my own, born from Satyavan."</li>
                                    </ul>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Triumph</h3>
                                    <p>
                                        Yama, bound by his own word, realized he had been outwitted. To grant her 100 sons, Satyavan had to be alive. Impressed by her intellect and dedication (Pativrata Dharma), Yama released Satyavan's soul. Satyavan woke up under the Banyan tree as if from a deep sleep. Since then, the Banyan tree became the witness and symbol of their eternal union.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Worshipping the Eternal Tree</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Vat Pujan (Tree Worship)</h3>
                                        <p className="text-gray-700">
                                            Women dress in fine sarees (often yellow or green) and visit a Banyan tree.
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                            <p><strong>Step 1 (Abhishek):</strong> Water is poured at the roots of the tree.</p>
                                            <p><strong>Step 2 (Haldi-Kumkum):</strong> Turmeric and Vermilion are applied to the trunk.</p>
                                            <p><strong>Step 3 (The Thread):</strong> This is the most iconic ritual. A white raw thread (Kachha Sutra) is wound around the tree trunk <strong>108 times</strong> (or 7 times) while engaging in Pradakshina (circumambulation). This signifies binding one's life to the husband's for 7 lifetimes.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Savitri-Satyavan Murtis</h3>
                                        <p className="text-gray-700">
                                            For Udyapan, usually small idols of Savitri, Satyavan, and Yama riding a buffalo are worshipped. Alternatively, two bamboo baskets are used.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Basket 1:</strong> Contains the idols/image and 7 types of grains (Sapta Dhanya).</li>
                                            <li><strong>Basket 2:</strong> Covered with a piece of cloth, containing rituals accessories.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Vayna Daan (Distribution)</h3>
                                        <p className="text-gray-700">
                                            'Vayna' implies special offerings of soaked chana (black gram), Jackfruit bulbs (Gare), and Mangoes.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>This Vayna is offered to the Goddess first.</li>
                                            <li>Then, 5 or more married women (Suvasinis) are invited. Their 'Oti' is filled with these fruits and grains.</li>
                                            <li>Blessings are sought: "Janam Savitri Ho" (May you be like Savitri).</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Katha Shravan</h3>
                                        <p className="text-gray-700">
                                            Reading or listening to the Vat Savitri Katha is mandatory. It is believed that hearing the story creates positive vibrations that ward off fear of death.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Breaking the Fast</h3>
                                        <p className="text-gray-700">
                                            The fast consists of eating only fruits. On the next day (or after Puja), the fast is broken by swallowing a small bud of the Banyan tree with a little milk. This is believed to protect the womb and lineage.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Items specific to Vat Purnima Udyapan.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Tree Worship</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Thread (Sutra):</strong> 2-3 reels of white raw thread.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cotton Garland:</strong> Gejavastra.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Haldi, Kumkum, Akshat.</strong></li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Incense & Lamp.</strong></li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Banyan Branch:</strong> If doing at home.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Naivedya & Vayna</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruits (Must):</strong> Mangoes (Ratnagiri Alphonso preferred in Pune), Jackfruit bulbs, Jamun.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Soaked Gram:</strong> Black Chana (overnight soaked).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Wheat Flour Lamp:</strong> Or sweet Karanji.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bamboo Winnow/Fan:</strong> Optional but traditional.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Blouse Pieces:</strong> For Oti filling.</li>
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
                                            q: "Is it done on Purnima or Amavasya?",
                                            a: "In Maharashtra, Gujarat, and South India, it is observed on Jyeshtha Purnima (Vat Purnima). In North India (UP, Bihar), it is often observed on Jyeshtha Amavasya (Vat Savitri). Both are valid based on regional Kula-Dharma."
                                        },
                                        {
                                            q: "Why do we use the thread?",
                                            a: "The thread symbolizes continuity and protection. Winding it around the sturdy Banyan tree symbolically transfers the tree's quality of immortality and stability to one's marriage."
                                        },
                                        {
                                            q: "What should I wear?",
                                            a: "Traditionally, a yellow saree or a green saree with a red border is preferred. Avoid black. Solah Shringar (bangles, bindi, etc.) is a must."
                                        },
                                        {
                                            q: "Can I do Udyapan alone?",
                                            a: "Udyapan involves Daan (giving). It is best done by inviting at least 5 married women to distribute the Vayna. Following the social aspect amplifies the blessings."
                                        },
                                        {
                                            q: "Is fasting compulsory?",
                                            a: "Yes. Most observe a fruit-only fast. Some even observe nirjala (waterless) till the puja is done. Pregnant women should consult doctors and can eat light meals."
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Blessings of the Banyan</h2>
                                <p className="text-gray-700 mb-6 text-lg">
                                    This Vrat is a beautiful blend of ecology and spirituality.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💑</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Husband's Longevity</h4>
                                            <p className="text-gray-600">The core purpose: shielding the husband's life force (Prana) from calamities.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🌳</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Family Lineage</h4>
                                            <p className="text-gray-600">Just as the Banyan tree expands via aerial roots, the family lineage expands and remains grounded.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🧠</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Wisdom & Intellect</h4>
                                            <p className="text-gray-600">Savitri won her husband back through wisdom. The Vrat grants the intellect to handle marital crises.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">♻️</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Connection with Nature</h4>
                                            <p className="text-gray-600">Reaffirms the sacred bond humans share with trees and the environment.</p>
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
                            
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Vat Savitri Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
