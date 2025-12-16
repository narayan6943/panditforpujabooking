import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function BusinessSuccessHavanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Business Success Havan in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Business Success Havan in Pune. Business growth, profits, success. Expert pandits for comprehensive business fire ritual.',
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
                <title>Business Success Havan in Pune – Prosperity Fire Ritual</title>
                <meta name="description" content="Book Business Success Havan in Pune. Business growth, increased profits, success. Expert pandits for comprehensive business prosperity fire ritual." />
                <meta name="keywords" content="Business Success Havan Pune, Business Growth, Profit Increase, Commercial Success, Business Puja" />
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
                            <span className="text-maroon-900 font-semibold">Business Success Havan</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Business Prosperity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Business Success Havan <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Fire Ritual for Growth</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke divine blessings for business success through comprehensive fire ritual. Achieve growth, profits, and lasting commercial prosperity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking">Book Business Havan</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Business%20Success%20Havan" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Business Success Havan</strong> is a comprehensive Vedic fire ritual combining worship of multiple deities for complete business prosperity. This powerful ceremony invokes Lakshmi (wealth), Ganesh (obstacle removal), Kuber (retention), and Saraswati (wisdom) for holistic business success.</p>

                                <h2 className="text-3xl font-bold mt-8">Comprehensive Business Blessings</h2>
                                <p>Unlike single-deity havans, this ritual addresses all aspects of business success by invoking multiple divine energies. Each deity contributes specific blessings essential for commercial prosperity.</p>

                                <h3 className="text-2xl font-bold mt-6">Deities Invoked</h3>
                                <ul>
                                    <li><strong>Ganesh:</strong> Removes business obstacles and ensures smooth operations</li>
                                    <li><strong>Lakshmi:</strong> Attracts customers, sales, and revenue</li>
                                    <li><strong>Kuber:</strong> Retains profits and multiplies wealth</li>
                                    <li><strong>Saraswati:</strong> Grants business wisdom and innovation</li>
                                    <li><strong>Vishnu:</strong> Ensures stability and protection</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">Benefits of Business Success Havan</h2>
                                <ul>
                                    <li><strong>Revenue Growth:</strong> Increases sales and income</li>
                                    <li><strong>Customer Attraction:</strong> Brings new clients and customers</li>
                                    <li><strong>Profit Retention:</strong> Ensures profits stay and multiply</li>
                                    <li><strong>Obstacle Removal:</strong> Clears business barriers</li>
                                    <li><strong>Competition Edge:</strong> Success over competitors</li>
                                    <li><strong>Innovation:</strong> Grants creative business ideas</li>
                                    <li><strong>Stability:</strong> Ensures long-term sustainability</li>
                                    <li><strong>Reputation:</strong> Builds brand value and goodwill</li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-8">When to Perform Business Success Havan</h2>
                                <ul>
                                    <li><strong>Business Launch:</strong> Before starting new venture</li>
                                    <li><strong>Office Opening:</strong> New office or branch inauguration</li>
                                    <li><strong>Diwali:</strong> Annual business blessing</li>
                                    <li><strong>Akshaya Tritiya:</strong> Auspicious for business</li>
                                    <li><strong>Low Sales:</strong> When facing business decline</li>
                                    <li><strong>Expansion:</strong> Before major business growth</li>
                                    <li><strong>Partnership:</strong> Starting new business partnerships</li>
                                    <li><strong>Annual Ritual:</strong> Yearly prosperity maintenance</li>
                                </ul>
                            </section>

                            <section className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Business Success Havan Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Standard Business Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹5,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Complete multi-deity worship with 108 ahutis and business mantras.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Maha Business Success Havan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹18,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Elaborate ritual with all deities, 1008 ahutis, office energization, and Vastu correction.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold">Business Success Havan Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Preparation</h3>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li>Clean office/shop thoroughly</li>
                                    <li>Wear business formal or traditional attire</li>
                                    <li>Arrange business documents, products for blessing</li>
                                    <li>Set up havan kund at business entrance or center</li>
                                    <li>Keep all deity idols or pictures</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Ganesh Puja:</strong> Remove business obstacles</li>
                                    <li><strong>Lakshmi Invocation:</strong> Attract wealth and customers</li>
                                    <li><strong>Kuber Puja:</strong> Retain and multiply profits</li>
                                    <li><strong>Saraswati Worship:</strong> Grant business wisdom</li>
                                    <li><strong>Vishnu Puja:</strong> Ensure stability</li>
                                    <li><strong>Combined Havan:</strong> 108 ahutis for each deity</li>
                                    <li><strong>Office Energization:</strong> Bless business space</li>
                                    <li><strong>Purnahuti:</strong> Final grand offering</li>
                                </ol>

                                <div className="bg-maroon-50 p-6 rounded-lg my-6">
                                    <h4 className="font-bold text-maroon-900 mb-3">Business Success Mantras</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Ganesh:</strong> "Om Gam Ganapataye Namah"</li>
                                        <li><strong>Lakshmi:</strong> "Om Shreem Mahalakshmyai Namah"</li>
                                        <li><strong>Kuber:</strong> "Om Yakshaya Kuberaya Namah"</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold mt-6">Post-Havan Practices</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Light lamp at business entrance daily</li>
                                    <li>Keep office clean and organized</li>
                                    <li>Chant business mantras before opening</li>
                                    <li>Donate 10% of profits regularly</li>
                                    <li>Maintain ethical business practices</li>
                                </ul>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Havan</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Business Success</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Business%20Success%20Havan" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Business Success Havan" />
            <Footer />
        </>
    )
}
