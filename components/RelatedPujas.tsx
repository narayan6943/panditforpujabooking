import React from 'react'
import Link from 'next/link'
import { getPujaData } from '@/data/puja-services'

interface RelatedPuja {
    slug: string
    title: string
    category?: string
}

interface RelatedPujasProps {
    currentSlug: string
    relatedSlugs?: string[]
    category?: string
    maxItems?: number
}

/**
 * RelatedPujas Component
 * 
 * Displays a grid of related puja services to improve internal linking and user navigation.
 * Can work in two modes:
 * 1. Manual: Pass specific related slugs
 * 2. Auto: Automatically suggests related pujas based on category
 * 
 * @param currentSlug - The slug of the current puja page (to exclude from suggestions)
 * @param relatedSlugs - Optional array of specific puja slugs to display
 * @param category - Optional category to auto-suggest related pujas
 * @param maxItems - Maximum number of related pujas to display (default: 4)
 */
export const RelatedPujas: React.FC<RelatedPujasProps> = ({
    currentSlug,
    relatedSlugs,
    category,
    maxItems = 4
}) => {
    // Define category-based suggestions
    const categorySuggestions: Record<string, string[]> = {
        'home-property': [
            'griha-pravesh-puja',
            'bhoomi-pujan',
            'vastu-shanti-puja',
            'office-opening-puja',
            'vastu-puja'
        ],
        'wealth-prosperity': [
            'lakshmi-puja',
            'kuber-puja',
            'dhanteras-puja',
            'diwali-lakshmi-puja',
            'vaibhav-lakshmi-vrat'
        ],
        'marriage-family': [
            'marriage-puja',
            'vivah-puja',
            'engagement-puja-sagai',
            'namkaran-puja',
            'naamkaran-sanskar',
            'annaprashan-first-rice',
            'mundan-sanskar'
        ],
        'health-wellbeing': [
            'mahamrityunjaya-puja',
            'rudrabhishek-puja',
            'shani-puja',
            'navagraha-puja',
            'maha-mrityunjaya-havan'
        ],
        'festivals': [
            'ganesh-chaturthi-puja',
            'diwali-lakshmi-puja',
            'navratri-puja',
            'durga-puja',
            'holi-puja'
        ],
        'vrat-udyapan': [
            'satyanarayan-vrat-udyapan',
            'santoshi-mata-vrat-udyapan',
            'pradosh-vrat-udyapan',
            'ekadashi-vrat-udyapan'
        ],
        'remedies': [
            'kaal-sarp-dosh-shanti',
            'mangal-dosh-shanti',
            'shani-shanti-puja',
            'pitra-dosh-shanti',
            'nadi-dosh-shanti'
        ],
        'goddess': [
            'lakshmi-puja',
            'saraswati-puja',
            'durga-puja',
            'kali-puja',
            'santoshi-mata-vrat'
        ],
        'god': [
            'ganesh-puja',
            'shiva-puja',
            'vishnu-puja',
            'hanuman-puja',
            'satyanarayan-puja'
        ]
    }

    // Popular pujas as fallback
    const popularPujas = [
        'griha-pravesh-puja',
        'satyanarayan-puja',
        'marriage-puja',
        'lakshmi-puja',
        'ganesh-puja',
        'rudrabhishek-puja',
        'navagraha-puja',
        'vastu-shanti-puja'
    ]

    // Determine which pujas to display
    let displayPujas: string[] = []

    if (relatedSlugs && relatedSlugs.length > 0) {
        // Use manually specified related pujas
        displayPujas = relatedSlugs
    } else if (category && categorySuggestions[category]) {
        // Use category-based suggestions
        displayPujas = categorySuggestions[category]
    } else {
        // Fallback to popular pujas
        displayPujas = popularPujas
    }

    // Filter out current puja and limit to maxItems
    const filteredPujas = displayPujas
        .filter((slug: string) => slug !== currentSlug)
        .slice(0, maxItems)

    // If we don't have enough pujas, return null
    if (filteredPujas.length === 0) {
        return null
    }

    return (
        <section className="bg-gradient-to-br from-saffron-50/50 to-gold-50/30 rounded-2xl p-8 border border-gold-200">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-2">
                    Related Puja Services
                </h2>
                <p className="text-gray-600">
                    Explore other authentic Vedic rituals performed by our expert pandits
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPujas.map((slug: string) => {
                    const puja = getPujaData(slug)
                    const displayName = slug
                        .split('-')
                        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')

                    return (
                        <Link
                            key={slug}
                            href={`/puja-services/${slug}`}
                            className="group bg-white rounded-xl p-5 border-2 border-transparent hover:border-gold-400 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-maroon-100 to-saffron-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">🕉️</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-maroon-900 group-hover:text-saffron-700 transition-colors mb-1 line-clamp-2">
                                        {displayName}
                                    </h3>
                                    {puja.metaDescription && (
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {puja.metaDescription}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs font-semibold text-saffron-600">
                                            From ₹{puja.cost || '2,000'}
                                        </span>
                                        <span className="text-xs text-gray-400">•</span>
                                        <span className="text-xs text-gray-500">
                                            Learn more →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {/* View All CTA */}
            <div className="mt-6 text-center">
                <Link
                    href="/puja-services"
                    className="inline-flex items-center gap-2 text-maroon-700 hover:text-maroon-900 font-semibold transition-colors"
                >
                    <span>View All Puja Services</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
