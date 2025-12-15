import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getPujaData, allPujaServices } from '@/data/puja-services'

// Filter pujas to only include those that have detailed data in this file OR exist in allPujaServices
// This prevents 404s during build time if data is missing

// Puja data mapping (from masterplan) - Detailed data for priority pujas
const pujaData: Record<string, {
  title: string
  metaTitle: string
  metaDescription: string
  focusKeyword: string
  h1: string
  intro: string
  ritualSteps: string[]
  benefits: string[]
  cost: string
  duration: string
  whoShouldBook: string
  faqs: Array<{ question: string; answer: string }>
}> = {
  'griha-pravesh-puja': {
    title: 'Griha Pravesh Puja',
    metaTitle: 'Griha Pravesh Puja in Pune | Book Expert Pandit Online',
    metaDescription: 'Book verified pandit for Griha Pravesh puja in Pune. Same-day booking. Transparent pricing. Auspicious house warming ceremony.',
    focusKeyword: 'griha pravesh puja pune',
    h1: 'Griha Pravesh Puja - House Warming Ceremony in Pune',
    intro: 'Griha Pravesh Puja, also known as house warming ceremony, is one of the most important rituals performed when moving into a new home. This sacred ceremony invokes the blessings of deities to ensure peace, prosperity, and happiness in your new abode. Our verified pandits in Pune perform authentic Griha Pravesh puja following Vedic traditions.',
    ritualSteps: [
      'Ganpati Pujan and Kalash Sthapana',
      'Vastu Pujan and Havan',
      'Griha Pravesh with family members',
      'Lakshmi Pujan for prosperity',
      'Aarti and Prasad distribution',
    ],
    benefits: [
      'Removes negative energies from the new home',
      'Brings peace, prosperity, and harmony',
      'Ensures Vastu compliance and positive vibrations',
      'Protects family members from evil influences',
      'Invokes blessings of deities for a happy home',
    ],
    cost: '₹2,500 - ₹5,000',
    duration: '2-3 hours',
    whoShouldBook: 'Families moving into a new home, apartment, or renovated house should book Griha Pravesh puja. It is especially important for first-time homeowners.',
    faqs: [
      {
        question: 'When should Griha Pravesh puja be performed?',
        answer: 'Griha Pravesh puja should be performed on an auspicious date before or on the day of moving into the new home. Our pandits can help you select the best muhurat.',
      },
      {
        question: 'What items are needed for Griha Pravesh puja?',
        answer: 'Essential items include kalash, coconut, flowers, fruits, incense, camphor, and puja samagri. Our pandit will provide a complete list upon booking.',
      },
      {
        question: 'Can Griha Pravesh be done in an apartment?',
        answer: 'Yes, Griha Pravesh puja can be performed in apartments, independent houses, or any new dwelling. The ceremony is equally effective.',
      },
    ],
  },
  'lakshmi-puja': {
    title: 'Lakshmi Puja',
    metaTitle: 'Lakshmi Puja in Pune | Book Pandit for Wealth & Prosperity',
    metaDescription: 'Book expert pandit for Lakshmi puja in Pune. Attract wealth, prosperity, and financial stability. Same-day booking available.',
    focusKeyword: 'lakshmi puja pune',
    h1: 'Lakshmi Puja - Invoke Goddess of Wealth in Pune',
    intro: 'Lakshmi Puja is performed to invoke the blessings of Goddess Lakshmi, the deity of wealth, prosperity, and fortune. This powerful puja helps attract financial stability, remove obstacles to success, and bring abundance into your life. Our experienced pandits perform authentic Lakshmi puja following traditional Vedic methods.',
    ritualSteps: [
      'Ganpati Pujan',
      'Kalash Sthapana',
      'Lakshmi Yantra Pujan',
      'Lakshmi Mantra Chanting',
      'Havan with special samagri',
      'Aarti and Prasad',
    ],
    benefits: [
      'Attracts wealth and financial prosperity',
      'Removes financial obstacles and debts',
      'Brings success in business and career',
      'Ensures steady income and savings',
      'Creates positive financial energy',
    ],
    cost: '₹2,000 - ₹4,500',
    duration: '1.5-2.5 hours',
    whoShouldBook: 'Individuals facing financial difficulties, business owners, professionals seeking career growth, or anyone wanting to attract prosperity should book Lakshmi puja.',
    faqs: [
      {
        question: 'When is the best time for Lakshmi puja?',
        answer: 'Lakshmi puja is most effective on Fridays, during Diwali, or on auspicious dates. However, it can be performed any day with proper muhurat.',
      },
      {
        question: 'How often should Lakshmi puja be performed?',
        answer: 'Lakshmi puja can be performed monthly, during festivals, or whenever you need financial blessings. Regular puja strengthens the connection with the deity.',
      },
      {
        question: 'What is the significance of Lakshmi puja?',
        answer: 'Lakshmi puja removes financial obstacles, attracts wealth, and ensures prosperity. It is especially beneficial for business owners and professionals.',
      },
    ],
  },
  'satyanarayan-puja': {
    title: 'Satyanarayan Puja',
    metaTitle: 'Satyanarayan Puja in Pune | Book Pandit for Family Wellbeing',
    metaDescription: 'Book verified pandit for Satyanarayan puja in Pune. Brings peace, prosperity, and harmony to family. Same-day booking available.',
    focusKeyword: 'satyanarayan puja pune',
    h1: 'Satyanarayan Puja - Family Wellbeing & Prosperity in Pune',
    intro: 'Satyanarayan Puja is one of the most popular and powerful pujas performed for family wellbeing, peace, and prosperity. This puja invokes Lord Vishnu in his Satyanarayan form to bless the family with happiness, health, and harmony. Our expert pandits perform this puja with complete devotion and traditional rituals.',
    ritualSteps: [
      'Ganpati Pujan',
      'Kalash Sthapana',
      'Satyanarayan Katha recitation',
      'Havan with ghee and samagri',
      'Aarti and Prasad distribution',
    ],
    benefits: [
      'Brings peace and harmony to the family',
      'Removes obstacles and negative energies',
      'Ensures health and prosperity',
      'Fulfills wishes and desires',
      'Protects family from troubles',
    ],
    cost: '₹1,500 - ₹3,500',
    duration: '2-3 hours',
    whoShouldBook: 'Families seeking peace, couples, individuals facing obstacles, or anyone wanting to fulfill wishes should book Satyanarayan puja.',
    faqs: [
      {
        question: 'When should Satyanarayan puja be performed?',
        answer: 'Satyanarayan puja is traditionally performed on full moon (Purnima), new moon (Amavasya), or on special occasions. It can be done any auspicious day.',
      },
      {
        question: 'What is the significance of Satyanarayan Katha?',
        answer: 'The Satyanarayan Katha narrates the importance of truth and devotion. Listening to the katha brings blessings and removes obstacles.',
      },
      {
        question: 'Can Satyanarayan puja be done at home?',
        answer: 'Yes, Satyanarayan puja is commonly performed at home. Our pandit will guide you through the complete ceremony with all necessary items.',
      },
    ],
  },
  'marriage-puja': {
    title: 'Marriage Puja',
    metaTitle: 'Marriage Puja in Pune | Pre-Wedding & Wedding Rituals',
    metaDescription: 'Book expert pandit for marriage puja and wedding rituals in Pune. Pre-wedding ceremonies, wedding puja, and post-wedding rituals.',
    focusKeyword: 'marriage puja pune',
    h1: 'Marriage Puja - Wedding Ceremonies & Rituals in Pune',
    intro: 'Marriage puja encompasses various sacred rituals performed before, during, and after the wedding ceremony. These pujas invoke divine blessings for a happy, prosperous, and harmonious married life. Our experienced pandits perform all marriage-related pujas following traditional customs and Vedic procedures.',
    ritualSteps: [
      'Ganpati Pujan',
      'Mangal Kalash Sthapana',
      'Vivah Havan',
      'Saptapadi and other wedding rituals',
      'Aarti and blessings',
    ],
    benefits: [
      'Ensures a happy and harmonious married life',
      'Invokes divine blessings for the couple',
      'Removes obstacles to marriage',
      'Brings prosperity and happiness',
      'Protects the couple from negative influences',
    ],
    cost: '₹5,000 - ₹15,000',
    duration: '3-6 hours (depending on rituals)',
    whoShouldBook: 'Couples planning to get married, families organizing weddings, or those seeking pre-wedding ceremonies should book marriage puja services.',
    faqs: [
      {
        question: 'What pujas are included in marriage ceremonies?',
        answer: 'Marriage ceremonies include Ganpati puja, engagement puja, haldi ceremony, mehendi puja, wedding puja, and post-wedding rituals like griha pravesh.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'It is recommended to book at least 2-3 weeks in advance, especially during wedding season. However, we also accept same-day bookings when available.',
      },
      {
        question: 'Do you provide pandits for destination weddings?',
        answer: 'Yes, we provide pandits for weddings in Pune and surrounding areas. For destination weddings, please contact us for availability and arrangements.',
      },
    ],
  },
  'rudrabhishek-puja': {
    title: 'Rudrabhishek Puja',
    metaTitle: 'Rudrabhishek Puja in Pune | Lord Shiva Abhishekam',
    metaDescription: 'Book expert pandit for Rudrabhishek puja in Pune. Powerful puja for Lord Shiva. Removes obstacles, brings peace and prosperity.',
    focusKeyword: 'rudrabhishek puja pune',
    h1: 'Rudrabhishek Puja - Lord Shiva Abhishekam in Pune',
    intro: 'Rudrabhishek Puja is a powerful and sacred ritual performed to worship Lord Shiva. This puja involves the abhishekam (holy bath) of Shiva Lingam with various sacred substances, followed by chanting of Rudra mantras. It is one of the most effective pujas for removing obstacles, bringing peace, and ensuring prosperity.',
    ritualSteps: [
      'Ganpati Pujan',
      'Kalash Sthapana',
      'Shiva Lingam Abhishekam (with milk, water, honey, etc.)',
      'Rudra Mantra Chanting',
      'Havan with special samagri',
      'Aarti and Prasad',
    ],
    benefits: [
      'Removes obstacles and negative energies',
      'Brings peace and mental clarity',
      'Ensures prosperity and success',
      'Protects from evil influences',
      'Fulfills wishes and desires',
    ],
    cost: '₹3,000 - ₹7,000',
    duration: '2-4 hours',
    whoShouldBook: 'Individuals facing obstacles, health issues, or seeking peace and prosperity should book Rudrabhishek puja. It is especially powerful during Shravan month.',
    faqs: [
      {
        question: 'When is Rudrabhishek puja most effective?',
        answer: 'Rudrabhishek puja is most powerful on Mondays, during Shravan month, on Maha Shivratri, or on Pradosh days. However, it can be performed any day.',
      },
      {
        question: 'What items are used in Rudrabhishek?',
        answer: 'Rudrabhishek involves abhishekam with milk, water, honey, ghee, curd, bilva leaves, and other sacred substances as per tradition.',
      },
      {
        question: 'How long does Rudrabhishek puja take?',
        answer: 'A complete Rudrabhishek puja typically takes 2-4 hours, depending on the number of abhishekam rounds and mantras chanted.',
      },
    ],
  },
  'kaal-sarp-dosh-puja': {
    title: 'Kaal Sarp Dosh Puja',
    metaTitle: 'Kaal Sarp Dosh Puja in Pune | Remedy for Kaal Sarp Dosha',
    metaDescription: 'Book expert pandit for Kaal Sarp Dosh puja in Pune. Powerful remedy for Kaal Sarp dosha in horoscope. Remove obstacles and delays.',
    focusKeyword: 'kaal sarp dosh puja pune',
    h1: 'Kaal Sarp Dosh Puja - Remedy for Kaal Sarp Dosha in Pune',
    intro: 'Kaal Sarp Dosh is a significant astrological condition that occurs when all planets are positioned between Rahu and Ketu in a horoscope. This dosha can cause various obstacles, delays, and challenges in life. Kaal Sarp Dosh puja is a powerful remedy to neutralize the negative effects of this dosha and bring peace and prosperity.',
    ritualSteps: [
      'Ganpati Pujan',
      'Kalash Sthapana',
      'Rahu-Ketu Pujan',
      'Naga Puja and Havan',
      'Special mantras and rituals',
      'Aarti and Prasad',
    ],
    benefits: [
      'Neutralizes Kaal Sarp dosha effects',
      'Removes obstacles and delays',
      'Brings peace and stability',
      'Improves career and relationships',
      'Protects from negative influences',
    ],
    cost: '₹4,000 - ₹8,000',
    duration: '3-4 hours',
    whoShouldBook: 'Individuals with Kaal Sarp dosha in their horoscope, facing obstacles, delays, or challenges in life should book this puja for remedy.',
    faqs: [
      {
        question: 'How do I know if I have Kaal Sarp dosha?',
        answer: 'Kaal Sarp dosha is identified through horoscope analysis. If all planets are between Rahu and Ketu, the dosha is present. Consult an astrologer for confirmation.',
      },
      {
        question: 'How many times should Kaal Sarp dosh puja be performed?',
        answer: 'Typically, Kaal Sarp dosh puja is performed once, but it can be repeated if obstacles persist. Our pandit will advise based on your situation.',
      },
      {
        question: 'What is the best time for this puja?',
        answer: 'Kaal Sarp dosh puja is most effective on Nag Panchami, during Shravan month, or on auspicious dates. Our pandit will suggest the best muhurat.',
      },
    ],
  },
  'office-opening-puja': {
    title: 'Office Opening Puja',
    metaTitle: 'Office Opening Puja in Pune | Business Inauguration Puja',
    metaDescription: 'Book expert pandit for office opening puja in Pune. Business inauguration, shop opening, factory puja. Attract success and prosperity.',
    focusKeyword: 'office opening puja pune',
    h1: 'Office Opening Puja - Business Inauguration in Pune',
    intro: 'Office Opening Puja, also known as business inauguration puja, is performed when starting a new business, opening a new office, shop, or factory. This sacred ceremony invokes the blessings of deities for business success, prosperity, and growth. Our experienced pandits perform authentic office opening puja following Vedic traditions.',
    ritualSteps: [
      'Ganpati Pujan',
      'Kalash Sthapana',
      'Lakshmi-Ganesh Pujan',
      'Vastu Pujan',
      'Havan for prosperity',
      'Aarti and blessings',
    ],
    benefits: [
      'Attracts success and prosperity to business',
      'Removes obstacles to growth',
      'Ensures positive business energy',
      'Brings financial stability',
      'Protects from business losses',
    ],
    cost: '₹3,500 - ₹8,000',
    duration: '2-3 hours',
    whoShouldBook: 'Business owners opening new offices, shops, factories, or starting new ventures should book office opening puja for auspicious beginning.',
    faqs: [
      {
        question: 'When should office opening puja be performed?',
        answer: 'Office opening puja should be performed on an auspicious date before or on the day of business inauguration. Our pandit will suggest the best muhurat.',
      },
      {
        question: 'What is included in office opening puja?',
        answer: 'The puja includes Ganpati pujan, Lakshmi-Ganesh pujan, Vastu pujan, havan, and blessings for business success and prosperity.',
      },
      {
        question: 'Can this puja be done for existing businesses?',
        answer: 'Yes, office puja can be performed for existing businesses during renovation, expansion, or to remove obstacles and attract prosperity.',
      },
    ],
  },
  'ganesh-chaturthi-puja': {
    title: 'Ganesh Chaturthi Puja',
    metaTitle: 'Ganesh Chaturthi Puja in Pune | Ganesh Festival Puja',
    metaDescription: 'Book expert pandit for Ganesh Chaturthi puja in Pune. Ganesh festival celebrations, installation puja, and visarjan rituals.',
    focusKeyword: 'ganesh chaturthi puja pune',
    h1: 'Ganesh Chaturthi Puja - Ganesh Festival Celebrations in Pune',
    intro: 'Ganesh Chaturthi is one of the most celebrated festivals in Pune, dedicated to Lord Ganesha, the remover of obstacles. Ganesh Chaturthi puja involves the installation of Ganesha idol, daily puja during the festival, and visarjan (immersion) ceremony. Our expert pandits perform authentic Ganesh Chaturthi puja following traditional Maharashtrian customs.',
    ritualSteps: [
      'Ganpati Sthapana (Installation)',
      'Daily puja and aarti',
      'Modak and prasad offering',
      'Ganesh mantras and bhajans',
      'Visarjan puja and immersion',
    ],
    benefits: [
      'Removes obstacles and brings success',
      'Ensures peace and prosperity',
      'Brings happiness and joy to family',
      'Fulfills wishes and desires',
      'Protects from negative influences',
    ],
    cost: '₹2,000 - ₹5,000',
    duration: '1-2 hours (per day)',
    whoShouldBook: 'Families celebrating Ganesh Chaturthi, installing Ganesha at home, or organizing community celebrations should book Ganesh Chaturthi puja.',
    faqs: [
      {
        question: 'When is Ganesh Chaturthi celebrated?',
        answer: 'Ganesh Chaturthi is celebrated in the month of Bhadrapada (August-September) for 1.5, 3, 5, 7, or 10 days, depending on tradition.',
      },
      {
        question: 'What is Ganpati Sthapana?',
        answer: 'Ganpati Sthapana is the installation ceremony of Ganesha idol at home or workplace, performed on an auspicious muhurat during Ganesh Chaturthi.',
      },
      {
        question: 'Do you provide pandits for visarjan?',
        answer: 'Yes, we provide pandits for both installation (sthapana) and immersion (visarjan) ceremonies during Ganesh Chaturthi festival.',
      },
    ],
  },
  'navratri-puja': {
    title: 'Navratri Puja',
    metaTitle: 'Navratri Puja in Pune | Nine Nights Goddess Puja',
    metaDescription: 'Book expert pandit for Navratri puja in Pune. Nine nights of Goddess worship, Durga puja, and festival celebrations.',
    focusKeyword: 'navratri puja pune',
    h1: 'Navratri Puja - Nine Nights Goddess Worship in Pune',
    intro: 'Navratri is a nine-night festival dedicated to Goddess Durga and her various forms. Navratri puja involves daily worship of different forms of the Goddess, chanting of mantras, and performing special rituals. This powerful puja brings protection, prosperity, and spiritual growth. Our experienced pandits perform authentic Navratri puja following traditional Vedic methods.',
    ritualSteps: [
      'Kalash Sthapana',
      'Daily puja of different Goddess forms',
      'Durga Saptashati recitation',
      'Havan with special samagri',
      'Aarti and prasad',
    ],
    benefits: [
      'Brings protection and strength',
      'Removes obstacles and negative energies',
      'Ensures prosperity and success',
      'Brings spiritual growth',
      'Fulfills wishes and desires',
    ],
    cost: '₹3,000 - ₹6,000',
    duration: '1-2 hours (per day, for 9 days)',
    whoShouldBook: 'Families celebrating Navratri, seeking Goddess blessings, or wanting to perform nine nights of worship should book Navratri puja.',
    faqs: [
      {
        question: 'When is Navratri celebrated?',
        answer: 'Navratri is celebrated twice a year - Chaitra Navratri (March-April) and Sharad Navratri (September-October). Sharad Navratri is more widely celebrated.',
      },
      {
        question: 'What is Kalash Sthapana?',
        answer: 'Kalash Sthapana is the installation of a sacred pot (kalash) representing the Goddess, performed on the first day of Navratri at an auspicious time.',
      },
      {
        question: 'Do you provide daily puja for all 9 days?',
        answer: 'Yes, we provide pandits for daily puja throughout the nine days of Navratri, or for specific days as per your requirement.',
      },
    ],
  },
  'diwali-puja': {
    title: 'Diwali Puja',
    metaTitle: 'Diwali Puja in Pune | Lakshmi-Ganesh Puja for Diwali',
    metaDescription: 'Book expert pandit for Diwali puja in Pune. Lakshmi-Ganesh puja, Diwali celebrations, and festival rituals. Same-day booking available.',
    focusKeyword: 'diwali puja pune',
    h1: 'Diwali Puja - Lakshmi-Ganesh Puja for Diwali in Pune',
    intro: 'Diwali, the festival of lights, is one of the most important Hindu festivals. Diwali puja, especially Lakshmi-Ganesh puja, is performed to invoke the blessings of Goddess Lakshmi (wealth) and Lord Ganesha (remover of obstacles) for prosperity and success. Our expert pandits perform authentic Diwali puja following traditional customs.',
    ritualSteps: [
      'Ganpati Pujan',
      'Lakshmi Pujan',
      'Kalash Sthapana',
      'Havan with special samagri',
      'Aarti with diyas',
      'Prasad distribution',
    ],
    benefits: [
      'Attracts wealth and prosperity',
      'Removes obstacles and brings success',
      'Brings happiness and joy to family',
      'Ensures financial stability',
      'Protects from negative influences',
    ],
    cost: '₹2,500 - ₹5,500',
    duration: '2-3 hours',
    whoShouldBook: 'Families celebrating Diwali, seeking prosperity, or wanting to perform traditional Lakshmi-Ganesh puja should book Diwali puja.',
    faqs: [
      {
        question: 'When is Diwali puja performed?',
        answer: 'Diwali puja is performed on Diwali day during the evening, at the most auspicious time (Lakshmi puja muhurat). Our pandit will guide you on the exact timing.',
      },
      {
        question: 'What is the significance of Lakshmi-Ganesh puja?',
        answer: 'Lakshmi-Ganesh puja combines the blessings of wealth (Lakshmi) and obstacle removal (Ganesha), ensuring prosperity and success throughout the year.',
      },
      {
        question: 'What items are needed for Diwali puja?',
        answer: 'Essential items include Lakshmi-Ganesh idols, kalash, diyas, flowers, fruits, sweets, incense, and puja samagri. Our pandit will provide a complete list.',
      },
    ],
  },
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require('fs')
  const path = require('path')

  // Get all existing files in pages/puja-services
  const pagesDirectory = path.join(process.cwd(), 'pages/puja-services')
  const filenames = fs.readdirSync(pagesDirectory)

  // Create a set of existing pages (removing .tsx extension)
  const existingPages = new Set(filenames.map((file: string) => file.replace(/\.tsx$/, '')))

  // Filter out pujas that already have a static page
  const paths = allPujaServices
    .filter(puja => !existingPages.has(puja))
    .map((puja) => ({
      params: { 'puja-name': puja },
    }))

  return {
    paths,
    fallback: false, // Return 404 for pages not in getStaticPaths
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pujaName = params?.['puja-name'] as string

  // Try to find the puja data in our specific mapping first, then fall back to the generic helper
  const puja = pujaData[pujaName] || getPujaData(pujaName)

  if (!puja) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      puja,
    },
  }
}

