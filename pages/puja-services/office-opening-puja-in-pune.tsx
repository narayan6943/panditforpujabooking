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

export default function OfficeOpeningPujaPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Office Opening Puja in Pune',
        description: 'Book Office Opening Puja in Pune. Vedic inauguration ceremony for Shops, Showrooms, and Offices. Lakshmi-Ganesh Pujan for business success.',
        price: '3100',
        reviewCount: '410',
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/office-opening-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/office-opening-hero.jpg' // Assumed path or generic
    })

    // 2. FAQs and Schema
    const faqs = [
        { question: "How much does Office Opening Puja cost?", answer: "Packages start from ₹3,100 (Simple) to ₹7,000 (Detailed with Havan)." },
        { question: "Is Havan doable in AC offices?", answer: "Yes! We use 'Dhoop Havan' or small copper kunds with minimal smoke suitable for AC environments." },
        { question: "Can we do it on a weekend?", answer: "Yes, many businesses prefer weekends. Please book 1 week in advance." },
        { question: "Do you bring flowers?", answer: "We can arrange flowers and decoration packages separately if required." },
        { question: "Is it okay if the owner is non-Hindu?", answer: "Yes, we respect all faiths. We can perform a general 'Shudhikaran' and blessing ceremony." },
        { question: "What about the Staff?", answer: "We encourage staff participation. Distributing sweets to staff is a key part of the blessing." },
        { question: "Duration?", answer: "2 to 3 hours depending on the package." },
        { question: "Areas served?", answer: "We serve Hinjewadi, Magarpatta, Kharadi, Baner, and all business hubs in Pune." },
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Office Opening Puja in Pune | Shop Inauguration Pandit"
                description="Book Office Opening Puja in Pune. Authentic Vedic inauguration (Udghatan) ceremony for new business success. Includes Lakshmi-Kuber Puja and Havan. Book Now."
                keywords="office opening puja pune, shop opening pandit, business inauguration puja, vyapar vridhi puja, new office puja vidhi"
                canonicalUrl="https://panditforpujabooking.com/puja-services/office-opening-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-gradient-to-b from-saffron-50/20 to-white">
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Corporate & Retail</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Office Inauguration Puja <br />
                                    <span className="text-gold-400">Bless Your Business</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    A grand opening needs a divine beginning. Invite Goddess Lakshmi and Lord Ganesha to your new workspace to ensure continuous growth, profit, and harmony.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Inauguration
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Office%20Opening%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Office Opening Puja?</h2>
                                <p>
                                    Starting a new venture is a major milestone. The <strong>Office Opening Puja</strong> is performed to remove any existing Vastu Dosh in the premises and to seek the favor of:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Lord Ganesha:</strong> The remover of obstacles.</li>
                                    <li><strong>Goddess Lakshmi:</strong> The bestower of wealth and cash flow.</li>
                                    <li><strong>Lord Kuber:</strong> The treasurer of the gods.</li>
                                </ul>
                                <p>
                                    It sets a positive intent (Sankalp) for the business, aligning the cosmic energies with your commercial goals.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🚀</span> Business Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Client Attraction</h4>
                                            <p className="text-sm text-gray-600">Creates a magnetic aura that attracts loyal customers.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Employee Harmony</h4>
                                            <p className="text-sm text-gray-600">Reduces internal politics and keeps the team motivated.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Financial Stability</h4>
                                            <p className="text-sm text-gray-600">Prevents sudden losses and ensures steady growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Inauguration Vidhi</h2>
                                <p className="text-gray-600">The puja takes about <strong>2 to 3 hours</strong> and often includes the ribbon cutting.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Dwar Puja & Ribon Cutting</h4>
                                            <p className="text-sm text-gray-600">Worshipping the entrance and officially stepping in.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Ganesh & Lakshmi Puja</h4>
                                            <p className="text-sm text-gray-600">Installing the idols in the office temple or North-East corner.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Vyapar Vridhi Yantra</h4>
                                            <p className="text-sm text-gray-600">Energizing the copper Yantra for business growth.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Navagraha Havan</h4>
                                            <p className="text-sm text-gray-600">A fire ritual to pacify the 9 planets, especially Mercury (Budh) for trade.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Best Timings</h2>
                                <p className="text-gray-700 mb-4">
                                    Business astrology recommends starting during the waxing moon (Shukla Paksha).
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Days:</strong> Wednesday (Mercury/Trade) and Friday (Venus/Luxury).</li>
                                    <li><strong>Nakshatras:</strong> Pushya, Revati, Ashwini, Hasta.</li>
                                    <li><strong>Note:</strong> Avoid Rahu Kaalam strictly for ribbon cutting.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏬 For Shops / Showrooms</h3>
                                    <p className="text-sm text-gray-600">
                                        We ensure the cash counter (Galla) is energized. A coconut is broken to ward off evil eyes from competitors.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">💻 For IT / Corporate</h3>
                                    <p className="text-sm text-gray-600">
                                        We perform a 'Server Room' blessing and worship the tools of trade (Laptops/Books). Smoke-free options available.
                                    </p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.question}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="office-opening-puja"
                        category="home-property"
                        maxItems={4}
                    />
                </div>



                            <PujaServiceLocations pujaName="Office Opening Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹3,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Inc. Travel</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">2 - 3 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Business Expert</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">Booking Steps</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Check Date</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Book Slot</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Grand Opening</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Office%20Opening%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Satisfaction Guarantee
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Businesses Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.8/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Corporate Experts
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Launch With Success</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Give your business the spiritual foundation it deserves. Book your opening puja today.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
