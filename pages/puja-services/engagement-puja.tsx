import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function EngagementPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Engagement Puja / Sagai Ceremony',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Auspicous Engagement Puja (Sagai) in Pune. Book certified pandits for Ring Ceremony, Roka, and Sakhar Puda. Complete ritual guidance, Samagri, and Muhurat included.',
        serviceType: 'Hindu Engagement Ceremony',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Engagement Puja in Pune' },
        { id: 'importance', title: 'Importance' },
        { id: 'types', title: 'Types of Puja' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'cost', title: 'Cost & Packages' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Engagement Puja in Pune – Perform Auspicious Sagai Ceremony</title>
                <meta name="description" content="Book certified Pandit for Engagement Puja (Sagai) in Pune. Vedic rituals for Ring Ceremony, Roka, and Sakhar Puda. Includes Samagri, Muhurat 2026, and detailed Vidhi." />
                <meta name="keywords" content="Engagement Puja Pune, Sagai Puja Pandit, Ring Ceremony Pune, Sakhar Puda Rituals, Roka Ceremony Pandit, Vedic Engagement Vidhi" />
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
                            <span className="text-maroon-900 font-semibold">Engagement Puja</span>
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
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Engagement Puja - Sagai Ceremony"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Sagai & Ring Ceremony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Engagement Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Perform Auspicious Sagai with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Start your marital journey with divine blessings. Authentic Vedic Engagement Puja (Sagai/Sakhar Puda) performed by experienced Pandits in Pune.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Engagement Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Engagement%20Puja" target="_blank" rel="noopener noreferrer">
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

                            {/* Intro Section */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p>
                                    In Indian culture, every milestone of a person’s life is marked by sacred rituals designed to invite divine blessings and strengthen emotional connections. One such ceremony that holds immense spiritual and cultural significance is the <strong>Engagement Puja</strong>, also known as <strong>Sagai Puja</strong>. This ritual is not merely a formal event preceding marriage; it is a sacred covenant between two families, a symbolic uniting of destinies under divine guidance.
                                </p>
                                <p>
                                    In modern Pune—where tradition meets contemporary lifestyles—the Engagement Puja continues to be performed with devotion, authenticity, and joyful celebration. From luxurious apartments in <strong>Kothrud</strong>, <strong>Baner</strong>, <strong>Wakad</strong>, and <strong>Kharadi</strong> to sprawling family homes in <strong>Hadapsar</strong>, countless families rely on <strong>certified Vedic pandits</strong> to ensure every ritual aligns with authentic <strong>sanatan dharma</strong> principles.
                                </p>
                                <p>
                                    Experienced pandits help perform this puja with <strong>complete samagri</strong>, personalized <strong>muhurat selection</strong>, and devotion so that every ceremony resonates with spiritual energy and auspiciousness. Whether families are native Punekars, NRIs returning home for the engagement, or professionals settled in Pune’s tech hubs, performing the <strong>Engagement Puja</strong> correctly blesses the journey toward marriage—infusing it with purity, harmony, and prosperity.
                                </p>

                                <h3 className="text-2xl font-bold mt-8">What is Engagement Puja?</h3>
                                <h4>The Sacred Beginning of a Union</h4>
                                <p>
                                    The Engagement Puja, or Sagai Puja, represents the spiritual acknowledgment of the relationship between two individuals and their families. It is not simply a precursor to marriage—it&#39;s an invocation of blessings for a long, harmonious, and loving life together. Before the official ring exchange or formal announcement, this puja invokes <strong>Lord Ganesha</strong> (the remover of obstacles), <strong>Goddess Parvati</strong> (symbol of marital bliss), and the <strong>kuldevatas</strong> or ancestral deities to bless the couple’s new chapter.
                                </p>
                                <p>
                                    According to the <strong>Vedas and Puranas</strong>, any important venture or relationship should begin with sacred purification and blessings. The Engagement Puja ensures that both families align their energies and intentions before the wedding, removing karmic impurities and invoking good fortune.
                                </p>

                                <h4>Occasions When It Is Performed</h4>
                                <ul className="list-disc pl-5">
                                    <li>Formal engagement between families.</li>
                                    <li>Blessing ritual before the wedding announcement.</li>
                                    <li>Combined engagement and pre-wedding ceremonies.</li>
                                    <li>In arranged marriages as a traditional family introduction.</li>
                                </ul>
                            </section>

                            {/* Importance */}
                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Importance of Engagement Puja</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                    <div className="bg-white p-5 rounded-xl border-l-4 border-maroon-600 shadow-sm">
                                        <h4 className="text-lg font-bold text-maroon-800 mb-2">Spiritual & Emotional Harmony</h4>
                                        <p className="text-gray-700 text-sm">The engagement ceremony marks the foundation of the marital relationship. Through Vedic rituals, it purifies negative energies and enhances the spiritual vibration of both partners. Invoking the divine ensures the relationship begins in harmony, setting the tone for love, trust, and respect.</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border-l-4 border-saffron-500 shadow-sm">
                                        <h4 className="text-lg font-bold text-maroon-800 mb-2">Astrological Balance</h4>
                                        <p className="text-gray-700 text-sm">Vedic astrology emphasizes the influence of planetary alignments on marriages. Performing an Engagement Puja helps mitigate doshas (astrological imbalances), ensuring that the union aligns with cosmic harmony.</p>
                                    </div>
                                </div>

                                <h4>Reasons Families in Pune Choose Engagement Puja</h4>
                                <ul className="list-disc pl-5">
                                    <li>Ensures a blessed start to the marital journey.</li>
                                    <li>Invokes divine power to eliminate obstacles.</li>
                                    <li>Promotes understanding, affection, and prosperity.</li>
                                    <li>Aligns traditional faith with modern celebration.</li>
                                    <li>Strengthens family bonds through joint participation.</li>
                                </ul>
                            </section>

                            {/* Types of Puja */}
                            <section id="types" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Types of Engagement Puja</h2>
                                <p>Each family in Pune has unique cultural roots and ceremonial preferences. Based on those, pandits offer different variations of Sagai Puja while ensuring Vedic authenticity.</p>

                                <div className="space-y-4 not-prose">
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-2">1. Traditional Engagement Puja</h3>
                                        <p className="text-gray-700 text-sm">Performed according to ancient scriptures, this puja includes full Vedic chanting, Ganesha invocation, kalash sthapana, offering to ancestors, and ring exchange under sacred guidance. Traditional households prefer this version where every mantra follows the <strong>Rigveda</strong> and <strong>Atharvaveda</strong> practices.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-2">2. Modern Engagement Puja</h3>
                                        <p className="text-gray-700 text-sm">Urban families often blend spirituality with aesthetics. In such ceremonies, rituals are simplified without losing sanctity. Pandits perform key mantras for Ganesh and Lakshmi blessings while incorporating personalized elements like music, storytelling, or family blessings. Perfect for apartment societies in <strong>Baner</strong> or <strong>Kharadi</strong>.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-2">3. Combined Engagement and Pre-Wedding Puja</h3>
                                        <p className="text-gray-700 text-sm">Some families opt to perform Engagement Puja alongside <strong>Vastu Shanti</strong> or <strong>Lakshmi Puja</strong> for holistic blessings before wedding preparations begin. It ensures divine grace on the couple’s future home, health, and wealth.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">ॐ</span>
                                    Step-by-Step Engagement Puja Vidhi
                                </h2>
                                <ol className="list-decimal pl-5 space-y-4">
                                    <li>
                                        <strong>Pre-Puja Preparation:</strong> Before beginning, the area must be cleaned and decorated to invite positive vibrations. A yellow or red altar cloth is placed, along with handmade rangoli, torans, and fresh flowers. The bride and groom wear traditional attire—usually pastel or auspicious colors like gold, red, or yellow.
                                    </li>
                                    <li>
                                        <strong>Ganesh Puja:</strong> All Vedic rituals begin with a prayer to Lord Ganesha. The pandit chants Ganapati mantras to eliminate negativity and obstacles in the couple’s path. Lighting of diyas signifies the awakening of divine consciousness.
                                    </li>
                                    <li>
                                        <strong>Kalash Sthapana:</strong> A <strong>kalash</strong>, symbolizing creation and abundance, is established with mango leaves, sacred water, and a coconut atop it. The kalash represents <strong>Lord Vishnu</strong> and is considered the seat of all prosperity and peace.
                                    </li>
                                    <li>
                                        <strong>Sankalp:</strong> The families take a vow (sankalp) before the deities, stating the intention and purpose of the ritual. The names of the couple, tithi, nakshatra, and location are recited.
                                    </li>
                                    <li>
                                        <strong>Engagement Ritual:</strong> Under the pandit’s guidance, both families exchange verbal blessings, moral promises, and rings or gifts between the couple. The ritual marks acceptance of the bond and future union. Mantras for mutual prosperity and protection are chanted.
                                    </li>
                                    <li>
                                        <strong>Aarti and Prasad:</strong> The ceremony concludes with a collective <strong>aarti</strong>, symbolizing shared joy and devotion. Sweets and fruits blessed during the puja are distributed as <strong>prasadam</strong>, signifying spiritual nourishment and happiness.
                                    </li>
                                </ol>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Engagement Puja Samagri – Detailed List</h2>
                                <p className="text-sm text-gray-700 mb-6">The success and sanctity of the puja depend on the completeness of samagri used. Each item embodies symbolic meaning and connects the physical act to divine energy.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Provided by Pandit</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li>Ganesh idol and kalash set</li>
                                            <li>Copper or steel lota</li>
                                            <li>Haldi, kumkum, chandan, akshata</li>
                                            <li>Dhoop, agarbatti, camphor, diya sets</li>
                                            <li>Flowers, garlands, and coins for offerings</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Arranged by Family</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li>Red/yellow altar cloth</li>
                                            <li>Fruits, sweets, laddoo, or dry fruits</li>
                                            <li>Coconut, betel leaves, and supari</li>
                                            <li><strong>Engagement rings</strong> or symbolic gifts</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-50 text-maroon-900 font-bold">
                                            <tr>
                                                <th className="p-3 border-b border-maroon-200">Item</th>
                                                <th className="p-3 border-b border-maroon-200">Approx. Quantity</th>
                                                <th className="p-3 border-b border-maroon-200">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Ganesh idol</td>
                                                <td className="p-3">1 set</td>
                                                <td className="p-3">Removes obstacles</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Kalash + Coconut</td>
                                                <td className="p-3">1 set</td>
                                                <td className="p-3">Represents Vishnu & Lakshmi</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Diyas</td>
                                                <td className="p-3">10–21</td>
                                                <td className="p-3">Symbol of divine light</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Flowers & Garlands</td>
                                                <td className="p-3">250–500 g</td>
                                                <td className="p-3">Decorative and devotional purpose</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Haldi, Kumkum, Chandan</td>
                                                <td className="p-3">As needed</td>
                                                <td className="p-3">Purification and holiness</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Engagement Rings</td>
                                                <td className="p-3">1 pair</td>
                                                <td className="p-3">Sign of marital promise</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Fruits & Sweets</td>
                                                <td className="p-3">500–1000 g</td>
                                                <td className="p-3">As naivedya and prasad</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Muhurats for Engagement Puja in 2026 (Pune)</h2>
                                <p>Vedic astrology considers <strong>muhurta</strong> crucial for maximizing the effectiveness of any ritual. Choosing the right date and time strengthens planetary alignment and ensures peace, success, and affection between partners.</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-maroon-50 text-maroon-900">
                                                <th className="p-3 border-b border-maroon-200">Date</th>
                                                <th className="p-3 border-b border-maroon-200">Day</th>
                                                <th className="p-3 border-b border-maroon-200">Tithi / Time</th>
                                                <th className="p-3 border-b border-maroon-200">Note</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr>
                                                <td className="p-3 border-b">14 Feb 2026</td>
                                                <td className="p-3 border-b">Saturday</td>
                                                <td className="p-3 border-b">Shukla Tritiya <br /><span className="text-xs text-gray-500">09:30–11:30 AM</span></td>
                                                <td className="p-3 border-b">Ideal for new beginnings</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border-b">25 Mar 2026</td>
                                                <td className="p-3 border-b">Wednesday</td>
                                                <td className="p-3 border-b">Shukla Ashtami <br /><span className="text-xs text-gray-500">05:00–06:30 PM</span></td>
                                                <td className="p-3 border-b">Great for family celebrations</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border-b">12 Jun 2026</td>
                                                <td className="p-3 border-b">Friday</td>
                                                <td className="p-3 border-b">Shukla Panchami <br /><span className="text-xs text-gray-500">10:00–11:30 AM</span></td>
                                                <td className="p-3 border-b">Perfect for intimate homes</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border-b">18 Oct 2026</td>
                                                <td className="p-3 border-b">Sunday</td>
                                                <td className="p-3 border-b">Shukla Saptami <br /><span className="text-xs text-gray-500">06:00–07:30 PM</span></td>
                                                <td className="p-3 border-b">Best for outdoor ceremonies</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border-b">02 Dec 2026</td>
                                                <td className="p-3 border-b">Wednesday</td>
                                                <td className="p-3 border-b">Shukla Navami <br /><span className="text-xs text-gray-500">09:00–10:30 AM</span></td>
                                                <td className="p-3 border-b">Suitable for contemporary homes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">*A pandit can also provide personalized muhurat based on janma kundali analysis for both partners.*</p>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Spiritual and Practical Benefits</h2>
                                <p>Performing an Engagement Puja offers multidimensional benefits—not just spiritual, but also psychological and emotional.</p>
                                <ul className="list-disc pl-5">
                                    <li>Enhances love, trust, and harmony between partners.</li>
                                    <li>Encourages blessings from elders, ancestors, and deities.</li>
                                    <li>Neutralizes planetary or energetic obstacles.</li>
                                    <li>Promotes financial and emotional stability.</li>
                                    <li>Brings divine protection over future marital life.</li>
                                </ul>
                                <p>Every mantra chanted purifies space, aligning both families with positive energy and celestial favor.</p>
                            </section>

                            {/* Cost Section */}
                            <section id="cost" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Engagement Puja Costs and Packages in Pune</h2>
                                <p>Families can choose from flexible, transparent packages suited for every lifestyle:</p>
                                <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-center">
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-gray-800">Home/Apartment</h3>
                                        <p className="text-sm text-gray-600 mb-4 mt-2">Ideal for small, private ceremonies.</p>
                                        <ul className="text-xs space-y-1 mb-4 text-left w-full pl-4">
                                            <li>• Ganesh Puja</li>
                                            <li>• Kalash Sthapana</li>
                                            <li>• Aarti</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-saffron-500 transform md:-translate-y-2 flex flex-col items-center relative">
                                        <div className="absolute top-0 right-0 bg-saffron-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                                        <h3 className="text-lg font-bold text-gray-800">Premium Family</h3>
                                        <p className="text-sm text-gray-600 mb-4 mt-2">Extended rituals & guest coordination.</p>
                                        <ul className="text-xs space-y-1 mb-4 text-left w-full pl-4">
                                            <li>• All Samagri Included</li>
                                            <li>• Vedic Pandit</li>
                                            <li>• Detailed Rituals</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gold-500 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-gray-800">Combined Package</h3>
                                        <p className="text-sm text-gray-600 mb-4 mt-2">Integrates Vastu/Lakshmi Puja.</p>
                                        <ul className="text-xs space-y-1 mb-4 text-left w-full pl-4">
                                            <li>• Engagement Puja</li>
                                            <li>• Holistic Prosperity</li>
                                            <li>• Pre-Wedding Blessing</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-center font-semibold text-maroon-800">Send your area, date, and requirements on WhatsApp for a personalized quote.</p>
                            </section>

                            {/* Why Choose */}
                            <section className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Why Choose Certified Pandits in Pune</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span><strong>10–20 years of experience</strong> performing sacred rituals.</span></li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span>Deep understanding of regional traditions and Sanskrit mantras.</span></li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span>Fluent in <strong>Marathi, Hindi, and English</strong>.</span></li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span>All samagri arranged and set up on time.</span></li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span>Expertise in muhurat analysis and authentic scripture adherence.</span></li>
                                    <li className="flex items-start"><span className="text-saffron-600 mr-2 font-bold">✓</span> <span>Transparent service ethics and calm conduct throughout rituals.</span></li>
                                </ul>
                                <p className="mt-4 text-sm text-gray-700 italic">With PanditforPujaBooking.com, every family enjoys peace of mind while celebrating their engagement free from logistical hassles.</p>
                            </section>

                            {/* Service Areas */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3 className="text-xl font-bold">Service Areas</h3>
                                <p>In addition to Pune, certified pandits also perform Engagement Puja across:</p>
                                <ul className="list-disc pl-5">
                                    <li>Maharashtra: <strong>Pune, Mumbai, Thane, Navi Mumbai</strong></li>
                                    <li>South India: <strong>Bengaluru, Hyderabad, Chennai</strong></li>
                                    <li>North & West India: <strong>Delhi-NCR, Noida, Jaipur, Ahmedabad</strong></li>
                                </ul>
                                <p className="text-sm">Share your location and date – our coordinators will assign a local expert pandit.</p>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions (FAQs)</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What exactly happens during the Engagement Puja?", a: "The ceremony includes Ganesh Puja, kalash sthapana, ring exchange, prayers for prosperity, and blessings from elders." },
                                        { q: "How long does it take?", a: "Typically between 1–2 hours, longer if there’s a havan or extended family speech." },
                                        { q: "Can it be done in apartments or rented homes?", a: "Yes. Sacred energy isn’t affected by property ownership; intention and devotion matter most." },
                                        { q: "Can it be combined with other pujas?", a: "Definitely. Many families combine it with Vastu Shanti or Lakshmi Puja." },
                                        { q: "Who should participate?", a: "The couple, immediate family members, and close relatives participate fully, while guests join during aarti and prasadam." },
                                        { q: "Is Havan necessary?", a: "Optional; recommended for those seeking a complete traditional experience." },
                                        { q: "Can it be done on weekends or evenings?", a: "Yes, depending on the muhurta and pandit availability." }
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

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Conclusion</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        The <strong>Engagement Puja</strong> is more than a symbolic event—it’s a sacred alignment of two souls and their destinies.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        In Pune’s dynamic setting, families cherish this blend of devotion, tradition, and modern celebration. A certified pandit ensures every mantra, offering, and prayer aligns perfectly with Vedic scriptures, bringing peace, prosperity, and enduring love. For those planning their <strong>Sagai ceremony in Pune</strong>, booking an experienced and verified pandit is the key to making it both spiritual and memorable.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Your Engagement Pandit</Button>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

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

                                {/* Contact Widget */}
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Engagement Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Complete Vidhi & Samagri</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Engagement%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Engagement Puja" />
            <Footer />
        </>
    )
}
