import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SaraswatiStotraPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Saraswati Stotra Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Saraswati Stotra Paath in Pune. Recitation for education, arts, music, and wisdom. Ideal for students and artists. Expert pandits.',
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
                <title>Saraswati Stotra Paath in Pune – Wisdom & Education</title>
                <meta name="description" content="Book Saraswati Stotra Paath in Pune. Invoke Goddess of Knowledge for success in exams, arts, and music. Powerful memory and concentration booster. ₹1,500 onwards." />
                <meta name="keywords" content="Saraswati Stotra Paath Pune, Saraswati Puja for Students, Education Puja, Arts and Music Success, Wisdom Mantra" />
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
                            <span className="text-maroon-900 font-semibold">Saraswati Stotra Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Aim Saraswatyai Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Saraswati Stotra Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">For Knowledge, Arts & Wisdom</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Sharada Mata, the bestower of knowledge. Perfect for students, musicians, artists, and seekers of truth. Enhance memory, focus, and creativity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Saraswati Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Saraswati%20Stotra%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Goddess Saraswati</strong> is the embodiment of knowledge, music, arts, and speech. Without Her grace, intelligence (Buddhi) remains dormant.</p>
                                <p>The <strong>Saraswati Stotra Paath</strong> involves the recitation of powerful hymns like the <em>Saraswati Suktam</em>, <em>Medha  Suktam</em>, or the <em>Saraswati Stotram</em> from the Puranas. It acts as a divine booster for the brain, clearing confusion and sharpening the intellect.</p>

                                <h2 className="text-3xl font-bold mt-8">Significance of the Stotra</h2>
                                <p>Ancient sages recited these stotras to attain "Vak Siddhi" (power of speech) and "Smriti Shakti" (power of memory). It aligns the devotee's mind with the cosmic frequency of learning. The 'Veena' she holds represents the harmony of life, and the 'Book' represents true knowledge.</p>

                                <h2 className="text-3xl font-bold mt-8">Who Should Perform This?</h2>
                                <ul>
                                    <li><strong>Students:</strong> Especially those facing board exams, competitive exams (UPSC, NEET, JEE), or struggling with concentration.</li>
                                    <li><strong>Artists & Musicians:</strong> Dancers, singers, and painters seek Her blessing for "Manodharma" (creativity).</li>
                                    <li><strong>Speakers & Teachers:</strong> For eloquence and clarity of speech.</li>
                                    <li><strong>Children:</strong> To begin their education journey (Vidyarambham).</li>
                                    <li><strong>Professionals:</strong> For skill development and quick learning.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Hymn: Ya Kundendu</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Ya Kundendu Tushara Hara Dhavala..."
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "She who is as fair as the jasmine flower, the moon, and the snow... May that Goddess Saraswati protect me and remove my lethargy (Jadyam)."
                                    </p>
                                </div>
                                <p>This verse specifically asks for the removal of 'Jadyam'—dullness or sluggishness of the mind.</p>

                                <h2 className="text-3xl font-bold mt-8">Types of Paath</h2>
                                <ul>
                                    <li><strong>Saraswati Sahasranama:</strong> 1000 names recitation for deep knowledge.</li>
                                    <li><strong>Medha Suktam:</strong> Vedic hymn specifically for memory and intelligence.</li>
                                    <li><strong>Laghu Stotra:</strong> Short & sweet recitation for daily focus.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Vasant Panchami:</strong> The birthday of Goddess Saraswati (Spring Festival).</li>
                                    <li><strong>Navratri (Moola Nakshatra):</strong> The 7th-9th days of Navratri are dedicated to Her.</li>
                                    <li><strong>Thursdays (Guruwar):</strong> Good for education.</li>
                                    <li><strong>Exam Days:</strong> On the morning of important exams.</li>
                                    <li><strong>Wednesdays:</strong> Ruled by Mercury (Budh), the planet of intellect.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Saraswati Stotra Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Student Blessing Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹1,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Saraswati Stotram + Medha Suktam.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1 Hour</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ 'Pen & Book' Puja</li>
                                            <li>✓ Saraswati Raksha Thread</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Saraswati Mahayagya</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Sahasranama Paath + Saraswati Havan.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ Full Day Ritual</li>
                                            <li>✓ Honey & Ghee Havan</li>
                                            <li>✓ Energized Saraswati Yantra</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Offering Knowledge</h3>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><strong>Pustak Puja:</strong> Books, pens, musical instruments, or laptops are placed at the altar.</li>
                                    <li><strong>White Theme:</strong> White flowers, white clothes, and white sandalwood (Chandan) are favored.</li>
                                    <li><strong>Honey Offering:</strong> Honey is offered as it represents the "sweetness" of speech and memory.</li>
                                    <li><strong>Recitation:</strong> Chanting the chosen Stotra with focus on the Agnya Chakra (Third Eye).</li>
                                    <li><strong>Prasad:</strong> Coconut and white sweets are distributed.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can this Paath guarantee exam success?</h3>
                                <p>It guarantees the removal of mental blocks, anxiety, and improves memory. This "divine luck" combined with your hard work ensures the best possible result.</p>

                                <h3 className="text-xl font-bold mt-4">2. Is it helpful for speech delay in kids?</h3>
                                <p>Yes, many parents perform the "Vagvadini" Saraswati Puja for children with speech issues. The vibration of the mantras stimulates the throat chakra.</p>

                                <h3 className="text-xl font-bold mt-4">3. Which direction should I face?</h3>
                                <p>East or North are the best directions for learning and Saraswati puja.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I keep my musical instrument?</h3>
                                <p>Absolutely. Musicians should place their instruments (Ghungroo, Veena, Guitar, etc.) to be blessed during the puja.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is the Beeja Mantra?</h3>
                                <p>"Aim" (pronounced 'Aym') is the seed sound of Saraswati. Chanting "Om Aim Saraswatyai Namah" is simple yet powerful.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can adults perform this?</h3>
                                <p>Yes, learning never ends. Professionals learning new technologies or skills also benefit greatly.</p>

                                <h3 className="text-xl font-bold mt-4">7. Is fasting required?</h3>
                                <p>A light stomach aids concentration. Avoid heavy meals before the puja.</p>

                                <h3 className="text-xl font-bold mt-4">8. What is Medha Suktam?</h3>
                                <p>It is a specific Vedic prayer to the deity of "Retention Power" (Medha). It is often recited along with Saraswati Stotra.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can we do it online?</h3>
                                <p>Yes, the student can sit at home with their books while our pandits chant the mantras. The energy transfer works through Sankalp.</p>

                                <h3 className="text-xl font-bold mt-4">10. Do you provide a Yantra?</h3>
                                <p>For the Mahayagya package, we provide a copper Saraswati Yantra to be kept on the study table.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Wisdom Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Aim Saraswatyai Namah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹1,500+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Saraswati%20Stotra%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Saraswati Stotra Paath" />
            <Footer />
        </>
    )
}
