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

export default function SatyanarayanPujaPage() {
    // 1. Service Schema Data
    const serviceSchema = generateServiceSchema({
        name: 'Satyanarayan Puja in Pune',
        description: 'Book Satyanarayan Puja in Pune. Perform this auspicious Vrat at home for peace, wish fulfillment, and gratitude. Verified Pandits, Fixed Rates.',
        price: '2100',
        reviewCount: '980',
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/satyanarayan-puja',
        image: 'https://panditforpujabooking.com/images/satyanarayan-puja.jpg'
    })

    // 2. FAQ Schema Data
    const faqs = [
        { question: "What is the cost of Satyanarayan Puja?", answer: "Our standard package is ₹2,100. This includes the Pandit Dakshina and traveling. Samagri is separate." },
        { question: "How to make the Prasad?", answer: "Roast Rava (Semolina) in Ghee, add Milk, Sugar, and Chopped Bananas. All ingredients should be in portions of 1.25 (e.g., 1.25 bowls)." },
        { question: "Can we do it in the evening?", answer: "Yes! In fact, most Satyanarayan Pujas are performed in the evening (Pradosh Kaal) after work hours." },
        { question: "Do we need to fast?", answer: "It is recommended to fast until the Puja is over and break it by taking the Prasad. However, light fruits are allowed." },
        { question: "Is Havan included?", answer: "Standard Satyanarayan Puja does NOT include Havan. It is primarily a Katha path. Havan can be added on request for ₹1,100 extra." },
        { question: "Can a single person do it?", answer: "Yes, anyone (male or female, single or married) can perform this Vrat individually." },
        { question: "Who arranges the photos/idols?", answer: "The Pandit ji will usually bring a photo if you don't have one. Please confirm while booking." },
        { question: "Language of the Katha?", answer: "Our Pandits can narrate the story in Marathi, Hindi, or English so you understand the meaning." },
        { question: "How many people can attend?", answer: "As many as you like! The more people listen to the story, the more 'Punya' (merit) is generated." },
        { question: "Do you serve Wagholi/Kharadi?", answer: "Yes, we have Pandits stationed in Wagholi, Kharadi, and Viman Nagar for quick availability." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Satyanarayan Puja in Pune | Book Pandit for Katha & Vrat"
                description="Book Pandit for Satyanarayan Puja in Pune. Authentic Katha path with Sheera Prasad offerings. Ideal for house warming, birthdays, or Purnima. Book Online."
                keywords="satyanarayan puja pune, satyanarayan katha pandit, satyanarayan vrat vidhi, satyanarayan puja cost pune, book pandit for satyanarayan"
                canonicalUrl="https://panditforpujabooking.com/puja-services/satyanarayan-puja"
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Most Popular Ritual</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Satyanarayan Puja <br />
                                    <span className="text-gold-400">The Path of Truth</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Invoke the blessings of Lord Vishnu (Satyanarayan) to bring peace, remove obstacles, and thank the divine for successes. It is the simplest and most powerful puja for modern families.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20" href="tel:+918446272142">
                                        Book Pandit Now
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Satyanarayan%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Perform Satyanarayan Puja?</h2>
                                <p>
                                    <strong>Satyanarayan Puja</strong> is dedicated to Lord Vishnu in his form as the embodiment of Truth (Satya). Mentioned in the <em>Reva Khanda</em> of the <em>Skanda Purana</em>, this puja is unique because it can be performed by anyone, anytime, without strict muhurat constraints.
                                </p>
                                <p>
                                    It is popularly performed to express gratitude (Thanksgiving) after a happy event like a job promotion, marriage, house warming, or simply to bring peace during difficult times.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">✨</span> Benefits of the Vrat
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Mental Peace</h4>
                                            <p className="text-sm text-gray-600">The Katha listening process calms the mind and removes anxiety.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Family Unity</h4>
                                            <p className="text-sm text-gray-600">Bringing the whole family together to listen to the stories strengthens bonds.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Wish Fulfillment</h4>
                                            <p className="text-sm text-gray-600">It is a "Kamya" puja, meaning it is potent for fulfilling specific desires (Manokamna).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Puja Vidhi & Steps</h2>
                                <p className="text-gray-600">The entire ritual takes about <strong>1.5 to 2 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Ganesh & Kalash Puja</h4>
                                            <p className="text-sm text-gray-600">Invoking Lord Ganesh and establishing the Kalash (Pot) representing the universe.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Navagraha Puja</h4>
                                            <p className="text-sm text-gray-600">Brief worship of the 9 planets to ensure they are favorable.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Satyanarayan Katha (Main)</h4>
                                            <p className="text-sm text-gray-600">Reading the 5 Chapters (Adhyays) that teach the importance of truth and devotion.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Aarti & Prasad</h4>
                                            <p className="text-sm text-gray-600">Offering the specific 'Sapaad Bhaksh' (Prasad made of 1.25 measures of semolina, sugar, ghee, milk, banana).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Best Timing (Muhurat)</h2>
                                <p className="text-gray-700 mb-4">
                                    While it can be done daily, certain days amplify the benefits significantly.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Purnima (Full Moon):</strong> The most auspicious day for Satyanarayan Puja.</li>
                                    <li><strong>Ekadashi:</strong> The 11th day of the lunar cycle, dear to Lord Vishnu.</li>
                                    <li><strong>Thursdays:</strong> Dedicated to Guru/Vishnu.</li>
                                    <li><strong>Sankranti:</strong> When the sun enters a new zodiac sign.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏢 For Offices</h3>
                                    <p className="text-sm text-gray-600">
                                        A great way to boost employee morale and team spirit. The Katha creates a vibration of honesty and ethics in the workplace.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">👶 For Birthdays</h3>
                                    <p className="text-sm text-gray-600">
                                        Instead of just a party, start the new year of life with blessings. A short version of the puja can be done before the cake cutting.
                                    </p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "What is the cost of Satyanarayan Puja?", a: "Our standard package is ₹2,100. This includes the Pandit Dakshina and traveling. Samagri is separate." },
                                        { q: "How to make the Prasad?", a: "Roast Rava (Semolina) in Ghee, add Milk, Sugar, and Chopped Bananas. All ingredients should be in portions of 1.25 (e.g., 1.25 bowls)." },
                                        { q: "Can we do it in the evening?", a: "Yes! In fact, most Satyanarayan Pujas are performed in the evening (Pradosh Kaal) after work hours." },
                                        { q: "Do we need to fast?", a: "It is recommended to fast until the Puja is over and break it by taking the Prasad. However, light fruits are allowed." },
                                        { q: "Is Havan included?", a: "Standard Satyanarayan Puja does NOT include Havan. It is primarily a Katha path. Havan can be added on request for ₹1,100 extra." },
                                        { q: "Can a single person do it?", a: "Yes, anyone (male or female, single or married) can perform this Vrat individually." },
                                        { q: "Who arranges the photos/idols?", a: "The Pandit ji will usually bring a photo if you don't have one. Please confirm while booking." },
                                        { q: "Language of the Katha?", a: "Our Pandits can narrate the story in Marathi, Hindi, or English so you understand the meaning." },
                                        { q: "How many people can attend?", a: "As many as you like! The more people listen to the story, the more 'Punya' (merit) is generated." },
                                        { q: "Do you serve Wagholi/Kharadi?", a: "Yes, we have Pandits stationed in Wagholi, Kharadi, and Viman Nagar for quick availability." }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="satyanarayan-puja"
                        category="god"
                        maxItems={4}
                    />
                </div>



                            <PujaServiceLocations pujaName="Satyanarayan Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Inc. Travel</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">1.5 - 2 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Certified Vedic</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">How it Works</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Book Online/Call</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Get Pandit Contact</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Pay After Puja</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Satyanarayan%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🔒 100% Satifaction Guarantee
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Families Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.8/5 Average Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 5000+ Pujas Done
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Invite Prosperity Today</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Experience the divine blessings of Lord Satyanarayan. Book your Quick or Detailed puja now.
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
