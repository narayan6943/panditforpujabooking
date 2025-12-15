import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RamcharitmanasPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ramcharitmanas Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Ramcharitmanas Paath in Pune. Complete recitation of Tulsidas epic. Divine blessings, peace, prosperity. Expert pandits.',
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
                <title>Ramcharitmanas Paath in Pune – Complete Epic Recitation</title>
                <meta name="description" content="Book Ramcharitmanas Paath in Pune. Complete recitation of Tulsidas's sacred epic. Divine blessings, peace, prosperity. Expert pandits. ₹1,500 onwards." />
                <meta name="keywords" content="Ramcharitmanas Paath Pune, Ramayana Recitation, Tulsidas Path, Ram Katha, Complete Ramayan" />
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
                            <span className="text-maroon-900 font-semibold">Ramcharitmanas Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Jai Siya Ram</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ramcharitmanas Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Epic of Lord Rama</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the complete recitation of Goswami Tulsidas's divine epic. Receive blessings of Lord Rama, remove obstacles, and attain spiritual peace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Ramcharitmanas Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Ramcharitmanas%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Ramcharitmanas Paath</strong> is the complete recitation of the sacred epic composed by Goswami Tulsidas in the 16th century. Written in Awadhi language, it narrates the divine life story of Lord Rama and is considered one of the greatest works of Hindu literature.</p>

                                <h2 className="text-3xl font-bold mt-8">The Glory of Ramcharitmanas</h2>
                                <p>Ramcharitmanas, meaning "Lake of the Deeds of Rama," is not just a story but a spiritual guide for righteous living. Tulsidas composed this epic to make the Sanskrit Ramayana accessible to common people, filling it with devotion, philosophy, and practical wisdom.</p>

                                <p>The text consists of seven Kandas (books) with approximately 12,800 lines organized in Dohas (couplets), Chaupais (quatrains), and other poetic meters. Each Kanda represents a phase of Lord Rama's life and contains profound spiritual teachings.</p>

                                <h3 className="text-2xl font-bold mt-6">The Seven Kandas</h3>
                                <ul>
                                    <li><strong>Bal Kanda:</strong> Rama's birth and childhood, marriage to Sita</li>
                                    <li><strong>Ayodhya Kanda:</strong> Rama's exile to forest for 14 years</li>
                                    <li><strong>Aranya Kanda:</strong> Forest life and Sita's abduction by Ravana</li>
                                    <li><strong>Kishkindha Kanda:</strong> Alliance with Sugriva and Hanuman</li>
                                    <li><strong>Sundar Kanda:</strong> Hanuman's journey to Lanka</li>
                                    <li><strong>Lanka Kanda:</strong> War with Ravana and Sita's rescue</li>
                                    <li><strong>Uttar Kanda:</strong> Return to Ayodhya and Rama's reign</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Spiritual Significance</h2>
                                <p>Ramcharitmanas is more than a religious text—it's a complete guide to dharma (righteousness), bhakti (devotion), and moksha (liberation). Tulsidas infused each verse with deep spiritual meaning:</p>

                                <ul>
                                    <li><strong>Dharma:</strong> Teaches righteous conduct through Rama's example</li>
                                    <li><strong>Bhakti:</strong> Shows the path of pure devotion through Hanuman</li>
                                    <li><strong>Karma:</strong> Illustrates the law of action and consequence</li>
                                    <li><strong>Moksha:</strong> Guides toward spiritual liberation</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Ramcharitmanas Paath</h2>
                                <ul>
                                    <li><strong>Spiritual Purification:</strong> Cleanses mind and soul of negativity</li>
                                    <li><strong>Divine Protection:</strong> Shields from evil and negative energies</li>
                                    <li><strong>Family Harmony:</strong> Brings peace and unity in relationships</li>
                                    <li><strong>Obstacle Removal:</strong> Clears barriers to success</li>
                                    <li><strong>Mental Peace:</strong> Reduces stress and anxiety</li>
                                    <li><strong>Righteous Living:</strong> Inspires ethical conduct</li>
                                    <li><strong>Health Benefits:</strong> Promotes physical and mental well-being</li>
                                    <li><strong>Prosperity:</strong> Attracts abundance and success</li>
                                    <li><strong>Devotion Development:</strong> Deepens spiritual connection</li>
                                    <li><strong>Karmic Cleansing:</strong> Burns negative karma</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Ramcharitmanas Paath</h2>
                                <ul>
                                    <li><strong>Ram Navami:</strong> Lord Rama's birthday (most auspicious)</li>
                                    <li><strong>Diwali:</strong> Rama's return to Ayodhya</li>
                                    <li><strong>Vivah Panchami:</strong> Rama-Sita wedding anniversary</li>
                                    <li><strong>Monthly:</strong> Chaitra month (March-April) is especially sacred</li>
                                    <li><strong>Life Events:</strong> Weddings, housewarmings, new beginnings</li>
                                    <li><strong>Difficult Times:</strong> Facing challenges or obstacles</li>
                                    <li><strong>Annual Ritual:</strong> Yearly recitation for continuous blessings</li>
                                    <li><strong>Nine Days:</strong> Complete recitation over 9 days (Akhand Paath)</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Types of Ramcharitmanas Recitation</h2>

                                <h3 className="text-2xl font-bold mt-6">1. Akhand Paath (Continuous)</h3>
                                <p>Non-stop recitation completed in 24-72 hours with multiple pandits taking turns. This is the most powerful form, creating intense spiritual energy. Requires dedicated space and continuous presence of family members.</p>

                                <h3 className="text-2xl font-bold mt-6">2. Sapt Dina Paath (Seven Days)</h3>
                                <p>One Kanda recited each day for seven days. This is the traditional method, allowing time for contemplation and understanding. Each day focuses on different aspects of Rama's life and teachings.</p>

                                <h3 className="text-2xl font-bold mt-6">3. Nau Dina Paath (Nine Days)</h3>
                                <p>Complete recitation spread over nine days, often performed during Navratri. This method combines the power of Navratri with Ramcharitmanas blessings.</p>

                                <h3 className="text-2xl font-bold mt-6">4. Ek Dina Paath (One Day)</h3>
                                <p>Condensed recitation of key portions in one day, suitable for those with time constraints. While shorter, it still carries significant spiritual benefits when done with devotion.</p>

                                <h2 className="text-3xl font-bold mt-8">Astrological and Vedic Significance</h2>
                                <p>According to Vedic astrology, Ramcharitmanas Paath is especially beneficial for:</p>

                                <ul>
                                    <li><strong>Sun Afflictions:</strong> Weak or malefic Sun in horoscope</li>
                                    <li><strong>Pitru Dosh:</strong> Ancestral karma issues</li>
                                    <li><strong>Relationship Problems:</strong> Marriage delays or conflicts</li>
                                    <li><strong>Leadership Issues:</strong> Lack of authority or respect</li>
                                    <li><strong>Ethical Dilemmas:</strong> Confusion about right and wrong</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Scientific and Psychological Benefits</h2>
                                <p>Modern research has validated several benefits of regular scripture recitation:</p>

                                <ul>
                                    <li><strong>Stress Reduction:</strong> Rhythmic recitation calms the nervous system</li>
                                    <li><strong>Cognitive Enhancement:</strong> Improves memory and concentration</li>
                                    <li><strong>Emotional Regulation:</strong> Helps process and manage emotions</li>
                                    <li><strong>Value Formation:</strong> Internalizes ethical principles</li>
                                    <li><strong>Community Bonding:</strong> Strengthens social connections</li>
                                    <li><strong>Purpose and Meaning:</strong> Provides life direction and purpose</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Teachings from Ramcharitmanas</h2>

                                <h3 className="text-2xl font-bold mt-6">1. Ideal Relationships</h3>
                                <p>Ramcharitmanas presents perfect models for all relationships:</p>
                                <ul>
                                    <li><strong>Rama-Sita:</strong> Ideal husband-wife relationship</li>
                                    <li><strong>Rama-Lakshmana:</strong> Perfect brotherhood</li>
                                    <li><strong>Rama-Bharata:</strong> Selfless love between brothers</li>
                                    <li><strong>Rama-Hanuman:</strong> Lord-devotee relationship</li>
                                    <li><strong>Rama-Dasharatha:</strong> Father-son bond</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">2. Dharma in Action</h3>
                                <p>Every character demonstrates dharma through their actions:</p>
                                <ul>
                                    <li>Rama's adherence to truth despite personal cost</li>
                                    <li>Sita's unwavering devotion and purity</li>
                                    <li>Lakshmana's selfless service</li>
                                    <li>Bharata's sacrifice and righteousness</li>
                                    <li>Hanuman's complete surrender to the divine</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">3. Victory of Good Over Evil</h3>
                                <p>The epic demonstrates that righteousness ultimately triumphs, no matter how powerful evil appears. Ravana, despite his knowledge and power, falls due to his adharma (unrighteousness).</p>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Ramcharitmanas Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">One Day Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Key portions recitation in one day with expert pandit.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-4 hours duration</li>
                                            <li>✓ Essential verses</li>
                                            <li>✓ Certified pandit</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Seven Day Complete Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete recitation over 7 days with all rituals.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 7 days, 2-3 hrs daily</li>
                                            <li>✓ All seven Kandas</li>
                                            <li>✓ Senior pandits</li>
                                            <li>✓ Complete samagri</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Ramcharitmanas Paath Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Clean the house and puja area thoroughly</li>
                                    <li>Set up altar with Rama-Sita-Lakshmana-Hanuman idols/pictures</li>
                                    <li>Arrange flowers, incense, lamp, and prasad</li>
                                    <li>Keep Ramcharitmanas book with respect</li>
                                    <li>Family members should take bath and wear clean clothes</li>
                                    <li>Observe sattvic diet (vegetarian, no onion/garlic)</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Daily Ritual (for Multi-Day Paath)</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Begin with Ganesh invocation</li>
                                    <li><strong>Kalash Sthapana:</strong> Establish sacred water pot</li>
                                    <li><strong>Rama Puja:</strong> Worship Lord Rama with 16 offerings</li>
                                    <li><strong>Sankalp:</strong> State intention for the paath</li>
                                    <li><strong>Kanda Recitation:</strong> Recite designated Kanda for the day</li>
                                    <li><strong>Aarti:</strong> Perform Rama aarti</li>
                                    <li><strong>Prasad Distribution:</strong> Offer and distribute blessed food</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Famous Opening Verse</h4>
                                    <p className="text-maroon-900 font-serif text-base mb-2">
                                        "Shri Guru Charan Saroj Raj, Nij Man Mukur Sudhari<br />
                                        Varnau Raghuvar Vimal Jasu, Jo Dayaku Phal Chari"
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Meaning:</strong> Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I describe the pure glory of Lord Rama, which grants the four fruits of life.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Paath Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Read at least one Doha-Chaupai daily</li>
                                    <li>Chant "Jai Siya Ram" regularly</li>
                                    <li>Practice the teachings in daily life</li>
                                    <li>Maintain purity of thought and action</li>
                                    <li>Serve others selflessly like Rama</li>
                                    <li>Annual or periodic complete recitation</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. How long does complete Ramcharitmanas Paath take?</h3>
                                <p>A complete recitation typically takes 7-9 days when done at a moderate pace with proper pronunciation and understanding. Akhand (continuous) Paath can be completed in 24-72 hours with multiple pandits.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can I recite Ramcharitmanas in languages other than Awadhi?</h3>
                                <p>While the original Awadhi version by Tulsidas carries maximum spiritual power, translations in Hindi, English, or regional languages are also beneficial. The key is understanding and devotion. Many people read translations alongside the original.</p>

                                <h3 className="text-xl font-bold mt-4">3. Is it necessary to complete all seven Kandas?</h3>
                                <p>Ideally, yes. However, if time is limited, you can recite specific Kandas based on your needs. Sundar Kanda alone is very powerful. For complete benefits, aim to recite all seven Kandas at least once a year.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can women recite during menstruation?</h3>
                                <p>Traditional views vary. Some suggest abstaining from touching the book but allow listening or mental recitation. Modern interpretations are more flexible. Follow your family tradition or personal comfort level.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the best time to recite Ramcharitmanas?</h3>
                                <p>Early morning (Brahma Muhurta, 4-6 AM) is ideal. However, any time done with devotion is beneficial. Evening recitations are also common. Maintain consistency in timing if doing multi-day Paath.</p>

                                <h3 className="text-xl font-bold mt-4">6. Do I need to understand every word?</h3>
                                <p>Understanding enhances benefits but isn't mandatory. The vibrations of the sacred verses themselves carry power. Many devotees recite with faith and gradually understand meanings over time. Consider using commentaries for deeper understanding.</p>

                                <h3 className="text-xl font-bold mt-4">7. Can Ramcharitmanas Paath be done for specific wishes?</h3>
                                <p>Yes, you can perform Paath for specific intentions like health, marriage, children, or success. State your wish during Sankalp. However, the primary goal should be spiritual growth and devotion to Lord Rama.</p>

                                <h3 className="text-xl font-bold mt-4">8. How is it different from Valmiki Ramayana?</h3>
                                <p>Valmiki Ramayana is the original Sanskrit epic focusing on Rama as a perfect human. Ramcharitmanas by Tulsidas is in Awadhi, emphasizes Rama's divinity, and includes more devotional content. Both are sacred, but Ramcharitmanas is more accessible for common people.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can children participate in Ramcharitmanas Paath?</h3>
                                <p>Absolutely! Children should be encouraged to participate. They can listen, recite simple verses, or help with puja arrangements. Early exposure to Ramcharitmanas instills values and devotion. Many families make it a bonding activity.</p>

                                <h3 className="text-xl font-bold mt-4">10. What prasad should be offered?</h3>
                                <p>Traditional prasad includes panchaamrit (five nectars), seasonal fruits, and sweets. Rama particularly loves simple offerings made with devotion. Avoid onion, garlic, and non-vegetarian items. Distribute prasad to all attendees and neighbors.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Jai Siya Ram</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ramcharitmanas%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Ramcharitmanas Paath" />
            <Footer />
        </>
    )
}
