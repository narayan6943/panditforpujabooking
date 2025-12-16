import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GayatriMantraJaapPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gayatri Mantra Jaap in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Gayatri Mantra Jaap in Pune. 24,000 or 1.25 Lakh recitations. Supreme purification, wisdom, and spiritual enlightenment. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '3500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Gayatri Mantra Jaap in Pune – 1.25 Lakh Chants Anushthan</title>
                <meta name="description" content="Book Gayatri Mantra Jaap in Pune. Perform Laghu (24k) or Maha Purashcharan (1.25 Lakh) jaap. Supreme purification, intellect, and spiritual enlightenment. ₹3,500 onwards." />
                <meta name="keywords" content="Gayatri Mantra Jaap Pune, Gayatri Anushthan, 1.25 Lakh Jaap, Gayatri Havan, Vedic Chanting, Spiritual Cleansing" />
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
                            <span className="text-maroon-900 font-semibold">Gayatri Mantra Jaap</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Mother of Vedas</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Gayatri Mantra Jaap <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Supreme Spiritual Illumination</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                "Om Bhur Bhuva Svah..." Initiate the most powerful Vedic Anushthan. Perform 24,000 or 1.25 Lakh jaap for intellect, purification, and divine grace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Gayatri Jaap</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Gayatri%20Mantra%20Jaap" target="_blank" rel="noopener noreferrer">
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
                                <p>The <strong>Gayatri Mantra</strong> is considered the essence of the Vedas (Veda Mata). Seers and sages proclaim it as the supreme mantra for enlightenment. A dedicated <strong>Jaap Anushthan</strong> of this mantra is one of the most effective ways to purify karma, sharpen the intellect, and invite divine light into one's life.</p>

                                <h2 className="text-3xl font-bold mt-8">The Mantra & Meaning</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">
                                        "Om Bhur Bhuvaḥ Svaḥ<br />
                                        Tat Savitur Vareṇyaṃ<br />
                                        Bhargo Devasya Dhīmahi<br />
                                        Dhiyo Yo Naḥ Prachodayāt"
                                    </h4>
                                    <p className="text-gray-700 italic">
                                        "We meditate on the glory of that Being who has produced this universe; may He enlighten our minds."
                                    </p>
                                </div>
                                <p>This mantra is dedicated to Savitr, the Sun deity representing the source of all life and illumination. It is a prayer not for things, but for a clear and enlightened intellect (Dhee).</p>

                                <h2 className="text-3xl font-bold mt-8">Types of Anushthan (Jaap Count)</h2>
                                <p>Performing a specific number of chants under strict discipline is called an Anushthan.</p>
                                <ul>
                                    <li><strong>Laghu Anushthan (24,000 Jaap):</strong> The Gayatri Mantra has 24 syllables. Thus, 24,000 chants constitute a basic completion. This usually takes 3-4 days with a small team of pandits.</li>
                                    <li><strong>Maha Purashcharan (1.25 Lakh Jaap):</strong> The full Vedic discipline involves 125,000 chants. This is highly recommended for major life transformations, overcoming severe doshas, or spiritual awakening. It takes 5-7 pandits about 7-9 days.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Gayatri Mantra Jaap</h2>
                                <ul>
                                    <li><strong>Tejorashi (Radiance):</strong> It bestows a divine glow and charisma (Tejas) upon the performer.</li>
                                    <li><strong>Intellectual Growth:</strong> Specifically designed to stimulate the brain and improve memory, logic, and wisdom. Excellent for students and scholars.</li>
                                    <li><strong>Karmic Cleansing:</strong> It is said to burn sins (Paap) like fire burns wood. It purifies past negative karma.</li>
                                    <li><strong>Protection:</strong> Creates a spiritual shield (Kavach) against negative energies and psychic attacks.</li>
                                    <li><strong>Peace & Serenity:</strong> Removes restlessness, anxiety, and depression, bringing deep mental peace.</li>
                                    <li><strong>Sun (Surya) Strengthening:</strong> As a solar mantra, it is the ultimate remedy for a weak or afflicted Sun in the horoscope.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Upakarma/Avani Avittam:</strong> The day of changing the sacred thread is ideal.</li>
                                    <li><strong>Sundays:</strong> Ruled by the Sun, making them highly auspicious.</li>
                                    <li><strong>Makar Sankranti:</strong> When the Sun enters Capricorn.</li>
                                    <li><strong>Navratri:</strong> Performing anushthan during the 9 days of Navratri amplifies the power.</li>
                                    <li><strong>Child's Education:</strong> Before starting school or major exams.</li>
                                    <li><strong>Starting a Spiritual Journey:</strong> For initiation into meditation.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance</h2>
                                <ul>
                                    <li><strong>Sun (Surya) Remedy:</strong> For those with low confidence, authority issues, or health problems related to the Sun (eyes, heart, bones), Gayatri Jaap is the best remedy.</li>
                                    <li><strong>Pitru Dosh:</strong> Since the Sun represents the father and ancestors, this Jaap helps alleviate Pitru Dosh.</li>
                                    <li><strong>5th House Activation:</strong> The 5th house is the house of Purva Punya (past merit) and Mantra. Gayatri activates this house, unlocking past good karma.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Gayatri Mantra Jaap Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Jaap Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Laghu Anushthan (24k)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">24,000 Chants performed by Vedic Pandits.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-4 Pandits</li>
                                            <li>✓ 1-2 Days</li>
                                            <li>✓ Havan (10% count) included</li>
                                            <li>✓ Sankalp & Prasad</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Purashcharan (1.25L)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹51,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete 1.25 Lakh Jaap - The Gold Standard.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 5-7 Pandits for 5-7 Days</li>
                                            <li>✓ 1,25,000 Chants</li>
                                            <li>✓ Daily Havan & Brahman Bhojan</li>
                                            <li>✓ Complete Rituals</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Process (Vidhi)</h2>
                                <h3 className="text-2xl font-bold mt-6">Daily Routine of Pandits</h3>
                                <p>For a valid Anushthan, the Pandits follow strict rules:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Brahma Muhurta:</strong> They wake up before sunrise.</li>
                                    <li><strong>Snan & Sandhyavandanam:</strong> Purification and daily prayers.</li>
                                    <li><strong>Sankalp:</strong> Taking the vow for your specific purpose.</li>
                                    <li><strong>Mala Jap:</strong> Using Tulsi or Rudraksha beads, they chant the mantra with focus.</li>
                                    <li><strong>Havan (Yajna):</strong> After the Jaap, 10% of the count constitutes the Havan offering (Ahuti).</li>
                                    <li><strong>Tarpan & Marjan:</strong> Offering water to deities and ancestors.</li>
                                    <li><strong>Brahmana Bhojan:</strong> Feeding the priests to complete the cycle of gratitude.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Jaap Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You will receive the Vibhuti (Ash) from the Havan.</li>
                                    <li>Consume the Prasad with devotion.</li>
                                    <li>It is good to perform a small charity (Dana) on the final day.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Why 1.25 Lakh (Sava Lakh) chants?</h3>
                                <p>In Mantra Shastra, the effects of a mantra are fully unlocked (Siddhi) when recited 100,000 times. The extra 25,000 covers any errors or omissions, ensuring a complete and flawless offering.</p>

                                <h3 className="text-xl font-bold mt-4">2. Do I need to be present for all days?</h3>
                                <p>No, it is difficult for working professionals. You can be present for the 'Sankalp' on the first day and 'Purnahuti' (completion) on the last day. If you are not in Pune, we can do the Sankalp via video call.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can I do this at my home or does it have to be in a temple?</h3>
                                <p>It can be done at your home if you have a spare quiet room. However, it is often more practical to have it done at our Ashram or a Temple where Pandits can follow their discipline without disturbance.</p>

                                <h3 className="text-xl font-bold mt-4">4. Is Gayatri Mantra only for Brahmins?</h3>
                                <p>In modern times and according to many saints (like Vishvamitra who created it), Gayatri is universal. It is the prayer for light and intellect, applicable to all humanity seeking truth.</p>

                                <h3 className="text-xl font-bold mt-4">5. Can this Jaap cure depression?</h3>
                                <p>Yes, Gayatri is the light (Bhargo). It directly counters the darkness of tamas (inertia/depression). Many find immense mental clarity and relief after this Anushthan.</p>

                                <h3 className="text-xl font-bold mt-4">6. Is Havan mandatory?</h3>
                                <p>Yes, for an Anushthan to be complete, Havan (1/10th), Tarpan (1/10th of Havan), and Marjan (1/10th of Tarpan) are traditionally required. Our packages include the Havan.</p>

                                <h3 className="text-xl font-bold mt-4">7. How do I know the Jaap is actually done?</h3>
                                <p>We value transparency. We can provide daily video updates or live streaming of the start and end of sessions so you can see the Pandits performing your Sankalp.</p>

                                <h3 className="text-xl font-bold mt-4">8. Can it be done for children?</h3>
                                <p>Yes, parents often book this for their children's academic success and intelligence. It is the best spiritual gift for a student.</p>

                                <h3 className="text-xl font-bold mt-4">9. What diet should I follow during the Anushthan?</h3>
                                <p>If the Jaap is being done for you, it is beneficial if you also eat Sattvic food (veg, no onion/garlic, no alcohol) during those days to align with the energy.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can I listen to Gayatri Mantra audio instead?</h3>
                                <p>Listening is good, but a Japa Anushthan involves conscious generation of sound energy by trained Pandits. The effect of live, conscious chanting is hundreds of times more powerful than a recording.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Anushthan</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Bhur Bhuva Svah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹11,000+</p>
                                            <p className="text-xs text-gold-200">Starting price (24k Jaap)</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gayatri%20Mantra%20Jaap" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Gayatri Mantra Jaap" />
            <Footer />
        </>
    )
}
