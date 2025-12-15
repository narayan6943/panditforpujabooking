import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function LakshmiHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Lakshmi Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Lakshmi Havan in Pune. Attract wealth, prosperity & abundance. Expert pandits for home/business. Complete Vedic fire ritual.',
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
                <title>Lakshmi Havan in Pune – Wealth & Prosperity Fire Ritual</title>
                <meta name="description" content="Book Lakshmi Havan in Pune. Attract wealth, prosperity & abundance. Expert pandits. ₹5,000 onwards. Complete Vedic fire ritual for Goddess Lakshmi." />
                <meta name="keywords" content="Lakshmi Havan Pune, Wealth Fire Ritual, Prosperity Havan, Mahalakshmi Puja, Lakshmi Homam" />
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
                            <span className="text-maroon-900 font-semibold">Lakshmi Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Wealth & Abundance</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Lakshmi Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Prosperity</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Goddess Lakshmi through powerful fire ritual. Attract wealth, remove financial obstacles, and ensure lasting prosperity for home and business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Lakshmi Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Lakshmi%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Lakshmi Havan</strong> (also called <strong>Mahalakshmi Homam</strong>) is one of the most powerful Vedic fire rituals to invoke Goddess Lakshmi, the deity of wealth, prosperity, and abundance. This sacred ceremony removes financial obstacles, attracts wealth, and ensures lasting prosperity in both personal and professional life.</p>

                                <h2 className="text-3xl font-bold mt-8">The Divine Goddess Lakshmi</h2>
                                <p>Goddess Lakshmi is the consort of Lord Vishnu and represents not just material wealth but also spiritual prosperity, good fortune, beauty, and grace. According to the Puranas, she emerged from the churning of the cosmic ocean (Samudra Manthan), seated on a lotus, holding pots of gold.</p>

                                <p>Lakshmi has eight forms known as <strong>Ashta Lakshmi</strong>, each representing different types of prosperity:</p>
                                <ul>
                                    <li><strong>Adi Lakshmi:</strong> Primordial wealth and spiritual abundance</li>
                                    <li><strong>Dhana Lakshmi:</strong> Material wealth and money</li>
                                    <li><strong>Dhanya Lakshmi:</strong> Agricultural wealth and food grains</li>
                                    <li><strong>Gaja Lakshmi:</strong> Royal power and prosperity</li>
                                    <li><strong>Santana Lakshmi:</strong> Wealth of progeny and family</li>
                                    <li><strong>Veera Lakshmi:</strong> Courage and strength</li>
                                    <li><strong>Vijaya Lakshmi:</strong> Victory and success</li>
                                    <li><strong>Vidya Lakshmi:</strong> Knowledge and wisdom</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Why Lakshmi Havan is Powerful</h2>
                                <p>Fire (Agni) is considered the purest element and the divine messenger. When offerings are made to Goddess Lakshmi through sacred fire, they reach her directly and instantly. The havan:</p>
                                <ul>
                                    <li>Purifies the environment and removes negative energies blocking wealth</li>
                                    <li>Creates powerful vibrations that attract prosperity</li>
                                    <li>Strengthens Venus (karaka for wealth and luxury) in your horoscope</li>
                                    <li>Removes obstacles from the 2nd and 11th houses (wealth houses)</li>
                                    <li>Invokes blessings for both material and spiritual abundance</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Lakshmi Havan</h2>
                                <ul>
                                    <li><strong>Financial Growth:</strong> Attracts new income sources and opportunities</li>
                                    <li><strong>Business Success:</strong> Increases customers, sales, and profits</li>
                                    <li><strong>Debt Removal:</strong> Helps clear existing debts and prevents new ones</li>
                                    <li><strong>Property Acquisition:</strong> Facilitates buying home, land, or vehicles</li>
                                    <li><strong>Career Advancement:</strong> Brings promotions and salary increases</li>
                                    <li><strong>Investment Success:</strong> Ensures profitable returns on investments</li>
                                    <li><strong>Family Prosperity:</strong> Brings overall well-being to entire family</li>
                                    <li><strong>Spiritual Growth:</strong> Balances material and spiritual wealth</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Lakshmi Havan</h2>
                                <ul>
                                    <li><strong>Diwali/Dhanteras:</strong> Most auspicious time for Lakshmi worship</li>
                                    <li><strong>Fridays:</strong> Dedicated to Goddess Lakshmi and Venus</li>
                                    <li><strong>Purnima (Full Moon):</strong> Especially in Kartik or Chaitra month</li>
                                    <li><strong>Business Launch:</strong> Before starting new business or venture</li>
                                    <li><strong>New Home:</strong> During Griha Pravesh for prosperity</li>
                                    <li><strong>Financial Crisis:</strong> When facing persistent money problems</li>
                                    <li><strong>Akshaya Tritiya:</strong> Highly auspicious for wealth rituals</li>
                                    <li><strong>Pushya Nakshatra:</strong> One of the best nakshatras for Lakshmi worship</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Lakshmi Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Lakshmi Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Lakshmi worship with 108 ahutis and prosperity mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Mahalakshmi Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Ashta Lakshmi puja, 1008 ahutis, and Kubera worship.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Lakshmi Havan Vidhi (Procedure)</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Clean home/office thoroughly, especially North direction (wealth corner)</li>
                                    <li>Observe light fast with fruits and milk</li>
                                    <li>Wear yellow, red, or golden clothes</li>
                                    <li>Arrange havan kund facing East or North</li>
                                    <li>Gather offerings: lotus flowers, gold items, yellow flowers, turmeric, saffron</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles to wealth</li>
                                    <li><strong>Kalash Sthapana:</strong> Install pot with coins and rice</li>
                                    <li><strong>Lakshmi Invocation:</strong> Invoke Goddess with Lakshmi Gayatri</li>
                                    <li><strong>Ashta Lakshmi Puja:</strong> Worship all eight forms</li>
                                    <li><strong>Lakshmi Mantra Jaap:</strong> Chant "Om Shreem Mahalakshmyai Namah" 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with ghee, lotus petals, and prosperity herbs</li>
                                    <li><strong>Kubera Puja:</strong> Worship wealth deity for retention of money</li>
                                    <li><strong>Purnahuti:</strong> Final offering with coconut and gold</li>
                                    <li><strong>Lakshmi Aarti:</strong> Conclude with devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Powerful Lakshmi Mantras</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li><strong>Beej Mantra:</strong> "Om Shreem Mahalakshmyai Namah"</li>
                                        <li><strong>Gayatri:</strong> "Om Mahalakshmyai Cha Vidmahe, Vishnu Patnyai Cha Dhimahi, Tanno Lakshmi Prachodayat"</li>
                                        <li><strong>Maha Mantra:</strong> "Om Hreem Shreem Kleem Mahalakshmyai Namah"</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-md my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Post-Havan Practices</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mb-3">Daily Practices (40 Days)</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Chant Lakshmi mantra 108 times daily</li>
                                    <li>Light lamp in North direction every evening</li>
                                    <li>Keep home and especially entrance clean</li>
                                    <li>Maintain gratitude journal for existing wealth</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Friday Observances</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Fast or eat only one sattvic meal</li>
                                    <li>Worship Lakshmi with lotus flowers</li>
                                    <li>Donate to women or temples</li>
                                    <li>Avoid lending money on Fridays</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Wealth Consciousness</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Keep wallet and cash organized and clean</li>
                                    <li>Never keep empty containers in kitchen</li>
                                    <li>Donate 10% of income regularly</li>
                                    <li>Respect money - don't throw coins or crumple notes</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Lakshmi Havan</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can Lakshmi Havan make me rich quickly?", a: "Lakshmi Havan removes spiritual and karmic obstacles to wealth, but it's not a magic spell for instant riches. The havan creates positive energy that attracts opportunities, but you must recognize and act on them. Most people report noticeable improvements within 3-6 months - new income sources, unexpected gains, business growth, or debt clearance. The key is combining the havan with hard work, smart decisions, and ethical practices. Lakshmi blesses those who respect wealth and use it wisely." },
                                        { q: "What is the best time to perform Lakshmi Havan?", a: "The most auspicious times are: (1) Diwali or Dhanteras (Lakshmi's special days), (2) Fridays, especially during Shukla Paksha (waxing moon), (3) Purnima (Full Moon) in Kartik or Chaitra month, (4) Akshaya Tritiya (day that never diminishes), (5) Pushya, Rohini, or Shravana nakshatra, (6) During Venus Mahadasha or favorable Venus transits. Avoid Amavasya (except Diwali), Rahu Kaal, and inauspicious periods. Consult an astrologer for your personalized muhurat based on your birth chart." },
                                        { q: "Should I perform Lakshmi Havan at home or business?", a: "Both are beneficial! For home: Perform in living room or puja room facing North/East for family prosperity. For business: Perform at office/shop entrance or cash counter area for business growth. Many entrepreneurs perform at both locations - home havan for overall prosperity and office havan for business success. If choosing one, perform at home as it benefits all life areas including business. The positive energy from home havan extends to your workplace through your presence." },
                                        { q: "Can Lakshmi Havan help clear debts?", a: "Yes, very effective for debt clearance. Lakshmi Havan combined with Kubera puja specifically addresses debt issues by: (1) Attracting new income sources to pay debts, (2) Creating opportunities for extra earnings, (3) Removing obstacles blocking money flow, (4) Bringing wise financial decisions. Many people have cleared long-standing debts after this havan. However, also create a practical debt repayment plan, avoid new debts, and practice financial discipline. The havan opens doors but you must walk through them." },
                                        { q: "What donations should be made after Lakshmi Havan?", a: "Lakshmi-pleasing donations include: (1) Feed Brahmins and poor on Fridays, (2) Donate yellow cloth, turmeric, and sweets to temples, (3) Give to women's education or empowerment programs, (4) Support cow shelters (cow represents Lakshmi), (5) Help poor families with food and clothes, (6) Donate to orphanages or old age homes, (7) Sponsor weddings for poor girls. The key principle: Give with genuine compassion and gratitude. What you give comes back multiplied. Regular small donations are better than one large donation." },
                                        { q: "Can women perform Lakshmi Havan during menstruation?", a: "Women should avoid performing the havan during menstruation as per traditional guidelines. However, they can: (1) Participate in the final aarti and blessings from a distance, (2) Receive prasad, (3) Chant mantras mentally, (4) Have husband or male family member perform on their behalf. After menstruation, women can resume daily Lakshmi worship and mantra chanting. Lakshmi herself is a goddess, so women are especially blessed to worship her during other times." },
                                        { q: "How often should Lakshmi Havan be performed?", a: "Frequency depends on your situation: (1) For general prosperity: Once annually on Diwali or Dhanteras, (2) For business growth: Quarterly or before major launches, (3) During financial crisis: Monthly until situation improves, (4) For new ventures: Once before starting, then annually on business anniversary, (5) Preventive measure: Every 6 months. After havan, maintain daily Lakshmi mantra chanting and Friday worship. One properly performed havan with devotion is more powerful than multiple rushed ceremonies." },
                                        { q: "What if I don't see immediate results?", a: "Lakshmi Havan works on multiple levels - karmic, energetic, and practical. Results manifest differently for each person based on: (1) Individual karma and past actions, (2) Severity of planetary afflictions, (3) Current life circumstances, (4) Devotion and faith level, (5) Post-havan practices followed. Some see immediate changes (within weeks), while others experience gradual improvement (3-6 months). If no results after 6 months: (1) Repeat havan with more devotion, (2) Check if you're following post-havan practices, (3) Consult astrologer for additional remedies, (4) Examine if you're blocking wealth through negative beliefs or unethical practices. Trust divine timing and maintain faith." },
                                        { q: "Can Lakshmi Havan help in getting a job or promotion?", a: "Absolutely! Lakshmi governs not just money but all forms of prosperity including career success. The havan helps by: (1) Removing obstacles blocking opportunities, (2) Increasing confidence and positive aura, (3) Attracting favorable circumstances, (4) Strengthening Venus (career growth) and Jupiter (opportunities). Many people have received job offers or promotions within months of Lakshmi Havan. Combine with: (1) Updating skills and resume, (2) Networking actively, (3) Applying to suitable positions, (4) Maintaining professional ethics. The havan creates the energy, but you must take action." },
                                        { q: "What precautions should be taken during and after Lakshmi Havan?", a: "Important precautions: (1) Before havan: Clean home thoroughly, especially North direction; avoid non-veg, alcohol for 3 days, (2) During havan: Maintain positive thoughts; don't discuss financial problems; focus on abundance not lack, (3) After havan: Don't waste prasad; distribute to family and poor; continue fasting until sunset if possible, (4) For 40 days: Daily Lakshmi mantra; Friday fasting; keep home clean; avoid wasteful spending; practice gratitude, (5) Long-term: Respect money; donate regularly; avoid gambling or speculation; maintain ethical business practices. Remember: Lakshmi stays where there is cleanliness, gratitude, and dharma. She leaves where there is disrespect, greed, or adharma." }
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
                                        <p className="text-gold-100 text-sm mb-4">For Wealth & Prosperity</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Lakshmi%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Lakshmi Havan" />
            <Footer />
        </>
    )
}
