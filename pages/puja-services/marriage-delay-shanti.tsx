import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function MarriageDelayShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Marriage Delay Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Marriage Delay Shanti Puja in Pune (Vivah Badha Nivaran). Remedies for late marriage due to Mangal, Shani, or Pitra Dosh. Find your soulmate.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Vivah Badha Nivaran' },
        { id: 'about', title: 'Causes of Delay' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Marriage Delay Shanti Puja in Pune – Vivah Badha Nivaran</title>
                <meta name="description" content="Worried about late marriage? Book Marriage Delay Shanti Puja in Pune. Vedic remedies to remove obstacles in finding a life partner. Gauri-Shankar & Mangal Puja." />
                <meta name="keywords" content="Marriage Delay Shanti Pune, Vivah Badha Nivaran, Late Marriage Remedies, Mangal Dosh Puja for Marriage, Gauri Shankar Puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Marriage Delay Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/vivah-puja-hero.png"
                            alt="Marriage Delay Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Overcome Delays • Find Love</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Marriage Delay Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Vivah Badha Nivaran</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Are astrological doshas delaying your wedding? Remove the obstacles of Mangal, Shani, or Rahu and open the path to a happy union with Vedic rituals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Vivah Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Marriage%20Delay%20Shanti" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p><strong>Marriage Delay Shanti Puja</strong> is a specific ritual for eligible bachelors and spinsters who are facing constant delays in getting married. Despite having good looks, education, and family background, sometimes the "talks" never materialize into a wedding due to planetary obstructions.</p>
                                <p>This puja invokes the blessings of <strong>Gauri-Shankar</strong> and <strong>Uma-Maheshwar</strong>, along with pacifying obstructionist planets like Saturn (Shani), Mars (Mangal), or Rahu.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Common Astrological Causes</h3>
                                <ul>
                                    <li><strong>Mangal Dosh:</strong> Mars in 1st, 4th, 7th, 8th, or 12th house.</li>
                                    <li><strong>Shani Drishti:</strong> Saturn aspecting the 7th house delays things beyond age 30.</li>
                                    <li><strong>Saptamesh Affliction:</strong> The lord of the marriage house is weak or combused.</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Vivah Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Katyayani Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Invocation of Goddess Katyayani (for early marriage) with Mantra Jaap.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Mangal-Vivah Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja including Kumbh Vivah (if needed), Mangal Shanti, and Gauri Shankar Havan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Red and Yellow Cloths (symbol of union)</li>
                                    <li>Turmeric lumps (Haldi Ganth)</li>
                                    <li>Sindoor, Kumkum, Bangles (Suhag items)</li>
                                    <li>Clay pot (optional for Kumbh Vivah)</li>
                                    <li>Honey, Jaggery, Dates</li>
                                    <li>Gauri-Shankar Rudraksha (optional but powerful)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Sankalp:</strong> Taking a vow for early marriage and specifying the desired qualities in a partner.</li>
                                    <li><strong>Ganesh Puja:</strong> The Remover of Obstacles.</li>
                                    <li><strong>Katyayani / Uma-Maheshwar Puja:</strong> Worshipping the ideal divine couples.</li>
                                    <li><strong>Mantra Jaap:</strong> Chanting <em>"Katyayani Mahamaye Mahayoginyadheeshwari..."</em> or specific planetary mantras.</li>
                                    <li><strong>Kumbh/Ark Vivah (if applicable):</strong> Symbolic marriage to a pot or plant to nullify widowhood dosha.</li>
                                    <li><strong>Havan:</strong> Offering ahutis to seal the prayers.</li>
                                    <li><strong>Suhag Daan:</strong> Donating items of marital bliss to married women.</li>
                                </ol>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Early Marriage:</strong> Speeds up the process of finding a partner.</li>
                                    <li><strong>Compatible Match:</strong> Attracts a partner with good Gun Milan.</li>
                                    <li><strong>Remove Negativity:</strong> Clears evil eye or jealousy from relatives/competitors.</li>
                                    <li><strong>Future Happiness:</strong> Ensures the marriage lasts long and is full of love.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this for men or women?", a: "It is for both. For men, we perform Gandharva Raj Puja. For women, Katyayani or Uma-Maheshwar Puja." },
                                        { q: "What is Kumbh Vivah?", a: "It is a secret ritual performed for Mangalik persons where they are first 'married' to a clay pot (Kumbh) to take on the dosha, preserving the actual spouse's life." },
                                        { q: "Can parents perform this?", a: "Yes, parents can take the Sankalp on behalf of their children." },
                                    ].map((faq, i) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.q}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Find Your Soulmate</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Open the doors to marital bliss.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Vivah Shanti</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">{sec.title}</a>
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

                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Early Marriage</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Marriage%20Delay%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Marriage Delay Shanti" />
            <Footer />
        </>
    )
}
