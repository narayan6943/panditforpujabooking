import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AhoiAshtamiVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ahoi Ashtami Vrat Udyapan',
        description: 'Book Pandit for Ahoi Ashtami Vrat Udyapan in Pune. Mothers\' special puja for long life and well-being of children with Syahu Mata Katha.',
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
            price: '2100',
            priceCurrency: 'INR',
        },
    }

    
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
            <Head>
                <title>Ahoi Ashtami Vrat Udyapan in Pune | Syanu Mata Puja & Katha</title>
                <meta name="description" content="Book expert Pandit for Ahoi Ashtami Vrat Udyapan in Pune. Complete Vedic rituals including Syahu Mata Katha, Silver Bead (Syau) Puja, and Star Arghya Vidhi." />
                <meta name="keywords" content="ahoi ashtami vrat udyapan pune, hoi ashtami puja, syahu mata katha, mothers fast for children, ahoi mata udyapan vidhi" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Breadcrumb */}
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Ahoi Ashtami Udyapan</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/navratri-hero.png"
                            alt="Ahoi Ashtami Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">The Great Festival of Motherhood</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ahoi Ashtami Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Divine Protection for Your Children</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Observed 8 days before Diwali, this sacred Vrat is the "Mother's Shield" (Raksha Kavach) for her lineage. Perform the Udyapan with the traditional Syahu Mata Katha and Silver Bead rituals.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ahoi%20Ashtami%20Puja" target="_blank" rel="noopener noreferrer">
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

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Ahoi Ashtami</strong>, also known as 'Hoi Ashtami', is a festival celebrated on the Krishna Paksha Ashtami of Kartik month (4 days after Karwa Chauth). While Karwa Chauth is for the husband, Ahoi Ashtami is strictly observed by mothers for the longevity, health, and prosperity of their children.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> of this Vrat is a significant milestone, typically performed after the birth of a son or the marriage of a son (marking the continuation of the lineage). It involves a special offering (Bayana) to the mother-in-law and the worship of a silver amulet (Syau) depicting Ahoi Mata and her cubs.
                                </p>
                                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-6 rounded-r-lg">
                                    <h4 className="text-lg font-bold text-maroon-800 m-0 mb-2">Unique Tradition: Star Sighting</h4>
                                    <p className="m-0 text-sm">
                                        Unlike other fasts broken after moonrise, the Ahoi Ashtami fast is broken after sighting the <strong>Stars</strong> in the twilight sky. This symbolizes the multitude of blessings desired for the offspring.
                                    </p>
                                </div>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend of Syahu Mata</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The tragic mistake and the mother's redemption.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The 7 Sons and the Hedgehog Cubs</h3>
                                    <p>
                                        Long ago, a wealthy moneylender had seven sons. Before Diwali, his daughter went to the forest to dig soil (checkni mitti) for house renovation. While digging, her spade accidentally hit a den of a <strong>Syahu (Hedgehog)</strong>, killing its seven cubs.
                                    </p>
                                    <p>
                                        The grief-stricken Syahu Mother cursed the girl: "Just as you killed my children, your womb shall be bound." Consequently, all her seven sons died young.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Penance and Service</h3>
                                    <p>
                                        To redeem herself, the woman served a Holy Cow (Surabhi) and later the Syahu Mother herself, cleaning her cage and feet with utmost devotion. Pleased by her genuine repentance and service, the Syahu Mother forgave her and blessed her with fertility again. Since then, mothers worship the picture of the Cub and Mother (Ahoi) to protect their children from any accidental harm or "Akal mrityu".
                                    </p>
                                </div>
                            </section>

                            {/* Udyapan Vidhi Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">A dusk-time ritual of storytelling and silver worship.</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="border-l-4 border-gold-400 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">1. The 'Ashta Koshtha' Painting</h3>
                                        <p className="text-gray-700 mb-4">Traditionally, a drawing of Ahoi Mata with 8 corners (Ashta Koshtha) is made on the wall using Geru (Red ochre). It depicts the Syahu and her 7 cubs. Nowadays, a framed poster or silver plaque is used.</p>
                                    </div>

                                    <div className="border-l-4 border-saffron-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">2. Syau Mala (The Silver Beads)</h3>
                                        <p className="text-gray-700 mb-4">This is the heart of the Udyapan. A silver necklace consisting of a central pendant (Ahoi) and two silver beads for each son is worshipped. <br /><strong>Udyapan Special:</strong> New silver beads are added during the Udyapan year. This Mala is worn by the mother during the Puja.</p>
                                    </div>

                                    <div className="border-l-4 border-maroon-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">3. The Bayana (Offering)</h3>
                                        <p className="text-gray-700 mb-4">For Udyapan, <strong>14 plates</strong> are prepared. Each plate contains 7/14 Puris and Halwa (or Pua). One main thaali with a Saree and Cash is kept for the Mother-in-law (representing the matriarch).</p>
                                    </div>

                                    <div className="border-l-4 border-indigo-500 pl-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">4. Arghya to Stars</h3>
                                        <p className="text-gray-700 mb-4">As twilight falls and stars appear, the mother offers water (Arghya) from a Karwa to the stars. The water is allowed to flow over the sacred Ahoi beads. This concludes the fast.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Items specifically required for the Udyapan ceremony.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Puja Essentials</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Ahoi Poster/Idol:</strong> Depicting the cubs.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Silver Syau Chain:</strong> The necklace to be worshipped.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Karwa:</strong> Earthen pot with water.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Radish (Mooli):</strong> Offered to the deity.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Udyapan Gifts (Bayana)</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>14 Sets of Food:</strong> Puri, Halwa, Pua/Gulgule.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Saree & Blouse:</strong> For Minssing (giving to MIL).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cash (Dakshina):</strong> As per capacity.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Water Chestnuts (Singhara):</strong> Seasonal fruit offering.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Why Book Our Pandits?</h2>
                                        <p className="text-gold-100 mb-6">Ahoi Ashtami Katha recitation must be accurate to ensure the sanctity of the Vrat. We ensure:</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Proper recitation of Syahu Mata Katha",
                                                "Guidance on Silver Bead (Syau) counting",
                                                "Assistance with Udyapan Sankalp",
                                                "Vedic Vidhi for Star Arghya",
                                                "Timely service at your home"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Ahoi Udyapan</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹2,100 <span className="text-sm font-normal text-gray-300">Pandit Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Secure blessings for your children.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers from Pandits</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "Can I drink water during Ahoi Ashtami fast?",
                                            a: "Traditionally, it is a Nirjala fast (without water) until the stars are sighted in the evening. However, pregnant women or those with health issues can consume fruits/milk after consulting elders."
                                        },
                                        {
                                            q: "Can I perform Udyapan if I only have daughters?",
                                            a: "Absolutely. In Vedic culture, a child is a divine blessing regardless of gender. Many modern families perform the Udyapan for the well-being of their daughters with equal devotion."
                                        },
                                        {
                                            q: "What happens to the Silver Mala after Puja?",
                                            a: "The Syau Mala is preserved carefully throughout the year. It is only worn during the Ahoi Ashtami puja next year. It grows in length as you add beads for each child or grandchild."
                                        },
                                        {
                                            q: "Why is Radish (Mooli) offered?",
                                            a: "Radish is a seasonal root vegetable available in Kartik month. Offering it symbolizes gratitude for the harvest and nature's bounty."
                                        },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.a}</p>
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
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Mothers' Special Puja</p>

                                
                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Have a doubt?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Ahoi%20Ashtami%20Puja" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Ahoi Ashtami Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
