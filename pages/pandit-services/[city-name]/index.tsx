import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { getLocationTemplate } from '@/data/pandit-services-template'

const locationData: Record<string, {
  name: string
  displayName: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  popularPujas: string[]
  panditCount: number
  areas: string[]
}> = {
  'pune': {
    name: 'pune',
    displayName: 'Pune',
    metaTitle: 'Pandit Services in Pune | Book Verified Pandits Online',
    metaDescription: 'Book verified pandits for pujas in Pune. Same-day booking. 50+ expert pandits available. Griha Pravesh, Lakshmi Puja, Marriage puja and more.',
    h1: 'Pandit Services in Pune - Book Verified Pandits Online',
    intro: 'Pune, the cultural capital of Maharashtra, is home to a vibrant Hindu community that values authentic spiritual services. At PanditForPujaBooking.com, we connect you with verified, experienced pandits across Pune for all your puja and astrology needs. Whether you need a pandit for Griha Pravesh, marriage ceremonies, festival pujas, or astrology services, we have the right expert for you.',
    popularPujas: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Marriage Puja', 'Satyanarayan Puja', 'Ganesh Chaturthi Puja'],
    panditCount: 50,
    areas: ['Hinjewadi', 'Wakad', 'Baner', 'Aundh', 'Kothrud', 'Karve Nagar', 'Deccan', 'Shivajinagar', 'Viman Nagar', 'Kharadi'],
  },
  'hinjewadi': {
    name: 'hinjewadi',
    displayName: 'Hinjewadi',
    metaTitle: 'Pandit Services in Hinjewadi, Pune | Book Online',
    metaDescription: 'Book verified pandits in Hinjewadi, Pune. Same-day booking available. Expert pandits for all pujas and astrology services.',
    h1: 'Pandit Services in Hinjewadi, Pune',
    intro: 'Hinjewadi, Pune\'s IT hub, is home to many professionals and families who value authentic spiritual services. Our verified pandits in Hinjewadi are available for all types of pujas including Griha Pravesh, office opening ceremonies, and festival celebrations.',
    popularPujas: ['Griha Pravesh Puja', 'Office Opening Puja', 'Lakshmi Puja', 'Ganesh Chaturthi Puja'],
    panditCount: 12,
    areas: ['Hinjewadi Phase 1', 'Hinjewadi Phase 2', 'Hinjewadi Phase 3'],
  },
  'wakad': {
    name: 'wakad',
    displayName: 'Wakad',
    metaTitle: 'Pandit Services in Wakad, Pune | Book Online',
    metaDescription: 'Book verified pandits in Wakad, Pune. Expert pandits for Griha Pravesh, marriage puja, and all spiritual services.',
    h1: 'Pandit Services in Wakad, Pune',
    intro: 'Wakad is a rapidly growing residential area in Pune with a strong community of families. Our pandits in Wakad specialize in Griha Pravesh pujas, marriage ceremonies, and all major Hindu rituals.',
    popularPujas: ['Griha Pravesh Puja', 'Marriage Puja', 'Lakshmi Puja', 'Satyanarayan Puja'],
    panditCount: 10,
    areas: ['Wakad', 'Nearby Areas'],
  },
  'baner': {
    name: 'baner',
    displayName: 'Baner',
    metaTitle: 'Pandit Services in Baner, Pune | Book Online',
    metaDescription: 'Book verified pandits in Baner, Pune. Same-day booking. Expert pandits for all pujas and ceremonies.',
    h1: 'Pandit Services in Baner, Pune',
    intro: 'Baner is a premium residential and commercial area in Pune. Our verified pandits in Baner are experienced in performing all types of pujas including business pujas, Griha Pravesh, and festival celebrations.',
    popularPujas: ['Office Opening Puja', 'Griha Pravesh Puja', 'Lakshmi Puja', 'Marriage Puja'],
    panditCount: 11,
    areas: ['Baner', 'Balewadi', 'Nearby Areas'],
  },
  'aundh': {
    name: 'aundh',
    displayName: 'Aundh',
    metaTitle: 'Pandit Services in Aundh, Pune | Book Online',
    metaDescription: 'Book verified pandits in Aundh, Pune. Expert pandits for Griha Pravesh, marriage, and all puja services.',
    h1: 'Pandit Services in Aundh, Pune',
    intro: 'Aundh is a well-established residential area in Pune with a rich cultural heritage. Our pandits in Aundh are well-versed in traditional Marathi pujas and all major Hindu ceremonies.',
    popularPujas: ['Griha Pravesh Puja', 'Marriage Puja', 'Ganesh Chaturthi Puja', 'Navratri Puja'],
    panditCount: 9,
    areas: ['Aundh', 'Nearby Areas'],
  },
  'kothrud': {
    name: 'kothrud',
    displayName: 'Kothrud',
    metaTitle: 'Pandit Services in Kothrud, Pune | Book Online',
    metaDescription: 'Book verified pandits in Kothrud, Pune. Expert in Marathi pujas, Ganesh Chaturthi, and all spiritual services.',
    h1: 'Pandit Services in Kothrud, Pune',
    intro: 'Kothrud is a traditional Marathi neighborhood in Pune known for its cultural activities. Our pandits in Kothrud specialize in authentic Marathi pujas, Ganesh Chaturthi celebrations, and all festival pujas.',
    popularPujas: ['Ganesh Chaturthi Puja', 'Navratri Puja', 'Diwali Puja', 'Griha Pravesh Puja'],
    panditCount: 13,
    areas: ['Kothrud', 'Karve Nagar', 'Nearby Areas'],
  },
  'karve-nagar': {
    name: 'karve-nagar',
    displayName: 'Karve Nagar',
    metaTitle: 'Pandit Services in Karve Nagar, Pune | Book Online',
    metaDescription: 'Book verified pandits in Karve Nagar, Pune. Expert pandits for all pujas and astrology services.',
    h1: 'Pandit Services in Karve Nagar, Pune',
    intro: 'Karve Nagar is a residential area in Pune with a mix of traditional and modern families. Our verified pandits in Karve Nagar are available for all types of pujas and ceremonies.',
    popularPujas: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Satyanarayan Puja', 'Marriage Puja'],
    panditCount: 8,
    areas: ['Karve Nagar', 'Nearby Areas'],
  },
  'deccan': {
    name: 'deccan',
    displayName: 'Deccan',
    metaTitle: 'Pandit Services in Deccan, Pune | Book Online',
    metaDescription: 'Book verified pandits in Deccan, Pune. Expert in all pujas, astrology, and spiritual services.',
    h1: 'Pandit Services in Deccan, Pune',
    intro: 'Deccan is a central area of Pune with a rich cultural history. Our pandits in Deccan are experienced in performing all major Hindu rituals and ceremonies with traditional authenticity.',
    popularPujas: ['Griha Pravesh Puja', 'Marriage Puja', 'Rudrabhishek Puja', 'Lakshmi Puja'],
    panditCount: 10,
    areas: ['Deccan', 'Shivajinagar', 'Nearby Areas'],
  },
  'shivajinagar': {
    name: 'shivajinagar',
    displayName: 'Shivajinagar',
    metaTitle: 'Pandit Services in Shivajinagar, Pune | Book Online',
    metaDescription: 'Book verified pandits in Shivajinagar, Pune. Same-day booking available for all puja services.',
    h1: 'Pandit Services in Shivajinagar, Pune',
    intro: 'Shivajinagar is a central commercial and residential area in Pune. Our verified pandits in Shivajinagar are available for business pujas, Griha Pravesh, and all spiritual ceremonies.',
    popularPujas: ['Office Opening Puja', 'Griha Pravesh Puja', 'Lakshmi Puja', 'Satyanarayan Puja'],
    panditCount: 9,
    areas: ['Shivajinagar', 'Nearby Areas'],
  },
  'viman-nagar': {
    name: 'viman-nagar',
    displayName: 'Viman Nagar',
    metaTitle: 'Pandit Services in Viman Nagar, Pune | Book Online',
    metaDescription: 'Book verified pandits in Viman Nagar, Pune. Expert pandits for Griha Pravesh, marriage, and all pujas.',
    h1: 'Pandit Services in Viman Nagar, Pune',
    intro: 'Viman Nagar is a modern residential area in Pune with a growing population. Our pandits in Viman Nagar specialize in Griha Pravesh pujas, marriage ceremonies, and all major Hindu rituals.',
    popularPujas: ['Griha Pravesh Puja', 'Marriage Puja', 'Lakshmi Puja', 'Ganesh Chaturthi Puja'],
    panditCount: 11,
    areas: ['Viman Nagar', 'Nearby Areas'],
  },
  'kharadi': {
    name: 'kharadi',
    displayName: 'Kharadi',
    metaTitle: 'Pandit Services in Kharadi, Pune | Book Online',
    metaDescription: 'Book verified pandits in Kharadi, Pune. Expert in all pujas, astrology services, and spiritual ceremonies.',
    h1: 'Pandit Services in Kharadi, Pune',
    intro: 'Kharadi is a rapidly developing area in Pune with many IT professionals and families. Our verified pandits in Kharadi are available for office opening pujas, Griha Pravesh, and all spiritual services.',
    popularPujas: ['Office Opening Puja', 'Griha Pravesh Puja', 'Lakshmi Puja', 'Marriage Puja'],
    panditCount: 10,
    areas: ['Kharadi', 'Wagholi', 'Nearby Areas'],
  },
  'wagholi': {
    name: 'wagholi',
    displayName: 'Wagholi',
    metaTitle: 'Pandit Services in Wagholi, Pune | Book Online',
    metaDescription: 'Book verified pandits in Wagholi, Pune. Expert pandits for all pujas and ceremonies.',
    h1: 'Pandit Services in Wagholi, Pune',
    intro: 'Wagholi is a growing residential area in Pune. Our pandits in Wagholi are experienced in performing all types of pujas including Griha Pravesh, marriage ceremonies, and festival pujas.',
    popularPujas: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Satyanarayan Puja', 'Marriage Puja'],
    panditCount: 7,
    areas: ['Wagholi', 'Nearby Areas'],
  },
  'hadapsar': {
    name: 'hadapsar',
    displayName: 'Hadapsar',
    metaTitle: 'Pandit Services in Hadapsar, Pune | Book Online',
    metaDescription: 'Book verified pandits in Hadapsar, Pune. Same-day booking. Expert pandits for all spiritual services.',
    h1: 'Pandit Services in Hadapsar, Pune',
    intro: 'Hadapsar is a residential and commercial area in Pune. Our verified pandits in Hadapsar are available for all types of pujas, astrology services, and spiritual ceremonies.',
    popularPujas: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Office Opening Puja', 'Marriage Puja'],
    panditCount: 8,
    areas: ['Hadapsar', 'Nearby Areas'],
  },
  'magarpatta': {
    name: 'magarpatta',
    displayName: 'Magarpatta',
    metaTitle: 'Pandit Services in Magarpatta, Pune | Book Online',
    metaDescription: 'Book verified pandits in Magarpatta, Pune. Expert in business pujas, Griha Pravesh, and all ceremonies.',
    h1: 'Pandit Services in Magarpatta, Pune',
    intro: 'Magarpatta is a planned township in Pune with residential and commercial spaces. Our pandits in Magarpatta specialize in office opening pujas, Griha Pravesh, and all business-related ceremonies.',
    popularPujas: ['Office Opening Puja', 'Griha Pravesh Puja', 'Lakshmi Puja', 'Vastu Puja'],
    panditCount: 9,
    areas: ['Magarpatta', 'Nearby Areas'],
  },
  'koregaon-park': {
    name: 'koregaon-park',
    displayName: 'Koregaon Park',
    metaTitle: 'Pandit Services in Koregaon Park, Pune | Book Online',
    metaDescription: 'Book verified pandits in Koregaon Park, Pune. Expert pandits for all pujas and spiritual services.',
    h1: 'Pandit Services in Koregaon Park, Pune',
    intro: 'Koregaon Park is an upscale area in Pune. Our verified pandits in Koregaon Park are experienced in performing all types of pujas including Griha Pravesh, marriage ceremonies, and festival celebrations.',
    popularPujas: ['Griha Pravesh Puja', 'Marriage Puja', 'Lakshmi Puja', 'Satyanarayan Puja'],
    panditCount: 8,
    areas: ['Koregaon Park', 'Nearby Areas'],
  },
  'pimpri-chinchwad': {
    name: 'pimpri-chinchwad',
    displayName: 'Pimpri Chinchwad',
    metaTitle: 'Pandit Services in Pimpri Chinchwad, Pune | Book Online',
    metaDescription: 'Book verified pandits in Pimpri Chinchwad, Pune. Expert in all pujas, astrology, and spiritual services.',
    h1: 'Pandit Services in Pimpri Chinchwad, Pune',
    intro: 'Pimpri Chinchwad is a major industrial and residential area near Pune. Our pandits in Pimpri Chinchwad are available for all types of pujas including Griha Pravesh, office opening, and festival pujas.',
    popularPujas: ['Griha Pravesh Puja', 'Office Opening Puja', 'Lakshmi Puja', 'Marriage Puja'],
    panditCount: 12,
    areas: ['Pimpri', 'Chinchwad', 'Nearby Areas'],
  },
}

