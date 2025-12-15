import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HartalikaTeejVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hartalika Teej Vrat Udyapan',
        description: 'Book Pandit for Hartalika Teej Vrat Udyapan in Pune. Authentic Shiva-Parvati Puja for marital bliss and finding a good husband.',
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
            price: '2500',
            priceCurrency: 'INR',
        },
    }

    return (
        <>
            <Head>
                <title>Hartalika Teej Vrat Udyapan in Pune | Shiva Parvati Puja</title>
                <meta name="description" content="Book expert Pandit for Hartalika Teej Vrat Udyapan in Pune. Perform authentic Shiva-Parvati worship with sand idols for happy married life." />
                <meta name="keywords" content="hartalika teej vrat udyapan pune, teej puja pandit, shiva parvati puja, marital bliss puja" />
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
                            <span className="text-maroon-900 font-semibold">Hartalika Teej Udyapan</span>
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
                            src="/images/rudrabhishek-hero.png"
                            alt="Hartalika Teej Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Suhagan's Blessing</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Hartalika Teej Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Devotion to Shiva & Gowri</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Celebrated during Bhadrapada, this Vrat is revered for marital harmony. Perform the Udyapan to seek the ideal partner or long life for your spouse.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Teej Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Hartalika%20Teej%20Puja" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2 space-y-12">

                            {/* Intro Section - Expanded */}
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700">
                                <p className="lead text-xl text-maroon-800 font-medium">
                                    <strong>Hartalika Teej</strong> is the ultimate test of devotion and determination for a married woman. Celebrated on the third day (Tritiya) of the bright half of Bhadrapada month, it commemorates the day Goddess Parvati, through her intense penance, finally won Lord Shiva as her husband.
                                </p>
                                <p>
                                    The word <strong>'Hartalika'</strong> is derived from <em>'Harat'</em> (abduction) and <em>'Aalika'</em> (female friend). It refers to the legend where Parvati's friends abducted her to a thick forest so she could avoid a forced marriage to Lord Vishnu and instead pursue her love for Lord Shiva.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> is the formal conclusion of this rigorous fast. While most women observe this Vrat for a lifetime, an Udyapan ceremony is performed to mark a significant milestone (often after 12 years or after the wish is fulfilled) to offer gratitude to the Divine Couple, Uma-Maheshwar.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Nirjala: The Toughest Penance</h2>
                                <p>
                                    Unlike many other fasts, Hartalika Teej is traditionally 'Nirjala'—meaning performed without drinking even a drop of water for more than 24 hours. Women wake up early, eat 'Sargi' (in some traditions) before sunrise, and then abstain from food and water until the Puja is completed the next morning.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend: Love Against All Odds</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    How Goddess Parvati's rebellion became the foundation of marital bliss for eternity.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Father's Wish vs The Daughter's Will</h3>
                                    <p>
                                        Parvati (Shailputri) was born as the daughter of Himalaya (King of Mountains). From childhood, she adored Lord Shiva and worshipped him. Seeing her devotion, the sage Narada Muni visited Himalaya and proposed that Lord Vishnu, the Preserver, was the perfect match for her. Himalaya was overjoyed at the prospect of his daughter marrying the King of Vaikuntha.
                                    </p>
                                    <p>
                                        When Parvati heard this planning, she was devastated. She wept and confided in her close friend (Sakhi). "I have mentally accepted Lord Shiva as my husband. Just as a stone cannot be engraved twice, my heart cannot belong to another. If my father forces this marriage, I will give up my life."
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Abduction to the Forest</h3>
                                    <p>
                                        Parvati's wise friend suggested an alternative. "Let us escape into the deep jungle where no one can find you. There, you can perform penance for Shiva freely." Parvati agreed. Her friend 'abducted' her effectively saving her from the unwanted marriage. This act gave the festival its name, 'Hartalika'.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Penance of River Sand</h3>
                                    <p>
                                        In a cave near a flowing river, Parvati began her Tapasya. She ate nothing, drank nothing (Nirjala). With her own hands, she formed a Shiva Lingam using the river sand (known as <strong>Parthiv Shivling</strong> or Valu-cha Linga). She decorated it with forest leaves and Bel Patra.
                                    </p>
                                    <p>
                                        Moved by her unshakeable resolve and intense love, the ascetic Lord Shiva finally melted. He appeared before her in his divine form and accepted her proposal. Himalaya eventually accepted the union, realizing his daughter's divine destiny.
                                    </p>
                                    <p className="font-bold text-maroon-900 mt-4">
                                        Since then, women recreate this scene. They make idols from sand/mud, fast without water, and pray: "O Gauri-Shankar! Just as you united despite all odds, keep my marriage unbreakable."
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Commemorating the Divine Union</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Preparation of the 'Mandap'</h3>
                                        <p className="text-gray-700">
                                            The Puja area is decorated with banana stems (Keliche Khamb) and flowers to resemble a forest bower.
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                            <p><strong>The Idol (Murti):</strong> Unlike other Pujas where metal idols are used, Hartalika requires <strong>Sanctified Sand/Mud Idols</strong>. You must create:</p>
                                            <ul className="list-disc pl-5 mt-2">
                                                <li><strong>Lord Shiva</strong> (Lingam form or human form).</li>
                                                <li><strong>Goddess Parvati</strong>.</li>
                                                <li><strong>Lord Ganesha</strong>.</li>
                                                <li><strong>Sakhi (Friend)</strong> who helped Parvati.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Shodoshopchar Puja (16 Steps)</h3>
                                        <p className="text-gray-700">
                                            The Pandit invokes life (Pran Pratishtha) into the sand idols.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Abhishek:</strong> Though they are sand idols, a symbolic sprinkling of Panchamrit is done (carefully so they don't dissolve) or offered to a metal Yantra alongside.</li>
                                            <li><strong>Vastra Offering:</strong> A Dhoti for Shiva and a Saree/Choli for Parvati.</li>
                                            <li><strong>Patri (Leaves):</strong> This is crucial. Specific leaves like Bel, Shami, Kenade, Rui, and others are offered.</li>
                                            <li><strong>Phalam:</strong> Seasonal fruits like Cucumber and Guava are mandatory.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. The 'Anga Puja'</h3>
                                        <p className="text-gray-700">
                                            A special rhythmic chanting where every part of the Goddess's body is worshipped.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>"Om Umayai Namah - I worship the feet."</li>
                                            <li>"Om Gauriyai Namah - I worship the knees."</li>
                                            <li>"Om Parvatyai Namah - I worship the waist."</li>
                                            <li>...and so on up to the head. This signifies seeing divinity in the entire female form.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Suhag Pitari (The Basket of Love)</h3>
                                        <p className="text-gray-700">
                                            A bamboo basket (Pitari) or plate is filled with 16 marks of a married woman (Solah Shringar).
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Sindoor, Bindi, Kajal.</li>
                                            <li>Mehndi (Henna).</li>
                                            <li>Red Bangles, Toe rings (Bichhiya).</li>
                                            <li>Comb, Mirror, Oil.</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2">
                                            This basket is offered to the Goddess and then given to a Brahmin wife or an elder married woman (Suvasini) seeking her blessings.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Jagran (Night Vigil)</h3>
                                        <p className="text-gray-700">
                                            Women stay awake all night singing 'Teej Songs', performing Aarti every Prahara (3-hour interval), and listening to the Katha. Sleeping is considered inauspicious during this Vrat.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">6. Uttar Puja & Visarjan</h3>
                                        <p className="text-gray-700">
                                            The next morning, after a final Aarti and offering of 'Dahi-Bhat' (Curd Rice), the sand idols are gently moved (Visarjan) and later immersed in a river or water tank. Only after this do the women break their fast.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Ensure purity for the Parthiv (Sand) Puja.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For the Idol & Mandap</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Black/River Sand:</strong> For making Lingam.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Banana Stems:</strong> 4 pieces for corners.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flower Canopy:</strong> (Chandova).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Wooden Chowki:</strong> For placing idols.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Red/White Cloth:</strong> To cover chowki.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Offerings (Naivedya/Vastra)</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bel Patra:</strong> 108 leaves.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> Dhatura, Akanda, White Kaner.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruits:</strong> 5 types. Cucumber is special.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Suhag Pitari:</strong> Makeup items.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Saree & Blouse:</strong> For Donation (Daan).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Panchamrit:</strong> Milk, Curd, Ghee, Honey, Sugar.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "I cannot bear thirst (Nirjala). Can I drink water?",
                                            a: "Ideally, Hartalika is Nirjala. However, if health does not permit, one can observe 'Phalahar' (Fruits and Milk) or at least drink water. The intention and devotion (Bhav) matter more than physical torture. Consult your family traditions."
                                        },
                                        {
                                            q: "Can menstruating women perform this Puja?",
                                            a: "Traditionally, women in their menstrual cycle do not perform the Puja directly. They can sit nearby, listen to the Katha, and fast mentally, while a family member or Pandit performs the physical rituals on their behalf."
                                        },
                                        {
                                            q: "Do I need to make a new sand idol every year?",
                                            a: "Yes. The essence of this Vrat is 'Parthiv Pujan'—creation and dissolution. You must create a fresh Lingam and idols from sand/clay every year and immerse them the next day."
                                        },
                                        {
                                            q: "Can widows observe this Vrat?",
                                            a: "Yes. While Suhagins (married women) do it for husband's life, widows can observe it to seek Lord Shiva's blessings for moksha and a spiritual reunion in the next life."
                                        },
                                        {
                                            q: "Is Katha reading mandatory?",
                                            a: "Yes. The Vrat is considered incomplete without listening to the Hartalika Katha. It reminds the devotee of the struggle and victory of Goddess Parvati."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Benefits Detailed */}
                            <section id="benefits" className="bg-maroon-50 rounded-2xl p-8 border border-maroon-100">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Divine Fruits of this Penance</h2>
                                <p className="text-gray-700 mb-6 text-lg">
                                    Hartalika Teej is not just a ritual; it is a shield that protects the marital bond.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💑</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Ideal Life Partner</h4>
                                            <p className="text-gray-600">Unmarried girls who observe this Vrat are blessed with a husband who is caring, respectful, and loving, just like Shiva.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🛡️</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Protects Spouse's Life</h4>
                                            <p className="text-gray-600">It is believed to form a protective aura (Kavach) around the husband, averting accidents and illness.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🕊️</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Marital Harmony</h4>
                                            <p className="text-gray-600">Resolves misunderstandings, removes the 'third person' influence, and brings peace to the household.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🕉️</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Shiva Sayujya</h4>
                                            <p className="text-gray-600">Ultimately, it grants the devotee a place in Shiva Loka after death.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Puja</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Celebrate Hartalika Teej</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Shiva-Parvati Bless You.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Hartalika Teej Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
