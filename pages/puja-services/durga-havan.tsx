import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function DurgaHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Durga Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Durga Havan in Pune. Remove obstacles, gain protection & strength. Expert pandits. Powerful Goddess fire ritual for victory and courage.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Durga Havan in Pune – Divine Protection Fire Ritual</title>
                <meta name="description" content="Book Durga Havan in Pune. Remove obstacles, gain divine protection & strength. Expert pandits. ₹5,500 onwards. Powerful Goddess fire ritual." />
                <meta name="keywords" content="Durga Havan Pune, Goddess Protection Ritual, Durga Homam, Shakti Fire Ritual, Durga Puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-saffron-50/30">
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Durga Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Protection & Strength</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Durga Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Victory</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Goddess Durga's divine protection through powerful fire ritual. Remove obstacles, defeat enemies, and gain courage for life's battles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Durga Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Durga%20Havan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section className="prose prose-lg max-w-none">
                                <p><strong>Durga Havan</strong> is a powerful Vedic fire ritual dedicated to Goddess Durga, the supreme warrior goddess who destroys evil and protects devotees. This sacred ceremony invokes her divine energy to remove obstacles, defeat enemies (both external and internal), and grant courage, strength, and victory in all endeavors.</p>

                                <h2 className="text-3xl font-bold mt-8">The Invincible Goddess Durga</h2>
                                <p>Goddess Durga is the embodiment of Shakti (divine feminine power). According to the Devi Mahatmya, she was created by the combined energies of all gods to defeat the buffalo demon Mahishasura, whom no male deity could conquer. Riding a lion and wielding weapons in her ten hands, she represents the ultimate power that protects dharma and destroys adharma.</p>

                                <p>Durga has nine forms worshipped during Navratri, known as <strong>Navadurga</strong>:</p>
                                <ul>
                                    <li><strong>Shailaputri:</strong> Daughter of mountains, represents nature's power</li>
                                    <li><strong>Brahmacharini:</strong> Represents penance and devotion</li>
                                    <li><strong>Chandraghanta:</strong> Brings peace and serenity</li>
                                    <li><strong>Kushmanda:</strong> Creator of the universe</li>
                                    <li><strong>Skandamata:</strong> Mother of Kartikeya, grants motherly protection</li>
                                    <li><strong>Katyayani:</strong> Fierce warrior form</li>
                                    <li><strong>Kalaratri:</strong> Destroyer of darkness and ignorance</li>
                                    <li><strong>Mahagauri:</strong> Represents purity and calmness</li>
                                    <li><strong>Siddhidatri:</strong> Grants all siddhis (supernatural powers)</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Durga Havan</h2>
                                <ul>
                                    <li><strong>Protection:</strong> Shields from enemies, evil eye, and negative energies</li>
                                    <li><strong>Obstacle Removal:</strong> Destroys all barriers to success</li>
                                    <li><strong>Courage & Strength:</strong> Grants inner power to face challenges</li>
                                    <li><strong>Victory:</strong> Ensures success in competitions, legal battles, and conflicts</li>
                                    <li><strong>Health:</strong> Removes diseases and promotes vitality</li>
                                    <li><strong>Mental Peace:</strong> Destroys fear, anxiety, and depression</li>
                                    <li><strong>Spiritual Growth:</strong> Awakens inner Shakti for spiritual progress</li>
                                    <li><strong>Family Protection:</strong> Safeguards entire family from harm</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Durga Havan</h2>
                                <ul>
                                    <li><strong>Navratri:</strong> Most auspicious nine-day period for Durga worship</li>
                                    <li><strong>Tuesdays & Fridays:</strong> Days dedicated to Goddess</li>
                                    <li><strong>Ashtami & Navami:</strong> 8th and 9th lunar days</li>
                                    <li><strong>Before Battles:</strong> Legal cases, competitions, exams, interviews</li>
                                    <li><strong>Negative Energy:</strong> When feeling attacked by evil forces</li>
                                    <li><strong>Health Crisis:</strong> During serious illness or recovery</li>
                                    <li><strong>Protection Need:</strong> When facing threats or dangers</li>
                                    <li><strong>New Ventures:</strong> Before starting challenging projects</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Durga Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Durga Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Durga worship with 108 ahutis and protection mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Navadurga Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹16,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with all nine forms, Durga Saptashati Path, and 1008 ahutis.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Durga Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Observe fast or eat only sattvic food</li>
                                    <li>Wear red or yellow clothes</li>
                                    <li>Clean puja area thoroughly</li>
                                    <li>Arrange red flowers, kumkum, turmeric</li>
                                    <li>Set up havan kund facing East</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Kalash Sthapana:</strong> Install sacred pot</li>
                                    <li><strong>Durga Invocation:</strong> Invoke Goddess with Durga mantras</li>
                                    <li><strong>Navadurga Puja:</strong> Worship all nine forms</li>
                                    <li><strong>Durga Mantra Jaap:</strong> "Om Dum Durgayei Namah" 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with red flowers and ghee</li>
                                    <li><strong>Durga Saptashati Path:</strong> Recitation of 700 verses (in elaborate version)</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Durga Aarti:</strong> Conclude with devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Powerful Durga Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Beej Mantra:</strong> "Om Dum Durgayei Namah"</li>
                                        <li><strong>Maha Mantra:</strong> "Om Aim Hreem Kleem Chamundayei Vichche"</li>
                                        <li><strong>Protection:</strong> "Sarva Mangala Mangalye Shive Sarvartha Sadhike, Sharanye Tryambake Gauri Narayani Namostute"</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-md my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Post-Havan Practices</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Chant Durga Chalisa or Durga Kavach daily</li>
                                    <li>Light lamp for Goddess every evening</li>
                                    <li>Offer red flowers on Tuesdays and Fridays</li>
                                    <li>Maintain courage and positive attitude</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Special Observances</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Fast on Navratri (nine days twice a year)</li>
                                    <li>Visit Durga temples on Ashtami</li>
                                    <li>Feed young girls (Kanya Pujan)</li>
                                    <li>Donate red cloth and sweets</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Durga Havan</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can Durga Havan protect from enemies?", a: "Yes, Durga Havan is extremely powerful for protection from enemies. Goddess Durga is the supreme warrior who destroys all evil forces. The havan creates a protective shield around you and your family. Many people have experienced enemies backing off, legal cases turning favorable, and negative people leaving their lives after this havan. However, combine with ethical behavior - don't use Durga's power for revenge or harm. She protects the righteous and destroys evil." },
                                        { q: "When is the best time for Durga Havan?", a: "Most auspicious times: (1) Navratri (Chaitra and Sharad) - especially Ashtami and Navami, (2) Tuesdays and Fridays, (3) Durga Puja festival, (4) Ashtami (8th lunar day) of any month, (5) Before important battles, exams, or competitions. Avoid performing during inauspicious periods. The havan is most powerful during Navratri when Goddess energy is strongest on earth." },
                                        { q: "Can women perform Durga Havan?", a: "Yes! Durga is the supreme feminine power, so women are especially blessed to worship her. Women can perform all aspects of the havan except during menstruation. In fact, Durga worship empowers women with strength, courage, and independence. Many women perform Durga Havan for protection, career success, and overcoming challenges. The Goddess particularly blesses her female devotees." },
                                        { q: "How does Durga Havan help in legal cases?", a: "Durga Havan is very effective for legal battles because Durga represents justice and victory over evil. The havan: (1) Removes obstacles in legal proceedings, (2) Brings favorable judgments, (3) Weakens opponent's case, (4) Grants courage to face court, (5) Attracts good lawyers and support. Many people have won difficult cases after Durga Havan. Perform before major court dates and maintain truth and righteousness in your case." },
                                        { q: "What donations should be made after Durga Havan?", a: "Durga-pleasing donations: (1) Feed young girls (Kanya Pujan) - represents Goddess, (2) Donate red cloth, kumkum, and bangles to women, (3) Support women's education and empowerment, (4) Give to orphanages or women's shelters, (5) Feed cows and dogs, (6) Donate to temples, (7) Help poor families with food and clothes. Make donations on Tuesdays or Fridays with Durga mantras." },
                                        { q: "Can Durga Havan cure diseases?", a: "Yes, Durga Havan is powerful for health issues, especially those caused by negative energies or black magic. Durga's energy destroys disease-causing forces and promotes vitality. Many people have recovered from chronic illnesses after this havan. However, continue medical treatment - the havan complements medicine by removing spiritual obstacles to healing. It's particularly effective for mental health issues, mysterious ailments, and conditions that don't respond to treatment." },
                                        { q: "How long do Durga Havan benefits last?", a: "Benefits timeline: (1) Immediate: Feel protected and empowered within days, (2) Short-term (1-3 months): Obstacles start clearing, enemies weaken, (3) Long-term (6-12 months): Major victories and transformations. To maintain benefits: (1) Daily Durga Chalisa, (2) Tuesday/Friday worship, (3) Navratri fasting twice yearly, (4) Ethical living and courage. One havan creates lasting protection, but annual repetition during Navratri strengthens the shield." },
                                        { q: "Can Durga Havan remove black magic?", a: "Absolutely! Durga Havan is one of the most powerful remedies for black magic, evil eye, and negative energies. Durga's fierce energy destroys all dark forces instantly. The sacred fire purifies the environment and creates an impenetrable protective barrier. Many people suffering from black magic have found complete relief after Durga Havan. For severe cases, perform during Navratri with Durga Saptashati Path. Combine with wearing Durga Kavach and daily protection mantras." },
                                        { q: "Should I perform Durga or Kali Havan?", a: "Both are forms of the same Divine Mother but with different energies: Durga Havan for: (1) General protection and victory, (2) Removing obstacles, (3) Courage and strength, (4) Legal battles, (5) Career success. Kali Havan for: (1) Destroying severe black magic, (2) Extreme protection needs, (3) Spiritual transformation, (4) Ego destruction. For most situations, Durga Havan is appropriate. Kali worship requires more spiritual maturity and guidance." },
                                        { q: "What precautions should be taken during Durga Havan?", a: "Important precautions: (1) Before: Fast or eat sattvic food; avoid alcohol, non-veg for 3 days; maintain celibacy on havan day, (2) During: Sit with devotion and courage; don't fear or doubt; maintain positive warrior attitude, (3) After: Don't waste prasad; distribute to family; continue fasting until sunset, (4) For 40 days: Daily Durga Chalisa; Tuesday/Friday worship; avoid negative people and places; maintain courage and righteousness, (5) Long-term: Use Durga's power for protection and dharma, never for revenge or harm. The Goddess blesses the righteous and destroys those who misuse her power." }
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

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Divine Protection</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Durga%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Durga Havan" />
            <Footer />
        </>
    )
}
