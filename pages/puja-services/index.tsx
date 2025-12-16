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
    'satyanarayan-vrat-udyapan-in-pune',
    'santoshi-mata-vrat-udyapan-in-pune',
    'somvar-vrat-udyapan-in-pune',
    'mangala-gauri-vrat-udyapan-in-pune',
    'navratri-durga-vrat-udyapan-in-pune',
    'karwa-chauth-vrat-udyapan-in-pune',
    'hartalika-teej-vrat-udyapan-in-pune',
    'vat-savitri-vrat-udyapan-in-pune',
    'ekadashi-vrat-udyapan-in-pune',
    'pradosh-vrat-udyapan-in-pune',
    'chhath-puja-vrat-udyapan-in-pune',
    'sawan-shivratri-vrat-udyapan-in-pune',
    'shravan-somvar-vrat-udyapan-in-pune',
    'shukravar-lakshmi-vrat-udyapan-in-pune',
    'mangalmurti-vrat-udyapan-in-pune',
    'skanda-sashti-vrat-udyapan-in-pune',
    'ahoi-ashtami-vrat-udyapan-in-pune',
    'janmashtami-vrat-udyapan-in-pune',
    'radha-ashtami-vrat-udyapan-in-pune',
    'hanuman-vrat-udyapan-in-pune',
  ],
  'Shanti Puja': [
    'vastu-shanti-puja-in-pune',
    'grah-shanti-puja-in-pune',
    'navagraha-shanti-in-pune',
    'kaal-sarp-dosh-shanti-in-pune',
    'pitru-dosh-shanti-in-pune',
    'nadi-dosh-shanti-in-pune',
    'mangal-dosh-shanti-in-pune',
    'chandra-dosh-shanti-in-pune',
    'rahu-dosh-shanti-in-pune',
    'ketu-dosh-shanti-in-pune',
    'shani-shanti-puja',
    'guru-dosh-shanti-in-pune',
    'surya-dosh-shanti-in-pune',
    'sarva-shanti-puja-in-pune',
    'marriage-delay-shanti-in-pune',
    'childbirth-delay-shanti-in-pune',
    'health-shanti-puja-in-pune',
    'family-harmony-shanti-in-pune',
    'wealth-prosperity-shanti-in-pune',
    'ancestral-peace-shanti-in-pune',
  ],
  'Havan': [
    'grah-shanti-havan-in-pune',
    'navagraha-havan-in-pune',
    'lakshmi-havan-in-pune',
    'maha-mrityunjaya-havan-in-pune',
    'durga-havan-in-pune',
    'ganesh-havan-in-pune',
    'gayatri-havan-in-pune',
    'vishnu-havan-in-pune',
    'shiva-havan-in-pune',
    'saraswati-havan-in-pune',
    'chandi-havan-in-pune',
    'rudra-havan-in-pune',
    'vastu-havan-in-pune',
    'dhanvantri-havan-in-pune',
    'kaal-bhairav-havan-in-pune',
    'hanuman-havan-in-pune',
    'santan-gopal-havan-in-pune',
    'kuber-havan-in-pune',
    'business-success-havan-in-pune',
    'planetary-shanti-havan-in-pune',
  ],
  'Paath Jaap': [
    'ramcharitmanas-paath-in-pune',
    'vishnu-sahasranama-paath-in-pune',
    'shiva-purana-paath-in-pune',
    'sundarkand-paath-in-pune',
    'hanuman-chalisa-paath-in-pune',
    'bhagwat-katha-in-pune',
    'durga-saptashati-paath-in-pune',
    'ganesh-atharvashirsha-paath-in-pune',
    'gayatri-mantra-jaap-in-pune',
    'maha-mrityunjaya-jaap-in-pune',
    'shani-mantra-jaap-in-pune',
    'navagraha-mantra-jaap-in-pune',
    'lakshmi-ashtottara-paath-in-pune',
    'kanakadhara-stotra-paath-in-pune',
    'lalita-sahasranama-paath-in-pune',
    'saraswati-stotra-paath-in-pune',
    'guru-charitra-paath-in-pune',
    'sai-satcharitra-paath-in-pune',
    'rudri-paath-in-pune',
    'vishnu-puran-paath-in-pune',
    'sankat-mochan-hanuman-ashtak-in-pune',
    'aditya-hridaya-stotra-in-pune',
    'bajrang-baan-paath-in-pune',
    'gopal-sahasranama-paath-in-pune',
  ],
  'Home Puja': [
    'griha-pravesh-puja-in-pune',
    'satyanarayan-puja-in-pune',
    'vastu-puja-in-pune',
    'bhoomi-pujan-in-pune',
    'office-opening-puja-in-pune',
    'vehicle-puja-in-pune',
    'kitchen-opening-puja-in-pune',
    'nitya-home-puja-in-pune',
    'griha-shanti-puja-in-pune',
    'dosh-nivaran-puja-in-pune',
    'lakshmi-kubera-puja-in-pune',
    'child-health-puja-in-pune',
    'negative-energy-removal-puja-in-pune',
    'nazar-dosh-puja-in-pune',
    'family-harmony-shanti-in-pune',
    'new-business-puja-in-pune',
    'sai-satya-vrat-puja-in-pune',
    'navdurga-home-puja-in-pune',
    'ganesh-sthapana-puja-in-pune',
    'namakaran-puja-in-pune',
  ],
  'Goddess Puja': [
    'baglamukhi-puja-in-pune',
    'kali-puja-in-pune',
    'chandi-homa-in-pune',
    'pratyangira-devi-puja-in-pune',
    'kamakhya-devi-puja-in-pune',
    'vaibhav-lakshmi-vrat-in-pune',
    'varalakshmi-vrat-in-pune',
    'mahalakshmi-homa-in-pune',
    'gajalakshmi-puja-in-pune',
    'aishwarya-lakshmi-puja-in-pune',
    'mangala-gauri-puja-in-pune',
    'katyayani-puja-in-pune',
    'uma-maheshwari-puja-in-pune',
    'swayamvara-parvati-puja-in-pune',
    'santoshi-mata-vrat-in-pune',
    'saraswati-homa-in-pune',
    'gayatri-homa-in-pune',
    'sheetala-mata-puja-in-pune',
    'annapurna-puja-in-pune',
    'rajarajeshwari-puja-in-pune',
  ],
  'Festival Pujas': [
    'ganesh-chaturthi-puja-in-pune',
    'diwali-lakshmi-puja-in-pune',
    'gudi-padwa-puja-in-pune',
    'dussehra-puja-in-pune',
    'tulsi-vivah-puja-in-pune',
    'makar-sankranti-puja-in-pune',
    'holi-puja-in-pune',
    'rishi-panchami-puja-in-pune',
    'narak-chaturdashi-puja-in-pune',
    'bhai-dooj-puja-in-pune',
  ],
  'God Puja': [
    'ganesh-puja-in-pune',
    'shiva-puja',
    'rudrabhishek-puja-in-pune',
    'vishnu-puja-in-pune',
    'hanuman-puja-in-pune',
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
    'mata-ki-chowki-in-pune',
    'mata-ka-jagran-in-pune',
    'sai-bhajan-sandhya-in-pune',
    'krishna-bhajan-sandhya-in-pune',
    'ram-bhajan-sandhya-in-pune',
    'shiv-bhajan-sandhya-in-pune',
    'hanuman-bhajan-sandhya-in-pune',
    'bhavya-bhajan-sandhya-in-pune',
    'festival-special-chowki-in-pune',
    'durga-jagran-in-pune',
    'navratri-kirtan-in-pune',
    'satyanarayan-katha-in-pune',
    'bhagwat-katha-chowki-in-pune',
    'sundarkand-path-bhajan-in-pune',
    'sai-sandhya-kirtan-in-pune',
    'mahila-satsang-in-pune',
    'community-kirtan-in-pune',
    'vaishnav-bhajan-sandhya-in-pune',
    'corporate-bhajan-event-in-pune',
    'family-bhajan-evening-in-pune',
  ],
  'Marriage & Family': [
    'engagement-puja-sagai-in-pune',
    'roka-ceremony-puja',
    'vivah-puja-in-pune',
    'lagna-puja',
    'griha-pravesh-marriage',
    'naamkaran-sanskar-in-pune',
    'annaprashan-first-rice-in-pune',
    'mundan-sanskar-in-pune',
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
    'lakshmi-kubera-puja-in-pune',
    'business-growth-puja-in-pune',
    'office-opening-puja-in-pune',
    'shop-inauguration-puja-in-pune',
    'career-growth-puja',
    'job-success-puja',
    'promotion-puja',
    'new-project-puja-in-pune',
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
    'mangal-dosh-shanti-in-pune',
    'shani-shanti-planetary-puja-in-pune',
    'rahu-ketu-dosh-puja-in-pune',
    'surya-dosh-puja',
    'chandra-dosh-puja',
    'guru-dosh-puja',
    'budh-dosh-puja',
    'shukra-dosh-puja',
    'navagraha-shanti-in-pune',
    'pitra-dosh-nivaran-in-pune',
    'grah-klesh-nivaran-in-pune',
    'sade-sati-shanti-in-pune',
    'kaal-sarp-dosh-shanti-in-pune',
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

  // Helper: Filter Pujas Logic (Unified for Suggestions & Grid)
  const filterPujas = (query: string, services: string[]) => {
    if (!query.trim()) return []

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
    return services.filter(slug => {
      const normalized = slug.replace(/-/g, ' ').toLowerCase()
      // Check if any alias variant is matching
      return searchTerms.some(term => normalized.includes(term))
    }).sort((a, b) => {
      // Sort Alphabetically
      return a.localeCompare(b)
    })
  }

  // Intelligent Search Logic
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim().length > 0) {
      const matches = filterPujas(query, allPujaServices)
      setSuggestions(matches.slice(0, 50))
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  // Handle Suggestion Click - Redirect to Puja Page
  const handleSuggestionClick = (slug: string) => {
    // Requirement 2: Redirect to exact Puja detail page
    window.location.href = `/puja-services/${slug}`
  }


  // Filter Logic (Main Grid) uses searchQuery
  let displayedPujas: string[] = []

  if (searchQuery.trim()) {
    // USE THE SAME SMART LOGIC FOR THE GRID!
    displayedPujas = filterPujas(searchQuery, allPujaServices)
  } else {
    // Category Filtering
    if (selectedCategory === 'All') {
      displayedPujas = allPujaServices
    } else {
      displayedPujas = categories[selectedCategory] || []
    }
  }

  const featuredPujas = ['griha-pravesh-puja-in-pune', 'satyanarayan-puja-in-pune', 'marriage-puja-in-pune', 'lakshmi-puja-in-pune']


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
        {/* SEARCH SECTION - CLEAN */}
        <section className="bg-white pt-8 pb-4 border-b border-gray-100 sticky top-[56px] z-40 shadow-sm">
          <div className="container-custom">
            <div className="max-w-xl mx-auto">
              {/* SEARCH BAR & AUTOCOMPLETE */}
              <div className="relative z-50">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for puja..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => { if (searchQuery) setShowSuggestions(true) }}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full pl-14 pr-4 py-3 rounded-full bg-white text-maroon-900 border-2 border-gold-300 shadow-md focus:border-maroon-600 focus:ring-4 focus:ring-maroon-100 text-lg placeholder-gray-500 transition-all outline-none"
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
