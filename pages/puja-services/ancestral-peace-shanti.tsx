import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function AncestralPeaceShantiPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ancestral Peace Shanti Puja in Pune',
        provider: {
            '@type': 'Organization',
            name: 'Certified Vedic Pandits',
            areaServed: 'Pune, India'
        },
        description: 'Book Ancestral Peace Shanti Puja (Pitra Shanti Puja) in Pune. Vedic remedies for Pitra Dosh, ancestral curses, and family karma. Bring peace to departed souls.',
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
                <title>Ancestral Peace Shanti Puja in Pune – Pitra Dosh Remedies</title>
                <meta name="description" content="Suffering from Pitra Dosh? Book Ancestral Peace Shanti Puja in Pune. Vedic remedies for ancestral curses, family karma, and departed souls. Pitra Tarpan." />
                <meta name="keywords" content="Ancestral Peace Puja Pune, Pitra Shanti Puja, Pitra Dosh Remedies, Pitra Tarpan, Ancestral Karma Healing" />
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
                            <span className="text-maroon-900 font-semibold">Ancestral Peace Shanti</span>
                        </div>
                    </div>
                </nav>

                <section className="relative bg-maroon-900 text-white py-12 md:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60 z-0">
                        <Image
                            src="/images/pitra-tarpan-hero.png"
                            alt="Ancestral Peace Shanti"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Honor Your Ancestors</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Ancestral Peace Shanti Puja <br />
                                <span className="text-gold-400 text-2xl md:text-3xl mt-2 block">Pitra Shanti & Dosh Nivaran</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Bring peace to departed souls and remove ancestral curses through sacred Vedic rituals. Heal family karma and receive blessings from your lineage.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">Book Pitra Puja</Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20inquire%20about%20Ancestral%20Peace%20Shanti" target="_blank" rel="noopener noreferrer">
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
                                <p><strong>Ancestral Peace Shanti Puja</strong> (also known as <strong>Pitra Shanti Puja</strong>, <strong>Pitra Dosh Nivaran Puja</strong>, or <strong>Pitra Tarpan</strong>) is a powerful Vedic ritual performed to bring peace to departed ancestors and remove the effects of Pitra Dosh (ancestral affliction). This sacred ceremony honors the souls of deceased family members and seeks their blessings for the living descendants.</p>
                                <p>In Vedic philosophy, we are deeply connected to our ancestors through DNA, karma, and spiritual lineage. When ancestors die with unfulfilled desires, unresolved conflicts, or improper last rites, their restless souls can create obstacles for descendants. This puja addresses these ancestral issues and brings peace to both the departed and the living.</p>

                                <h2 className="text-3xl font-bold mt-8">The Vedic Concept of Pitra (Ancestors)</h2>
                                <p>In Hindu tradition, <strong>Pitra</strong> refers to departed ancestors, particularly parents, grandparents, and great-grandparents. The concept is rooted in the belief that we owe a debt (<strong>Rinn</strong>) to our ancestors for giving us life and upbringing. This debt is repaid through:</p>
                                <ul>
                                    <li><strong>Pitra Tarpan:</strong> Water offerings to ancestors</li>
                                    <li><strong>Shraddha:</strong> Annual death anniversary rituals</li>
                                    <li><strong>Pinda Daan:</strong> Food offerings for departed souls</li>
                                    <li><strong>Living Righteously:</strong> Honoring their legacy through good deeds</li>
                                </ul>

                                <p>The <strong>Pitru Paksha</strong> (fortnight of ancestors) in the Hindu calendar is dedicated to ancestral worship. During this period, it's believed that ancestors visit earth and bless their descendants who remember them.</p>

                                <p>According to the Garuda Purana and other scriptures, unsatisfied ancestors can create obstacles in their descendants' lives until proper rituals are performed and their souls find peace.</p>

                                <h2 className="text-3xl font-bold mt-8">Understanding Pitra Dosh in Astrology</h2>
                                <p>In Vedic astrology, <strong>Pitra Dosh</strong> is an ancestral affliction that manifests in the birth chart. The 9th house represents father and ancestors. Several planetary configurations indicate Pitra Dosh:</p>
                                <ul>
                                    <li><strong>Sun-Rahu Conjunction:</strong> Most common indicator of Pitra Dosh</li>
                                    <li><strong>Sun-Ketu Conjunction:</strong> Indicates ancestral karma</li>
                                    <li><strong>Afflicted 9th House:</strong> Malefic planets in 9th house or aspecting it</li>
                                    <li><strong>Weak 9th Lord:</strong> Debilitated or combust lord of 9th house</li>
                                    <li><strong>Rahu in 1st, 2nd, 4th, 5th, 8th, or 9th House:</strong> Ancestral curses</li>
                                    <li><strong>Saturn-Rahu Conjunction:</strong> Severe ancestral karma</li>
                                    <li><strong>Amavasya (New Moon) Birth:</strong> Especially if Sun is afflicted</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Symptoms of Pitra Dosh</h3>
                                <p>When Pitra Dosh is present, descendants may experience:</p>
                                <ul>
                                    <li><strong>Childlessness:</strong> Inability to conceive or repeated miscarriages</li>
                                    <li><strong>Chronic Illness:</strong> Hereditary diseases or mysterious ailments</li>
                                    <li><strong>Financial Problems:</strong> Persistent poverty despite efforts</li>
                                    <li><strong>Family Discord:</strong> Constant fights and separations</li>
                                    <li><strong>Career Obstacles:</strong> Repeated failures and blocked opportunities</li>
                                    <li><strong>Marriage Delays:</strong> Difficulty finding suitable partner</li>
                                    <li><strong>Accidents:</strong> Frequent accidents or near-death experiences</li>
                                    <li><strong>Mental Disturbance:</strong> Depression, anxiety, or nightmares of dead relatives</li>
                                    <li><strong>Addictions:</strong> Alcohol, drugs, or gambling problems in family</li>
                                    <li><strong>Premature Deaths:</strong> Pattern of early deaths in family lineage</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">Causes of Pitra Dosh</h3>
                                <p>Pitra Dosh can arise from various causes:</p>
                                <ul>
                                    <li><strong>Improper Last Rites:</strong> Incomplete or incorrect funeral rituals</li>
                                    <li><strong>No Shraddha:</strong> Not performing annual death anniversary rituals</li>
                                    <li><strong>Unnatural Death:</strong> Ancestors who died in accidents, suicide, or murder</li>
                                    <li><strong>Unfulfilled Desires:</strong> Ancestors who died with strong attachments</li>
                                    <li><strong>Family Curses:</strong> Ancestors cursing descendants due to mistreatment</li>
                                    <li><strong>Bad Karma:</strong> Ancestors' negative actions affecting lineage</li>
                                    <li><strong>Childless Ancestors:</strong> Ancestors who died without children</li>
                                    <li><strong>Disrespect to Elders:</strong> Mistreating or abandoning elderly parents</li>
                                </ul>

                                <h3 className="text-2xl font-bold mt-8">When is Pitra Shanti Puja Essential?</h3>
                                <ul>
                                    <li><strong>Pitra Dosh in Horoscope:</strong> When astrologer identifies ancestral affliction</li>
                                    <li><strong>Recurring Family Problems:</strong> Same issues repeating across generations</li>
                                    <li><strong>Dreams of Dead Relatives:</strong> Ancestors appearing in dreams asking for help</li>
                                    <li><strong>After Unnatural Death:</strong> When family member dies in accident or suicide</li>
                                    <li><strong>Childlessness:</strong> When unable to conceive despite medical treatment</li>
                                    <li><strong>During Pitru Paksha:</strong> The fortnight dedicated to ancestors</li>
                                    <li><strong>Before Major Life Events:</strong> Marriage, business, or new ventures</li>
                                    <li><strong>Hereditary Diseases:</strong> When family has pattern of specific illnesses</li>
                                </ul>
                            </section>

                            <section id="packages" className="bg-saffron-50 p-6 rounded-xl border border-saffron-200">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Pitra Shanti Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Basic Pitra Tarpan</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹2,500+</div>
                                        <p className="text-sm text-gray-700 mb-3">Water offerings to ancestors with basic mantras and Pinda Daan.</p>
                                        <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gold-400 relative">
                                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-bl">RECOMMENDED</div>
                                        <h4 className="font-bold text-maroon-800 text-lg mb-2">Complete Pitra Shanti</h4>
                                        <div className="text-2xl font-bold text-saffron-600 mb-2">₹11,000+</div>
                                        <p className="text-sm text-gray-700 mb-3">Comprehensive puja with Narayan Bali, Tripindi Shraddha, and planetary remedies for Pitra Dosh.</p>
                                        <Button variant="primary" size="sm" className="w-full mt-3" href="tel:+918446272142">Book Now</Button>
                                    </div>
                                </div>
                            </section>

                            <section id="vidhi" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Comprehensive Pitra Shanti Ritual Vidhi</h2>

                                <h3 className="text-2xl font-bold mt-6">Pre-Puja Preparations</h3>
                                <ol className="list-decimal pl-4 space-y-3">
                                    <li><strong>Fasting:</strong> Observe partial fast (only one meal)</li>
                                    <li><strong>Purification:</strong> Bath and wear clean white clothes</li>
                                    <li><strong>Gather Information:</strong> Know names and gotras of deceased ancestors</li>
                                    <li><strong>Timing:</strong> Best during Pitru Paksha, Amavasya (New Moon), or Saturdays</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Main Ritual Process</h3>
                                <ol className="list-decimal pl-4 space-y-4">
                                    <li><strong>Ganesh Puja:</strong> Remove obstacles</li>
                                    <li><strong>Pitra Invocation:</strong> Calling ancestors with their names and gotras</li>
                                    <li><strong>Pitra Tarpan:</strong> Water offerings with black sesame seeds:
                                        <p className="bg-maroon-50 p-4 rounded-lg border-l-4 border-maroon-600 my-4">
                                            <strong>"Om Pitru Devata Namah<br />
                                                Tarpayami"</strong><br />
                                            (I offer water to the ancestral deities)
                                        </p>
                                    </li>
                                    <li><strong>Pinda Daan:</strong> Rice ball offerings representing the body</li>
                                    <li><strong>Shraddha Ritual:</strong> Complete ancestral worship with food offerings</li>
                                    <li><strong>Narayan Bali (if needed):</strong> For unnatural deaths or severe Pitra Dosh</li>
                                    <li><strong>Brahmin Feeding:</strong> Feeding Brahmins as representatives of ancestors</li>
                                    <li><strong>Cow Feeding:</strong> Feeding cows with green grass</li>
                                    <li><strong>Charity:</strong> Donations in ancestors' names</li>
                                </ol>

                                <h3 className="text-2xl font-bold mt-6">Special Rituals for Severe Pitra Dosh</h3>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Tripindi Shraddha:</strong> For three generations of ancestors</li>
                                    <li><strong>Narayan Bali:</strong> For unnatural deaths (must be done at specific tirthas)</li>
                                    <li><strong>Kaal Sarp Dosh Puja:</strong> If Rahu-Ketu axis creates Pitra Dosh</li>
                                    <li><strong>Rudrabhishek:</strong> Lord Shiva worship for ancestral peace</li>
                                </ul>
                            </section>

                            <section className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 shadow-md border border-gray-200 my-12">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Additional Remedies for Pitra Dosh</h2>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Daily Practices</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Gayatri Mantra:</strong> Chant 108 times daily for ancestors</li>
                                    <li><strong>Feed Crows:</strong> Offer food to crows (messengers of ancestors)</li>
                                    <li><strong>Peepal Tree Worship:</strong> Water peepal tree on Saturdays</li>
                                    <li><strong>Respect Elders:</strong> Serve and honor living elderly people</li>
                                </ul>

                                <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-3">Annual Observances</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>Shraddha:</strong> Perform on death anniversary of each ancestor</li>
                                    <li><strong>Pitru Paksha:</strong> Observe all 15 days with tarpan</li>
                                    <li><strong>Mahalaya Amavasya:</strong> Most important day for ancestral worship</li>
                                    <li><strong>Gaya Shraddha:</strong> Visit Gaya (Bihar) for powerful Pinda Daan</li>
                                </ul>
                            </section>

                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Comprehensive FAQs on Pitra Shanti Puja</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "How do I know if I have Pitra Dosh?", a: "Pitra Dosh is identified through: (1) Birth chart analysis by qualified astrologer - look for Sun-Rahu conjunction, afflicted 9th house, or Rahu in specific houses, (2) Recurring family problems across generations, (3) Dreams of deceased relatives asking for help, (4) Unexplained obstacles in life despite efforts, (5) Childlessness or repeated miscarriages, (6) Pattern of unnatural deaths in family. Consult an experienced Vedic astrologer for accurate diagnosis." },
                                        { q: "Can Pitra Dosh be completely removed?", a: "Yes, Pitra Dosh can be significantly reduced or removed through proper rituals and remedies. However, it requires: (1) Comprehensive Pitra Shanti Puja by qualified pandits, (2) Regular Shraddha on death anniversaries, (3) Annual Pitru Paksha observance, (4) Lifestyle changes (respecting elders, charity), (5) Patience - effects may take 6-12 months to manifest. Severe Pitra Dosh may require Narayan Bali at sacred tirthas like Trimbakeshwar or Gaya." },
                                        { q: "When is the best time for Pitra Shanti Puja?", a: "Most auspicious times: (1) Pitru Paksha (fortnight before Diwali) - especially Mahalaya Amavasya, (2) Any Amavasya (New Moon), (3) Saturdays, (4) Death anniversary of ancestors, (5) During Sun-Rahu or Sun-Ketu transits, (6) Before major life events (marriage, childbirth, business). Avoid performing during auspicious festivals or celebrations. The puja should be done in the afternoon (12-3 PM) as this is Pitra time." },
                                        { q: "Should I perform Shraddha even if I don't know my ancestors' names?", a: "Yes, absolutely. If you don't know specific names or gotras, you can perform 'Sarva Pitra Shraddha' for all ancestors collectively. Use the mantra 'Om Sarva Pitru Devata Namah' (salutations to all ancestral deities). This is especially relevant for adopted children, orphans, or those who don't have family records. The intention and devotion matter more than knowing exact details." },
                                        { q: "Can women perform Pitra Tarpan?", a: "Traditionally, Pitra Tarpan is performed by male descendants (sons, grandsons). However, if there are no male members in the family, women can perform it, especially married daughters or widows. Women should avoid performing during menstruation. In modern times, many pandits allow women to participate in the ritual, though the main offerings are made by male family members or the hired pandit." },
                                        { q: "What if my ancestors died in accidents or unnatural deaths?", a: "Unnatural deaths (accidents, suicide, murder) create severe Pitra Dosh as the soul remains restless. Special rituals are required: (1) Narayan Bali - must be performed at specific tirthas like Trimbakeshwar (Maharashtra), Gaya (Bihar), or Haridwar, (2) Tripindi Shraddha for three generations, (3) Regular monthly tarpan for at least one year, (4) Mahamrityunjaya Jaap for the departed soul's peace. These rituals help the soul find peace and move on to higher realms." },
                                        { q: "How does Pitra Dosh affect children and marriage?", a: "Pitra Dosh severely affects progeny and marriage: (1) Childlessness - ancestors' unfulfilled desire for continuation of lineage, (2) Repeated miscarriages - restless ancestral souls, (3) Marriage delays - ancestors blocking unsuitable alliances, (4) Marital discord - family karma affecting relationships, (5) Children with health issues - hereditary diseases from ancestral karma. Pitra Shanti Puja combined with Santaan Gopal Puja (for children) or Vivah Badha Nivaran (for marriage) provides comprehensive solution." },
                                        { q: "What donations are most effective for Pitra Dosh?", a: "Pitra Dosh specific donations: (1) Feeding Brahmins (minimum 11) after Shraddha, (2) Feeding crows, dogs, and cows daily, (3) Donating black cloth, black sesame, and iron on Saturdays, (4) Supporting orphanages and old age homes, (5) Sponsoring last rites for unclaimed bodies, (6) Planting peepal trees, (7) Donating to Gau Shalas (cow shelters), (8) Feeding poor people in ancestors' names. Make donations with the mantra 'Om Pitru Devata Namah' and genuine compassion." },
                                        { q: "Can I perform Pitra Puja for someone else's ancestors?", a: "Generally, Pitra rituals should be performed by direct descendants. However, you can: (1) Perform for your spouse's ancestors after marriage, (2) Perform for adopted parents' lineage, (3) Perform general 'Sarva Pitra Shraddha' for all departed souls, (4) Sponsor Pitra Puja for poor people who cannot afford it. The key is having a genuine connection or compassionate intention. Blood relation is not always necessary if the intention is pure." },
                                        { q: "What precautions should be taken during and after Pitra Puja?", a: "Precautions: (1) Maintain sattvic (pure) state - no alcohol, non-veg, or tobacco for 3 days before and after, (2) Avoid celebrations or joyous events on puja day, (3) Wear simple white clothes, (4) Don't argue or fight on puja day, (5) Feed Brahmins and poor with respect, (6) After puja, continue monthly tarpan on Amavasya for at least one year, (7) Respect and serve living elders, (8) Maintain family harmony, (9) Keep photos of deceased ancestors in clean place and offer flowers weekly, (10) Don't neglect annual Shraddha - this is most important for maintaining ancestral blessings." }
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
                                    <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Honor Your Lineage</h3>
                                    <p className="text-lg font-serif italic mb-4">Bring peace to ancestors and receive their blessings.</p>
                                    <div className="mt-6">
                                        <Button variant="secondary" href="#booking">Book Pitra Puja</Button>
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
                                        <p className="text-gold-100 text-sm mb-4">For Ancestral Peace</p>
                                        <a href="tel:+918446272142" className="block bg-gold-500 text-maroon-900 font-bold py-2 rounded-lg mb-2 hover:bg-gold-400 transition-colors">Call +91-8446272142</a>
                                        <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Ancestral%20Peace%20Shanti" className="block text-gold-300 hover:text-white text-sm underline">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PujaServiceLocations pujaName="Ancestral Peace Shanti" />
            <Footer />
        </>
    )
}
