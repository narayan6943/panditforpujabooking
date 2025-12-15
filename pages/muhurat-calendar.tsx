import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'

import { generateEventSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schemas'

export default function MuhuratCalendarPage() {
    // Generate Global Schemas
    const orgSchema = generateOrganizationSchema()
    const localBusinessSchema = generateLocalBusinessSchema()

    // Generate Event Schemas for Major Festivals (Example)
    const ganeshChaturthiEvent = generateEventSchema({
        name: 'Ganesh Chaturthi Puja 2026',
        description: 'Grand Ganesh Chaturthi Puja Service in Pune. Book expert pandits for Ganesh Sthapana.',
        startDate: '2026-08-27T09:00:00+05:30',
        endDate: '2026-08-27T12:00:00+05:30',
        location: {
            name: 'Pandit For Puja Booking Pune',
            address: 'Pune, Maharashtra'
        },
        image: 'https://panditforpujabooking.com/images/ganesh-chaturthi.jpg'
    })

    const diwaliEvent = generateEventSchema({
        name: 'Diwali Lakshmi Puja 2026',
        description: 'Auspicious Diwali Lakshmi Puja service for home and office in Pune.',
        startDate: '2026-10-21T18:00:00+05:30',
        endDate: '2026-10-21T21:00:00+05:30',
        location: {
            name: 'Pandit For Puja Booking Pune',
            address: 'Pune, Maharashtra'
        },
        image: 'https://panditforpujabooking.com/images/diwali-puja.jpg'
    })



    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Muhurat Calendar 2026-2027 Pune - Auspicious Dates & Pandit Booking',
        description: 'Complete Muhurat Calendar 2026-2027 for Pune. Find auspicious dates for marriage, Griha Pravesh, business opening, puja ceremonies.',
        provider: {
            '@type': 'LocalBusiness',
            name: 'PanditForPujaBooking.com',
            telephone: '+91-8446272142',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
            },
        },
    }

    return (
        <>
            <Head>
                <title>Muhurat Calendar 2026-2027 Pune | Shubh Muhurat Dates & Pandit Booking</title>
                <meta name="description" content="Complete Muhurat Calendar 2026-2027 for Pune - Auspicious dates for marriage, Griha Pravesh, business opening, puja. Book expert pandits for all muhurats. Hindu calendar with shubh muhurat timings." />
                <meta name="keywords" content="muhurat calendar 2026 pune, muhurat calendar 2027 pune, shubh muhurat, auspicious dates pune, marriage muhurat, griha pravesh muhurat, pandit booking pune, hindu calendar 2026, hindu calendar 2027, wedding dates pune, panchang pune, muhurat consultation" />
                <link rel="canonical" href="https://panditforpujabooking.com/muhurat-calendar" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, ganeshChaturthiEvent, diwaliEvent, orgSchema, localBusinessSchema]) }}
                />
            </Head>

            <Header />

            <main className="bg-gradient-to-b from-saffron-50/20 to-white">
                {/* HERO SECTION */}
                <section className="relative bg-maroon-900 text-white py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-6 py-2">
                                <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Complete 2026-2027 Calendar</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-md">
                                Muhurat Calendar 2026-2027
                                <br />
                                <span className="text-gold-400">Pune - Shubh Muhurat Dates</span>
                            </h1>
                            <p className="text-xl text-gold-100/90 max-w-3xl mx-auto leading-relaxed">
                                Find the most auspicious dates for all your important life events in 2026 and 2027. From weddings to Griha Pravesh, business openings to puja ceremonies - get expert muhurat consultation and book verified pandits in Pune.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                                <a href="tel:+918446272142">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold shadow-lg shadow-gold-500/20" href="tel:+918446272142">
                                        Book Pandit Now
                                    </Button>
                                </a>
                                <a href="https://wa.me/918446272142?text=I%20need%20muhurat%20consultation" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                        Get Muhurat Consultation
                                    </Button>
                                </a>
                            </div>
                            <p className="text-sm text-gold-300 flex items-center gap-4 justify-center flex-wrap">
                                <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Expert Astrologers</span>
                                <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Personalized Muhurat</span>
                                <span className="flex items-center gap-2"><span className="text-green-400">✓</span> All Pune Areas</span>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-16">
                    <div className="max-w-7xl mx-auto">

                        {/* INTRODUCTION */}
                        <section className="prose prose-lg max-w-none mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6">What is Muhurat? Understanding Auspicious Timings</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Muhurat</strong> (also spelled Muhurt, Mahurat, or Shubh Muhurat) is an auspicious time period in Hindu Vedic astrology when the planetary positions, lunar phases, and cosmic energies align favorably for conducting important ceremonies, rituals, and life events. In Pune's rich cultural tradition, choosing the right muhurat is considered essential for ensuring success, prosperity, and divine blessings in any new beginning.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The concept of muhurat is deeply rooted in the ancient science of <strong>Panchang</strong> (Hindu almanac), which considers five key elements: <strong>Tithi</strong> (lunar day), <strong>Vara</strong> (weekday), <strong>Nakshatra</strong> (constellation), <strong>Yoga</strong> (planetary combination), and <strong>Karana</strong> (half of tithi). When these elements align harmoniously, they create a powerful window of time that amplifies positive energies and minimizes obstacles.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    For Pune residents planning weddings, Griha Pravesh (housewarming), business inaugurations, or any significant puja ceremony, consulting an expert pandit for muhurat selection ensures that your important moments are blessed with cosmic support. Our experienced pandits in Pune provide personalized muhurat consultation based on your individual horoscope, ensuring maximum auspiciousness for your specific situation.
                                </p>
                            </div>
                        </section>

                        {/* WHY MUHURAT MATTERS */}
                        <section className="mb-16">
                            <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-8 text-center">Why Muhurat Selection Matters in Pune</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-maroon-50 to-white p-8 rounded-xl shadow-md border border-maroon-100">
                                    <div className="text-5xl mb-4">🌟</div>
                                    <h3 className="text-xl font-bold text-maroon-900 mb-3">Divine Blessings</h3>
                                    <p className="text-gray-700">Starting important events during auspicious muhurat invokes divine grace and ensures smooth completion without obstacles. The cosmic energies support your endeavors.</p>
                                </div>
                                <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-md border border-gold-100">
                                    <div className="text-5xl mb-4">✨</div>
                                    <h3 className="text-xl font-bold text-maroon-900 mb-3">Success & Prosperity</h3>
                                    <p className="text-gray-700">Vedic astrology confirms that actions performed during favorable planetary positions yield better results, bringing long-term success and prosperity.</p>
                                </div>
                                <div className="bg-gradient-to-br from-saffron-50 to-white p-8 rounded-xl shadow-md border border-saffron-100">
                                    <div className="text-5xl mb-4">🛡️</div>
                                    <h3 className="text-xl font-bold text-maroon-900 mb-3">Protection from Doshas</h3>
                                    <p className="text-gray-700">Proper muhurat selection helps avoid inauspicious periods (Rahu Kaal, Panchak, eclipses) that can create obstacles and negative influences.</p>
                                </div>
                            </div>
                        </section>

                        {/* MARRIAGE MUHURAT 2026 */}
                        <section id="marriage-muhurat" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">💍</span> Marriage Muhurat 2026 Pune - Wedding Dates
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Planning your wedding in Pune? Choosing the right <strong>marriage muhurat</strong> (vivah muhurat) is one of the most important decisions for ensuring a blessed and harmonious married life. Our expert pandits analyze your horoscopes (Kundli matching) along with the panchang to find the most auspicious wedding dates that align with both bride and groom's birth charts.
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">January 2026 - Wedding Muhurats</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>January 24-26</strong> (Magh month - highly auspicious for North Indian weddings)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>January 30-31</strong> (Excellent for evening ceremonies)</li>
                                            </ul>
                                            <p className="text-sm text-gray-600 mt-4 italic">Book marriage pandit in Pune: Call +91-8446272142</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">February 2026 - Shubh Vivah Muhurat</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>February 2-3</strong> (Phalguna month begins - auspicious)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>February 6-7</strong> (Vasant Panchami period - very favorable)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>February 19-21</strong> (Pre-Holi auspicious dates)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">April 2026 - Peak Wedding Season</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 21-23</strong> (Post-Ram Navami auspicious period)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 27-30</strong> (Akshaya Tritiya on April 30 - most auspicious)</li>
                                            </ul>
                                            <p className="text-sm text-maroon-700 mt-4 bg-gold-50 p-3 rounded border-l-4 border-gold-400">
                                                <strong>Note:</strong> Akshaya Tritiya (April 20, 2026) is considered the most auspicious day of the year. No muhurat needed - the entire day is blessed. Book your wedding pandit early!
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">May 2026 - Summer Wedding Dates</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 1-2</strong> (Extended Akshaya Tritiya period)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 7-9</strong> (Jyeshtha month - favorable nakshatras)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 14-16</strong> (Buddha Purnima period)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 21-23</strong> (Mid-month auspicious dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 28-30</strong> (Month-end favorable period)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">June 2026 - Pre-Monsoon Weddings</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>June 4-6</strong> (Early June favorable dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>June 11-13</strong> (Vat Purnima period - auspicious)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>June 25-27</strong> (Last favorable dates before monsoon)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">November 2026 - Peak Wedding Season Returns</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 5-7</strong> (Kartik Purnima period - highly auspicious)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 12-14</strong> (Tulsi Vivah period - favorable for marriages)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 19-21</strong> (Mid-month excellent dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 24-28</strong> (Extended auspicious period)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">December 2026 - Year-End Weddings</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>December 1-5</strong> (Margashirsha month - highly favorable)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>December 10-12</strong> (Mid-month auspicious dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>December 17-19</strong> (Pre-Christmas wedding dates)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Marriage Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Get personalized marriage muhurat based on bride and groom's Kundli. Our expert pandits provide complete wedding ceremony services including Kanyadaan, Saptapadi, and all Vedic rituals.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call +91-8446272142</Button>
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20need%20marriage%20muhurat%20consultation" target="_blank" rel="noopener noreferrer">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">WhatsApp for Muhurat</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* GRIHA PRAVESH MUHURAT 2026 */}
                        <section id="griha-pravesh-muhurat" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">🏠</span> Griha Pravesh Muhurat 2026 - Housewarming Dates Pune
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    <strong>Griha Pravesh</strong> (house warming ceremony) is one of the most important rituals when moving into a new home. The right muhurat ensures that positive energies, prosperity, and peace enter your home along with you. For Pune residents buying new flats in Hinjewadi, Wakad, Baner, Kharadi, or any area, selecting an auspicious Griha Pravesh muhurat with expert pandit consultation is essential.
                                </p>

                                <div className="bg-saffron-50 p-6 rounded-lg mb-8 border-l-4 border-saffron-500">
                                    <h4 className="font-bold text-maroon-900 mb-2">Best Months for Griha Pravesh 2026</h4>
                                    <p className="text-gray-700">March, April, May, June, October, November, December</p>
                                    <p className="text-sm text-gray-600 mt-2 italic">Avoid: July-September (Monsoon & Shravan month), Adhik Maas, Eclipse periods</p>
                                </div>

                                <div className="space-y-8">
                                    {/* March 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">March 2026 - Griha Pravesh Muhurats</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>March 14</strong> (Holi Purnima - very auspicious for new beginnings)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>March 21, 24, 28</strong> (Favorable nakshatras - Rohini, Uttara Phalguni)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* April 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">April 2026 - Peak Griha Pravesh Season</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 1, 4, 8, 11</strong> (Early month auspicious dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 14</strong> (Baisakhi - highly favorable for North Indians)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 18, 22, 25</strong> (Mid-month excellent dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>April 30</strong> (Akshaya Tritiya - most auspicious, no muhurat needed)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* May 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">May 2026 - Summer Housewarming Dates</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 2, 6, 9, 13</strong> (Early May favorable dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>May 16, 20, 23, 27</strong> (Mid to late May auspicious period)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* June 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">June 2026 - Pre-Monsoon Griha Pravesh</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>June 3, 6, 10, 13</strong> (Early June dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>June 17, 20, 24, 27</strong> (Last favorable dates before monsoon)</li>
                                            </ul>
                                            <p className="text-sm text-gray-600 mt-4 italic">Plan early as June is the last month before monsoon season</p>
                                        </div>
                                    </div>

                                    {/* October 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">October 2026 - Post-Monsoon Peak Season</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>October 2</strong> (Dussehra - victory over evil, excellent for new beginnings)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>October 8, 12, 15</strong> (Mid-month auspicious dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>October 20</strong> (Dhanteras - wealth and prosperity)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>October 21</strong> (Diwali - most popular for Griha Pravesh)</li>
                                            </ul>
                                            <p className="text-sm text-maroon-700 mt-4 bg-gold-50 p-3 rounded border-l-4 border-gold-400">
                                                <strong>High Demand Alert:</strong> October (Diwali period) sees maximum bookings. Book your Griha Pravesh pandit 3-4 weeks in advance!
                                            </p>
                                        </div>
                                    </div>

                                    {/* November 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">November 2026 - Extended Auspicious Period</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 1, 5, 8, 12</strong> (Early November favorable dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>November 15, 19, 22, 26</strong> (Mid to late November auspicious period)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* December 2025 */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">December 2026 - Year-End Housewarming</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>December 3, 6, 10, 13</strong> (Early December dates)</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>December 17, 20, 24</strong> (Pre-Christmas favorable dates)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Griha Pravesh Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Complete Griha Pravesh puja with Vastu Shanti, Ganesh Puja, and Havan. Serving all Pune areas: Hinjewadi, Wakad, Baner, Kharadi, Viman Nagar, Hadapsar, Kothrud, and more.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/puja-services/griha-pravesh-puja">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">View Griha Pravesh Details</Button>
                                        </Link>
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call for Booking</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* BUSINESS OPENING MUHURAT 2026 */}
                        <section id="business-muhurat" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">🏢</span> Business Opening Muhurat 2026 - Shop & Office Inauguration Pune
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Starting a new business, opening a shop, or inaugurating an office in Pune? The right <strong>business opening muhurat</strong> (shop opening muhurat, office inauguration muhurat) ensures prosperity, success, and steady growth. Our expert pandits in Pune perform complete business opening puja including Ganesh Puja, Lakshmi Puja, and Vastu Shanti for your commercial space.
                                </p>

                                <div className="bg-gold-50 p-6 rounded-lg mb-8 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 mb-3 text-xl">Most Auspicious Business Opening Dates 2026</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold text-xl">★</span> <strong>April 20, 2026</strong> - Akshaya Tritiya (Most auspicious - entire day is blessed)</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold text-xl">★</span> <strong>October 29-30, 2026</strong> - Dhanteras & Diwali (Peak business opening season)</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold text-xl">★</span> <strong>November 24, 2026</strong> - Kartik Purnima (Highly favorable for commerce)</li>
                                    </ul>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">January 2026 - New Year Business Launch</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>Favorable Dates:</strong> January 15, 24, 29</p>
                                            <p className="text-sm text-gray-600">Start the year with divine blessings. Book office opening pandit in Pune for complete inauguration ceremony.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">February 2026 - Pre-Spring Business Muhurats</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>Favorable Dates:</strong> February 7, 13, 20</p>
                                            <p className="text-sm text-gray-600">Vasant Panchami period brings fresh energy - excellent for new ventures in Pune's IT hubs like Hinjewadi and Kharadi.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">March 2026 - Spring Season Business Opening</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>Favorable Dates:</strong> March 14, 21, 28</p>
                                            <p className="text-sm text-gray-600">Holi Purnima (March 14) is especially auspicious for retail shops and showrooms.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">April 2026 - Peak Business Inauguration Month</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>Favorable Dates:</strong> April 4, 11, 18, 25, <strong className="text-maroon-900">20 (Akshaya Tritiya)</strong></p>
                                            <p className="text-sm text-maroon-700 bg-gold-50 p-3 rounded border-l-4 border-gold-400 mt-3">
                                                <strong>Akshaya Tritiya (April 20, 2026):</strong> The most auspicious day for starting any business. "Akshaya" means "never diminishing" - businesses started on this day are believed to grow perpetually. No specific muhurat needed - entire day is blessed!
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">May - June 2026 - Summer Business Launch</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>May:</strong> 7, 14, 21, 28</p>
                                            <p className="text-gray-700 mb-3"><strong>June:</strong> 4, 11, 18, 25</p>
                                            <p className="text-sm text-gray-600">Good for IT companies, startups, and service-based businesses in Pune.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">October 2026 - Diwali Season (Peak Demand)</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>Favorable Dates:</strong> October 2, 9, 16, <strong className="text-maroon-900">29 (Dhanteras), 30 (Diwali)</strong>, 31</p>
                                            <p className="text-sm text-maroon-700 bg-gold-50 p-3 rounded border-l-4 border-gold-400 mt-3">
                                                <strong>High Demand Alert:</strong> Dhanteras and Diwali are the most popular days for business openings across India. Book your pandit 3-4 weeks in advance for Pune locations!
                                            </p>
                                            <ul className="space-y-2 text-gray-700 mt-4">
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>Dhanteras (Oct 29):</strong> Best for jewelry shops, gold businesses, financial services</li>
                                                <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>Diwali (Oct 30):</strong> Universal auspicious day for all types of businesses</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">November - December 2026 - Year-End Business Launch</h3>
                                        <div className="bg-maroon-50 p-6 rounded-lg">
                                            <p className="text-gray-700 mb-3"><strong>November:</strong> 6, 13, 20, 27</p>
                                            <p className="text-gray-700 mb-3"><strong>December:</strong> 4, 11, 18, 25</p>
                                            <p className="text-sm text-gray-600">Excellent for planning 2026 business launches with proper Vastu setup.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Business Opening Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Complete business inauguration puja with Ganesh Puja, Lakshmi Puja, Vastu Shanti, and Havan. Serving offices and shops across Pune: Hinjewadi IT Park, Magarpatta, Kharadi EON, Baner, Wakad, Viman Nagar, and all commercial areas.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/puja-services/office-opening-puja">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Office Opening Puja Details</Button>
                                        </Link>
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call +91-8446272142</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* VEHICLE PURCHASE MUHURAT 2026 */}
                        <section id="vehicle-muhurat" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">🚗</span> Vehicle Purchase Muhurat 2026 - Car & Bike Buying Dates Pune
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Buying a new car, bike, or any vehicle in Pune? Choosing an auspicious <strong>vehicle purchase muhurat</strong> ensures safety, longevity, and accident-free journeys. Our pandits also perform <strong>vehicle puja</strong> (car puja, bike puja) with Ganesh Puja and protection mantras for your new vehicle.
                                </p>

                                <div className="bg-saffron-50 p-6 rounded-lg mb-8 border-l-4 border-saffron-500">
                                    <h4 className="font-bold text-maroon-900 mb-2">Best Days for Vehicle Purchase</h4>
                                    <p className="text-gray-700"><strong>Thursdays and Fridays</strong> during waxing moon (Shukla Paksha) are most favorable</p>
                                    <p className="text-sm text-gray-600 mt-2">Avoid: Tuesdays (Mars day - accidents), Saturdays (Saturn day - delays), Amavasya, eclipses</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">January 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 10, 17, 24, 31 (Thursdays/Fridays)</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">February 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 7, 14, 21, 28</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">March 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 7, 14, 21, 28</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">April 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 4, 11, 18, 25, <strong className="text-maroon-900">20 (Akshaya Tritiya)</strong></p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">May 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 2, 9, 16, 23, 30</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">June 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 6, 13, 20, 27</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">October 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 3, 10, 17, 24, 31 (Diwali season - very popular)</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">November 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 7, 14, 21, 28</p>
                                    </div>
                                    <div className="bg-maroon-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-maroon-900 mb-3">December 2026</h4>
                                        <p className="text-gray-700"><strong>Favorable Dates:</strong> 5, 12, 19, 26</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-gold-50 to-saffron-50 p-6 rounded-xl border border-gold-200 mb-6">
                                    <h4 className="font-bold text-maroon-900 mb-3 text-lg">Vehicle Puja Service in Pune</h4>
                                    <p className="text-gray-700 mb-3">After purchasing your vehicle, perform a complete vehicle puja for protection and blessings:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> Ganesh Puja for obstacle removal</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> Navagraha Puja for planetary blessings</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> Protection mantras and coconut breaking</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> Tilak on vehicle and driver</li>
                                    </ul>
                                    <p className="text-sm text-gray-600 mt-4 italic">Vehicle puja can be performed at your home, showroom, or our pandit can visit anywhere in Pune</p>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Vehicle Puja Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Complete vehicle puja service with all rituals. Pandit will visit your location across Pune with all puja materials.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call +91-8446272142</Button>
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20need%20vehicle%20puja%20in%20Pune" target="_blank" rel="noopener noreferrer">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">WhatsApp for Booking</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SATYANARAYAN PUJA MUHURAT 2026 */}
                        <section id="satyanarayan-muhurat" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">🙏</span> Satyanarayan Puja Muhurat 2026 - Purnima Dates Pune
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    <strong>Satyanarayan Puja</strong> is one of the most popular and beneficial pujas performed by Hindu families for prosperity, peace, and fulfillment of wishes. Traditionally performed on <strong>Purnima</strong> (full moon day) or <strong>Ekadashi</strong>, this puja dedicated to Lord Vishnu brings divine blessings to your home. Book experienced Satyanarayan puja pandits in Pune for authentic Vedic rituals.
                                </p>

                                <div className="bg-gold-50 p-6 rounded-lg mb-8 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 mb-3 text-xl">When to Perform Satyanarayan Puja?</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>Purnima (Full Moon)</strong> - Most auspicious</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> <strong>Ekadashi</strong> (11th lunar day) - Highly favorable</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> After Griha Pravesh, marriage, childbirth, or any achievement</li>
                                        <li className="flex items-start gap-3"><span className="text-gold-600 font-bold">✦</span> On birthdays, anniversaries, or special occasions</li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-maroon-800 mb-4 border-l-4 border-gold-500 pl-4">Purnima Dates 2026 - Complete List</h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">January 13 - Paush Purnima</h4>
                                            <p className="text-sm text-gray-700">Auspicious for starting new ventures and family puja</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">February 12 - Magha Purnima</h4>
                                            <p className="text-sm text-gray-700">Sacred for ancestral blessings and charity</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">March 14 - Holi Purnima</h4>
                                            <p className="text-sm text-gray-700">Highly auspicious - Holi festival day</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">April 13 - Chaitra Purnima</h4>
                                            <p className="text-sm text-gray-700">Hanuman Jayanti - very powerful for puja</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">May 12 - Buddha Purnima</h4>
                                            <p className="text-sm text-gray-700">Most sacred Purnima - Buddha's birth anniversary</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">June 11 - Vat Purnima</h4>
                                            <p className="text-sm text-gray-700">Special for married women's prayers</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">July 10 - Guru Purnima</h4>
                                            <p className="text-sm text-gray-700">Honoring teachers and gurus - highly auspicious</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">August 9 - Shravan Purnima</h4>
                                            <p className="text-sm text-gray-700">Raksha Bandhan - sacred month of Shravan</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">September 7 - Bhadrapada Purnima</h4>
                                            <p className="text-sm text-gray-700">Auspicious for Satyanarayan Puja</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">October 6 - Sharad Purnima</h4>
                                            <p className="text-sm text-gray-700">Most beautiful Purnima - Lakshmi blessings</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">November 5 - Kartik Purnima</h4>
                                            <p className="text-sm text-gray-700">Dev Diwali - extremely auspicious</p>
                                        </div>
                                        <div className="bg-maroon-50 p-5 rounded-lg border-l-4 border-maroon-500">
                                            <h4 className="font-bold text-maroon-900 mb-2">December 4 - Margashirsha Purnima</h4>
                                            <p className="text-sm text-gray-700">Year-end blessings and gratitude puja</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Satyanarayan Puja Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Complete Satyanarayan Puja with Katha recitation, all rituals, and prasad preparation. Duration: 2-3 hours. Available across all Pune areas.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/puja-services/satyanarayan-puja">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Satyanarayan Puja Details</Button>
                                        </Link>
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call for Booking</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* MAJOR HINDU FESTIVALS 2026 */}
                        <section id="festivals-2026" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6 flex items-center gap-3">
                                    <span className="text-5xl">🎉</span> Major Hindu Festivals 2026 - Puja Calendar Pune
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Complete list of major Hindu festivals in 2026 for Pune. Book pandits for festival pujas, special ceremonies, and traditional rituals. Our experienced pandits perform authentic Vedic pujas for all festivals with proper mantras and rituals.
                                </p>

                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🪔</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Makar Sankranti</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">January 14, 2025</p>
                                            <p className="text-sm text-gray-700">Harvest festival, kite flying, tilgul distribution. Book pandit for Sankranti puja.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🕉️</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Maha Shivratri</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">February 26, 2025</p>
                                            <p className="text-sm text-gray-700">Night-long Shiva worship, Rudrabhishek. Book Shivratri puja pandit in Pune.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">🎨</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Holi</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">March 14, 2025</p>
                                            <p className="text-sm text-gray-700">Festival of colors, Holika Dahan. Purnima puja available.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🏹</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Ram Navami</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">April 6, 2025</p>
                                            <p className="text-sm text-gray-700">Lord Rama's birth anniversary. Ram Navami puja with Ramayana recitation.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🐒</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Hanuman Jayanti</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">April 13, 2025</p>
                                            <p className="text-sm text-gray-700">Hanuman's birth celebration. Hanuman Chalisa path and puja.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Akshaya Tritiya</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">April 30, 2025</p>
                                            <p className="text-sm text-gray-700">Most auspicious day - no muhurat needed. Gold purchase, weddings, business opening.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🧘</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Buddha Purnima</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">May 12, 2025</p>
                                            <p className="text-sm text-gray-700">Buddha's birth, enlightenment, and nirvana. Sacred Purnima.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">👨‍🏫</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Guru Purnima</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">July 10, 2025</p>
                                            <p className="text-sm text-gray-700">Honoring teachers and gurus. Guru puja and gratitude rituals.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">🐍</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Nag Panchami</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">August 1, 2025</p>
                                            <p className="text-sm text-gray-700">Serpent worship. Nag Puja for Kaal Sarp Dosh and protection.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🧵</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Raksha Bandhan</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">August 9, 2025</p>
                                            <p className="text-sm text-gray-700">Brother-sister bond. Shravan Purnima - auspicious for Satyanarayan Puja.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🦚</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Janmashtami</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">August 16, 2025</p>
                                            <p className="text-sm text-gray-700">Krishna's birth. Midnight puja, dahi handi. Book Janmashtami pandit.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">🐘</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Ganesh Chaturthi</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">August 27, 2025</p>
                                            <p className="text-sm text-gray-700">Pune's biggest festival! Ganesh Sthapana puja, 10-day celebration.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🕯️</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Pitru Paksha</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">September 7-21, 2025</p>
                                            <p className="text-sm text-gray-700">Ancestral fortnight. Shraddh puja, tarpan for departed souls.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🗡️</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Navratri</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">September 22 - October 1, 2025</p>
                                            <p className="text-sm text-gray-700">9 nights of Goddess worship. Navdurga puja, Kanya Pujan.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">🏹</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Dussehra</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">October 2, 2025</p>
                                            <p className="text-sm text-gray-700">Victory of good over evil. Auspicious for new beginnings.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">💎</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Dhanteras</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">October 20, 2025</p>
                                            <p className="text-sm text-gray-700">Wealth worship. Lakshmi puja, gold purchase, business opening.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🪔</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Diwali</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">October 21, 2025</p>
                                            <p className="text-sm text-gray-700">Festival of lights. Lakshmi Puja, Griha Pravesh, business opening.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">👫</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Bhai Dooj</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">October 23, 2025</p>
                                            <p className="text-sm text-gray-700">Brother-sister bond. Tilak ceremony and blessings.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-xl shadow-md border border-saffron-100">
                                            <div className="text-3xl mb-3">🌅</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Chhath Puja</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">October 27, 2025</p>
                                            <p className="text-sm text-gray-700">Sun worship. Popular in North Indian communities in Pune.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-md border border-maroon-100">
                                            <div className="text-3xl mb-3">🌕</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Kartik Purnima</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">November 5, 2025</p>
                                            <p className="text-sm text-gray-700">Dev Diwali. Most sacred Purnima - highly auspicious for all pujas.</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl shadow-md border border-gold-100">
                                            <div className="text-3xl mb-3">🌿</div>
                                            <h4 className="font-bold text-maroon-900 mb-2">Tulsi Vivah</h4>
                                            <p className="text-lg text-maroon-700 font-semibold mb-2">November 12, 2025</p>
                                            <p className="text-sm text-gray-700">Tulsi plant marriage. Auspicious for weddings to begin.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">Book Festival Puja Pandit in Pune</h4>
                                    <p className="text-gold-100 mb-4">Expert pandits available for all festival pujas across Pune. Traditional rituals, proper mantras, complete puja materials provided.</p>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Call +91-8446272142</Button>
                                        </a>
                                        <Link href="/puja-services">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">View All Puja Services</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2027 MUHURAT CALENDAR SECTION */}
                        <section id="muhurat-2027" className="mb-16">
                            <div className="bg-gradient-to-r from-gold-900 to-maroon-900 text-white rounded-3xl shadow-2xl p-8 md:p-12">
                                <div className="text-center mb-12">
                                    <div className="inline-block bg-gold-500/20 border border-gold-400/50 rounded-full px-6 py-2 mb-4">
                                        <span className="text-gold-300 text-sm font-semibold tracking-wide uppercase">Plan Ahead</span>
                                    </div>
                                    <h2 className="text-5xl font-serif font-bold mb-4">Muhurat Calendar 2027 - Pune</h2>
                                    <p className="text-xl text-gold-100 max-w-3xl mx-auto">
                                        Start planning your 2027 ceremonies now! Get early muhurat dates for weddings, Griha Pravesh, and business openings.
                                    </p>
                                </div>

                                {/* Marriage Muhurat 2027 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                                    <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">💍</span> Marriage Muhurat 2027 - Wedding Dates Pune
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">January 2027</h4>
                                            <p className="text-gold-100">Favorable Dates: 14-16, 21-23, 28-30</p>
                                            <p className="text-sm text-gold-200 mt-2">Magh month - auspicious for North Indian weddings</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">February 2027</h4>
                                            <p className="text-gold-100">Favorable Dates: 4-6, 11-13, 18-20</p>
                                            <p className="text-sm text-gold-200 mt-2">Phalguna month begins - very favorable</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">April 2027</h4>
                                            <p className="text-gold-100">Favorable Dates: 8-10, 15-17, <strong className="text-gold-300">21 (Akshaya Tritiya)</strong>, 24-26</p>
                                            <p className="text-sm text-gold-200 mt-2">Peak wedding season with Akshaya Tritiya</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">May 2026</h4>
                                            <p className="text-gold-100">Favorable Dates: 7-9, 14-16, 21-23, 28-30</p>
                                            <p className="text-sm text-gold-200 mt-2">Extended wedding season - multiple auspicious dates</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">June 2026</h4>
                                            <p className="text-gold-100">Favorable Dates: 4-6, 11-13, 18-20, 25-27</p>
                                            <p className="text-sm text-gold-200 mt-2">Pre-monsoon wedding dates</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">November 2026</h4>
                                            <p className="text-gold-100">Favorable Dates: 12-14, 19-21, 26-28</p>
                                            <p className="text-sm text-gold-200 mt-2">Post-Diwali wedding season returns</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-xl mb-3">December 2026</h4>
                                            <p className="text-gold-100">Favorable Dates: 3-5, 10-12, 17-19, 24-26</p>
                                            <p className="text-sm text-gold-200 mt-2">Year-end wedding season - book early!</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 bg-gold-500/20 p-4 rounded-lg border border-gold-400/30">
                                        <p className="text-gold-100 text-sm">
                                            <strong>Note:</strong> Akshaya Tritiya 2027 falls on April 21 - the most auspicious day for weddings. Book your pandit 4-6 months in advance!
                                        </p>
                                    </div>
                                </div>

                                {/* Griha Pravesh Muhurat 2026 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                                    <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">🏠</span> Griha Pravesh Muhurat 2027 - Housewarming Pune
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">March 2026</h4>
                                            <p className="text-gold-100 text-sm">March 5, 12, 19, 26</p>
                                            <p className="text-xs text-gold-200 mt-2">Spring season begins - excellent for new homes</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">April 2026</h4>
                                            <p className="text-gold-100 text-sm">April 2, 9, 16, <strong>20 (Akshaya Tritiya)</strong>, 23</p>
                                            <p className="text-xs text-gold-200 mt-2">Peak Griha Pravesh season</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">May 2026</h4>
                                            <p className="text-gold-100 text-sm">May 7, 14, 21, 28</p>
                                            <p className="text-xs text-gold-200 mt-2">Summer housewarming dates</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">June 2026</h4>
                                            <p className="text-gold-100 text-sm">June 4, 11, 18, 25</p>
                                            <p className="text-xs text-gold-200 mt-2">Last dates before monsoon</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">October 2026</h4>
                                            <p className="text-gold-100 text-sm">Oct 8 (Dussehra), 15, 22, <strong>29 (Dhanteras)</strong></p>
                                            <p className="text-xs text-gold-200 mt-2">Post-monsoon peak season</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">November 2026</h4>
                                            <p className="text-gold-100 text-sm">Nov 5, 12, 19, <strong>24 (Kartik Purnima)</strong></p>
                                            <p className="text-xs text-gold-200 mt-2">Highly auspicious period</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-gold-300 text-lg mb-3">December 2026</h4>
                                            <p className="text-gold-100 text-sm">Dec 3, 10, 17, 24, 31</p>
                                            <p className="text-xs text-gold-200 mt-2">Year-end housewarming</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Opening & Other Muhurats 2026 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                                    <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">🏢</span> Business Opening & Other Muhurats 2026
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-white/10 p-5 rounded-xl">
                                            <h4 className="font-bold text-gold-300 mb-2">Business Opening - Most Auspicious Dates</h4>
                                            <ul className="space-y-2 text-gold-100 text-sm">
                                                <li className="flex items-start gap-2"><span className="text-gold-400">★</span> <strong>April 20, 2026</strong> - Akshaya Tritiya (Most powerful)</li>
                                                <li className="flex items-start gap-2"><span className="text-gold-400">★</span> <strong>October 29, 2026</strong> - Dhanteras</li>
                                                <li className="flex items-start gap-2"><span className="text-gold-400">★</span> <strong>October 30, 2026</strong> - Diwali</li>
                                                <li className="flex items-start gap-2"><span className="text-gold-400">★</span> <strong>November 24, 2026</strong> - Kartik Purnima</li>
                                            </ul>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white/10 p-5 rounded-xl">
                                                <h4 className="font-bold text-gold-300 mb-2">Vehicle Purchase 2026</h4>
                                                <p className="text-gold-100 text-sm">Best days: Thursdays & Fridays during waxing moon</p>
                                                <p className="text-xs text-gold-200 mt-2">Akshaya Tritiya (April 20) - no muhurat needed</p>
                                            </div>
                                            <div className="bg-white/10 p-5 rounded-xl">
                                                <h4 className="font-bold text-gold-300 mb-2">Property Purchase 2026</h4>
                                                <p className="text-gold-100 text-sm">Favorable months: March-June, October-December</p>
                                                <p className="text-xs text-gold-200 mt-2">Consult pandit for personalized muhurat</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Major Festivals 2026 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                    <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">🎉</span> Major Hindu Festivals 2026 - Pune
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Makar Sankranti</h5>
                                            <p className="text-gold-100 text-sm">January 14, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Maha Shivratri</h5>
                                            <p className="text-gold-100 text-sm">February 17, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Holi</h5>
                                            <p className="text-gold-100 text-sm">March 4, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Ram Navami</h5>
                                            <p className="text-gold-100 text-sm">March 27, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Hanuman Jayanti</h5>
                                            <p className="text-gold-100 text-sm">April 3, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Akshaya Tritiya</h5>
                                            <p className="text-gold-100 text-sm font-bold">April 20, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Buddha Purnima</h5>
                                            <p className="text-gold-100 text-sm">May 1, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Guru Purnima</h5>
                                            <p className="text-gold-100 text-sm">June 30, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Raksha Bandhan</h5>
                                            <p className="text-gold-100 text-sm">August 28, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Janmashtami</h5>
                                            <p className="text-gold-100 text-sm">September 4, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Ganesh Chaturthi</h5>
                                            <p className="text-gold-100 text-sm">September 15, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Navratri</h5>
                                            <p className="text-gold-100 text-sm">October 11-19, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Dussehra</h5>
                                            <p className="text-gold-100 text-sm">October 20, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Dhanteras</h5>
                                            <p className="text-gold-100 text-sm">October 29, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Diwali</h5>
                                            <p className="text-gold-100 text-sm font-bold">October 30, 2026</p>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h5 className="font-bold text-gold-300 mb-1">Kartik Purnima</h5>
                                            <p className="text-gold-100 text-sm">November 24, 2026</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-gold-100 mb-6 text-lg">
                                        Planning ceremonies for 2026? Book your muhurat consultation and pandit now for early bird benefits!
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold">
                                                📞 Call for 2026 Booking
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20need%202026%20muhurat%20consultation" target="_blank" rel="noopener noreferrer">
                                            <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold">
                                                💬 WhatsApp for 2027 Dates
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* COMPREHENSIVE FAQ SECTION */}
                        <section id="muhurat-faqs" className="mb-16">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-8 text-center">Frequently Asked Questions - Muhurat Calendar 2026-2027 Pune</h2>

                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "What is the difference between Muhurat and Panchang?",
                                            a: "Panchang is the Hindu almanac that lists all astronomical and astrological data including Tithi, Nakshatra, Yoga, Karana, and Vara for each day. Muhurat is a specific auspicious time period derived from the Panchang when planetary positions are favorable for conducting ceremonies. Think of Panchang as the calendar and Muhurat as the best time slots within that calendar."
                                        },
                                        {
                                            q: "Can I perform puja without consulting muhurat?",
                                            a: "Yes, you can perform regular daily pujas anytime. However, for major life events like marriage, Griha Pravesh, business opening, or vehicle purchase, consulting muhurat is highly recommended as it ensures cosmic support and minimizes obstacles. Some days like Akshaya Tritiya don't require specific muhurat as the entire day is auspicious."
                                        },
                                        {
                                            q: "How much advance booking is needed for muhurat-based puja in Pune?",
                                            a: "For regular muhurats: 1-2 weeks advance booking is sufficient. For peak seasons (Diwali, wedding season in November-December, Akshaya Tritiya): book 3-4 weeks in advance. For personalized muhurat consultation based on your horoscope: contact our astrologers at least 2 weeks before your planned date."
                                        },
                                        {
                                            q: "Do online muhurat calendars work for Pune specifically?",
                                            a: "Generic online muhurat calendars may not account for Pune's specific geographical coordinates and local time zone. For accurate muhurat, consult an expert astrologer who calculates based on Pune's latitude/longitude (18.5204° N, 73.8567° E). Our pandits provide Pune-specific muhurat calculations."
                                        },
                                        {
                                            q: "What if my preferred date has no good muhurat?",
                                            a: "Our expert pandits can find suitable time windows even on challenging dates by using Abhijit Muhurat (a universally auspicious 48-minute window around noon) or by analyzing your personal horoscope to find compatible timings. Alternatively, we can suggest nearby dates with better muhurats."
                                        },
                                        {
                                            q: "Are muhurat timings strict? What if we start 10 minutes late?",
                                            a: "Muhurat timings should be followed as closely as possible. The puja should ideally begin within the muhurat window. Our pandits arrive 30 minutes early to set up, ensuring the main rituals start precisely at the muhurat time. Minor delays of 5-10 minutes are acceptable, but significant delays should be avoided."
                                        },
                                        {
                                            q: "Can muhurat be calculated for any ceremony?",
                                            a: "Yes! Muhurat can be calculated for virtually any auspicious occasion: marriage, Griha Pravesh, business opening, vehicle purchase, property purchase, Naamkaran (naming ceremony), Mundan (first haircut), Upanayana (thread ceremony), surgery dates, travel, and even starting education. Our astrologers provide personalized muhurat for all occasions."
                                        },
                                        {
                                            q: "What information is needed for personalized muhurat?",
                                            a: "For personalized muhurat calculation, provide: (1) Birth details of the main person(s) - date, exact time, and place of birth, (2) Type of ceremony, (3) Preferred month/date range, (4) Any specific requirements or constraints. Our astrologers will analyze your horoscope and suggest the most compatible muhurat."
                                        },
                                        {
                                            q: "Why are some months avoided for Griha Pravesh and weddings?",
                                            a: "Certain periods are traditionally avoided: (1) Monsoon months (July-September) due to Shravan month restrictions and practical weather concerns, (2) Adhik Maas (extra lunar month occurring every 3 years), (3) Kharamaas, (4) Eclipse periods, (5) Pitru Paksha (ancestral fortnight). These periods are considered inauspicious for new beginnings but are fine for regular pujas."
                                        },
                                        {
                                            q: "What is Abhijit Muhurat and when does it occur?",
                                            a: "Abhijit Muhurat is a universally auspicious 48-minute period that occurs daily around noon (approximately 11:30 AM to 12:18 PM in Pune, varies slightly by season). It's considered so powerful that it can override other inauspicious factors. It's especially useful when you can't find a good muhurat on your required date."
                                        },
                                        {
                                            q: "How much do pandit services cost for muhurat-based pujas in Pune?",
                                            a: "Pandit charges vary by puja type and duration: Basic pujas (Satyanarayan, Ganesh): ₹1,500-₹2,500. Griha Pravesh with Vastu Shanti: ₹3,500-₹7,100. Business opening puja: ₹2,500-₹5,100. Wedding ceremonies: ₹11,000-₹51,000. Muhurat consultation only: ₹500-₹1,500. Prices include pandit dakshina; puja samagri can be arranged separately."
                                        },
                                        {
                                            q: "Do you provide pandits for all areas of Pune?",
                                            a: "Yes! We serve all Pune areas including: Hinjewadi (Phase 1, 2, 3), Wakad, Baner, Balewadi, Aundh, Kothrud, Deccan, Shivajinagar, Koregaon Park, Viman Nagar, Kharadi, Hadapsar, Magarpatta, Undri, Kondhwa, Katraj, Warje, Sinhagad Road, and entire PCMC (Pimpri Chinchwad, Akurdi, Nigdi, Chakan, Talegaon). No extra travel charges within Pune limits."
                                        },
                                        {
                                            q: "Can pandits perform puja in Marathi, Hindi, or English?",
                                            a: "Yes! We have pandits fluent in multiple languages: (1) Marathi-speaking Gurujis for traditional Maharashtrian families, (2) Hindi-speaking North Indian pandits for North Indian rituals, (3) Sanskrit mantras with English explanations for NRI families and modern households. Specify your language preference when booking."
                                        },
                                        {
                                            q: "What is the cancellation policy for booked muhurats?",
                                            a: "Cancellation more than 7 days before muhurat: Full refund of advance. Cancellation 3-7 days before: 50% refund. Cancellation less than 3 days: No refund (as pandit has blocked that muhurat). Rescheduling to another muhurat: Allowed once without charges if done 5+ days in advance. Emergency situations are handled case-by-case."
                                        },
                                        {
                                            q: "Are there muhurats for medical procedures like surgery?",
                                            a: "Yes, many people consult astrologers for surgery dates and medical procedure timings. However, medical urgency always takes priority over muhurat. For planned elective surgeries, our astrologers can suggest favorable dates considering your horoscope. Emergency medical situations should never be delayed for muhurat."
                                        },
                                        {
                                            q: "What is Rahu Kaal and should I avoid it?",
                                            a: "Rahu Kaal is a daily inauspicious 90-minute period ruled by Rahu (shadow planet). Timings vary by day in Pune: Monday (7:30-9:00 AM), Tuesday (3:00-4:30 PM), Wednesday (12:00-1:30 PM), Thursday (1:30-3:00 PM), Friday (10:30-12:00 PM), Saturday (9:00-10:30 AM), Sunday (4:30-6:00 PM). Avoid starting new ventures during Rahu Kaal, but ongoing activities can continue."
                                        },
                                        {
                                            q: "Can I book same-day pandit for urgent muhurat?",
                                            a: "Yes, we offer same-day pandit booking for urgent requirements, subject to availability. Call +91-8446272142 before 10 AM for same-day service. However, for specific muhurats (especially during peak seasons), advance booking is strongly recommended as pandits get fully booked."
                                        },
                                        {
                                            q: "Do you provide puja samagri or should I arrange it?",
                                            a: "We offer both options: (1) Full-service package: We bring all puja samagri - convenient but slightly more expensive, (2) DIY option: We provide detailed samagri list, you purchase items - economical option. Most Pune clients prefer our full-service package to avoid hassle. Samagri cost ranges from ₹500-₹3,000 depending on puja type."
                                        },
                                        {
                                            q: "What is the significance of Akshaya Tritiya for business and weddings?",
                                            a: "Akshaya Tritiya (April 30, 2025) is considered the most auspicious day in the Hindu calendar. 'Akshaya' means 'never diminishing' - anything started on this day is believed to grow perpetually. No muhurat calculation needed - the entire day from sunrise to sunset is blessed. Ideal for: weddings, business opening, property purchase, gold buying, vehicle purchase, and any new beginning."
                                        },
                                        {
                                            q: "How do I know if my pandit is qualified and experienced?",
                                            a: "All our pandits are: (1) Graduates from recognized Vedic Pathshalas, (2) Minimum 10+ years of experience, (3) Background verified with references, (4) Rated 4.5+ stars by previous clients, (5) Knowledgeable in Vedic scriptures and able to explain rituals. We provide pandit's profile and reviews before booking confirmation."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-gradient-to-r from-maroon-50 to-white p-6 rounded-xl shadow-sm border border-maroon-100 hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-maroon-900 text-lg mb-3 flex items-start gap-3">
                                                <span className="text-gold-600 text-xl">Q:</span>
                                                <span>{faq.q}</span>
                                            </h4>
                                            <p className="text-gray-700 pl-8 leading-relaxed">
                                                <strong className="text-maroon-700">A:</strong> {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* PANDIT BOOKING CTA SECTION */}
                        <section className="mb-16">
                            <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Expert Pandit for Any Muhurat in Pune</h2>
                                <p className="text-xl text-gold-100 mb-6 max-w-3xl mx-auto">
                                    Get personalized muhurat consultation and book verified, experienced pandits for all your ceremonies. Serving entire Pune with authentic Vedic rituals.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                        <div className="text-4xl mb-3">✓</div>
                                        <h4 className="font-bold text-gold-300 mb-2">Expert Astrologers</h4>
                                        <p className="text-sm text-gold-100">Personalized muhurat based on your horoscope and Pune's panchang</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                        <div className="text-4xl mb-3">✓</div>
                                        <h4 className="font-bold text-gold-300 mb-2">Verified Pandits</h4>
                                        <p className="text-sm text-gold-100">10+ years experience, background checked, 4.9★ rated</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                        <div className="text-4xl mb-3">✓</div>
                                        <h4 className="font-bold text-gold-300 mb-2">All Pune Areas</h4>
                                        <p className="text-sm text-gold-100">Hinjewadi, Wakad, Baner, Kharadi, Viman Nagar, Hadapsar & more</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+918446272142">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold text-lg px-8">
                                            📞 Call +91-8446272142
                                        </Button>
                                    </a>
                                    <a href="https://wa.me/918446272142?text=I%20need%20muhurat%20consultation%20and%20pandit%20booking" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-bold text-lg px-8">
                                            💬 WhatsApp Us
                                        </Button>
                                    </a>
                                </div>
                                <p className="text-sm text-gold-200 mt-6">
                                    ⏰ Available 7 Days a Week | 🔒 100% Satisfaction Guarantee | 💯 Transparent Pricing
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
