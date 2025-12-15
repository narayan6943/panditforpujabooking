import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { allPujaServices, getPujaData } from '@/data/puja-services'


const categories: Record<string, string[]> = {
  'All': allPujaServices,
  'Vrat Udyapan': [
    'satyanarayan-vrat-udyapan',
    'santoshi-mata-vrat-udyapan',
    'somvar-vrat-udyapan',
    'mangala-gauri-vrat-udyapan',
    'navratri-durga-vrat-udyapan',
    'karwa-chauth-vrat-udyapan',
    'hartalika-teej-vrat-udyapan',
    'vat-savitri-vrat-udyapan',
    'ekadashi-vrat-udyapan',
    'pradosh-vrat-udyapan',
    'chhath-puja-vrat-udyapan',
    'sawan-shivratri-vrat-udyapan',
    'shravan-somvar-vrat-udyapan',
    'shukravar-lakshmi-vrat-udyapan',
    'mangalmurti-vrat-udyapan',
    'skanda-sashti-vrat-udyapan',
    'ahoi-ashtami-vrat-udyapan',
    'janmashtami-vrat-udyapan',
    'radha-ashtami-vrat-udyapan',
    'hanuman-vrat-udyapan',
  ],
  'Shanti Puja': [
    'vastu-shanti-puja',
    'grah-shanti-puja',
    'navagraha-shanti',
    'kaal-sarp-dosh-shanti',
    'pitru-dosh-shanti',
    'nadi-dosh-shanti',
    'mangal-dosh-shanti',
    'chandra-dosh-shanti',
    'rahu-dosh-shanti',
    'ketu-dosh-shanti',
    'shani-shanti-puja',
    'guru-dosh-shanti',
    'surya-dosh-shanti',
    'sarva-shanti-puja',
    'marriage-delay-shanti',
    'childbirth-delay-shanti',
    'health-shanti-puja',
    'family-harmony-shanti',
    'wealth-prosperity-shanti',
    'ancestral-peace-shanti',
  ],
  'Havan': [
    'grah-shanti-havan',
    'navagraha-havan',
    'lakshmi-havan',
    'maha-mrityunjaya-havan',
    'durga-havan',
    'ganesh-havan',
    'gayatri-havan',
    'vishnu-havan',
    'shiva-havan',
    'saraswati-havan',
    'chandi-havan',
    'rudra-havan',
    'vastu-havan',
    'dhanvantri-havan',
    'kaal-bhairav-havan',
    'hanuman-havan',
    'santan-gopal-havan',
    'kuber-havan',
    'business-success-havan',
    'planetary-shanti-havan',
  ],
  'Paath Jaap': [
    'ramcharitmanas-paath',
    'vishnu-sahasranama-paath',
    'shiva-purana-paath',
    'sundarkand-paath',
    'hanuman-chalisa-paath',
    'bhagwat-katha',
    'durga-saptashati-paath',
    'ganesh-atharvashirsha-paath',
    'gayatri-mantra-jaap',
    'maha-mrityunjaya-jaap',
    'shani-mantra-jaap',
    'navagraha-mantra-jaap',
    'lakshmi-ashtottara-paath',
    'kanakadhara-stotra-paath',
    'lalita-sahasranama-paath',
    'saraswati-stotra-paath',
    'guru-charitra-paath',
    'sai-satcharitra-paath',
    'rudri-paath',
    'vishnu-puran-paath',
    'sankat-mochan-hanuman-ashtak',
    'aditya-hridaya-stotra',
    'bajrang-baan-paath',
    'gopal-sahasranama-paath',
  ],
  'Home Puja': [
    'griha-pravesh-puja',
    'satyanarayan-puja',
    'vastu-puja',
    'bhoomi-pujan',
    'office-opening-puja',
    'vehicle-puja',
    'kitchen-opening-puja',
    'nitya-home-puja',
    'griha-shanti-puja',
    'dosh-nivaran-puja',
    'lakshmi-kubera-puja',
    'child-health-puja',
    'negative-energy-removal-puja',
    'nazar-dosh-puja',
    'family-harmony-shanti',
    'new-business-puja',
    'sai-satya-vrat-puja',
    'navdurga-home-puja',
    'ganesh-sthapana-puja',
    'namakaran-puja',
  ],
  'Goddess Puja': [
    'baglamukhi-puja',
    'kali-puja',
    'chandi-homa',
    'pratyangira-devi-puja',
    'kamakhya-devi-puja',
    'vaibhav-lakshmi-vrat',
    'varalakshmi-vrat',
    'mahalakshmi-homa',
    'gajalakshmi-puja',
    'aishwarya-lakshmi-puja',
    'mangala-gauri-puja',
    'katyayani-puja',
    'uma-maheshwari-puja',
    'swayamvara-parvati-puja',
    'santoshi-mata-vrat',
    'saraswati-homa',
    'gayatri-homa',
    'sheetala-mata-puja',
    'annapurna-puja',
    'rajarajeshwari-puja',
  ],
  'Festival Pujas': [
    'ganesh-chaturthi-puja',
    'diwali-lakshmi-puja',
    'gudi-padwa-puja',
    'dussehra-puja',
    'tulsi-vivah-puja',
    'makar-sankranti-puja',
    'holi-puja',
    'rishi-panchami-puja',
    'narak-chaturdashi-puja',
    'bhai-dooj-puja',
  ],
  'God Puja': [
    'ganesh-puja',
    'shiva-puja',
    'rudrabhishek-puja',
    'vishnu-puja',
    'hanuman-puja',
    'ram-puja',
    'krishna-puja',
    'balaji-puja',
    'satyanarayan-puja-god',
    'surya-dev-puja',
    'chandra-dev-puja',
    'kartikeya-puja',
    'ayyappa-puja',
    'dattatreya-puja',
    'kuber-puja',
    'shani-dev-puja',
    'nagaraja-puja',
    'varaha-puja',
    'narasimha-puja',
    'vishwakarma-puja',
  ],
  'Bhajan & Chowki': [
    'mata-ki-chowki',
    'mata-ka-jagran',
    'sai-bhajan-sandhya',
    'krishna-bhajan-sandhya',
    'ram-bhajan-sandhya',
    'shiv-bhajan-sandhya',
    'hanuman-bhajan-sandhya',
    'bhavya-bhajan-sandhya',
    'festival-special-chowki',
    'durga-jagran',
    'navratri-kirtan',
    'satyanarayan-katha',
    'bhagwat-katha-chowki',
    'sundarkand-path-bhajan',
    'sai-sandhya-kirtan',
    'mahila-satsang',
    'community-kirtan',
    'vaishnav-bhajan-sandhya',
    'corporate-bhajan-event',
    'family-bhajan-evening',
  ],
  'Marriage & Family': [
    'engagement-puja-sagai',
    'roka-ceremony-puja',
    'vivah-puja',
    'lagna-puja',
    'griha-pravesh-marriage',
    'naamkaran-sanskar',
    'annaprashan-first-rice',
    'mundan-sanskar',
    'vidyarambh-puja',
    'marriage-anniversary-puja',
    'pregnancy-garbha-sanskar-puja',
    'baby-shower-seemantham-puja',
    'child-health-family-puja',
    'family-harmony-marriage-puja',
    'marriage-delay-puja',
    'kundali-matching-puja',
    'santan-gopal-puja',
    'sashti-puja',
    'pitru-shanti-family',
    'kanyadaan-puja',
  ],
  'Business & Career': [
    'lakshmi-kubera-puja',
    'business-growth-puja',
    'office-opening-puja',
    'shop-inauguration-puja',
    'career-growth-puja',
    'job-success-puja',
    'promotion-puja',
    'new-project-puja',
    'dhanteras-business-puja',
    'vastu-puja-office',
    'finance-stability-puja',
    'investment-success-puja',
    'business-protection-puja',
    'wealth-activation-puja',
    'debt-removal-puja',
    'sales-improvement-puja',
    'luck-enhancement-puja',
    'startup-success-puja',
    'partnership-harmony-puja',
    'client-attraction-puja',
  ],
  'Planetary Remedies': [
    'mangal-dosh-shanti',
    'shani-shanti-planetary-puja',
    'rahu-ketu-dosh-puja',
    'surya-dosh-puja',
    'chandra-dosh-puja',
    'guru-dosh-puja',
    'budh-dosh-puja',
    'shukra-dosh-puja',
    'navagraha-shanti',
    'pitra-dosh-nivaran',
    'grah-klesh-nivaran',
    'sade-sati-shanti',
    'kaal-sarp-dosh-shanti',
    'kundali-grah-shanti',
    'horoscope-correction-puja',
    'grah-gochar-shanti',
    'planetary-alignment-puja',
    'transit-problem-shanti',
    'malefic-grah-remedy-puja',
  ]
}

