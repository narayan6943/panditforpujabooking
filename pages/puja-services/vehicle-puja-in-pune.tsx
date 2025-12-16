import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VehiclePujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vehicle Puja in Pune',
        description: 'Book Vehicle Puja (Vahan Pujan) in Pune for new Car/Bike. Showroom delivery puja by Vedic Pandit to ensure safety and prevent accidents.',
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
            price: '1100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '630'
        }
    }

    return (
        <>
            <Head>
                <title>Vehicle Puja in Pune | New Car & Bike Booking Pandit</title>
                <meta name="description" content="Book Pandit for Vehicle Puja in Pune. Authentic Vahan Pujan for new Car or Bike. Perform at your home or Showroom. Protects from accidents and evil eye." />
                <meta name="keywords" content="vehicle puja pune, car puja pandit, new bike puja, vahan pujan vidhi, showroom delivery puja" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/vehicle-puja-in-pune" />
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
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Safety First</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Vehicle Puja (Vahan Pujan) <br />
                                    <span className="text-gold-400">Drive with Divine Protection</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    A new vehicle is a new member of your family. Bless it with the ancient 'Vahan Pujan' to ward off negative energy, prevent accidents, and ensure every journey is safe.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Car Puja
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vehicle%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Perform Vehicle Puja?</h2>
                                <p>
                                    In Hinduism, a vehicle is not just a machine; it is considered a carrier (Vahana). Just as deities have their vahanas (Mouse for Ganesh, Eagle for Vishnu), your vehicle carries you through life's journey.
                                </p>
                                <p>
                                    <strong>Vahan Pujan</strong> is performed to show gratitude to the divine and to install the 'Raksha Kavach' (Protection Shield) on the machine, minimizing the risk of mechanical failures and accidents caused by planetary alignments (especially Rahu/Ketu/Mars).
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🚗</span> Benefits of Car/Bike Puja
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Accident Protection</h4>
                                            <p className="text-sm text-gray-600">Pacifies Mars (Mangal), the planet of accidents and bloodshed.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Nazar Dosh Removal</h4>
                                            <p className="text-sm text-gray-600">New shining vehicles attract jealousy. The puja cleanses this 'Evil Eye'.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Longevity of Engine</h4>
                                            <p className="text-sm text-gray-600">Believe it or not, many devotees report fewer breakdowns after a proper puja.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Vahan Pujan Vidhi</h2>
                                <p className="text-gray-600">This is a short but precise ritual taking about <strong>30 to 45 minutes</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Shuddhikaran & Swastik</h4>
                                            <p className="text-sm text-gray-600">Sprinkling holy water and drawing the Swastik (symbol of auspiciousness) with turmeric/vermilion on the bonnet.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Engine Puja</h4>
                                            <p className="text-sm text-gray-600">Putting a flower garland and worshipping the engine as 'Vishwakarma' (The Divine Architect).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Lemon Crushing</h4>
                                            <p className="text-sm text-gray-600">Driving the vehicle over 4 lemons placed under the wheels. This absorbs negative energy and symbolizes crushing obstacles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Coconut Breaking</h4>
                                            <p className="text-sm text-gray-600">Breaking a coconut near the front right wheel as the final offering.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">When to do it?</h2>
                                <p className="text-gray-700 mb-4">
                                    Ideally, immediately after taking delivery from the showroom.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Best Days:</strong> Thursday, Friday, Saturday (for Shani defense).</li>
                                    <li><strong>Avoid:</strong> Rahu Kaalam and Amavasya (unless it's Diwali).</li>
                                    <li><strong>Festivals:</strong> Dussehra (Ayudha Puja) is the most auspicious day for all vehicles.</li>
                                </ul>
                            </section>

                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏢 At Showroom</h3>
                                    <p className="text-sm text-gray-600">
                                        Our Pandit can come directly to the car showroom (Tata, Maruti, Hyundai, etc.) to perform the puja before you drive out.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏠 At Home</h3>
                                    <p className="text-sm text-gray-600">
                                        If you've already brought the vehicle home, we can perform a more detailed puja in your parking lot.
                                    </p>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How much does Car Puja cost?", a: "For bikes: ₹1,100. For Cars: ₹2,100. This includes Pandit's travel and Dakshina." },
                                        { q: "Do you bring the lemons?", a: "Yes, we can bring the lemons, coconut, and flowers at a small extra cost if you request." },
                                        { q: "Do I need to wash the car?", a: "Yes, the vehicle should be clean (exterior) before puja. Showroom delivery cars are usually already clean." },
                                        { q: "Which god is worshipped?", a: "Lord Ganesha (Vighnaharta) and Lord Vishwakarma (Engineer God)." },
                                        { q: "Can we do it for second-hand cars?", a: "Absolutely! It is even MORE important for used cars to clear the energy of the previous owner." },
                                        { q: "Is it okay to drive before puja?", a: "Try to drive only from showroom to home/temple. Avoid long trips before the puja." },
                                        { q: "Do you come to PCMC showrooms?", a: "Yes, we serve all showrooms in Wakad, Pimpri, Baner, and Hadapsar." },
                                        { q: "Time required?", a: "30-45 minutes max." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Vehicle Puja" />

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
                                            <div className="text-4xl font-bold text-maroon-900">₹1,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Inc. Travel</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">30 - 45 Mins</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Vedic Expert</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">Easy Booking</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Share Location</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Pandit Comes</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Drive Safe</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vehicle%20Puja">
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
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Drivers Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.9/5 Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> On-Time Service
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Protect Your Ride</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Don't risk the road. Ensure divine safety with a proper Vahan Pujan today.
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
