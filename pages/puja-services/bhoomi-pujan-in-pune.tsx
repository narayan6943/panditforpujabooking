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

export default function BhoomiPujanPage() {
    const baseServiceSchema = generateServiceSchema({
        name: 'Bhoomi Pujan in Pune',
        description: 'Book expert Pandit for Bhoomi Pujan in Pune. Authentic Ground Breaking Ceremony by Expert Pandits. Khat Muhurat, Shila Sthapana & Sheshnag Puja.',
        price: '3100',
        reviewCount: '520',
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/bhoomi-pujan-in-pune',
        // Assuming there isn't a specific image, or using a default. The original didn't allow passing image to schema easily but SEOHead does.
        // I will omit image if not explicitly known, or use a generic one if I had one. 
        // The previous file didn't use an image in schema, just generic.
        // Wait, the previous file didn't define an image field in the manual schema.
    })

    const serviceSchema = {
        ...baseServiceSchema,
        offers: {
            '@type': 'Offer',
            price: '3100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const faqs = [
        { question: "Cost of Bhoomi Pujan in Pune?", answer: "Residential plots start at ₹3,100. Commercial projects start at ₹5,100 owing to larger scale rituals." },
        { question: "What items are buried?", answer: "Silver Nag-Nagin, Copper Lota, Pancha Ratna (5 Gems), Pancha Dhatu (5 Metals), and Medicinal Roots." },
        { question: "Who provides the Silver Nagin?", answer: "We can arrange these specialized items for you at an additional cost, or guide you to buy them." },
        { question: "Can we start construction same day?", answer: "Yes. Once the Shila Nyas is done, the laborers can start their work immediately." },
        { question: "Do we need to be present?", answer: "The owner (Yajman) MUST be present to lay the first brick. It connects your destiny to the land." },
        { question: "Is it done for borewell digging?", answer: "Yes, a watery coconut is broken and a small prayer is done before the borewell rig starts." },
        { question: "What if there is an old house?", answer: "The old house must be demolished first. Then Bhoomi Pujan is done for the NEW foundation." },
        { question: "Duration?", answer: "Approx. 45 mins to 1 hour + Time for distributing sweets." },
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Bhoomi Pujan in Pune | Ground Breaking Ceremony Pandit"
                description="Book expert Pandit for Bhoomi Pujan in Pune. Perform Khat Muhurat and Foundation worship (Shila Nyas) before construction. Ensure safety and timeliness of your project."
                keywords="bhoomi pujan pune, ground breaking ceremony pandit, khat muhurat vidhi, foundation puja pune, plot puja"
                canonicalUrl="https://panditforpujabooking.com/puja-services/bhoomi-pujan-in-pune"
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">New Construction</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Bhoomi Pujan <br />
                                    <span className="text-gold-400">Sanctify the Foundation</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Seek the permission of Mother Earth (Bhoomi Devi) before you dig. Our Vedic Bhoomi Pujan ensures that your construction completes without obstacles, accidents, or delays.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Ceremony
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Bhoomi%20Pujan" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Bhoomi Pujan is Essential?</h2>
                                <p>
                                    <strong>Bhoomi Pujan</strong> (Ground Breaking) is the act of asking forgiveness from Mother Earth for the disturbance caused by excavation. It is believed that the earth rests on the hood of <strong>Sheshnag</strong> and is supported by <strong>Lord Varaha</strong>.
                                </p>
                                <p>
                                    By worshipping them, along with the 'Kshetrapal' (Land Guardian), we ensure that the land becomes stable and the building stands strong against natural calamities.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🏗️</span> Project Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Safety of Workers</h4>
                                            <p className="text-sm text-gray-600">Prevents accidents and mishaps at the construction site.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Timely Completion</h4>
                                            <p className="text-sm text-gray-600">Removes 'Vighna' (Obstacles) that cause funding or legal delays.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Positive Vibrations</h4>
                                            <p className="text-sm text-gray-600">Cleanses the land of any historical negativity (ghosts/bones).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">The Ritual Process</h2>
                                <p className="text-gray-600">The ceremony usually takes <strong>60 to 90 minutes</strong> and is done in the North-East corner.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sthan Shuddhi</h4>
                                            <p className="text-sm text-gray-600">Purifying the spot with Gangajal and Cow Urine (Gomutra).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Digging the Pit</h4>
                                            <p className="text-sm text-gray-600">The first dig is done with a gold/silver-touched pickaxe.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Nag-Nagin & Kurma Puja</h4>
                                            <p className="text-sm text-gray-600">Burying a silver pair of snakes and a tortoise (symbol of stability) into the foundation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shila Nyas</h4>
                                            <p className="text-sm text-gray-600">Laying the 'First Brick' (Shila) with cement/mortar by the owner's hands.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">When to do Bhoomi Pujan?</h2>
                                <p className="text-gray-700 mb-4">
                                    According to Vastu Shastra, certain months (Mishra months) require special attention.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Best Months:</strong> Vaishakh, Shravan, Margashirsha, Paush, Phalgun.</li>
                                    <li><strong>Avoid:</strong> Ashadh Shukla to Kartik Shukla (Chaturmas) is generally avoided for starting new foundations.</li>
                                    <li><strong>Best Days:</strong> Monday and Thursday.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏘️ For New Bungalows</h3>
                                    <p className="text-sm text-gray-600">
                                        Mandatory before the excavator starts digging. It sets the energy tone for the entire house.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏗️ For Developers</h3>
                                    <p className="text-sm text-gray-600">
                                        We perform grand scale community Bhoomi Fujans for apartments, invoking blessings for the entire project's success.
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
                        currentSlug="bhoomi-pujan"
                        category="home-property"
                        maxItems={4}
                    />
                </div>



                            <PujaServiceLocations pujaName="Bhoomi Pujan" />

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
                                                <span className="font-bold text-maroon-900">60 - 90 Mins</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Vedic Expert</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">Booking Steps</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Confirm Muhurat</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Address Details</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Pandit Arrives</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Bhoomi%20Pujan">
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
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Builders Choose Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.9/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Timely Arrival
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Start Construction Right</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Ensure a safe and prosperous project. Book Vedic Bhoomi Pujan now.
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