export default function LocationPage() {
  const router = useRouter()
  const cityName = router.query['city-name'] as string | undefined

  // Check detailed data first, then use template generator
  const location = cityName
    ? (locationData[cityName] || getLocationTemplate(cityName))
    : null

  if (!location) {
    return (
      <>
        <Header />
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Pandit Services in ${location.displayName}`,
    telephone: '+91-8446272142',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.displayName,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'City',
      name: location.displayName,
    },
  }

  return (
    <>
      <Head>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <main>
        <nav className="bg-gray-50 py-4">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-saffron-600">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">Pandit Services in {location.displayName}</span>
            </div>
          </div>
        </nav>

        <div className="container-custom section-padding">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            {location.h1}
          </h1>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">{location.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Popular Pujas in {location.displayName}
              </h2>
              <ul className="space-y-2">
                {location.popularPujas.map((puja, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-saffron-600 mr-3">✓</span>
                    <Link
                      href={`/puja-services/${puja.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-saffron-600"
                    >
                      {puja}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Service Information
              </h2>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-600">Available Pandits:</span>
                  <p className="text-xl font-semibold text-gray-900">{location.panditCount}+</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Service Areas:</span>
                  <p className="text-gray-700">{location.areas.join(', ')}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Booking:</span>
                  <p className="text-gray-700">Same-day booking available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-saffron-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Book Your Pandit in {location.displayName}
            </h2>
            <p className="text-gray-700 mb-2">
              Get connected with verified pandits in {location.displayName} in just 2 minutes
            </p>
            <p className="text-gray-600 mb-6 text-sm">
              Call us at <a href="tel:+918446272142" className="text-saffron-600 font-semibold hover:underline">+91-8446272142</a> for immediate booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/puja-services">
                <Button variant="primary" size="lg">
                  Browse Puja Services
                </Button>
              </Link>
              <a href="tel:+918446272142">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

