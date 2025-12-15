import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AnnaprashanPujaPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Annaprashan Puja / Rice Feeding Ceremony',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Auspicous Annaprashan Puja (Rice Feeding) in Pune. Book certified pandits for Vedic Child Feeding Rituals. Complete guidance, Samagri, and Muhurat included.',
        serviceType: 'Hindu Annaprashan Ceremony',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    const sections = [
        { id: 'intro', title: 'Annaprashan Puja in Pune' },
        { id: 'about', title: 'What is Annaprashan?' },
        { id: 'significance', title: 'Significance & Benefits' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'locations', title: 'Homes & Locations' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <Head>
                <title>Annaprashan Puja in Pune – Rice Feeding Ceremony | Expert Pandit</title>
                <meta name="description" content="Book certified Pandit for Annaprashan Puja (First Rice Feeding) in Pune. Vedic rituals for baby's first solid food. Includes Samagri, Muhurat 2026, and Vidhi." />
                <meta name="keywords" content="Annaprashan Puja Pune, Rice Feeding Ceremony Pune, Annaprasana Vidhi, First Rice Feeding Pandit, Vedic Annaprashan" />
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
                            <span className="text-maroon-900 font-semibold">Annaprashan Puja</span>
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
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Annaprashan Puja - Rice Feeding"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">First Rice Feeding Ceremony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Annaprashan Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Rice Feeding with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Mark your child's first solid food with Vedic blessings. Traditional Annaprashan/Mukhe Bhaat ceremony for health and longevity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Annaprashan Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Annaprashan%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Annaprashan Puja in Pune</strong> is a sacred rice‑feeding ceremony that marks your child’s first intake of solid food with Vedic blessings for health, strength, and long life. It transforms a simple act of feeding into a powerful spiritual milestone where elders, deities, and mantras collectively bless the child’s physical and emotional growth.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">What is Annaprashan Puja?</h3>
                                <p>
                                    Annaprashan (also called Annaprasana, Annaprashana, or Mukhe Bhaat) is the Hindu samskara that celebrates the moment a baby formally begins eating solid food, traditionally rice or a rice‑based preparation. The ritual acknowledges food as sacred (annam brahma) and seeks divine grace so that everything the child eats in life supports health, purity, and spiritual development.
                                </p>
                                <p>
                                    In Pune, families across <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> perform Annaprashan Puja at home, in society halls, or small banquet spaces, blending traditional mantras with modern celebration. Certified pandits ensure the ritual follows authentic Vedic steps while remaining comfortable for the baby and convenient for working parents.
                                </p>

                                <h4 className="font-bold">Ideal Age and Timing</h4>
                                <p>
                                    Traditionally, Annaprashan is performed when the baby’s digestion is strong enough to accept solid food, usually between six and twelve months of age. Many traditions follow the guideline that boys have Annaprashan in even months (6th or 8th) and girls in odd months (5th, 7th, or 9th), provided the child is healthy and the pediatrician has no objections.
                                </p>
                                <p>
                                    The exact date and time are usually selected after consulting a pandit, who considers the child’s Janma Nakshatra, tithi, and family customs to find a shubh muhurat. Families in areas like Kharadi, Hinjewadi, Viman Nagar, and Hadapsar often prefer early morning muhurats, while those in Aundh, Camp, and Pimpri Chinchwad may opt for convenient afternoon slots that still fall within auspicious windows.
                                </p>
                            </section>

                            {/* Significance */}
                            <section id="significance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Spiritual Significance and Benefits</h2>
                                <p>
                                    Annaprashan Puja recognizes that food is not only physical nourishment but also shapes mind, emotions, and destiny. Scriptures highlight that pure, sattvic food helps cultivate a pure mind, so the ritual begins the child’s relationship with food under divine protection and gratitude.
                                </p>
                                <p>
                                    Benefits traditionally associated with Annaprashan include improved digestion, protection from food‑related ailments, blessings for strength and immunity, and overall longevity. The ceremony also symbolically cleanses any subtle impurities the child may have carried from the womb and welcomes them more fully into the social and cultural fabric of the family.
                                </p>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Annaprashan Puja Vidhi (Step‑by‑Step)</h2>
                                <ul className="list-none pl-0 space-y-6">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Pre‑Puja Preparation and Space Cleansing</h4>
                                            <p className="m-0 text-sm mt-1">Before the ceremony, the home and puja area are thoroughly cleaned, and a dedicated corner is decorated with rangoli, flowers, and a clean altar cloth. The child is bathed and dressed in new traditional clothes, and all utensils to be used for feeding—bowl, spoon, plates—are washed and kept near the altar for sanctification.</p>
                                            <p className="m-0 text-sm mt-1">The pandit begins by purifying the space through sprinkling of holy water, lighting a ghee lamp, and burning incense to invoke a sattvic atmosphere. In Pune’s apartments and villas, a small table or wooden chowki is typically used as the altar.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Ganesh Puja and Kalash Sthapana</h4>
                                            <p className="m-0 text-sm mt-1">The ritual starts with Ganesh Puja to remove obstacles. The pandit then performs kalash sthapana with a pot filled with holy water, adorned with mango leaves and coconut. In many traditions, family deities and ancestors are also remembered.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Invocation of Goddess Annapurna</h4>
                                            <p className="m-0 text-sm mt-1">Special mantras are chanted to invoke Goddess Annapurna, ensuring the child never faces scarcity. Offerings of cooked rice, ghee, fruits, and sweets are placed before the deities.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">4</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Sanctification of the First Food</h4>
                                            <p className="m-0 text-sm mt-1">The pandit recites Vedic mantras over the first solid food (rice/kheer) to bless it for digestion and immunity. The father or an elder feeds the child while mantras are chanted.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">5</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Blessings and Symbolic Fun Rituals</h4>
                                            <p className="m-0 text-sm mt-1">Elders bless the child. Some regions include a playful “future choice” ritual with symbolic objects like books, pens, or coins. The ceremony concludes with aarti and prasad distribution.</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Recommended Samagri for Annaprashan Puja</h2>
                                <p className="text-sm text-gray-700 mb-6">A well‑organized samagri arrangement ensures smooth rituals. Many professional pandits bring core items while guiding families on what to arrange at home.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Pandit-Provided Items (Usually)</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li>Ganesh idol or photo</li>
                                            <li>Kalash, lota, copper or steel plates</li>
                                            <li>Haldi, kumkum, chandan, akshata</li>
                                            <li>Incense sticks, dhoop, camphor, ghee, wicks, diya</li>
                                            <li>Flowers, garlands, durva grass</li>
                                            <li>Panchamrit ingredients</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Family‑Arranged & Specific Items</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li><strong>Rice or broken rice</strong> (for kheer/khichdi)</li>
                                            <li>Ghee, sugar/jaggery, fruits, sweets</li>
                                            <li><strong>Silver or clean steel bowl and spoon</strong> for baby</li>
                                            <li>New cloth/bib for child</li>
                                            <li>Clean altar cloth, baby's outfit, gifts</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead className="bg-maroon-50 text-maroon-900 font-bold">
                                            <tr>
                                                <th className="p-3 border-b border-maroon-200">Samagri</th>
                                                <th className="p-3 border-b border-maroon-200">Approx. Quantity</th>
                                                <th className="p-3 border-b border-maroon-200">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Rice / kheer ingredients</td>
                                                <td className="p-3">250–500 g</td>
                                                <td className="p-3">First solid food, offered as prasad</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Kalash + coconut</td>
                                                <td className="p-3">1 set</td>
                                                <td className="p-3">Divine seat and symbol of prosperity</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Haldi, kumkum, chandan</td>
                                                <td className="p-3">20–50 g each</td>
                                                <td className="p-3">Tilak, purification, and auspicious markings</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Flowers & garlands</td>
                                                <td className="p-3">250–500 g</td>
                                                <td className="p-3">Decor and offerings to deities</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Ghee & camphor</td>
                                                <td className="p-3">100–250 ml / 1 pack</td>
                                                <td className="p-3">Lamps and aarti, fire offerings</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Silver/steel bowl & spoon</td>
                                                <td className="p-3">1 set</td>
                                                <td className="p-3">For baby’s first feeding</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Choosing a Shubh Muhurat in 2026</h2>
                                <p>
                                    Selecting the right muhurat aligns the child’s first solid food experience with supportive planetary energies. Pandits usually consult panchang to choose a date that avoids inauspicious tithis and supports good health and steady growth.
                                </p>
                                <p>
                                    Typical guidelines include performing Annaprashan between the baby’s 6th and 12th month, with preference for the sixth or eighth month for boys and fifth or seventh month for girls, subject to health and doctor’s consent. The time is often set in the first half of the day, but in urban setups like Pune, well‑timed afternoon muhurats are also used for family convenience while staying astrologically sound.
                                </p>
                            </section>

                            {/* Locations */}
                            <section id="locations" className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Annaprashan in Pune Homes, Apartments, and Halls</h3>
                                <p className="text-gray-700 mb-3">
                                    Annaprashan Puja adapts well to different types of homes prevalent in Pune, from compact IT‑park apartments in Hinjewadi and Wakad to spacious bungalows in Koregaon Park and Aundh. Most families prefer to host the ceremony at home so the baby stays comfortable, with easy access to rest, feeding, and changing areas.
                                </p>
                                <p className="text-gray-700">
                                    The only real requirements are a clean room, adequate ventilation, and enough space for a small altar, parents, pandit, and a few close relatives. Larger families may book society halls or small banquets in localities like Viman Nagar, Baner, or Pimpri Chinchwad when they expect many guests.
                                </p>
                            </section>

                            {/* Role of Elders & Havan */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3 className="font-bold">Optional Havan and Extended Rituals</h3>
                                <p>
                                    Many families add a short havan (fire ritual) to Annaprashan to further purify the environment and seek stronger protection for the child. The havan usually includes simple offerings of ghee and herbs into the sacred fire, accompanied by mantras for health, strength, and mental clarity.
                                </p>
                                <p>
                                    Guidance is also given to parents about spiritual feeding habits—serving simple, sattvic foods and maintaining a calm atmosphere during meals.
                                </p>
                            </section>

                            {/* Why Choose */}
                            <section className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Why Families in Pune Prefer Certified Pandits</h3>
                                <p className="text-gray-700 mb-4">
                                    Hiring an experienced, Vedic‑trained pandit ensures that Annaprashan Puja is performed correctly, efficiently, and safely while the family focuses on the child and guests. Professional pandits manage everything from muhurat selection and samagri list to mantra chanting and time management.
                                </p>
                                <p className="text-gray-700 italic">
                                    Service platforms that specialize in puja bookings commonly provide pandits familiar with Maharashtrian, North Indian, South Indian, Gujarati, Marwari, and Bengali traditions, which is particularly valuable in a diverse city like Pune.
                                </p>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Annaprashan Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What is Annaprashan Puja?", a: "Annaprashan Puja is a Hindu ritual that marks a baby’s first intake of solid food—traditionally rice or a rice‑based dish—performed with Vedic mantras to bless the child with health, strength, prosperity, and spiritual protection." },
                                        { q: "When should Annaprashan Puja be performed?", a: "The ceremony is usually conducted between six and twelve months of age, often in the sixth or eighth month for boys and the fifth or seventh month for girls, with the exact date and time decided by the pandit." },
                                        { q: "Is samagri included by the pandit?", a: "Most specialized Annaprashan services provide complete samagri—including kalash, coconut, mango leaves, turmeric, kumkum, rice, fruits, ghee, flowers, incense, utensils, and altar cloths." },
                                        { q: "Can the puja be held at home in apartments or villas?", a: "Yes, Annaprashan Puja can be comfortably performed in apartments, independent houses, villas, society halls, and small private venues across Pune." },
                                        { q: "Do you provide pandits for different linguistic or cultural traditions?", a: "Many platforms offer pandits fluent in Marathi, Hindi, and other regional languages who can conduct Annaprashan Puja according to Maharashtrian, North Indian, South Indian, Gujarati, Marwari, Bengali, and mixed customs." },
                                        { q: "Can the ceremony include optional havan or extra rituals?", a: "Yes, families can request an additional havan, extended mantras, or special protective rituals to enhance the spiritual impact of Annaprashan." },
                                        { q: "Do you provide muhurat guidance for the puja?", a: "Professional pandits typically offer personalized 2026 muhurat guidance based on the baby’s Janma Kundali, health, and family’s preferred day and time." },
                                        { q: "Is the puja suitable for large family gatherings?", a: "Yes, Annaprashan Puja scales from intimate home ceremonies to larger gatherings, and experienced pandits manage the flow of rituals so that everything remains organized." }
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Bless Your Child's First Meal</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Turn feeding into a sacred ritual with Annaprashan Puja.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book experienced Pandits in Pune for a divine Rice Feeding Ceremony.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Annaprashan Puja</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Annaprashan</h4>
                                        <p className="text-gold-100 text-sm mb-4">Vedic Feeding Rituals</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Annaprashan%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PujaServiceLocations pujaName="Annaprashan Puja" />
            <Footer />
        </>
    )
}
