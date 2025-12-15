import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function PitruDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Pitru Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pitru Dosh Shanti Puja in Pune (Tripindi Shradh). Pacify ancestral doshas and seek blessings for family lineage and peace.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Pitru Dosh Shanti' },
        { id: 'about', title: 'Significance' },
        { id: 'packages', title: 'Packages & Costs' },
        { id: 'vidhi', title: 'Rites & Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Shanti Muhurat' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Pitru Dosh Shanti Puja in Pune – Tripindi Shradh Specialist</title>
                <meta name="description" content="Book Pitru Dosh Shanti Puja in Pune. Expert Pandits for Tripindi Shradh and Narayan Bali. Pacify ancestral doshas for family peace and lineage." />
                <meta name="keywords" content="Pitru Dosh Shanti Pune, Tripindi Shradh Pune, Ancestral Pacification, Pitra Shanti Vidhi, Shradh Puja Pune" />
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
                            <span className="text-maroon-900 font-semibold">Pitru Dosh Shanti</span>
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
                            src="/images/shiva-puja-hero.png"
                            alt="Pitru Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Ancestral Peace & Lineage</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Pitru Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Tripindi Shradh & Narayan Bali</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Specialized rituals to pacify restless ancestral souls. Clear the path for family progress, progeny, and peace.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Shanti Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Pitru%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Pitru Dosh Shanti</strong> is distinct from general Pitra Dosh Nivaran as it specifically focuses on the <strong>pacification (Shanti)</strong> of ancestors who may be stuck in a state of unrest due to unfulfilled desires or unnatural death. This puja is crucial for families facing unexplained delays in marriage, lack of progeny, or persistent household disharmony.
                                </p>
                                <p>
                                    Our expert pandits in Pune perform specialized <strong>Tripindi Shradh</strong> and <strong>Narayan Bali</strong> rituals, which are the most potent forms of Pitru Shanti. These rituals address the root cause of the dosha, ensuring that the ancestors bless their lineage rather than causing obstruction.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Significance of Shanti Rituals</h3>
                                <p>
                                    According to Garuda Purana, if ancestral rites (Shradh) are not performed correctly for three consecutive generations, the souls of ancestors become agitated, creating Pitru Dosh. The <strong>Tripindi Shradh</strong> (worship of Brahma, Vishnu, and Mahesh) is specifically designed to liberate souls from Pret Yoni (ghostly existence) and grant them peace.
                                </p>
                            </section>

                            {/* Packages */}
                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Shanti Puja Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Tripindi Shradh</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹7,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Dedicated shradh for 3 generations. Includes Pind Daan and vastradan.</p>
                                        <div className="text-xs text-gray-500">Duration: 3-4 hrs</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Narayan Bali Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹15,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">For unnatural deaths/severe dosha. involves Narayan Bali and Nag Bali rituals.</p>
                                        <div className="text-xs text-gray-500">Duration: 5-6 hrs</div>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Pitru Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹21,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Combined Tripindi + Narayan Bali + Brahman Bhojan for 5 Pandits.</p>
                                        <div className="text-xs text-gray-500">Duration: Full Day</div>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">Enquire</Button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">* Prices include all Samagri and Dakshina. Venue charges extra if applicable.</p>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Shanti Puja Samagri List</h2>
                                <p className="text-sm text-gray-700 mb-4">Our package is inclusive, but here is what is used for transparency:</p>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 list-disc pl-5">
                                    <li>Barley (Jav), Black Sesame (Til)</li>
                                    <li>Gold image/piece (for main offering)</li>
                                    <li>Silver Snake (Nag-Nagin) for Nag Bali</li>
                                    <li>White, Red, Yellow cloth pieces</li>
                                    <li>Kusha Grass (Darbha)</li>
                                    <li>Pinda (Rice/Flour balls) materials</li>
                                    <li>Cow Urine (Gomutra) & Gangajal</li>
                                    <li>Honey, Ghee, Curd, Milk, Sugar (Panchamrit)</li>
                                </ul>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Shanti Ritual Vidhi</h2>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Sankalp & Maha Prayashchit:</strong> Taking vows and asking for forgiveness for known/unknown sins.</li>
                                    <li><strong>Mundan (Optional):</strong> The host often undergoes symbolic shaving (recommended for Narayan Bali).</li>
                                    <li><strong>Tripindi Pujan:</strong> Establishing three kalashas for Brahma, Vishnu, Mahesh to pacify ancestors of varying status (earth, sky, space).</li>
                                    <li><strong>Pind Daan:</strong> Offering rice balls to satisfy the hunger of the departed souls.</li>
                                    <li><strong>Tarpan:</strong> Libations of water mixed with til to cool and soothe the ancestors.</li>
                                    <li><strong>Vishnu Tarpan:</strong> Specific offerings to Lord Vishnu for the liberation (Moksha) of the souls.</li>
                                    <li><strong>Brahman Bhojan:</strong> Feeding Brahmins is considered directly feeding the ancestors.</li>
                                    <li><strong>Dakshina & Blessing:</strong> Concluding rites and seeking blessings.</li>
                                </ol>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Best Shanti Dates 2026</h2>
                                <table className="w-full text-left border-collapse text-sm not-prose mt-4">
                                    <thead className="bg-maroon-900 text-white">
                                        <tr>
                                            <th className="p-3">Occasion</th>
                                            <th className="p-3">Favored Dates</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-3 font-semibold">Pitra Paksha</td>
                                            <td className="p-3">Sep 26 - Oct 11 (Most Powerful)</td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="p-3 font-semibold">Amavasya</td>
                                            <td className="p-3">Somvati Amavasya, Mahalaya Amavasya</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-3 font-semibold">Specific Tithis</td>
                                            <td className="p-3">Ashtami, Ekadashi, Chaturdashi (Krishna Paksha)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Pitru Dosh Shanti</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Progeny Bliss:</strong> Removes obstacles in conceiving or ensures the health of children.</li>
                                    <li><strong>Career Stability:</strong> Clears unseen hurdles in professional growth.</li>
                                    <li><strong>Marriage:</strong> Facilitates timely marriage and removes relationship conflicts.</li>
                                    <li><strong>Peace of Mind:</strong> Relieves the family from constant stress and unexplained illness.</li>
                                    <li><strong>Ancestral Blessings:</strong> Turns the "Dosh" into a protective shield ("Yoga").</li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is this different from regular Shradh?", a: "Yes, regular Shradh is an annual duty. Pitru Dosh Shanti (Tripindi/Narayan Bali) is a one-time corrective ritual for deep-rooted problems." },
                                        { q: "Where should it be performed?", a: "Ideally at a holy place like Trimbakeshwar or Gokarna, but it can also be effectively performed at home or a local temple with proper Vidhi by our specialized pandits." },
                                        { q: "Who should perform it?", a: "The eldest son usually performs it, but in his absence, any male member of the lineage can do it. In specific cases, women can also participate." },
                                        { q: "What should I wear?", a: "Men usually wear a white Dhoti-Kurta. Women should wear a saree (avoiding black/blue colors preferably)." },
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Resolving Ancestral Debt</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Let your ancestors become your guardians.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Shanti Puja</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Puja Now</h4>
                                        <p className="text-gold-100 text-sm mb-4">Get Expert Guidance</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Pitru%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Pitru Dosh Shanti" />
            <Footer />
        </>
    )
}
