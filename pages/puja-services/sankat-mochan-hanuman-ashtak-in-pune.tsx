import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SankatMochanHanumanAshtakPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sankat Mochan Hanuman Ashtak Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Sankat Mochan Hanuman Ashtak Paath in Pune. Powerful 8-verse hymn to remove severe obstacles and suffering. Expert pandits.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            price: '1100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Sankat Mochan Hanuman Ashtak Paath in Pune – Remove Obstacles</title>
                <meta name="description" content="Book Sankat Mochan Hanuman Ashtak Paath in Pune. Recite the powerful 8 verses by Tulsidas to destroy profound grief and obstacles. ₹1,100 onwards." />
                <meta name="keywords" content="Sankat Mochan Hanuman Ashtak Pune, Hanuman Puja for Problems, Tulsidas Ashtak, Remove Obstacles Puja, Bajrangbali Paath" />
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
                            <span className="text-maroon-900 font-semibold">Sankat Mochan Ashtak</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Ko Nahi Janat Hai Jag Me Kapi Sankat Mochan Naam Tiharo</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Sankat Mochan Hanuman Ashtak <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Destroyer of Grief & Hurdles</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                When life feels stuck and problems seem insurmountable, this 8-verse prayer by Goswami Tulsidas invokes the specific form of Hanuman as the "Liberator from Peril".
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Ashtak Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Sankat%20Mochan%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Sankat Mochan Hanuman Ashtak</strong> (also known as "Hanuman Ashtak") is a devotional Hindi poem of eight stanzas dedicated to Lord Hanuman. It was composed by the great saint <strong>Goswami Tulsidas</strong>.</p>
                                <p>While the Hanuman Chalisa praises Hanuman's general glory, the Ashtak is a specialized prayer focusing <em>only</em> on his ability to remove specific deep-rooted problems (Sankat). It recounts the various perils he removed for Lord Rama, Sugriva, and Vibhishana, reminding him to do the same for the devotee.</p>

                                <h2 className="text-3xl font-bold mt-8">What Kind of Problems?</h2>
                                <p>This hymn is specifically recited for:</p>
                                <ul>
                                    <li><strong>Court Cases & Legal Battles:</strong> When trapped in false accusations.</li>
                                    <li><strong>Psychological Fear:</strong> Recurrent nightmares or depression.</li>
                                    <li><strong>Career Blockages:</strong> When despite hard work, results are zero.</li>
                                    <li><strong>Enemy Troubles:</strong> Protection from hidden enemies.</li>
                                    <li><strong>Physical Pain:</strong> Long-standing ailments.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Powerful Verses</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">Refrain Line</h4>
                                    <p className="text-maroon-900 font-serif text-lg">
                                        <em>"Ko nahi janat hai jag mein Kapi, Sankat Mochan naam tiharo."</em>
                                    </p>
                                    <p className="text-gray-700 italic mt-2">
                                        "Who in this world does not know, O Monkey God, that your name is the Destroyer of Sorrows?"
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Tuesdays & Saturdays:</strong> The most potent days.</li>
                                    <li><strong>Hanuman Jayanti:</strong> The ultimate day for Hanuman worship.</li>
                                    <li><strong>During Sade Sati:</strong> It helps mitigate Saturn's effects (as Hanuman controls Shani).</li>
                                    <li><strong>Early Morning:</strong> Or evening twilight (Sandhya).</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Sankat Mochan Paath Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">108 Recitations</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">Chanting Ashtak 108 times continuously.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 2 Hours</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Sindoor & Oil Offering</li>
                                            <li>✓ Deep Daan</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Sankat Mochan Yagya</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">108 Paath + Hanuman Havan.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ Havan with Peepal Wood</li>
                                            <li>✓ Chola Offering (Robe)</li>
                                            <li>✓ Sweet Boondi Prasad</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Offering the Red Robe</h3>
                                <p>To please Sankat Mochan, the ritual involves:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Red Color:</strong> Hanuman loves red. Red flowers (Hibiscus/Rose), red clothes, and red Sindoor are essential.</li>
                                    <li><strong>Sindoor Arpan:</strong> Covering the idol with orange-red vermillion mixed with jasmine oil.</li>
                                    <li><strong>Bhog:</strong> Offering Jaggery and Gram (Gur-Chana) or Motichoor Ladoo.</li>
                                    <li><strong>Paath:</strong> Reciting the Ashtak with varying pitch (Swara) to invoke courage (Veer Rasa).</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Is it better than Hanuman Chalisa?</h3>
                                <p>Neither is "better". Chalisa is for daily general protection. Ashtak is specifically for <em>crisis management</em>. Use Ashtak when in deep trouble.</p>

                                <h3 className="text-xl font-bold mt-4">2. Can I read it if I am menstruating?</h3>
                                <p>Women are advised to take a break during menstrual cycles for Hanuman rituals due to high energy intensity.</p>

                                <h3 className="text-xl font-bold mt-4">3. Why 108 times?</h3>
                                <p>108 is a sacred completion number. Repeating the Ashtak 108 times creates a "Mantra Siddhi" environment where the problem dissolves.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I do it at night?</h3>
                                <p>Yes, Hanuman is a Chiranjeevi and very active at night. Many exorcism rituals are done post-sunset.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is Chola?</h3>
                                <p>Chola is the offering of a full set of clothes and Sindoor to the Hanuman idol. It is considered the highest offering.</p>

                                <h3 className="text-xl font-bold mt-4">6. Will it help with marriage delay?</h3>
                                <p>Yes, especially if the delay is caused by Mangal Dosh or enemies.</p>

                                <h3 className="text-xl font-bold mt-4">7. Do I need to be vegetarian?</h3>
                                <p>Absolutely. Total abstinence from meat and alcohol on the day of the puja is mandatory.</p>

                                <h3 className="text-xl font-bold mt-4">8. Who is Tulsidas?</h3>
                                <p>He is the 16th-century saint who wrote the Ramcharitmanas. He wrote these hymns in distress for his own ailments, and was cured.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can we do it online?</h3>
                                <p>Yes, you can watch the Pandit perform the Chola and Havan. The blessings reach you.</p>

                                <h3 className="text-xl font-bold mt-4">10. Can children recite it?</h3>
                                <p>Yes, it makes them brave and removes fear of the dark or ghosts.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Ashtak Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Jai Bajrangbali</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Sankat%20Mochan%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Sankat Mochan Hanuman Ashtak Paath" />
            <Footer />
        </>
    )
}
