import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function BhaiDoojPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Bhai Dooj Puja in Pune',
        description: 'Book Pandit for Bhai Dooj (Bhau Beej) Puja in Pune. Authentic ritual to protect brother\'s life and strengthen sibling bond.',
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
        areaServed: {
            '@type': 'City',
            name: 'Pune',
        },
        offers: {
            '@type': 'Offer',
            price: '2100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '160'
        }
    }

    return (
        <>
            <Head>
                <title>Bhai Dooj Puja in Pune | Bhau Beej Ceremony</title>
                <meta name="description" content="Book Pandit for Bhai Dooj (Bhau Beej) Puja in Pune. Traditional Tilak ceremony and Yamuna-Yama puja vidhi. Pray for brother's long life and success." />
                <meta name="keywords" content="bhai dooj puja pune, bhau beej pandit, yama dwitiya puja, brother sister festival, bhai dooj vidhi" />
                <link rel="canonical" href="https://panditforpujabooking.com/puja-services/bhai-dooj-puja" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-purple-50/20 to-white">
                <section className="relative bg-purple-700 text-yellow-50 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-700/90 to-transparent z-10"></div>
                    <div className="container-custom relative z-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5">
                                    <span className="text-yellow-100 text-sm font-semibold tracking-wide uppercase">Sibling Bond</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-md text-white">
                                    Bhai Dooj Puja <br />
                                    <span className="text-yellow-300">Protective Love</span>
                                </h1>
                                <p className="text-lg text-white/90 border-l-4 border-yellow-400 pl-4 leading-relaxed">
                                    Celebrate the eternal bond of love and protection between brother and sister. Also known as Bhau Beej or Yama Dwitiya, this puja invokes Lord Yama's blessings for the brother's longevity.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button variant="primary" size="lg" href="#booking" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold shadow-lg shadow-yellow-500/20">
                                        Book Bhau Beej
                                    </Button>
                                    <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Bhai%20Dooj%20Puja" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                            Chat on WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-12">

                            <section id="significance" className="prose prose-lg max-w-none text-gray-700">
                                <h2 className="text-3xl font-serif font-bold text-purple-900 border-b-2 border-yellow-400 pb-2">Yama Dwitiya Significance</h2>
                                <p>
                                    Legend says that Goddess Yamuna fed her brother Yama (God of Death) on this day. Yama was so pleased that he declared that any brother who eats at his sister's house and receives a Tilak on this day will be protected from untimely death.
                                </p>
                                <p>
                                    It is a day that solidifies the promise of protection and care between siblings.
                                </p>
                            </section>

                            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">👫</span> Puja Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Brother's Longevity</h4>
                                            <p className="text-sm text-gray-600">Protects the brother from accidents and Yama's wrath.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sibling Harmony</h4>
                                            <p className="text-sm text-gray-600">Resolves conflicts and strengthens the emotional bond.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Family Prosperity</h4>
                                            <p className="text-sm text-gray-600">Brings happiness and unity to the extended family.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-purple-900">Puja Vidhi</h2>
                                <p className="text-gray-600">Ritual takes place during the day. Duration: <strong>30 - 45 mins</strong>.</p>

                                <div className="space-y-4">
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">01</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Chowk Creation</h4>
                                            <p className="text-sm text-gray-600">Making a rice flour square/seat for the brother to sit on.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">02</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Tilak Ceremony</h4>
                                            <p className="text-sm text-gray-600">Applying Tilak of roli, chandan, and rice on the brother's forehead while chanting protection mantras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">03</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Aarti & Owalni</h4>
                                            <p className="text-sm text-gray-600">Sister performs Aarti to ward off evil eyes. Brother offers gifts in return.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                                        <div className="min-w-[40px] font-bold text-purple-600 text-xl">04</div>
                                        <div>
                                            <h4 className="font-bold text-purple-900">Special Meal</h4>
                                            <p className="text-sm text-gray-600">Sister serves the brother's favorite dishes, particularly Basuundi/Sweets.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
                                <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">Puja Samagri List</h2>
                                <p className="text-gray-700 mb-4">Items for Bhau Beej:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span>• Puja Thali with Diya</span>
                                    <span>• Roli (Kumkum) & Rice</span>
                                    <span>• Chandan (Sandalwood)</span>
                                    <span>• Sweets & Dry Fruits</span>
                                    <span>• Coconut</span>
                                    <span>• Gift for Sister</span>
                                </div>
                            </section>

                            <section id="faqs" className="space-y-4">
                                <h2 className="text-3xl font-serif font-bold text-purple-900 mb-6">Expert FAQs</h2>
                                <div className="grid gap-4">
                                    {[
                                        { q: "Is it different from Raksha Bandhan?", a: "Yes. Rakhi is about the brother promising protection. Bhai Dooj is about the sister praying for the brother's life." },
                                        { q: "What if the brother is far away?", a: "The sister can worship the Moon (Chandra) as a proxy for the brother, or do a video call puja." },
                                        { q: "Who eats at whose house?", a: "Tradition says the brother should visit the sister's house for the meal." },
                                        { q: "What is the best time?", a: "The 'Aparahna' muhurat in the afternoon is considered most auspicious." },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
                                            <p className="font-bold text-purple-900 text-lg">Q: {faq.q}</p>
                                            <p className="text-gray-600 mt-2">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <PujaServiceLocations pujaName="Bhai Dooj Puja" />

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-500">
                                    <div className="bg-purple-700 p-4 text-center">
                                        <h3 className="text-white font-bold text-xl">Booking Summary</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-center mb-6">
                                            <p className="text-gray-500 text-sm">Puja starting from</p>
                                            <div className="text-4xl font-bold text-purple-900">₹2,100<span className="text-lg text-gray-400 font-normal">+</span></div>
                                            <p className="text-xs text-green-600 font-bold mt-1">✔ Diwali Finale</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-bold text-purple-900">30 Min</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Pandit Ji</span>
                                                <span className="font-bold text-purple-900">Guided Ritual</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-3">
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 shadow-md border-none">
                                                    Call to Celebrate
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Bhai%20Dooj%20Puja">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                                        🎁 Owalni Gift
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-purple-900 mb-4">Why Trust Us</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="text-purple-500">★</span> Authentic Mantras
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-500">★</span> Punctual Arrival
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-purple-500">★</span> Family Focus
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-purple-800 py-12 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold mb-4">A Bond Forever</h2>
                        <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
                            May the bond of love between brother and sister grow stronger with each passing year.
                        </p>
                        <Button variant="primary" size="lg" href="tel:+918446272142" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold px-12">
                            Call +91-8446272142
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
