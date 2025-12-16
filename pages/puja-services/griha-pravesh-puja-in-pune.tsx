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

export default function GrihaPraveshPujaPage() {
    // 1. Service Schema Data
    const serviceSchema = generateServiceSchema({
        name: 'Griha Pravesh Puja in Pune',
        description: 'Book authentic Griha Pravesh Puja in Pune. Certified Vedic Pandits for House Warming Ceremony with Vastu Shanti and Havan. 3500+ Happy Families.',
        price: '3500',
        reviewCount: '1250',
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/griha-pravesh-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/griha-pravesh.jpg'
    })

    // 2. FAQ Schema Data
    const faqs = [
        { question: "How much does Griha Pravesh Puja cost in Pune?", answer: "Packages start from ₹3,500 (Basic) to ₹11,000 (Grand with 3 Pandits). The cost depends on the number of rituals (e.g., Vastu Shanti inclusion)." },
        { question: "How long does the puja take?", answer: "A standard Griha Pravesh + Vastu Shanti takes about 3 to 4 hours." },
        { question: "Do I need to arrange samagri?", answer: "We have two options: 1) We bring everything. 2) You buy items from our list. Most clients prefer us bringing the samagri to save hassle." },
        { question: "Can we move furniture before puja?", answer: "Heavy furniture can be moved, but the Gas Stove and Beds should ideally be moved ONLY after the puja. The kitchen shouldn't be used for cooking before boiling milk." },
        { question: "Is it done for rented houses?", answer: "Yes, a simplified puja is highly recommended for rental flats to clear old energies. Vastu Shanti is optional for rentals." },
        { question: "Can I do puja on weekends?", answer: "Yes, but weekends are busy. Please book at least 7-10 days in advance." },
        { question: "Do you provide North Indian Pandits?", answer: "Yes, we have Hindi-speaking North Indian Pandits and Marathi-speaking Gurujis." },
        { question: "Is Muhurat mandatory?", answer: "Highly recommended. If you can't match a date, we can suggest 'Abhijit Muhurat' which is auspicious every day." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Griha Pravesh Puja in Pune | Best Guruji for House Warming | Vastu Shanti"
                description="Book expert Pandit for Griha Pravesh Puja in Pune. Includes Vastu Shanti, Ganesh Puja, and Havan. Check fees, muhurats, and step-by-step vidhi. 100% Vedic Guarantee."
                keywords="griha pravesh puja pune, house warming pandit pune, vastu shanti puja, griha pravesh guruji, best pandit for griha pravesh, pune pandit booking"
                canonicalUrl="https://panditforpujabooking.com/puja-services/griha-pravesh-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-gradient-to-b from-saffron-50/20 to-white">
                {/* 2. HERO INTRODUCTION */}
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-4 py-1.5">
                                    <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Available Across Pune</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md">
                                    Griha Pravesh Puja <br />
                                    <span className="text-gold-400">Bless Your New Home</span>
                                </h1>
                                <p className="text-lg text-gold-100/90 border-l-4 border-gold-500 pl-4 leading-relaxed">
                                    Enter your dream home with the blessings of the Divine. Our 'Griha Pravesh' ceremony ensures that your new space is filled with positive vibrations, peace, and prosperity for generations to come.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20">
                                        Book Pandit Now
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Griha%20Pravesh%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                                <p className="text-sm text-gold-300 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Verified Vedic Pandits
                                    <span className="text-green-400 ml-3">✓</span> 1200+ Homes Blessed
                                </p>
                            </div>
                            {/* Hero Image Integration could go here in future */}
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* MAIN CONTENT AREA */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* 3. SERVICE EXPLANATION */}
                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-gold-200 pb-2">Why Perform Griha Pravesh Puja?</h2>
                                <p>
                                    <strong>Griha Pravesh</strong> (House Warming) is not just a ritual; it is the spiritual unification of the residents with their living space. According to the Vedas, a house is a living entity called the 'Vastu Purusha'.
                                </p>
                                <p>
                                    Before occupying a new space, it is mandatory to cleanse it of any negative energies left by construction workers or previous occupants. This puja invokes the <strong>Ashta Dikpalas</strong> (Guardians of Directions) and the <strong>Navagrahas</strong> to protect the home.
                                </p>
                                <div className="bg-saffron-50 p-6 rounded-xl border-l-4 border-saffron-500 my-6">
                                    <h4 className="text-maroon-800 font-bold m-0 text-lg">Vedic Importance</h4>
                                    <p className="m-0 text-sm mt-2 text-maroon-700">
                                        "Griha" means house and "Pravesh" means entry. The first entry into a home at an auspicious time (Muhurat) ensures that 'Sri' (Wealth) and 'Shanti' (Peace) also enter with you.
                                    </p>
                                </div>
                            </section>

                            {/* 4. BENEFITS SECTION */}
                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">✨</span> Spiritual & Personal Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Vastu Dosh Nivaran</h4>
                                            <p className="text-sm text-gray-600">Neutralizes construction flaws and aligns the home's energy with cosmic forces.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Health & Longevity</h4>
                                            <p className="text-sm text-gray-600">The sacred smoke from the Havan purifies the air and kills harmful bacteria.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Divine Protection</h4>
                                            <p className="text-sm text-gray-600">Creates a spiritual shield (Kavach) against evil eye (Nazar) and negativity.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">4</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Peace of Mind</h4>
                                            <p className="text-sm text-gray-600">Ensures sleep is restful and relationships within the family remain harmonious.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. PUJA VIDHI (PROCESS) */}
                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900">Detailed Puja Vidhi</h2>
                                <p className="text-gray-600">Our Pandits follow the strict Vedic format for Griha Pravesh. The entire process takes approximately <strong>3 to 4 hours</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Dwar Puja (Threshold Worship)</h4>
                                            <p className="text-sm text-gray-600">Breaking the coconut and worshipping the main door (Simha Dwara) before entering.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Gau Puja (Cow Worship)</h4>
                                            <p className="text-sm text-gray-600">If possible, a cow is welcomed first. If not, a symbolic idol is worshipped.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Kitchen Boiling Ritual</h4>
                                            <p className="text-sm text-gray-600">Milk is boiled until it overflows, signifying the overflow of wealth and abundance in the house.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Ganpati & Navagraha Havan</h4>
                                            <p className="text-sm text-gray-600">The main fire ritual to appease the planets and remove obstacles.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-maroon-500">
                                        <div className="min-w-[40px] font-bold text-maroon-300 text-xl">05</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">Vastu Shanti</h4>
                                            <p className="text-sm text-gray-600">Worshipping the Vastu Purusha and burying the Vastu Yantra (if required).</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl text-sm border border-gray-200">
                                    <strong className="text-maroon-900 block mb-2">📦 Required Samagri (Provided by You or Us):</strong>
                                    Turmeric, Kumkum, Coconut, Flowers, Mango Leaves, Rice, Ghee, Havan Samagri, Copper Kalash, etc. <br />
                                    <span className="text-gray-500 italic">*We provide a full checklist upon booking.*</span>
                                </div>
                            </section>

                            {/* 6. MUHURAT & TIMING */}
                            <section className="bg-maroon-50 p-8 rounded-2xl">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Shubh Muhurats</h2>
                                <p className="text-gray-700 mb-4">
                                    Choosing the right time is critical. We consult the almanac (Panchang) to find a 'Tithi' that matches your horoscope (Rashi).
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li><strong>Best Days:</strong> Vasant Panchami, Akshaya Tritiya, Gudi Padwa, Dussehra.</li>
                                    <li><strong>Avoid:</strong> Lunar Eclipse, Shraddh Paksha, and Adhik Maas.</li>
                                    <li><strong>Nakshatras:</strong> Rohini, Mrigashirsha, Uttara Phalguni, Chitra.</li>
                                </ul>
                            </section>

                            {/* 7. SCENARIO BASED SECTIONS */}
                            <section className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏠 For Flats / Apartments</h3>
                                    <p className="text-sm text-gray-600">
                                        We specialize in <span className="font-semibold">Smoke-Free Havan</span> options for apartments with fire sensors. The ritual is adapted to be compact yet strictly Vedic, suitable for balconies or living rooms.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
                                    <h3 className="font-bold text-lg text-maroon-900 mb-2">🏰 For Independent Bungalows</h3>
                                    <p className="text-sm text-gray-600">
                                        Full-scale rituals including 'Shikhara Puja' (Roof worship) and boundary protection (Dik-Bandhan) to secure the entire plot of land.
                                    </p>
                                </div>
                            </section>

                            {/* 8. & 9. WHY CHOOSE US & CERTIFIED PANDIT */}
                            <section className="text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Why Choose PanditForPujaBooking?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div className="p-4">
                                        <div className="text-4xl mb-3">🎓</div>
                                        <h4 className="font-bold text-maroon-900">Certified Gurujis</h4>
                                        <p className="text-sm mt-2">Our Pandits are graduates from Vedic Pathshalas with 10+ years of experience.</p>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-4xl mb-3">🗣️</div>
                                        <h4 className="font-bold text-maroon-900">Language Choice</h4>
                                        <p className="text-sm mt-2">Perform puja in Hindi, Marathi, Sanskrit, or English explanations.</p>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-4xl mb-3">💰</div>
                                        <h4 className="font-bold text-maroon-900">Transparent Pricing</h4>
                                        <p className="text-sm mt-2">Fixed Dakshina. No asking for extra tips or 'surprise' hidden costs.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 12. FAQ SECTION */}
                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "How much does Griha Pravesh Puja cost in Pune?", a: "Packages start from ₹3,500 (Basic) to ₹11,000 (Grand with 3 Pandits). The cost depends on the number of rituals (e.g., Vastu Shanti inclusion)." },
                                        { q: "How long does the puja take?", a: "A standard Griha Pravesh + Vastu Shanti takes about 3 to 4 hours." },
                                        { q: "Do I need to arrange samagri?", a: "We have two options: 1) We bring everything. 2) You buy items from our list. Most clients prefer us bringing the samagri to save hassle." },
                                        { q: "Can we move furniture before puja?", a: "Heavy furniture can be moved, but the Gas Stove and Beds should ideally be moved ONLY after the puja. The kitchen shouldn't be used for cooking before boiling milk." },
                                        { q: "Is it done for rented houses?", a: "Yes, a simplified puja is highly recommended for rental flats to clear old energies. Vastu Shanti is optional for rentals." },
                                        { q: "Can I do puja on weekends?", a: "Yes, but weekends are busy. Please book at least 7-10 days in advance." },
                                        { q: "Do you provide North Indian Pandits?", a: "Yes, we have Hindi-speaking North Indian Pandits and Marathi-speaking Gurujis." },
                                        { q: "Is Muhurat mandatory?", a: "Highly recommended. If you can't match a date, we can suggest 'Abhijit Muhurat' which is auspicious every day." },
                                        { q: "What if I have my periods?", a: "As per tradition, ladies during their cycle should rest and not participate in the main rituals. Other family members can perform it." },
                                        { q: "Do you serve PCMC areas?", a: "Yes, we cover Pimpri, Chinchwad, Wakad, and all PCMC areas with no extra travel fee." }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-maroon-200 transition-colors">
                                            <p className="font-bold text-maroon-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 13. LOCATION COMPONENT */}
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="griha-pravesh-puja"
                        category="home-property"
                        maxItems={4}
                    />
                </div>


                            <PujaServiceLocations pujaName="Griha Pravesh Puja" />

                        </div>

                        {/* RIGHT SIDEBAR - STICKY */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                {/* 11. PRICING CARD */}
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
                                    <div className="bg-maroon-900 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="text-4xl font-bold text-maroon-900">₹3,500<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Samagri Optional</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-maroon-900">3 - 4 Hours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-maroon-900">Certified Vedic</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Language</span>
                                                <span className="font-bold text-maroon-900">Hindi/Mar/Eng</span>
                                            </div>
                                        </div>

                                        {/* 10. BOOKING PROCESS */}
                                        <div className="space-y-3">
                                            <h4 className="font-bold text-sm text-center text-maroon-800 mb-2">Simple Booking Process</h4>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">1</span>
                                                <span>Select Date & Package</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">2</span>
                                                <span>Pay Token Amount</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <span className="bg-gold-100 text-gold-700 w-6 h-6 rounded-full flex items-center justify-center mr-2 font-bold">3</span>
                                                <span>Get Pandit Details</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                                    Call to Book
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Griha%20Pravesh%20Puja">
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

                                {/* 14. INTERNAL TRUST SIGNALS */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-maroon-900 mb-4">Why Families Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 4.9/5 Average Rating
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> 12+ Years Experience
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-gold-500">★</span> Background Verified Pandits
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* 15. STRONG CONVERSION CTA */}
                <section className="bg-maroon-900 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Enter Your Dream Home?</h2>
                        <p className="text-gold-100 mb-8 max-w-2xl mx-auto">
                            Don't leave your Griha Pravesh to chance. Book a certified Vedic Pandit today and ensure a prosperous beginning.
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
