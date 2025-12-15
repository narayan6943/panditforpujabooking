import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KetuDoshShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ketu Dosh Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Ketu Dosh Shanti Puja in Pune. Remedies for Ketu Mahadasha, detachments, and health issues. Seek spiritual growth and protection.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Ketu Dosh Shanti' },
        { id: 'about', title: 'About Ketu' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Ketu Dosh Shanti Puja in Pune – Peace & Spiritual Protection</title>
                <meta name="description" content="Suffering from confusion or health issues due to Ketu? Book Ketu Dosh Shanti Puja in Pune. Expert Mantra Jaap and Havan rituals for relief and moksha." />
                <meta name="keywords" content="Ketu Dosh Shanti Pune, Ketu Mahadasha Remedies, Cat's Eye Stone Puja, Ganesh Puja to appease Ketu" />
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
                            <span className="text-maroon-900 font-semibold">Ketu Dosh Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/ganesh-havan-hero.png"
                            alt="Ketu Dosh Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Spiritual Protection & Healing</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ketu Dosh Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Remove Negativity & Confusion</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Ketu represents moksha but its affliction causes detachment, accidents, and skin diseases. Appease the shadow planet with Lord Ganesha's blessings.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Ketu Shanti</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Ketu%20Dosh%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Ketu</strong> is the south node of the moon, associated with spirituality, detachment, and past life karma (Prarabdha). While it can lead to enlightenment, an afflicted Ketu or <strong>Ketu Mahadasha</strong> can cause intense confusion, feeling of isolation, skin diseases, and sudden accidents.</p>
                                <p><strong>Ketu Dosh Shanti Puja</strong> primarily involves worshipping Lord Ganesha, who is the presiding deity of Ketu, to transform the negative energies into spiritual growth.</p>
                            </section>

                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold mt-8">The Mythology of Ketu: The Headless Body</h2>
                                <p>
                                    As explained in the Samudra Manthan legend, when Lord Vishnu severed the demon Svarbhanu with his Sudarshan Chakra, the head became <strong>Rahu</strong> and the body became <strong>Ketu</strong>. While Rahu represents the mind and desires, Ketu represents the body and detachment. Ketu is headless, symbolizing a being without ego, intellect, or worldly ambitions.
                                </p>

                                <p>
                                    In Vedic astrology, Ketu is considered the <strong>moksha karaka</strong> (significator of liberation). It represents past life karma, spiritual wisdom, and the path to enlightenment. However, when afflicted, Ketu creates confusion, isolation, mysterious health issues, and a sense of purposelessness.
                                </p>

                                <p>
                                    Ketu's energy is like a double-edged sword: it can either lead to profound spiritual awakening or cause severe mental and physical suffering. The key is to channel Ketu's energy through proper worship and spiritual practices.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Significance of Ketu</h2>
                                <p>In Vedic Astrology, Ketu shares many characteristics with Mars but operates on a spiritual plane:</p>
                                <ul>
                                    <li><strong>Zodiac Sign:</strong> Co-rules Scorpio and Pisces</li>
                                    <li><strong>Exaltation:</strong> Sagittarius (some texts say Scorpio)</li>
                                    <li><strong>Debilitation:</strong> Gemini (some texts say Taurus)</li>
                                    <li><strong>Friendly Planets:</strong> Mars, Venus, Saturn</li>
                                    <li><strong>Enemy Planets:</strong> Sun, Moon</li>
                                    <li><strong>Neutral:</strong> Mercury, Jupiter</li>
                                    <li><strong>Mahadasha Period:</strong> 7 years</li>
                                    <li><strong>Direction:</strong> Southwest</li>
                                    <li><strong>Gemstone:</strong> Cat's Eye (Lehsunia/Vaidurya)</li>
                                    <li><strong>Metal:</strong> Iron, Lead</li>
                                    <li><strong>Color:</strong> Multi-colored, Smoky</li>
                                    <li><strong>Day:</strong> Tuesday (shares with Mars)</li>
                                    <li><strong>Deity:</strong> Lord Ganesha, Matsya Avatar</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Symptoms of Ketu Dosh</h3>
                                <p>When Ketu is afflicted in a horoscope, it creates various challenges:</p>
                                <ul>
                                    <li><strong>Health Issues:</strong> Skin diseases (especially allergies and rashes), joint pains, mysterious ailments doctors cannot diagnose, accidents and injuries, viral infections, and chronic fatigue.</li>
                                    <li><strong>Mental Confusion:</strong> Feeling lost in life, inability to focus, spiritual crisis, detachment from family and society, depression, and existential anxiety.</li>
                                    <li><strong>Career Instability:</strong> Sudden job losses, inability to settle in one profession, frequent changes, or working in isolation.</li>
                                    <li><strong>Relationship Issues:</strong> Feeling disconnected from loved ones, difficulty expressing emotions, or attraction to spiritual life over family life.</li>
                                    <li><strong>Financial Problems:</strong> Unexpected losses, difficulty accumulating wealth, or disinterest in material prosperity.</li>
                                    <li><strong>Spiritual Confusion:</strong> Interest in occult or mysticism without proper guidance, attraction to false gurus, or spiritual practices causing mental imbalance.</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Ketu Dosh Shanti Puja Essential?</h3>
                                <p>The puja becomes critically important in these situations:</p>
                                <ul>
                                    <li><strong>Ketu Mahadasha or Antardasha:</strong> The 7-year Ketu period can be extremely challenging without proper remedies</li>
                                    <li><strong>Ketu in 1st House:</strong> Affects physical health, creates identity confusion, and causes accidents</li>
                                    <li><strong>Ketu in 4th House:</strong> Problems with mother, property disputes, and mental peace</li>
                                    <li><strong>Ketu in 5th House:</strong> Issues with children, education, and creative expression</li>
                                    <li><strong>Ketu in 7th House:</strong> Marriage problems, business partnership issues, and relationship detachment</li>
                                    <li><strong>Ketu in 8th House:</strong> Sudden accidents, chronic diseases, and occult troubles</li>
                                    <li><strong>Ketu in 10th House:</strong> Career instability and professional confusion</li>
                                    <li><strong>Ketu-Mars Conjunction:</strong> Increases accident risk and aggressive behavior</li>
                                    <li><strong>Ketu-Moon Conjunction:</strong> Severe mental disturbances and emotional instability</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Ketu's Positive Manifestations</h3>
                                <p>When properly propitiated, Ketu can bestow:</p>
                                <ul>
                                    <li><strong>Spiritual Enlightenment:</strong> Deep meditation abilities, intuitive wisdom, and moksha (liberation)</li>
                                    <li><strong>Psychic Abilities:</strong> Clairvoyance, healing powers, and understanding of mystical sciences</li>
                                    <li><strong>Technical Excellence:</strong> Success in research, technology, and specialized fields</li>
                                    <li><strong>Detachment:</strong> Freedom from material desires and ego, leading to inner peace</li>
                                    <li><strong>Past Life Wisdom:</strong> Access to past life knowledge and karmic understanding</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Ketu Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Includes Ketu Mantra Jaap (17,000 chants), Ganesh Puja & Havan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Dosh Nivaran</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Targeted for Ketu Mahadasha. 68,000+ Jaap, Special Havan (Kusha grass).</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List (Multi-Colored)</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Multi-colored Cloth (Chitkabra) or Black</li>
                                    <li>Seven Grains (Satnaja)</li>
                                    <li>Coconut, Horse Gram (Kulthi)</li>
                                    <li>Kusha Grass</li>
                                    <li>Garlic/Onion (excluded from offering but sometimes donated)</li>
                                    <li>Silver Serpent (Nag) image</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Ketu Dosh Shanti Ritual Vidhi</h2>
                                <p>The Ketu Dosh Shanti Puja centers around Lord Ganesha worship, as He is Ketu's presiding deity. The ritual must be performed with devotion and precision:</p>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Fasting:</strong> Observe a partial fast, consuming only fruits and milk from sunrise.</li>
                                    <li><strong>Bath:</strong> Take a purifying bath and wear clean, preferably multi-colored or white clothes.</li>
                                    <li><strong>Puja Space:</strong> Clean the area and face Southwest (Ketu's direction) or Northeast (Ganesha's direction).</li>
                                    <li><strong>Timing:</strong> Best performed on Tuesday, during Ketu's birth nakshatra, or during Ketu Mahadasha. Consult pandit for Muhurat.</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li>
                                        <strong>Ganesh Puja (Primary Ritual):</strong>
                                        <p>Since Lord Ganesha is Ketu's deity, this is the most important part. Offer 21 modaks, durva grass, red flowers, and red sandalwood. Chant: <em>"Om Gam Ganapataye Namah"</em> (108 times). This automatically pacifies Ketu.</p>
                                    </li>
                                    <li>
                                        <strong>Kalash Sthapana:</strong>
                                        <p>Install a copper kalash with water, mango leaves, and coconut, representing divine presence.</p>
                                    </li>
                                    <li>
                                        <strong>Matrika Pujan:</strong>
                                        <p>Invoke the seven divine mothers (Saptamatrikas) who protect against Ketu's malefic effects.</p>
                                    </li>
                                    <li>
                                        <strong>Ketu Yantra Puja:</strong>
                                        <p>The Ketu Yantra is consecrated with multi-colored flowers, kusha grass, and offerings of seven grains (satnaja).</p>
                                    </li>
                                    <li>
                                        <strong>Ketu Mantra Jaap:</strong>
                                        <p>The main Ketu mantra is chanted 17,000 times (or multiples thereof):</p>
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Stram Streem Straum Sah Ketave Namah"</strong><br />
                                            (Salutations to Ketu, the moksha karaka)
                                        </p>
                                        <p>Alternative mantras:</p>
                                        <ul>
                                            <li><em>"Om Kem Ketave Namah"</em> - Simple Ketu beej mantra</li>
                                            <li><em>"Palasha Pushpa Sankasham..."</em> - Ketu Gayatri mantra</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Kusha Grass Havan:</strong>
                                        <p>Special havan with kusha grass (sacred grass), horse gram (kulthi), and seven grains. Each offering made with <em>"Om Ketave Idam Na Mama"</em>.</p>
                                    </li>
                                    <li>
                                        <strong>Daan (Charitable Donations):</strong>
                                        <p>Specific donations for Ketu:</p>
                                        <ul>
                                            <li>Multi-colored blanket or cloth to the poor</li>
                                            <li>Horse gram, sesame seeds, and seven grains</li>
                                            <li>Iron items or lead objects</li>
                                            <li>Feeding dogs (Ketu's animal)</li>
                                            <li>Money to spiritual seekers or sadhus</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Brahmin Bhojan:</strong>
                                        <p>Feed the pandits with sattvic food to complete the puja cycle.</p>
                                    </li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Puja Observances</h3>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Yantra Installation:</strong> Install the Ketu Yantra in the Southwest corner of your home.</li>
                                    <li><strong>Daily Mantra:</strong> Continue chanting <em>"Om Kem Ketave Namah"</em> 108 times daily for 40 days.</li>
                                    <li><strong>Tuesday Fasting:</strong> Observe partial fast on Tuesdays, avoiding salt.</li>
                                    <li><strong>Spiritual Practice:</strong> Engage in regular meditation and spiritual study to channel Ketu's energy positively.</li>
                                </ul>
                            </section>

                            <section className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl p-8 shadow-md border border-orange-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Ketu Remedies and Spiritual Practices</h2>
                                <p className="text-gray-700 mb-4">
                                    Beyond the puja, these practices help channel Ketu's energy toward spiritual growth:
                                </p>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Spiritual Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Meditation:</strong> Practice 20 minutes of meditation daily, focusing on the third eye (Ajna chakra).</li>
                                    <li><strong>Ganesha Worship:</strong> Daily worship of Lord Ganesha with modak and durva grass.</li>
                                    <li><strong>Cat's Eye Gemstone:</strong> Only after astrological consultation, wear a 5-7 carat Cat's Eye in gold on the middle finger.</li>
                                    <li><strong>Feed Dogs:</strong> Regularly feed stray dogs, especially on Tuesdays.</li>
                                    <li><strong>Visit Ganesha Temples:</strong> Weekly visits to Ganesha temples, especially Ashtavinayak temples.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Lifestyle Modifications</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Spiritual Study:</strong> Read spiritual texts like Bhagavad Gita, Upanishads, or Buddhist teachings.</li>
                                    <li><strong>Service:</strong> Engage in selfless service (seva) without expectation of reward.</li>
                                    <li><strong>Detachment Practice:</strong> Practice healthy detachment from material outcomes while fulfilling duties.</li>
                                    <li><strong>Avoid Occult:</strong> Don't engage in black magic or negative occult practices.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Health and Dietary Guidelines</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Include horse gram (kulthi dal) in diet once weekly</li>
                                    <li>Avoid excessive spicy and tamasic foods</li>
                                    <li>Practice yoga, especially poses that strengthen the spine</li>
                                    <li>Get regular health checkups to catch issues early</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Ketu Dosh Shanti</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Who is the presiding deity for Ketu, and why is Ganesha worship important?",
                                            a: "Lord Ganesha is the presiding deity of Ketu. This connection is profound: Ganesha represents wisdom and obstacle removal, while Ketu represents spiritual liberation and detachment. Ganesha's elephant head symbolizes the ability to remove the veil of ignorance (Maya) that Ketu creates. By worshipping Ganesha, you automatically pacify Ketu's malefic effects and channel its energy toward spiritual growth. Additionally, Matsya Avatar (Fish incarnation of Vishnu) is also associated with Ketu, representing salvation from the deluge of material existence."
                                        },
                                        {
                                            q: "Should I wear Cat's Eye (Lehsunia) gemstone for Ketu Dosh?",
                                            a: "Cat's Eye should ONLY be worn after detailed astrological consultation and with extreme caution. Ketu is a spiritual planet, and wearing its gemstone can amplify both positive and negative effects. A qualified astrologer must check: (1) If Ketu is functional benefic or malefic in your chart, (2) Your current Dasha period, (3) Ketu's relationship with your ascendant and Moon. If recommended, wear a 5-7 carat natural Cat's Eye in gold or panchdhatu on the middle finger of the right hand on a Tuesday. The gemstone must be energized by a pandit before wearing. Many astrologers prefer Ketu Dosh Shanti Puja over gemstones as it's safer and universally beneficial."
                                        },
                                        {
                                            q: "When is the best time to perform Ketu Dosh Shanti Puja?",
                                            a: "The most auspicious times are: (1) Tuesday, as Ketu shares this day with Mars, (2) During your birth nakshatra (especially if Ketu is placed there), (3) During Ketu Mahadasha or Antardasha (7-year period), (4) On Amavasya (New Moon), particularly Ashwini, Magha, or Mula nakshatra days, (5) During Ganesha Chaturthi for maximum benefit. The puja should ideally be performed in the morning hours (6-10 AM). Consult an experienced pandit for your personalized Muhurat based on your birth chart and current planetary transits."
                                        },
                                        {
                                            q: "How is Ketu Dosh different from Kaal Sarp Dosh?",
                                            a: "Ketu Dosh refers to the affliction caused by Ketu's unfavorable placement, conjunction, or aspect in your birth chart. It's a specific planetary problem. Kaal Sarp Dosh, on the other hand, is a specific yoga (combination) where all seven planets are hemmed between Rahu (head) and Ketu (tail), creating a serpent-like formation. Kaal Sarp Dosh is more severe and requires both Rahu and Ketu remedies. If you have Kaal Sarp Dosh, you automatically have both Rahu and Ketu afflictions. However, you can have Ketu Dosh without having Kaal Sarp Dosh. The remedies are similar but Kaal Sarp Dosh requires more intensive rituals."
                                        },
                                        {
                                            q: "Can Ketu Dosh cause skin diseases and allergies?",
                                            a: "Yes, absolutely. Ketu is strongly associated with skin problems, especially mysterious rashes, allergies, eczema, and conditions that doctors struggle to diagnose. This is because Ketu represents the body (being headless, it's all body), and when afflicted, it manifests as physical ailments. Ketu also rules viral infections, autoimmune disorders, and chronic fatigue. The skin issues often appear suddenly and may not respond well to conventional treatment. Ketu Dosh Shanti Puja, combined with proper medical treatment, can significantly help. Additionally, Ketu in the 6th house (disease house) or conjunct with Mars can cause accidents and injuries."
                                        },
                                        {
                                            q: "How many times should Ketu Dosh Shanti Puja be performed?",
                                            a: "Typically, one comprehensive puja with proper mantra count (17,000+) is sufficient. However, in severe cases or during Ketu Mahadasha (7-year period), astrologers may recommend: (1) Annual puja on your birth nakshatra, (2) Repetition every 7 years (Ketu's cycle), (3) Monthly smaller pujas during intense Ketu periods. The key is maintaining daily spiritual practice (Ganesha worship, meditation) after the puja. One properly performed puja with devotion and subsequent daily practice is more effective than multiple rushed ceremonies. Continue chanting Ketu mantra 108 times daily for sustained benefits."
                                        },
                                        {
                                            q: "What donations (Daan) are most effective for Ketu Dosh?",
                                            a: "Ketu-specific donations include: (1) Multi-colored blanket or chitkabra cloth to the poor, (2) Horse gram (kulthi dal), sesame seeds, and seven grains mixture, (3) Iron or lead items, (4) Feeding stray dogs regularly (Ketu's animal), (5) Donating to spiritual seekers, sadhus, or monks, (6) Supporting meditation centers or spiritual institutions, (7) Providing food to people suffering from skin diseases or mysterious ailments. The donation should be made on Tuesday with the mantra 'Om Ketave Namah' and without expectation. Ketu appreciates selfless service, so volunteer work at spiritual centers is highly beneficial."
                                        },
                                        {
                                            q: "Can Ketu Dosh affect my spiritual life and meditation practice?",
                                            a: "Ketu has a dual effect on spiritual life. When afflicted (Ketu Dosh), it can cause: (1) Spiritual confusion and attraction to false gurus, (2) Obsession with occult or black magic, (3) Mental imbalance from improper meditation techniques, (4) Excessive detachment leading to neglect of worldly duties, (5) Spiritual ego and superiority complex. However, when properly propitiated through Ketu Dosh Shanti Puja, Ketu becomes your greatest spiritual ally, bestowing: (1) Deep meditation abilities and samadhi states, (2) Intuitive wisdom and psychic abilities, (3) Understanding of past lives and karma, (4) Genuine detachment and moksha (liberation). The puja transforms Ketu's energy from confusion to clarity."
                                        },
                                        {
                                            q: "Are there any precautions during Ketu Dosh Shanti Puja?",
                                            a: "Yes, observe these precautions: (1) Avoid non-vegetarian food, alcohol, and tobacco for 3 days before and after, (2) Maintain celibacy on the puja day, (3) Women should not perform during menstruation, (4) Pregnant women should consult the pandit - usually they can participate but may avoid intense rituals, (5) After puja, some people experience temporary emotional or physical detoxification (skin breakouts, emotional release) - this is normal healing, (6) Don't engage in negative occult practices or black magic during the remedial period, (7) Maintain daily Ganesha worship for at least 40 days post-puja. If you experience increased spiritual experiences or dreams, maintain a journal and discuss with your spiritual guide."
                                        },
                                        {
                                            q: "What is the difference between Ketu Dosh and Ketu Mahadasha?",
                                            a: "Ketu Dosh refers to the permanent affliction in your birth chart due to Ketu's unfavorable placement, conjunction, or aspect. It's a structural problem that remains throughout life (though intensity varies). Ketu Mahadasha is a temporary 7-year period when Ketu's energy dominates your life according to Vimshottari Dasha system. Everyone goes through Ketu Mahadasha at some point, but those with Ketu Dosh in their chart face more challenges during this period. Ketu Mahadasha can be highly spiritual and transformative if Ketu is well-placed, leading to enlightenment. But with Ketu Dosh, it can cause severe confusion, health issues, and isolation. Ketu Dosh Shanti Puja addresses both the permanent affliction and provides protection during Mahadasha periods, channeling Ketu's energy toward spiritual growth rather than suffering."
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Find Your Path</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Turn obstacles into spiritual stepping stones.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Ketu Shanti</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Ketu Shanti</h4>
                                        <p className="text-gold-100 text-sm mb-4">Resolving Mysterious Issues</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ketu%20Dosh%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Ketu Dosh Shanti" />
            <Footer />
        </>
    )
}
