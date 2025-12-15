import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function RahuDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Rahu Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Pandit for Rahu Dosh Shanti Puja in Pune. Pacify Rahu Mahadasha effects. Remove confusion, fear, and sudden obstacles.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Rahu Dosh Shanti' },
        { id: 'about', title: 'Effects of Rahu' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Rahu Dosh Shanti Puja in Pune – Pacify The Shadow Planet</title>
                <meta name="description" content="Facing sudden problems or confusion? Book Rahu Dosh Shanti Puja in Pune. Expert remedies for Rahu Mahadasha and Antardasha. restore clarity and success." />
                <meta name="keywords" content="Rahu Dosh Shanti Pune, Rahu Mahadasha Remedies, Rahu Puja Pune, Kaal Sarp Dosh Rahu, Shadow Planet Puja" />
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
                            <span className="text-maroon-900 font-semibold">Rahu Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/navagraha-shanti-hero.png"
                            alt="Rahu Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Relief from Sudden Troubles</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Rahu Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Clear Confusion & Obstacles</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Rahu is the planet of illusion and materialism. Its affliction brings sudden shocks, mental unrest, and health issues. Pacify Rahu with Vedic Vidhi.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Rahu Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Rahu%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section id="intro" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <p><strong>Rahu</strong> is a shadow planet (Chhaya Graha) known for its powerful influence on the mind and worldly desires. While a positive Rahu can bring massive success, an afflicted Rahu (Rahu Dosh) causes confusion, hallucinations, sudden financial losses, and undiagnosed health problems.</p>
                                <p><strong>Rahu Dosh Shanti Puja</strong> is essential during Rahu Mahadasha or Antardasha, or when Rahu is placed in sensitive houses (1st, 5th, 8th, or 12th) in the horoscope.</p>

                                <h3 id="about" className="text-2xl font-bold mt-8">Symptoms of Rahu Dosh</h3>
                                <ul>
                                    <li><strong>Mental Issues:</strong> Anxiety, phobias, insomnia, and confusion.</li>
                                    <li><strong>Sudden Failures:</strong> Unexpected job loss or business collapse.</li>
                                    <li><strong>Relationship Strain:</strong> Misunderstandings leading to separation.</li>
                                    <li><strong>Health:</strong> Skin diseases, allergies, or ailments doctors can't diagnose.</li>
                                </ul>
                            </section>

                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold mt-8">The Mythology of Rahu: The Severed Head</h2>
                                <p>
                                    According to the <strong>Samudra Manthan</strong> (Churning of the Ocean) legend from the Puranas, when the Devas and Asuras churned the cosmic ocean to obtain Amrita (nectar of immortality), a demon named <strong>Svarbhanu</strong> disguised himself as a Deva and consumed the nectar. Lord Vishnu, alerted by the Sun (Surya) and Moon (Chandra), immediately severed Svarbhanu's head with his Sudarshan Chakra.
                                </p>

                                <p>
                                    However, since the demon had already consumed the nectar, he became immortal. His head became <strong>Rahu</strong> (the North Node) and his body became <strong>Ketu</strong> (the South Node). To this day, Rahu holds eternal enmity toward the Sun and Moon, which is why eclipses occur when Rahu "swallows" these luminaries.
                                </p>

                                <p>
                                    This mythological context is crucial to understanding Rahu's nature: it represents <strong>illusion, deception, foreign elements, sudden events, and unfulfilled desires</strong>. Rahu is the planet of materialism and worldly ambitions, often bringing success through unconventional means but also causing mental turmoil when afflicted.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance of Rahu</h2>
                                <p>In Vedic Astrology (Jyotish Shastra), Rahu is considered a <strong>malefic planet</strong> by nature, though it can give positive results when well-placed:</p>
                                <ul>
                                    <li><strong>Zodiac Sign:</strong> Co-rules Aquarius with Saturn</li>
                                    <li><strong>Exaltation:</strong> Taurus (some texts say Gemini)</li>
                                    <li><strong>Debilitation:</strong> Scorpio (some texts say Sagittarius)</li>
                                    <li><strong>Friendly Planets:</strong> Mercury, Venus, Saturn</li>
                                    <li><strong>Enemy Planets:</strong> Sun, Moon, Mars</li>
                                    <li><strong>Mahadasha Period:</strong> 18 years</li>
                                    <li><strong>Gemstone:</strong> Hessonite Garnet (Gomed)</li>
                                    <li><strong>Metal:</strong> Lead</li>
                                    <li><strong>Color:</strong> Smoky, Blue-Black</li>
                                    <li><strong>Day:</strong> Saturday</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Rahu Dosh Shanti Puja Essential?</h3>
                                <p>The puja becomes critically important in these astrological situations:</p>
                                <ul>
                                    <li><strong>Rahu Mahadasha or Antardasha:</strong> The 18-year Rahu period brings intense energy</li>
                                    <li><strong>Rahu in 1st House:</strong> Affects personality and creates identity confusion</li>
                                    <li><strong>Rahu in 5th House:</strong> Problems in education, children, and speculation</li>
                                    <li><strong>Rahu in 7th House:</strong> Marriage delays and partner issues</li>
                                    <li><strong>Rahu in 8th House:</strong> Sudden accidents and chronic diseases</li>
                                    <li><strong>Rahu-Moon Conjunction:</strong> Creates Grahan Yoga causing mental disturbances</li>
                                    <li><strong>Kaal Sarp Dosh:</strong> When all planets are between Rahu and Ketu</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Rahu Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Rahu Mantra Jaap (18,000 chants) & Havan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Rahu-Ketu Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Extensive puja for both shadow planets. 72,000+ Jaap & Special Havan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (Blue/Black Items)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Blue/Black Cloth</li>
                                    <li>Black Sesame (Til), Black Urad Dal</li>
                                    <li>Iron/Lead items (symbolic)</li>
                                    <li>Mustard Oil (Sarson ka Tel)</li>
                                    <li>Durva Grass</li>
                                    <li>Coconut, Betel nuts</li>
                                    <li>Silver Nag-Nagin (Serpent)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Rahu Dosh Shanti Ritual Vidhi</h2>
                                <p>The Rahu Dosh Shanti Puja is a complex Vedic ritual that must be performed with precision and devotion. Here's the complete step-by-step process:</p>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Fasting (Optional but Recommended):</strong> The devotee should observe a fast from sunrise, consuming only water or fruits. This purifies the body and mind.</li>
                                    <li><strong>Bath and Clean Clothes:</strong> Take a purifying bath and wear clean, preferably blue or black clothes (Rahu's colors).</li>
                                    <li><strong>Puja Space Setup:</strong> Clean the puja area thoroughly. Face Southwest (Rahu's direction) during the ritual.</li>
                                    <li><strong>Timing:</strong> Ideally performed on Saturday, during Rahu Kaal, or on Amavasya (New Moon). Consult a pandit for your specific Muhurat.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li>
                                        <strong>Ganesh Puja (Vighnaharta Invocation):</strong>
                                        <p>Begin with Lord Ganesha worship to remove obstacles. Offer modak, durva grass, and red flowers. Chant: <em>"Om Gan Ganapataye Namah"</em> (108 times).</p>
                                    </li>
                                    <li>
                                        <strong>Kalash Sthapana (Sacred Pot Installation):</strong>
                                        <p>Fill a copper kalash with water, place mango leaves around the rim, and top with a coconut. This represents divine presence and cosmic energy.</p>
                                    </li>
                                    <li>
                                        <strong>Navagraha Puja (Nine Planets Worship):</strong>
                                        <p>Worship all nine planets to balance cosmic energies. Special attention to Rahu with blue flowers and black sesame. This acknowledges Rahu's place in the cosmic order.</p>
                                    </li>
                                    <li>
                                        <strong>Rahu Yantra Puja (Sacred Geometry Consecration):</strong>
                                        <p>The Rahu Yantra is a mystical diagram that channels Rahu's energy positively. The pandit consecrates it with:</p>
                                        <ul>
                                            <li>Panchamrit abhishek (milk, curd, ghee, honey, sugar bath)</li>
                                            <li>Application of sandalwood paste and kumkum</li>
                                            <li>Offering of blue/black flowers</li>
                                            <li>Lighting of mustard oil lamp</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Rahu Mantra Jaap (Sacred Chanting):</strong>
                                        <p>The most powerful part of the puja. The main Rahu mantra is chanted 18,000 times (or multiples thereof):</p>
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Bhram Bhreem Bhraum Sah Rahave Namah"</strong><br />
                                            (Salutations to Rahu, the shadow planet)
                                        </p>
                                        <p>Alternative mantras include:</p>
                                        <ul>
                                            <li><em>"Om Raam Rahave Namah"</em> - Simple Rahu beej mantra</li>
                                            <li><em>"Ardha Kayam Maha Viryam..."</em> - Rahu Gayatri mantra</li>
                                        </ul>
                                        <p>The chanting is usually done by the pandit, but the devotee can participate mentally or by counting on a rudraksha mala.</p>
                                    </li>
                                    <li>
                                        <strong>Durva Havan (Sacred Fire Ritual):</strong>
                                        <p>A special havan (fire ceremony) is performed with specific offerings:</p>
                                        <ul>
                                            <li><strong>Durva Grass:</strong> 108 blades dipped in ghee, offered to Agni (fire god)</li>
                                            <li><strong>Black Sesame:</strong> Represents absorbing negative karma</li>
                                            <li><strong>Urad Dal:</strong> Black lentils to pacify Rahu</li>
                                            <li><strong>Blue Flowers:</strong> Rahu's preferred color</li>
                                            <li><strong>Coconut:</strong> Final purnahuti (complete offering)</li>
                                        </ul>
                                        <p>Each offering is made with the mantra: <em>"Om Rahave Idam Na Mama"</em> (This is for Rahu, not for me - signifying ego dissolution).</p>
                                    </li>
                                    <li>
                                        <strong>Chhaya Daan (Shadow Donation):</strong>
                                        <p>This unique ritual involves:</p>
                                        <ul>
                                            <li>Looking at one's reflection in mustard oil placed in an iron vessel</li>
                                            <li>Visualizing all negative karma and Rahu's malefic effects transferring to the oil</li>
                                            <li>Donating this oil to a temple or giving it to a sweeper/laborer</li>
                                        </ul>
                                        <p>This symbolizes giving away one's shadow (Rahu) and negative tendencies.</p>
                                    </li>
                                    <li>
                                        <strong>Nag Puja (Serpent Worship):</strong>
                                        <p>Since Rahu is associated with serpents (Naga), worship of a silver or lead Nag-Nagin pair is performed. Offerings include:</p>
                                        <ul>
                                            <li>Milk abhishek (bathing in milk)</li>
                                            <li>Flowers and bilva leaves</li>
                                            <li>Chanting of <em>"Om Namah Shivaya"</em> (as Shiva wears serpents)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Brahmin Bhojan (Feeding the Priests):</strong>
                                        <p>Feed the performing pandits with sattvic food (no onion, garlic). This completes the puja and transfers punya (merit) to the devotee.</p>
                                    </li>
                                    <li>
                                        <strong>Daan (Charitable Donations):</strong>
                                        <p>Specific donations to pacify Rahu:</p>
                                        <ul>
                                            <li>Blue/black cloth to the poor</li>
                                            <li>Mustard oil, black sesame, urad dal</li>
                                            <li>Iron utensils or lead items</li>
                                            <li>Money to sweepers or laborers (Rahu represents lower castes in traditional astrology)</li>
                                        </ul>
                                    </li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Puja Observances</h3>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Yantra Installation:</strong> The consecrated Rahu Yantra should be installed in the Southwest corner of your home or workplace.</li>
                                    <li><strong>Daily Mantra:</strong> Continue chanting <em>"Om Raam Rahave Namah"</em> 108 times daily for 40 days.</li>
                                    <li><strong>Saturday Fasting:</strong> Observe partial fast on Saturdays, avoiding salt and oil.</li>
                                    <li><strong>Avoid Negative Habits:</strong> Refrain from alcohol, non-vegetarian food, and dishonest practices during the remedial period.</li>
                                </ul>
                            </section>

                            <section className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-md border border-blue-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Rahu Remedies and Lifestyle Changes</h2>
                                <p className="text-gray-700 mb-4">
                                    Beyond the puja, certain lifestyle modifications can significantly reduce Rahu Dosh effects:
                                </p>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Morning Meditation:</strong> Practice 15 minutes of meditation facing Southwest to calm Rahu's chaotic energy.</li>
                                    <li><strong>Wear Gomed (Hessonite):</strong> After proper astrological consultation, wear a 5-7 carat Gomed in silver on the middle finger of the right hand.</li>
                                    <li><strong>Coconut Offering:</strong> Offer a coconut in flowing water every Saturday.</li>
                                    <li><strong>Feed Animals:</strong> Feed dogs, crows, or fish regularly (Rahu's creatures).</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Behavioral Modifications</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Honesty:</strong> Rahu punishes deception. Practice radical honesty in all dealings.</li>
                                    <li><strong>Avoid Shortcuts:</strong> Don't take unethical shortcuts to success, as Rahu will eventually cause downfall.</li>
                                    <li><strong>Respect Elders:</strong> Especially maternal grandparents, as Rahu is connected to maternal lineage.</li>
                                    <li><strong>Service to Outcasts:</strong> Help marginalized communities, as Rahu represents the downtrodden.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Dietary Guidelines</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Avoid excessive spicy, oily, and tamasic (heavy) foods</li>
                                    <li>Include radish, coconut, and black sesame in diet</li>
                                    <li>Drink water stored in copper vessels</li>
                                    <li>Avoid alcohol and intoxicants completely during Rahu periods</li>
                                </ul>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Clarity:</strong> Removes confusion and decision paralysis.</li>
                                    <li><strong>Protection:</strong> Shields from hidden enemies and evil eye (Nazar Dosh).</li>
                                    <li><strong>Success:</strong> Converts sudden failures into unexpected opportunities.</li>
                                    <li><strong>Health:</strong> Aids in recovery from chronic or undiagnosed illnesses.</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Rahu Dosh Shanti</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Is Rahu Dosh Shanti Puja the same as Kaal Sarp Dosh Puja?",
                                            a: "No, they are different. Kaal Sarp Dosh occurs when all seven planets are trapped between Rahu and Ketu in the horoscope, creating a specific serpent-like pattern. Rahu Dosh Shanti is specifically for the malefic effects of Rahu alone, regardless of other planetary positions. However, Kaal Sarp Dosh remedies often include Rahu Dosh Shanti as a component since Rahu is the head of the serpent formation."
                                        },
                                        {
                                            q: "What is the best time and day to perform Rahu Dosh Shanti Puja?",
                                            a: "The most auspicious times are: (1) Saturday evenings, as Rahu shares Saturday with Saturn, (2) During Rahu Kaal (a specific 90-minute inauspicious period each day - timing varies by location), (3) On Amavasya (New Moon), especially Ashadha or Kartik Amavasya, (4) During solar or lunar eclipses (though this requires expert guidance). Interestingly, performing Shanti rituals during Rahu Kaal is considered highly effective as you're directly confronting Rahu's energy. Always consult an experienced pandit for your personalized Muhurat based on your birth chart."
                                        },
                                        {
                                            q: "Can I perform Rahu Dosh Shanti Puja at home, or must I go to a temple?",
                                            a: "You can perform it at home with a qualified pandit. Home pujas are actually preferred as they directly cleanse your living space of Rahu's negative energy. However, ensure the pandit follows proper Vedic procedures. Some people prefer temples for the sacred atmosphere, especially Shiva temples since Lord Shiva controls Rahu. For maximum benefit, you can do a home puja and later visit Trimbakeshwar or Ujjain (Kaal Bhairav temple) for additional blessings."
                                        },
                                        {
                                            q: "How do I know if I have Rahu Dosh in my horoscope?",
                                            a: "Consult a qualified Vedic astrologer who will analyze: (1) Rahu's house placement - particularly malefic in 1st, 5th, 7th, 8th, or 12th houses, (2) Rahu's conjunction with other planets, especially Moon (Grahan Yoga) or Mars, (3) Current Mahadasha/Antardasha period - if you're in Rahu's 18-year period, (4) Rahu's aspect on important houses like 7th (marriage) or 10th (career). Life symptoms include sudden unexplained problems, mental confusion, recurring nightmares about snakes, chronic undiagnosed health issues, and feeling 'stuck' despite hard work."
                                        },
                                        {
                                            q: "Should I wear Gomed (Hessonite) gemstone for Rahu Dosh?",
                                            a: "Gomed should ONLY be worn after detailed astrological consultation. While it's Rahu's gemstone, wearing it incorrectly can amplify problems instead of solving them. A qualified astrologer will check: (1) If Rahu is functional benefic or malefic in your chart, (2) Your current Dasha period, (3) Rahu's relationship with your ascendant lord. If recommended, wear a 5-7 carat natural Hessonite in silver on the middle finger of your right hand on a Saturday during Rahu Kaal, after proper energization by a pandit. Never buy gemstones from unreliable sources."
                                        },
                                        {
                                            q: "How many times should Rahu Dosh Shanti Puja be performed?",
                                            a: "Typically, one comprehensive puja is sufficient if done correctly with proper mantra count (18,000+) and all rituals. However, in severe cases, astrologers may recommend: (1) Annual puja during Rahu's transit through sensitive houses, (2) Repetition after 12 years if symptoms persist, (3) Monthly smaller pujas during Rahu Mahadasha (18-year period). The key is quality over quantity - one properly performed puja with devotion is better than multiple rushed ceremonies. Maintain daily Rahu mantra practice (108 times) for sustained benefits."
                                        },
                                        {
                                            q: "What donations (Daan) are most effective for Rahu Dosh?",
                                            a: "Rahu-specific donations include: (1) Blue/black cloth to the poor or laborers, (2) Mustard oil in iron vessels to temples or for lighting lamps, (3) Black sesame, urad dal, and black gram, (4) Feeding dogs, crows, or fish (Rahu's creatures), (5) Iron or lead items, (6) Money to sweepers, cobblers, or marginalized communities (Rahu traditionally represents outcasts), (7) Coconuts in flowing water every Saturday. The donation should be made with the mantra 'Om Rahave Namah' and without expectation of return. Regularity is more important than quantity."
                                        },
                                        {
                                            q: "Can Rahu Dosh affect my marriage prospects?",
                                            a: "Yes, significantly. Rahu in the 7th house (marriage house) or aspecting it can cause: (1) Delays in finding suitable partners, (2) Attraction to unsuitable or deceptive partners, (3) Sudden breakups or cancellations, (4) Extramarital affairs or trust issues after marriage, (5) Partner from different caste/religion/country (not necessarily negative). Rahu-Moon conjunction (Grahan Yoga) in 7th house is particularly challenging for marital happiness. Performing Rahu Dosh Shanti before marriage, along with Mangal Dosh remedies if applicable, can significantly improve marriage prospects and marital harmony."
                                        },
                                        {
                                            q: "Are there any side effects or precautions during Rahu Dosh Shanti Puja?",
                                            a: "The puja itself has no negative side effects when performed correctly. However, observe these precautions: (1) Avoid non-vegetarian food, alcohol, and tobacco for 3 days before and after, (2) Maintain celibacy on the puja day, (3) Don't perform during menstruation (for women), (4) Pregnant women should consult the pandit - usually they can participate but may avoid certain intense rituals, (5) After puja, some people experience temporary emotional release (crying, anger) as blocked energies clear - this is normal, (6) Don't expect overnight miracles; Rahu remedies work gradually over 40-90 days. If symptoms worsen initially, it's often the 'healing crisis' before improvement."
                                        },
                                        {
                                            q: "What is the difference between Rahu Dosh and Rahu Mahadasha?",
                                            a: "Rahu Dosh refers to the permanent affliction in your birth chart due to Rahu's unfavorable placement or conjunction. It's a structural problem in your horoscope that remains throughout life (though its intensity varies). Rahu Mahadasha is a temporary 18-year period when Rahu's energy dominates your life according to Vimshottari Dasha system. Everyone goes through Rahu Mahadasha at some point, but those with Rahu Dosh in their chart experience more challenges during this period. Think of Rahu Dosh as having a weak foundation, and Rahu Mahadasha as a storm - the storm affects everyone, but those with weak foundations suffer more damage. Rahu Dosh Shanti Puja addresses both the permanent affliction and provides protection during Mahadasha periods."
                                        }
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Overcome Shadows</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Let the divine light guide you through Rahu's illusions.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Rahu Shanti</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="hidden lg:block bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Jump to Section</h4>
                                    <ul className="space-y-2 text-sm">
                                        {sections.map(sec => (
                                            <li key={sec.id}>
                                                <a href={`#${sec.id}`} className="text-gray-600 hover:text-saffron-600 hover:translate-x-1 block transition-all">{sec.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Rahu Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Remove Shani-Rahu Dosh</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Rahu%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Rahu Dosh Shanti" />
            <Footer />
        </>
    )
}
