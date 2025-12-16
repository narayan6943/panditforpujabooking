import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShaniMantraJaapPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shani Mantra Jaap in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Shani Mantra Jaap in Pune. 23,000 recitations of Vedic Shani Mantra. Relief from Sade Sati and Dhaiya. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '3000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Shani Mantra Jaap in Pune – Sade Sati Remedy</title>
                <meta name="description" content="Book Shani Mantra Jaap in Pune. Perform 23,000 recitations (Vedic Count) to appease Lord Saturn. Ultimate remedy for Sade Sati and Dhaiya. ₹3,000 onwards." />
                <meta name="keywords" content="Shani Mantra Jaap Pune, Shani Sade Sati Remedy, Saturn Mantra Chanting, Shani Rahu Ketu Shanti, Vedic Shani Puja" />
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
                            <span className="text-maroon-900 font-semibold">Shani Mantra Jaap</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Sham Shanaishcharaya Namah</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shani Mantra Jaap <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Appease Saturn & Remove Hardships</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Suffering from Sade Sati or Dhaiya? Perform the Complete 23,000 Vedic Mantra Jaap to transform Saturn's challenges into discipline and success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Shani Jaap</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Shani%20Mantra%20Jaap" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Lord Shani (Saturn)</strong> is the dispenser of justice (Karma Phala Data). He rewards hard work and punishes negligence. When Saturn is in a challenging position like <strong>Sade Sati (7.5 years)</strong> or <strong>Dhaiya (2.5 years)</strong>, life can feel full of obstacles, delays, and hardships.</p>
                                <p>The <strong>Shani Mantra Jaap</strong> is the most prescribed remedy in Vedic Astrology. It is not about "fearing" Saturn, but about aligning oneself with His energy of discipline, patience, and truth. The Jaap pacifies the malefic effects and helps one navigate tough times with grace.</p>

                                <h2 className="text-3xl font-bold mt-8">Why 23,000 Chants?</h2>
                                <p>In Vedic tradition, the number of chants required to propitiate a planet is typically <strong>Thousands x (Number of Vedas + 1)</strong> or specific counts derived from the planet's nature. For Saturn, the prescribed count for a full Anushthan is <strong>23,000</strong>. This ensures that the energy generated is sufficient to neutralize the negativity of a malefic Saturn period.</p>

                                <h2 className="text-3xl font-bold mt-8">Mantras Used</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">Vedic Mantra</h4>
                                    <p className="text-maroon-900 font-serif text-lg mb-2">
                                        "Om Sham No Devir Abhishtaya Aapo Bhavantu... Sham YorAbhisravantu Nah"
                                    </p>
                                    <h4 className="font-bold text-maroon-900 text-xl mt-4 mb-3 font-serif">Beeja Mantra</h4>
                                    <p className="text-maroon-900 font-serif text-lg">
                                        "Om Pram Preem Prom Sah Shanaye Namah"
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Shani Mantra Jaap</h2>
                                <ul>
                                    <li><strong>Sade Sati Relief:</strong> Drastically reduces mental stress, financial losses, and health issues during the 7.5-year cycle.</li>
                                    <li><strong>Career Stability:</strong> Removes sudden job losses, delays in promotion, and workplace politics.</li>
                                    <li><strong>Justice & Legal Issues:</strong> Favorable for winning court cases and resolving disputes.</li>
                                    <li><strong>Health Benefit:</strong> Cures chronic ailments related to bones, teeth, nerves, and paralysis (ruled by Saturn).</li>
                                    <li><strong>Financial Discipline:</strong> Helps in debt reduction and long-term asset building.</li>
                                    <li><strong>Spiritual Growth:</strong> Saturn is the planet of asceticism; his grace leads to deep spiritual maturity.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Saturdays:</strong> The day ruled by Saturn.</li>
                                    <li><strong>Shani Amavasya:</strong> Very powerful for Shani Puja.</li>
                                    <li><strong>Shani Jayanti:</strong> The birthday of Lord Saturn.</li>
                                    <li><strong>Start of Sade Sati:</strong> As soon as one enters the phase.</li>
                                    <li><strong>Anuradha, Pushya, Uttara Bhadrapada Nakshatras:</strong> Stars ruled by Saturn.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Shani Mantra Jaap Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Jaap Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Beeja Mantra (23k)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹9,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">23,000 chants of Beeja Mantra.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 2-3 Pandits</li>
                                            <li>✓ 1-2 Days</li>
                                            <li>✓ Havan included</li>
                                            <li>✓ Black Sesame Oil Abhishek</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Vedic Anushthan (23k)</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Detailed Vedic Mantra Jaap with full ritual.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3-4 Pandits</li>
                                            <li>✓ Complete Vedic Vidhi</li>
                                            <li>✓ Shani Tel Abhishek</li>
                                            <li>✓ Havan & Daan (Iron/Oil)</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Essential Elements</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Oil Abhishek (Tailabhishekam):</strong> Saturn loves mustard oil or sesame oil. Devotees offer it to smooth out the friction in their lives.</li>
                                    <li><strong>Black Color:</strong> Offerings include black sesame seeds (til), black cloth, and iron nails/horse shoe ring.</li>
                                    <li><strong>West Direction:</strong> Shani rules the West; the altar is set accordingly.</li>
                                    <li><strong>Jaap:</strong> The pandits chant the mantra 23,000 times with focus.</li>
                                    <li><strong>Havan:</strong> Shami wood (Khejri tree) is used for the fire offering, which is specific to Saturn.</li>
                                    <li><strong>Daan (Charity):</strong> Giving away black items, oil, or food to the poor is a mandatory part of Shani remedies.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Jaap Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Wear a Blue Sapphire (Neelam) or Amethyst ring (only if advised by astrologer).</li>
                                    <li>Avoid alcohol and non-veg completely on Saturdays.</li>
                                    <li>Feed crows or black dogs (Shani's vehicles).</li>
                                    <li>Respect your subordinates and servants (Shani rules the working class).</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can Shani Puja cause harm if done incorrectly?</h3>
                                <p>There is a detailed protocol for Shani worship (like not looking straight into the idol's eyes). Our expert pandits know these subtle rules perfectly, ensuring only positive results for you.</p>

                                <h3 className="text-xl font-bold mt-4">2. I am in Sade Sati. Is this enough?</h3>
                                <p>This Jaap is the foundation. However, Shani also demands behavioral changes—honesty, hard work, and humility. The Jaap gives you the strength to embody these virtues.</p>

                                <h3 className="text-xl font-bold mt-4">3. Can I do it for my son/husband?</h3>
                                <p>Yes, Sade Sati often affects the whole family. You can take the Sankalp for your family member. Their name and Gotra will be used.</p>

                                <h3 className="text-xl font-bold mt-4">4. What is Shami wood?</h3>
                                <p>Shami is the sacred tree associated with Saturn. Using its wood in Havan is very effective for pacifying Saturn's 'heat' or harshness.</p>

                                <h3 className="text-xl font-bold mt-4">5. Should I fast on the day of the Jaap?</h3>
                                <p>It is recommended to eat simple Satvik food. Complete fasting is not mandatory for the host, but avoiding Tamasic food is.</p>

                                <h3 className="text-xl font-bold mt-4">6. Can this help in business losses?</h3>
                                <p>Yes, Saturn rules structure and long-term business. If you are facing chronic losses or labor issues, this Jaap helps stabilize the business.</p>

                                <h3 className="text-xl font-bold mt-4">7. Why 23,000? Some say 19,000.</h3>
                                <p>Vedic texts vary slightly. 19,000 is for the Vedic mantra count in some traditions, but 23,000 is the generally accepted "Purna" (complete) count including multipliers for the Kali Yuga.</p>

                                <h3 className="text-xl font-bold mt-4">8. Will I get the Prasad?</h3>
                                <p>Yes, we send the Vibhuti (ash) and sometimes a protecting black thread (Raksha Sutra) charged with the mantras.</p>

                                <h3 className="text-xl font-bold mt-4">9. Is it safe for pregnant women?</h3>
                                <p>Pregnant women generally avoid visiting Shani temples (due to strong vibrations). However, a Jaap done by pandits on their behalf is perfectly safe and protective.</p>

                                <h3 className="text-xl font-bold mt-4">10. How often should this be done?</h3>
                                <p>Once at the beginning of Sade Sati, once in the middle (peak phase), and once at the end is ideal. Or annually on Shani Jayanti.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Shani Jaap</h4>
                                        <p className="text-gold-100 text-sm mb-4">Om Sham Shanaishcharaya Namah</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹9,000+</p>
                                            <p className="text-xs text-gold-200">Starting price (23k Jaap)</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shani%20Mantra%20Jaap" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Shani Mantra Jaap" />
            <Footer />
        </>
    )
}
