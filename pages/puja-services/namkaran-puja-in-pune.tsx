import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function NamkaranPujaPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Namkaran Puja / Naming Ceremony',
        description: 'Auspicous Namkaran Puja (Naming Ceremony) in Pune. Book certified pandits for Vedic Naming Rituals. Complete guidance, Samagri, and Muhurat included.',
        price: '2100', // Assumed base price for Namkaran
        reviewCount: '650', // Assumed
        ratingValue: '4.9',
        url: 'https://panditforpujabooking.com/puja-services/namkaran-puja-in-pune',
        image: 'https://panditforpujabooking.com/images/ganesh-puja-hero.jpg' // Reusing the hero image as seen in the original file
    })

    // 2. FAQs
    const faqs = [
        { question: "What is Namkaran Puja?", answer: "Namkaran Puja is the formal Hindu naming ceremony where a newborn is given an official name in a Vedic ritual, invoking blessings for health, prosperity, wisdom, and protection." },
        { question: "When should Namkaran Puja be performed?", answer: "It is generally done on the 11th or 12th day after birth, though families may also choose the 21st or 27th day or another auspicious muhurat within the first year based on astrological advice." },
        { question: "Is samagri included by the pandit?", answer: "Most specialized services provide all essential samagri—kalash, coconut, mango leaves, ghee, flowers, incense, rice, turmeric, and basic puja items—so the family only needs to arrange the baby’s clothes, gifts, and refreshments." },
        { question: "Can Namkaran Puja be held in apartments or society halls?", answer: "Yes, the ceremony can be performed in apartments, villas, society clubhouses, farmhouses, or private halls, as long as a clean, quiet space is available for the altar and participants." },
        { question: "Do you provide pandits for different cultural traditions?", answer: "Many platforms offer pandits capable of conducting Namkaran Puja in Maharashtrian, Gujarati, Marwari, North Indian, South Indian, Bengali, and mixed styles, while maintaining core Vedic procedures." },
        { question: "Do you provide muhurat guidance?", answer: "Professional pandits usually provide customized 2026 muhurat guidance based on the child’s horoscope, tithi, nakshatra, and the family’s preferred days and timings." },
        { question: "Can optional havan or additional rituals be included?", answer: "Yes, families can request extra havan, protection mantras, or extended shanti rituals to enhance the ceremony’s spiritual impact." },
        { question: "Is the ceremony suitable for large family gatherings?", answer: "Namkaran Puja scales well from small in‑home rituals to bigger functions, and experienced pandits manage crowd flow, aarti, and prasad distribution while ensuring each step remains disciplined and devout." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    const sections = [
        { id: 'intro', title: 'Namkaran Puja in Pune' },
        { id: 'about', title: 'What is Namkaran Puja?' },
        { id: 'significance', title: 'Significance & Benefits' },
        { id: 'astrology', title: 'Role of Astrology' },
        { id: 'vidhi', title: 'Step-by-Step Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'muhurat', title: 'Muhurat 2026' },
        { id: 'locations', title: 'Home & Locations' },
        { id: 'faqs', title: 'FAQs' },
    ]

    return (
        <>
            <SEOHead
                title="Namkaran Puja in Pune – Sacred Naming Ceremony | Expert Pandit"
                description="Book certified Pandit for Namkaran Puja (Naming Ceremony) in Pune. Vedic rituals for new born. Includes Samagri, Muhurat 2026, and detailed Vidhi."
                keywords="Namkaran Puja Pune, Naming Ceremony Pandit, Born Baby Puja Pune, Vedic Namkaran Vidhi, Pandit for Naming Ceremony"
                canonicalUrl="https://panditforpujabooking.com/puja-services/namkaran-puja-in-pune"
                schema={[serviceSchema, faqSchema]}
            />

            <Header />
            <Breadcrumbs />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    {/* Hero Background Image */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/ganesh-puja-hero.jpg"
                            alt="Namkaran Puja - Naming Ceremony"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Vedic Naming Ceremony</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Namkaran Puja in Pune <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Sacred Naming Ceremony with Certified Pandit Ji</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Formally introduce your child to family, society, and divine grace. Authentic Vedic Namkaran rituals aligned with astrology for your newborn's bright future.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Namkaran Puja
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Namkaran%20Puja" target="_blank" rel="noopener noreferrer">
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
                                    <strong>Namkaran Puja in Pune</strong> is a sacred naming ceremony that formally introduces your child to family, society, and divine grace, while aligning the name with Vedic astrology and positive sanskaras. It blesses the child with good health, wisdom, prosperity, and strong spiritual protection right from the earliest days of life.
                                </p>

                                <h3 id="about" className="text-2xl font-bold mt-8">What is Namkaran Puja?</h3>
                                <p>
                                    Namkaran Puja (naming ceremony) is one of the primary Hindu sanskaras performed to officially give a newborn child their name in the presence of deities, family elders, and well‑wishers. It is considered the child’s first major samskara, shaping character, identity, and the spiritual vibrations that accompany them throughout life.
                                </p>
                                <p>
                                    In Pune, families across <strong>Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp</strong> organize Namkaran Puja at home or in society halls, blending traditional Vedic rituals with modern lifestyle conveniences. Certified pandits guide the entire process—right from muhurat selection and horoscope‑based name suggestion to mantra chanting and final aarti—so the ceremony is spiritually powerful and culturally authentic.
                                </p>

                                <h4 className="font-bold">When is Namkaran Puja Performed?</h4>
                                <p>
                                    Traditionally, Namkaran Puja is performed on the <strong>11th or 12th day</strong> after the baby’s birth, once the initial post‑natal period is over and mother and child are ready for rituals. Many traditions also allow the ceremony on the 21st or 27th day, or on another auspicious date within the first year, based on the advice of a pandit or astrologer.
                                </p>
                                <p>
                                    Families in Pune often choose dates depending on health, climate, and convenience while still respecting Vedic guidelines; some opt for later months (third, fifth, or seventh month) if early days are not feasible. Early morning or forenoon muhurats are generally preferred for babies, though evening muhurats are also selected in urban areas like Koregaon Park, Aundh, Camp, and Baner for family convenience.
                                </p>
                            </section>

                            {/* Significance */}
                            <section id="significance" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Spiritual Significance and Benefits</h2>
                                <p>
                                    Namkaran Puja is more than a social formality; it is a powerful spiritual act that bestows samskaras on the child and reminds parents of their sacred responsibilities. Through Vedic mantras, the ceremony invokes blessings from <strong>Lord Ganesha, Goddess Saraswati, family deities, and ancestors</strong> for the child’s health, longevity, wisdom, and inner strength.
                                </p>
                                <p>
                                    A correctly chosen, astrologically aligned name is believed to enhance auspicious qualities, attract good fortune, and reduce negative karmic or planetary influences. The puja environment—filled with mantras, aarti, and family blessings—creates a protective spiritual shield around the child and strengthens emotional bonds within the family.
                                </p>
                            </section>

                            {/* Role of Astrology */}
                            <section id="astrology" className="bg-saffron-50 p-6 rounded-lg border border-saffron-100 prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-2xl font-bold">Role of Name, Nakshatra, and Astrology</h2>
                                <p>
                                    In Vedic tradition, a child’s name is usually selected based on <strong>Janma Nakshatra (birth star), Rashi (moon sign), and planetary positions in the horoscope</strong>. The pandit studies the Janma Kundali and suggests auspicious syllables or starting letters that harmonize with the child’s astrological profile and life path.
                                </p>
                                <p>
                                    Modern numerology and traditional astrology both emphasize that the name’s sound, meaning, and letter count can subtly influence personality, opportunities, and destiny. During Namkaran, the chosen name is formally announced through sankalp and mantras, making it spiritually “activated” and accepted in both the divine and social spheres.
                                </p>
                            </section>

                            {/* Vidhi */}
                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Namkaran Puja Vidhi (Step‑by‑Step)</h2>
                                <ul className="list-none pl-0 space-y-6">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Pre‑Puja Purification</h4>
                                            <p className="m-0 text-sm mt-1">Before starting, the pandit purifies the home and puja area with mantras, sprinkling sanctified water, and lighting of ghee lamps and incense. Mother and child are usually bathed and dressed in fresh, traditional clothes; the puja space is decorated with rangoli, flowers, and a clean altar cloth.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Ganesh Puja and Kalash Sthapana</h4>
                                            <p className="m-0 text-sm mt-1">The ceremony begins with Ganesh Puja to remove obstacles and ensure a smooth, auspicious ritual. A kalash filled with holy water, topped with mango leaves and coconut, is established as a seat of divine presence and prosperity for the child’s future.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Main Namkaran Ritual</h4>
                                            <p className="m-0 text-sm mt-1">After preliminary pujas, the pandit performs sankalp, mentioning the baby’s birth details, parents’ names, location, and purpose of the ceremony. The name is then chosen and invoked—often by whispering it into the baby’s right ear, chanting specific mantras, and sometimes writing the name on a plate filled with rice or on a ceremonial card.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center font-bold">4</div>
                                        <div>
                                            <h4 className="font-bold text-lg m-0 text-maroon-800">Blessings, Havan, and Aarti</h4>
                                            <p className="m-0 text-sm mt-1">In many homes, a brief havan is conducted for graha shanti and overall protection, particularly in families that prefer a complete Vedic environment. Relatives and guests bless the child with gifts such as silver, gold, clothes, toys, fruits, and sweets, followed by collective aarti and distribution of prasadam.</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            {/* Samagri */}
                            <section id="samagri" className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Namkaran Puja Samagri List</h2>
                                <p className="text-sm text-gray-700 mb-6">A complete Namkaran Puja requires specific samagri that symbolizes purity, prosperity, and divine presence. Certified pandits usually bring most of the core items, while families arrange baby‑specific and household elements as per convenience.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Core Items (Usually Brought by Pandit)</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li>Ganesh idol or picture, kalash, and lota</li>
                                            <li>Turmeric (haldi), kumkum, chandan, akshata (rice)</li>
                                            <li>Mango leaves, coconut, durva grass, kusha</li>
                                            <li>Ghee, camphor, dhoop, agarbatti, matchbox</li>
                                            <li>Flowers, garlands, and leaves for decoration</li>
                                            <li>Panchamrit ingredients: milk, curd, ghee, honey, sugar</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-maroon-700 mb-2 border-b pb-1">Family‑Arranged Items</h4>
                                        <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                                            <li>Clean red or yellow cloth for altar</li>
                                            <li>Fruits, sweets, dry fruits, and snacks for guests</li>
                                            <li>New clothes or ceremonial dress for the baby</li>
                                            <li>Gifts for the child (silver items, bangles, anklets, toys)</li>
                                            <li>Plates, bowls, and drinking water for participants</li>
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
                                                <td className="p-3">Ganesh idol/photo</td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">Obstacle removal, auspicious beginning</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Kalash + coconut</td>
                                                <td className="p-3">1 set</td>
                                                <td className="p-3">Seat of divine blessings, prosperity</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Haldi, kumkum</td>
                                                <td className="p-3">20–50 g each</td>
                                                <td className="p-3">Purity and mangalya (auspiciousness)</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Chandan, akshata</td>
                                                <td className="p-3">As needed</td>
                                                <td className="p-3">Cooling, sanctifying offerings</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Flowers, garlands</td>
                                                <td className="p-3">250–500 g</td>
                                                <td className="p-3">Devotion and decoration</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Ghee, camphor</td>
                                                <td className="p-3">100–250 ml / 1 pack</td>
                                                <td className="p-3">Deepa and aarti, fire offerings</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="p-3">Panchamrit items</td>
                                                <td className="p-3">Small bowl each</td>
                                                <td className="p-3">Abhishek and prasad</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Fruits & sweets</td>
                                                <td className="p-3">1–2 kg</td>
                                                <td className="p-3">Naivedya and prasadam distribution</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Muhurat */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Ideal Muhurat for Namkaran Puja in 2026</h2>
                                <p>
                                    Shubh muhurat amplifies the positive impact of Namkaran Puja, combining lunar tithi, nakshatra, and weekday energies for the child’s benefit. While the 11th or 12th day is traditionally accepted, many families in Pune also ask for a customized 2026 muhurat based on Janma Kundali if the basic days are not feasible.
                                </p>
                                <p>
                                    Typical guidelines include choosing a waxing moon (Shukla Paksha), avoiding inauspicious tithis, and selecting times when benefic planets strongly influence the lagna (ascendant). A pandit considers the baby’s birth chart, family tradition, and health conditions before finalizing a time that suits both spiritual and practical needs.
                                </p>
                            </section>

                            {/* Homes and Apartments */}
                            <section id="locations" className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Namkaran Puja in Pune Homes and Apartments</h3>
                                <p className="text-gray-700 mb-3">
                                    In Pune, Namkaran Puja is comfortably conducted in modern flats, gated societies, independent houses, villas, and community halls. Areas like Hinjewadi, Wakad, and Kharadi with IT professionals often favor compact yet well‑organized in‑home setups, while Koregaon Park, Aundh, and Viman Nagar families may host larger gatherings with extended relatives.
                                </p>
                                <p className="text-gray-700">
                                    Ownership of the property is not important; what matters is a clean, peaceful environment and sincere devotion during the ceremony. A dedicated corner in the living room, with proper ventilation and minimal disturbance, is usually sufficient for the pandit to perform all rituals comfortably.
                                </p>
                            </section>

                            {/* Optional Havan */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3 className="font-bold">Optional Havan, Mantras, and Extended Rituals</h3>
                                <p>
                                    Depending on family preference, Namkaran Puja can be simple and brief or extended with havan and special mantras for health, intelligence, and protection. Some pandits include additional chants for Ayushya (longevity), Buddhi (intellect), and Vidya (learning), especially when parents request a more comprehensive Vedic experience.
                                </p>
                                <p>
                                    In culturally diverse localities like Viman Nagar, Kharadi, Pimpri Chinchwad, and Hadapsar, families often choose a blend of regional styles—Maharashtrian, Gujarati, Bengali, South Indian, or North Indian—while keeping the core Vedic structure intact. This flexibility allows every household to honor its heritage without compromising scriptural authenticity.
                                </p>
                            </section>

                            {/* Post Ceremony Guidance */}
                            <section className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h3 className="font-bold">Post‑Ceremony Guidance for Parents</h3>
                                <p>
                                    Namkaran Puja also serves as an educational touchpoint for parents and elders about the spiritual responsibility of raising a child. Pandits may advise on correct pronunciation of the name, simple daily mantras, and occasional recitation of Saraswati or Ganesha stotras to maintain positive vibrations around the child.
                                </p>
                                <p>
                                    Families are often encouraged to create a calm, sattvic atmosphere at home by limiting conflict in front of the baby, keeping devotional music or mantras playing softly, and marking key milestones (first birthday, first day of school) with small pujas or aarti. For busy parents in tech and corporate hubs of Pune, this concise guidance makes it easier to integrate spirituality into modern routines.
                                </p>
                            </section>

                            {/* Why Choose */}
                            <section className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
                                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Why Families in Pune Choose Professional Pandits</h3>
                                <p className="text-gray-700 mb-4">
                                    Booking a certified Vedic pandit removes guesswork and stress, ensuring every mantra, samagri, and step of Namkaran Puja is handled correctly. Experienced pandits bring structured procedures, accurate pronunciation, punctuality, and the ability to manage both intimate and large gatherings gracefully.
                                </p>
                                <p className="text-gray-700 italic">
                                    Platforms specializing in puja services in cities like Pune emphasize verified, Vedic‑trained pandits who understand local languages, apartment constraints, and diverse regional customs. This combination of spiritual depth and practical service delivery is why families in Wakad, Baner, Kharadi, Hinjewadi, Viman Nagar, Hadapsar, Koregaon Park, Aundh, Pimpri Chinchwad, Mundhwa, Yerawada, and Camp repeatedly opt for organized Namkaran bookings.
                                </p>
                            </section>

                            {/* FAQs */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">FAQs on Namkaran Puja (Pune)</h2>
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
                            <section className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Bless Your Child's Future</h3>
                                    <p className="text-lg font-serif italic mb-4">
                                        Give your child a divine start with Namkaran Puja.
                                    </p>
                                    <p className="text-gold-100 mb-6">
                                        Book experienced Pandits in Pune for a hassle-free and spiritually uplifting Naming Ceremony.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Namkaran Puja</Button>
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
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Namkaran Pandit</h4>
                                        <p className="text-gold-100 text-sm mb-4">Vedic Rituals & Samagri</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">
                                            Call +91-8446272142
                                        </a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Namkaran%20Puja" className="block text-gold-300 hover:text-white text-sm underline">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="namkaran-puja"
                        category="marriage-family"
                        maxItems={4}
                    />
                </div>



            <PujaServiceLocations pujaName="Namkaran Puja" />
            <Footer />
        </>
    )
}
