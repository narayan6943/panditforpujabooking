import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShivaPuranaPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shiva Purana Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Shiva Purana Paath in Pune. Sacred scripture of Lord Shiva. Transformation, liberation, blessings. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '1500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Shiva Purana Paath in Pune – Sacred Shiva Scripture</title>
                <meta name="description" content="Book Shiva Purana Paath in Pune. Complete recitation of sacred Shiva scripture. Transformation, liberation, divine blessings. Expert pandits. ₹1,500 onwards." />
                <meta name="keywords" content="Shiva Purana Paath Pune, Shiva Scripture, Mahadev Katha, Shiva Recitation, Rudra Puja" />
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
                            <span className="text-maroon-900 font-semibold">Shiva Purana Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Namah Shivaya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shiva Purana Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Scripture of Lord Shiva</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the divine glory of Lord Shiva through sacred Purana recitation. Achieve transformation, liberation, and supreme blessings.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Shiva Purana Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Shiva%20Purana%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Shiva Purana</strong> is one of the eighteen Mahapuranas, a sacred scripture dedicated to Lord Shiva, the supreme deity of transformation and liberation. This ancient text reveals the glory, philosophy, and worship methods of Shiva, making it essential reading for spiritual seekers and devotees.</p>

                                <h2 className="text-3xl font-bold mt-8">The Glory of Shiva Purana</h2>
                                <p>Shiva Purana is not merely a collection of stories—it's a complete spiritual guide that encompasses philosophy, devotion, yoga, and practical wisdom. Composed by Sage Vyasa, it contains approximately 24,000 verses organized into seven Samhitas (sections), each revealing different aspects of Shiva's infinite nature.</p>

                                <p>The Purana declares that merely listening to or reciting Shiva Purana with devotion grants the same benefits as performing elaborate rituals and pilgrimages. It's considered one of the most powerful texts for spiritual transformation and liberation.</p>

                                <h3 className="text-2xl font-bold mt-6">The Seven Samhitas</h3>
                                <ul>
                                    <li><strong>Vidyeshvara Samhita:</strong> Creation and Shiva's glory</li>
                                    <li><strong>Rudra Samhita:</strong> Shiva's incarnations and forms</li>
                                    <li><strong>Shatarudra Samhita:</strong> Hundred forms of Rudra</li>
                                    <li><strong>Kotirudra Samhita:</strong> Millions of Rudras</li>
                                    <li><strong>Uma Samhita:</strong> Goddess Parvati's glory</li>
                                    <li><strong>Kailasa Samhita:</strong> Shiva's abode and philosophy</li>
                                    <li><strong>Vayaviya Samhita:</strong> Revealed by Vayu (Wind God)</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Spiritual Significance</h2>
                                <p>Shiva Purana addresses the fundamental questions of existence:</p>

                                <ul>
                                    <li><strong>Who am I?</strong> The nature of the Self (Atman)</li>
                                    <li><strong>What is reality?</strong> The nature of Brahman (Ultimate Reality)</li>
                                    <li><strong>How to attain liberation?</strong> The path to Moksha</li>
                                    <li><strong>What is devotion?</strong> The essence of Bhakti</li>
                                </ul>

                                <p>The Purana presents Shiva as both Saguna (with form) and Nirguna (formless), making it accessible to devotees at all spiritual levels.</p>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Shiva Purana Paath</h2>
                                <ul>
                                    <li><strong>Spiritual Transformation:</strong> Destroys ego and ignorance</li>
                                    <li><strong>Liberation (Moksha):</strong> Freedom from cycle of birth-death</li>
                                    <li><strong>Negativity Removal:</strong> Burns all negative karma</li>
                                    <li><strong>Divine Knowledge:</strong> Understanding of ultimate reality</li>
                                    <li><strong>Protection:</strong> Shields from all evils and dangers</li>
                                    <li><strong>Health:</strong> Cures diseases, especially chronic ones</li>
                                    <li><strong>Family Harmony:</strong> Brings peace in relationships</li>
                                    <li><strong>Saturn Pacification:</strong> Reduces Shani effects</li>
                                    <li><strong>Meditation Power:</strong> Deepens spiritual practices</li>
                                    <li><strong>Fearlessness:</strong> Removes all fears and anxieties</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Shiva Purana Paath</h2>
                                <ul>
                                    <li><strong>Maha Shivaratri:</strong> Most auspicious (once yearly)</li>
                                    <li><strong>Shravan Month:</strong> Entire month dedicated to Shiva (July-August)</li>
                                    <li><strong>Mondays:</strong> Shiva's special day</li>
                                    <li><strong>Pradosh:</strong> 13th lunar day (twice monthly)</li>
                                    <li><strong>Spiritual Seeking:</strong> Deepening meditation and knowledge</li>
                                    <li><strong>Life Transformation:</strong> Major changes or challenges</li>
                                    <li><strong>Saturn Period:</strong> During Shani Mahadasha or Sade Sati</li>
                                    <li><strong>Annual Ritual:</strong> Complete recitation once a year</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Famous Stories from Shiva Purana</h2>

                                <h3 className="text-2xl font-bold mt-6">1. Samudra Manthan (Ocean Churning)</h3>
                                <p>When gods and demons churned the cosmic ocean, deadly poison (Halahala) emerged that could destroy the universe. Lord Shiva drank the poison to save creation, holding it in his throat, which turned blue—earning him the name Neelkanth (Blue-throated One). This story teaches self-sacrifice for the greater good.</p>

                                <h3 className="text-2xl font-bold mt-6">2. Shiva-Parvati Marriage</h3>
                                <p>The divine romance and marriage of Shiva and Parvati demonstrates the union of consciousness (Shiva) and energy (Shakti). Their relationship represents the perfect balance of masculine and feminine principles, teaching the importance of partnership in spiritual evolution.</p>

                                <h3 className="text-2xl font-bold mt-6">3. Ganesha's Birth</h3>
                                <p>The story of how Parvati created Ganesha and Shiva later beheaded and revived him with an elephant's head teaches about transformation, obedience, and the importance of removing obstacles on the spiritual path.</p>

                                <h3 className="text-2xl font-bold mt-6">4. Tripura Samhara</h3>
                                <p>Shiva's destruction of the three cities (Tripura) of demons symbolizes the destruction of three types of ego: physical, mental, and intellectual. This story teaches that spiritual progress requires destroying all forms of ego.</p>

                                <h3 className="text-2xl font-bold mt-6">5. Daksha Yajna</h3>
                                <p>When Daksha insulted Shiva at his yajna, Sati self-immolated. Shiva's grief and subsequent destruction of the yajna teaches about dharma, respect, and the consequences of pride and disrespect.</p>

                                <h2 className="text-3xl font-bold mt-8">Shiva's Twelve Jyotirlingas</h2>
                                <p>Shiva Purana describes the twelve sacred Jyotirlingas (pillars of light) where Shiva manifested:</p>

                                <ol className="list-decimal pl-6">
                                    <li><strong>Somnath:</strong> Gujarat - Moon's worship</li>
                                    <li><strong>Mallikarjuna:</strong> Andhra Pradesh - Parvati's presence</li>
                                    <li><strong>Mahakaleshwar:</strong> Madhya Pradesh - Time's lord</li>
                                    <li><strong>Omkareshwar:</strong> Madhya Pradesh - Om manifestation</li>
                                    <li><strong>Kedarnath:</strong> Uttarakhand - Himalayan abode</li>
                                    <li><strong>Bhimashankar:</strong> Maharashtra - Bhima river source</li>
                                    <li><strong>Vishwanath:</strong> Uttar Pradesh - Kashi's lord</li>
                                    <li><strong>Trimbakeshwar:</strong> Maharashtra - Godavari source</li>
                                    <li><strong>Vaidyanath:</strong> Jharkhand - Divine physician</li>
                                    <li><strong>Nageshwar:</strong> Gujarat - Serpent's lord</li>
                                    <li><strong>Rameshwaram:</strong> Tamil Nadu - Rama's worship</li>
                                    <li><strong>Grishneshwar:</strong> Maharashtra - Compassionate lord</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Philosophical Teachings</h2>

                                <h3 className="text-2xl font-bold mt-6">Advaita (Non-Dualism)</h3>
                                <p>Shiva Purana teaches that Shiva and the individual soul (Atman) are ultimately one. The apparent separation is due to ignorance (Maya). Realizing this unity is liberation.</p>

                                <h3 className="text-2xl font-bold mt-6">The Five Functions</h3>
                                <p>Shiva performs five cosmic functions:</p>
                                <ul>
                                    <li><strong>Srishti:</strong> Creation</li>
                                    <li><strong>Sthiti:</strong> Preservation</li>
                                    <li><strong>Samhara:</strong> Destruction/Transformation</li>
                                    <li><strong>Tirobhava:</strong> Concealment (Maya)</li>
                                    <li><strong>Anugraha:</strong> Grace/Liberation</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">Shiva Tattva (Shiva Principle)</h3>
                                <p>The Purana explains that Shiva is not just a deity but the fundamental principle of consciousness that pervades everything. Understanding Shiva Tattva is understanding the nature of reality itself.</p>

                                <h2 className="text-3xl font-bold mt-8">Astrological and Vedic Significance</h2>
                                <p>Shiva Purana Paath is especially beneficial for:</p>

                                <ul>
                                    <li><strong>Saturn Afflictions:</strong> Shani Mahadasha, Sade Sati, Dhaiya</li>
                                    <li><strong>Spiritual Stagnation:</strong> Lack of progress in meditation</li>
                                    <li><strong>Transformation Need:</strong> Major life changes</li>
                                    <li><strong>Ego Issues:</strong> Pride and arrogance</li>
                                    <li><strong>Fear and Anxiety:</strong> Deep-rooted psychological issues</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Scientific and Psychological Benefits</h2>
                                <p>Modern research validates several benefits:</p>

                                <ul>
                                    <li><strong>Neuroplasticity:</strong> Stories rewire brain for positive thinking</li>
                                    <li><strong>Stress Reduction:</strong> Devotional reading calms nervous system</li>
                                    <li><strong>Meaning and Purpose:</strong> Provides life direction</li>
                                    <li><strong>Emotional Processing:</strong> Stories help process complex emotions</li>
                                    <li><strong>Value Formation:</strong> Internalizes ethical principles</li>
                                    <li><strong>Cognitive Enhancement:</strong> Improves memory and comprehension</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Shiva Purana Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Selected Chapters Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Key chapters and stories recitation in one day.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-4 hours</li>
                                            <li>✓ Essential stories</li>
                                            <li>✓ Certified pandit</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Seven Day Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹12,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Purana recitation over 7 days with all rituals.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 7 days, 3-4 hrs daily</li>
                                            <li>✓ All seven Samhitas</li>
                                            <li>✓ Senior pandits</li>
                                            <li>✓ Complete samagri</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Shiva Purana Paath Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Take bath and wear white or saffron clothes</li>
                                    <li>Set up Shiva linga or Shiva-Parvati idol/picture</li>
                                    <li>Arrange bilva leaves, white flowers, milk, honey</li>
                                    <li>Keep Shiva Purana book with respect</li>
                                    <li>Light incense and lamp</li>
                                    <li>Observe sattvic diet and purity</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Daily Ritual (for Multi-Day Paath)</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Shiva Abhishek:</strong> Bathe Shiva linga with panchamrit</li>
                                    <li><strong>Shiva Invocation:</strong> "Om Namah Shivaya"</li>
                                    <li><strong>Sankalp:</strong> State intention for the paath</li>
                                    <li><strong>Samhita Recitation:</strong> Recite designated section</li>
                                    <li><strong>Shiva Aarti:</strong> Devotional songs</li>
                                    <li><strong>Prasad Distribution:</strong> Offer blessed food</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Shiva Dhyana Shloka</h4>
                                    <p className="text-maroon-900 font-serif text-base mb-2">
                                        "Karpur Gauram Karunavtaram Sansaar Saaram Bhujgendra Haaram<br />
                                        Sada Vasantam Hridayarvinde Bhavam Bhavani Sahitam Namami"
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Meaning:</strong> I bow to Lord Shiva, white as camphor, embodiment of compassion, essence of the world, wearing serpent garland, always residing in the lotus of my heart, along with Goddess Parvati.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Paath Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant "Om Namah Shivaya" daily (108 times minimum)</li>
                                    <li>Fast on Mondays and Pradosh days</li>
                                    <li>Offer bilva leaves to Shiva linga</li>
                                    <li>Practice meditation and yoga</li>
                                    <li>Live with detachment and simplicity</li>
                                    <li>Study Purana meanings for deeper understanding</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. How long does complete Shiva Purana Paath take?</h3>
                                <p>A complete recitation typically takes 7-9 days when done at moderate pace. Each Samhita takes 1-2 days. Condensed versions focusing on key stories can be completed in 1-3 days.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can I recite Shiva Purana in languages other than Sanskrit?</h3>
                                <p>Yes, translations in Hindi, English, or regional languages are beneficial. The original Sanskrit carries maximum power, but understanding is crucial. Many devotees read translations alongside Sanskrit for comprehension.</p>

                                <h3 className="text-xl font-bold mt-4">3. Is it necessary to complete all seven Samhitas?</h3>
                                <p>Ideally yes, for complete benefits. However, you can recite specific Samhitas based on your needs. Rudra Samhita (Shiva's incarnations) is very popular. Aim to complete all seven at least once in your lifetime.</p>

                                <h3 className="text-xl font-bold mt-4">4. What is the best time to recite Shiva Purana?</h3>
                                <p>Early morning (Brahma Muhurta, 4-6 AM) is ideal. However, any time done with devotion works. Shravan month and Maha Shivaratri are especially auspicious. Evening recitations are also common.</p>

                                <h3 className="text-xl font-bold mt-4">5. Can women recite during menstruation?</h3>
                                <p>Traditional views vary. Some suggest abstaining from touching the book but allow listening or mental recitation. Shiva is considered beyond such restrictions. Follow your comfort level and family tradition.</p>

                                <h3 className="text-xl font-bold mt-4">6. How is it different from other Puranas?</h3>
                                <p>Shiva Purana focuses on Shiva as the supreme reality, emphasizing transformation and liberation. Other Puranas may focus on Vishnu (Vishnu Purana) or Devi (Devi Bhagavata). All are valid paths; choose based on your devotion.</p>

                                <h3 className="text-xl font-bold mt-4">7. Can Shiva Purana Paath be done for specific wishes?</h3>
                                <p>Yes, you can recite for specific intentions like health, liberation, or transformation. State your wish during Sankalp. However, the primary goal should be spiritual growth and understanding Shiva's nature.</p>

                                <h3 className="text-xl font-bold mt-4">8. What prasad should be offered?</h3>
                                <p>Traditional prasad includes panchamrit, fruits, and simple sweets. Shiva loves offerings made with devotion, especially bilva leaves. Avoid elaborate preparations. Simplicity is key in Shiva worship.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can children participate in Shiva Purana Paath?</h3>
                                <p>Absolutely! Children should be encouraged to listen and learn stories. They can help with puja arrangements. Early exposure to Shiva Purana instills values and devotion. Make it an engaging family activity.</p>

                                <h3 className="text-xl font-bold mt-4">10. Is Shiva Purana effective for Saturn (Shani) problems?</h3>
                                <p>Yes, very effective! Shiva is Saturn's lord and guru. Regular Shiva Purana recitation, especially during Shani Mahadasha or Sade Sati, significantly reduces Saturn's malefic effects. Combine with Monday fasting for best results.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Namah Shivaya</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shiva%20Purana%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Shiva Purana Paath" />
            <Footer />
        </>
    )
}
