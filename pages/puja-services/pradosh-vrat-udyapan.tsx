import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function PradoshVratUdyapanPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Pradosh Vrat Udyapan',
        description: 'Book Pandit for Pradosh Vrat Udyapan in Pune. Sunset Shiva Puja for removing sins and fulfilling wishes. Authentic Vedic rituals for completing your Pradosh Vrat.',
        price: '2100',
        reviewCount: '150', // Assumed or estimated
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/pradosh-vrat-udyapan',
        image: 'https://panditforpujabooking.com/images/rudrabhishek-hero.png'
    })

    // 2. FAQs
    const faqs = [
        { question: "What is the exact timing for Pradosh Puja?", answer: "The most auspicious time is the 'Pradosh Kaal', which is usually the 1.5-hour window starting from sunset. Puja must be concluded within this time for maximum benefit." },
        { question: "Can we eat during the day?", answer: "Strict observers perform 'Nirjala' (waterless) fast. However, most people observe a partial fast, eating only fruits and milk during the day and breaking the fast after evening puja." },
        { question: "Why is Bel Patra so important?", answer: "The Bel tree is believed to have grown from the sweat drops of Goddess Parvati. It is dear to Shiva. A single Bel leaf offered with devotion is equal to a thousand lotuses." },
        { question: "Can I do Udyapan at a temple?", answer: "Yes, doing it in a Shiva temple is highly auspicious. However, it can be done at home with a consecrated Shivalinga or by inviting a Pandit who brings the deities." },
        { question: "What if I miss a Pradosh in between?", answer: "If you miss one due to unavoidable reasons (illness, menstruation), you can continue the count from the next one. The Udyapan should only be done after the vowed number (11 or 21) is completed." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    
    // 3. Sections for Jump to Navigation
    const sections = [
        { id: 'intro', title: 'Introduction' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' }
    ]


    return (
        <>
            <SEOHead
                title="Pradosh Vrat Udyapan in Pune | Sunset Shiva Puja"
                description="Book expert Pandit for Pradosh Vrat Udyapan in Pune. Conclude your Pradosh fasts with authentic Shiva Puja, Havan, and Brahmin Bhojan."
                keywords="pradosh vrat udyapan pune, pradosh puja pandit, sunset shiva puja, shani pradosh udyapan, lord shiva puja pune"
                canonicalUrl="https://panditforpujabooking.com/puja-services/pradosh-vrat-udyapan"
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
                        {/* Using standard img for hero background as per existing style, or could use Next Image fill */}
                        <Image
                            src="/images/rudrabhishek-hero.png"
                            alt="Pradosh Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Sunset Worship</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Pradosh Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Absolve All Sins</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Pradosh is the most auspicious time (sunset) to worship Lord Shiva. Perform Udyapan to cleanse negative karma and attain Moksha.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Pradosh%20Vrat%20Udyapan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">
                                        Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Pradosh Vrat</strong> is popularly known as a fast for the removal of sins and fulfillment of all desires. It is observed on the <strong>Trayodashi Tithi</strong> (13th day) of both the Krishna Paksha (waning moon) and Shukla Paksha (waxing moon).
                                </p>
                                <p>
                                    The term <em>Pradosh</em> refers to the twilight period (approximately 1.5 hours before and after sunset). It is believed that during this auspicious time, Lord Shiva performs the cosmic <strong>Ananda Tandava</strong> (Dance of Bliss) on Mount Kailash, and all the Devas and celestial beings gather to witness this spectacle.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> is the grand conclusion of the Vrat, typically performed after observing it for a period of 11 or 21 Trayodashis (or years). It is a powerful ritual to clear 'Prarabdha Karma' (past karma).
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: The Halahala Poison</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    Why sunset worship is the most powerful time to please Mahadev.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Churning of the Ocean</h3>
                                    <p>
                                        During the Samudra Manthan (Churning of the Milky Ocean) by Devas and Asuras, a deadly poison named <strong>Halahala</strong> emerged before the Nectar (Amrit). The poison was so potent that it threatened to destroy the entire universe.
                                    </p>
                                    <p>
                                        Terrified, the Devas approached Lord Shiva for protection. In his infinite compassion, Shiva swallowed the poison on a Trayodashi day during the Pradosh Kaal (evening twilight). Goddess Parvati held his throat to stop the poison from descending, turning his throat blue (hence the name <strong>Neelkanth</strong>).
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Cosmic Dance</h3>
                                    <p>
                                        Relieved from the danger, the Devas praised Lord Shiva. Pleased, Shiva danced the Tandava between the horns of Nandi (the Bull) during the twilight hour. This time became known as Pradosh. It is said that anyone who worships Shiva during this time receives the blessings of the entire pantheon of Gods.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Story of the Prince and the Brahmin Widow</h3>
                                    <p>
                                        Another popular legend involves a widow Brahmani and a Prince (Dharmagupta) who had lost his kingdom. By observing the Pradosh Vrat under the guidance of Sage Shandilya, the Prince regained his kingdom and married a Gandharva princess. This established the Vrat's power to restore lost glory and wealth.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Pradosh Section - New */}
                            <section id="types" className="bg-maroon-50 rounded-2xl p-8 border border-maroon-100">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Types of Pradosh & Benefits</h2>
                                <p className="text-gray-700 mb-6">
                                    The benefits of Pradosh change based on the day of the week it falls on:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">🌙 Som Pradosh (Monday)</h3>
                                        <p className="text-gray-600 text-sm">Dedicated to tranquility. Fulfills all heartfelt desires and mental peace.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">🔥 Bhouma Pradosh (Tuesday)</h3>
                                        <p className="text-gray-600 text-sm">Relieves debts (Rina Mochana) and cures blood-related diseases.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">🦉 Saumya Pradosh (Wednesday)</h3>
                                        <p className="text-gray-600 text-sm">Enhances knowledge, wisdom, and academic success for children.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">🙏 Guru Pradosh (Thursday)</h3>
                                        <p className="text-gray-600 text-sm">Removes enemies/competitors and brings divine grace.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">⚖️ Shukra Pradosh (Friday)</h3>
                                        <p className="text-gray-600 text-sm">Removes bad luck and brings marital bliss and luxury.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 text-lg mb-2">🪐 Shani Pradosh (Saturday)</h3>
                                        <p className="text-gray-600 text-sm">Highly auspicious. Removes Shani Sade Sati effects and grants progeny (Putra Prapti).</p>
                                    </div>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">The Sunset Ceremony</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. The Sankalpa</h3>
                                        <p className="text-gray-700">
                                            The devotee takes a vow after a morning bath, but the main rituals are reserved for the evening. Food is strictly avoided (Nirjala or Phalahar).
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Mandala & Kalash Sthapana</h3>
                                        <p className="text-gray-700">
                                            In the evening (Pradosh Kaal), a clean area is decorated with cow dung or gangajal. A lottery (mandala) is drawn with five colors. A Copper Kalash filled with water, durva grass, and a coin is placed with a coconut on top.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Umamaheshwar Puja</h3>
                                        <p className="text-gray-700">
                                            Idols or images of Lord Shiva and Goddess Parvati (Umamaheshwar) are worshipped with 16 sacred offerings (Shodashopchar).
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                            <p><strong>The Rudrabhishek:</strong> This is the heart of the puja. Chanting the Rudri Path or "Om Namah Shivaya", the Shivalinga is bathed with:</p>
                                            <ul className="list-disc pl-5 mt-2 text-sm">
                                                <li>Milk (Longevity).</li>
                                                <li>Curd (Good Children).</li>
                                                <li>Ghee (Moksha).</li>
                                                <li>Honey (Sweet Voice/Music).</li>
                                                <li>Sugar/Cane Juice (Health).</li>
                                                <li>Bhasma (Purification).</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. The Havan</h3>
                                        <p className="text-gray-700">
                                            A sacred fire ritual is performed using 'Kheer' (Rice pudding) and Sesame seeds (Til) while chanting the Maha Mrityunjaya Mantra 108 times.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Brahmin Bhojan & Daan</h3>
                                        <p className="text-gray-700">
                                            Finally, clothes, utensils, and food are donated to Brahmins. The observer breaks the fast only after this, eating the Prasad first.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Essential items for the Pradosh Udyapan.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Shiva Puja</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bel Patra:</strong> 108 fresh leaves (Trifoliate).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> White Kaner, Dhatura, Akanda.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Abhishek Liquids:</strong> Milk, Curd, Ghee, Honey, Sugar.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bhasma (Vibhuti):</strong> Sacred ash.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Gandha:</strong> Sandalwood paste (Chandan).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Havan & Daan</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> Wood (Mango), Ghee, Til (Sesame).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Naivedya:</strong> Kheer (Sweet Rice) is mandatory.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Vastra:</strong> Dhoti/Kurta for Brahmin.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Dakshina:</strong> Coins/Cash.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Coconut, Betel leaves.</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
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

{/* Booking Card */}
                            
                        </div>

                    </div>
                </div>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="pradosh-vrat-udyapan"
                        category="vrat-udyapan"
                        maxItems={4}
                    />
                </div>



                <PujaServiceLocations pujaName="Pradosh Vrat Udyapan" />
                <Footer />
            </main>
        </>
    )
}
