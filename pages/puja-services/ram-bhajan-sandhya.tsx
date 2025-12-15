import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { getPujaData } from '@/data/puja-services'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RamBhajanSandhyaPage() {
    const slug = 'ram-bhajan-sandhya'
    const pujaData = getPujaData(slug)

    if (!pujaData) {
        return <div>Service not found</div>
    }

    const { title, metaTitle, metaDescription, focusKeyword, h1, intro, ritualSteps, benefits, cost, duration, whoShouldBook, faqs } = pujaData

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: title,
        description: metaDescription,
        organizer: {
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
        location: {
            '@type': 'City',
            name: 'Pune',
        },
        offers: {
            '@type': 'Offer',
            price: cost.replace(/[^0-9-]/g, '').split('-')[0],
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
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={focusKeyword} />
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
                            <span className="text-maroon-900 font-semibold">{title}</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                         {/* Using a placeholder for Bhajan/Chowki events */}
                        <Image
                            src="/images/mahalaxmi-puja-hero.jpg"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Devotional Event</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                {h1.split(' - ')[0]}<br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">{h1.includes(' - ') ? h1.split(' - ')[1] : 'Divine Gathering'}</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                {intro}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Now
                                </Button>
                                <a href={"https://wa.me/918446272142?text=I%20want%20to%20book%20" + title} target="_blank" rel="noopener noreferrer">
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
                                    <strong>{title}</strong> is a spiritually uplifting event. {intro}
                                </p>
                            </section>

                            {/* Benefits Section */}
                            <section id="benefits" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Significance & Benefits</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {benefits.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Program Flow Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Program Flow</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Structure of the Event</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <ul className="space-y-4">
                                            {ritualSteps.map((step: string, i: number) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-sm mr-4 mt-1 border border-saffron-200">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-gray-700 font-medium pt-1">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Who Should Book Section */}
                            <section className="bg-white p-6 rounded-xl border-l-4 border-maroon-500 shadow-sm">
                                <h3 className="text-xl font-bold text-maroon-800 mb-2">Who Should Organize This?</h3>
                                <p className="text-gray-700">{whoShouldBook}</p>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.question}</h3>
                                            <p className="text-gray-700">{faq.answer}</p>
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Event Now</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">{title}</p>

                                <div className="text-center mb-6 bg-gold-50 py-3 rounded-lg border border-gold-100">
                                    <p className="text-xs text-uppercase tracking-wide text-gray-500 mb-1">Package Range</p>
                                    <p className="text-2xl font-bold text-maroon-800">{cost}</p>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName={title} />

                <Footer />
            </main>
        </>
    )
}
