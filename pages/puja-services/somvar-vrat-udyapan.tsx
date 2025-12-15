import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function SomvarVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Somvar Vrat Udyapan',
        description: 'Book Pandit for Solah Somvar Vrat Udyapan in Pune. Complete Vedic procedure for 16 Mondays fast conclusion with Rudrabhishek.',
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
                <title>Somvar Vrat Udyapan in Pune | 16 Mondays Fast Completion</title>
                <meta name="description" content="Book expert Pandit for Solah Somvar Vrat Udyapan in Pune. Authentic 16 Mondays fast conclusion with Rudrabhishek, Havan, and Rot creation." />
                <meta name="keywords" content="somvar vrat udyapan pune, solah somvar udyapan, 16 mondays fast udyapan, shiva puja pandit" />
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
                            <span className="text-maroon-900 font-semibold">Somvar Vrat Udyapan</span>
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
                            alt="Somvar Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">By Lord Shiva's Grace</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Solah Somvar Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Completing the Sacred Vow</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                The 16 Mondays fast is a powerful penance for finding a good partner or resolving severe difficulties. Perform the Udyapan with full Vidhi to offer gratitude to Lord Shiva.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Somvar%20Vrat%20Udyapan" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Om Namah Shivaya!</strong> The <strong>Somvar Vrat Udyapan</strong> (Solah Somvar Vrat Udyapan) is the powerful conclusion of the 16 Mondays Fast dedicated to Lord Shiva and Goddess Parvati.
                                </p>
                                <p>
                                    Mondays (Somvar) are ruled by the Moon (Soma), which is adorned on Lord Shiva's head (Chandrashekhar). The Moon represents the mind. By fasting on Mondays, one gains control over the mind and emotional stability. However, the special <strong>Solah Somvar Vrat</strong> is a more rigorous and specific observance undertaken for the fulfillment of extremely difficult wishes, such as finding a suitable life partner, curing chronic diseases, or overcoming impossible financial hurdles.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> is performed on the 17th Monday. It is believed that without the Udyapan, the fruit of the 16 fasts remains locked. The ceremony involves a grand Rudrabhishek, the special preparation of 'Rot' (sweet wheat cakes) Prasad, and a Havan to please the Divine Couple, Shiva and Shakti.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">The Historical & Spiritual Significance</h2>
                                <p>
                                    The tradition of the 16 Mondays fast is as old as the Puranas. It is said that Goddess Parvati herself observed this fast to win Lord Shiva as her husband. In later times, Draupadi and the Pandavas are also believed to have performed Shiva Pujas to regain their lost kingdom.
                                </p>
                                <p>
                                    This Vrat is unique because of its specific 'Prasad' rule. Unlike other fasts where fruit or general sweets are offered, the Solah Somvar Vrat requires the devotee to prepare a special Churma or Rot using Wheat Flour, Ghee, and Jaggery. This Prasad must be consumed at the temple or the place of worship and cannot be taken home or wasted. This teaches the lesson of 'Aparigraha' (non-hoarding) and complete surrender to the Divine presence in the moment.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Sacred Solah Somvar Katha</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The power of the 16 Mondays is best understood through its traditional story, which describes how even the cursed can be blessed.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Game of Dice and the Priest's Curse</h3>
                                    <p>
                                        Once, Lord Shiva and Goddess Parvati visited the beautiful city of Amravati. They decided to stay in a Shiva temple. To pass the time, Parvati Devi suggested playing a game of Chausar (dice). As they were playing, a Priest (Pujari) entered the temple. Parvati asked him, "O Knowledgeable One, tell us, who will win this game?"
                                    </p>
                                    <p>
                                        The Priest, without thinking appropriately, said, "Lord Shiva keeps the universe in balance; surely He will win." However, when the game concluded, Parvati had won. Angered by the Priest's false prediction and sycophancy, Parvati cursed him to become a leper. "A Priest must speak the truth," she declared. The Priest was instantly afflicted with leprosy and lived a miserable life of pain and isolation.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">Redemption through 16 Mondays</h3>
                                    <p>
                                        Years passed. Some celestial nymphs (Apsaras) visited the temple and saw the suffering Priest. They asked him the cause of his condition. The Priest narrated his tale of the curse. The benevolent Apsaras advised him, "Do not despair. Observe the <strong>Solah Somvar Vrat</strong> (16 Mondays Fast). On the 17th Monday, perform the Udyapan with half a seer (approx 500g) of wheat flour cooked with ghee and jaggery. Lord Shiva will surely heal you."
                                    </p>
                                    <p>
                                        The Priest followed their instructions meticulously. He fasted for 16 Mondays without water/food until sunset, offered the Prasad, and on the 17th Monday, performed the Udyapan. Lord Shiva was pleased, and the Priest was cured of leprosy, regaining his healthy form.
                                    </p>
                                    <p>
                                        Later, Shiva and Parvati visited the temple again. Parvati was surprised to see the Priest healed. She asked, "Who cured you of my curse?" The Priest described the Solah Somvar Vrat. Parvati, intrigued, decided to perform the same Vrat to win over her son Kartikeya, who had gone away from her in anger. Her wish was granted, and Kartikeya returned.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Brahmin's Son Journey</h3>
                                    <p>
                                        The story continues as Kartikeya asked his mother about the Vrat. He then performed it to reunite with a lost friend. the friend (a Brahmin) performed it to find a cure for his severe abdominal pain. Eventually, the Vrat's fame spread.
                                    </p>
                                    <p>
                                        A rich merchant's son decided to perform the Vrat to find a wife. He went to a distant city where a King had organized a Svayamvara for his daughter. The condition was that the princess would garland the man around whose neck a garland would fall from the sky (or an elephant would place it). The merchant's son was fasting on a Monday. He sat in the assembly. Through the power of his Vrat, the garland fell on his neck. The King married his daughter to him.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Tragedy of Neglected Prasad</h3>
                                    <p>
                                        Years later, the Merchant's son and the Princess return to his home. On the way, they stopped at a temple to perform the Somvar Puja. The wife (Princess) refused to go in, sending her maid instead. The maid attended the Puja, ate the Prasad, and brought some for the Princess. However, the Princess ate it without reverence.
                                    </p>
                                    <p>
                                        This disrespect caused the King's soldiers to capture the Princess, mistaking her for a thief (due to an illusion created by Shiva’s displeasure). The merchant's son was devastated. He prayed and realized his wife had insulted the Vrat Prasad. He performed the Vrat again for her release. Shiva forgave them, the King realized his mistake, and the couple was reunited. Since then, they observed the Vrat faithfully and lived happily.
                                    </p>
                                    <p className="font-bold text-maroon-900 mt-4">
                                        This story emphasizes two things: 1) The power of the Vrat to fix even 'cursed' fates. 2) The absolute necessity of respecting the Prasad and the Vidhi.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The Authentic Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">Performed on the 17th Monday</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. The Unique 'Rot' Preparation</h3>
                                        <p className="text-gray-700">
                                            This is the most critical part distinguishing Somvar Udyapan from regular Rudrabhishek.
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                            <h4 className="font-bold text-maroon-800 mb-2">Ingredients Ratio:</h4>
                                            <p className="text-gray-700 mb-2">
                                                Traditionally, it requires "Sava Ser" (approx 1.25 kg) of Wheat Flour. In modern context, you can take <strong>1.25 kg, 2.5 kg, or 5 kg</strong> (depending on guests).
                                            </p>
                                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                                <li>Mix the Wheat Flour with Ghee and Jaggery (Gur). No water is used ideally (milk can be used if needed).</li>
                                                <li>Make thick cakes (Rot).</li>
                                                <li>Bake them in an oven or traditionally in Cow Dung Ash (Kanda) fire for purity.</li>
                                                <li>Once baked, crush/crumble it into "Churma" (powdered form) or keep as pieces.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. The 3-Part Division Rule</h3>
                                        <p className="text-gray-700">
                                            The prepared Prasad MUST be kept in the Puja place and divided into <strong>three equal parts</strong>:
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Part 1:</strong> For the Deity (Shiva). This is later given to the Priest/Pandit or fed to a Cow.</li>
                                            <li><strong>Part 2:</strong> For Distribution (Brahmins, Family, Guests).</li>
                                            <li><strong>Part 3:</strong> For the Devotee (Yourself). You must eat this entire portion at the puja spot. You cannot take it home or save it for later.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Mahanyasa & Rudrabhishek</h3>
                                        <p className="text-gray-700">
                                            The Pandit begins the main puja.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Sankalp:</strong> Taking water in hand, stating your Name, Gotra, and the completion of 16 Mondays.</li>
                                            <li><strong>Ganesh Puja:</strong> Invoking Ganpati.</li>
                                            <li><strong>Kalash Puja:</strong> Worshiping the water pot.</li>
                                            <li><strong>Rudrabhishek:</strong> Continuous pouring of liquids on the Shiva Lingam while chanting the <em>"Rudram"</em> from Yajur Veda.
                                                <br /> - <strong>Milk:</strong> For progeny.
                                                <br /> - <strong>Curd:</strong> For peace.
                                                <br /> - <strong>Ghee:</strong> For moksha/health.
                                                <br /> - <strong>Honey:</strong> For wealth.
                                                <br /> - <strong>Sugar/Cane Juice:</strong> For happiness.
                                            </li>
                                            <li><strong>Shringar:</strong> Decorating the Lingam with Tripund (Chandam), Bel Patra, and Flowers.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Havan (Sacred Fire)</h3>
                                        <p className="text-gray-700">
                                            A Havan is performed offering the 'Charu' (ritual food) and sticks of the Palash/Shami tree. 108 Ahutis of <em>"Om Namah Shivaya Swaha"</em> and the Mahamrityunjaya Mantra are offered to Agni.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Brahmin Bhojan & Daan</h3>
                                        <p className="text-gray-700">
                                            It is customary to invite 17 Brahmins (symbolizing 16 Mondays + 1 for Udyapan). If that's not possible, inviting one learned Pandit is sufficient.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Offer them a Satvik meal (No onion/garlic).</li>
                                            <li><strong>Vastra Daan:</strong> Offer a Dhoti/Kurta to the Pandit.</li>
                                            <li><strong>Suhaag Daan:</strong> Women often donate a saree and makeup items to the Pandit's wife or a married woman, praying for their own marital longevity.</li>
                                            <li><strong>Dakshina:</strong> Offer money and fruits.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    Please ensure these items are ready for the Udyapan. Purity of ingredients is paramount for Shiva Puja.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Abhishek Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Milk:</strong> 1-2 Liters (Cow milk is best).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Curd:</strong> 250g.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Ghee:</strong> 250g (Desi Ghee).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Honey:</strong> 1 Small bottle.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Sugar:</strong> 100g.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Gangajal:</strong> Small bottle.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bel Patra:</strong> 108 leaves (Fresh, no cuts).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> White Kaner, Dhatura flowers, Rose garland.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Prasad & Havan</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Wheat Flour (Atta):</strong> 1.25 kg or as needed.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Jaggery (Gur):</strong> 500g.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Ghee for Prasad:</strong> 250g.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> Packet.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Wood:</strong> Mango wood.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cloth:</strong> White cloth (for Shiva), Red (for Parvati).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Fruits:</strong> 5 types of seasonal fruits.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Naiveidya:</strong> Sweet dish.</li>
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
                                            q: "Can I do the Udyapan at home or must it be in a temple?",
                                            a: "It is highly recommended to perform the Rudrabhishek and Puja in a Shiva Temple where a consecrated Lingam exists. If that is not possible, you can perform it at home on a 'Parthiv Shivling' (Shivling made of clay) which is immersed later."
                                        },
                                        {
                                            q: "What if I missed a Monday in between?",
                                            a: "If you missed a Monday due to impurity (periods) or travel where fasting was impossible, do not count that Monday. Continue the count from the next one. The fasts must be 16 in number."
                                        },
                                        {
                                            q: "Is salt allowed in Somvar Vrat?",
                                            a: "In the strict Solah Somvar Vrat, salt is typically avoided. Devotees eat one meal of sweet food (like Halwa or fruits). However, if health does not permit, rock salt (Sendha Namak) can be used, but strict adherence yields better results."
                                        },
                                        {
                                            q: "Why is the number 16 significant?",
                                            a: "16 denotes the 16 adornments (Solah Shringar) of Goddess Parvati and the 16 phases of the Moon. It represents fullness and perfection in devotion."
                                        },
                                        {
                                            q: "Can I share my Prasad portion with my spouse?",
                                            a: "No. The unique rule of Solah Somvar is that the devotee's portion (1/3rd) must be eaten entirely by the devotee themselves. Sharing it transfers the merit."
                                        },
                                        {
                                            q: "What benefits does this Udyapan give?",
                                            a: "It is most famous for 'Manvanchit Var' (Desired Groom/Bride). However, it is equally powerful for solving legal cases, chronic health issues, and conceiving children."
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
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Divine Blossoms of the Vrat</h2>
                                <p className="text-gray-700 mb-6 text-lg">
                                    Lord Shiva is 'Bholenath'—the innocent one who is easily pleased. The 16 Mondays Udyapan unlocks:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💑</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Dream Marriage</h4>
                                            <p className="text-gray-600">Unmarried girls find a husband with Shiva-like qualities (loyal, strong, ascetic). Men find a devoted wife like Parvati.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">🚑</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Healing Diseases</h4>
                                            <p className="text-gray-600">As seen in the Katha of the Brahmin, even incurable diseases like leprosy can be healed by Shiva's grace.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💼</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Career Stability</h4>
                                            <p className="text-gray-600">Removes fluctuations in business and career, providing stability like a mountain (Mount Kailash).</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">☮️</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Mental Peace</h4>
                                            <p className="text-gray-600">Calms the mind, removes anxiety and depression, and strengthens the Moon in the horoscope.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Complete 16 Somvar</p>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Kothrud" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Om Namah Shivaya.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Somvar Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
