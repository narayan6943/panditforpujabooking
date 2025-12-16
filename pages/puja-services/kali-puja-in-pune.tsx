import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function KaliPujaPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Kali Puja',
        description: 'Book Kali Puja in Pune for protection against black magic, spirits, and removing fear. Authentic Tantric and Vedic rituals by expert Pandits.',
        price: '4500',
        reviewCount: '95',
        ratingValue: '5.0',
        url: 'https://panditforpujabooking.com/puja-services/kali-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/kali-puja-hero.jpg' // Assumed image URL
    })

    // 2. FAQs
    const faqs = [
        { question: "Is it safe to do at home?", answer: "Yes, our Satvik Kali Puja is purely for protection and is completely safe for families." },
        { question: "Do you use alcohol/meat?", answer: "No. We follow 'Dakshina Marga' (Right-hand path) which is vegetarian and spiritual." },
        { question: "Cost of Kali Havan?", answer: "Starts from ₹4,500." },
        { question: "What if I have Pitra Dosh?", answer: "Kali Puja is excellent for calming restless ancestor spirits as well." },
        { question: "Can I keep a Kali photo?", answer: "We recommend keeping a photo of 'Dakshina Kali' (Right foot forward) which is benevolent." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Kali Puja in Pune | Protection from Black Magic & Spirits"
                description="Book Pandit for Kali Puja in Pune. Remove severe black magic, evil spirits, and conquer fear with authentic Maha Kali Havan. Powerful protection rituals."
                keywords="kali puja pune, black magic removal puja, maha kali havan, tantra puja pune, protection from enemies"
                canonicalUrl="https://panditforpujabooking.com/puja-services/kali-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-gradient-to-b from-gray-900 to-black text-white">
                <section className="relative bg-black py-16 md:py-24 overflow-hidden border-b border-red-900">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-red-900/40 border border-red-600/50 rounded-full px-4 py-1.5">
                                    <span className="text-red-500 text-sm font-semibold tracking-wide uppercase">Ultimate Protection</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-red-500">
                                    Maha Kali Puja <br />
                                    <span className="text-white">Destroyer of Fear</span>
                                </h1>
                                <p className="text-lg text-gray-300 border-l-4 border-red-600 pl-4 leading-relaxed">
                                    When gentle remedies fail, you need the fierce mother. Goddess Kali cuts through the deepest darkness, removing black magic, chronic illness, and paralyzing fear instantly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-red-700 text-white hover:bg-red-600 font-bold shadow-lg shadow-red-900/40 border-none">
                                        Book Protection
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kali%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                            Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12 bg-white text-gray-900">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-12">

                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-black border-b-2 border-red-600 pb-2">Why Perform Kali Puja?</h2>
                                <p>
                                    Maha Kali is the first of the 10 Mahavidyas. She represents Time (Kaala) and Death of Ego. She is not evil; she is the mother who protects her children by killing the demons (Raktabija) that threaten them.
                                </p>
                                <p>
                                    This puja is specifically for those feeling trapped by unseen forces, severe bad luck, or unexplained health issues that doctors cannot cure.
                                </p>
                            </section>

                            <section className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-serif font-bold text-black mb-6 flex items-center gap-3">
                                    <span className="text-3xl">⚔️</span> Fierce Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Black Magic Removal</h4>
                                            <p className="text-sm text-gray-600">Instantly burns away 'Kriya' (spells) done by others against you.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Conquers Fear</h4>
                                            <p className="text-sm text-gray-600">Best for people seeking courage or suffering from anxiety/panic attacks.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Rahu-Ketu Shanti</h4>
                                            <p className="text-sm text-gray-600">Kali controls Rahu (the shadow planet). This puja pacifies Rahu Dosh.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-black">The Ritual Steps</h2>
                                <p className="text-gray-600">Often performed on <strong>Amavasya (New Moon)</strong> night. Duration: <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-black">Bhairav Puja</h4>
                                            <p className="text-sm text-gray-600">Kali cannot be worshipped without first seeking permission from Lord Bhairav.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-black">Bali (Symbolic)</h4>
                                            <p className="text-sm text-gray-600">Sacrificing a Ash Gourd (Kohla) smash coated with vermilion instead of animal sacrifice.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-black">Maha Kali Havan</h4>
                                            <p className="text-sm text-gray-600">Offering red hibiscus flowers (Java kusum) and neem leaves into the fire.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
                                        <div className="min-w-[40px] font-bold text-red-700 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-black">Suraksha Kavach</h4>
                                            <p className="text-sm text-gray-600">Panditji creates a protective energy circle around your family.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h2 className="text-2xl font-serif font-bold text-red-900 mb-4">When to Book?</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Amavasya:</strong> The most powerful night for Kali Puja.</li>
                                    <li><strong>Tuesday/Saturday:</strong> Also highly auspicious.</li>
                                    <li><strong>Kali Jayanti/Diwali:</strong> For wealth and protection combined.</li>
                                </ul>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-black mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-red-500 transition-colors">
                                            <p className="font-bold text-black text-lg">Q: {faq.question}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="kali-puja"
                        category="goddess"
                        maxItems={4}
                    />
                </div>



                            <PujaServiceLocations pujaName="Kali Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div id="booking" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">
                                    <div className="bg-black p-4 text-center">
                                        <h3 className="text-red-500 font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-black">₹4,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-red-600 font-bold mt-1">✔ Tantric Protection</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-black">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-black">Kali Upashak</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-md border-none">
                                                    Call for Help
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kali%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Confidential
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-black mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Safe Rituals
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-red-500">★</span> Expert Knowledge
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-black py-12 text-white text-center border-t border-gray-800">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Be Fearless</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            The Mother is here to protect you. Don't suffer in silence.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-red-600 text-white hover:bg-red-500 font-bold px-12 border-none">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
