import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GaneshAtharvashirshaPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ganesh Atharvashirsha Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Ganesh Atharvashirsha Paath in Pune. 1000/21 recitations (Avartan) of sacred Ganesh Upanishad. Remove obstacles, gain wisdom. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '2100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Ganesh Atharvashirsha Paath in Pune – Sahasravartan & Abhishek</title>
                <meta name="description" content="Book Ganesh Atharvashirsha Paath in Pune. Perform 21 or 1000 recitations (Sahasravartan) of this powerful Upanishad. Remove obstacles, gain wisdom and success. ₹2,100 onwards." />
                <meta name="keywords" content="Ganesh Atharvashirsha Paath Pune, Ganpati Atharvashirsha, Sahasravartan, Ganesh Abhishek, Obstacle Removal, Wisdom Ritual" />
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
                            <span className="text-maroon-900 font-semibold">Ganesh Atharvashirsha Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Gam Ganapataye Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ganesh Atharvashirsha Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Ultimate Wisdom & Obstacle Removal</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Experience the power of the most sacred Ganpati Upanishad. Perform 21 or 1000 recitations (Sahasravartan) for removing deep-rooted obstacles and attaining supreme wisdom.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Atharvashirsha Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Ganesh%20Atharvashirsha%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Ganpati Atharvashirsha</strong> is a Vedic Upanishad dedicated to Lord Ganesha, forming part of the Atharva Veda. It is the definitive text on Ganesha, declaring Him as the Supreme Brahman—the creator, preserver, and destroyer of the universe. Reciting or listening to it is considered the highest form of Ganesha worship.</p>

                                <h2 className="text-3xl font-bold mt-8">Significance of Atharvashirsha</h2>
                                <p>The word 'Atharva' means unwavering or stable, and 'Shirsha' means head or intellect. Thus, 'Atharvashirsha' refers to that which grants steadiness of mind and intellect. It is believed to have been composed by Sage Atharva.</p>
                                <p>Unlike simple prayers, this is a profound philosophical text that identifies Ganesha not just as the son of Shiva and Parvati, but as the underlying reality of all existence (Tvam Brahma Tvam Vishnu Tvam Rudra...). It connects the devotee directly to the cosmic energy of Ganesha.</p>

                                <h3 className="text-2xl font-bold mt-6">Types of Recitation (Avartan)</h3>
                                <ul>
                                    <li><strong>Ekadasa Avartan:</strong> 11 recitations, usually done daily or on Chaturthi.</li>
                                    <li><strong>Eka-Vimshati Avartan:</strong> 21 recitations, a very common and auspicious practice.</li>
                                    <li><strong>Sahasravartan:</strong> 1000 recitations. This is a grand ritual, often performed by a group of Brahmins, accompanied by continuous Abhishek (bathing of the idol). It generates immense positive energy.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Ganesh Atharvashirsha Paath</h2>
                                <ul>
                                    <li><strong>Removal of All Obstacles (Vighna Nashan):</strong> Clears both internal doubts and external hurdles in career, business, or life.</li>
                                    <li><strong>Intellect & Wisdom (Buddhi):</strong> Enhances memory, focus, and clarity of thought. Ideal for students and professionals.</li>
                                    <li><strong>Peace & Stability:</strong> Calms a restless mind and removes anxiety (granting 'Atharva' state).</li>
                                    <li><strong>Prosperity & Success:</strong> Attracts wealth and ensures success in new ventures.</li>
                                    <li><strong>Planetary Relief:</strong> Specially effective for Ketu dosha and Mercury afflictions.</li>
                                    <li><strong>Spiritual Awakening:</strong> Leads to realization of oneself as part of the divine (Tvam Eva Pratyaksham Brahma Asi).</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Sankashti Chaturthi:</strong> The 4th day of the waning moon (monthly).</li>
                                    <li><strong>Ganesh Chaturthi:</strong> During the 10-day festival (Bhadrapada month).</li>
                                    <li><strong>Vinayaka Chaturthi:</strong> The 4th day of the waxing moon.</li>
                                    <li><strong>Tuesdays:</strong> Considered auspicious for Ganesha.</li>
                                    <li><strong>Before Exams/Interviews:</strong> For mental clarity and luck.</li>
                                    <li><strong>Starting New Ventures:</strong> Before business inauguration or housewarming.</li>
                                    <li><strong>Birthday:</strong> To seek blessings for the year ahead.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">The Sahasravartan Ritual</h2>
                                <p>The <strong>Sahasravartan</strong> (1000 recitations) is the pinnacle of Atharvashirsha practice. It involves:</p>
                                <ul>
                                    <li><strong>Abhishek:</strong> Continuous pouring of water, milk, or panchamrit on the Ganesha idol while the verses are chanted.</li>
                                    <li><strong>Avartan:</strong> A team of Vedic Pandits chanting in unison. If 10 pandits chant 100 times each, 1000 recitations are completed.</li>
                                    <li><strong>Durva Grass Offering:</strong> Offering sacred Durva grass with each avartan, as Ganesha loves Durva.</li>
                                    <li><strong>Havan (Optional but recommended):</strong> Offering oblations into the fire with the mantras after the recitation.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Key Mantras & Meaning</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">The Bija Mantra</h4>
                                    <p className="text-maroon-900 font-serif text-base mb-2">
                                        "Om Gam Ganapataye Namah"
                                    </p>
                                    <p className="text-sm text-gray-700 mb-4">
                                        This foundational mantra is central to the text.
                                    </p>

                                    <h4 className="font-bold text-maroon-900 mb-3">Identity with Trinity</h4>
                                    <p className="text-maroon-900 font-serif text-base mb-2">
                                        "Tvam Brahma Tvam Vishnus Tvam Rudras Tvam Indras..."
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Meaning:</strong> You are Brahma (Creator), You are Vishnu (Preserver), You are Rudra (Destroyer), You are Indra... You are the entire Universe.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance</h2>
                                <p>Ganesh Atharvashirsha is a master remedy in Vedic Astrology:</p>
                                <ul>
                                    <li><strong>Mercury (Budh):</strong> Ganesha rules Mercury. This Paath strengthens weak Mercury, improving communication, business, and intellect.</li>
                                    <li><strong>Ketu:</strong> Ganesha is the presiding deity of Ketu. This is the ultimate remedy for Ketu Mahadasha or Antardasha issues, bringing spiritual grounding.</li>
                                    <li><strong>Lagna (Ascendant) Strength:</strong> It strengthens the self, removing confusion and lack of direction.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Ganesh Atharvashirsha Paath Packages</h2>
                                <p>We offer customized packages based on the number of Avartans (recitations) and scale of the ritual.</p>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Service Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">21 Avartan Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Standard ritual with 21 recitations and Abhishek.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 - 2 Hours</li>
                                            <li>✓ 21 Recitations</li>
                                            <li>✓ Shodashopachara Puja</li>
                                            <li>✓ Prasad included</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Sahasravartan (1000)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Grand ritual with team of Pandits completing 1000 chants.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 4 - 5 Hours (Multiple Pandits)</li>
                                            <li>✓ 1000 Recitations</li>
                                            <li>✓ Continuous Abhishek</li>
                                            <li>✓ Havan included (optional)</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Purification:</strong> Devotees and Pandits take a bath and wear clean clothes (Red/Yellow preferred).</li>
                                    <li><strong>Altar Setup:</strong> A Ganesha idol (metal or clay) is placed in a copper or silver plate for Abhishek.</li>
                                    <li><strong>Sankalp:</strong> Formal declaration of name, gotra, and purpose of the ritual.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">The Ritual Steps</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Invocation with "Om Gan Ganpataye Namah".</li>
                                    <li><strong>Nyasa:</strong> Touching different body parts to install the energy of deities in the body.</li>
                                    <li><strong>Abhishek Starts:</strong> Pouring of water/milk/panchamrit begins.</li>
                                    <li><strong>Recitation:</strong> Chanting the Atharvashirsha clearly. For Sahasravartan, multiple pandits chant in sync.</li>
                                    <li><strong>Avartan Completion:</strong> After each round, Durva grass and red flowers are offered.</li>
                                    <li><strong>Concluding Prayer:</strong> "Maha Aarti" is performed after all rounds are done.</li>
                                    <li><strong>Phala Shruti:</strong> Reading the verses that describe the benefits of the Paath.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Paath Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Distribute the Prasad (Modak is best).</li>
                                    <li>Consume the Charanamrit (the liquid from Abhishek).</li>
                                    <li>Avoid non-veg and alcohol on this day.</li>
                                    <li>Maintain a peaceful and positive mindset.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can I do Atharvashirsha Paath at home?</h3>
                                <p>Yes, reciting it once or 11 times at home is great daily practice. However, for Sahasravartan (1000 times) or special rituals with Abhishek, it is best to hire Vedic Pandits to ensure correct pronunciation and handle the continuous rituals.</p>

                                <h3 className="text-xl font-bold mt-4">2. What is the difference between simple Puja and this Paath?</h3>
                                <p>A simple Puja acts as a greeting and offering to the deity. The Atharvashirsha Paath is a "Mantra Sadhana" – it activates the deity's energy through sound vibrations and specific Vedic verses, creating a much more powerful spiritual impact.</p>

                                <h3 className="text-xl font-bold mt-4">3. Why is Abhishek done during the Paath?</h3>
                                <p>Abhishek (bathing the deity) prevents the idol from getting "heated" due to the intense energy of the mantras (Tejas). It also represents the pouring of divine grace upon the devotee.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can women perform this Paath?</h3>
                                <p>Yes, women can recite and listen to Ganesh Atharvashirsha. There are no restrictions in the Vedic tradition for this, provided one maintains physical hygiene and devotion.</p>

                                <h3 className="text-xl font-bold mt-4">5. How long does a Sahasravartan take?</h3>
                                <p>If done by a single person, it would take days. That's why we deploy a team of 5-11 Pandits. With a team, a Sahasravartan usually takes 4-5 hours to complete.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is Durva grass mandatory?</h3>
                                <p>Yes, Durva is Lord Ganesha's favorite item. It has a cooling effect and distinctive energy pattern. Offering Durva with each recitation amplifies the benefits.</p>

                                <h3 className="text-xl font-bold mt-4">7. Does it help students?</h3>
                                <p>Absolutely. It is the best remedy for students. It improves memory retention, focus, and logic. Many perform 21 Avartans before board exams or entrance tests.</p>

                                <h3 className="text-xl font-bold mt-4">8. Can it cure health issues?</h3>
                                <p>It is specifically beneficial for ailments related to stress, anxiety, and speech. The peaceful vibrations help in mental health recovery.</p>

                                <h3 className="text-xl font-bold mt-4">9. What if I can't provide all samagri?</h3>
                                <p>We can arrange all the necessary Samagri (Durva, flowers, milk, etc.) for you. You just need to be present or we can perform it in your absence with Sankalp.</p>

                                <h3 className="text-xl font-bold mt-4">10. Is Havan necessary with the Paath?</h3>
                                <p>Havan is optional but highly recommended for Sahasravartan. Offering 1/10th of the count (100 offerings) into the fire locks in the energy of the chants.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Gam Ganapataye Namah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ganesh%20Atharvashirsha%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Ganesh Atharvashirsha Paath" />
            <Footer />
        </>
    )
}
