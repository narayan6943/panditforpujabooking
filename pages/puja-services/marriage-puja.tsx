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

export default function MarriagePujaPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Marriage Puja / Vivah Sanskar',
        description: 'Authentic Vedic Marriage Puja (Vivah Sanskar) in Pune. Book experienced pandits for Maharashtrian, North Indian, and South Indian weddings. Complete ritual guidance.',
        price: '11000',
        reviewCount: '1500',
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/marriage-puja',
        image: 'https://panditforpujabooking.com/images/marriage-puja.jpg'
    })

    // 2. FAQ Schema
    const faqs = [
        { question: "How early should we book a Pandit for a wedding in Pune?", answer: "It is recommended to book at least 1-3 months in advance, especially for auspicious dates (muhurats) which get booked quickly." },
        { question: "Do you provide Pandits for different communities?", answer: "Yes, we have specialized Pandits for Maharashtrian, North Indian, Gujarati, South Indian, and Bengali weddings who know the specific rituals." },
        { question: "What distinguishes a Vedic marriage from a registered marriage?", answer: "A Vedic marriage is a spiritual samskara involving mantras, Agni (fire) witness, and vows before the divine, creating a spiritual bond beyond just a legal contract." },
        { question: "Can you help with Samagri for the wedding?", answer: "Absolutely. Our Pandits provide a detailed Samagri list and can also arrange the entire puja kit for you to ensure nothing is missed." },
        { question: "Do you conduct destination weddings near Pune?", answer: "Yes, our Pandits are available to travel to Lonavala, Mahabaleshwar, Mulshi, and other nearby destination wedding venues." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'Vivah Sanskar in Pune' },
        { id: 'pre-wedding', title: 'Pre-Wedding Rituals' },
        { id: 'wedding-day', title: 'Wedding Ceremony' },
        { id: 'post-wedding', title: 'Post-Wedding Rituals' },
        { id: 'pandit-role', title: 'Role of Pandit Ji' },
        { id: 'cost', title: 'Cost & Packages' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <SEOHead
                title="Marriage Puja in Pune – Vedic Wedding Ceremonies & Rituals | Verified Pandits"
                description="Book expert Pandit for Marriage Puja in Pune. Authentic Vivah Sanskar rituals for Maharashtrian, North Indian, and South Indian weddings. Complete guidance, samagri, and auspicious muhurats."
                keywords="Marriage Puja Pune, Wedding Pandit Pune, Vivah Sanskar Pune, Vedic Wedding Rituals, Maharashtrian Wedding Pandit, North Indian Wedding Pandit Pune"
                canonicalUrl="https://panditforpujabooking.com/puja-services/marriage-puja"
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
                            src="/images/satyanarayan-puja-hero.png"
                            alt="Marriage Puja Rituals"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Vivah Sanskar</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Marriage Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Wedding Ceremonies & Rituals by Expert Pandits</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Bless your union with prosperity, unity, and spiritual harmony through authentic Vedic rituals performed with correct pronunciation and deep devotion.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Wedding Pandit
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Marriage%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    Marriage Puja, known as <strong>Vivah Sanskar</strong> in Hindu tradition, is one of the most spiritually significant and culturally rich ceremonies performed across India, and Pune has emerged as one of the most vibrant and culturally diverse cities where these wedding rituals are celebrated with depth, purity, authenticity, and devotion. The city, with its blend of ancient Maharashtrian heritage and modern urban lifestyle, hosts a wide variety of weddings every year—ranging from traditional Maharashtrian ceremonies to elaborate North Indian, South Indian, Marwari, Gujarati, Bengali, and intercultural wedding rituals.
                                </p>
                                <p>
                                    Despite the diversity, the core essence of Marriage Puja remains the same: to bless the couple with prosperity, unity, emotional harmony, spiritual growth, and lifelong togetherness. In Pune, families place high importance on performing proper Vedic rituals before, during, and after the marriage ceremonies.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        In Hindu dharma, marriage is not merely a social contract but a sacred samskara—one of the sixteen purifying rites that elevate an individual’s life from a spiritual perspective.
                                    </p>
                                </div>
                                <p>
                                    The purpose of the Marriage Puja is to invoke divine forces, create a sanctified environment, and ensure the couple starts their life together with the blessings of gods, sages, ancestors, and cosmic energies.
                                </p>
                            </section>

                            {/* Pre-Wedding Rituals */}
                            <section id="pre-wedding" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">1</span>
                                    Pre-Wedding Rituals
                                </h2>
                                <p>
                                    In Pune, the preparation for a wedding often begins weeks or even months in advance. One of the earliest rituals performed before any marriage ceremony is <strong>Ganesh Puja</strong>. Lord Ganesha is considered the remover of obstacles and the harbinger of auspicious beginnings. Invoking Him ensures that the entire wedding process unfolds smoothly without conflicts, delays, misunderstandings, or negative influences.
                                </p>
                                <h3>Common Community Rituals:</h3>
                                <ul className="list-disc pl-5">
                                    <li><strong>Maharashtrian:</strong> <em>Sakhar Puda</em> (Engagement) followed by <em>Halad</em> (Turmeric ceremony).</li>
                                    <li><strong>North Indian:</strong> <em>Roka</em>, <em>Sangeet</em>, <em>Mehendi</em>, and <em>Haldi</em>.</li>
                                    <li><strong>Gujarati:</strong> <em>Pithi</em>, <em>Mandap Muhurat</em>, and <em>Grih Shanti</em>.</li>
                                    <li><strong>South Indian:</strong> <em>Nischayathartham</em> (Engagement) and exchange of gifts.</li>
                                    <li><strong>Bengali:</strong> <em>Gaye Holud</em> (Turmeric application).</li>
                                </ul>

                                <p className="mt-4"><strong>Mandap Puja:</strong> As the wedding day approaches, the Mandap Puja is performed to purify and energize the wedding venue. By performing Mandap Puja, families invoke the forces of nature, the Panch Mahabhutas (five elements), and the presiding deities to bless the couple’s union.</p>
                            </section>

                            {/* Wedding Day Rituals */}
                            <section id="wedding-day" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">2</span>
                                    The Wedding Ceremony Rituals
                                </h2>
                                <p>The wedding ceremony itself is a sequence of profound Vedic rites:</p>

                                <div className="space-y-6">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mt-0">Vara Satkar & Ganesh Puja</h3>
                                        <p className="mb-0">The groom is welcomed (Baraat Welcome/Vara Satkar) with aarti and gifts, symbolizing the union of families. He proceeds to the mandap for Ganesh Puja and <em>Punyahavachanam</em> (purification with holy water).</p>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mt-0">Kanyadaan</h3>
                                        <p className="mb-0">The bride's parents give away their daughter to the groom, entrusting their most valuable gift. In Maharashtrian weddings, this includes the <em>Antarpat</em> ritual where a silk cloth separates the couple until the auspicious moment.</p>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mt-0">Mangalsutra & Jaimala</h3>
                                        <p className="mb-0">The exchange of garlands (Jaimala) signifies mutual acceptance. The groom ties the <em>Mangalsutra</em>—a symbol of protection and commitment—and applies <em>Sindoor</em> (vermillion) to the bride's forehead.</p>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mt-0">Agni Pradakshina (Saptapadi/Pheras)</h3>
                                        <p className="mb-0">The couple walks around the sacred fire taking seven vows (Pheras/Sapthapadi) representing nourishment, strength, prosperity, happiness, progeny, health, and friendship. Agni (Fire) acts as the divine witness.</p>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mt-0">Laja Homam & Ashirwad</h3>
                                        <p className="mb-0">The bride offers puffed rice into the fire with her brother's help (Laja Homam). Finally, elders shower the couple with rice and flowers (Ashirwad), and the couple views the North Star (Dhruva Darshan) for stability.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Post Wedding */}
                            <section id="post-wedding" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">3</span>
                                    Post-Wedding Rituals
                                </h2>
                                <p>
                                    <strong>Griha Pravesh:</strong> The bride is welcomed into her new home as Lakshmi, the goddess of prosperity. She enters by gently knocking over a pot of rice, symbolizing abundance.
                                </p>
                                <p>
                                    <strong>Satyanarayan Katha:</strong> Many families in Pune perform a Satyanarayan Puja shortly after the wedding to invoke divine blessings for peace and harmony in the newly formed family.
                                </p>
                            </section>

                            {/* Role of Pandit */}
                            <section id="pandit-role" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Why Book a Certified Pandit in Pune?</h2>
                                <p className="text-gray-700 mb-4">
                                    The role of a certified Pandit Ji is crucial. Experienced Pandits ensure that every mantra is chanted correctly, every ritual is performed with precision, and the entire ceremony flows smoothly. They guide the couple and families step-by-step through each ritual, ensuring cultural accuracy and spiritual depth.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                    <li className="flex items-center"><span className="text-saffron-600 mr-2">✓</span> Correct Vedic Mantra Chanting</li>
                                    <li className="flex items-center"><span className="text-saffron-600 mr-2">✓</span> Knowledge of Community Traditions</li>
                                    <li className="flex items-center"><span className="text-saffron-600 mr-2">✓</span> Multilingual (Marathi, Hindi, Sanskrit, etc.)</li>
                                    <li className="flex items-center"><span className="text-saffron-600 mr-2">✓</span> Complete Samagri & Vidhi Support</li>
                                </ul>
                            </section>

                            {/* Cost Section */}
                            <section id="cost" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Marriage Puja Cost & Packages</h2>
                                <p>
                                    The cost of Marriage Puja in Pune varies depending on the traditions, duration, and complexity.
                                </p>
                                <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400">
                                        <h3 className="text-lg font-bold text-gray-800">Basic Vedic Wedding</h3>
                                        <p className="text-2xl font-bold text-maroon-900 my-2">₹7,000 - ₹10,000</p>
                                        <p className="text-sm text-gray-600">Essential rituals for simple ceremonies.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-saffron-500 transform md:-translate-y-2">
                                        <div className="absolute top-0 right-0 bg-saffron-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                                        <h3 className="text-lg font-bold text-gray-800">Community Specific</h3>
                                        <p className="text-2xl font-bold text-maroon-900 my-2">₹10,000 - ₹20,000</p>
                                        <p className="text-sm text-gray-600">Gujarati, South Indian, or detailed Maharashtrian Vidhi.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gold-500">
                                        <h3 className="text-lg font-bold text-gray-800">Full 3-Day Package</h3>
                                        <p className="text-2xl font-bold text-maroon-900 my-2">₹25,000 - ₹55,000</p>
                                        <p className="text-sm text-gray-600">Pre-wedding, Wedding, and Post-wedding ritual series.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Why Pune */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3>Wedding Venues in Pune</h3>
                                <p>
                                    Pune is considered one of the most ideal cities for conducting Marriage Puja because it offers the right blend of tradition and modern facilities. From authentic temples for Vedic weddings to premium banquet halls and destination venues in Lonavala, Mulshi, and Mahabaleshwar, Pune caters to every preference.
                                </p>
                            </section>

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <p className="text-lg font-serif italic mb-4">
                                        "Marriage is not merely a union of two individuals but a merging of destinies, karmas, families, and energies."
                                    </p>
                                    <p className="text-gold-100">
                                        When performed with devotion and under the guidance of knowledgeable Pandits, the Marriage Puja becomes a transformative experience. It strengthens the couple’s bond, blesses their future with positivity, and protects them from challenges. Book your Marriage Puja today to ensure a life filled with divine grace and family harmony.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Your Wedding Pandit</Button>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "How early should we book a Pandit for a wedding in Pune?", a: "It is recommended to book at least 1-3 months in advance, especially for auspicious dates (muhurats) which get booked quickly." },
                                        { q: "Do you provide Pandits for different communities?", a: "Yes, we have specialized Pandits for Maharashtrian, North Indian, Gujarati, South Indian, and Bengali weddings who know the specific rituals." },
                                        { q: "What distinguishes a Vedic marriage from a registered marriage?", a: "A Vedic marriage is a spiritual samskara involving mantras, Agni (fire) witness, and vows before the divine, creating a spiritual bond beyond just a legal contract." },
                                        { q: "Can you help with Samagri for the wedding?", a: "Absolutely. Our Pandits provide a detailed Samagri list and can also arrange the entire puja kit for you to ensure nothing is missed." },
                                        { q: "Do you conduct destination weddings near Pune?", a: "Yes, our Pandits are available to travel to Lonavala, Mahabaleshwar, Mulshi, and other nearby destination wedding venues." }
                                    ].map((faq, i) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.q}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.a}
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Wedding Pandit</h4>
                                        <p className="text-gold-100 text-sm mb-4">Consult for Muhurats & Customs</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20a%20Pandit%20for%20Marriage" className="block text-gold-300 hover:text-white text-sm underline">
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
                    currentSlug="marriage-puja"
                    category="marriage-family"
                    maxItems={4}
                />
            </div>



            <PujaServiceLocations pujaName="Marriage Puja" />
            <Footer />
        </>
    )
}