export default function PujaServicesIndex() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Handle Category Change (Clear Search)
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSearchQuery('')
    setSuggestions([])
  }

  // Helper: Format Slug to Title Case
  const formatPujaName = (slug: string) => {
    return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }

  // Helper: Get Slugs from "Title" like name (reverse lookup or just store slugs)
  // Actually, we'll store Slugs in suggestions but Display Titles

  // Intelligent Search Logic
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase().trim()

      // Alias Map for Phonetic Matching
      const aliases: Record<string, string[]> = {
        'grah': ['griha', 'grah'],
        'graha': ['griha', 'grah'],
        'griha': ['griha', 'grah'],
        'mundan': ['mundan', 'munda'],
        'satya': ['satya', 'saty'],
        'vastu': ['vastu', 'vaastu']
      }

      // Check if query matches an alias key
      let searchTerms = [lowerQuery]
      Object.keys(aliases).forEach(key => {
        if (lowerQuery.includes(key)) {
          aliases[key].forEach(variant => searchTerms.push(lowerQuery.replace(key, variant)))
        }
      })

      // Filter and Sort
      const matches = allPujaServices.filter(slug => {
        const normalized = slug.replace(/-/g, ' ').toLowerCase()
        return searchTerms.some(term => normalized.includes(term))
      }).sort((a, b) => {
        const normA = a.replace(/-/g, ' ').toLowerCase()
        const normB = b.replace(/-/g, ' ').toLowerCase()
        const startsWithA = searchTerms.some(term => normA.startsWith(term))
        const startsWithB = searchTerms.some(term => normB.startsWith(term))

        // Prioritize StartsWith
        if (startsWithA && !startsWithB) return -1
        if (!startsWithA && startsWithB) return 1
        return 0
      })

      setSuggestions(matches.slice(0, 50)) // Increased to 50 as requested
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  // Handle Suggestion Click
  const handleSuggestionClick = (slug: string) => {
    const name = formatPujaName(slug)
    setSearchQuery(name) // Set visual text
    setShowSuggestions(false)
    // The main filter logic below will handle the actual filtering based on this text
  }


  // Filter Logic (Main Grid) uses searchQuery
  let displayedPujas = (categories as any)[selectedCategory] || []

  if (searchQuery.trim()) {
    // Re-use smart filtering or simple include for the grid? 
    // Simple include is safer for wide matching, but let's use the same "clean" logic
    displayedPujas = allPujaServices.filter(slug =>
      slug.replace(/-/g, ' ').toLowerCase().includes(searchQuery.toLowerCase().trim())
    )
  }

  const featuredPujas = ['griha-pravesh-puja', 'satyanarayan-puja', 'marriage-puja', 'lakshmi-puja']


  return (
    <>
      <Head>
        <title>All Puja Services - 40+ Pujas in Pune | PanditForPujaBooking.com</title>
        <meta
          name="description"
          content="Browse 40+ puja services in Pune. Griha Pravesh, Lakshmi Puja, Marriage Puja, Satyanarayan Puja and more. Book verified pandits online."
        />
      </Head>

      <Header />

      <main className="bg-white">
        {/* MODERN HERO - SPLIT WITH IMAGE */}
        <section className="relative min-h-[50vh] flex items-center">
          {/* Background Container - Handles Overflow Clipping for Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
            <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
          </div>

          <div className="container-custom relative z-10 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                Find Your <span className="text-gold-400">Perfect Puja</span>
              </h1>

              {/* SEARCH BAR & AUTOCOMPLETE */}
              <div className="relative max-w-xl mx-auto mb-8 z-50">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for puja (e.g., Satyanarayan, Marriage, Shanti)..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => { if (searchQuery) setShowSuggestions(true) }}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
                    className="w-full pl-14 pr-4 py-4 rounded-full bg-white text-maroon-900 shadow-2xl border-2 border-gold-300 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20 text-lg placeholder-gray-500 transition-all outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => { setSearchQuery(''); setSuggestions([]); }}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-maroon-600 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* AUTOCOMPLETE DROPDOWN */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn z-50 w-full">
                    <ul className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {suggestions.map((slug) => (
                        <li key={slug}>
                          <button
                            onClick={() => handleSuggestionClick(slug)}
                            className="w-full text-left px-6 py-4 hover:bg-maroon-50 hover:text-maroon-700 transition-colors flex items-center gap-3 border-b border-gray-50 last:border-0"
                          >
                            <span className="text-xl">🕉️</span>
                            <span className="font-medium text-gray-800 text-lg">{formatPujaName(slug)}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="text-lg text-gold-100/80">
                {searchQuery ? `Searching for "${searchQuery}"` : 'Browse our collection of 100+ Vedic rituals'}
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT - SIDEBAR + GRID */}
        <section id="all-pujas" className="section-padding bg-gradient-to-b from-saffron-50/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* SIDEBAR - FILTERS */}
              {/* SIDEBAR - FILTERS */}
              <div className="lg:col-span-1 hidden lg:block">
                {/* Fixed height sticky container for sidebar */}
                <div className="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2 space-y-6">
                  {/* Categories Filter */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gold-200">
                    <h3 className="text-lg font-serif font-bold text-maroon-900 mb-4 flex items-center gap-2">
                      <span>📋</span>
                      <span>Categories</span>
                    </h3>
                    <div className="space-y-2">
                      {Object.keys(categories).map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedCategory === category && !searchQuery
                            ? 'bg-maroon-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-maroon-50 hover:text-maroon-700'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{category}</span>
                            <span className="text-xs opacity-75">({categories[category].length})</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 rounded-2xl shadow-lg p-6 text-white">
                    <h3 className="text-lg font-serif font-bold text-gold-300 mb-3">
                      Need Help?
                    </h3>
                    <p className="text-gold-100 text-sm mb-4">
                      Our experts are here to guide you
                    </p>
                    <a href="tel:+918446272142">
                      <Button variant="secondary" size="sm" className="w-full bg-gold-500 text-maroon-900 hover:bg-gold-600">
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* MAIN GRID - PUJA CARDS */}
              <div className="lg:col-span-3">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-2">
                      {searchQuery ? `Results for "${searchQuery}"` : selectedCategory}
                    </h2>
                    <p className="text-gray-600">
                      Showing {displayedPujas.length} services
                    </p>
                  </div>

                  {/* Mobile Category Dropdown could represent here if needed, keeping it simple for now */}
                </div>

                {/* NO RESULTS FALLBACK */}
                {displayedPujas.length === 0 && (
                  <div className="bg-white rounded-2xl shadow-xl border-2 border-dashed border-maroon-200 p-12 text-center">
                    <div className="text-6xl mb-6">🙏</div>
                    <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">
                      Puja Not Found? Don't Worry!
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                      We offer <strong>customized puja services</strong> for every need. Even if it's not listed here, our Senior Pandits can perform it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+918446272142">
                        <Button variant="primary" size="lg" className="bg-maroon-600 hover:bg-maroon-700 w-full sm:w-auto">
                          Call Us: +91-8446272142
                        </Button>
                      </a>
                      <a href="https://wa.me/918446272142?text=I%20want%20to%20book%20a%20specific%20puja%20not%20listed%20on%20website">
                        <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto border-transparent">
                          Chat on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                )}

                {/* Uniform Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayedPujas.map((slug: string, index: number) => {
                    const puja = getPujaData(slug)
                    const displayName = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' in Pune'
                    const isFeatured = featuredPujas.includes(slug)

                    return (
                      <Link
                        key={slug}
                        href={`/puja-services/${slug}`}
                        className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 flex flex-col ${isFeatured ? 'border-gold-400' : 'border-transparent hover:border-maroon-200'
                          }`}
                      >
                        {isFeatured && (
                          <div className="bg-gold-500 text-white text-xs font-bold px-3 py-1 text-center">
                            ⭐ MOST POPULAR
                          </div>
                        )}

                        <div className="p-6 flex flex-col flex-1">
                          {/* Image */}
                          <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                            {puja.image && (
                              <Image
                                src={puja.image}
                                alt={displayName}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            )}
                            {!puja.image && (
                              <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-saffron-100 flex items-center justify-center">
                                <span className="text-4xl">🕉️</span>
                              </div>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-saffron-700 transition-colors">
                            {displayName}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            {puja.metaDescription || 'Authentic puja service performed by verified pandits with complete samagri included.'}
                          </p>

                          {/* Price & Duration */}
                          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                            <div>
                              <div className="text-2xl font-bold text-saffron-600">₹{puja.cost || '2,000'}+</div>
                              <div className="text-xs text-gray-500">Starting price</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-gray-700">2-3 hrs</div>
                              <div className="text-xs text-gray-500">Duration</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="text-green-500">✓</span>
                              <span>Samagri Included</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="text-green-500">✓</span>
                              <span>Certified Pandit</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="text-green-500">✓</span>
                              <span>Muhurat Guidance</span>
                            </div>
                          </div>

                          {/* CTA */}
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full bg-maroon-600 hover:bg-maroon-700 mt-auto"
                            href="tel:+918446272142">
                            Book Now →
                          </Button>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-maroon-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Still Not Sure Which Puja to Choose?
            </h2>
            <p className="text-xl text-gold-200 mb-8 max-w-2xl mx-auto">
              Let our expert pandits guide you to the perfect puja for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918446272142">
                <Button variant="primary" size="lg" className="bg-gold-500 hover:bg-gold-600 text-maroon-900">
                  Call +91-8446272142
                </Button>
              </a>
              <a href="https://wa.me/918446272142">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
