import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'


const panditData: Record<string, {
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  experience: string
  languages: string[]
  specializations: string[]
  areas: string[]
  rating: number
  reviews: number
  bio: string
  education: string
  certifications: string[]
  services: string[]
}> = {
  'sharma-ji-vedic-expert': {
    name: 'Pandit Ramesh Sharma',
    title: 'Senior Vedic Expert',
    metaTitle: 'Pandit Ramesh Sharma - Vedic Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Ramesh Sharma for authentic Vedic pujas in Pune. 25+ years experience. Expert in Griha Pravesh, Marriage, and all major pujas.',
    experience: '25+ years',
    languages: ['Hindi', 'Sanskrit', 'Marathi'],
    specializations: ['Vedic Pujas', 'Marriage Ceremonies', 'Griha Pravesh', 'Satyanarayan Puja'],
    areas: ['Pune', 'Hinjewadi', 'Wakad', 'Baner', 'Aundh'],
    rating: 4.9,
    reviews: 127,
    bio: 'Pandit Ramesh Sharma is a highly respected Vedic expert with over 25 years of experience in performing authentic Hindu rituals and ceremonies. He comes from a traditional family of priests and has deep knowledge of Vedic scriptures, mantras, and rituals.',
    education: 'M.A. in Sanskrit, Vedic Studies from Pune University',
    certifications: ['Vedic Priest Certification', 'Sanskrit Language Expert'],
    services: ['Griha Pravesh Puja', 'Marriage Puja', 'Satyanarayan Puja', 'Lakshmi Puja', 'Rudrabhishek'],
  },
  'patil-ji-marathi-pandit': {
    name: 'Pandit Sunil Patil',
    title: 'Marathi Pandit Specialist',
    metaTitle: 'Pandit Sunil Patil - Marathi Pandit in Pune | Book Online',
    metaDescription: 'Book Pandit Sunil Patil for authentic Marathi pujas in Pune. Expert in Ganesh Chaturthi, Navratri, and all Maharashtrian rituals.',
    experience: '20+ years',
    languages: ['Marathi', 'Hindi', 'Sanskrit'],
    specializations: ['Marathi Pujas', 'Ganesh Chaturthi', 'Navratri', 'Festival Pujas'],
    areas: ['Pune', 'Kothrud', 'Karve Nagar', 'Deccan', 'Shivajinagar'],
    rating: 4.8,
    reviews: 98,
    bio: 'Pandit Sunil Patil specializes in traditional Marathi pujas and festivals. With 20+ years of experience, he is well-versed in Maharashtrian customs and performs all rituals with complete authenticity.',
    education: 'Traditional Gurukul Education, Sanskrit Studies',
    certifications: ['Marathi Ritual Specialist'],
    services: ['Ganesh Chaturthi Puja', 'Navratri Puja', 'Diwali Puja', 'Griha Pravesh', 'Marriage Puja'],
  },
  'joshi-ji-astrology-expert': {
    name: 'Pandit Vikram Joshi',
    title: 'Vedic Astrology Expert',
    metaTitle: 'Pandit Vikram Joshi - Astrology Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Vikram Joshi for astrology services in Pune. Expert in Kundli making, horoscope reading, matchmaking, and gemstone consultation.',
    experience: '18+ years',
    languages: ['Hindi', 'Marathi', 'English'],
    specializations: ['Vedic Astrology', 'Kundli Making', 'Matchmaking', 'Gemstone Consultation'],
    areas: ['Pune', 'Viman Nagar', 'Kharadi', 'Wagholi', 'Hadapsar'],
    rating: 4.9,
    reviews: 156,
    bio: 'Pandit Vikram Joshi is a renowned Vedic astrologer with expertise in horoscope analysis, kundli making, and astrological remedies. He combines traditional Vedic knowledge with modern interpretation.',
    education: 'M.A. in Astrology, Jyotish Acharya',
    certifications: ['Vedic Astrology Certification', 'Gemstone Consultant'],
    services: ['Kundli Making', 'Horoscope Reading', 'Matchmaking', 'Gemstone Consultation', 'Kaal Sarp Dosh Puja'],
  },
  'desai-ji-business-puja': {
    name: 'Pandit Mahesh Desai',
    title: 'Business Puja Specialist',
    metaTitle: 'Pandit Mahesh Desai - Business Puja Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Mahesh Desai for office opening puja, shop opening, and business pujas in Pune. Expert in attracting prosperity and success.',
    experience: '15+ years',
    languages: ['Marathi', 'Hindi', 'Gujarati'],
    specializations: ['Business Pujas', 'Office Opening', 'Lakshmi Puja', 'Vastu Puja'],
    areas: ['Pune', 'Hinjewadi', 'Baner', 'Aundh', 'Magarpatta'],
    rating: 4.7,
    reviews: 89,
    bio: 'Pandit Mahesh Desai specializes in business and prosperity pujas. He has helped hundreds of businesses with office opening ceremonies, Lakshmi pujas, and Vastu remedies.',
    education: 'Traditional Education, Business Astrology Specialist',
    certifications: ['Vastu Consultant'],
    services: ['Office Opening Puja', 'Lakshmi Puja', 'Vastu Puja', 'Shop Opening Puja'],
  },
  'kumar-ji-north-indian': {
    name: 'Pandit Ajay Kumar',
    title: 'North Indian Pandit',
    metaTitle: 'Pandit Ajay Kumar - North Indian Pandit in Pune | Book Online',
    metaDescription: 'Book Pandit Ajay Kumar for North Indian pujas in Pune. Expert in all major Hindu rituals, fluent in Hindi and Sanskrit.',
    experience: '22+ years',
    languages: ['Hindi', 'Sanskrit', 'English'],
    specializations: ['North Indian Pujas', 'Rudrabhishek', 'Satyanarayan Puja', 'Marriage Ceremonies'],
    areas: ['Pune', 'Hinjewadi', 'Wakad', 'Kharadi', 'Viman Nagar'],
    rating: 4.8,
    reviews: 112,
    bio: 'Pandit Ajay Kumar is a North Indian pandit who has been serving the Pune community for over 22 years. He performs all major Hindu rituals with traditional North Indian customs.',
    education: 'Traditional Gurukul Education, Sanskrit Expert',
    certifications: ['Vedic Priest Certification'],
    services: ['Rudrabhishek', 'Satyanarayan Puja', 'Marriage Puja', 'Griha Pravesh', 'Lakshmi Puja'],
  },
  'reddy-ji-south-indian': {
    name: 'Pandit Suresh Reddy',
    title: 'South Indian Pandit',
    metaTitle: 'Pandit Suresh Reddy - South Indian Pandit in Pune | Book Online',
    metaDescription: 'Book Pandit Suresh Reddy for South Indian pujas in Pune. Expert in South Indian rituals, fluent in Telugu, Tamil, and Kannada.',
    experience: '19+ years',
    languages: ['Telugu', 'Tamil', 'Kannada', 'Hindi', 'English'],
    specializations: ['South Indian Pujas', 'Temple Pujas', 'Festival Pujas'],
    areas: ['Pune', 'Hinjewadi', 'Baner', 'Aundh', 'Kharadi'],
    rating: 4.7,
    reviews: 76,
    bio: 'Pandit Suresh Reddy specializes in South Indian pujas and rituals. He brings authentic South Indian traditions to Pune and serves the South Indian community with devotion.',
    education: 'Traditional South Indian Education',
    certifications: ['South Indian Ritual Specialist'],
    services: ['Lakshmi Puja', 'Ganesh Puja', 'Marriage Puja', 'Griha Pravesh'],
  },
  'iyer-ji-kaal-sarp': {
    name: 'Pandit Ravi Iyer',
    title: 'Kaal Sarp Dosh Specialist',
    metaTitle: 'Pandit Ravi Iyer - Kaal Sarp Dosh Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Ravi Iyer for Kaal Sarp dosh puja and remedies in Pune. Expert in dosha remedies and astrological solutions.',
    experience: '16+ years',
    languages: ['Hindi', 'Marathi', 'Tamil'],
    specializations: ['Kaal Sarp Dosh', 'Dosha Remedies', 'Astrological Pujas'],
    areas: ['Pune', 'Kothrud', 'Karve Nagar', 'Deccan', 'Shivajinagar'],
    rating: 4.9,
    reviews: 134,
    bio: 'Pandit Ravi Iyer is a specialist in dosha remedies, particularly Kaal Sarp dosh. He has helped hundreds of people overcome astrological obstacles through authentic pujas and remedies.',
    education: 'M.A. in Astrology, Dosha Remedy Specialist',
    certifications: ['Astrological Remedy Expert'],
    services: ['Kaal Sarp Dosh Puja', 'Dosha Remedies', 'Rahu-Ketu Puja', 'Naga Puja'],
  },
  'singh-ji-rudrabhishek': {
    name: 'Pandit Harpreet Singh',
    title: 'Rudrabhishek Specialist',
    metaTitle: 'Pandit Harpreet Singh - Rudrabhishek Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Harpreet Singh for Rudrabhishek puja in Pune. Expert in Lord Shiva pujas and abhishekam ceremonies.',
    experience: '21+ years',
    languages: ['Hindi', 'Punjabi', 'Sanskrit'],
    specializations: ['Rudrabhishek', 'Shiva Pujas', 'Abhishekam'],
    areas: ['Pune', 'Hinjewadi', 'Wakad', 'Baner', 'Aundh'],
    rating: 4.8,
    reviews: 95,
    bio: 'Pandit Harpreet Singh is a dedicated Shiva devotee and specialist in Rudrabhishek puja. He performs powerful Shiva pujas with complete devotion and traditional methods.',
    education: 'Traditional Education, Shiva Puja Specialist',
    certifications: ['Rudrabhishek Expert'],
    services: ['Rudrabhishek Puja', 'Shiva Puja', 'Maha Shivratri Puja', 'Pradosh Puja'],
  },
  'nair-ji-festival': {
    name: 'Pandit Gopal Nair',
    title: 'Festival Puja Specialist',
    metaTitle: 'Pandit Gopal Nair - Festival Puja Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Gopal Nair for festival pujas in Pune. Expert in Diwali, Navratri, Ganesh Chaturthi, and all major festivals.',
    experience: '17+ years',
    languages: ['Marathi', 'Hindi', 'Malayalam'],
    specializations: ['Festival Pujas', 'Diwali', 'Navratri', 'Ganesh Chaturthi'],
    areas: ['Pune', 'Kothrud', 'Karve Nagar', 'Deccan', 'Shivajinagar'],
    rating: 4.7,
    reviews: 108,
    bio: 'Pandit Gopal Nair specializes in festival pujas and celebrations. He brings joy and devotion to every festival, performing authentic rituals that bring families together.',
    education: 'Traditional Education, Festival Specialist',
    certifications: ['Festival Puja Expert'],
    services: ['Diwali Puja', 'Navratri Puja', 'Ganesh Chaturthi Puja', 'Holi Puja', 'Dussehra Puja'],
  },
  'gupta-ji-marriage': {
    name: 'Pandit Rajesh Gupta',
    title: 'Marriage Ceremony Expert',
    metaTitle: 'Pandit Rajesh Gupta - Marriage Puja Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Rajesh Gupta for marriage ceremonies in Pune. Expert in wedding rituals, pre-wedding pujas, and post-wedding ceremonies.',
    experience: '24+ years',
    languages: ['Hindi', 'Sanskrit', 'Marathi'],
    specializations: ['Marriage Ceremonies', 'Wedding Pujas', 'Pre-Wedding Rituals'],
    areas: ['Pune', 'Hinjewadi', 'Wakad', 'Baner', 'Aundh', 'Kharadi'],
    rating: 4.9,
    reviews: 187,
    bio: 'Pandit Rajesh Gupta is one of Pune\'s most experienced marriage ceremony experts. He has performed hundreds of weddings, ensuring every ritual is done correctly and with devotion.',
    education: 'M.A. in Sanskrit, Marriage Ritual Specialist',
    certifications: ['Marriage Ceremony Expert'],
    services: ['Marriage Puja', 'Engagement Puja', 'Haldi Ceremony', 'Mehendi Puja', 'Griha Pravesh'],
  },
  'menon-ji-vedic': {
    name: 'Pandit Krishnan Menon',
    title: 'Vedic Ritual Expert',
    metaTitle: 'Pandit Krishnan Menon - Vedic Expert in Pune | Book Online',
    metaDescription: 'Book Pandit Krishnan Menon for authentic Vedic pujas in Pune. Expert in all Vedic rituals with deep knowledge of scriptures.',
    experience: '27+ years',
    languages: ['Sanskrit', 'Hindi', 'Malayalam', 'English'],
    specializations: ['Vedic Pujas', 'Yagnas', 'Havans', 'Classical Rituals'],
    areas: ['Pune', 'Viman Nagar', 'Kharadi', 'Wagholi', 'Hadapsar'],
    rating: 4.9,
    reviews: 145,
    bio: 'Pandit Krishnan Menon is a highly respected Vedic scholar with deep knowledge of ancient scriptures. He performs authentic Vedic rituals with precision and devotion.',
    education: 'Ph.D. in Vedic Studies, Sanskrit Expert',
    certifications: ['Vedic Scholar', 'Yagna Specialist'],
    services: ['Vedic Pujas', 'Yagnas', 'Havans', 'Satyanarayan Puja', 'Rudrabhishek'],
  },
  'bhatt-ji-all-rounder': {
    name: 'Pandit Anil Bhatt',
    title: 'All-Round Pandit',
    metaTitle: 'Pandit Anil Bhatt - Experienced Pandit in Pune | Book Online',
    metaDescription: 'Book Pandit Anil Bhatt for all types of pujas in Pune. Versatile pandit with experience in all major Hindu rituals and ceremonies.',
    experience: '20+ years',
    languages: ['Hindi', 'Marathi', 'Gujarati', 'Sanskrit'],
    specializations: ['All Pujas', 'Griha Pravesh', 'Lakshmi Puja', 'Satyanarayan Puja'],
    areas: ['Pune', 'All Areas'],
    rating: 4.8,
    reviews: 201,
    bio: 'Pandit Anil Bhatt is a versatile and experienced pandit who can perform all types of pujas. His flexibility and knowledge make him a popular choice for various ceremonies.',
    education: 'Traditional Education, Multi-Ritual Specialist',
    certifications: ['General Puja Expert'],
    services: ['All Puja Services', 'Griha Pravesh', 'Lakshmi Puja', 'Satyanarayan Puja', 'Marriage Puja'],
  },
}

