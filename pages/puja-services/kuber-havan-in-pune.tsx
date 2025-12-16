import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KuberHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kuber Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Kuber Havan in Pune. Attract wealth, retain money, ensure prosperity. Expert pandits for powerful wealth deity fire ritual.',
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
                <title>Kuber Havan in Pune – Wealth Retention Fire Ritual</title>
                <meta name="description" content="Book Kuber Havan in Pune. Attract wealth, retain money, ensure lasting prosperity. Expert pandits for Lord Kuber fire ritual. Wealth deity worship." />
                <meta name="keywords" content="Kuber Havan Pune, Wealth Retention Ritual, Kuber Homam, Money Puja, Prosperity Fire Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Kuber Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Wealth & Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Kuber Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Wealth Retention</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Kuber, the divine treasurer, through powerful fire ritual. Attract wealth, retain money, and ensure lasting prosperity for generations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Kuber Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Kuber%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Kuber Havan</strong> is a powerful Vedic fire ritual dedicated to Lord Kuber, the divine treasurer and god of wealth. While Goddess Lakshmi brings wealth, Lord Kuber ensures its retention and multiplication. This sacred ceremony invokes Kuber's blessings for attracting money, preventing losses, and ensuring lasting prosperity.</p>

                                <h2 className="text-3xl font-bold mt-8">Lord Kuber - The Divine Treasurer</h2>
                                <p>Lord Kuber is the king of Yakshas (nature spirits) and the treasurer of the gods. According to the Puranas, he is the son of sage Vishrava and half-brother of Ravana. After intense penance, Lord Brahma appointed him as the guardian of wealth and the ruler of the North direction.</p>

                                <p>Kuber resides in Alkapuri, a magnificent golden city in the Himalayas. He is depicted with a pot-belly (symbolizing abundance), holding a money bag or pot of gold, and sometimes riding a man (representing ego subdued by wealth consciousness).</p>

                                <h3 className="text-2xl font-bold mt-6">Kuber's Divine Role</h3>
                                <ul>
                                    <li><strong>Wealth Guardian:</strong> Protects and multiplies existing wealth</li>
                                    <li><strong>Treasure Keeper:</strong> Manages divine and earthly treasures</li>
                                    <li><strong>Prosperity Granter:</strong> Blesses devotees with lasting abundance</li>
                                    <li><strong>Direction Lord:</strong> Rules North direction (wealth corner in Vastu)</li>
                                    <li><strong>Lakshmi's Companion:</strong> Works with Goddess Lakshmi for complete prosperity</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Difference Between Lakshmi and Kuber Worship</h2>
                                <p>Understanding the distinction is crucial for complete prosperity:</p>
                                <ul>
                                    <li><strong>Lakshmi:</strong> Attracts new wealth, brings money flow, grants opportunities</li>
                                    <li><strong>Kuber:</strong> Retains existing wealth, prevents losses, multiplies savings</li>
                                    <li><strong>Together:</strong> Complete wealth cycle - attraction, retention, and multiplication</li>
                                </ul>
                                <p>Many people earn well but can't save (weak Kuber). Others save but don't earn enough (weak Lakshmi). Worshipping both ensures balanced prosperity.</p>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Kuber Havan</h2>
                                <ul>
                                    <li><strong>Wealth Retention:</strong> Prevents money from slipping away</li>
                                    <li><strong>Savings Growth:</strong> Multiplies existing wealth and investments</li>
                                    <li><strong>Business Stability:</strong> Ensures consistent profits and cash flow</li>
                                    <li><strong>Debt Prevention:</strong> Stops unnecessary expenses and loans</li>
                                    <li><strong>Property Acquisition:</strong> Helps buy and retain real estate</li>
                                    <li><strong>Generational Wealth:</strong> Creates lasting prosperity for family</li>
                                    <li><strong>Financial Wisdom:</strong> Grants smart money management skills</li>
                                    <li><strong>Hidden Treasures:</strong> Reveals unexpected wealth sources</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Kuber Havan</h2>
                                <ul>
                                    <li><strong>Dhanteras & Diwali:</strong> Most auspicious for wealth rituals</li>
                                    <li><strong>Akshaya Tritiya:</strong> Day of never-diminishing wealth</li>
                                    <li><strong>Thursdays:</strong> Jupiter's day (wealth and expansion)</li>
                                    <li><strong>Money Leakage:</strong> When unable to save despite good income</li>
                                    <li><strong>Business Launch:</strong> Before starting new venture</li>
                                    <li><strong>Investment:</strong> Before major financial decisions</li>
                                    <li><strong>Property Purchase:</strong> Before buying home or land</li>
                                    <li><strong>Vault Opening:</strong> When installing safe or locker</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Kuber Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Kuber Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹4,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Kuber worship with 108 ahutis and wealth mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Lakshmi-Kuber Maha Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹16,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Combined ritual with both deities, 1008 ahutis, and vault energization.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Kuber Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Clean North direction of home/office thoroughly</li>
                                    <li>Observe light fast with fruits and milk</li>
                                    <li>Wear yellow or golden clothes</li>
                                    <li>Arrange yellow flowers, turmeric, gold items</li>
                                    <li>Set up havan kund facing North</li>
                                    <li>Keep money, jewelry, or business documents nearby for energization</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles to wealth</li>
                                    <li><strong>Lakshmi Invocation:</strong> Invoke Goddess Lakshmi first</li>
                                    <li><strong>Kuber Invocation:</strong> Call Lord Kuber with specific mantras</li>
                                    <li><strong>Kuber Mantra Jaap:</strong> "Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye Dhanadhanyasamriddhim Me Dehi Dapaya Swaha" 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> Offer 108 ahutis with yellow flowers, turmeric, and ghee</li>
                                    <li><strong>Vault/Safe Energization:</strong> Place money or valuables near fire for blessing</li>
                                    <li><strong>Purnahuti:</strong> Final offering with gold or yellow cloth</li>
                                    <li><strong>Kuber Aarti:</strong> Conclude with devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Powerful Kuber Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Beej Mantra:</strong> "Om Shreem Om Hreem Shreem Hreem Kleem Shreem Kleem Vitteshvaraya Namah"</li>
                                        <li><strong>Maha Mantra:</strong> "Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye Dhanadhanyasamriddhim Me Dehi Dapaya Swaha"</li>
                                        <li><strong>Simple Mantra:</strong> "Om Kuberaya Namah"</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-md my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Post-Havan Practices</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Chant Kuber mantra 108 times daily</li>
                                    <li>Keep North direction clean and clutter-free</li>
                                    <li>Place Kuber Yantra in cash box or safe</li>
                                    <li>Light lamp in North direction every evening</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Wealth Consciousness Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Maintain organized accounts and records</li>
                                    <li>Save a fixed percentage of income monthly</li>
                                    <li>Avoid wasteful spending and show-off</li>
                                    <li>Respect money - keep wallet and cash clean</li>
                                    <li>Donate 10% to maintain wealth flow</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Vastu for Wealth Retention</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Keep North direction heavy (safe, cupboard)</li>
                                    <li>Avoid toilets in North or Northeast</li>
                                    <li>Place water feature in North for wealth flow</li>
                                    <li>Keep entrance well-lit and welcoming</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Kuber Havan</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Why should I worship Kuber if I already worship Lakshmi?", a: "Lakshmi and Kuber serve different but complementary roles in wealth creation. Lakshmi attracts new wealth and opportunities - she brings money IN. Kuber retains and multiplies existing wealth - he keeps money FROM GOING OUT. Many people earn well but can't save because they worship only Lakshmi without Kuber. For complete prosperity, worship both: Lakshmi for income and Kuber for savings. Think of Lakshmi as the tap that brings water and Kuber as the tank that stores it. You need both for continuous supply." },
                                        { q: "When is the best time for Kuber Havan?", a: "Most auspicious times: (1) Dhanteras and Diwali (wealth festivals), (2) Akshaya Tritiya (never-diminishing day), (3) Thursdays (Jupiter's day for expansion), (4) Purnima in Kartik month, (5) During favorable Jupiter transits, (6) Before major financial decisions or investments, (7) When installing new safe or vault. Perform in morning hours, preferably during Abhijit Muhurat (noon). The North direction should be clean and energized before the havan." },
                                        { q: "Can Kuber Havan help if I earn well but can't save?", a: "Absolutely! This is the classic sign of weak Kuber energy. You have good Lakshmi (income) but poor Kuber (retention). Kuber Havan specifically addresses this by: (1) Plugging money leakages, (2) Reducing unnecessary expenses, (3) Creating savings discipline, (4) Protecting from theft and losses, (5) Granting financial wisdom. After the havan, you'll notice: reduced impulse spending, better investment decisions, unexpected savings, and ability to say no to wasteful expenses. Combine with practical budgeting and savings habits." },
                                        { q: "Should I perform Kuber Havan at home or business?", a: "Ideally both, but if choosing one: For salaried people: Perform at home in North direction for personal wealth retention. For business owners: Perform at office/shop, especially near cash counter or safe. For investors: Perform where you keep financial documents. Many successful businesspeople perform Kuber Havan at both locations - home for family prosperity and office for business wealth. The havan energizes the space, making it a wealth magnet and protector." },
                                        { q: "What should I do with money/jewelry during Kuber Havan?", a: "Place money, jewelry, business documents, or financial instruments near the havan kund (at safe distance from fire) during the ritual. This energizes them with Kuber's blessings. After havan: (1) Keep some energized coins in cash box permanently, (2) Wear energized jewelry on auspicious occasions, (3) Store energized money in safe as 'seed wealth', (4) Keep energized Kuber Yantra in vault. Never spend the seed money - it attracts more wealth. Replace it annually during next Kuber Havan." },
                                        { q: "Can Kuber Havan help in getting loans or clearing debts?", a: "Kuber Havan works differently for loans vs debts: For getting loans: Yes, it helps by: (1) Attracting favorable loan terms, (2) Bringing helpful bankers/lenders, (3) Ensuring loan approval. For clearing debts: Extremely effective by: (1) Creating unexpected income sources, (2) Bringing lump sum amounts, (3) Granting wisdom to prioritize debt repayment, (4) Preventing new debts. However, also take practical steps: create debt repayment plan, avoid new loans, cut unnecessary expenses. Kuber opens doors but you must walk through them." },
                                        { q: "What donations should be made after Kuber Havan?", a: "Kuber-pleasing donations: (1) Feed Brahmins with yellow sweets and turmeric, (2) Donate yellow cloth, turmeric, and gold items to temples, (3) Support education for poor children (Jupiter/Kuber connection), (4) Give to genuine spiritual seekers and sadhus, (5) Donate to cow shelters (cows represent wealth), (6) Help poor families with food and essentials, (7) Support libraries or knowledge centers. The key: Donate regularly but wisely. Kuber appreciates intelligent giving, not wasteful charity. Give 10% of income for maintaining wealth flow." },
                                        { q: "How long do Kuber Havan benefits last?", a: "Benefits timeline: (1) Immediate (1-2 weeks): Feel more conscious about money, reduced wasteful spending, (2) Short-term (1-3 months): Noticeable savings increase, better financial decisions, (3) Medium-term (3-6 months): Significant wealth accumulation, investment growth, (4) Long-term (6-12 months): Established wealth retention habits, generational prosperity. To maintain benefits: (1) Daily Kuber mantra, (2) Keep North direction clean, (3) Regular savings discipline, (4) Annual havan on Dhanteras or Akshaya Tritiya, (5) Respect and organize money. One havan creates the energy, but your habits determine longevity." },
                                        { q: "Can I keep Kuber Yantra at home after the havan?", a: "Yes, highly recommended! Kuber Yantra is a sacred geometric diagram that attracts and retains wealth. After havan: (1) Place energized Kuber Yantra in North direction of home, (2) Keep in cash box, safe, or vault, (3) Install in office near cash counter, (4) Worship daily with incense and flowers. The Yantra works 24/7 to attract wealth and prevent losses. Clean it weekly, re-energize monthly with Kuber mantras. Many wealthy families have Kuber Yantra in their homes for generations, passing down the prosperity energy." },
                                        { q: "What precautions should be taken during and after Kuber Havan?", a: "Important precautions: (1) Before havan: Clean North direction thoroughly; remove clutter; avoid alcohol, non-veg for 3 days; organize finances and accounts, (2) During havan: Maintain abundance mindset; don't think about poverty or lack; focus on gratitude for existing wealth, (3) After havan: Don't waste prasad; distribute to family and poor; continue fasting until sunset, (4) For 40 days: Daily Kuber mantra; maintain savings discipline; avoid wasteful expenses; keep accounts organized, (5) Long-term: Respect money; avoid showing off wealth; maintain humility; regular charity. Kuber blesses the wise and humble but leaves the arrogant and wasteful." }
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
                                        <p className="text-gold-100 text-sm mb-4">For Wealth Retention</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Kuber%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Kuber Havan" />
            <Footer />
        </>
    )
}
