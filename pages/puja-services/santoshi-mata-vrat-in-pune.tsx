import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function SantoshiMataVratPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Santoshi Mata Vrat Puja in Pune',
        description: 'Book Pandit for Santoshi Mata Vrat Puja Udyapan in Pune. 16 Friday fasting ritual for patience, happiness, and wish fulfillment.',
        price: '2100',
        reviewCount: '130',
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/santoshi-mata-vrat-in-pune',
        image: 'https://panditforpujabooking.com/images/navratri-hero.png' // Using a generic hero if specific one not available in original, or reusing from other page
    })

    // 2. FAQs
    const faqs = [
        { question: "Can men do this Vrat?", answer: "Yes, many men perform it for job stability and business success." },
        { question: "What if I accidentally eat sour food?", answer: "Ask for forgiveness and repeat one extra Friday." },
        { question: "Cost of Udyapan?", answer: "Starts from ₹2,100." },
        { question: "Can we do Udyapan at temple?", answer: "Yes, but doing it at home brings blessings to the house." },
        { question: "Prasad items?", answer: "Gur (Jaggery) and Chana (Roasted Chickpeas) are mandatory." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Santoshi Mata Vrat Udyapan in Pune | Wish Refulfillment"
                description="Book Pandit for Santoshi Mata Vrat Puja & Udyapan in Pune. Guide for 16 Friday Fasting. Authentic Vidhi for peace, satisfaction, and fulfilling desires."
                keywords="santoshi mata vrat puja pune, santoshi mata udyapan, 16 friday vrat puja, puja for satisfaction"
                canonicalUrl="https://panditforpujabooking.com/puja-services/santoshi-mata-vrat-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-gradient-to-b from-pink-50 to-white">
                <section className="relative bg-pink-500 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/20 border border-white/50 rounded-full px-4 py-1.5">
                                    <span className="text-pink-100 text-sm font-semibold tracking-wide uppercase">16 Friday Miracle</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Santoshi Mata Vrat <br />
                                    <span className="text-yellow-200">Peace & Satisfaction</span>
                                </h1>
                                <p className="text-lg text-pink-100/90 border-l-4 border-yellow-300 pl-4 leading-relaxed">
                                    Goddess Santoshi, the daughter of Lord Ganesha, is the embodiment of satisfaction ("Santosh"). Her Vrat of 16 Fridays is legendary for fulfilling impossible wishes with simple devotion.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-pink-700 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20 border-none">
                                        Book Udyapan
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Santoshi%20Mata%20Vrat%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                            Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-12">

                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-pink-600 border-b-2 border-yellow-400 pb-2">Why 16 Fridays?</h2>
                                <p>
                                    This Vrat teaches the power of patience. Devotees fast for 16 consecutive Fridays, eating only one meal and <strong>avoiding sour things (Khatai)</strong> completely.
                                </p>
                                <p>
                                    It solves problems related to poverty, court cases, illness, and delayed marriage. The Udyapan (concluding ceremony) on the 17th Friday is critical to seal the blessings.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-pink-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-pink-600 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🌸</span> Vrat Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Wish Fulfillment</h4>
                                            <p className="text-sm text-gray-600">Known to grant any pure wish (Manokamna) asked with true faith.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Family Peace</h4>
                                            <p className="text-sm text-gray-600">Restores harmony in joint families and between mother-in-law/daughter-in-law.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-pink-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Mental Satisfaction</h4>
                                            <p className="text-sm text-gray-600">The biggest gift is contentment in whatever you have.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-pink-600">Udyapan Ritual Vidhi</h2>
                                <p className="text-gray-600">Duration: <strong>2.5 Hours</strong> (Performed on 17th Friday).</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-500 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-pink-700">Mata Ki Chowki</h4>
                                            <p className="text-sm text-gray-600">Decorating the altar with Gur (Jaggery) and Chana (Chickpeas) - her favorite prasad.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-500 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-pink-700">Katha Path</h4>
                                            <p className="text-sm text-gray-600">Reading the detailed story of the old lady and her 7 sons.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-500 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-pink-700">Havan</h4>
                                            <p className="text-sm text-gray-600">Offering 'Kheer' and 'Gur-Chana' to Agni with mantras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-pink-500 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-pink-700">Bhojan & Dakshina</h4>
                                            <p className="text-sm text-gray-600">Feeding 8 boys (symbolizing Ganesha's family). <strong>Strictly no sour food</strong>.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h2 className="text-2xl font-serif font-bold text-red-600 mb-4">Warning: No Sour Food</h2>
                                <p className="text-gray-700 mb-4">
                                    The most critical rule: <strong>Do not eat or touch anything sour (lemon, tamarind, curd, tomato)</strong> on Friday. If this rule is broken, the Vrat is nullified.
                                </p>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-pink-600 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-pink-300 transition-colors">
                                            <p className="font-bold text-pink-700 text-lg">Q: {faq.question}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="santoshi-mata-vrat"
                        category="goddess"
                        maxItems={4}
                    />
                </div>



                            <PujaServiceLocations pujaName="Santoshi Mata Vrat" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-200">
                                    <div className="bg-pink-600 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-pink-700">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Full Udyapan</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-pink-700">2.5 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-pink-700">Verified</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-pink-800 shadow-md border-none">
                                                    Call to Consult
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Santoshi%20Mata%20Vrat%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 Satisfaction Guaranteed
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-pink-700 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Proper Vidhi
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">★</span> Punctual Pandits
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-pink-700 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Embrace Satisfaction</h2>
                        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
                            Complete your vow with a grand Udyapan ceremony.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-pink-800 hover:bg-yellow-300 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