// Template generator for pandits without detailed data
function getPanditTemplate(slug: string) {
  const nameParts = slug.split('-').filter(part => part !== 'ji' && part !== '2')
  const firstName = nameParts[0]?.charAt(0).toUpperCase() + nameParts[0]?.slice(1) || 'Pandit'
  const lastName = nameParts[1]?.charAt(0).toUpperCase() + nameParts[1]?.slice(1) || 'Sharma'
  const specialization = nameParts.slice(2).join(' ') || 'Vedic Expert'

  const displayName = `${firstName} ${lastName}`
  const title = specialization.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return {
    name: `Pandit ${displayName}`,
    title: title || 'Vedic Expert',
    metaTitle: `Pandit ${displayName} - ${title} in Pune | Book Online`,
    metaDescription: `Book Pandit ${displayName} for authentic Hindu pujas in Pune. Experienced ${title.toLowerCase()} specializing in Vedic rituals and ceremonies.`,
    experience: '15+ years',
    languages: ['Hindi', 'Marathi', 'Sanskrit'],
    specializations: [title, 'Vedic Pujas', 'Traditional Rituals'],
    areas: ['Pune', 'Hinjewadi', 'Wakad', 'Baner'],
    rating: 4.7,
    reviews: Math.floor(Math.random() * 100) + 50,
    bio: `Pandit ${displayName} is an experienced ${title.toLowerCase()} with deep knowledge of Vedic scriptures and Hindu rituals. He has been serving the Pune community for many years, performing authentic pujas and ceremonies with devotion and precision.`,
    education: 'Traditional Vedic Education',
    certifications: ['Vedic Priest Certification'],
    services: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Satyanarayan Puja', 'Marriage Puja', 'All Vedic Pujas'],
  }
}

