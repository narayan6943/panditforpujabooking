import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HanumanHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hanuman Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Hanuman Havan in Pune. Gain strength, courage, protection. Remove obstacles, defeat enemies. Expert pandits for powerful fire ritual.',
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
                <title>Hanuman Havan in Pune – Strength & Protection Fire Ritual</title>
                <meta name="description" content="Book Hanuman Havan in Pune. Gain divine strength, courage & protection. Remove obstacles, defeat enemies. Expert pandits. Powerful Bajrang Bali fire ritual." />
                <meta name="keywords" content="Hanuman Havan Pune, Bajrang Bali Havan, Strength Fire Ritual, Hanuman Homam, Protection Puja" />
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
                            <span className="text-maroon-900 font-semibold">Hanuman Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Strength & Courage</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Hanuman Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Protection</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Hanuman's divine power through sacred fire ritual. Gain strength, remove obstacles, defeat enemies, and receive protection from all dangers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Hanuman Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Hanuman%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Hanuman Havan</strong> is a powerful Vedic fire ritual dedicated to Lord Hanuman, the supreme devotee of Lord Rama and embodiment of strength, courage, and devotion. This sacred ceremony invokes Hanuman's divine energy to remove obstacles, defeat enemies, protect from evil, and grant physical and mental strength.</p>

                                <h2 className="text-3xl font-bold mt-8">The Mighty Lord Hanuman</h2>
                                <p>Lord Hanuman, also known as Bajrang Bali, Pawanputra (son of wind god), and Sankat Mochan (remover of difficulties), is one of the most beloved deities in Hinduism. Born to Anjana and Vayu, he is an incarnation of Lord Shiva and the 11th Rudra.</p>

                                <p>According to the Ramayana, Hanuman played a crucial role in Lord Rama's victory over Ravana. His unwavering devotion, immense strength, and selfless service make him the ideal deity for overcoming life's challenges.</p>

                                <h3 className="text-2xl font-bold mt-6">Hanuman's Divine Powers</h3>
                                <ul>
                                    <li><strong>Ashta Siddhis:</strong> Eight supernatural powers granted by Mother Sita</li>
                                    <li><strong>Immortality:</strong> Blessed to live as long as Rama's name exists</li>
                                    <li><strong>Infinite Strength:</strong> Can lift mountains and cross oceans</li>
                                    <li><strong>Protection:</strong> Guards devotees from all dangers and evil forces</li>
                                    <li><strong>Healing:</strong> Brought Sanjeevani herb to revive Lakshmana</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Hanuman Havan</h2>
                                <ul>
                                    <li><strong>Obstacle Removal:</strong> Destroys all barriers to success (Sankat Mochan)</li>
                                    <li><strong>Protection:</strong> Shields from enemies, evil eye, black magic, and accidents</li>
                                    <li><strong>Strength & Courage:</strong> Grants physical power and mental fortitude</li>
                                    <li><strong>Mars Pacification:</strong> Reduces Mangal Dosh effects</li>
                                    <li><strong>Health:</strong> Cures diseases and promotes vitality</li>
                                    <li><strong>Success:</strong> Ensures victory in competitions and battles</li>
                                    <li><strong>Spiritual Growth:</strong> Deepens devotion and meditation</li>
                                    <li><strong>Property Protection:</strong> Safeguards home and business from harm</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Hanuman Havan</h2>
                                <ul>
                                    <li><strong>Tuesdays & Saturdays:</strong> Most auspicious days for Hanuman worship</li>
                                    <li><strong>Hanuman Jayanti:</strong> Chaitra Purnima (Hanuman's birthday)</li>
                                    <li><strong>Mangal Dosh:</strong> When Mars is afflicted in horoscope</li>
                                    <li><strong>Enemy Problems:</strong> Facing opposition or legal battles</li>
                                    <li><strong>Health Crisis:</strong> Serious illness or recovery period</li>
                                    <li><strong>Fear & Anxiety:</strong> Overcoming mental weakness</li>
                                    <li><strong>Property Issues:</strong> Land disputes or Vastu problems</li>
                                    <li><strong>Spiritual Practice:</strong> Before starting intense sadhana</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Hanuman Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Hanuman Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Hanuman worship with 108 ahutis and Chalisa recitation.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Bajrang Bali Maha Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Sunderkand Path, 1008 ahutis, and Panchmukhi Hanuman puja.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Hanuman Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Fast or eat only sattvic food</li>
                                    <li>Wear red or orange clothes</li>
                                    <li>Arrange red flowers, sindoor, jasmine oil</li>
                                    <li>Set up havan kund facing South (Hanuman's direction)</li>
                                    <li>Keep Hanuman Chalisa book ready</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Hanuman Invocation:</strong> Invoke with "Om Hanumate Namah"</li>
                                    <li><strong>Hanuman Chalisa:</strong> Recite 11 or 21 times</li>
                                    <li><strong>Sunderkand Path:</strong> Recitation of Ramayana chapter (in elaborate version)</li>
                                    <li><strong>Mantra Jaap:</strong> "Om Hanumate Namah" or "Om Hum Hanumate Namah" 108/1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with red flowers, sindoor, and ghee</li>
                                    <li><strong>Panchmukhi Hanuman Puja:</strong> Worship five-faced form (if applicable)</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Hanuman Aarti:</strong> Conclude with devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Powerful Hanuman Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Beej Mantra:</strong> "Om Hum Hanumate Namah"</li>
                                        <li><strong>Maha Mantra:</strong> "Om Hanumate Rudratmakaya Hum Phat"</li>
                                        <li><strong>Protection:</strong> "Om Namo Bhagavate Anjaneyaya Mahabalaya Swaha"</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-md my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Post-Havan Practices</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Chant Hanuman Chalisa daily (morning/evening)</li>
                                    <li>Apply sindoor to Hanuman idol</li>
                                    <li>Offer red flowers on Tuesdays and Saturdays</li>
                                    <li>Read Sunderkand on Saturdays</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Special Observances</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Fast on Tuesdays (for Mangal Dosh)</li>
                                    <li>Visit Hanuman temple on Saturdays</li>
                                    <li>Feed monkeys (Hanuman's form)</li>
                                    <li>Donate red cloth and sweets</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Hanuman Havan</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can Hanuman Havan remove Mangal Dosh?", a: "Yes! Hanuman Havan is one of the most effective remedies for Mangal Dosh (Mars affliction). Hanuman is the son of Vayu (air) and has power over Mangal (Mars). The havan pacifies Mars energy, reduces aggression, prevents accidents, and improves relationships. Many people with severe Mangal Dosh have found relief after regular Hanuman worship. Perform on Tuesdays during Mars Mahadasha or before marriage if Mangal Dosh is present." },
                                        { q: "When is the best time for Hanuman Havan?", a: "Most auspicious times: (1) Tuesdays and Saturdays (Hanuman's days), (2) Hanuman Jayanti (Chaitra Purnima), (3) Saturdays during Shani Mahadasha for protection, (4) Before sunrise (Brahma Muhurta) for maximum power, (5) During Ashwini, Pushya, or Shravana nakshatra. Perform in morning hours, preferably before noon. The havan is most powerful when done with sunrise, as Hanuman greeted the Sun thinking it was a fruit." },
                                        { q: "Can women perform Hanuman Havan?", a: "Yes, women can perform Hanuman Havan. While some traditional temples restrict women's entry, Hanuman worship at home has no such restrictions. Women should avoid performing during menstruation. Hanuman is a celibate deity (Brahmachari), so worship should be done with pure devotion and respect. Many women devotees have received Hanuman's blessings for protection, strength, and obstacle removal." },
                                        { q: "How does Hanuman Havan protect from black magic?", a: "Hanuman Havan is extremely powerful against black magic, evil spirits, and negative energies. Hanuman's fierce energy destroys all dark forces instantly. The sacred fire purifies the environment and creates an impenetrable protective shield. Hanuman is known as 'Sankat Mochan' (remover of difficulties) and 'Dukh Bhanjan' (destroyer of sorrows). For severe black magic, perform on Saturdays with Hanuman Chalisa 108 times. Wear Hanuman Kavach and keep his picture/idol at home entrance." },
                                        { q: "What donations should be made after Hanuman Havan?", a: "Hanuman-pleasing donations: (1) Feed monkeys with bananas, jaggery, and peanuts, (2) Donate red cloth, sindoor, and sweets to temples, (3) Give to wrestlers or athletes (Hanuman represents strength), (4) Support physical education or sports for poor children, (5) Donate to Hanuman temples, (6) Feed poor people with prasad, (7) Give red clothes to laborers or workers. Make donations on Tuesdays or Saturdays with Hanuman mantras." },
                                        { q: "Can Hanuman Havan help in legal battles?", a: "Absolutely! Hanuman is the ultimate warrior and protector. The havan is very effective for legal cases, court battles, and conflicts. Hanuman grants courage to face opponents, weakens enemy's case, brings favorable judgments, and ensures justice. Many people have won difficult legal battles after Hanuman Havan. Perform before major court dates, chant Hanuman Chalisa daily, and maintain truth and righteousness. Hanuman always supports dharma and destroys adharma." },
                                        { q: "How often should Hanuman Havan be performed?", a: "Frequency depends on your needs: (1) For Mangal Dosh: Monthly on Tuesdays until Mars period ends, (2) For protection: Quarterly or during challenging times, (3) For obstacles: Once when facing major difficulties, then as needed, (4) Preventive: Annually on Hanuman Jayanti, (5) Spiritual practice: Weekly or monthly for devotees. After havan, maintain daily Hanuman Chalisa and Saturday Sunderkand. One sincere havan with devotion is more powerful than multiple mechanical rituals." },
                                        { q: "Can Hanuman Havan cure diseases?", a: "Yes, Hanuman Havan is powerful for health issues, especially chronic diseases, injuries, and conditions requiring strength. Hanuman brought Sanjeevani herb to revive Lakshmana, showing his healing power. The havan helps by: (1) Boosting immunity and vitality, (2) Speeding recovery from surgery or accidents, (3) Curing mysterious ailments, (4) Providing mental strength to fight disease. However, continue medical treatment - the havan complements medicine. It's particularly effective for Mars-related health issues (blood, muscles, accidents)." },
                                        { q: "What is Panchmukhi Hanuman and should I worship this form?", a: "Panchmukhi (five-faced) Hanuman is a powerful form with faces of Hanuman, Narasimha, Garuda, Varaha, and Hayagriva. This form provides: (1) Hanuman face: Courage and strength, (2) Narasimha face: Victory over enemies, (3) Garuda face: Protection from black magic and poison, (4) Varaha face: Prosperity and wealth, (5) Hayagriva face: Knowledge and wisdom. Worship Panchmukhi Hanuman for comprehensive protection and blessings. Include in havan for maximum benefits, especially during severe difficulties." },
                                        { q: "What precautions should be taken during Hanuman Havan?", a: "Important precautions: (1) Before: Fast or eat sattvic food; avoid alcohol, non-veg; maintain celibacy on havan day, (2) During: Sit with devotion and courage; don't fear; maintain warrior attitude; chant with full energy, (3) After: Don't waste prasad; distribute to family and monkeys; continue fasting until sunset, (4) For 40 days: Daily Hanuman Chalisa; Tuesday/Saturday worship; avoid negative people; maintain physical fitness and discipline, (5) Long-term: Use Hanuman's power for protection and service, never for ego or harm. Hanuman blesses humble devotees and destroys the arrogant." }
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
                                        <p className="text-gold-100 text-sm mb-4">For Strength & Protection</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Hanuman%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Hanuman Havan" />
            <Footer />
        </>
    )
}
