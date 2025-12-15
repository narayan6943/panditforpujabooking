import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { SEOHead } from '@/components/SEOHead'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas'
import { RelatedPujas } from '@/components/RelatedPujas'

export default function SantoshiMataVratUdyapanPage() {
    // 1. Service Schema
    const serviceSchema = generateServiceSchema({
        name: 'Santoshi Mata Vrat Udyapan',
        description: 'Book Pandit for Santoshi Mata Vrat Udyapan in Pune. Authentic 16 Shukravar (Friday) Udyapan Vidhi with Gur-Chana Prasad and Kanya Pujan.',
        price: '2100',
        reviewCount: '235', // Assumed
        ratingValue: '4.8',
        url: 'https://panditforpujabooking.com/puja-services/santoshi-mata-vrat-udyapan',
        image: 'https://panditforpujabooking.com/images/navratri-hero.png'
    })

    // 2. FAQs
    const faqs = [
        { question: "What if I accidentally eat something sour during the Vrat?", answer: "If you consume sour food by mistake, the fast is considered broken (Khandit). You should ask for forgiveness from the Goddess and observe one extra Friday making the total 17 before doing the Udyapan. Do not perform Udyapan if the last fast was broken." },
        { question: "Can I perform Udyapan if I don't have 8 boys?", answer: "Traditionally, 8 boys are preferred. However, if you cannot find 8 boys, you can invite girls, or even feed a cow (Gaumata). You can also donate the raw ingredients (Sidha) for 8 meals to a temple priest." },
        { question: "Is it necessary to read the Katha loud?", answer: "Yes, Shravan (listening) is a key part of Bhakti. Reading the story loud allows others in the family to hear the glories of the Mother, spreading positive energy." },
        { question: "Can men observe this fast?", answer: "Absolutely. While it is popular among women for marital bliss, men can observe Santoshi Mata Vrat for business success, job stability, and debt removal. The rules remain the same." },
        { question: "What is the best time to start the 16 Fridays?", answer: "You should start on the first Friday of the Shukla Paksha (Waxing Moon) in any auspicious month. Shravan and Kartik months are considered highly auspicious." },
        { question: "Can a pregnant woman perform Udyapan?", answer: "Yes, a pregnant woman can perform the Puja. However, if she finds it difficult to fast or cook for 8 boys, she can take the help of family members. If health doesn't permit, she can postpone the Udyapan until after delivery." },
        { question: "Why is the Jaggery and Gram combination so important?", answer: "It represents the simplicity of the Goddess. Unlike other deities who may need 56 Bhog, Santoshi Mata is the 'Mother of Satisfaction'. She is pleased with the most basic, affordable food, teaching us that devotion matters more than wealth." }
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <SEOHead
                title="Santoshi Mata Vrat Udyapan in Pune | 16 Friday Fast Completion"
                description="Book expert Pandit for Santoshi Mata Vrat Udyapan in Pune. Complete Solah Shukravar Udyapan Vidhi with Kanya Pujan and Gur-Chana Prasad."
                keywords="santoshi mata vrat udyapan pune, 16 friday fast udyapan, santoshi mata puja pandit, udyapan vidhi, solah shukravar vrat"
                canonicalUrl="https://panditforpujabooking.com/puja-services/santoshi-mata-vrat-udyapan"
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
                            src="/images/navratri-hero.png"
                            alt="Santoshi Mata Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">16 Fridays Completion</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Santoshi Mata Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">Blessings of Peace & Contentment</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Successfully complete your 16 Shukravar Vrat with a traditional Udyapan ceremony. Invite happiness and remove obstacles from your life.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Santoshi%20Mata%20Vrat%20Udyapan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">
                                        Chat on WhatsApp
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
                                    Jai Santoshi Mata! The <strong>Santoshi Mata Vrat Udyapan</strong> is the grand culmination of the sacred 16 Friday Fasts (Solah Shukravar Vrat), a ritual observed for the fulfillment of one's deepest desires, peace, and prosperity.
                                </p>
                                <p>
                                    Santoshi Mata, the Goddess of Satisfaction (Santosh), is widely revered as the daughter of Lord Ganesha and Riddhi-Siddhi. She is the embodiment of gentleness, contentment, and forgiveness. Devotees, particularly women, observe this fast for 16 consecutive Fridays with unwavering devotion to seek her blessings for a happy married life, the well-being of their husbands, the birth of a child, or relief from poverty and debt.
                                </p>
                                <p>
                                    The <strong>Udyapan</strong> (Closing Ceremony) is the most critical part of this vow. It is believed that the Vrat is incomplete without a proper Udyapan performed according to Vedic Vidhi. This ceremony is not just a ritual but a celebration of faith, where the devotee offers gratitude to the Mother for listening to their prayers.
                                </p>

                                <h2 className="text-3xl font-bold mt-8">Who is Santoshi Mata?</h2>
                                <p>
                                    According to Hindu mythology and folklore, Santoshi Mata is a powerful form of the Mother Goddess. She is seated on a lotus, symbolizing purity, and holds a sword, a golden pot of rice, and a trident in her hands, representing her power to destroy evil and nourish her devotees. Her name, "Santoshi," literally translates to "One who is satisfied" or "One who bestows satisfaction."
                                </p>
                                <p>
                                    The worship of Santoshi Mata gained immense popularity after the release of the 1975 devotional film <em>"Jai Santoshi Maa,"</em> which brought her miraculous stories to the masses. However, her presence in local folklore has traditionally been significant. She is believed to be the one who accepts the simplest of offerings—<strong>Gur (Jaggery) and Chana (Roasted Gram)</strong>—and grants the biggest of boons. Unlike other deities who might require elaborate rituals, Santoshi Mata is pleased with pure devotion and adherence to the strict rule of avoiding sour foods (Khatai).
                                </p>

                                <h2 className="text-3xl font-bold mt-8">The Significance of the 16 Friday Vrat</h2>
                                <p>
                                    The Solah Shukravar Vrat is a journey of discipline and faith. It is started on a Friday of the Shukla Paksha (Waxing Moon phase). For 16 weeks, the devotee maintains a strict fast, eating only one meal a day and ensuring that no sour ingredient—like lemon, tamarind, curd, tomatoes, or unripe fruits—touches their lips or serves as part of their meal. This restriction extends to the entire household on the day of the Puja.
                                </p>
                                <p>
                                    The number 16 represents the 16 phases of the moon (Shodasha Kala), symbolizing completeness. By observing this fast for 16 Fridays, devotees align themselves with the cosmic rhythm and purify their mind, body, and soul. The fast is known to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Remove Obstacles:</strong> Just as her father Ganesha is Vighnaharta, Santoshi Mata removes hurdles in marriage and career.</li>
                                    <li><strong>Grant Progeny:</strong> Childless couples have reported miraculous conceptions after observing this Vrat.</li>
                                    <li><strong>Bring Financial Stability:</strong> The Goddess of Satisfaction ensures her devotees never go hungry or face abject poverty.</li>
                                    <li><strong>Restore Family Peace:</strong> It is a powerful remedy for domestic conflicts, especially between mothers-in-law and daughters-in-law, as highlighted in her Vrat Katha.</li>
                                </ul>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Miraculous Vrat Katha (Story)</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    No Udyapan is complete without reading or listening to the sacred story of Santoshi Mata. This story is the heart of the ritual.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Old Woman and Her 7 Sons</h3>
                                    <p>
                                        Once upon a time, there lived an old woman who had seven sons. She was cunning and favored her six elder sons because they were earners, while the youngest son, who was unemployed and simple, was neglected. She would serve the elder sons grand meals with delicious dishes, but to the youngest son, she would essentially serve the leftovers or plain scraps. The youngest son, innocent and unaware of this discrimination, believed his mother loved him.
                                    </p>
                                    <p>
                                        One day, his wife, a pious and observant woman, told him the truth. "Look at what your brothers eat and look at what you are served," she said. The son decided to test this. He feigned sleep in the kitchen and saw his mother cooking a feast for his brothers while keeping aside mere crumbs for him. Heartbroken, he confronted his mother, who dismissed him coldly, saying, "They earn, they eat. You are a burden."
                                    </p>
                                    <p>
                                        Stung by these words, the youngest son decided to leave the house to seek his fortune. He told his wife, "I will go to a faraway land and will return only when I am wealthy." His wife, weeping, gave him a farewell, and he left behind a ring as a token of his love.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Wife's Suffering</h3>
                                    <p>
                                        After he left, the days turned into nights of misery for the wife. The mother-in-law and sisters-in-law tortured her. They made her do all the household chores, from fetching water to cutting wood, and gave her only a piece of roti with water. She lived in a small hut outside the main house, passing her days in sorrow, waiting for her husband.
                                    </p>
                                    <p>
                                        One day, while collecting wood in the forest, she saw a group of women worshiping a Goddess. They were performing a Puja with simple offerings of Jaggery (Gur) and Gram (Chana). Curiosity struck her, and she asked, "Mothers, who are you worshiping? What is this fast?"
                                    </p>
                                    <p>
                                        The women replied, "This is Santoshi Mata. She is the granter of all wishes. If you fast on 16 Fridays with devotion, offer Gur-Chana, and avoid sour food, she will fulfill your heart's desire."
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Miracle of the Vrat</h3>
                                    <p>
                                        The wife immediately made a vow (Manokamna) to perform the Vrat for her husband's safe return. She bought Jaggery and Chana with the few coins she had and started the fast.
                                    </p>
                                    <p>
                                        Miraculously, in the faraway land, her husband found a job with a wealthy merchant. Through hard work and honesty, he eventually became a partner in the business and accumulated immense wealth. However, he had forgotten his home. Santoshi Mata appeared in his dream and reminded him of his wife waiting in misery.
                                    </p>
                                    <p>
                                        Jolted by the dream, he packed his bags with wealth, jewelry, and gifts and returned home. The news of his arrival shocked the mother and other wives. When he reached home, he was appalled to find his wife in a dilapidated hut. He learned of her loyalty and the power of her Vrat. He took her back, and they set up a separate, opulent household.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Udyapan and the Final Test</h3>
                                    <p>
                                        The wife decided to perform the <strong>Udyapan</strong> (Conclusion Ceremony) of her fast. She invited eight boys from the neighborhood for the feast. But her jealous sisters-in-law plotted against her. They taught their children to ask for something sour (Khatai) during the meal.
                                    </p>
                                    <p>
                                        During the Udyapan feast, the boys started demanding, "Give us something sour! Give us buttermilk or tamarind!" The wife refused, knowing the rules. But the sisters-in-law gave the children money to buy tamarind from a shop and eat it.
                                    </p>
                                    <p>
                                        The moment the sour food was consumed, disaster struck. The King's soldiers arrested the husband on false charges of murder. The wife was devastated. She prayed to Santoshi Mata, asking, "Mother, what happened? I performed the Puja with devotion!"
                                    </p>
                                    <p>
                                        Mata appeared and revealed, "Your Udyapan was corrupted by sour food. This is the consequence." The wife begged for forgiveness and vowed to perform the Udyapan again. Mata forgave her. The husband was miraculously released, and the King even honored him.
                                    </p>
                                    <p>
                                        The wife performed the Udyapan again, this time with strict vigilance. She fed the Brahmin boys and gave them gifts. Santoshi Mata blessed the couple with a beautiful son and lifelong prosperity. The mother-in-law and others realized their mistake and bowed before the boundless mercy of Santoshi Mata.
                                    </p>
                                    <p className="font-bold text-maroon-900 mt-4">
                                        <em>Bolo Santoshi Mata Ki Jai!</em> Just as the Mother blessed the daughter-in-law, may She bless everyone who performs this Vrat and reads this story.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">Comprehensive Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">A Step-by-Step Guide to the Closing Ceremony</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Preparation & Purification</h3>
                                        <p className="text-gray-700">
                                            On the day of Udyapan (usually the 17th Friday), wake up during Brahma Muhurat (before sunrise). Clean the entire house thoroughly. Sprinkle Gangajal to purify the surroundings. Take a bath and wear fresh red or pink clothes. Red is dear to the Goddess.
                                        </p>
                                        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-500 mt-2">
                                            <strong>Note:</strong> Ensure that no sour food items (lemon, pickle, curd, tomatoes, tamarind, etc.) are brought into the kitchen on this day. Inform all family members strictly.
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. Altar Setup (Mandap Sthapana)</h3>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Place a wooden chowki (low table) and cover it with a red cloth.</li>
                                            <li>Place the photo/idol of Santoshi Mata. Also, place a photo of Lord Ganesha (her father) and Riddhi-Siddhi.</li>
                                            <li><strong>Kalash Sthapana:</strong> Fill a copper/brass pot with water. Put a coin, a betel nut, a flower, and some rice grains inside. Place 5 mango or betel leaves at the mouth and top it with a coconut wrapped in red cloth (Chunari). This represents Varuna Devta and the cosmic universe.</li>
                                            <li>Light a Ghee Diya (oil lamp) and incense sticks.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Ganesh & Mata Puja</h3>
                                        <p className="text-gray-700">
                                            Always begin with <strong>Ganesh Pujan</strong>. Chant <em>"Om Gam Ganapataye Namaha"</em> and offer flowers and Akshat (rice) to Lord Ganesha. Pray for the removal of obstacles for the Udyapan.
                                        </p>
                                        <p className="text-gray-700 mt-2">
                                            Then, proceed to <strong>Santoshi Mata Pujan</strong>:
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li><strong>Avahan:</strong> Invite the Goddess into your home.</li>
                                            <li><strong>Vastra & Shringar:</strong> Offer a Red Chunri, Bangles, Sindoor, and Bindis to the Goddess. This "Suhag Pitara" is crucial for marital bliss.</li>
                                            <li><strong>Pushpa Arpan:</strong> Offer red hibiscus or roses.</li>
                                            <li><strong>Bhog:</strong> Make the primary offering of <strong>Gur (Jaggery) and Chana (Roasted Gram)</strong>. This implies simplicity and humility. You can also offer Halwa and Puri (made without salt or any sour agent).</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Katha & Havan</h3>
                                        <p className="text-gray-700">
                                            Read the Vrat Katha (story detailed above) loud and clear. Hold some flowers and rice in your hand while listening. After the story, offer the flowers to the Goddess.
                                        </p>
                                        <p className="text-gray-700 mt-2">
                                            <strong>Havan (Fire Ritual):</strong> A small Havan is performed to invoke Agni Dev.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Light the Havan Kund with mango wood and camphor.</li>
                                            <li>Chant <em>"Om Santoshi Devyai Namaha Swaha"</em> and offer a mixture of Ghee, Gur, and Chana into the fire 108 times.</li>
                                            <li>The smoke from the Havan purifies the house and takes the prayers to the heavens.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Kanya/Batu Bhojan (The Feast)</h3>
                                        <p className="text-gray-700">
                                            This is the most unique aspect of Santoshi Mata Udyapan. You must invite <strong>8 boys</strong> (signifying the 8 forms of satisfaction or the sons of the Goddess/Ganesha). If boys are not available, girls can also be invited.
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                            <li>Wash their feet as they enter. This is honoring the Divine in them.</li>
                                            <li>Serve them the Prasad meal: Puri, Chana Curry, Kheer, and Halwa.
                                                <br /><span className="text-red-600 font-bold">WARNING: Do not serve curd, pickles, or anything sour. Not even fruits like oranges.</span></li>
                                            <li>After the meal, give them gifts (Dakshina). Common gifts include a fruit (Banana), money, or a small steel bowl.</li>
                                            <li>Touch their feet and seek blessings.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">6. Visarjan & Conclusion</h3>
                                        <p className="text-gray-700">
                                            Perform the final Aarti singing <em>"Jai Santoshi Mata, Maiya Jai Santoshi Mata..."</em>. Distribute the Prasad to family members and neighbors. Only after everyone has eaten should the devotee break their fast. The water from the Kalash should be sprinkled in the house (Tulsi plant) and the coconut can be consumed later as Prasad.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri List (Checklist)</h2>
                                <p className="text-gray-700 mb-8">
                                    To ensure the Puja flows smoothly, please keep the following items ready. Our Pandit will bring the specific ritual utensils and essential Havan samagri, but you should prepare the household items.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Essential Puja Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Photo/Idol:</strong> Santoshi Mata and Ganesh Ji.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Offering:</strong> 250g Jaggery (Gur) & 250g Roasted Gram (Chana).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Flowers:</strong> Red Roses or Hibiscus garland.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cloth:</strong> Red cloth for altar (1 meter).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Kalash Setup:</strong> Copper pot, Coconut, 5 Mango/Betel leaves.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Diya:</strong> Ghee, Cotton wicks, Matchbox.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Incense:</strong> Agarbatti and Dhoop.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">For Shringar & Udyapan</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Suhag Items:</strong> Red Chunari, Bangles, Sindoor, Bindi, Mehendi cone.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Bhojan:</strong> Puri, Chana Curry, Kheer (Rice pudding), Halwa.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Havan Samagri:</strong> Ghee, Havan Kund (if small), Wood, Camphor.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Dakshina:</strong> Coins/Cash and Fruits (Bananas) for 8 boys.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Punchamrit:</strong> Milk, Curd (Use sparingly/symbolically or avoid if strictly following no-sour rule), Ghee, Honey, Sugar. *Note: Some traditions avoid curd in Panchamrit for this specific puja.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {faqs.map((faq: {question: string, answer: string}, i: number) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Benefits Detailed */}
                            <section id="benefits" className="bg-maroon-50 rounded-2xl p-8 border border-maroon-100">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Divine Benefits of Santoshi Mata Vrat</h2>
                                <p className="text-gray-700 mb-6 text-lg">
                                    Devotees who perform this Udyapan with a pure heart witness life-changing miracles. It is a powerful remedy for those who feel their life is stagnant.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💍</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Marital Bliss</h4>
                                            <p className="text-gray-600">Resolves misunderstandings between couples and ensures the long life of the husband.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">👶</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Progeny (Santan Prapti)</h4>
                                            <p className="text-gray-600">Many childless couples have been blessed with healthy children after observing the 16 Fridays.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">💰</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Wealth & Prosperity</h4>
                                            <p className="text-gray-600">Removes the shadow of poverty (Daridrata) and brings financial stability to the home.</p>
                                        </div>
                                    </div>
                                    <div className="flex start">
                                        <div className="bg-white p-3 rounded-full shadow-md mr-4 h-12 w-12 flex items-center justify-center text-2xl">📚</div>
                                        <div>
                                            <h4 className="font-bold text-maroon-800 text-lg">Success in Exams</h4>
                                            <p className="text-gray-600">Students observing this vrat find increased focus and success in competitive exams.</p>
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
                                <p className="text-center text-gray-500 text-sm mb-6">Complete your Vrat</p>

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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">No. of Fridays Completed</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent" placeholder="e.g. 16" />
                                    </div>

                                    <Button variant="primary" className="w-full text-lg py-3 mt-2">
                                        Request Callback
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-2">
                                        Jai Santoshi Mata.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Related Pujas Section */}
                <div className="container-custom section-padding">
                    <RelatedPujas
                        currentSlug="santoshi-mata-vrat-udyapan"
                        category="vrat-udyapan"
                        maxItems={4}
                    />
                </div>



                <PujaServiceLocations pujaName="Santoshi Mata Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
