import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOHeadProps {
    title: string
    description: string
    keywords?: string
    canonicalUrl?: string
    ogImage?: string
    ogType?: 'website' | 'article' | 'profile'
    schema?: object | object[] // JSON-LD Schema
    children?: React.ReactNode
}

export const SEOHead = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    schema,
    children,
}: SEOHeadProps) => {
    const router = useRouter()
    const siteUrl = 'https://panditforpujabooking.com'
    const currentUrl = canonicalUrl || `${siteUrl}${router.asPath.split('?')[0]}`
    const defaultImage = `${siteUrl}/og-image.jpg` // Ensure this image exists in public folder
    const finalImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : defaultImage

    // Default keywords focusing on Pune SEO
    const defaultKeywords = 'pandit for puja in pune, book pandit online, hindi pandit in pune, marathi guruji pune, puja services pune, vedic pandit'
    const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={finalKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#800000" /> {/* Maroon for brand consistency */}

            <link rel="canonical" href={currentUrl} />

            {/* Hreflang Tags for Multi-language Support */}
            <link rel="alternate" hrefLang="en" href={currentUrl} />
            <link rel="alternate" hrefLang="x-default" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:site_name" content="Pandit For Puja Booking" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={finalImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            )}

            {children}
        </Head>
    )
}