export default function PanditProfile() {
  const router = useRouter()
  const panditId = router.query['pandit-id'] as string | undefined

  // Check detailed data first, then use template generator
  const pandit = panditId
    ? (panditData[panditId] || getPanditTemplate(panditId))
    : null

  if (!pandit) {
    return (
      <>
        <Header />
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Pandit Not Found</h1>
          <Button variant="primary" href="/pandits" asLink>
            Browse All Pandits
          </Button>
        </div>
        <Footer />
      </>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: pandit.name,
    jobTitle: pandit.title,
    description: pandit.metaDescription,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: pandit.rating,
      reviewCount: pandit.reviews,
    },
  }

  return (
    <>
      <Head>
        <title>{pandit.metaTitle}</title>
        <meta name="description" content={pandit.metaDescription} />
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
              <Link href="/pandits" className="text-gray-600 hover:text-saffron-600">Our Pandits</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{pandit.name}</span>
            </div>
          </div>
        </nav>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <div className="w-24 h-24 bg-saffron-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                    <span className="text-3xl font-bold text-saffron-600">
                      {pandit.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      {pandit.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-3">{pandit.title}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < Math.floor(pandit.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                      ))}
                      <span className="ml-2 text-gray-700">
                        {pandit.rating} ({pandit.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{pandit.bio}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                      <p className="text-gray-700">{pandit.experience}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                      <p className="text-gray-700">{pandit.education}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {pandit.languages.map((lang, i) => (
                        <span key={i} className="px-3 py-1 bg-saffron-50 text-saffron-700 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {pandit.specializations.map((spec, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Service Areas</h3>
                    <p className="text-gray-700">{pandit.areas.join(', ')}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Services Offered</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {pandit.services.map((service, i) => (
                        <li key={i}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Links */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Explore More</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/puja-services" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Browse All Puja Services →
                    </Link>
                    <Link href="/pandits" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      View All Pandits →
                    </Link>
                    <Link href={`/pandit-services/${pandit.areas[0]?.toLowerCase().replace(/\s+/g, '-')}`} className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Pandits in {pandit.areas[0]} →
                    </Link>
                    <Link href="/contact" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Book Pandit Ji</h3>
                  <a href="tel:+918446272142" className="block w-full bg-saffron-600 text-white text-center py-3 rounded-lg font-bold hover:bg-saffron-700 transition-colors mb-4">
                    Call +91-8446272142
                  </a>
                  <a href={`https://wa.me/918446272142?text=I%20want%20to%20book%20${pandit.name}`} className="block w-full border-2 border-green-500 text-green-600 text-center py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

