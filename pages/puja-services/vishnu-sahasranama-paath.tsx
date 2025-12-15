import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function VishnuSahasranamaPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vishnu Sahasranama Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Vishnu Sahasranama Paath in Pune. 1000 names of Lord Vishnu. Divine protection, prosperity, peace. Expert pandits.',
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
                <title>Vishnu Sahasranama Paath in Pune – 1000 Names of Vishnu</title>
                <meta name="description" content="Book Vishnu Sahasranama Paath in Pune. Recitation of 1000 sacred names of Lord Vishnu. Divine protection, prosperity, peace. Expert pandits. ₹1,500 onwards." />
                <meta name="keywords" content="Vishnu Sahasranama Paath Pune, 1000 Names Vishnu, Vishnu Stotra, Narayana Puja, Vishnu Recitation" />
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
                            <span className="text-maroon-900 font-semibold">Vishnu Sahasranama Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Namo Narayanaya</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vishnu Sahasranama Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">1000 Sacred Names of Lord Vishnu</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the divine power of Lord Vishnu's thousand names. Receive protection, prosperity, peace, and spiritual elevation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Vishnu Sahasranama</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Vishnu%20Sahasranama%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Vishnu Sahasranama</strong> is the recitation of one thousand names of Lord Vishnu, the supreme preserver of the universe. This sacred stotra appears in the Mahabharata, revealed by Bhishma Pitamah to Yudhishthira on his deathbed, making it one of the most authoritative and powerful Vedic hymns.</p>

                                <h2 className="text-3xl font-bold mt-8">The Divine Origin</h2>
                                <p>As Bhishma lay on his bed of arrows after the great Kurukshetra war, Yudhishthira approached him seeking guidance on dharma and liberation. Bhishma, waiting for the auspicious Uttarayana to leave his body, revealed the Vishnu Sahasranama as the supreme path to moksha.</p>

                                <p>The stotra consists of 1000 names (actually 1008 counting variations) organized in 107 stanzas, each revealing different aspects of Vishnu's infinite nature, powers, and manifestations.</p>

                                <h3 className="text-2xl font-bold mt-6">Why Bhishma Chose This Teaching</h3>
                                <p>When asked about the highest dharma, Bhishma didn't prescribe complex rituals or difficult penances. Instead, he revealed that simply chanting Vishnu's names with devotion is the easiest and most powerful path to liberation. This makes Vishnu Sahasranama accessible to all, regardless of caste, gender, or spiritual advancement.</p>

                                <h2 className="text-3xl font-bold mt-8">Structure and Significance</h2>
                                <p>The Vishnu Sahasranama is structured in three parts:</p>

                                <ul>
                                    <li><strong>Dhyana Shlokas:</strong> Meditation verses to prepare the mind</li>
                                    <li><strong>1000 Names:</strong> The main body of divine names</li>
                                    <li><strong>Phala Shruti:</strong> Benefits of recitation</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">Categories of Names</h3>
                                <p>The thousand names can be categorized into:</p>

                                <ul>
                                    <li><strong>Attributes:</strong> Describing Vishnu's qualities (Ananta - Infinite, Achyuta - Infallible)</li>
                                    <li><strong>Forms:</strong> His various manifestations (Narasimha, Vamana, Krishna)</li>
                                    <li><strong>Actions:</strong> His cosmic functions (Srishti-karta - Creator, Paalana-karta - Preserver)</li>
                                    <li><strong>Relationships:</strong> His connections (Damodara - bound by devotion, Govinda - protector of cows)</li>
                                    <li><strong>Philosophical:</strong> Ultimate reality descriptions (Brahman, Paramatma, Purushottama)</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Vishnu Sahasranama Paath</h2>
                                <ul>
                                    <li><strong>Divine Protection:</strong> Shields from all dangers and negative energies</li>
                                    <li><strong>Prosperity:</strong> Attracts wealth and abundance</li>
                                    <li><strong>Peace of Mind:</strong> Calms anxiety and mental disturbances</li>
                                    <li><strong>Health:</strong> Promotes physical and mental well-being</li>
                                    <li><strong>Spiritual Growth:</strong> Advances on path to liberation</li>
                                    <li><strong>Family Harmony:</strong> Brings peace in relationships</li>
                                    <li><strong>Success:</strong> Ensures victory in all endeavors</li>
                                    <li><strong>Karmic Cleansing:</strong> Burns negative karma</li>
                                    <li><strong>Jupiter Strength:</strong> Enhances Jupiter in horoscope</li>
                                    <li><strong>Moksha:</strong> Ultimate liberation from cycle of birth-death</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Recite Vishnu Sahasranama</h2>
                                <ul>
                                    <li><strong>Ekadashi:</strong> 11th lunar day (Vishnu's special day)</li>
                                    <li><strong>Thursdays:</strong> Jupiter's day, associated with Vishnu</li>
                                    <li><strong>Vaikuntha Ekadashi:</strong> Most auspicious (Margashirsha month)</li>
                                    <li><strong>Vishnu Festivals:</strong> Rama Navami, Krishna Janmashtami, Vamana Jayanti</li>
                                    <li><strong>Daily Practice:</strong> Morning recitation for continuous blessings</li>
                                    <li><strong>Difficult Times:</strong> Facing challenges or obstacles</li>
                                    <li><strong>Health Crisis:</strong> During illness or disease</li>
                                    <li><strong>Spiritual Seeking:</strong> Deepening devotion and knowledge</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Astrological and Vedic Significance</h2>
                                <p>Vishnu Sahasranama is especially powerful for:</p>

                                <ul>
                                    <li><strong>Weak Jupiter:</strong> Lack of wisdom, prosperity, or children</li>
                                    <li><strong>Dharma Issues:</strong> Confusion about right and wrong</li>
                                    <li><strong>Protection Need:</strong> Threats from enemies or evil</li>
                                    <li><strong>Spiritual Stagnation:</strong> Lack of progress on spiritual path</li>
                                    <li><strong>Family Discord:</strong> Conflicts and disharmony</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Famous Names and Their Meanings</h2>

                                <h3 className="text-2xl font-bold mt-6">Opening Names</h3>
                                <ul>
                                    <li><strong>Vishvam:</strong> The Universe - Vishnu is everything</li>
                                    <li><strong>Vishnuh:</strong> All-pervading - Present everywhere</li>
                                    <li><strong>Vashatkaarah:</strong> Controller of all - Supreme authority</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-6">Popular Names</h3>
                                <ul>
                                    <li><strong>Achyutah:</strong> Infallible - Never fails devotees</li>
                                    <li><strong>Keshavah:</strong> Beautiful-haired - Destroyer of demon Keshi</li>
                                    <li><strong>Narayanah:</strong> Refuge of all - Resting place of beings</li>
                                    <li><strong>Madhavah:</strong> Consort of Lakshmi - Lord of knowledge</li>
                                    <li><strong>Govindah:</strong> Protector of cows - Giver of joy to senses</li>
                                    <li><strong>Madhusudanah:</strong> Slayer of demon Madhu</li>
                                    <li><strong>Trivikramah:</strong> Three steps - Vamana avatar</li>
                                    <li><strong>Vamana:</strong> Dwarf incarnation</li>
                                    <li><strong>Shridhara:</strong> Bearer of Lakshmi</li>
                                    <li><strong>Hrishikesha:</strong> Lord of senses</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Scientific and Psychological Benefits</h2>
                                <p>Modern research has validated several benefits:</p>

                                <ul>
                                    <li><strong>Sound Therapy:</strong> Sanskrit vibrations have healing frequencies</li>
                                    <li><strong>Memory Enhancement:</strong> Regular recitation improves cognitive function</li>
                                    <li><strong>Stress Reduction:</strong> Rhythmic chanting calms nervous system</li>
                                    <li><strong>Focus Improvement:</strong> Concentration on names enhances mental clarity</li>
                                    <li><strong>Positive Psychology:</strong> Divine attributes inspire positive qualities</li>
                                    <li><strong>Neuroplasticity:</strong> Regular practice rewires brain for positivity</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Vishnu's Ten Avatars (Dashavatara)</h2>
                                <p>Many names in the Sahasranama refer to Vishnu's ten major incarnations:</p>

                                <ol className="list-decimal pl-6">
                                    <li><strong>Matsya:</strong> Fish - Saved Vedas from deluge</li>
                                    <li><strong>Kurma:</strong> Tortoise - Supported Mandara mountain</li>
                                    <li><strong>Varaha:</strong> Boar - Rescued Earth from ocean</li>
                                    <li><strong>Narasimha:</strong> Man-Lion - Killed demon Hiranyakashipu</li>
                                    <li><strong>Vamana:</strong> Dwarf - Subdued king Bali</li>
                                    <li><strong>Parashurama:</strong> Rama with axe - Destroyed corrupt warriors</li>
                                    <li><strong>Rama:</strong> Prince of Ayodhya - Killed Ravana</li>
                                    <li><strong>Krishna:</strong> Cowherd prince - Delivered Bhagavad Gita</li>
                                    <li><strong>Buddha:</strong> Enlightened one - Taught compassion</li>
                                    <li><strong>Kalki:</strong> Future avatar - Will end Kali Yuga</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Comparison with Other Sahasranamas</h2>
                                <p>While there are sahasranamas for other deities (Shiva, Lalita, Ganesha), Vishnu Sahasranama is unique because:</p>

                                <ul>
                                    <li>Revealed by Bhishma, a realized soul at the moment of death</li>
                                    <li>Part of Mahabharata, making it itihasa (history)</li>
                                    <li>Focuses on the preserver aspect of divinity</li>
                                    <li>Emphasizes dharma and righteous living</li>
                                    <li>Accessible to all without initiation</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Vishnu Sahasranama Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete recitation with proper pronunciation by expert pandit.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 45-60 minutes</li>
                                            <li>✓ All 1000 names</li>
                                            <li>✓ Certified pandit</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Premium Vishnu Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Vishnu worship with Sahasranama, abhishek, and aarti.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 2-3 hours</li>
                                            <li>✓ Full Vishnu puja</li>
                                            <li>✓ Abhishek included</li>
                                            <li>✓ Premium samagri</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Vishnu Sahasranama Paath Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Take bath and wear clean yellow or white clothes</li>
                                    <li>Set up Vishnu idol or picture with Lakshmi</li>
                                    <li>Arrange yellow flowers, tulsi leaves, incense, lamp</li>
                                    <li>Keep Vishnu Sahasranama book</li>
                                    <li>Sit facing East or North</li>
                                    <li>Maintain sattvic state and purity</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Recitation</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Vishnu Invocation:</strong> "Om Namo Narayanaya"</li>
                                    <li><strong>Dhyana Shlokas:</strong> Meditation verses</li>
                                    <li><strong>Sahasranama Recitation:</strong> All 1000 names (45-60 minutes)</li>
                                    <li><strong>Phala Shruti:</strong> Benefits verses</li>
                                    <li><strong>Vishnu Aarti:</strong> Devotional songs</li>
                                    <li><strong>Prasad Distribution:</strong> Offer blessed food</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Opening Dhyana Shloka</h4>
                                    <p className="text-maroon-900 font-serif text-base mb-2">
                                        "Shuklaambara-dharam Vishnum Shashi-varnam Chatur-bhujam<br />
                                        Prasanna-vadanam Dhyaayet Sarva-vighnopa-shaantaye"
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Meaning:</strong> I meditate on Lord Vishnu, clad in white garments, moon-complexioned, four-armed, with a pleasant face, for the removal of all obstacles.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Paath Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Recite daily, especially on Ekadashi and Thursdays</li>
                                    <li>Chant "Om Namo Narayanaya" regularly</li>
                                    <li>Offer tulsi leaves to Vishnu</li>
                                    <li>Fast on Ekadashi days</li>
                                    <li>Practice dharma and righteousness</li>
                                    <li>Study meanings of names for deeper understanding</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. How long does Vishnu Sahasranama recitation take?</h3>
                                <p>A complete recitation takes 45-60 minutes at moderate pace with proper pronunciation. Experienced reciters may complete in 30-40 minutes, while beginners might take 60-90 minutes.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can I recite without knowing Sanskrit?</h3>
                                <p>Yes, you can recite phonetically or listen to audio recordings. Understanding meanings enhances benefits but isn't mandatory. The vibrations themselves carry power. Many devotees gradually learn pronunciation through regular practice.</p>

                                <h3 className="text-xl font-bold mt-4">3. Is it necessary to recite all 1000 names?</h3>
                                <p>Ideally yes, for complete benefits. However, if time is limited, you can recite key names or specific sections. Some devotees recite the 12 main names (Keshava, Narayana, Madhava, etc.) as a shorter practice.</p>

                                <h3 className="text-xl font-bold mt-4">4. What is the best time for recitation?</h3>
                                <p>Early morning (Brahma Muhurta, 4-6 AM) is ideal. However, any time done with devotion is beneficial. Ekadashi days and Thursdays are especially auspicious. Evening recitation is also common.</p>

                                <h3 className="text-xl font-bold mt-4">5. Can women recite during menstruation?</h3>
                                <p>Traditional views vary. Some suggest abstaining from touching the book but allow listening or mental recitation. Modern interpretations are more flexible. Follow your comfort level and family tradition.</p>

                                <h3 className="text-xl font-bold mt-4">6. How is it different from Vishnu Chalisa or other stotras?</h3>
                                <p>Vishnu Sahasranama is more comprehensive, covering 1000 aspects of Vishnu. It's from Mahabharata, making it highly authoritative. Chalisa is shorter (40 verses) and easier for daily practice. Both are powerful; choose based on time and devotion.</p>

                                <h3 className="text-xl font-bold mt-4">7. Can it be recited for specific wishes?</h3>
                                <p>Yes, you can recite for specific intentions like health, prosperity, or protection. State your wish at the beginning. However, the primary goal should be spiritual growth and devotion to Lord Vishnu.</p>

                                <h3 className="text-xl font-bold mt-4">8. What prasad should be offered?</h3>
                                <p>Traditional prasad includes panchamrit (five nectars), yellow sweets, fruits, and especially tulsi leaves. Vishnu loves simple offerings made with devotion. Avoid onion, garlic, and non-vegetarian items.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can children recite Vishnu Sahasranama?</h3>
                                <p>Absolutely! Children should be encouraged to listen and gradually learn to recite. They can start with a few names and increase gradually. Early exposure instills devotion and values. Make it an enjoyable family practice.</p>

                                <h3 className="text-xl font-bold mt-4">10. What if I make mistakes while reciting?</h3>
                                <p>Mistakes are natural, especially with Sanskrit pronunciation. Vishnu values devotion over perfection. If you realize a mistake, simply correct it and continue. Your sincere effort and devotion are what matter most. Regular practice improves accuracy.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Namo Narayanaya</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Vishnu%20Sahasranama%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Vishnu Sahasranama Paath" />
            <Footer />
        </>
    )
}
