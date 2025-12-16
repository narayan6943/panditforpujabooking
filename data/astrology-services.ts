export const allAstrologyServices = [
  'kundli-making-in-pune',
  'horoscope-reading-in-pune',
  'matchmaking-in-pune',
  'gemstone-consultation-in-pune',
  'vastu-consultation-in-pune',
  'numerology-in-pune',
  'palm-reading-in-pune',
  'face-reading-in-pune',
  'birth-chart-analysis-in-pune',
  'dasha-prediction-in-pune',
  'remedy-suggestions-in-pune',
  'career-astrology-in-pune',
  'marriage-astrology-in-pune',
  'health-astrology-in-pune',
  'business-astrology-in-pune',
  'education-astrology-in-pune',
  'child-astrology-in-pune',
  'muhurat-selection-in-pune',
  'yearly-prediction-in-pune',
  'compatibility-analysis-in-pune',
]

const astrologyData: Record<string, any> = {
  'kundli-making-in-pune': {
    title: 'Kundli Making in Pune',
    slug: 'kundli-making-in-pune',
    description: 'Get your kundli (birth chart) made by expert astrologers in Pune. Accurate birth chart analysis based on date, time, and place of birth.',
    cost: '₹500 - ₹2,000',
    duration: '30-60 minutes',
    image: '/images/kundli-hero.png', // Fallback or distinct image needed
    content: 'Our expert astrologers in Pune prepare detailed Janam Kundli based on Vedic Astrology principles. This includes accurate planetary positions, dashas, and predictions.',
    faq: [
      { question: 'What details are needed for Kundli Making?', answer: 'We need your exact Date of Birth, Time of Birth, and Place of Birth.' },
      { question: 'Do you provide a soft copy or hard copy?', answer: 'We provide a detailed PDF soft copy. Hard copies can be arranged on request.' }
    ]
  },
  'horoscope-reading-in-pune': {
    title: 'Horoscope Reading in Pune',
    slug: 'horoscope-reading-in-pune',
    description: 'Get detailed horoscope reading from expert astrologers in Pune. Understand your future, career, relationships, and life predictions.',
    cost: '₹1,000 - ₹3,000',
    duration: '1-2 hours',
    content: 'Comprehensive analysis of your horoscope to provide insights into your life path, upcoming opportunities, and challenges. Personal guidance from experienced astrologers.',
    faq: [
      { question: 'Can I ask specific questions?', answer: 'Yes, you can ask detailed questions about career, marriage, health, etc.' }
    ]
  },
  'matchmaking-in-pune': {
    title: 'Matchmaking in Pune',
    slug: 'matchmaking-in-pune',
    description: 'Get kundli matching done by expert astrologers in Pune. Check marriage compatibility, gun milan, and get detailed matchmaking report.',
    cost: '₹1,500 - ₹3,500',
    duration: '1-1.5 hours',
    content: 'Vedic Kundli Matching for marriage. We analyze Gun Milan, Mangal Dosh, Bhakoot Dosh, and overall compatibility for a happy married life.',
    faq: [
      { question: 'How many Guns match is considered good?', answer: 'Generally, 18+ Guns are considered acceptable, but our astrologers analyze the complete chart for better compatibility.' }
    ]
  },
  'gemstone-consultation-in-pune': {
    title: 'Gemstone Consultation in Pune',
    slug: 'gemstone-consultation-in-pune',
    description: 'Get expert gemstone consultation service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Find the perfect gemstone (Lucky Stone) to enhance your luck and suppress negative planetary effects. Our experts recommend stones based on your lagna and dasha.',
    faq: [
      { question: 'Do you sell gemstones too?', answer: 'We provide consultation and can recommend trusted sellers suitable for your budget.' }
    ]
  },
  'vastu-consultation-in-pune': {
    title: 'Vastu Consultation in Pune',
    slug: 'vastu-consultation-in-pune',
    description: 'Get expert vastu consultation service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Expert Vastu Shastra consultation for your home or office. Optimize the energy flow to bring prosperity, health, and peace.',
    faq: []
  },
  'numerology-in-pune': {
    title: 'Numerology in Pune',
    slug: 'numerology-in-pune',
    description: 'Get expert numerology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Unlock the power of numbers. We analyze your birth date and name to suggest corrections and lucky numbers for success.',
    faq: []
  },
  'palm-reading-in-pune': {
    title: 'Palm Reading in Pune',
    slug: 'palm-reading-in-pune',
    description: 'Get expert palm reading service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Ancient art of Palmistry. Our experts analyze the lines on your palm to predict your nature, future, and fortune.',
    faq: []
  },
  'face-reading-in-pune': {
    title: 'Face Reading in Pune',
    slug: 'face-reading-in-pune',
    description: 'Get expert face reading service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Physiognomy or Face Reading consultation. Understand personality traits and destiny by analyzing facial features.',
    faq: []
  },
  'birth-chart-analysis-in-pune': {
    title: 'Birth Chart Analysis in Pune',
    slug: 'birth-chart-analysis-in-pune',
    description: 'Get expert birth chart analysis service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Deep dive into your natal chart. Understand the planetary positions at the time of your birth and their lifelong impact.',
    faq: []
  },
  'dasha-prediction-in-pune': {
    title: 'Dasha Prediction in Pune',
    slug: 'dasha-prediction-in-pune',
    description: 'Get expert dasha prediction service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Analysis of current Mahadasha and Antardasha. Know what the current time period holds for you and how to navigate it.',
    faq: []
  },
  'remedy-suggestions-in-pune': {
    title: 'Remedy Suggestions in Pune',
    slug: 'remedy-suggestions-in-pune',
    description: 'Get expert remedy suggestions service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Effective Vedic remedies (Upay) for doshas and problems. Includes Mantra chanting, donations, and simple rituals.',
    faq: []
  },
  'career-astrology-in-pune': {
    title: 'Career Astrology in Pune',
    slug: 'career-astrology-in-pune',
    description: 'Get expert career astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Confused about career choices? Our astrologers guide you towards the right profession, business suitability, and job change timings.',
    faq: []
  },
  'marriage-astrology-in-pune': {
    title: 'Marriage Astrology in Pune',
    slug: 'marriage-astrology-in-pune',
    description: 'Get expert marriage astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Predictions regarding marriage timing, spouse characteristics, and married life. Solutions for delays in marriage.',
    faq: []
  },
  'health-astrology-in-pune': {
    title: 'Health Astrology in Pune',
    slug: 'health-astrology-in-pune',
    description: 'Get expert health astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Astrological insights into health issues. Identify potential health risks based on your chart and take preventive measures.',
    faq: []
  },
  'business-astrology-in-pune': {
    title: 'Business Astrology in Pune',
    slug: 'business-astrology-in-pune',
    description: 'Get expert business astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Guidance for business owners. Best time for new ventures, partnerships, and strategies for growth.',
    faq: []
  },
  'education-astrology-in-pune': {
    title: 'Education Astrology in Pune',
    slug: 'education-astrology-in-pune',
    description: 'Get expert education astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Education and subject selection guidance for students. Solutions for concentration issues and exam success.',
    faq: []
  },
  'child-astrology-in-pune': {
    title: 'Child Astrology in Pune',
    slug: 'child-astrology-in-pune',
    description: 'Get expert child astrology service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Understand your child\'s potential, talents, and health. Guidance for parents on raising their child according to their nature.',
    faq: []
  },
  'muhurat-selection-in-pune': {
    title: 'Muhurat Selection in Pune',
    slug: 'muhurat-selection-in-pune',
    description: 'Get expert muhurat selection service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Find the most auspicious time (Muhurat) for important events like marriage, griha pravesh, vehicle purchase, or starting a business.',
    faq: []
  },
  'yearly-prediction-in-pune': {
    title: 'Yearly Prediction in Pune',
    slug: 'yearly-prediction-in-pune',
    description: 'Get expert yearly prediction service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Detailed predictions for the upcoming year (Varshaphal). Month-by-month guidance for planning your year ahead.',
    faq: []
  },
  'compatibility-analysis-in-pune': {
    title: 'Compatibility Analysis in Pune',
    slug: 'compatibility-analysis-in-pune',
    description: 'Get expert compatibility analysis service in Pune. Professional astrology consultation with accurate predictions and remedies.',
    cost: '₹800 - ₹2,500',
    duration: '45-90 minutes',
    content: 'Check compatibility with partners, friends, or business associates. Understand relationship dynamics.',
    faq: []
  }
}

export function getAstrologyData(slug: string) {
  return astrologyData[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' in Pune',
    slug: slug,
    description: 'Professional astrology consultation in Pune.',
    cost: '₹800 - ₹2,500',
    duration: '45-60 minutes',
    content: 'Detailed consultation with expert astrologer.',
    faq: [],
    image: '/images/kundli-hero.png'
  }
}
