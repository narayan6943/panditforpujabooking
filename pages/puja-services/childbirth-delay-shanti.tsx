import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ChildbirthDelayShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Childbirth Delay Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Childbirth Delay Shanti Puja (Santaan Prapti Puja) in Pune. Vedic remedies for conception issues, infertility, and childlessness. Invoke divine blessings for progeny.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Santaan Prapti Puja' },
        { id: 'about', title: 'Understanding Childlessness' },
        { id: 'packages', title: 'Puja Packages' },
        { id: 'vidhi', title: 'Ritual Process' },
        { id: 'samagri', title: 'Samagri' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Childbirth Delay Shanti Puja in Pune – Santaan Prapti Remedies</title>
                <meta name="description" content="Struggling with childlessness? Book Childbirth Delay Shanti Puja in Pune. Vedic remedies for conception, infertility, and progeny. Santaan Gopal Krishna Puja." />
                <meta name="keywords" content="Childbirth Delay Shanti Pune, Santaan Prapti Puja, Infertility Remedies, Childlessness Puja, Santaan Gopal Krishna Puja" />
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
                            <span className="text-maroon-900 font-semibold">Childbirth Delay Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/santaan-gopal-hero.png"
                            alt="Childbirth Delay Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Blessings of Progeny</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Childbirth Delay Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Santaan Prapti Remedies</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke the divine blessings of Santaan Gopal Krishna and remove astrological obstacles preventing conception. Experience the joy of parenthood through sacred Vedic rituals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Santaan Puja</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Childbirth%20Delay%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Childbirth Delay Shanti Puja</strong> (also known as <strong>Santaan Prapti Puja</strong> or <strong>Santaan Gopal Krishna Puja</strong>) is a powerful Vedic ritual performed for couples facing difficulties in conceiving a child. This sacred ceremony invokes the blessings of Lord Krishna in his Santaan Gopal form, along with other deities associated with fertility and progeny.</p>
                                <p>Childlessness (<em>Santaan Heen</em>) is one of the most painful experiences for couples. While medical science offers solutions, Vedic astrology recognizes that certain planetary afflictions can create obstacles in conception. This puja addresses both the spiritual and karmic dimensions of childlessness.</p>
                            </section>

                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold mt-8">The Mythology of Santaan Gopal Krishna</h2>
                                <p>
                                    <strong>Santaan Gopal</strong> is a specific form of Lord Krishna as a divine child. The worship of Santaan Gopal is rooted in the belief that Krishna, who brought immense joy to his parents Devaki and Vasudeva (and foster parents Yashoda and Nanda), can bless childless couples with progeny.
                                </p>

                                <p>
                                    According to Puranic legends, there was a devoted couple who performed intense penance to Lord Krishna for a child. Pleased with their devotion, Krishna appeared in the form of a beautiful child and blessed them. Since then, worshipping Santaan Gopal has been considered one of the most powerful remedies for childlessness.
                                </p>

                                <p>
                                    Another significant deity for progeny is <strong>Goddess Parvati</strong> in her <strong>Santaan Lakshmi</strong> form. As the divine mother, she represents fertility, nurturing, and the power of creation. The <strong>Santoshi Mata</strong> and <strong>Devaki-Yashoda</strong> are also worshipped for blessings of children.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Causes of Childlessness</h2>
                                <p>In Vedic astrology, the 5th house represents children (<em>Putra Bhava</em>). Several planetary afflictions can cause delays or obstacles in conception:</p>
                                <ul>
                                    <li><strong>Afflicted 5th House:</strong> Malefic planets (Saturn, Mars, Rahu, Ketu) in the 5th house or aspecting it</li>
                                    <li><strong>Weak 5th Lord:</strong> The lord of the 5th house being debilitated, combust, or in dusthana (6th, 8th, 12th houses)</li>
                                    <li><strong>Jupiter Affliction:</strong> Jupiter (karaka for children) being weak, debilitated, or afflicted by malefics</li>
                                    <li><strong>Moon Affliction:</strong> Weak or afflicted Moon affecting fertility (especially for women)</li>
                                    <li><strong>Pitra Dosh:</strong> Ancestral curses or unresolved karmic debts affecting progeny</li>
                                    <li><strong>Nadi Dosh:</strong> Incompatibility in the couple's horoscopes affecting conception</li>
                                    <li><strong>Kaal Sarp Dosh:</strong> All planets trapped between Rahu and Ketu, blocking blessings</li>
                                    <li><strong>Mangal Dosh:</strong> Severe Mars affliction in certain houses</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Symptoms and Signs</h3>
                                <p>Beyond medical infertility, certain signs indicate astrological obstacles:</p>
                                <ul>
                                    <li><strong>Repeated Miscarriages:</strong> Inability to carry pregnancy to term despite conception</li>
                                    <li><strong>Unexplained Infertility:</strong> Medical tests show no problems, yet conception doesn't occur</li>
                                    <li><strong>Dreams of Dead Children:</strong> Recurring nightmares about losing children</li>
                                    <li><strong>Family Pattern:</strong> History of childlessness or child loss in the family lineage</li>
                                    <li><strong>Failed IVF/Medical Treatments:</strong> Modern treatments not yielding results</li>
                                    <li><strong>Feeling of Emptiness:</strong> Deep spiritual longing for a child despite having everything else</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Santaan Prapti Puja Essential?</h3>
                                <p>This puja becomes critically important in these situations:</p>
                                <ul>
                                    <li><strong>After 2-3 Years of Marriage:</strong> Without conception despite trying</li>
                                    <li><strong>Repeated Pregnancy Losses:</strong> Multiple miscarriages or stillbirths</li>
                                    <li><strong>Medical Treatments Failing:</strong> When IVF, IUI, or other treatments don't work</li>
                                    <li><strong>Astrological Indication:</strong> When astrologer identifies 5th house afflictions</li>
                                    <li><strong>Age Factor:</strong> Women above 35 or men above 40 facing conception issues</li>
                                    <li><strong>Previous Child Loss:</strong> Death of a child in infancy or childhood</li>
                                    <li><strong>Adoption Considerations:</strong> Before or after adoption for spiritual completion</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">The Power of Santaan Gopal Mantra</h3>
                                <p>The main mantra for this puja is:</p>
                                <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                    <strong>"Om Devaki Sudha Govinda Vasudeva Jagat Pate<br />
                                        Dehi Me Tanayam Krishna Tvam Aham Sharanam Gatah"</strong><br />
                                    (O Lord Krishna, son of Devaki and Vasudeva, lord of the universe, grant me a child. I surrender to you.)
                                </p>
                                <p>This mantra is chanted 11,000 or 21,000 times during the puja for maximum effectiveness.</p>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Santaan Prapti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Santaan Gopal Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹3,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Santaan Gopal Krishna worship with 11,000 mantra jaap and basic havan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Santaan Prapti Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja with 21,000 mantra jaap, Parvati-Shiva worship, Jupiter remedies, and Pitra Tarpan.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Samagri List</h2>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Santaan Gopal Krishna idol or picture</li>
                                    <li>Yellow cloth (for Jupiter energy)</li>
                                    <li>Turmeric, saffron, and yellow flowers</li>
                                    <li>Cow's milk, ghee, and honey</li>
                                    <li>Pomegranate (symbol of fertility)</li>
                                    <li>Betel leaves and nuts</li>
                                    <li>Yellow rice (Akshat)</li>
                                    <li>Rudraksha mala for jaap</li>
                                    <li>Havan samagri (for fire ritual)</li>
                                </ul>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Santaan Prapti Ritual Vidhi</h2>
                                <p>The Santaan Prapti Puja is a multi-layered ritual that must be performed with devotion and precision:</p>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Fasting:</strong> Both husband and wife should observe a partial fast, consuming only fruits and milk</li>
                                    <li><strong>Purification Bath:</strong> Take a bath with turmeric water for purification</li>
                                    <li><strong>Clean Clothes:</strong> Wear yellow or white clothes (auspicious for Jupiter)</li>
                                    <li><strong>Timing:</strong> Best performed on Thursday (Jupiter's day), during Pushya or Rohini nakshatra, or on Janmashtami</li>
                                    <li><strong>Mental Preparation:</strong> Both partners should maintain positive thoughts and faith</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li>
                                        <strong>Sankalp (Sacred Vow):</strong>
                                        <p>The couple takes a vow together, stating their names, gotras, and desire for a healthy child. This creates a spiritual contract with the divine.</p>
                                    </li>
                                    <li>
                                        <strong>Ganesh Puja:</strong>
                                        <p>Invoke Lord Ganesha to remove all obstacles in conception and pregnancy. Offer modak and durva grass.</p>
                                    </li>
                                    <li>
                                        <strong>Kalash Sthapana:</strong>
                                        <p>Install a sacred pot filled with water, representing the womb and divine energy of creation.</p>
                                    </li>
                                    <li>
                                        <strong>Santaan Gopal Krishna Puja:</strong>
                                        <p>The main deity worship. Offer milk, butter, honey, and yellow flowers to baby Krishna. Perform abhishek with panchamrit (five nectars).</p>
                                    </li>
                                    <li>
                                        <strong>Santaan Gopal Mantra Jaap:</strong>
                                        <p>Chant the Santaan Gopal mantra 11,000 or 21,000 times. The wife should participate actively in the chanting.</p>
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Devaki Sudha Govinda Vasudeva Jagat Pate<br />
                                                Dehi Me Tanayam Krishna Tvam Aham Sharanam Gatah"</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Parvati-Shiva Puja:</strong>
                                        <p>Worship the divine parents for blessings of progeny. Offer bilva leaves to Shiva and red flowers to Parvati.</p>
                                    </li>
                                    <li>
                                        <strong>Jupiter (Brihaspati) Puja:</strong>
                                        <p>Since Jupiter is the karaka (significator) for children, special worship is offered to strengthen Jupiter's blessings.</p>
                                    </li>
                                    <li>
                                        <strong>Pitra Tarpan (if needed):</strong>
                                        <p>If Pitra Dosh is indicated, perform tarpan (water offerings) to ancestors to seek their blessings and remove curses.</p>
                                    </li>
                                    <li>
                                        <strong>Havan (Sacred Fire Ritual):</strong>
                                        <p>Offerings include: sesame seeds, ghee, yellow flowers, and sacred herbs. Each offering made with the Santaan Gopal mantra.</p>
                                    </li>
                                    <li>
                                        <strong>Prasad Distribution:</strong>
                                        <p>The wife should consume the prasad first, especially the milk and butter offered to Santaan Gopal.</p>
                                    </li>
                                    <li>
                                        <strong>Daan (Charitable Donations):</strong>
                                        <p>Specific donations for progeny:</p>
                                        <ul>
                                            <li>Yellow cloth and turmeric to Brahmins</li>
                                            <li>Feeding pregnant women or new mothers</li>
                                            <li>Donating to orphanages or child welfare organizations</li>
                                            <li>Giving toys or clothes to underprivileged children</li>
                                        </ul>
                                    </li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Post-Puja Observances</h3>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Keep Santaan Gopal Idol:</strong> Install the consecrated idol in the puja room and worship daily</li>
                                    <li><strong>Daily Mantra:</strong> Wife should chant Santaan Gopal mantra 108 times daily for 40 days</li>
                                    <li><strong>Thursday Fasting:</strong> Observe partial fast on Thursdays for Jupiter's blessings</li>
                                    <li><strong>Feed Children:</strong> Regularly feed and bless young children, especially on Thursdays</li>
                                    <li><strong>Avoid Negativity:</strong> Maintain positive environment, avoid horror movies or negative news</li>
                                </ul>
                            </section>

                            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-md border border-yellow-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Remedies for Conception</h2>
                                <p className="text-gray-700 mb-4">
                                    Beyond the puja, these practices significantly enhance chances of conception:
                                </p>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Spiritual Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Santaan Gopal Stotra:</strong> Read or listen to Santaan Gopal Stotra daily</li>
                                    <li><strong>Hanuman Chalisa:</strong> Chant on Tuesdays and Saturdays for removing obstacles</li>
                                    <li><strong>Parvati Worship:</strong> Women should worship Goddess Parvati on Fridays</li>
                                    <li><strong>Tulsi Worship:</strong> Water Tulsi plant daily and circumambulate it</li>
                                    <li><strong>Banana Tree Worship:</strong> Worship banana tree on Thursdays (symbol of fertility)</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Lifestyle Modifications</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Bedroom Vastu:</strong> Ensure bed is in Southwest, head towards South while sleeping</li>
                                    <li><strong>Avoid Negativity:</strong> Remove thorny plants, broken items, and dark paintings from home</li>
                                    <li><strong>Feed Birds:</strong> Feed birds daily, especially sparrows and parrots</li>
                                    <li><strong>Respect Elders:</strong> Serve and take blessings from elderly couples with children</li>
                                    <li><strong>Temple Visits:</strong> Visit Santaan Gopal temples or Krishna temples regularly</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Dietary Guidelines</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Include saffron, almonds, and dates in diet (fertility enhancers)</li>
                                    <li>Consume milk boiled with turmeric and saffron</li>
                                    <li>Eat pomegranate regularly (symbol of fertility)</li>
                                    <li>Avoid excessive spicy, oily, or tamasic foods</li>
                                    <li>Both partners should avoid alcohol and tobacco completely</li>
                                </ul>
                            </section>

                            <section id="benefits" className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Benefits of Santaan Prapti Puja</h3>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li><strong>Conception Success:</strong> Removes astrological obstacles preventing pregnancy</li>
                                    <li><strong>Healthy Pregnancy:</strong> Ensures safe pregnancy and delivery</li>
                                    <li><strong>Intelligent Child:</strong> Blesses with a healthy, intelligent, and virtuous child</li>
                                    <li><strong>Karmic Resolution:</strong> Resolves past life karmas affecting progeny</li>
                                    <li><strong>Family Harmony:</strong> Brings joy and completeness to family life</li>
                                    <li><strong>Spiritual Growth:</strong> Deepens faith and spiritual connection</li>
                                    <li><strong>Medical Treatment Success:</strong> Enhances effectiveness of IVF/medical treatments</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Santaan Prapti Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "Can this puja guarantee conception?",
                                            a: "While no ritual can guarantee results, Santaan Prapti Puja has helped countless couples by removing astrological and karmic obstacles. It works best when combined with medical treatment, faith, and lifestyle changes. Many couples have conceived after this puja when other methods failed. The puja creates positive spiritual energy and removes blocks, but divine timing also plays a role. Maintain faith and patience."
                                        },
                                        {
                                            q: "Should both husband and wife participate in the puja?",
                                            a: "Yes, ideally both partners should participate as conception involves both. However, if one partner cannot attend due to distance or other reasons, the other can perform it with the absent partner's name and gotra in the Sankalp. The wife's participation is especially important as she will carry the child. Both should maintain the post-puja observances for maximum benefit."
                                        },
                                        {
                                            q: "When is the best time to perform Santaan Prapti Puja?",
                                            a: "The most auspicious times are: (1) Thursday (Jupiter's day), (2) During Pushya, Rohini, or Mrigashira nakshatra, (3) On Janmashtami (Krishna's birthday), (4) During Navratri (for Goddess blessings), (5) On Purnima (Full Moon) in Kartik or Chaitra month. The puja should be performed in the morning hours (6-10 AM). Consult an astrologer for your personalized Muhurat based on both partners' birth charts. Avoid performing during menstruation or inauspicious periods."
                                        },
                                        {
                                            q: "How many times should this puja be performed?",
                                            a: "Typically, one comprehensive puja with proper mantra count (21,000) is sufficient. However, if conception doesn't occur within 6-12 months, the puja can be repeated. Some astrologers recommend: (1) Performing on three consecutive Thursdays for severe cases, (2) Annual puja on Janmashtami until conception, (3) Monthly smaller pujas during fertile periods. The key is maintaining daily practices (Santaan Gopal worship, mantra chanting) after the main puja. Faith and patience are essential - divine timing varies for each couple."
                                        },
                                        {
                                            q: "Can this puja help with repeated miscarriages?",
                                            a: "Yes, absolutely. Repeated miscarriages often indicate Pitra Dosh (ancestral karma) or severe 5th house afflictions. The Santaan Prapti Puja includes Pitra Tarpan to appease ancestors and remove their curses. Additionally, special mantras are chanted for pregnancy retention. After the puja, the wife should wear a Santaan Gopal locket, avoid negative environments, and perform daily worship. Many women who suffered multiple miscarriages have successfully carried pregnancies to term after this puja. Combine with proper medical care and bed rest during pregnancy."
                                        },
                                        {
                                            q: "Is this puja effective for couples undergoing IVF or medical treatments?",
                                            a: "Yes, the puja complements medical treatments beautifully. Many couples perform Santaan Prapti Puja before starting IVF cycles to remove spiritual obstacles and enhance success rates. The puja creates positive energy that supports medical interventions. Vedic remedies address the karmic and astrological dimensions while medicine addresses the physical. Several couples have reported IVF success after years of failure, following this puja. Perform the puja 1-2 weeks before starting IVF cycle for best results. Continue daily mantras throughout the treatment period."
                                        },
                                        {
                                            q: "What donations are most effective for progeny?",
                                            a: "Progeny-specific donations include: (1) Yellow cloth, turmeric, and gram dal to Brahmins on Thursdays, (2) Feeding pregnant women or new mothers with nutritious food, (3) Donating to orphanages or child welfare organizations, (4) Sponsoring education for underprivileged children, (5) Giving toys, clothes, or books to poor children, (6) Supporting cow shelters (cow represents motherhood), (7) Planting fruit-bearing trees. The donation should be made with the mantra 'Om Santaan Gopalaya Namah' and genuine compassion. Jupiter appreciates service to children and mothers, so regular volunteer work at child-related charities is highly beneficial."
                                        },
                                        {
                                            q: "Can this puja help in choosing the gender of the child?",
                                            a: "Vedic rituals do not support gender selection as every child is a divine blessing. The Santaan Prapti Puja is performed to receive a healthy, virtuous child regardless of gender. In Vedic philosophy, the soul chooses its gender based on its karma and life purpose. Attempting to manipulate gender is considered against dharma and may create negative karma. The puja focuses on removing obstacles to conception and ensuring a healthy pregnancy. Accept whatever child the divine blesses you with - each soul comes with its own destiny and purpose."
                                        },
                                        {
                                            q: "Are there any precautions during and after the puja?",
                                            a: "Yes, observe these precautions: (1) Both partners should avoid non-vegetarian food, alcohol, and tobacco for 3 days before and 40 days after, (2) Maintain celibacy on the puja day, (3) Women should not perform during menstruation, (4) After puja, avoid visiting crematoriums, hospitals, or negative places for 40 days, (5) Keep the Santaan Gopal idol clean and worship daily, (6) Don't discuss the puja details with skeptics or negative people, (7) Maintain positive thoughts and avoid stress, (8) Continue medical treatments as advised by doctors. If conception occurs, perform Seemantham (baby shower puja) in 7th month for protection."
                                        },
                                        {
                                            q: "What if we already have one child but want a second child?",
                                            a: "The Santaan Prapti Puja can be performed for second or subsequent children as well, especially if there's a long gap or difficulties in conceiving again. The ritual remains the same, but in the Sankalp, specify the desire for a second child. Sometimes couples face 'secondary infertility' where conceiving the second child becomes difficult due to changed planetary positions or age factors. The puja removes these obstacles. Additionally, perform the puja if you want to balance family (e.g., have a daughter after sons or vice versa), though remember that gender preference should not be the primary motivation. Every child is a blessing."
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

                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Experience the Joy of Parenthood</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Invoke divine blessings for the precious gift of a child.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Santaan Puja</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Progeny Blessings</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Childbirth%20Delay%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Childbirth Delay Shanti" />
            <Footer />
        </>
    )
}
