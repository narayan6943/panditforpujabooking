import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MangalDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mangal Dosh Shanti Puja',
        description: 'Book Mangal Dosh Shanti Puja in Pune (Bhat Puja). Remedy for late marriage and relationship issues. Expert Pandits for Kumbh Vivah/Ark Vivah.',
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
            price: '4100',
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
                <title>Mangal Dosh Shanti Puja in Pune | Bhat Puja & Kumbh Vivah</title>
                <meta name="description" content="Book expert pandit for Mangal Dosh Shanti Puja (Bhat Puja) in Pune. Resolve Manglik Dosh for marriage compatibility. Kumbh Vivah and Ark Vivah services available." />
                <meta name="keywords" content="mangal dosh shanti pune, bhat puja pune, manglik dosh nivaran, kumbh vivah vidhi, pandit for mangal shanti" />
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
                            <span className="text-maroon-900 font-semibold">Mangal Dosh Shanti</span>
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
                            src="/images/grah-shanti-hero.png"
                            alt="Mangal Dosh Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Resolve Marriage Delays</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Mangal Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Manglik Dosh Nivaran in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Is Manglik Dosh causing hurdles in finding a life partner? Perform the authentic Bhat Puja (Rice Worship) or Kumbh Vivah to appease Lord Mangal (Mars) and ensure a blissful married life.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Mangal Shanti
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Mangal%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Mangal Dosh</strong> occurs when the planet Mars is placed in the 1st, 4th, 7th, 8th, or 12th house of the horoscope. This is believed to cause aggression, tension, and potentially health risks to the spouse (Manglik Dosh).
                                </p>
                                <p>
                                    To neutralize this, <strong>Bhat Puja</strong> (Rice Puja) is the most potent remedy, traditionally performed in Ujjain but now conducted by expert Pandits in Pune with the same 'Ujjaini' vidhi. For severe doshas, a <strong>Kumbh Vivah</strong> (Marriage with a Pot) or <strong>Ark Vivah</strong> (Marriage with Calotropis plant) is performed before the actual wedding.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        "Bhat Puja" involves creating a Shiva Linga made of cooked rice (Bhat) to cool down the fiery nature of Mars. Mars is considered the son of Earth and this puja pacifies him.
                                    </p>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Why is it Necessary?</h2>
                                <p>
                                    If a Manglik marries a Non-Manglik without Shanti, it is said to lead to incompatibility.
                                </p>
                                <h3>Benefits of Shanti:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Immediate removal of marriage obstacles.",
                                        "Peace and longevity for the spouse.",
                                        "Reduction in aggressive behavior/anger.",
                                        "Smooth finalization of wedding proposals.",
                                        "Blessings for progeny."
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
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Bhat Puja Vidhi</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Special Rice Linga Ritual.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Ganesh & Mangal Nath Puja</h3>
                                                <p className="text-gray-700">Invoking Lord Ganesh and Lord Mangal (in the form of fire/red deity).</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Bhat Pujan (Rice Linga)</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Creating a Linga using Boiled Rice, Curd, and Sugar.</li>
                                                        <li>Decorating it with red flowers and gulal.</li>
                                                        <li>Abhishekam to cool the 'Angarak' (Fire) yoga.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Mangal Chandika Stotra</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Chanting special stotras to appease Mars.</li>
                                                        <li>Recitation of Hanuman Chalisa (Mars is controlled by Hanuman).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Havan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Using Khair wood (associated with Mars).</li>
                                                        <li>108 Ahutis with red lentils (Masoor Dal).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Visarjan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Immersing the Rice Linga in flowing water (River).</li>
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
                                    Red is the color of Mars. Most items will be red.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🚩</span> Puja Essentials
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Red Cloth & Red Thread (Moli).</li>
                                            <li>Masoor Dal (Red Lentils).</li>
                                            <li>Gulal & Kumkum.</li>
                                            <li>Boiled Rice (for Bhat Puja).</li>
                                            <li>Khair Wood (for Havan).</li>
                                            <li>Honey & Ghee.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🍯</span> Prasaad
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Red Fruits (Pomegranate, Apple).</li>
                                            <li>Wheat based sweets (Gur rot).</li>
                                            <li>Paan & Supari.</li>
                                            <li>Red Flowers (Rose/Hibiscus).</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Pune's Trusted Mangal Service</h2>
                                        <p className="text-gold-100 mb-6">We provide the specific Bhat Puja which is otherwise only found in Ujjain. Save travel time with our authentic Pune service.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Authentic Bhat Puja Vidhi",
                                                "Kumbh Vivah (Pot Marriage) arrangement",
                                                "Ark Vivah (for Groom) arrangement",
                                                "Complete privacy",
                                                "Reasonable Dakshina"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Mangal Shanti</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹4,100 <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Includes Samagri for Bhat Puja.</p>
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
                                            q: "When does Mangal Dosh end?",
                                            a: "Traditionally, it is said that after the age of 28, the intensity reduces. However, for severe High Mangal Dosh, a puja is recommended regardless of age before marriage."
                                        },
                                        {
                                            q: "What is Kumbh Vivah?",
                                            a: "It is a symbolic marriage of the Manglik bride to a Kumbh (Pot). The pot is later immersed/broken, signifying that the first marriage (and widowhood) has passed, making the actual marriage safe."
                                        },
                                        {
                                            q: "Can we do this after marriage?",
                                            a: "Yes, if you are facing marital discord and later discover it is due to Mangal Dosh, a specialized Shanti can be done post-marriage."
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Mangal Pooja</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Resolve Manglik Dosh</p>

                                
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Success Stories</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"My marriage was getting delayed for 4 years. We did the Bhat Puja in Pune as suggested. Within 6 months, my engagement was fixed. Forever grateful."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">PR</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Priya R.</p>
                                                <p className="text-[10px] text-gray-500">Sadashiv Peth, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Mangal Dosh Shanti Puja" />

                <Footer />
            </main>
        </>
    )
}
