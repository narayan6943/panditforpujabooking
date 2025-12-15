import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VastuPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vastu Puja in Pune',
        description: 'Book Vastu Puja and Shanti in Pune. Correct Vastu Dosh without demolition using Vedic Mantras and Yantras. Expert Vastu Consultants.',
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
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '850'
        }
    }

    return (
        <>
            <Head>
                <title>Vastu Puja in Pune | Vastu Shanti & Dosh Nivaran</title>
                <meta name="description" content="Book Vastu Shanti Puja in Pune by expert Pandits. Remove negative energy and Vastu Dosh from your home or office. Includes Navagraha and Vastu Purush worship." />
                <meta name="keywords" content="vastu puja pune, vastu shanti puja cost, vastu dosh nivaran, vastu pandit pune, home energy clearing" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/vastu-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Energy Balancing</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Vastu Shanti Puja <br />
                                    <span className="text-gold-400">Harmonize Your Space</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Align your home with the cosmic forces of Nature. Our Vastu Shanti Puja neutralizes structural defects (Dosh) and invites health, wealth, and happiness without the need for demolition.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Vastu Expert
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vastu%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">What is Vastu Shanti?</h2>
                                <p>
                                    <strong>Vastu Shastra</strong> is the ancient Indian science of architecture. It states that every direction is governed by a specific element (Earth, Water, Fire, Air, Space) and a deity. When a house is built violating these principles (e.g., Kitchen in North-East), it creates "Vastu Dosh".
                                </p>
                                <p>
                                    <strong>Vastu Shanti Puja</strong> is the Vedic remedy to appease the <strong>Vastu Purusha</strong> (the spirit of the building) and balance the five elements, ensuring that the occupants do not suffer from ill health or financial loss.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🛡️</span> Benefits of Vastu Puja
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Removes Obstacles</h4>
                                            <p className="text-sm text-gray-600">Clears unseen blocks that cause delays in career growth or marriage.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health Improvement</h4>
                                            <p className="text-sm text-gray-600">Corrects energy imbalances that lead to chronic illnesses and lethargy.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Financial Stability</h4>
                                            <p className="text-sm text-gray-600">Fixing the North-East and South-East corners attracts and retains wealth.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Peaceful Relationships</h4>
                                            <p className="text-sm text-gray-600">Reduces arguments and friction among family members.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Vastu Puja Vidhi</h2>
                                <p className="text-gray-600">This is a detailed ritual taking about <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Sankalp & Ganesh Puja</h4>
                                            <p className="text-sm text-gray-600">Taking a vow to cleanse the premise and removing initial obstacles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Vastu Purush Sthapana</h4>
                                            <p className="text-sm text-gray-600">Invoking the Vastu Purush in a specific Mandala drawn with colored rice/grains.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Navagraha Shanti</h4>
                                            <p className="text-sm text-gray-600">Planetary alignment is crucial for Vastu to work effectively.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Havan & Purnahuti</h4>
                                            <p className="text-sm text-gray-600">Offering oblations to the 45 deities of Vastu. The ash (Raksha) is then applied to the main door.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">When to Perform?</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Before Griha Pravesh:</strong> Ideally done on the same day or the day before shifting.</li>
                                    <li><strong>After Renovation:</strong> If you have made major structural changes.</li>
                                    <li><strong>Feeling Stagnation:</strong> If the family faces continuous illness or financial trouble after moving in.</li>
                                    <li><strong>Old House:</strong> Recommended every 10-12 years to recharge the energy.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏢 For Commercial Spaces</h3>
                                    <p className="text-sm text-gray-600">
                                        Vastu is critical for factories and offices. We focus on the 'Brahmasthan' (Center) and the owners' cabins during the puja.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏠 Vastu Peace in Flats</h3>
                                    <p className="text-sm text-gray-600">
                                        Since you cannot change the structure of a flat, we perform 'Vastu Dosh Nivaran' using Yantras and Mirrors to virtually correct the defects.
                                    </p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How much does Vastu Shanti cost?", a: "The starting price is ₹4,100. For large bungalows requiring extensive Havan, it can go up to ₹11,000." },
                                        { q: "Is animal sacrifice involved?", a: "Absolutely NOT. We perform purely 'Satvik' Vedic pujas involving only fruits, flowers, and grains." },
                                        { q: "Can we stay in the house that night?", a: "Yes. After the Vastu Shanti, the house is energized and ready for habitation." },
                                        { q: "Do you provide Vastu Yantras?", a: "Yes, our Pandits bring energized Copper/Gold-plated Yantras to be buried or hung in specific directions." },
                                        { q: "What if my kitchen is in the wrong place?", a: "Don't worry. We have 'mantra-based' remedies. We invoke Agni Dev in the South-East specifically to balance the element." },
                                        { q: "Is it different from Griha Pravesh?", a: "Griha Pravesh is the entry ceremony. Vastu Shanti is the purification ceremony. They are usually done together." },
                                        { q: "Time required?", a: "Approx. 3 to 4 hours depending on the size of the Havan." },
                                        { q: "Do you serve PCMC?", a: "Yes, we cover Pimpri, Chinchwad, Moshi, and surrounding MIDC areas." },
                                        { q: "Which direction to face during puja?", a: "The Yajman (Host) usually faces East or North during the Sankalp." }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Vastu Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹4,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">Include Yantras</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Expertise</span>
                                                <span className="font-bold text-maroon-900">Vastu Visharads</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">Simple Process</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Book Slot</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Get List</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Puja Done</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vastu%20Puja">
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
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Families Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.9/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 15+ Yrs Experts
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Fix Vastu Defects Today</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Bring harmony back into your life. Book a Vastu Shanti Puja with Pune's best experts now.
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
