import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function KarwaChauthVratUdyapanPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Karwa Chauth Vrat Udyapan Puja',
        description: 'Book verified pandit for Karwa Chauth Vrat Udyapan in Pune. Complete 13 Karwa puja and donation ceremony for eternal marital bliss.',
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
            price: '4100',
            priceCurrency: 'INR',
        },
    }

    
    // 3. Sections for Jump to Navigation
    const sections = [
        { id: 'intro', title: 'Introduction' },
        { id: 'vidhi', title: 'Puja Vidhi' },
        { id: 'samagri', title: 'Samagri List' },
        { id: 'benefits', title: 'Benefits' },
        { id: 'faqs', title: 'FAQs' }
    ]


    return (
        <>
            <Head>
                <title>Karwa Chauth Vrat Udyapan in Pune | Complete Suhagan Puja Vidhi & Katha</title>
                <meta name="description" content="Book expert pandit for Karwa Chauth Vrat Udyapan in Pune. Authentic 13 Karwa donation ritual, Shiv-Parvati puja, and moon worship guidance. Samagri checklist included." />
                <meta name="keywords" content="karwa chauth udyapan pune, karwa chauth puja vidhi, suhagan puja pune, karwa chauth samagri list, pandit for udyapan" />
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
                            <span className="text-maroon-900 font-semibold">Karwa Chauth Udyapan</span>
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
                            src="/images/karwa-chauth-hero.png"
                            alt="Karwa Chauth Vrat Udyapan"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="container-custom relative z-20">
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Eternal Bond & Blessings</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Karwa Chauth Vrat Udyapan <br />
                                <span className="text-gold-400 text-2xl md:text-4xl mt-2 block">13-Karwa Donation Ritual in Pune</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                Complete your sacred vow with the traditional Karwa Chauth Udyapan. A grand ceremony involving the donation of 13 Karwas and Shringar sets to invite eternal blessings for your husband's long life and prosperity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Udyapan Now
                                </Button>
                                <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20Karwa%20Chauth%20Udyapan" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400 font-semibold">Chat on WhatsApp
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
                                    <strong>Karwa Chauth Vrat Udyapan</strong> is the grand conclusion of the most significant fast observed by married Hindu women for the longevity of their husbands. While the annual fast reinforces the bond, the Udyapan (performed after 12/16 years or during the first year) seals these blessings for a lifetime.
                                </p>
                                <p>
                                    The essence of Udyapan lies in <strong>"Dan" (Donation)</strong>. By donating 13 sets of Karwas (Earthen Pots) filled with sweets and Shringar to 13 married women (Suhagans), a devotee shares her accumulated spiritual merit, thereby multiplying it manifold. It is a celebration of womanhood, sisterhood, and devotion.
                                </p>
                            </section>

                            {/* The Legend / Katha Section - Massive Expansion */}
                            <section id="katha" className="bg-pink-50 p-8 rounded-2xl border border-pink-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">The Legend of Veeravati</h2>
                                <p className="text-gray-700 mb-4 italic">
                                    The story that teaches patience and the power of the fast.
                                </p>

                                <div className="prose prose-lg text-gray-700">
                                    <h3 className="text-xl font-bold text-maroon-800">The Deception</h3>
                                    <p>
                                        Veeravati, the strictly fasting sister of seven loving brothers, was fainting from hunger on Karwa Chauth. Unable to bear her suffering, her brothers created a fake moon using a mirror and fire behind a hill. Believing the moon had risen, Veeravati broke her fast.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Tragedy & Penance</h3>
                                    <p>
                                        Currently, news arrived that her husband had died. Goddess Indrani (Chauth Mata) appeared and explained her mistake: she had offered Arghya to a false moon. Veeravati promised to keep the fast strictly every month (Masik Karthigai) for a whole year.
                                    </p>

                                    <h3 className="text-xl font-bold text-maroon-800 mt-6">The Resurrection</h3>
                                    <p>
                                        After a year of rigorous penance and observing the next Karwa Chauth with full rituals (including Udyapan), her husband was restored to life. This legend emphasizes that completing the vows (Udyapan) and strict adherence to rules are vital.
                                    </p>
                                </div>
                            </section>

                            {/* Rituals Detailed Section */}
                            <section id="vidhi" className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden">
                                <div className="bg-maroon-900 text-white p-8">
                                    <h2 className="text-3xl font-serif font-bold">The 13-Karwa Udyapan Vidhi</h2>
                                    <p className="text-gold-200 mt-2">A ceremony of grace and gratitude.</p>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">1. Preparation of 13 Sets</h3>
                                        <p className="text-gray-700 text-lg">
                                            This is the unique aspect of Udyapan. You must prepare 13 plates containing:
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li><strong>1 Karwa:</strong> Filled with Halwa/Kheer or dry fruits.</li>
                                            <li><strong>1 Shringar Set:</strong> Sindoor, Bindi, Bangles, Mehendi, etc.</li>
                                            <li><strong>1 Vastra:</strong> Blouse piece or handkerchief (Rumal).</li>
                                            <li><strong>Dakshina:</strong> Some cash offering.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">2. The Evening Puja (Sandhya)</h3>
                                        <p className="text-gray-700">
                                            Before moonrise, women gather in a circle. An idol of <strong>Gauri Mata</strong> (made of cow dung/clay) is worshipped. The story (Katha) is narrated by an elderly lady or Pandit.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">3. Thali Rotation (Feri)</h3>
                                        <p className="text-gray-700">
                                            The women rotate their Thalis in a circle 7 times while singing the "Veer Kudiye Karwara" song. In Udyapan, the 13 Karwas are blessed during this process.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">4. Donation (Bayna)</h3>
                                        <p className="text-gray-700">
                                            The 13 sets are then respectfully gifted to 13 married women (preferably elder) or Brahmins. Touching their feet to seek blessings is essential. One special set is given to the mother-in-law.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-4">5. Moon Offering (Arghya)</h3>
                                        <p className="text-gray-700">
                                            Finally, upon moonrise, Arghya (water offering) is given to the moon through a sieve (Chalni), and the husband's face is viewed. The husband then offers water to break the wife's fast.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Samagri Layout Updated */}
                            <section id="samagri" className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-8 shadow-md border border-gold-200">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">Complete Samagri Checklist</h2>
                                <p className="text-gray-700 mb-8">
                                    The focus is on "Suhag" items. Red color is preferred.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Udyapan Sets (x13)</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Karwas:</strong> 13 Clay/Metal pots with lids.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Food Fillings:</strong> Halwa, Mathri, or Dry Fruits.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Shringar:</strong> 13 packets (Bindi, Sindoor, Bangles).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Cloth:</strong> 13 Blouse pieces/Chunris.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-maroon-800 text-xl mb-4 border-b border-gold-300 pb-2">Main Puja Items</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Idols:</strong> Shiva-Parvati photo or Clay Gauri.</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Sargi:</strong> Pheni, Sweets, Coconut (from Mother-in-law).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Personal:</strong> New Saree (Red/Pink), Sieve (Chalni).</li>
                                            <li className="flex items-start"><span className="text-saffron-500 mr-2">▪</span> <strong>Decor:</strong> Roli, Akshat, Flowers, Kalash.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Muhurat Section */}
                            <section id="muhurat" className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900">
                                <h2 className="text-3xl font-bold">Muhurat 2025</h2>
                                <p>
                                    Karwa Chauth falls on the Kartik Krishna Chaturthi. The Puja timing is usually in the evening (Godhuli Vela) before moonrise.
                                </p>

                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
                                        <thead className="bg-maroon-900 text-gold-100">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Date (2025)</th>
                                                <th className="py-3 px-4 text-left">Puja Muhurat</th>
                                                <th className="py-3 px-4 text-left">Moonrise Time (Pune)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                ["10 October (Friday)", "05:46 PM to 07:02 PM", "08:15 PM (Approx)"],
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-semibold text-maroon-700">{row[0]}</td>
                                                    <td className="py-3 px-4">{row[1]}</td>
                                                    <td className="py-3 px-4">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Why Choose Us */}
                            <section className="bg-maroon-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-gold-300 mb-4">Udyapan with Verified Guruji</h2>
                                        <p className="text-gold-100 mb-6">Our trusted pandits understand the sensitivity and joy of Karwa Chauth. We ensure a festive yet strictly Vedic atmosphere.</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Knowledge of authentic Vrat Kathas",
                                                "Proper chanting of Gauri-Shankar mantras",
                                                "Guidance on 13-Karwa donation procedure",
                                                "Punctual arrival before puja muhurat",
                                                "Sattvic lifestyle pandits"
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
                                            <h3 className="text-xl font-bold text-white mb-2">Book Udyapan Pandit</h3>
                                            <div className="text-3xl font-bold text-gold-400 mb-2">₹4,100 <span className="text-sm font-normal text-gray-300">onwards</span></div>
                                            <p className="text-sm text-gray-300 mb-6">Includes Pandit Dakshina only. Samagri extra.</p>
                                            <Button variant="primary" className="w-full mb-3" href="tel:+918446272142">Book Now</Button>
                                            <a href="https://wa.me/918446272142" className="text-gold-300 hover:text-white text-sm block">Chat on WhatsApp →</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Expanded */}
                            <section id="faqs">
                                <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Expert Answers to Common Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            q: "What if I can't find 13 married women?",
                                            a: "In cities, this is common. You can invite friends, neighbors, or relatives. If still short, you can keep the sets in the name of the Goddess and donate them to a temple or a Brahmin later. The intention (Sankalp) matters most."
                                        },
                                        {
                                            q: "Can I perform Udyapan if my husband is traveling?",
                                            a: "Ideally, the husband should be present to break your fast. However, if unavoidable, you can view his face on a video call after offering Arghya to the moon, and then drink water yourself."
                                        },
                                        {
                                            q: "Is it necessary to wear your wedding dress?",
                                            a: "It is highly auspicious to wear your wedding heavy saree or lehenga (joda) for the Udyapan evening puja. If it doesn't fit, just drape the chunari (dupatta) over a new saree."
                                        },
                                        {
                                            q: "Can pregnant women perform Udyapan?",
                                            a: "Yes, but they are exempted from the 'Nirjala' (waterless) rule if health requires. They can drink water/milk/juice throughout the day and perform the puja in the evening."
                                        },
                                        {
                                            q: "Do the 13 Karwas have to be clay?",
                                            a: "Traditionally yes. However, nowadays many people use steel, brass, or even silver Karwas for Udyapan as they are durable gifts for the recipients."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gold-100 p-6 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-maroon-800 mb-3 text-xl flex items-start">
                                                <span className="text-gold-500 mr-3 text-2xl">Q{i + 1}.</span>
                                                {faq.q}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed ml-10 text-lg">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
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

{/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-center text-maroon-900 mb-2">Book Udyapan Pandit</h3>
                                <p className="text-center text-gray-500 text-sm mb-6">Celebrate your suhag devotion</p>

                                

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Have questions about Samagri?</p>
                                    <a href="https://wa.me/918446272142?text=I%20have%20questions%20about%20Karwa%20Chauth%20Udyapan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.969.528 1.776.809 3.125.81 3.18 0 5.767-2.587 5.768-5.767.001-3.181-2.586-5.768-5.767-5.768zm0 10.368c-1.182 0-2.34-.343-3.355-.939l-.241-.141-1.637.429.437-1.595-.157-.25c-0.662-1.053-.933-1.898-.933-2.766 0-2.531 2.057-4.588 4.586-4.588 2.531 0 4.589 2.058 4.588 4.588 0 2.532-2.056 4.589-4.587 4.589zm2.532-3.43c-0.138-.069-0.817-.403-0.943-.449-.126-.046-.217-.069-.308.069-.092.138-.354.448-.434.54-.08.092-.161.103-.299.034-.138-.068-0.583-.215-1.111-.686-.411-.366-.689-.818-.77-.955-.08-.138-.009-.213.061-.282.062-.061.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.012-.241-.034-.069-.308-.742-.422-1.016-.111-.268-.223-.231-.308-.236-.08-.004-.172-.004-.264-.004-.092 0-.241.034-.368.172-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.484 2.355 2.081 1.383.597 1.383.398 1.636.375.253-.023.817-.333.931-.655.115-.322.115-.598.08-.655-.035-.058-.126-.092-.264-.161z" /></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="bg-gold-50/50 rounded-xl p-6 border border-gold-200">
                                <h3 className="font-serif font-bold text-maroon-900 mb-4">Happy Devotees</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                        <p className="text-gray-600 text-sm italic mb-2">"Organizing 13 thalis was stressful, but the Pandit ji guided us so well. He brought the list and even helped verify items. The puja was very touching."</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon-200 flex items-center justify-center text-xs font-bold text-maroon-700">AK</div>
                                            <div className="ml-2">
                                                <p className="text-xs font-bold text-maroon-800">Mrs. Anjali K.</p>
                                                <p className="text-[10px] text-gray-500">Kharadi, Pune</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PujaServiceLocations pujaName="Karwa Chauth Vrat Udyapan" />

                <Footer />
            </main>
        </>
    )
}
