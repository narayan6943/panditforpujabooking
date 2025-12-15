import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SundarkandPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sundarkand Paath',
        description: 'Book Sundarkand Paath in Pune. Musical recitation of Ramcharitmanas chapter 5. Blessings of Lord Hanuman for strength and removal of hurdles.',
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
                <title>Sundarkand Paath in Pune | Musical Hanuman Puja</title>
                <meta name="description" content="Book expert mandali for Sundarkand Paath in Pune. Beautiful musical recitation of Lord Hanuman's journey to Lanka. Brings confidence, peace, and protection." />
                <meta name="keywords" content="sundarkand paath pune, hanuman puja, ramcharitmanas path, pandit for sundarkand, bajrang bali puja" />
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
                            <span className="text-maroon-900 font-semibold">Sundarkand Paath</span>
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
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Sundarkand Paath"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Jai Bajrang Bali</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Sundarkand Paath <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Strength, Devotion & Victory</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Sundarkand is the heart of Ramcharitmanas. It narrates the glorious journey of Hanuman Ji to Lanka. Reciting it defeats negativity, boosts self-confidence, and resolves life's toughest challenges.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Sundarkand
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sundarkand%20Paath" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Sundarkand</strong> is the fifth chapter of the epic Ramayana (written by Goswami Tulsidas). While other chapters depict Lord Rama's struggles, Sundarkand celebrates the feats and success of his devotee, Lord Hanuman.
                                </p>
                                <p>
                                    This Paath is traditionally performed on Tuesdays or Saturdays. Musical recitation with Dholak and Manjira creates a highly positive vibration in the home, instantly lifting the spirits of everyone present.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        "Nirmal Man Jan So Mohi Pava": Lord Rama says only those with a pure mind can attain me. Sundarkand purifies the mind.
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Benefits of Recitation</h2>
                                <p>
                                    It is said that where Sundarkand is recited, Lord Hanuman himself appears to listen.
                                </p>
                                <h3>Key spiritual benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Removes fear and anxiety.",
                                        "Provides strength to overcome difficulties.",
                                        "Nullifies the malefic effects of Mars and Saturn.",
                                        "Brings peace and harmony in the family.",
                                        "Fulfills long-pending wishes."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Paath Vidhi</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">2.5 to 3 Hours musical gathering.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Ganesh & Ram Vandana</h3>
                                                <p className="text-gray-700">Invoking Lord Ganesh and Lord Rama before starting Hanuman's praise.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Hanuman Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Applying Sindoor (Vermilion) and offering oil/flowers to the idol/photo.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Sundarkand Paath</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Continuous recitation of all Doha, Chopai, and Chhand.</li>
                                                        <li>Often sung in a melodious group format.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Hanuman Chalisa & Aarti</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Concluding with Hanuman Chalisa and Aarti of Ramayan-Ji.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Prasad Distribution</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Boondi or Churma Ladoo is offered.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    Minimal Samagri is required as devotion is key.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🚩</span> Pooja Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Idol/Photo of Ram Darbar & Hanuman.</li>
                                            <li>Sindoor (Orange) & Jasmine Oil.</li>
                                            <li>Red Flowers & Garland.</li>
                                            <li>Incense sticks & Lamp (Diya).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🥣</span> Offerings
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Tulsi leaves (for Ram Ji).</li>
                                            <li>Boondi/Ladoo/Pedha.</li>
                                            <li>Betel leaves (Paan).</li>
                                            <li>Coconut.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Musical Mandali</h2>
                                        <p className="text-gold-100 mb-6">We don't just read; we perform. Our team brings instruments like Dholak and Harmonium for a divine experience.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Experienced Singers/Pandits",
                                                "Musical instruments included",
                                                "Full explanation of meaning (optional)",
                                                "Sankalp for family welfare",
                                                "Punctual start time"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Sundarkand</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹2,100 <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">For standard recitation.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "How many people come for the Paath?",
                                            a: "Usually, a team of 2 to 3 Pandits/Singers comes for a musical Sundarkand."
                                        },
                                        {
                                            q: "Can we do it in the evening?",
                                            a: "Yes, Sundarkand is most often performed in the evening (Sandhya Kaal), around 5 PM or 6 PM."
                                        },
                                        {
                                            q: "What is the duration?",
                                            a: "It takes approximately 2 to 2.5 hours to complete the recitation along with Bhajans."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.q}</h3>
                                            <p className="text-gray-700">{faq.a}</p>
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Sundarkand</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Jai Siya Ram</p>

                                
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"The musical Sundarkand was mesmerizing. The entire society gathered and felt the divine presence. Highly recommended."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">SP</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Sanjay P.</p>
                                                <p className="text-[10px] text-gray-500">Wakad, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Sundarkand Paath" />

                <Footer />
            </main>
        </>
    )
}
