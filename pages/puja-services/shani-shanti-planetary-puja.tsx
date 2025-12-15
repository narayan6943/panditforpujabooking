import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ShaniShantiPlanetaryPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shani Shanti Puja',
        description: 'Book Pandit for Shani Shanti Puja in Pune. Specialized Vedic rituals for Saturn transit remedies, Dhaiya, and Mahadasha relief.',
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
        },
    }

    return (
        <>
            <Head>
                <title>Shani Shanti Puja in Pune | Saturn Remedy Pandit</title>
                <meta name="description" content="Book expert Guruji for Shani Shanti Puja in Pune. Vedic remedies for Shani Mahadasha, Dhaiya, and weak Saturn. Oil Abhishek and Havan." />
                <meta name="keywords" content="shani shanti puja pune, shani mahadasha remedy, saturn puja pandit, shani dosh nivaran" />
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
                            <span className="text-maroon-900 font-semibold">Shani Shanti Puja</span>
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
                            src="/images/navagraha-hero.png"
                            alt="Shani Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Saturn Remedies</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Shani Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Overcome Challenges</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Saturn is the great teacher. If you are facing the challenges of Shani Mahadasha or a difficult transit, this puja helps to balance your karma and bring relief through devotion.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Shani Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Shani%20Shanti%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Shani Shanti Puja</strong> is a dedicated service to appease Lord Saturn (Shani Dev). Unlike Sade Sati puja which focuses on the 7.5 year cycle, this puja is for general Shani Doshas, unfavorable transits (Grah Gochar), or the 19-year <strong>Shani Mahadasha</strong>.
                                </p>
                                <p>
                                    When Saturn is adverse, it causes delays, depression, bone health issues, and loneliness. A proper Vedic Shanti helps mitigate these effects and turns hurdles into stepping stones.
                                </p>
                                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 my-6 rounded-r-lg">
                                    <p className="font-semibold text-maroon-800 m-0">
                                        Performed by expert Pandits on Saturdays with Shani Tailabhishek.
                                    </p>
                                </div>
                            </section>

                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold mt-8">The Mythology of Shani Dev: The Just Judge</h2>
                                <p>
                                    <strong>Shani Dev</strong> (Saturn) is the son of Surya (Sun God) and Chhaya (Shadow). Born with a dark complexion due to his mother's intense penance, Shani represents the karmic force of the universe. Unlike other planets, Shani doesn't discriminate - he treats kings and paupers equally, rewarding good deeds and punishing bad karma.
                                </p>

                                <p>
                                    The most famous story is of King Vikramaditya, who despite being a great king, had to face Shani's Sade Sati (7.5-year period). He lost his kingdom, became a laborer, and suffered immensely. However, his patience and adherence to dharma eventually restored his fortune. This teaches that Shani tests everyone, but those who maintain righteousness emerge stronger.
                                </p>

                                <p>
                                    Another significant legend involves Lord Hanuman. When Shani tried to afflict Hanuman, the mighty devotee of Lord Rama trapped Shani under his tail. Shani begged for release and promised that those who worship Hanuman would be protected from his malefic effects. This is why Hanuman worship is a powerful remedy for Shani Dosh.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance of Shani (Saturn)</h2>
                                <p>In Vedic Astrology, Shani is the slowest-moving planet, taking approximately 2.5 years to transit through each zodiac sign:</p>
                                <ul>
                                    <li><strong>Zodiac Signs Ruled:</strong> Capricorn (Makar) and Aquarius (Kumbha)</li>
                                    <li><strong>Exaltation:</strong> Libra (Tula) - 20 degrees</li>
                                    <li><strong>Debilitation:</strong> Aries (Mesha) - 20 degrees</li>
                                    <li><strong>Friendly Planets:</strong> Mercury, Venus, Rahu</li>
                                    <li><strong>Enemy Planets:</strong> Sun, Moon, Mars</li>
                                    <li><strong>Neutral:</strong> Jupiter</li>
                                    <li><strong>Mahadasha Period:</strong> 19 years (longest among all planets)</li>
                                    <li><strong>Direction:</strong> West</li>
                                    <li><strong>Gemstone:</strong> Blue Sapphire (Neelam) - use with extreme caution</li>
                                    <li><strong>Metal:</strong> Iron, Steel</li>
                                    <li><strong>Color:</strong> Black, Dark Blue</li>
                                    <li><strong>Day:</strong> Saturday (Shanivar)</li>
                                    <li><strong>Deity:</strong> Lord Shiva, Lord Hanuman</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Understanding Sade Sati: The 7.5-Year Cycle</h3>
                                <p>Sade Sati is the most feared period in Vedic astrology, occurring when Saturn transits through the 12th, 1st, and 2nd houses from your Moon sign:</p>
                                <ul>
                                    <li><strong>First Phase (12th house):</strong> 2.5 years - Expenses increase, foreign travel, health issues begin</li>
                                    <li><strong>Second Phase (1st house):</strong> 2.5 years - Peak difficulties, identity crisis, major life changes</li>
                                    <li><strong>Third Phase (2nd house):</strong> 2.5 years - Family issues, financial stress, speech problems</li>
                                </ul>
                                <p>Not all Sade Sati periods are equally difficult. If Saturn is well-placed in your birth chart or you have strong Jupiter, the effects are mitigated. Shani Shanti Puja is essential during this period.</p>

                                <h3 className="text-2xl font-bold mt-8">Symptoms of Shani Dosh</h3>
                                <p>When Saturn is afflicted or during difficult transits, you may experience:</p>
                                <ul>
                                    <li><strong>Chronic Health Issues:</strong> Joint pain, arthritis, bone problems, dental issues, chronic fatigue, and slow recovery from illnesses</li>
                                    <li><strong>Career Delays:</strong> Stagnation in profession, delayed promotions, job losses, or working harder than others for less reward</li>
                                    <li><strong>Financial Struggles:</strong> Persistent money problems despite hard work, debts, or blocked income sources</li>
                                    <li><strong>Mental Depression:</strong> Feeling hopeless, pessimistic thoughts, isolation, and lack of motivation</li>
                                    <li><strong>Relationship Issues:</strong> Delays in marriage, separation, or constant misunderstandings with family</li>
                                    <li><strong>Legal Troubles:</strong> Court cases, property disputes, or government-related problems</li>
                                    <li><strong>Loneliness:</strong> Feeling isolated even in crowds, lack of support from friends and family</li>
                                    <li><strong>Accidents:</strong> Especially related to vehicles, falls, or workplace injuries</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Shani Shanti Puja Essential?</h3>
                                <p>The puja becomes critically important in these situations:</p>
                                <ul>
                                    <li><strong>Shani Mahadasha:</strong> The 19-year Saturn period requires regular Shanti pujas</li>
                                    <li><strong>Sade Sati:</strong> The 7.5-year cycle when Saturn transits 12th, 1st, and 2nd from Moon</li>
                                    <li><strong>Dhaiya (2.5 years):</strong> When Saturn transits 4th or 8th from Moon</li>
                                    <li><strong>Saturn in 1st House:</strong> Affects health, personality, and overall life direction</li>
                                    <li><strong>Saturn in 7th House:</strong> Delays marriage or creates partnership problems</li>
                                    <li><strong>Saturn in 8th House:</strong> Chronic diseases, accidents, and sudden losses</li>
                                    <li><strong>Saturn in 10th House:</strong> Career obstacles despite being Saturn's own house</li>
                                    <li><strong>Saturn-Mars Conjunction:</strong> Increases accidents and aggressive conflicts</li>
                                    <li><strong>Debilitated Saturn:</strong> Saturn in Aries causes maximum difficulties</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Shani's Positive Manifestations</h3>
                                <p>When properly propitiated, Saturn becomes the greatest benefactor:</p>
                                <ul>
                                    <li><strong>Discipline and Structure:</strong> Ability to work hard consistently and achieve long-term goals</li>
                                    <li><strong>Justice and Fairness:</strong> Strong moral compass and ethical behavior</li>
                                    <li><strong>Longevity:</strong> Long life and good health in old age</li>
                                    <li><strong>Spiritual Growth:</strong> Detachment from material desires and focus on higher truths</li>
                                    <li><strong>Authority:</strong> Success in government jobs, politics, or positions of responsibility</li>
                                    <li><strong>Wealth Through Hard Work:</strong> Accumulated wealth that lasts generations</li>
                                </ul>
                            </section>

                            <section id="importance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Significance</h2>
                                <p>
                                    Shani Dev represents justice. He is not evil; he simply enforces the law of karma. Worshiping him shows our willingness to accept our duties and correct our path.
                                </p>
                                <h3>Benefits:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Relief from chronic ailments (joint pain, etc.).",
                                        "Removal of hurdles in legal cases.",
                                        "Protection from enemies and competitors.",
                                        "Stability in profession.",
                                        "Mental peace and reduced anxiety."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                            <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Vidhi Section */}
                            <section id="vidhi">
                                <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                    <div className="bg-maroon-900 text-white p-6 md:p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h2 className="text-3xl font-serif font-bold relative z-10">Puja Procedure</h2>
                                        <p className="text-gold-200 mt-2 relative z-10">Vedic Steps.</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">1. Sankalp</h3>
                                                <p className="text-gray-700">Stating name, gotra, and purpose of the puja for specific relief.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">2. Shani Stotra Path</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Recitation of Dasharath Krit Shani Stotra (Very powerful).</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">3. Pipaleshwar Mahadev Puja</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Worshipping Lord Shiva in the form of the Peepal tree.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">4. 108 Name Chants</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Offering black flowers or sesame with each name of Shani Dev.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-maroon-800 mb-3 border-b border-gold-100 pb-2">5. Havan & Daan</h3>
                                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                        <li>Fire ritual followed by donation of black cloth/shoes/food to needy.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Section */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 md:p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Samagri List</h2>
                                <p className="text-gray-700 mb-6">
                                    Items for Shani Pacification.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">⚫</span> Main Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Mustard Oil (at least 200ml).</li>
                                            <li>Black Sesame (Til).</li>
                                            <li>Black Urad Dal.</li>
                                            <li>Purple/Blue flowers.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gold-100">
                                        <h3 className="font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-xl mr-2">🪵</span> Havan Items
                                        </h3>
                                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                            <li>Shami Wood (Samidha).</li>
                                            <li>Ghee.</li>
                                            <li>Purnahuti material.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Complete Solution</h2>
                                        <p className="text-gold-100 mb-6">We don't just perform the puja; we guide you on lifestyle changes desirable during Shani periods (Seva, Truthfulness, Charity) to maximize the benefits.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Vedic Shanti Mantra",
                                                "Proper Tila Havan",
                                                "Guidance on Daan",
                                                "Experienced Gurujis",
                                                "Satisfaction guaranteed"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center text-white">
                                                    <span className="w-6 h-6 rounded-full bg-saffron-500 flex items-center justify-center text-xs mr-3">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-gold-500/30">
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-white mb-2">Book Puja</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹2,100 <span className="text-sm font-normal text-gray-300">Dakshina</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Duration: 1.5 hours.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-indigo-50 to-gray-50 rounded-2xl p-8 shadow-md border border-indigo-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Shani Remedies and Lifestyle Changes</h2>
                                <p className="text-gray-700 mb-4">
                                    Beyond the puja, these practices significantly reduce Shani's malefic effects:
                                </p>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Hanuman Worship:</strong> Read Hanuman Chalisa daily, especially on Tuesdays and Saturdays</li>
                                    <li><strong>Saturday Fasting:</strong> Observe partial fast, consuming only one meal without salt and oil</li>
                                    <li><strong>Mustard Oil Lamp:</strong> Light a mustard oil lamp under a Peepal tree every Saturday evening</li>
                                    <li><strong>Feed Crows:</strong> Feed crows, especially on Saturdays (Saturn's creatures)</li>
                                    <li><strong>Shani Mantra:</strong> Chant <em>"Om Sham Shanaishcharaya Namah"</em> 108 times daily</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Behavioral Modifications</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Serve the Elderly:</strong> Respect and serve old people, especially parents and grandparents</li>
                                    <li><strong>Help the Disabled:</strong> Assist handicapped or underprivileged people regularly</li>
                                    <li><strong>Honesty:</strong> Maintain strict honesty in all dealings - Saturn punishes dishonesty severely</li>
                                    <li><strong>Hard Work:</strong> Accept that success will come through persistent effort, not shortcuts</li>
                                    <li><strong>Patience:</strong> Develop patience and avoid impulsive decisions</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Dietary and Health Guidelines</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Include black sesame, urad dal, and iron-rich foods in diet</li>
                                    <li>Avoid alcohol and intoxicants completely during Shani periods</li>
                                    <li>Regular exercise, especially yoga for joint health</li>
                                    <li>Get adequate sleep and maintain disciplined routines</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Shani Shanti Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Can Shani Shanti Puja be performed at home?",
                                            a: "Yes, Shani Shanti can be performed at home with a qualified pandit. However, some people prefer doing it in a Shani temple or under a Peepal tree for added spiritual benefit. If performing at home, ensure you have a clean, dedicated space, preferably in the west direction. The pandit will bring all necessary samagri and perform the complete Vedic ritual. Home pujas are actually beneficial as they cleanse your living space of Saturn's negative energy."
                                        },
                                        {
                                            q: "Does worshipping Shani Dev bring bad luck or is it dangerous?",
                                            a: "This is a complete myth and misconception. Worshipping Shani Dev does NOT bring bad luck - in fact, it's a protective measure that brings discipline, justice, and long-term prosperity. The fear comes from misunderstanding Saturn's nature. Shani is not evil; he's the karmic enforcer who rewards good deeds and punishes bad karma. By worshipping him, you're showing respect and willingness to correct your path, which actually reduces his malefic effects. Many successful people have strong Saturn in their charts and worship him regularly."
                                        },
                                        {
                                            q: "What is the difference between Shani Shanti Puja and Sade Sati Puja?",
                                            a: "Shani Shanti Puja is a general remedy for any Saturn-related affliction - weak Saturn in birth chart, Shani Mahadasha, unfavorable transits, or specific problems like career delays and health issues. Sade Sati Puja is specifically for the 7.5-year period when Saturn transits through the 12th, 1st, and 2nd houses from your Moon sign. Sade Sati Puja is more intensive and may require multiple sessions throughout the 7.5-year period. If you're in Sade Sati, you should do Sade Sati Puja; otherwise, Shani Shanti Puja is sufficient. Consult an astrologer to determine which you need."
                                        },
                                        {
                                            q: "Should I wear Blue Sapphire (Neelam) for Shani Dosh?",
                                            a: "Blue Sapphire is Saturn's gemstone but should be worn with EXTREME CAUTION and only after detailed astrological consultation and a trial period. Neelam is the most powerful gemstone and can give instant results - both positive and negative. If Saturn is malefic in your chart, wearing Neelam can amplify problems instead of solving them. A qualified astrologer must check: (1) Saturn's placement and strength in your chart, (2) Current Dasha period, (3) Your ascendant and Moon sign. If recommended, wear a 5-7 carat natural Blue Sapphire in silver or panchdhatu on the middle finger of the right hand on a Saturday. Always do a 3-day trial by keeping it under your pillow before wearing. Many astrologers prefer Shani Shanti Puja over gemstones as it's universally safe."
                                        },
                                        {
                                            q: "When is the best time to perform Shani Shanti Puja?",
                                            a: "The most auspicious times are: (1) Saturday (Shanivar), especially during Shani Hora (Saturn's hour), (2) During Shani Jayanti (Amavasya in Jyeshtha month), (3) When entering Shani Mahadasha or Sade Sati, (4) On Pradosh Kaal (evening twilight) on Saturdays, (5) During Uttara Bhadrapada, Pushya, or Anuradha nakshatra. The puja should ideally be performed in the evening (after 5 PM) as Saturn rules the evening time. Consult an experienced pandit for your personalized Muhurat based on your birth chart. Avoid performing during inauspicious periods like Rahu Kaal (except for Rahu remedies)."
                                        },
                                        {
                                            q: "How many times should Shani Shanti Puja be performed?",
                                            a: "For general Shani Dosh, one comprehensive puja is usually sufficient if performed correctly with proper mantras and rituals. However, in specific cases: (1) During 19-year Shani Mahadasha - annual puja is recommended, (2) During 7.5-year Sade Sati - puja at the beginning of each phase (every 2.5 years), (3) For chronic problems - repeat after 1 year if issues persist, (4) Preventive measure - once every 2-3 years on Shani Jayanti. The key is maintaining daily practices (Hanuman Chalisa, Saturday fasting, charity) after the puja. One properly performed puja with devotion and subsequent daily discipline is more effective than multiple rushed ceremonies."
                                        },
                                        {
                                            q: "What donations (Daan) are most effective for Shani Dosh?",
                                            a: "Saturn-specific donations include: (1) Black cloth, black shoes, or black umbrella to the poor or laborers, (2) Mustard oil in iron vessels to temples for lighting lamps, (3) Black sesame, urad dal, and iron items, (4) Feeding crows, ants, or fish on Saturdays, (5) Money to handicapped people, elderly, or laborers, (6) Iron utensils or tools to workers, (7) Serving food at old age homes or hospitals. The donation should be made on Saturday with the mantra 'Om Sham Shanaishcharaya Namah' and without expectation of return. Saturn appreciates service to the underprivileged, so regular volunteer work at charitable institutions is highly beneficial. Remember: quality of service matters more than quantity."
                                        },
                                        {
                                            q: "Can Shani Dosh cause delays in marriage?",
                                            a: "Yes, absolutely. Saturn in the 7th house (marriage house) or aspecting it is one of the primary causes of marriage delays in Vedic astrology. Saturn's slow-moving nature creates obstacles, delays, and makes the person very selective about partners. Additionally, Saturn in 1st house can delay marriage due to focus on career/studies, and Saturn in 8th house can create fear of commitment. During Sade Sati or Shani Mahadasha, marriage proposals may come but get cancelled at the last moment. Shani Shanti Puja, combined with Mangal Dosh remedies if applicable, can significantly help. After puja, maintain patience - Saturn teaches that good things come to those who wait and work hard."
                                        },
                                        {
                                            q: "Are there any precautions during Shani Shanti Puja?",
                                            a: "Yes, observe these precautions: (1) Avoid non-vegetarian food, alcohol, and tobacco for 3 days before and after, (2) Wear black or dark blue clothes on the puja day, (3) Women should not perform during menstruation, (4) Pregnant women can participate but should consult the pandit, (5) Maintain celibacy on the puja day, (6) After puja, continue Saturday fasting and Hanuman worship for at least 40 Saturdays, (7) Don't expect immediate results - Saturn's blessings come gradually through persistent effort, (8) Avoid dishonesty, shortcuts, or unethical behavior during the remedial period as Saturn will punish severely. If you experience temporary increase in problems initially, it's often Saturn testing your patience before granting relief."
                                        },
                                        {
                                            q: "Why is Hanuman worship important for Shani Dosh?",
                                            a: "Lord Hanuman has a special relationship with Shani Dev based on a famous mythological incident. When Shani tried to afflict Hanuman with his malefic gaze, Hanuman trapped Shani under his tail and squeezed him. In severe pain, Shani begged for release and promised that those who worship Hanuman would be protected from his malefic effects. Since then, Hanuman worship has been the most powerful remedy for Shani Dosh. Reading Hanuman Chalisa daily, especially on Tuesdays and Saturdays, creates a protective shield against Saturn's negative influence. Visiting Hanuman temples on Saturdays and offering sindoor, oil, and red flowers is highly beneficial. The combination of Shani Shanti Puja and regular Hanuman worship provides maximum protection and relief."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-gold-100 p-5">
                                            <h3 className="font-bold text-maroon-800 mb-2 text-lg">{faq.q}</h3>
                                            <p className="text-gray-700">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Shani Puja</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">General Shanti & Remedy</p>

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
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. Aundh" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Remove Obstacles.
                                    </p>
                                </form>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Client Feedback</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"I was recommended this puja by an astrologer. The process was very smooth and the Guruji was very knowledgeable."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">K</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Ketan M.</p>
                                                <p className="text-[10px] text-gray-500">Baner</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Shani Shanti Puja" />

                <Footer />
            </main >
        </>
    )
}
