import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function HealthShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Health Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Health Shanti Puja (Aarogya Prapti Puja) in Pune. Vedic remedies for chronic illness, recovery, and wellness. Invoke Dhanvantari and healing deities.',
        serviceType: 'Hindu Ritual',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        }
    }

    return (
        <>
            <Head>
                <title>Health Shanti Puja in Pune – Aarogya Prapti Remedies</title>
                <meta name="description" content="Suffering from chronic illness? Book Health Shanti Puja in Pune. Vedic remedies for recovery, wellness, and disease removal. Dhanvantari Puja for healing." />
                <meta name="keywords" content="Health Shanti Puja Pune, Aarogya Prapti Puja, Chronic Illness Remedies, Dhanvantari Puja, Healing Puja" />
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
                            <span className="text-maroon-900 font-semibold">Health Shanti Puja</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/dhanvantari-hero.png"
                            alt="Health Shanti Puja"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Divine Healing & Wellness</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Health Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Aarogya Prapti & Recovery</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Invoke Lord Dhanvantari, the divine physician, and remove astrological causes of chronic illness. Experience complete healing through sacred Vedic rituals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Health Puja</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Health%20Shanti%20Puja" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Health Shanti Puja</strong> (also known as <strong>Aarogya Prapti Puja</strong> or <strong>Dhanvantari Puja</strong>) is a powerful Vedic ritual performed for recovery from chronic illness, disease prevention, and overall wellness. This sacred ceremony invokes Lord Dhanvantari, the divine physician who emerged during the churning of the cosmic ocean carrying the nectar of immortality.</p>
                                <p>While modern medicine treats physical symptoms, Vedic astrology recognizes that certain planetary afflictions create the karmic foundation for diseases. Health Shanti Puja addresses both the spiritual root causes and supports medical treatment for holistic healing.</p>

                                <h2 className="text-3xl font-bold mt-8">The Mythology of Lord Dhanvantari</h2>
                                <p><strong>Lord Dhanvantari</strong> is an avatar of Lord Vishnu and the father of Ayurveda. According to the Puranas, during the Samudra Manthan (churning of the cosmic ocean), Lord Dhanvantari emerged holding a pot of Amrit (nectar of immortality) and the ancient texts of Ayurveda.</p>

                                <p>He is depicted with four hands holding a conch shell, discus, medicinal herbs, and the pot of Amrit. His appearance symbolizes the divine origin of healing knowledge. Dhanvantari Jayanti is celebrated on Dhanteras, two days before Diwali, when devotees worship him for health and longevity.</p>

                                <p>The worship of Dhanvantari is mentioned in the Charaka Samhita and Sushruta Samhita, the foundational texts of Ayurveda. He taught the science of healing to the sage Sushruta, who became the father of surgery.</p>

                                <h2 className="text-3xl font-bold mt-8">Astrological Causes of Health Issues</h2>
                                <p>In Vedic astrology, the 6th house represents diseases and the 8th house represents chronic ailments and longevity. Several planetary configurations cause health problems:</p>
                                <ul>
                                    <li><strong>Afflicted 6th House:</strong> Malefic planets in the 6th house or aspecting it cause diseases</li>
                                    <li><strong>Weak Ascendant Lord:</strong> Debilitated or afflicted ascendant lord affects overall vitality</li>
                                    <li><strong>Sun Affliction:</strong> Weak or afflicted Sun causes low immunity, heart issues, and vitality problems</li>
                                    <li><strong>Moon Affliction:</strong> Weak Moon causes mental health issues, emotional instability, and digestive problems</li>
                                    <li><strong>Mars Affliction:</strong> Malefic Mars causes blood disorders, accidents, surgeries, and inflammation</li>
                                    <li><strong>Saturn in 6th/8th:</strong> Chronic diseases, bone problems, and slow recovery</li>
                                    <li><strong>Rahu-Ketu Axis:</strong> Mysterious diseases, allergies, and conditions difficult to diagnose</li>
                                    <li><strong>Pitra Dosh:</strong> Ancestral karma manifesting as hereditary diseases</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Common Health Issues by Planetary Afflictions</h3>
                                <ul>
                                    <li><strong>Sun:</strong> Heart disease, eye problems, fever, bone issues, low immunity</li>
                                    <li><strong>Moon:</strong> Mental illness, depression, anxiety, digestive issues, hormonal imbalance</li>
                                    <li><strong>Mars:</strong> Blood pressure, accidents, surgeries, inflammation, skin rashes</li>
                                    <li><strong>Mercury:</strong> Nervous system disorders, speech problems, respiratory issues</li>
                                    <li><strong>Jupiter:</strong> Liver problems, diabetes, obesity, cholesterol</li>
                                    <li><strong>Venus:</strong> Kidney problems, reproductive issues, diabetes</li>
                                    <li><strong>Saturn:</strong> Chronic pain, arthritis, bone problems, dental issues, depression</li>
                                    <li><strong>Rahu:</strong> Mysterious diseases, allergies, poisoning, mental confusion</li>
                                    <li><strong>Ketu:</strong> Viral infections, skin diseases, accidents, spiritual crisis</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Health Shanti Puja Essential?</h3>
                                <ul>
                                    <li><strong>Chronic Illness:</strong> Diseases lasting more than 6 months without cure</li>
                                    <li><strong>Repeated Health Issues:</strong> Falling sick frequently despite treatment</li>
                                    <li><strong>Before Major Surgery:</strong> For successful operation and quick recovery</li>
                                    <li><strong>Cancer or Life-Threatening Disease:</strong> To support medical treatment</li>
                                    <li><strong>Mental Health Crisis:</strong> Depression, anxiety, or psychological disorders</li>
                                    <li><strong>Unexplained Symptoms:</strong> When doctors cannot diagnose the problem</li>
                                    <li><strong>Post-Accident Recovery:</strong> For healing from injuries</li>
                                    <li><strong>Preventive Care:</strong> During planetary Mahadasha known to cause health issues</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Health Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Dhanvantari Puja</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Lord Dhanvantari worship with healing mantras and basic havan for wellness.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Health Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja with Mahamrityunjaya Jaap, planetary remedies, and Ayurvedic blessings.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Health Shanti Ritual Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Fasting:</strong> Light fast with fruits and milk (if health permits)</li>
                                    <li><strong>Purification:</strong> Bath with turmeric and neem water</li>
                                    <li><strong>Clean Clothes:</strong> Wear yellow or white clothes</li>
                                    <li><strong>Timing:</strong> Best on Sunday (for Sun/vitality) or Thursday (for Jupiter/healing)</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles to healing</li>
                                    <li><strong>Dhanvantari Puja:</strong> Main deity worship with medicinal herbs</li>
                                    <li><strong>Mahamrityunjaya Mantra Jaap:</strong> The most powerful healing mantra - chanted 11,000 or 21,000 times:
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Tryambakam Yajamahe Sugandhim Pushti Vardhanam<br />
                                                Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat"</strong><br />
                                            (We worship the three-eyed Lord Shiva who nourishes all beings. May he liberate us from death for the sake of immortality, just as the ripe cucumber is severed from its bondage to the vine.)
                                        </p>
                                    </li>
                                    <li><strong>Planetary Remedies:</strong> Specific pujas for afflicted planets causing illness</li>
                                    <li><strong>Ayurvedic Havan:</strong> Fire ritual with medicinal herbs</li>
                                    <li><strong>Healing Daan:</strong> Donations of medicines, food to sick people</li>
                                </ol>
                            </section>

                            <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-md border border-green-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Health Remedies</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Mahamrityunjaya Mantra:</strong> Chant 108 times daily</li>
                                    <li><strong>Surya Namaskar:</strong> 12 rounds daily for vitality</li>
                                    <li><strong>Tulsi Worship:</strong> Consume Tulsi leaves daily</li>
                                    <li><strong>Ayurvedic Diet:</strong> Follow dosha-balancing diet</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Health Shanti Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can this puja cure diseases?", a: "Health Shanti Puja is a spiritual remedy that works alongside medical treatment. It removes karmic and astrological obstacles to healing, strengthens immunity, and creates positive energy for recovery. Many people have experienced miraculous recoveries after this puja, but it should complement, not replace, medical care. The puja is most effective when combined with proper treatment, lifestyle changes, and faith." },
                                        { q: "Should I continue medical treatment during the puja?", a: "Absolutely yes! Never stop medical treatment. Health Shanti Puja enhances the effectiveness of medical interventions by removing spiritual obstacles. Vedic remedies address the karmic dimension while medicine treats the physical. The combination provides holistic healing. Inform your doctor about the puja but continue all prescribed medications and treatments." },
                                        { q: "When is the best time for Health Shanti Puja?", a: "Auspicious times include: (1) Sunday for vitality and immunity, (2) Thursday for healing and recovery, (3) Dhanteras (Dhanvantari Jayanti), (4) During Rohini, Pushya, or Ashwini nakshatra, (5) Before major surgery or starting intensive treatment. Avoid performing during severe illness - wait for slight stability. Consult astrologer for personalized Muhurat." },
                                        { q: "How many times should this puja be performed?", a: "For acute illness: one comprehensive puja. For chronic disease: monthly pujas until recovery, then quarterly for maintenance. For cancer or life-threatening illness: perform at treatment milestones (before surgery, during chemotherapy, etc.). For prevention: annual puja on Dhanteras. Continue daily Mahamrityunjaya mantra chanting regardless of puja frequency." },
                                        { q: "Can this puja help with mental health issues?", a: "Yes, very effective for mental health. Mental illness often stems from Moon, Mercury, or Rahu afflictions. The puja includes specific remedies for these planets. Mahamrityunjaya mantra is powerful for depression and anxiety. Many people report significant improvement in mental clarity, emotional stability, and reduction in symptoms. Combine with proper psychiatric care and therapy." },
                                        { q: "What donations are most effective for health?", a: "Health-specific donations: (1) Medicines to hospitals or poor patients, (2) Food to sick people or hospitals, (3) Supporting medical treatment for underprivileged, (4) Donating to Ayurvedic clinics, (5) Feeding cows with green grass (for Sun's blessings), (6) Yellow cloth and turmeric to Brahmins (for Jupiter), (7) Sponsoring surgeries for poor. Make donations on Sundays or Thursdays with healing mantras." },
                                        { q: "Can family members perform this puja on behalf of the patient?", a: "Yes, if the patient is too ill to participate. Family members can take Sankalp on patient's behalf using their name and gotra. However, patient should mentally participate if conscious. For unconscious or critically ill patients, close family (spouse, parents, children) can perform. The prasad should be given to the patient if possible." },
                                        { q: "Is this puja effective for hereditary diseases?", a: "Yes, especially if Pitra Dosh is involved. Hereditary diseases often indicate ancestral karma. The puja includes Pitra Tarpan to appease ancestors and break karmic patterns. Many families have seen hereditary conditions skip generations or reduce in severity after this puja. Combine with genetic counseling and medical monitoring." },
                                        { q: "What precautions should be taken during the puja?", a: "Precautions: (1) Don't perform during severe medical emergency - stabilize first, (2) Continue all medications, (3) Inform doctor about fasting if applicable, (4) Pregnant women should consult pandit, (5) After puja, maintain sattvic diet for 40 days, (6) Avoid negative thoughts and stress, (7) Don't discuss illness details with negative people, (8) Keep Dhanvantari picture in home and worship daily." },
                                        { q: "Can this puja prevent future health problems?", a: "Yes, preventive Health Shanti Puja is highly recommended, especially: (1) When entering health-challenging Mahadasha (Saturn, Rahu, Ketu), (2) After age 40 for disease prevention, (3) If family history of certain diseases, (4) During major life transitions, (5) Annually on Dhanteras for overall wellness. Prevention is easier than cure - the puja strengthens immunity and creates protective spiritual shield." }
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Experience Divine Healing</h3>
                                    <p className="text-lg font-serif italic mb-4">Invoke Dhanvantari's blessings for complete wellness.</p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Health Puja</Button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div id="booking" className="bg-maroon-900 rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="font-serif font-bold text-xl text-gold-300 mb-2">Book Puja</h4>
                                        <p className="text-gold-100 text-sm mb-4">For Health & Wellness</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Health%20Shanti%20Puja" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Health Shanti Puja" />
            <Footer />
        </>
    )
}
