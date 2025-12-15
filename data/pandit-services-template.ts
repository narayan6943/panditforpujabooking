// Template generator for locations not in base data
export function getLocationTemplate(slug: string) {
    const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

    // Determine if it's a major city or area
    const isMajorCity = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata'].includes(slug)
    const isPuneArea = !isMajorCity && slug !== 'pune'

    return {
        name: slug,
        displayName: name,
        metaTitle: `Pandit Services in ${name} | Book Verified Pandits Online`,
        metaDescription: `Book verified pandits in ${name}. Same-day booking available. Expert pandits for all pujas and astrology services.`,
        h1: `Pandit Services in ${name}`,
        intro: `${name} ${isPuneArea ? 'is a' : 'is'} ${isMajorCity ? 'major city' : 'area'} ${isPuneArea ? 'in Pune' : ''} with a growing community seeking authentic spiritual services. Our verified pandits in ${name} are available for all types of pujas including Griha Pravesh, marriage ceremonies, festival pujas, and astrology services.`,
        popularPujas: ['Griha Pravesh Puja', 'Lakshmi Puja', 'Marriage Puja', 'Satyanarayan Puja'],
        panditCount: isMajorCity ? 15 : 8,
        areas: [name, 'Nearby Areas'],
    }
}
