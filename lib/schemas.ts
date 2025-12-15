/**
 * Expert SEO Schema Generators for PanditForPujaBooking.com
 * These schemas follow the latest Google Structured Data guidelines (JSON-LD)
 */

// 1. Breadcrumb Schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

// 2. FAQ Schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

// 3. Service Schema (For Puja Pages)
export const generateServiceSchema = (data: {
    name: string
    description: string
    image?: string
    price?: string
    reviewCount: string
    ratingValue: string
    url: string
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Pandit For Puja Booking',
            telephone: '+91-8446272142',
            image: 'https://panditforpujabooking.com/logo.png', // Update with actual logo URL
        },
        areaServed: {
            '@type': 'City',
            name: 'Pune',
        },
        url: data.url,
        image: data.image || 'https://panditforpujabooking.com/og-image.jpg',
        offers: {
            '@type': 'Offer',
            price: data.price || '3500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: data.ratingValue,
            reviewCount: data.reviewCount,
        },
    }
}

// 4. Local Business Schema (Enhanced for Pune)
export const generateLocalBusinessSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Pandit For Puja Booking',
        image: 'https://panditforpujabooking.com/og-image.jpg',
        telephone: '+91-8446272142',
        email: 'contact@panditforpujabooking.com',
        url: 'https://panditforpujabooking.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Pune',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            postalCode: '411001',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '18.5204',
            longitude: '73.8567',
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Pune'
            },
            {
                '@type': 'City',
                name: 'Pimpri-Chinchwad'
            },
            {
                '@type': 'City',
                name: 'Mumbai'
            }
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '06:00',
            closes: '22:00',
        },
        sameAs: [
            'https://www.facebook.com/panditforpujabooking',
            'https://www.instagram.com/panditforpujabooking',
            'https://g.page/pandit-for-puja-booking?share', // Google My Business Integration
        ],
        hasMap: 'https://maps.google.com/maps?cid=YOUR_GOOGLE_HMAP_CID', // Location-based service area map
        priceRange: '₹₹',

    }
}

// 6. Event Schema (For Muhurat Dates/Workshops)
export const generateEventSchema = (data: {
    name: string
    description: string
    startDate: string
    endDate: string
    location?: {
        name: string
        address: string
    }
    image?: string
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: data.location?.name || 'Pandit For Puja Booking HQ',
            address: {
                '@type': 'PostalAddress',
                streetAddress: data.location?.address || 'Pune, Maharashtra',
                addressLocality: 'Pune',
                addressRegion: 'MH',
                postalCode: '411001',
                addressCountry: 'IN',
            },
        },
        image: [data.image || 'https://panditforpujabooking.com/event-default.jpg'],
        organizer: {
            '@type': 'Organization',
            name: 'Pandit For Puja Booking',
            url: 'https://panditforpujabooking.com',
        },
    }
}

// 7. Video Object Schema (For future video content)
export const generateVideoSchema = (data: {
    name: string
    description: string
    uploadDate: string
    thumbnailUrl: string
    contentUrl?: string
    embedUrl?: string
    duration?: string // ISO 8601 format (e.g., PT1M30S)
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: data.name,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl,
        uploadDate: data.uploadDate,
        contentUrl: data.contentUrl || 'https://panditforpujabooking.com/videos/sample.mp4',
        embedUrl: data.embedUrl,
        duration: data.duration,
        publisher: {
            '@type': 'Organization',
            name: 'Pandit For Puja Booking',
            logo: {
                '@type': 'ImageObject',
                url: 'https://panditforpujabooking.com/logo.png',
            },
        },
    }
}
// 5. Organization Schema
export const generateOrganizationSchema = () => {
    return {
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
}

// 6. Review Schema
export const generateReviewSchema = (reviews: { author: string; date: string; rating: number; text: string }[]) => {
    return reviews.map((review) => ({
        '@type': 'Review',
        author: {
            '@type': 'Person',
            name: review.author,
        },
        datePublished: review.date,
        reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: '5',
        },
        reviewBody: review.text,
    }))
}

// 7. Blog Post Schema
export const generateArticleSchema = (data: {
    title: string
    description: string
    image: string
    datePublished: string
    dateModified: string
    authorName: string
    url: string
}) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
            '@type': 'Person',
            name: data.authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pandit For Puja Booking',
            logo: {
                '@type': 'ImageObject',
                url: 'https://panditforpujabooking.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
        },
    }
}
