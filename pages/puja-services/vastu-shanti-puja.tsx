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

export default function VastuShantiPujaPage() {
    const baseServiceSchema = generateServiceSchema({
        name: 'Vastu Shanti Puja',
        description: 'Book expert pandit for Vastu Shanti Puja in Pune. Remove Vastu doshas and bring harmony to your new home. Complete Vedic rituals.',
        price: '5100',
        reviewCount: '480',
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/vastu-shanti-puja',
        image: 'https://panditforpujabooking.com/images/vastu-shanti-hero.png'
    })

    const serviceSchema = {
        ...baseServiceSchema,
        offers: {
            '@type': 'Offer',
            price: '5100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const faqs = [
        {
            question: "Can we do Vastu Shanti after shifting?",
            answer: "While it is best done before shifting, it can certainly be done after moving in to resolve any issues you might be facing."
        },
        {
            question: "Is Navagraha Homam part of Vastu Shanti?",
            answer: "Yes, standard Vastu Shanti usually includes Navagraha Shanti because planetary positions also affect the home's energy."
        },
        {
            question: "Do we need to dig the floor?",
            answer: "Traditionally, the Vastu Purush idol is buried in the earth. In flats where digging isn't possible, it is placed in a pot with soil or kept in the puja room altar."
        },
        {
            question: "How long does the puja take?",
            answer: "A detailed Vastu Shanti with Havan takes about 3 to 4 hours."
        }
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
                title="Vastu Shanti Puja in Pune | Remove Vastu Dosh & Bring Prosperity"
                description="Book expert pandit for Vastu Shanti Puja in Pune. Perform complete Griha Shanti rituals to remove negative energies and vastu defects before moving in. Havan included."
                keywords="vastu shanti puja pune, vastu dosh nivaran puja, griha shanti puja pune, vastu havan vidhi, pandit for vastu shanti"
                canonicalUrl="https://panditforpujabooking.com/puja-services/vastu-shanti-puja"
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
                            src="/images/vastu-shanti-hero.png"
                            alt="Vastu Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Harmony in Home</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vastu Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Dosh Nivaran & Purification in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Before starting your life in a new space, balance the five elements and pacify the Vastu Purush. Our expert Vastu Shanti puja removes architectural and energetic defects, ensuring health, wealth, and peace for your family.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Vastu Shanti
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vastu%20Shanti%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Vastu Shanti Puja</strong> is a Vedic ritual performed to worship the <em>Vastu Purush</em> (the deity of directions and spaces) and the <em>Panchamahabhutas</em> (Five Elements: Earth, Water, Fire, Air, Space). It is typically conducted before <strong>Griha Pravesh</strong> (house warming) to cleanse the home of any construction-related impurities or negative energies.
                                </p>
                                <p>
                                    Often, modern apartments in Pune may not comply 100% with Vastu Shastra principles due to structural constraints. Vastu Shanti Puja acts as a powerful corrective measure (Dosh Nivaran) to neutralize these defects and shield the inhabitants from their ill effects.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        We specialize in performing "Brihat Vastu Shanti" which includes Navagraha Shanti and detailed Havans, ensuring a spiritually charged atmosphere for your new beginning.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">🏠</span>
                                    When to Perform?
                                </h2>
                                <p>
                                    Ideally, it is done on the day of the Griha Pravesh or a day prior. It can also be performed if you are renovating an old house or have been living in a house for years but facing persistent health/financial issues.
                                </p>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Significance & Benefits</h2>
                                <p>
                                    Every piece of land has its own energy vibration. Vastu Shanti harmonizes this vibration with the occupants.
                                </p>
                                <h3>Why it matters:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Removes Vastu Dosh (Directional/Structural faults).",
                                        "Pacifies the Vastu Purush for protection.",
                                        "Invites positive cosmic energy (Prana).",
                                        "Ensures financial stability and career growth.",
                                        "Prevents health issues and family disputes."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Vastu Shanti Vidhi Steps</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">A 3-4 hour detailed procedure.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Sankalp & Ganesh Puja</h3>
                                                <p className="text-gray-700">Declaring the intent of purifying the land and house. Invoking Lord Ganesh as the remover of obstacles (Vighnaharta).</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Kalash & Navagraha Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Varun Puja (Water element).</li>
                                                        <li>Navagraha Mandal Sthapana & Worship.</li>
                                                        <li>Pacifying the 9 planets to support the home.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Vastu Mandal Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worship of Vastu Purush (Golden Idol/Yantra).</li>
                                                        <li>Invoking the 45 deities of the Vastu Mandala.</li>
                                                        <li>Offering coins, gems, and herbs.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. Vastu Havan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Agni Sthapana.</li>
                                                        <li>Offerings of Cooked Rice (Charu), Ghee, & Til.</li>
                                                        <li>Chanting Vastu Mantras.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Purnahuti & Burying</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Final offering to the fire.</li>
                                                        <li>Burying the Vastu Purush idol/Yantra in the foundation or a specific corner (usually North-East or South-East).</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Vastu Shanti Samagri</h2>
                                <p className="text-gray-700 mb-6">
                                    This puja requires specific items like Navadhanya and Vastu Pratima.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">📦</span> We Can Bring
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Vastu Purush Idol (Gold snake/Silver idol).</li>
                                            <li>Navagraha Vastras & Dhaanya.</li>
                                            <li>Havan Samagri (Samidha, Ghee).</li>
                                            <li>Copper Kalash & Plates.</li>
                                            <li>Pancharatna & Coins.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🏠</span> You Arrange
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Flowers (Loose & Garlands).</li>
                                            <li>Fruits (5 types).</li>
                                            <li>Sweets (Prasad).</li>
                                            <li>Coconut (4-5 pcs).</li>
                                            <li>Rice & Dal (Sidha) for donation.</li>
                                            <li>White Pumpkin (for Drishti/Nazar removal).</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Expert Vastu Pandits</h2>
                                        <p className="text-gold-100 mb-6">Vastu Shanti requires precise alignment with directions. Our Pandits are well-versed in Vastu Shastra.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Correct Sthapana of Vastu Mandala",
                                                "Includes Navagraha Shanti rituals",
                                                "Guidance on where to place the Vastu Idol",
                                                "Complete Havan setup included",
                                                "Powerful Mantra Chanting"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center text-white">
                                                    <span className="w-6 h-6 rounded-full bg-saffron-500 flex items-center justify-center text-xs mr-3">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold-500/30">
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-white mb-2">Book Vastu Shanti</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹5,100 <span className="text-sm font-normal text-gray-300">Pandit Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Samagri package available on request.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.question}</h3>
                                            <p className="text-gray-700">{faq.answer}</p>
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
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Vastu Shanti</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Purify your new space</p>

                                

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Questions about Vastu?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Vastu%20Shanti%20Puja" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"We moved into our new flat in Hinjewadi and were feeling a bit negative. The Vastu Shanti puja suggested by the Guruji really changed the energy. Highly recommended."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">SP</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Sameer Patil</p>
                                                <p className="text-[10px] text-gray-500">Hinjewadi, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="vastu-shanti-puja"
                        category="home-property"
                        maxItems={4}
                    />
                </div>



                <PujaServiceLocations pujaName="Vastu Shanti Puja" />

                <Footer />
            </main>
        </>
    )
}