export default function PujaServicePage({ puja }: { puja: any }) {

  // JSON-LD Schema for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: puja.title,
    description: puja.metaDescription,
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
      price: puja.cost,
      priceCurrency: 'INR',
    },
  }

  return (
    <>
      <Head>
        <title>{puja.metaTitle}</title>
        <meta name="description" content={puja.metaDescription} />
        <meta name="keywords" content={puja.focusKeyword} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <Header />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-saffron-600">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/puja-services" className="text-gray-600 hover:text-saffron-600">
                Puja Services
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{puja.title}</span>
            </div>
          </div>
        </nav>

        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                {puja.h1}
              </h1>

              {/* Intro */}
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">{puja.intro}</p>
              </div>

              {/* Ritual Steps */}
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Ritual Steps
                </h2>
                <ul className="space-y-3">
                  {puja.ritualSteps.map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {puja.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-saffron-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Cost & Duration */}
              <section className="mb-8 bg-saffron-50 rounded-lg p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Cost & Duration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Cost:</span>
                    <p className="text-xl font-semibold text-gray-900">{puja.cost}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Duration:</span>
                    <p className="text-xl font-semibold text-gray-900">{puja.duration}</p>
                  </div>
                </div>
              </section>

              {/* Who Should Book */}
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Who Should Book
                </h2>
                <p className="text-gray-700 leading-relaxed">{puja.whoShouldBook}</p>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {puja.faqs.map((faq: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Internal Links */}
              <section className="mb-8 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Related Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {allPujaServices
                    .filter((key) => key !== puja.slug)
                    .slice(0, 6)
                    .map((key) => {
                      const relatedPuja = pujaData[key] || getPujaData(key)
                      return (
                        <Link
                          key={key}
                          href={`/puja-services/${key}`}
                          className="text-saffron-600 hover:text-saffron-700 hover:underline"
                        >
                          {relatedPuja.title}
                        </Link>
                      )
                    })}
                </div>
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Explore More</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href="/puja-services" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Browse All Puja Services →
                    </Link>
                    <Link href="/pandits" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      View All Pandits →
                    </Link>
                    <Link href="/pandit-services/pune" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Pandits in Pune →
                    </Link>
                    <Link href="/astrology" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                      Astrology Services →
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - Booking Form */}
            {/* Sidebar - Booking Form Removed */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* <BookingForm /> removed */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Book Now</h3>
                  <p className="text-gray-600 mb-4">Call us to book this puja:</p>
                  <a href="tel:+918446272142" className="block w-full bg-saffron-600 text-white text-center py-3 rounded-lg font-bold hover:bg-saffron-700 transition-colors mb-4">
                    +91-8446272142
                  </a>
                  <a href="https://wa.me/918446272142" className="block w-full border-2 border-green-500 text-green-600 text-center py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
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
