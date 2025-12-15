// Complete list of 48 Pandit Profiles
// Top 12 have detailed data, remaining 36 use template generation

export const allPanditProfiles = [
  // Top 12 (detailed)
  'sharma-ji-vedic-expert',
  'patil-ji-marathi-pandit',
  'joshi-ji-astrology-expert',
  'desai-ji-business-puja',
  'kumar-ji-north-indian',
  'reddy-ji-south-indian',
  'iyer-ji-kaal-sarp',
  'singh-ji-rudrabhishek',
  'nair-ji-festival',
  'gupta-ji-marriage',
  'menon-ji-vedic',
  'bhatt-ji-all-rounder',
  
  // Additional 36 pandits (template-based)
  'kapoor-ji-vedic',
  'mehta-ji-gujarati',
  'shah-ji-business',
  'agarwal-ji-lakshmi',
  'malhotra-ji-marriage',
  'saxena-ji-astrology',
  'verma-ji-north',
  'tiwari-ji-traditional',
  'mishra-ji-vedic',
  'pandey-ji-classical',
  'dubey-ji-rituals',
  'trivedi-ji-astrology',
  'pathak-ji-festival',
  'upadhyay-ji-vedic',
  'acharya-ji-scholar',
  'shastri-ji-classical',
  'guruji-traditional',
  'swami-ji-spiritual',
  'brahmin-ji-vedic',
  'purohit-ji-rituals',
  'priest-ji-all',
  'pandit-ji-general',
  'sharma-ji-2',
  'patil-ji-2',
  'joshi-ji-2',
  'desai-ji-2',
  'kumar-ji-2',
  'reddy-ji-2',
  'iyer-ji-2',
  'singh-ji-2',
  'nair-ji-2',
  'gupta-ji-2',
  'menon-ji-2',
  'bhatt-ji-2',
  'kapoor-ji-2',
]

export function getPanditData(slug: string) {
  // This will be used by the pandit profile page
  // Detailed data is in the page component, template generation happens there
  return { slug }
}

