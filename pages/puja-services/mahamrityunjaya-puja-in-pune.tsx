import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function MahaMrityunjayaPujaPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Maha Mrityunjaya Jaap',
        description: 'Maha Mrityunjaya Jaap is a powerful Shiva mantra chanting ritual that provides healing, protection, and relief from negativity. Available for online and offline booking.',
        price: '3000',
        reviewCount: '580',
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/mahamrityunjaya-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/rudrabhishek-puja-hero.png'
    })

    const faqs = [
        { question: "What is the main purpose of Maha Mrityunjaya Jaap?", answer: "It protects against illness, accidents, negativity, fear, and untimely events while bringing healing and longevity." },
        { question: "Can this Jaap help during medical emergencies or illness?", answer: "Yes, it is widely performed for patients battling critical diseases, surgery, ICU cases, chronic illness, and emotional distress." },
        { question: "How many chants are needed for maximum benefit?", answer: "11,000 for basic blessing, 21K–51K for health issues, and 125K for critical conditions and deep healing." },
        { question: "Is Maha Mrityunjaya Jaap scientifically beneficial?", answer: "Studies show Sanskrit mantras reduce stress, stabilize brainwaves, and support emotional healing." },
        { question: "Can I book Maha Mrityunjaya Jaap online?", answer: "Yes, certified Vedic pandits can perform the Jaap on your behalf at temples or your home." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'What is Maha Mrityunjaya Jaap?' },
        { id: 'significance', title: 'Significance & Science' },
        { id: 'ritual', title: 'Ritual & Vidhi' },
        { id: 'havan', title: 'Maha Mrityunjaya Havan' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'pune-service', title: 'Service in Pune' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <SEOHead
                title="Maha Mrityunjaya Jaap – Benefits, Rituals, Cost, & Online Booking | Certified Pandits"
                description="Book Maha Mrityunjaya Jaap for healing, protection, and peace. Learn benefits, rituals, cost, best timings, and how this powerful Shiva mantra removes illness, negativity, and obstacles."
                keywords="Maha Mrityunjaya Jaap, Maha Mrityunjaya Puja, Mrityunjaya Mantra Benefits, Online Maha Mrityunjaya Jaap, Maha Mrityunjaya Jaap in Pune, Shiva Healing Mantra, Best Puja for Health & Protection"
                canonicalUrl="https://panditforpujabooking.com/puja-services/mahamrityunjaya-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/rudrabhishek-puja-hero.png"
                            alt="Maha Mrityunjaya Jaap"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Healing & Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Invoke Lord Shiva’s Divine Protection <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">with Maha Mrityunjaya Jaap</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Healing, Peace, Protection & Negative Energy Removal with the Most Powerful Vedic Mantra.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Maha Mrityunjaya Jaap Now
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Maha%20Mrityunjaya%20Jaap" target="_blank" rel="noopener noreferrer">
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
                                    The Maha Mrityunjaya Jaap is one of the most spiritually potent and scientifically revered mantras in the Vedic tradition. Known as the “Mantra for Conquering Death,” it is dedicated to Lord Shiva and is believed to offer protection, healing, longevity, and relief from untimely accidents, diseases, and negative planetary influences. In recent years, families around India and abroad have increasingly turned to this powerful Jaap for emotional stability, physical healing, and divine intervention during times of crisis.
                                </p>
                                <p>
                                    The mantra originates from the Rigveda and Yajurveda, carrying thousands of years of spiritual energy. Its vibrations are deeply healing, helping individuals overcome fear, anxiety, illness, and uncertainty. The sound currents of “Om Tryambakam Yajamahe…” activate the chakras, cleanse the aura, and create a divine shield of protection around the devotee. This is why many people perform or book Maha Mrityunjaya Jaap when facing major health issues, surgeries, recurring obstacles, legal matters, relationship problems, property disputes, financial instability, or mental distress.
                                </p>
                            </section>

                            {/* Significance Loop */}
                            <section id="significance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🕉️</span>
                                    Significance & Science
                                </h2>
                                <p>
                                    The mantra works not only on a spiritual level but also on the emotional and psychological plane. Regular listening or chanting can reduce stress, calm the nervous system, improve mental clarity, and stabilize emotions. Research on Sanskrit vibrations shows that chanting mantras lowers cortisol levels and increases alpha brainwaves associated with relaxation and healing.
                                </p>
                                <p>
                                    For patients suffering from chronic illness, cancer, heart disease, mental pressure, or postoperative weakness, this mantra serves as a divine support system that strengthens hope and promotes recovery.
                                </p>

                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        The mantra becomes even more powerful when the intention (Sankalpa) is set correctly. A clear intention ensures that the energy of the Jaap aligns with the devotee’s goals for profound results.
                                    </p>
                                </div>

                                <p>
                                    This mantra is extremely beneficial during dangerous planetary periods such as Sade Sati, Mahadasha changes, Rahu-Ketu doshas, and Mars-related conflicts. It harmonizes the Navagrahas, reduces the intensity of karmic debts, and supports smoother life transitions.
                                </p>
                            </section>

                            {/* Ritual Section */}
                            <section id="ritual" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ritual Details</h2>
                                <p>
                                    Families often perform this Jaap for their loved ones admitted to hospitals or undergoing long treatments. The ritual is traditionally done in multiples of 11,000 chants—such as 11K, 21K, 31K, 51K, or 125K jaaps—based on the devotee’s needs.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>11,000 Chants:</strong> For basic blessing and general well-being.</li>
                                    <li><strong>21,000 - 51,000 Chants:</strong> Recommended for health issues, surgery recovery, and emotional distress.</li>
                                    <li><strong>125,000 Chants:</strong> Performed for critical cases, life-threatening situations, and deep healing.</li>
                                </ul>
                                <p>
                                    During the ritual, Vedic pandits chant the mantra in sync, creating a powerful vibration field that purifies the environment and removes karmic blockages.
                                </p>
                            </section>

                            <section id="havan" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3 className="text-2xl font-bold text-maroon-800">Maha Mrityunjaya Havan</h3>
                                <p>
                                    The Maha Mrityunjaya Havan is considered the final and most transformative step of the ritual. When ghee and sacred herbs are offered into the fire, the energy of the Jaap multiplies, spreading positivity, peace, and protection. Homes that have recently faced illness, disputes, negativity, frequent arguments, or emotional heaviness often experience an immediate shift in the atmosphere after this havan. The energy becomes lighter, peaceful, and spiritually uplifting.
                                </p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Maha Mrityunjaya Jaap</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Healing from illness & emotional stress",
                                        "Protection from accidents and negativity",
                                        "Relief from bad planetary influence",
                                        "Stability during major life challenges",
                                        "Peace, prosperity & longevity",
                                        "Awakens inner strength"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex p-4 bg-white rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-2xl mr-3">🛡️</span>
                                            <p className="text-sm text-gray-700 font-medium">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Pune Service */}
                            <section id="pune-service" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Book Maha Mrityunjaya Jaap in Pune</h2>
                                <p className="text-gray-700 mb-4">
                                    Maha Mrityunjaya Jaap in Pune is one of the most requested spiritual rituals for families seeking healing, protection, and relief from negative planetary influences. Whether you live in <strong>Kothrud, Baner, Wakad, Kharadi, Hadapsar, Pimpri-Chinchwad, Viman Nagar</strong>, or any other part of Pune, this powerful Shiva Jaap can be performed at your home or temple by certified Vedic pandits.
                                </p>
                                <p className="text-gray-700">
                                    The ritual is especially beneficial during health issues, surgeries, hospital treatments, emotional instability, or when facing recurring obstacles. With correct pronunciation, strict adherence to Vedic procedures, and complete Sankalpa as per your requirement, the Maha Mrityunjaya Jaap generates positive vibrations that protect your family from harm and bring peace, longevity, and divine grace.
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <Button variant="primary" href="#booking">Book Verified Pandit in Pune</Button>
                                </div>
                            </section>

                            {/* Universal Access */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p>
                                    What makes Maha Mrityunjaya Jaap truly universal is its accessibility. Anyone, regardless of religion or region, can chant or listen to it. Its purpose is pure—it protects life, grants peace, and awakens inner strength. In cities like Pune, Mumbai, Delhi, and Bangalore, families often book online Maha Mrityunjaya Jaap for healing, peace, and protection.
                                </p>
                                <p>
                                    In a world filled with uncertainty, constant stress, and emotional burden, the Maha Mrityunjaya Jaap offers a divine refuge. Its vibrations remind individuals that they are protected, supported, and guided by a higher force.
                                </p>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.question}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

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

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Maha Mrityunjaya Jaap</h4>
                                        <p className="text-gold-100 text-sm mb-4">Talk to our Pandit Ji for Muhurat or Sankalp</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Maha%20Mrityunjaya%20Jaap" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="mahamrityunjaya-puja"
                        category="health-wellbeing"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Mahamrityunjaya Puja" />
            <Footer />
        </>
    )
}
