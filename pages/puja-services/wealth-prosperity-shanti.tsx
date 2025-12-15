import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function WealthProsperityShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Wealth Prosperity Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Wealth Prosperity Shanti Puja (Dhan Prapti Puja) in Pune. Vedic remedies for financial growth, business success, and abundance. Invoke Lakshmi and Kubera.',
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
                <title>Wealth Prosperity Shanti Puja in Pune – Dhan Prapti Remedies</title>
                <meta name="description" content="Facing financial struggles? Book Wealth Prosperity Shanti Puja in Pune. Vedic remedies for wealth, business success, and abundance. Lakshmi-Kubera Puja." />
                <meta name="keywords" content="Wealth Prosperity Puja Pune, Dhan Prapti Puja, Financial Success Remedies, Lakshmi Puja, Kubera Puja" />
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
                            <span className="text-maroon-900 font-semibold">Wealth Prosperity Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/lakshmi-kubera-hero.png"
                            alt="Wealth Prosperity Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Abundance & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Wealth Prosperity Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Dhan Prapti & Financial Success</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Goddess Lakshmi and Lord Kubera to remove financial obstacles and attract lasting wealth through sacred Vedic rituals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Wealth Puja</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Wealth%20Prosperity%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Wealth Prosperity Shanti Puja</strong> (also known as <strong>Dhan Prapti Puja</strong>, <strong>Lakshmi-Kubera Puja</strong>, or <strong>Samridhi Puja</strong>) is a powerful Vedic ritual performed to remove financial obstacles, attract wealth, and ensure lasting prosperity. This sacred ceremony invokes Goddess Lakshmi (deity of wealth) and Lord Kubera (treasurer of the gods) along with planetary remedies for financial success.</p>
                                <p>While hard work is essential for success, Vedic astrology recognizes that certain planetary afflictions can block financial growth despite efforts. This puja addresses both the spiritual causes of poverty and creates positive energy for abundance.</p>

                                <h2 className="text-3xl font-bold mt-8">The Mythology of Lakshmi and Kubera</h2>
                                <p><strong>Goddess Lakshmi</strong> emerged from the cosmic ocean during Samudra Manthan, seated on a lotus and holding pots of gold. She represents not just material wealth but also spiritual prosperity, good fortune, and abundance in all forms. She is the consort of Lord Vishnu and resides in his heart.</p>

                                <p><strong>Lord Kubera</strong> is the treasurer of the gods and lord of wealth. He resides in the golden city of Alaka in the Himalayas. Despite his immense wealth, Kubera is depicted with a pot-belly and deformities, teaching that true wealth comes from contentment, not appearance. He is a devotee of Lord Shiva.</p>

                                <p>The worship of both Lakshmi and Kubera together is considered most powerful for wealth, as Lakshmi brings the flow of money while Kubera ensures its retention and multiplication.</p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Causes of Financial Problems</h2>
                                <p>In Vedic astrology, the 2nd house represents accumulated wealth, the 11th house represents income and gains, and the 9th house represents fortune. Several planetary configurations cause financial problems:</p>
                                <ul>
                                    <li><strong>Afflicted 2nd House:</strong> Malefic planets causing inability to save money</li>
                                    <li><strong>Afflicted 11th House:</strong> Blocked income sources and lost opportunities</li>
                                    <li><strong>Weak Jupiter:</strong> Jupiter (karaka for wealth) being debilitated or afflicted</li>
                                    <li><strong>Weak Venus:</strong> Venus (karaka for luxury) causing lack of comforts</li>
                                    <li><strong>Saturn in 2nd/11th:</strong> Delays in wealth accumulation, poverty mindset</li>
                                    <li><strong>Rahu in 2nd House:</strong> Sudden losses, gambling losses, deception in money matters</li>
                                    <li><strong>Mars-Saturn Conjunction:</strong> Blocked efforts, working hard but earning less</li>
                                    <li><strong>Pitra Dosh:</strong> Ancestral curses blocking prosperity</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Financial Issues by Planetary Afflictions</h3>
                                <ul>
                                    <li><strong>Sun:</strong> Ego preventing wealth, government-related financial blocks</li>
                                    <li><strong>Moon:</strong> Emotional spending, unstable income, mother's wealth issues</li>
                                    <li><strong>Mars:</strong> Impulsive spending, losses through conflicts, property issues</li>
                                    <li><strong>Mercury:</strong> Business losses, communication gaps, fraud</li>
                                    <li><strong>Jupiter:</strong> Lack of opportunities, poor financial decisions, debt</li>
                                    <li><strong>Venus:</strong> Luxury expenses, relationship-related financial drain</li>
                                    <li><strong>Saturn:</strong> Chronic poverty, delayed success, working hard for little money</li>
                                    <li><strong>Rahu:</strong> Gambling losses, sudden financial crashes, deception</li>
                                    <li><strong>Ketu:</strong> Detachment from money, spiritual but poor, unexpected losses</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Wealth Prosperity Puja Essential?</h3>
                                <ul>
                                    <li><strong>Chronic Financial Struggle:</strong> Working hard but not earning enough</li>
                                    <li><strong>Business Losses:</strong> Continuous losses in business despite efforts</li>
                                    <li><strong>Debt Trap:</strong> Unable to clear debts, borrowing to pay debts</li>
                                    <li><strong>Blocked Opportunities:</strong> Missing financial opportunities repeatedly</li>
                                    <li><strong>Before Starting Business:</strong> For success in new ventures</li>
                                    <li><strong>Job Loss or Instability:</strong> Frequent job changes or unemployment</li>
                                    <li><strong>Inheritance Issues:</strong> Problems in receiving ancestral property/wealth</li>
                                    <li><strong>Sudden Financial Crisis:</strong> Unexpected major expenses or losses</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Wealth Prosperity Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Lakshmi Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Goddess Lakshmi worship with wealth mantras and basic havan for prosperity.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Wealth Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja with Lakshmi-Kubera worship, planetary remedies, and Mahalakshmi Havan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Wealth Prosperity Ritual Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Clean Wealth Area:</strong> Thoroughly clean safe, wallet, and cash storage areas</li>
                                    <li><strong>Fasting:</strong> Light fast with fruits (if possible)</li>
                                    <li><strong>Yellow Clothes:</strong> Wear yellow or golden clothes (Jupiter/wealth colors)</li>
                                    <li><strong>Timing:</strong> Best on Friday (Lakshmi) or Thursday (Jupiter), during Pushya nakshatra</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles to wealth</li>
                                    <li><strong>Lakshmi Puja:</strong> Main goddess worship with lotus flowers and gold items</li>
                                    <li><strong>Kubera Puja:</strong> Treasurer of gods for wealth retention</li>
                                    <li><strong>Lakshmi Mantra Jaap:</strong> Chant 11,000 or 21,000 times:
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Shreem Mahalakshmyai Namah"</strong><br />
                                            (Salutations to Goddess Mahalakshmi)
                                        </p>
                                    </li>
                                    <li><strong>Jupiter Remedies:</strong> Strengthen Jupiter for wealth wisdom</li>
                                    <li><strong>Mahalakshmi Havan:</strong> Fire ritual with prosperity herbs</li>
                                    <li><strong>Wealth Daan:</strong> Donations to activate receiving energy</li>
                                </ol>
                            </section>

                            <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-md border border-yellow-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Wealth Remedies</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Lakshmi Mantra:</strong> Chant 108 times daily</li>
                                    <li><strong>Friday Fasting:</strong> Observe for Lakshmi's blessings</li>
                                    <li><strong>Keep Wallet Clean:</strong> Organize money respectfully</li>
                                    <li><strong>Donate Regularly:</strong> Give 10% of income to charity</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Wealth Consciousness</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Gratitude:</strong> Thank Lakshmi for existing wealth daily</li>
                                    <li><strong>Positive Money Talk:</strong> Avoid saying "I'm poor" or "I can't afford"</li>
                                    <li><strong>Visualize Abundance:</strong> See yourself prosperous</li>
                                    <li><strong>Respect Money:</strong> Don't throw coins, keep notes neat</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Wealth Prosperity Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can this puja make me rich quickly?", a: "Wealth Prosperity Puja removes astrological and karmic obstacles to prosperity, but it's not a get-rich-quick scheme. The puja creates positive energy for wealth attraction, but you must also work hard, make wise decisions, and practice financial discipline. Many people report significant financial improvements within 3-6 months after the puja, but the timeline varies based on individual karma and effort." },
                                        { q: "Should I continue working hard after the puja?", a: "Absolutely yes! The puja removes spiritual obstacles and attracts opportunities, but you must recognize and act on those opportunities. Think of it as removing roadblocks from your path - you still need to drive the car. Combine the puja with smart work, financial planning, and skill development for maximum results." },
                                        { q: "When is the best time for Wealth Prosperity Puja?", a: "Auspicious times: (1) Friday for Lakshmi's blessings, (2) Thursday for Jupiter's wisdom, (3) Diwali (Lakshmi Puja day), (4) Dhanteras, (5) During Pushya, Rohini, or Shravana nakshatra, (6) On Purnima (Full Moon), (7) During Akshaya Tritiya (most auspicious for wealth). Avoid performing during Rahu Kaal or inauspicious periods. Consult astrologer for personalized Muhurat." },
                                        { q: "How many times should this puja be performed?", a: "For general prosperity: annually on Diwali or Dhanteras. For severe financial crisis: monthly until situation improves, then quarterly. For business success: perform before starting business, then annually on business anniversary. For debt clearance: perform when entering debt-clearing Mahadasha. Continue daily Lakshmi mantra chanting regardless of puja frequency." },
                                        { q: "Can this puja help clear debts?", a: "Yes, very effective for debt clearance. The puja includes specific remedies for 6th house (debts) and Rahu (sudden losses). Many people have cleared long-standing debts after this puja. However, also create a practical debt repayment plan and avoid new debts. The puja creates opportunities for extra income and wise financial decisions to clear debts faster." },
                                        { q: "What donations are most effective for wealth?", a: "Wealth-specific donations: (1) Feed Brahmins and poor on Fridays, (2) Donate yellow cloth, turmeric, and gram dal on Thursdays, (3) Give to Lakshmi temples, (4) Support education for poor children, (5) Donate to cow shelters, (6) Help widows and elderly, (7) Give financial assistance to struggling families. The key is giving with genuine compassion, not expectation. What you give comes back multiplied." },
                                        { q: "Can this puja help in business success?", a: "Yes, extremely effective for business. The puja includes Kubera worship for business prosperity and Mercury remedies for business acumen. Many entrepreneurs perform this puja before launching ventures or during financial difficulties. For business, also ensure proper Vastu in office, ethical practices, and customer service. The puja attracts customers and opportunities." },
                                        { q: "What if my family has generational poverty?", a: "Generational poverty often indicates Pitra Dosh (ancestral karma). The puja includes Pitra Tarpan to break poverty cycles. Many families have seen dramatic wealth improvements in the next generation after this puja. Also educate children about financial literacy and break limiting beliefs about money inherited from family." },
                                        { q: "Can women perform this puja during menstruation?", a: "Women should avoid performing puja during menstruation as per traditional guidelines. However, they can participate in the final blessings and prasad. Male family members or pandits can perform on behalf of the family. After menstruation, women can resume daily Lakshmi worship and mantra chanting." },
                                        { q: "What precautions should be taken after the puja?", a: "Post-puja precautions: (1) Keep Lakshmi idol/picture in clean place and worship daily, (2) Maintain financial discipline - avoid wasteful spending, (3) Continue Friday fasting and Lakshmi mantra for 40 days minimum, (4) Donate regularly (10% of income), (5) Avoid gambling, speculation, or get-rich-quick schemes, (6) Keep home and especially North direction (wealth corner) clean, (7) Respect money - don't throw coins or crumple notes, (8) Practice gratitude for existing wealth. Remember: Lakshmi stays where there is cleanliness, gratitude, and dharma." }
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Attract Lasting Prosperity</h3>
                                    <p className="text-lg font-serif italic mb-4">Invoke Lakshmi and Kubera for abundance.</p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Wealth Puja</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Wealth & Prosperity</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Wealth%20Prosperity%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Wealth Prosperity Shanti" />
            <Footer />
        </>
    )
}
