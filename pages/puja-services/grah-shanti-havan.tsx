import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GrahShantiHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Grah Shanti Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Grah Shanti Havan in Pune. Pacify all nine planets, remove doshas, ensure harmony. Expert pandits for complete Vedic fire ritual.',
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
                <title>Grah Shanti Havan in Pune – Planetary Peace Fire Ritual</title>
                <meta name="description" content="Book Grah Shanti Havan in Pune. Pacify all planets, remove doshas, ensure cosmic harmony. Expert pandits. Complete Vedic fire ritual for planetary peace." />
                <meta name="keywords" content="Grah Shanti Havan Pune, Planetary Peace Havan, Navagraha Havan, Planet Pacification, Vedic Fire Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Grah Shanti Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/grah-shanti-hero.png"
                            alt="Grah Shanti Havan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Planetary Harmony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Grah Shanti Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Planetary Peace Fire Ritual</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Pacify all nine planets through sacred fire ritual. Remove planetary doshas, ensure cosmic harmony, and receive divine blessings for success in all life areas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Grah Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Grah%20Shanti%20Havan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p><strong>Grah Shanti Havan</strong> (also known as <strong>Planetary Peace Fire Ritual</strong> or <strong>Navagraha Havan</strong>) is a powerful Vedic ceremony performed to pacify all nine planets (Navagraha) and remove their malefic effects. This sacred fire ritual invokes the blessings of all planetary deities to ensure harmony, success, and protection in all areas of life.</p>
                                <p>In Vedic astrology, the nine planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu) govern every aspect of human life. When planets are afflicted or in unfavorable positions, they create obstacles. Grah Shanti Havan is the most comprehensive remedy to balance all planetary energies simultaneously.</p>

                                <h2 className="text-3xl font-bold mt-8">The Vedic Science of Navagraha (Nine Planets)</h2>
                                <p>In Vedic cosmology, the <strong>Navagraha</strong> (nine planets) are not just celestial bodies but conscious deities who influence human destiny. Each planet has specific powers, domains, and effects:</p>

                                <h3 className="text-2xl font-bold mt-6">The Nine Planetary Deities</h3>
                                <ul>
                                    <li><strong>Surya (Sun):</strong> Soul, father, authority, government, vitality, leadership</li>
                                    <li><strong>Chandra (Moon):</strong> Mind, mother, emotions, mental peace, public relations</li>
                                    <li><strong>Mangal (Mars):</strong> Energy, courage, siblings, property, sports, surgery</li>
                                    <li><strong>Budh (Mercury):</strong> Intelligence, communication, business, education, wit</li>
                                    <li><strong>Guru (Jupiter):</strong> Wisdom, children, wealth, spirituality, fortune</li>
                                    <li><strong>Shukra (Venus):</strong> Love, marriage, luxury, arts, beauty, vehicles</li>
                                    <li><strong>Shani (Saturn):</strong> Karma, discipline, longevity, service, delays, justice</li>
                                    <li><strong>Rahu (North Node):</strong> Ambition, foreign lands, technology, sudden events</li>
                                    <li><strong>Ketu (South Node):</strong> Spirituality, moksha, past life, detachment</li>
                                </ul>

                                <p>According to the Brihat Parashara Hora Shastra and other classical texts, these nine grahas (planets) are manifestations of divine consciousness. Worshipping them through Havan purifies their energies and brings their blessings.</p>

                                <h2 className="text-3xl font-bold mt-8">Mythology of Planetary Worship</h2>
                                <p>The worship of Navagraha has deep roots in Vedic mythology. According to the Puranas, the planets were born from various divine sources:</p>

                                <p><strong>Surya (Sun)</strong> is the son of sage Kashyapa and Aditi. He rides a chariot pulled by seven horses representing the seven colors of light. His consorts are Sanjna (consciousness) and Chhaya (shadow).</p>

                                <p><strong>Chandra (Moon)</strong> emerged from the churning of the cosmic ocean. He married the 27 daughters of Daksha (representing the 27 nakshatras), but showed favoritism to Rohini, leading to a curse that causes his waxing and waning.</p>

                                <p><strong>Mangal (Mars)</strong> was born from the sweat of Lord Shiva or from the Earth (Bhumi), hence called Bhauma. He is the commander of celestial armies and represents warrior energy.</p>

                                <p><strong>Rahu and Ketu</strong> were originally one demon named Swarbhanu. During the churning of the ocean, he disguised himself and drank the nectar of immortality. Lord Vishnu beheaded him, but since he had consumed amrit, both parts became immortal - the head became Rahu and the body became Ketu.</p>

                                <h2 className="text-3xl font-bold mt-8">When is Grah Shanti Havan Essential?</h2>
                                <p>This comprehensive planetary ritual becomes necessary in various situations:</p>
                                <ul>
                                    <li><strong>Multiple Planetary Doshas:</strong> When birth chart shows afflictions from several planets</li>
                                    <li><strong>Major Life Transitions:</strong> Starting business, marriage, new home, career change</li>
                                    <li><strong>Difficult Dasha Periods:</strong> During challenging planetary periods (Mahadasha/Antardasha)</li>
                                    <li><strong>Repeated Obstacles:</strong> When facing continuous failures despite efforts</li>
                                    <li><strong>Health Issues:</strong> Chronic illnesses with no clear medical cause</li>
                                    <li><strong>Family Discord:</strong> Constant conflicts and misunderstandings</li>
                                    <li><strong>Financial Struggles:</strong> Persistent money problems and debt</li>
                                    <li><strong>Preventive Measure:</strong> Annual ritual for overall protection and prosperity</li>
                                    <li><strong>After Horoscope Analysis:</strong> When astrologer recommends planetary remedies</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Signs You Need Grah Shanti Havan</h3>
                                <ul>
                                    <li>Feeling like nothing is working despite hard work</li>
                                    <li>Experiencing problems in multiple life areas simultaneously</li>
                                    <li>Sudden unexpected losses or accidents</li>
                                    <li>Mental restlessness and lack of peace</li>
                                    <li>Strained relationships with family members</li>
                                    <li>Career stagnation or frequent job changes</li>
                                    <li>Health issues affecting quality of life</li>
                                    <li>Feeling cosmically unlucky or cursed</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Grah Shanti Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Grah Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Navagraha puja with basic havan for all nine planets. Includes essential mantras and offerings.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Grah Shanti Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive ritual with individual planet pujas, 108 ahutis per planet, and Purnahuti.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Grah Shanti Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Pre-Havan Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Muhurat Selection:</strong> Choose auspicious time based on panchang and birth chart</li>
                                    <li><strong>Fasting:</strong> Light fast with fruits and milk (if health permits)</li>
                                    <li><strong>Purification:</strong> Bath and wear clean clothes (white or yellow preferred)</li>
                                    <li><strong>Havan Kund Setup:</strong> Square or pyramid-shaped fire altar facing East</li>
                                    <li><strong>Samagri Arrangement:</strong> Organize all nine planetary offerings</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Havan Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Ganesh Puja:</strong> Invoke Lord Ganesha to remove obstacles</li>
                                    <li><strong>Kalash Sthapana:</strong> Install sacred pot representing cosmic energies</li>
                                    <li><strong>Agni Puja:</strong> Worship the fire god Agni as divine messenger</li>
                                    <li><strong>Navagraha Invocation:</strong> Call all nine planetary deities with their specific mantras</li>
                                    <li><strong>Individual Planet Worship:</strong> Offer specific items to each planet:
                                        <ul className="mt-2">
                                            <li><strong>Sun:</strong> Red flowers, wheat, jaggery</li>
                                            <li><strong>Moon:</strong> White flowers, rice, milk</li>
                                            <li><strong>Mars:</strong> Red lentils, jaggery, red sandalwood</li>
                                            <li><strong>Mercury:</strong> Green gram, durva grass</li>
                                            <li><strong>Jupiter:</strong> Yellow flowers, turmeric, gram dal</li>
                                            <li><strong>Venus:</strong> White rice, sugar, curd</li>
                                            <li><strong>Saturn:</strong> Black sesame, urad dal, iron</li>
                                            <li><strong>Rahu:</strong> Blue flowers, coconut, sandalwood</li>
                                            <li><strong>Ketu:</strong> Kusha grass, sesame, blanket</li>
                                        </ul>
                                    </li>
                                    <li><strong>Mantra Jaap:</strong> Chant each planet's beej mantra 108 times</li>
                                    <li><strong>Ahuti (Offerings):</strong> Make 108 offerings per planet into sacred fire</li>
                                    <li><strong>Purnahuti:</strong> Final grand offering with coconut and special samagri</li>
                                    <li><strong>Aarti:</strong> Conclude with planetary aarti</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Planetary Beej Mantras</h3>
                                <div className="bg-maroon-50 p-6 rounded-lg border-l-4 border-maroon-600 my-4">
                                    <ul className="space-y-2">
                                        <li><strong>Sun:</strong> "Om Hraam Hreem Hraum Sah Suryaya Namah"</li>
                                        <li><strong>Moon:</strong> "Om Shraam Shreem Shraum Sah Chandraya Namah"</li>
                                        <li><strong>Mars:</strong> "Om Kraam Kreem Kraum Sah Bhaumaya Namah"</li>
                                        <li><strong>Mercury:</strong> "Om Braam Breem Braum Sah Budhaya Namah"</li>
                                        <li><strong>Jupiter:</strong> "Om Graam Greem Graum Sah Gurave Namah"</li>
                                        <li><strong>Venus:</strong> "Om Draam Dreem Draum Sah Shukraya Namah"</li>
                                        <li><strong>Saturn:</strong> "Om Praam Preem Praum Sah Shanaye Namah"</li>
                                        <li><strong>Rahu:</strong> "Om Bhraam Bhreem Bhraum Sah Rahave Namah"</li>
                                        <li><strong>Ketu:</strong> "Om Sraam Sreem Sraum Sah Ketave Namah"</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-md border border-orange-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Planetary Remedies</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Surya Namaskar:</strong> 12 rounds daily for Sun's blessings</li>
                                    <li><strong>Planetary Day Worship:</strong> Worship specific planet on its day</li>
                                    <li><strong>Gemstone Wearing:</strong> After astrological consultation</li>
                                    <li><strong>Charity:</strong> Donate items related to afflicted planets</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Lifestyle Modifications</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Respect elders and teachers (for Jupiter)</li>
                                    <li>Serve parents and elderly (for Sun and Saturn)</li>
                                    <li>Practice meditation (for Moon and Ketu)</li>
                                    <li>Maintain ethical business practices (for Mercury)</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Grah Shanti Havan</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is the difference between Grah Shanti and Navagraha Puja?", a: "Grah Shanti Havan and Navagraha Puja are essentially the same - both worship all nine planets. However, Grah Shanti specifically emphasizes the fire ritual (Havan) aspect, making it more powerful. The Havan purifies planetary energies through Agni (fire god) as the divine messenger. Some pandits use the terms interchangeably, while others consider Grah Shanti as the more comprehensive version that includes both puja and havan elements." },
                                        { q: "Can this havan remove all planetary doshas?", a: "Grah Shanti Havan is highly effective in reducing planetary afflictions, but complete removal depends on the severity of the dosh and individual karma. For mild to moderate doshas, one comprehensive havan can provide significant relief. For severe afflictions like Kaal Sarp Dosh or strong Mangal Dosh, you may need specific targeted pujas in addition to Grah Shanti. The havan creates positive planetary energy and reduces malefic effects by 60-80%. Combine with daily planetary remedies and ethical living for maximum benefit." },
                                        { q: "When is the best time to perform Grah Shanti Havan?", a: "Ideal times include: (1) During planetary transits affecting your chart, (2) At the start of a new Mahadasha or Antardasha, (3) On your birthday for annual protection, (4) During Navaratri or other auspicious periods, (5) On Purnima (Full Moon) or specific planetary days. Avoid Rahu Kaal, Yamaghanta, and inauspicious nakshatras. The best approach is to consult an astrologer who can analyze your birth chart and recommend the most auspicious muhurat based on your planetary positions and current dashas." },
                                        { q: "How often should Grah Shanti Havan be performed?", a: "Frequency depends on your astrological situation: (1) For general well-being: once annually on your birthday or during Navaratri, (2) During difficult Mahadasha: every 6 months, (3) For severe planetary afflictions: quarterly until situation improves, (4) Before major life events: once before the event (marriage, business launch, etc.), (5) Preventive measure: once every 2-3 years. After the havan, maintain daily planetary remedies like Surya Namaskar, planetary day fasting, and charity. One properly performed havan with sincere devotion is more effective than multiple rushed ceremonies." },
                                        { q: "Can I perform Grah Shanti for a specific planet only?", a: "Yes, you can perform targeted planetary havan for specific afflicted planets. For example, if only Saturn is causing problems, you can do Shani Shanti Havan. However, Grah Shanti (all nine planets) is recommended because: (1) Planets influence each other - balancing all creates overall harmony, (2) You may have hidden afflictions not apparent in basic chart reading, (3) It's more cost-effective than doing nine separate pujas, (4) Comprehensive protection for all life areas. If budget is a concern, prioritize the most afflicted planet but plan for complete Grah Shanti within a year." },
                                        { q: "What donations are most effective after Grah Shanti Havan?", a: "Planet-specific donations amplify havan benefits: (1) Sun: Wheat, jaggery, copper items to temples or poor on Sundays, (2) Moon: White cloth, rice, milk to women or temples on Mondays, (3) Mars: Red lentils, jaggery to soldiers or temples on Tuesdays, (4) Mercury: Green cloth, books to students on Wednesdays, (5) Jupiter: Yellow cloth, turmeric, books to Brahmins on Thursdays, (6) Venus: White clothes, sugar to women on Fridays, (7) Saturn: Black cloth, sesame, iron to poor or laborers on Saturdays, (8) Rahu: Blue/black items to outcasts or hospitals on Saturdays, (9) Ketu: Blankets to spiritual seekers on Tuesdays. Donate with planetary mantras and genuine compassion." },
                                        { q: "Can pregnant women participate in Grah Shanti Havan?", a: "Yes, pregnant women can participate and it's actually beneficial for the unborn child's planetary influences. However, observe these precautions: (1) Sit at a comfortable distance from the fire, (2) Avoid fasting - eat light sattvic food, (3) Don't perform during first trimester if feeling unwell, (4) Husband or family member can make offerings on her behalf, (5) Participate in mantra chanting and receive blessings, (6) Consume prasad for baby's blessings. The positive planetary energies benefit both mother and child. Many families perform Grah Shanti during pregnancy for the child's strong horoscope." },
                                        { q: "What if I don't know my exact birth time for horoscope?", a: "You can still perform Grah Shanti Havan even without exact birth time. The ritual will: (1) Balance all planetary energies generally, (2) Provide protection and blessings, (3) Remove obstacles in current life. However, for maximum benefit, try to: (1) Ask elderly family members about approximate birth time, (2) Consult an astrologer who can rectify birth time based on life events, (3) Perform the havan during universally auspicious times, (4) Focus on planets currently transiting difficult positions for everyone. The havan's power comes from devotion and proper ritual, not just astrological precision." },
                                        { q: "Can Grah Shanti Havan help with career and business?", a: "Absolutely! Grah Shanti Havan is highly effective for career and business success because: (1) Sun governs authority and leadership, (2) Mercury rules business and communication, (3) Jupiter brings opportunities and expansion, (4) Saturn ensures hard work pays off, (5) Venus attracts luxury and comforts. The havan removes planetary obstacles blocking professional growth. Many entrepreneurs perform it before launching ventures or during business difficulties. Combine with: (1) Office Vastu corrections, (2) Wearing appropriate gemstones, (3) Ethical business practices, (4) Regular charity. Results typically manifest within 3-6 months." },
                                        { q: "What precautions should be taken during and after the havan?", a: "Important precautions: (1) Before havan: Avoid non-veg, alcohol, tobacco for 3 days; maintain celibacy on havan day, (2) During havan: Sit with devotion, don't leave midway, avoid negative thoughts, (3) After havan: Don't waste prasad, distribute to family and poor; continue fasting until sunset if possible; avoid celebrations on havan day, (4) For 40 days after: Maintain sattvic diet, daily planetary mantras, weekly fasting on afflicted planet's day, regular charity, (5) Long-term: Respect the planetary deities through ethical living, serve parents and elders, practice gratitude. The havan opens doors but your actions determine how long they stay open." }
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

                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Achieve Planetary Harmony</h3>
                                    <p className="text-lg font-serif italic mb-4">Balance all nine planets for success in every life area.</p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Grah Shanti</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Planetary Peace</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Grah%20Shanti%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Grah Shanti Havan" />
            <Footer />
        </>
    )
}
