import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Toaster } from 'react-hot-toast'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

// Optimize fonts with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pandit For Puja Booking',
    url: 'https://panditforpujabooking.com',
    logo: 'https://panditforpujabooking.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8446272142',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
    sameAs: [
      'https://www.facebook.com/panditforpujabooking',
      'https://www.instagram.com/panditforpujabooking',
    ],
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-playfair: ${playfair.style.fontFamily};
        }
      `}</style>
      <main className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
        <WhatsAppButton />
        <Toaster position="bottom-center" />
      </main>
    </>
  )
}
