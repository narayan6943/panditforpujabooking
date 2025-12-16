import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SaraswatiHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Saraswati Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Saraswati Havan in Pune. Enhance knowledge, education, creativity. Expert pandits for Goddess Saraswati fire ritual.',
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
                <title>Saraswati Havan in Pune – Knowledge & Education Fire Ritual</title>
                <meta name="description" content="Book Saraswati Havan in Pune. Enhance knowledge, education, creativity & arts. Expert pandits for Goddess Saraswati fire ritual. Academic success." />
                <meta name="keywords" content="Saraswati Havan Pune, Education Fire Ritual, Knowledge Puja, Saraswati Homam, Student Success" />
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
                            <span className="text-maroon-900 font-semibold">Saraswati Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Knowledge & Wisdom</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Saraswati Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Education</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Goddess Saraswati through powerful fire ritual. Enhance knowledge, excel in education, boost creativity, and achieve academic success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Saraswati Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Saraswati%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Saraswati Havan</strong> is a sacred Vedic fire ritual dedicated to Goddess Saraswati, the deity of knowledge, wisdom, learning, music, and arts. This powerful ceremony enhances intellectual abilities, ensures academic success, boosts creativity, and grants mastery in education and arts.</p>

                                <h2 className="text-3xl font-bold mt-8">Goddess Saraswati - The Divine Mother of Knowledge</h2>
                                <p>Goddess Saraswati is the consort of Lord Brahma and represents the creative power of knowledge. She is depicted in pure white attire, seated on a white lotus, holding a veena (musical instrument), book, and mala (rosary). Her white color symbolizes purity of knowledge.</p>

                                <p>According to Vedic texts, Saraswati is the goddess of Vak (speech), Vidya (knowledge), and Kala (arts). She flows like a river, bringing the waters of wisdom to quench the thirst of seekers.</p>

                                <h3 className="text-2xl font-bold mt-6">Saraswati's Symbols</h3>
                                <ul>
                                    <li><strong>Veena:</strong> Mastery over arts and harmony</li>
                                    <li><strong>Book:</strong> Knowledge and learning</li>
                                    <li><strong>Mala:</strong> Meditation and spiritual knowledge</li>
                                    <li><strong>White Lotus:</strong> Purity and enlightenment</li>
                                    <li><strong>Swan:</strong> Discrimination between good and bad</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Saraswati Havan</h2>
                                <ul>
                                    <li><strong>Academic Excellence:</strong> Success in exams and studies</li>
                                    <li><strong>Enhanced Memory:</strong> Better retention and recall</li>
                                    <li><strong>Creative Abilities:</strong> Excellence in music, arts, writing</li>
                                    <li><strong>Speech Improvement:</strong> Eloquence and communication skills</li>
                                    <li><strong>Concentration:</strong> Focus and mental clarity</li>
                                    <li><strong>Career Success:</strong> Growth in education-related professions</li>
                                    <li><strong>Spiritual Wisdom:</strong> Understanding of scriptures</li>
                                    <li><strong>Mercury Strength:</strong> Improves Mercury in horoscope</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Saraswati Havan</h2>
                                <ul>
                                    <li><strong>Vasant Panchami:</strong> Saraswati's birthday (most auspicious)</li>
                                    <li><strong>Before Exams:</strong> For academic success</li>
                                    <li><strong>Wednesdays:</strong> Mercury's day (knowledge planet)</li>
                                    <li><strong>Navratri:</strong> Especially during Durga Puja</li>
                                    <li><strong>New Academic Year:</strong> Before starting school/college</li>
                                    <li><strong>Learning Difficulties:</strong> When facing study problems</li>
                                    <li><strong>Career Launch:</strong> Starting teaching or creative profession</li>
                                    <li><strong>Weak Mercury:</strong> When Mercury is afflicted in horoscope</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Saraswati Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Saraswati Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete Saraswati worship with 108 ahutis and knowledge mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Vidya Prapti Maha Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with Saraswati Stotra, 1008 ahutis, and book energization.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Saraswati Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Wear white or yellow clothes</li>
                                    <li>Keep study books and instruments near puja area</li>
                                    <li>Arrange white flowers, fruits, sweets</li>
                                    <li>Set up havan kund facing East</li>
                                    <li>Maintain sattvic diet</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove learning obstacles</li>
                                    <li><strong>Saraswati Invocation:</strong> "Om Aim Saraswatyai Namah"</li>
                                    <li><strong>Saraswati Vandana:</strong> Recite prayers</li>
                                    <li><strong>Mantra Jaap:</strong> Chant 108 or 1008 times</li>
                                    <li><strong>Havan:</strong> 108 ahutis with white flowers</li>
                                    <li><strong>Book Worship:</strong> Place books near fire for blessing</li>
                                    <li><strong>Purnahuti:</strong> Final offering</li>
                                    <li><strong>Saraswati Aarti:</strong> Devotional songs</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Saraswati Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Beej Mantra:</strong> "Om Aim Saraswatyai Namah"</li>
                                        <li><strong>Gayatri:</strong> "Om Saraswatyai Vidmahe, Brahmaputryai Dhimahi, Tanno Devi Prachodayat"</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chant Saraswati mantra daily before studies</li>
                                    <li>Keep study area clean and organized</li>
                                    <li>Read for at least 30 minutes daily</li>
                                    <li>Respect books and teachers</li>
                                    <li>Practice your art/skill regularly</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Knowledge & Success</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Saraswati%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Saraswati Havan" />
            <Footer />
        </>
    )
}
