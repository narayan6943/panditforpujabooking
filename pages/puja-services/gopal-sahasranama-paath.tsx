import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function GopalSahasranamaPaathPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Gopal Sahasranama Paath in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Gopal Sahasranama Paath in Pune. 1000 Names of Lord Krishna (Gopal). Especially for progeny/childless couples and children\'s welfare. Expert pandits.',
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
                <title>Gopal Sahasranama Paath in Pune – For Progeny & Children</title>
                <meta name="description" content="Book Gopal Sahasranama Paath in Pune. Chant the 1000 names of Santhana Gopala Krishna. The ultimate remedy for childless couples and child protection. ₹2,100 onwards." />
                <meta name="keywords" content="Gopal Sahasranama Pune, Santhana Gopala Puja, Childless Couple Remedy, Krishna Puja for Baby, Progeny Mantras" />
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
                            <span className="text-maroon-900 font-semibold">Gopal Sahasranama Paath</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Om Devaki Sudha Govinda Vasudeva Jagatpate</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Gopal Sahasranama Paath <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Blessing of a Divine Child</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke the child form of Lord Krishna (Bala Gopala) through his 1000 names. The most powerful Vedic remedy for couples seeking to conceive a healthy, virtuous child.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Gopal Paath</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Gopal%20Sahasranama%20Paath" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Sri Gopal Sahasranama</strong> is a hymn containing the 1000 names of Lord Krishna as "Gopala" (The Protector of Cows/Souls). It is specifically dedicated to the aspect of Krishna as a child and protector.</p>
                                <p>Many couples who face medical or astrological delays in conceiving perform this Paath. It cleanses the "Putra Dosha" or karma preventing childbirth and invites a high soul into the family.</p>

                                <h2 className="text-3xl font-bold mt-8">Why Santhana Gopala?</h2>
                                <p>Lord Krishna is the ultimate source of charm and life. By worshipping his child form:</p>
                                <ul>
                                    <li><strong>Conception:</strong> It creates a spiritual womb environment.</li>
                                    <li><strong>Protection:</strong> Protects the pregnancy (Garbha Raksha) from mishaps.</li>
                                    <li><strong>Health of Child:</strong> Ensures the baby is born healthy and intelligent.</li>
                                    <li><strong>Obedience:</strong> For parents with disobedient children, this puja calms their nature.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Powerful Mantra</h2>
                                <div className="bg-maroon-50 p-6 rounded-lg my-6 border-l-4 border-gold-500">
                                    <h4 className="font-bold text-maroon-900 text-xl mb-3 font-serif">Santhana Gopala Mantra</h4>
                                    <p className="text-maroon-900 font-serif text-lg">
                                        <em>"Om Devaki Sudha Govinda Vasudeva Jagatpate<br />Dehi Me Tanayam Krishna Tvaam Aham Sharanam Gatah"</em>
                                    </p>
                                    <p className="text-gray-700 italic mt-2">
                                        "O Son of Devaki, Lord of the Universe, Krishna! Give me a son (child); I take refuge in you."
                                    </p>
                                </div>

                                <h2 className="text-3xl font-bold mt-8">When to Perform?</h2>
                                <ul>
                                    <li><strong>Janmashtami:</strong> Krishna's birthday.</li>
                                    <li><strong>Putrada Ekadashi:</strong> The Ekadashi specifically for progeny.</li>
                                    <li><strong>Wednesdays & Thursdays:</strong> Good days for Vishnu/Krishna.</li>
                                    <li><strong>Rohini Nakshatra:</strong> Krishna's birth star.</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Gopal Sahasranama Packages</h2>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Paath Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Paath</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,100+</div>
                                        <p className="text-sm text-gray-700 mb-3">1000 Names Recitation + Tulsi Archana.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 1.5 Hours</li>
                                            <li>✓ 1 Pandit</li>
                                            <li>✓ Tulsi Leaf Offering</li>
                                            <li>✓ Makhan Mishri Bhog</li>
                                        </ul>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Santhana Gopala Yagya</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Paath + Havan with Santhana Mantra.</p>
                                        <ul className="text-xs text-gray-600 mb-3 space-y-1">
                                            <li>✓ 3 Pandits</li>
                                            <li>✓ Havan with Kheer</li>
                                            <li>✓ Bal Gopal Idol Puja</li>
                                            <li>✓ Butter Offering</li>
                                        </ul>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">The Vidhi (Procedure)</h2>
                                <h3 className="text-2xl font-bold mt-6">Cradling the Lord</h3>
                                <p>The ritual is unique and emotional:</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Jhula Seva:</strong> A small idol of Bal Gopal is placed in a cradle (Palna) and rocked gently by the couple.</li>
                                    <li><strong>Tulsi Archana:</strong> Offering 1000 Tulsi leaves while chanting the Sahasranama. Krishna loves Tulsi.</li>
                                    <li><strong>Mantra Japa:</strong> Chanting the Santhana Gopala mantra 108 times.</li>
                                    <li><strong>Prasad:</strong> Offering Makhan (Butter) and Mishri (Sugar crystals), which is later eaten by the couple.</li>
                                </ol>

                                <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

                                <h3 className="text-xl font-bold mt-4">1. Can pregnant women attend?</h3>
                                <p>Yes, it is highly beneficial for the baby in the womb to hear these vibrations. It is "Garbha Sanskar".</p>

                                <h3 className="text-xl font-bold mt-4">2. Is it only for sons?</h3>
                                <p>No. "Santhana" means progeny. It blesses with a healthy child, boy or girl.</p>

                                <h3 className="text-xl font-bold mt-4">3. We have medical issues. Will this help?</h3>
                                <p>Faith combined with medical treatment works wonders. This puja removes the "Adrishta" (unseen) obstacles.</p>

                                <h3 className="text-xl font-bold mt-4">4. Can I offer toys?</h3>
                                <p>Yes! People often offer small toys, flutes, or clothes to child Krishna. These are later donated to children.</p>

                                <h3 className="text-xl font-bold mt-4">5. What is Vishnu Sahasranama vs Gopal Sahasranama?</h3>
                                <p>Vishnu Sahasranama is general for all purposes. Gopal Sahasranama is specific for child-related desires.</p>

                                <h3 className="text-xl font-bold mt-4">6. Do both husband and wife need to be present?</h3>
                                <p>Ideally yes, as conception involves both. But if one is travelling, the other can sit with Sankalp.</p>

                                <h3 className="text-xl font-bold mt-4">7. Is fasting required?</h3>
                                <p>A simple Satvik diet is enough. Some couples fast until the puja ends.</p>

                                <h3 className="text-xl font-bold mt-4">8. Provide the idol?</h3>
                                <p>We bring the idol and cradle for the puja. You can also worship your home idol.</p>

                                <h3 className="text-xl font-bold mt-4">9. Can we do it for a sick child?</h3>
                                <p>Yes, doing this puja protects the health of existing children too.</p>

                                <h3 className="text-xl font-bold mt-4">10. How long is the puja?</h3>
                                <p>About 2 hours for the main Paath and Archana.</p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Gopal Paath</h4>
                                        <p className="text-gold-100 text-sm mb-4">Jai Bal Gopal</p>
                                        <div className="bg-gold-500/20 rounded-lg p-3 mb-4">
                                            <p className="text-2xl font-bold text-gold-300">₹2,100+</p>
                                            <p className="text-xs text-gold-200">Starting price</p>
                                        </div>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Gopal%20Sahasranama%20Paath" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Gopal Sahasranama Paath" />
            <Footer />
        </>
    )
}
