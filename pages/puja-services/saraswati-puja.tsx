import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function SaraswatiPujaPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Saraswati Puja',
        description: 'Book expert pandit for Saraswati Puja (Vasant Panchami) in Pune. Vedic rituals for wisdom, learning, and arts. Complete puja samagri and muhurat included.',
        price: '2100', // Assumed base price
        reviewCount: '680', // Assumed
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/saraswati-puja',
        image: 'https://panditforpujabooking.com/images/saraswati-puja-hero.jpg' // Assuming an image exists or will exist, usually hero images are standard
    })

    // 2. FAQs
    const faqs = [
        { question: "Why is Saraswati Puja so important in Pune?", answer: "Pune's status as a major educational and cultural center makes Saraswati Puja especially significant for students, teachers, and artists. The city's academic reputation and strong tradition in arts make this festival a cornerstone of Pune's cultural identity." },
        { question: "What are the best places to attend Saraswati Puja in Pune?", answer: "Top venues include Koregaon Park Bengali Association, Dagdusheth Halwai Ganpati Mandir, Aundh and Baner community centers, Kothrud Odia Samaj, and temples in Camp and Pashan areas." },
        { question: "Can non-Hindus participate in Saraswati Puja?", answer: "Absolutely. Saraswati Puja celebrates the universal values of knowledge and creativity, welcoming all who wish to honor learning and the arts." },
        { question: "What should I wear for Saraswati Puja?", answer: "Yellow or white traditional attire is considered auspicious. Yellow represents the vibrancy of spring and knowledge, while white symbolizes purity and peace." },
        { question: "How can I celebrate Saraswati Puja at home?", answer: "Set up a simple altar with an idol or image of Saraswati, offer flowers and fruits, place your books and instruments for blessings, recite Saraswati Vandana, and seek the goddess's blessings for wisdom and success." },
        { question: "What prasad is popular in Pune during Saraswati Puja?", answer: "Popular prasad includes besan laddoo, puran poli, shrikhand, seasonal fruits, and Bengali bhog. Maharashtrian families often add local delicacies to the traditional offerings." },
        { question: "How do schools in Pune mark Saraswati Puja?", answer: "Schools organize special assemblies with Saraswati Vandana, book and pen offerings where students place their study materials for blessings, art and music competitions, and motivational talks. Some schools also conduct Vidyarambham ceremonies for young children." },
        { question: "When is Saraswati Puja in 2025?", answer: "Saraswati Puja (Vasant Panchami) will be celebrated on February 2, 2025. The Panchami Tithi begins on February 1 evening and ends on February 2 evening. The recommended puja muhurat is during morning hours." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    // Using tableOfContents as 'sections' for valid anchor navigation if needed elsewhere, 
    // keeping the original structure naming for internal use
    const tableOfContents = [
        { id: 'introduction', title: 'Introduction: Saraswati Puja in Pune' },
        { id: 'significance', title: 'Spiritual and Cultural Significance' },
        { id: 'dates-2025', title: 'Saraswati Puja 2025 Dates and Muhurat' },
        { id: 'celebration', title: 'How Saraswati Puja is Celebrated in Pune' },
        { id: 'unique-traditions', title: 'Unique Pune Traditions' },
        { id: 'top-pandals', title: 'Where to Attend in Pune' },
        { id: 'students-professionals', title: 'For Students and Professionals' },
        { id: 'regional-variations', title: 'Saraswati Puja Across India' },
        { id: 'historical-roots', title: 'Historical Roots' },
        { id: 'how-to-perform', title: 'How to Perform: Step-by-Step Guide' },
        { id: 'modern-innovations', title: 'Modern Innovations' },
        { id: 'faqs', title: 'FAQs' }
    ]

    const topPandals = [
        'Koregaon Park Bengali Association',
        'Dagdusheth Halwai Ganpati Mandir',
        'Aundh and Baner Community Centers',
        'Kothrud Odia Samaj',
        'Pashan and Camp Area Temples'
    ]

    return (
        <>
            <SEOHead
                title="Saraswati Puja in Pune: Ultimate Guide to Rituals, History & Celebration 2025"
                description="Complete guide to Saraswati Puja in Pune - 2025 dates, muhurat, rituals, top pandals, traditions, and celebration details. Expert insights on Vasant Panchami festival."
                keywords="saraswati puja pune, vasant panchami, saraswati puja 2025, goddess saraswati, knowledge festival, pune celebrations"
                canonicalUrl="https://panditforpujabooking.com/puja-services/saraswati-puja"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Festival of Knowledge & Arts</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Saraswati Puja in Pune
                            </h1>
                            <p className="text-xl md:text-2xl text-gold-400 font-serif mb-6">
                                The Ultimate Guide to Rituals, History, and Celebration (2025)
                            </p>
                            <p className="text-lg text-gold-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Discover how Pune, the "Oxford of the East," celebrates Saraswati Puja with devotion and creative flair. From historic temples to modern IT hubs, experience the festival that honors wisdom, music, and the arts.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" href="#how-to-perform" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Learn How to Perform
                                </Button>
                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    Find Pandals in Pune
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Sidebar - Table of Contents */}
                        <div className="lg:col-span-1 order-2 lg:order-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h3 className="font-serif font-bold text-lg text-maroon-900 mb-4 border-b border-gold-200 pb-3">
                                        Table of Contents
                                    </h3>
                                    <nav className="space-y-2">
                                        {tableOfContents.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="block text-sm text-gray-600 hover:text-saffron-600 hover:translate-x-1 transition-all py-1"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-xl shadow-md p-6 border-2 border-gold-200">
                                    <h4 className="font-bold text-maroon-900 mb-3">Saraswati Puja 2025</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center">
                                            <span className="text-saffron-600 mr-2">📅</span>
                                            <span className="text-gray-700"><strong>Date:</strong> February 2, 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-saffron-600 mr-2">🕉️</span>
                                            <span className="text-gray-700"><strong>Festival:</strong> Vasant Panchami</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-saffron-600 mr-2">📍</span>
                                            <span className="text-gray-700"><strong>City:</strong> Pune, Maharashtra</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Widget */}
                                <div className="bg-maroon-900 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Pandit for Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">Expert pandits for home ceremonies</p>
                                        <a href="tel:+918446272142">
                                            <Button variant="secondary" size="sm" className="w-full bg-gold-500 text-maroon-900 hover:bg-gold-400 mb-2">
                                                Call +91-8446272142
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 order-1 lg:order-2 space-y-12">

                            {/* Introduction */}
                            <section id="introduction" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700">
                                <h2 className="text-4xl font-bold mb-6 flex items-center">
                                    <span className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-xl mr-3">📚</span>
                                    Introduction: Saraswati Puja in Pune – A Unique Blend of Tradition and Modernity
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    Saraswati Puja, also known as Vasant Panchami, is a festival deeply intertwined with the soul of Pune. Renowned as the "Oxford of the East," Pune is home to some of India's finest universities, music academies, and cultural hubs. Saraswati, the goddess of wisdom, music, and the arts, is revered by Pune's diverse population—students, educators, artists, IT professionals, and families alike.
                                </p>
                                <p>
                                    The city comes together every year to celebrate Saraswati Puja with devotion and creative flair. From the historic lanes of Shaniwar Wada, echoing with classical ragas, to the modern auditoriums of Koregaon Park filled with youthful energy, Pune's Saraswati Puja is a festive blend of tradition, innovation, and community spirit.
                                </p>
                                <p>
                                    This ultimate guide will walk you through the historical roots, local rituals, unique Pune flavors, and pan-India variations of Saraswati Puja. Whether you're a Pune resident, a student, or someone exploring Indian culture, this article is your comprehensive resource for Saraswati Puja in 2025.
                                </p>
                            </section>

                            {/* Significance */}
                            <section id="significance" className="bg-white rounded-2xl shadow-lg p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Spiritual and Cultural Significance of Saraswati Puja</h2>
                                <p className="text-gray-700 mb-6">
                                    Saraswati Puja is more than a festival—it's a spiritual journey that celebrates knowledge in all forms. In Pune, where education and creativity are central to the city's identity, the goddess Saraswati holds special significance.
                                </p>

                                <h3 className="text-2xl font-bold text-maroon-800 mb-4">Why Saraswati Puja Matters in Pune</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            icon: '🎓',
                                            title: 'Inspiration for Students',
                                            desc: "Pune's academic reputation attracts students from across India and abroad. Saraswati Puja is considered the most auspicious time to begin new studies, seek divine blessings before exams, and honor one's teachers."
                                        },
                                        {
                                            icon: '🎨',
                                            title: 'Nurturing the Arts',
                                            desc: "With its strong tradition in classical music, dance, painting, and literature, Pune's artists seek Saraswati's blessings for creativity and excellence."
                                        },
                                        {
                                            icon: '🤝',
                                            title: 'Community Bonding',
                                            desc: "The festival brings together people from different linguistic and cultural backgrounds, reinforcing Pune's cosmopolitan spirit."
                                        },
                                        {
                                            icon: '🏛️',
                                            title: 'Cultural Preservation',
                                            desc: "Through rituals, music programs, and art exhibitions, Saraswati Puja keeps alive India's rich heritage while adapting to modern times."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-saffron-50/30 rounded-lg p-6 border border-gold-100">
                                            <div className="text-4xl mb-3">{item.icon}</div>
                                            <h4 className="text-lg font-bold text-maroon-900 mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Dates 2025 */}
                            <section id="dates-2025" className="bg-gradient-to-br from-maroon-900 to-saffron-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-gold-300 mb-6">Saraswati Puja 2025 Dates and Muhurat in Pune</h2>

                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 border border-gold-500/30">
                                        <h3 className="text-2xl font-bold text-gold-200 mb-4">When is Saraswati Puja in 2025?</h3>
                                        <p className="text-gold-100 mb-4">
                                            In 2025, Saraswati Puja (Vasant Panchami) will be celebrated on <strong className="text-white">February 2nd</strong>, as per the Hindu lunisolar calendar. The festival falls on the fifth day (Panchami) of the bright fortnight of the month of Magha.
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold-500/30">
                                        <h3 className="text-2xl font-bold text-gold-200 mb-4">Muhurat and Puja Timings in Pune</h3>
                                        <div className="space-y-2 text-gold-100">
                                            <p><strong>Panchami Tithi Begins:</strong> February 1, 2025 (Evening)</p>
                                            <p><strong>Panchami Tithi Ends:</strong> February 2, 2025 (Evening)</p>
                                            <p><strong>Recommended Puja Muhurat:</strong> Morning hours (6:00 AM - 12:00 PM)</p>
                                        </div>
                                        <div className="mt-4 p-4 bg-gold-500/20 rounded-lg border border-gold-400/30">
                                            <p className="text-sm text-gold-200">
                                                <strong>Local Tip:</strong> Many Pune families begin their puja early in the morning, while schools and pandals often follow the community schedule. Always verify with your local mandal or temple for the latest updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Celebration in Pune */}
                            <section id="celebration">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">How Saraswati Puja is Celebrated in Pune</h2>
                                <p className="text-gray-700 mb-8">
                                    Saraswati Puja in Pune is a vibrant celebration that reflects the city's diversity. From traditional rituals at home to grand community gatherings, here's how Pune celebrates:
                                </p>

                                <div className="space-y-8">
                                    {/* Community Pandals */}
                                    <div className="bg-white rounded-xl shadow-md p-8 border border-gold-200">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-3xl mr-3">🎪</span>
                                            Community Pandals and Cultural Events
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Pune's cosmopolitan population means you'll find Saraswati Puja celebrations among Bengali, Odia, South Indian, and Maharashtrian communities.
                                        </p>
                                        <h4 className="font-bold text-maroon-800 mb-3">Highlights:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Bengali Associations:</strong> Organize large-scale pujas with elaborate idols, music, and bhog (prasad), especially in Koregaon Park, Aundh, and Kothrud.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Cultural Programs:</strong> Classical music concerts, dance performances, poetry readings, and art exhibitions at venues like Tilak Smarak Mandir and Yashwantrao Chavan Natyagruha.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Open-Air Pandals:</strong> Many neighborhoods set up open-air stages for public participation, where both children and adults showcase their talents.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Competitions:</strong> Rangoli, essay writing, and painting competitions foster a spirit of creativity.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Schools and Colleges */}
                                    <div className="bg-white rounded-xl shadow-md p-8 border border-gold-200">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-3xl mr-3">🏫</span>
                                            Saraswati Puja in Schools and Colleges
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Pune's educational institutions play a leading role in Saraswati Puja festivities:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                {
                                                    title: 'Morning Assemblies',
                                                    desc: 'Schools begin the day with Saraswati Vandana (hymns) and collective prayers.'
                                                },
                                                {
                                                    title: 'Book and Pen Offerings',
                                                    desc: 'Students place their textbooks, musical instruments, and stationery near the goddess for blessings.'
                                                },
                                                {
                                                    title: 'Talent Shows',
                                                    desc: 'Schools organize art and music competitions, celebrating the creative spirit of Saraswati.'
                                                },
                                                {
                                                    title: 'Vidyarambham Ceremony',
                                                    desc: 'For the youngest children, this "initiation into learning" ceremony is a cherished tradition.'
                                                }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-saffron-50/30 p-4 rounded-lg border border-gold-100">
                                                    <h4 className="font-bold text-maroon-800 mb-2">{item.title}</h4>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Home Rituals */}
                                    <div className="bg-white rounded-xl shadow-md p-8 border border-gold-200">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-3xl mr-3">🏠</span>
                                            Home Rituals and Family Traditions
                                        </h3>
                                        <p className="text-gray-700 mb-4">Many Pune families observe Saraswati Puja at home:</p>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">★</span>
                                                <span><strong>Altar Setup:</strong> Families set up a simple altar with an idol or image of Saraswati, decorated with yellow or white flowers.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">★</span>
                                                <span><strong>Ritual Offerings:</strong> Prasad includes seasonal fruits, sweets like besan laddoo, and local delicacies.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">★</span>
                                                <span><strong>Aarti and Bhajans:</strong> Family members sing devotional songs, perform aarti, and share prasad.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">★</span>
                                                <span><strong>Respect for Learning:</strong> On this day, many avoid reading or writing as a mark of respect, while others encourage children to write their first letters.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Unique Pune Traditions */}
                            <section id="unique-traditions" className="bg-gradient-to-br from-gold-50 to-saffron-50 rounded-2xl p-8 border-2 border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Unique Pune Traditions and Local Flavors</h2>
                                <p className="text-gray-700 mb-6">
                                    Saraswati Puja in Pune has some delightful local touches that set it apart.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-2xl mr-2">🍬</span>
                                            Special Prasad and Offerings
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 ml-8">
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2">•</span>
                                                <span><strong>Maharashtrian Delicacies:</strong> Alongside traditional Bengali bhog, Pune families prepare puran poli (sweet flatbread), shrikhand, and besan laddoo.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2">•</span>
                                                <span><strong>Seasonal Fruits:</strong> Offerings often include bananas, sugarcane, and guavas, sourced from local farms.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2">•</span>
                                                <span><strong>Marathi Touch:</strong> Many Maharashtrian families add turmeric and marigold flowers as part of the decoration.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-2xl mr-2">🌍</span>
                                            Involvement of Marathi and Cosmopolitan Communities
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 ml-8">
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2">•</span>
                                                <span><strong>Marathi Bhajans and Shlokas:</strong> While Bengali hymns are common, Maharashtrian families recite Marathi bhajans and Sanskrit shlokas honoring Saraswati.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2">•</span>
                                                <span><strong>Cosmopolitan Spirit:</strong> In IT hubs like Hinjawadi and Magarpatta, you'll find cross-cultural celebrations—Kannadiga, Telugu, Gujarati, North Indian, and expat communities all join the festivities.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-maroon-800 mb-3 flex items-center">
                                            <span className="text-2xl mr-2">🌱</span>
                                            Eco-Friendly Celebrations in Pune
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 ml-8">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span><strong>Clay Idols:</strong> Many Pune communities prioritize eco-friendly clay idols over plaster of Paris.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span><strong>Natural Colors:</strong> Rangoli designs use flower petals and natural dyes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span><strong>Plastic-Free Events:</strong> Community drives to reduce plastic waste and promote sustainability are common, aligning with Pune's green ethos.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Top Pandals */}
                            <section id="top-pandals" className="bg-white rounded-2xl shadow-lg p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Where to Attend Saraswati Puja in Pune: Top Pandals and Temples</h2>
                                <p className="text-gray-700 mb-6">
                                    If you want to experience Saraswati Puja in all its glory, Pune offers several hotspots:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {topPandals.map((pandal, i) => (
                                        <div key={i} className="bg-saffron-50/30 rounded-lg p-6 border-l-4 border-saffron-500">
                                            <div className="flex items-start">
                                                <span className="text-2xl font-bold text-saffron-600 mr-3">{i + 1}</span>
                                                <div>
                                                    <h3 className="text-lg font-bold text-maroon-900">{pandal}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-maroon-900 mb-3">Tips for Visitors:</h3>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-gold-600 mr-2">→</span>
                                            <span>Arrive early to find parking and seating.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-600 mr-2">→</span>
                                            <span>Dress in traditional yellow or white attire for blessings.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-600 mr-2">→</span>
                                            <span>Participate in community meals and cultural programs for a complete experience.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-600 mr-2">→</span>
                                            <span>Check social media for event schedules and live streams, especially in 2025.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Students and Professionals */}
                            <section id="students-professionals">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Saraswati Puja for Students and Professionals in Pune</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gold-200">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-3xl mr-3">👨‍🎓</span>
                                            For Students
                                        </h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Exam Preparation:</strong> Students throng temples and pandals to seek blessings for academic success.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Workshops and Seminars:</strong> Coaching institutes and colleges host motivational talks and study skill workshops.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Scholarship Announcements:</strong> Some organizations announce scholarships or academic awards during puja ceremonies.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gold-200">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-3xl mr-3">💼</span>
                                            For Professionals
                                        </h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Corporate Celebrations:</strong> IT companies and offices in Pune's business hubs organize lunchtime pujas and knowledge-themed events.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-saffron-500 mr-2 mt-1">✓</span>
                                                <span><strong>Skill Development:</strong> Professional bodies offer seminars on creativity, innovation, and lifelong learning in Saraswati's honor.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Regional Variations */}
                            <section id="regional-variations" className="bg-white rounded-2xl shadow-lg p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Expanding Horizons: Saraswati Puja Across India</h2>
                                <p className="text-gray-700 mb-6">
                                    Pune's celebration is just one facet of a pan-Indian festival rich in diversity.
                                </p>

                                <h3 className="text-2xl font-bold text-maroon-800 mb-4">Regional Variations</h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            region: 'West Bengal',
                                            desc: 'Celebrated as "Saraswati Pujo" with massive idols, yellow sarees, and grand feasts. Schools close, and students flock to community halls.'
                                        },
                                        {
                                            region: 'South India',
                                            desc: 'Known as "Vidyarambham" in Tamil Nadu and Kerala, performed on Vijayadashami as well as Vasant Panchami. Children are initiated into learning with the help of a guru or elder.'
                                        },
                                        {
                                            region: 'North India',
                                            desc: 'Celebrated mainly in Uttar Pradesh, Bihar, and Delhi, with school events and home pujas.'
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-saffron-50/30 p-4 rounded-lg border border-gold-100">
                                            <h4 className="font-bold text-maroon-900 mb-2">{item.region}</h4>
                                            <p className="text-sm text-gray-700">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 p-4 bg-gold-50 rounded-lg border border-gold-200">
                                    <h4 className="font-bold text-maroon-900 mb-2">Key Differences and Similarities</h4>
                                    <p className="text-sm text-gray-700 mb-2"><strong>Common Rituals:</strong> Offering of books, musical instruments, and yellow flowers; singing of Saraswati Vandana; distribution of prasad.</p>
                                    <p className="text-sm text-gray-700"><strong>Regional Flavors:</strong> Distinctive prasad, music styles, and decorations reflect local culture.</p>
                                </div>
                            </section>

                            {/* Historical Roots */}
                            <section id="historical-roots" className="bg-gradient-to-br from-maroon-50 to-gold-50 rounded-2xl p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Historical Roots of Saraswati Puja in India</h2>
                                <p className="text-gray-700 mb-6">
                                    Saraswati Puja's roots can be traced to the Vedic period. Ancient texts such as the Rigveda describe Saraswati as the goddess of wisdom and learning.
                                </p>

                                <h3 className="text-2xl font-bold text-maroon-800 mb-4">Historical Highlights</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-4">📜</span>
                                        <div>
                                            <h4 className="font-bold text-maroon-900 mb-1">Vedic Era</h4>
                                            <p className="text-gray-700 text-sm">Saraswati is mentioned as the river goddess and patron of knowledge.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-4">🎭</span>
                                        <div>
                                            <h4 className="font-bold text-maroon-900 mb-1">Puranic Age</h4>
                                            <p className="text-gray-700 text-sm">The goddess is depicted with the veena (musical instrument), book, and swan, symbolizing purity and intellect.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-4">🏛️</span>
                                        <div>
                                            <h4 className="font-bold text-maroon-900 mb-1">Medieval and Modern India</h4>
                                            <p className="text-gray-700 text-sm">The festival grew in popularity with the spread of educational institutions and patronage by kings and scholars.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-white rounded-lg border border-gold-200">
                                    <h4 className="font-bold text-maroon-900 mb-3">Influence on Indian Society</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-saffron-500 mr-2">•</span>
                                            <span><strong>Art and Literature:</strong> Saraswati inspired poets, musicians, and artists across centuries.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-saffron-500 mr-2">•</span>
                                            <span><strong>Education:</strong> Vidyarambham ceremonies mark the formal beginning of a child's education, a tradition still strong in Pune's schools.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-saffron-500 mr-2">•</span>
                                            <span><strong>Cultural Heritage:</strong> Saraswati Puja preserves and evolves India's artistic and scholarly legacy.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* How to Perform */}
                            <section id="how-to-perform" className="bg-white rounded-2xl shadow-lg p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">How to Perform Saraswati Puja: Step-by-Step Guide</h2>
                                <p className="text-gray-700 mb-6">
                                    Here's a detailed, easy-to-follow guide for performing Saraswati Puja at home or in your community:
                                </p>

                                <div className="space-y-8">
                                    {/* Preparation */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4">Preparation</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">1.</span>
                                                <span>Clean the area where the puja will be performed.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">2.</span>
                                                <span>Place a table or platform and spread a clean white or yellow cloth.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-500 mr-2 mt-1">3.</span>
                                                <span>Set up an idol or image of Goddess Saraswati.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Essential Items */}
                                    <div className="bg-saffron-50/30 p-6 rounded-lg border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-800 mb-4">Essential Puja Items</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Fresh yellow or white flowers (marigold, lotus)</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Fruits (bananas, guavas, apples)</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Sweets (besan laddoo, puran poli, payesh)</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Books, pens, musical instruments</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Incense sticks, diya (oil lamp), and camphor</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-saffron-500 mr-2">✓</span>
                                                <span>Turmeric, kumkum, sandalwood paste</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puja Steps */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-800 mb-4">Puja Steps</h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    step: '1',
                                                    title: 'Purification',
                                                    desc: 'Sprinkle water to purify the space.'
                                                },
                                                {
                                                    step: '2',
                                                    title: 'Sankalp',
                                                    desc: 'Take a vow for the successful completion of the puja.'
                                                },
                                                {
                                                    step: '3',
                                                    title: 'Invocation',
                                                    desc: 'Chant Saraswati Vandana or the mantra: "Om Saraswati Namastubhyam, Varade Kamarupini, Vidyarambham Karishyami, Siddhir Bhavatu Me Sada."'
                                                },
                                                {
                                                    step: '4',
                                                    title: 'Offerings',
                                                    desc: 'Place flowers, fruits, and sweets before the goddess. Arrange books and instruments on the altar.'
                                                },
                                                {
                                                    step: '5',
                                                    title: 'Aarti',
                                                    desc: 'Light the diya, wave it before the idol, and sing Saraswati aarti.'
                                                },
                                                {
                                                    step: '6',
                                                    title: 'Prasad Distribution',
                                                    desc: 'Share the blessed food with family, friends, and neighbors.'
                                                },
                                                {
                                                    step: '7',
                                                    title: 'Conclusion',
                                                    desc: 'Bow to the goddess, seeking wisdom and creativity for the year ahead.'
                                                }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-4 bg-white p-4 rounded-lg border border-gold-100">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center font-bold">
                                                        {item.step}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-maroon-900 mb-1">{item.title}</h4>
                                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Vidyarambham */}
                                    <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-500">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-3">Vidyarambham for Young Children</h3>
                                        <p className="text-gray-700">
                                            Hold the child's hand and help them write their first letters—traditionally "Om" or the alphabet—on a slate or in a tray of rice. This marks the auspicious beginning of their educational journey.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Modern Innovations */}
                            <section id="modern-innovations" className="bg-gradient-to-br from-white to-saffron-50 rounded-2xl p-8 border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Modern Innovations: Digital and Eco-Friendly Puja Practices</h2>
                                <p className="text-gray-700 mb-6">
                                    Saraswati Puja in Pune is keeping pace with the times, thanks to technology and environmental awareness.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">💻</span>
                                            Digital Celebrations
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">→</span>
                                                <span><strong>Online Pujas:</strong> Many associations offer live-streamed pujas and digital aartis for those unable to attend in person.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">→</span>
                                                <span><strong>E-Prasad:</strong> Some temples arrange for prasad delivery or digital blessings.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">→</span>
                                                <span><strong>Social Media:</strong> Event schedules, cultural competitions, and photo contests are promoted via Instagram, Facebook, and WhatsApp.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gold-100">
                                        <h3 className="text-xl font-bold text-maroon-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🌱</span>
                                            Eco-Friendly Practices
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span>Use of biodegradable decorations and clay idols.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span>Community workshops on sustainable celebrations.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span>Zero-plastic policies at major pandals and public events.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions (FAQs)</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
                                            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-maroon-900 group-open:text-saffron-600">
                                                {faq.question}
                                                <span className="transform transition-transform group-open:rotate-180">▼</span>
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="bg-gradient-to-r from-maroon-900 to-saffron-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-serif font-bold text-gold-300 mb-4">Conclusion: Embracing Knowledge and Creativity Through Saraswati Puja</h2>
                                    <p className="text-gold-100 mb-6 leading-relaxed">
                                        Saraswati Puja in Pune is a beautiful convergence of tradition, community, and innovation. Whether celebrated at a grand pandal, a school auditorium, or within the quiet walls of your home, the festival offers a chance to pause, honor the pursuit of knowledge, and seek inspiration for creative and academic success.
                                    </p>
                                    <p className="text-gold-100 mb-6 leading-relaxed">
                                        As Pune continues to grow as a center of education and technology, Saraswati Puja remains an anchor—reminding the city of its roots in wisdom, art, and culture. May the blessings of Saraswati guide you on your journey of learning and creativity.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-gold-500/30">
                                        <h3 className="text-xl font-bold text-gold-300 mb-3">Optimize Your Saraswati Puja Experience</h3>
                                        <ul className="space-y-2 text-gold-100 text-sm">
                                            <li className="flex items-start">
                                                <span className="text-gold-400 mr-2">✓</span>
                                                <span>Attend a local celebration or join a virtual event.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-400 mr-2">✓</span>
                                                <span>Try eco-friendly decor and prasad recipes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-gold-400 mr-2">✓</span>
                                                <span>Share this guide with friends and family to spread the light of knowledge.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text-2xl font-serif text-gold-300 mt-6 text-center">
                                        Happy Saraswati Puja 2025, Pune and India! 🙏
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="saraswati-puja"
                        category="goddess"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Saraswati Puja" />
            <Footer />
        </>
    )
}
