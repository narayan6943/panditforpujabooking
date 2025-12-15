// List of 20 Astrology Services from masterplan
export const allAstrologyServices = [
  'kundli-making',
  'horoscope-reading',
  'matchmaking',
  'gemstone-consultation',
  'vastu-consultation',
  'numerology',
  'palm-reading',
  'face-reading',
  'birth-chart-analysis',
  'dasha-prediction',
  'remedy-suggestions',
  'career-astrology',
  'marriage-astrology',
  'health-astrology',
  'business-astrology',
  'education-astrology',
  'child-astrology',
  'muhurat-selection',
  'yearly-prediction',
  'compatibility-analysis',
]

export function getAstrologyData(slug: string) {
  const baseData: Record<string, any> = {
    'kundli-making': {
      title: 'Kundli Making',
      metaTitle: 'Kundli Making in Pune | Birth Chart Creation Online',
      metaDescription: 'Get your kundli (birth chart) made by expert astrologers in Pune. Accurate birth chart analysis based on date, time, and place of birth.',
      focusKeyword: 'kundli making pune',
      h1: 'Kundli Making - Birth Chart Creation in Pune',
      intro: 'Kundli, also known as birth chart or horoscope, is a detailed astrological chart created based on your date, time, and place of birth. Our expert astrologers in Pune create accurate kundlis using traditional Vedic astrology methods, providing insights into your personality, life events, and future predictions.',
      serviceDetails: [
        'Accurate birth chart calculation',
        'Planetary positions and houses',
        'Nakshatra and Rashi analysis',
        'Dasha and Mahadasha predictions',
        'Detailed kundli report',
      ],
      benefits: [
        'Understand your personality traits',
        'Know your strengths and weaknesses',
        'Get insights into career and relationships',
        'Plan important life decisions',
        'Understand planetary influences',
      ],
      cost: '₹500 - ₹2,000',
      duration: '30-60 minutes',
      whoShouldBook: 'Anyone wanting to understand their birth chart, plan important decisions, or get astrological insights should get their kundli made.',
      faqs: [
        {
          question: 'What information is needed for kundli making?',
          answer: 'You need your exact date, time, and place of birth. The more accurate the time, the more precise your kundli will be.',
        },
        {
          question: 'How long does it take to make a kundli?',
          answer: 'A basic kundli can be created in 30 minutes, while a detailed analysis may take up to 1 hour.',
        },
        {
          question: 'Do I get a physical copy of my kundli?',
          answer: 'Yes, you receive both digital and physical copies of your kundli with detailed explanations.',
        },
      ],
    },
    'horoscope-reading': {
      title: 'Horoscope Reading',
      metaTitle: 'Horoscope Reading in Pune | Expert Astrology Consultation',
      metaDescription: 'Get detailed horoscope reading from expert astrologers in Pune. Understand your future, career, relationships, and life predictions.',
      focusKeyword: 'horoscope reading pune',
      h1: 'Horoscope Reading - Expert Astrology Consultation in Pune',
      intro: 'Horoscope reading is a comprehensive analysis of your birth chart to understand your past, present, and future. Our expert astrologers in Pune provide detailed horoscope readings covering all aspects of life including career, health, relationships, finances, and spiritual growth.',
      serviceDetails: [
        'Complete birth chart analysis',
        'Planetary influences and effects',
        'Career and financial predictions',
        'Relationship and marriage analysis',
        'Health and wellness insights',
        'Remedies and solutions',
      ],
      benefits: [
        'Understand your life path and destiny',
        'Get predictions for important life events',
        'Know favorable and unfavorable periods',
        'Receive guidance for decision making',
        'Understand karmic influences',
      ],
      cost: '₹1,000 - ₹3,000',
      duration: '1-2 hours',
      whoShouldBook: 'Individuals seeking guidance about their future, facing life challenges, or wanting to understand their destiny should book horoscope reading.',
      faqs: [
        {
          question: 'What does a horoscope reading include?',
          answer: 'A complete horoscope reading includes analysis of all 12 houses, planetary positions, dasha predictions, and remedies for any doshas or challenges.',
        },
        {
          question: 'How accurate are horoscope predictions?',
          answer: 'Vedic astrology predictions are highly accurate when done by experienced astrologers using correct birth details and traditional methods.',
        },
        {
          question: 'Can horoscope reading help with decision making?',
          answer: 'Yes, horoscope reading provides insights into favorable timings and helps you make informed decisions about career, relationships, and important life events.',
        },
      ],
    },
    'matchmaking': {
      title: 'Matchmaking',
      metaTitle: 'Matchmaking in Pune | Kundli Matching for Marriage',
      metaDescription: 'Get kundli matching done by expert astrologers in Pune. Check marriage compatibility, gun milan, and get detailed matchmaking report.',
      focusKeyword: 'matchmaking pune',
      h1: 'Matchmaking - Kundli Matching for Marriage in Pune',
      intro: 'Matchmaking, also known as kundli matching or gun milan, is a traditional Vedic astrology method to check compatibility between two individuals before marriage. Our expert astrologers in Pune perform detailed kundli matching to ensure a harmonious and successful married life.',
      serviceDetails: [
        'Gun Milan (36-point matching)',
        'Nadi Dosha check',
        'Mangal Dosha analysis',
        'Planetary compatibility',
        'Dasha compatibility',
        'Detailed matchmaking report',
      ],
      benefits: [
        'Ensure marital compatibility',
        'Identify potential challenges',
        'Get remedies for doshas',
        'Plan auspicious marriage dates',
        'Ensure long-lasting relationship',
      ],
      cost: '₹1,500 - ₹3,500',
      duration: '1-1.5 hours',
      whoShouldBook: 'Couples planning to get married, families arranging marriages, or anyone wanting to check compatibility should book matchmaking service.',
      faqs: [
        {
          question: 'What is Gun Milan in matchmaking?',
          answer: 'Gun Milan is a 36-point compatibility system that checks 8 different aspects of compatibility between two individuals. Higher gun milan indicates better compatibility.',
        },
        {
          question: 'What if there are doshas in matchmaking?',
          answer: 'Our astrologers will identify any doshas and provide specific remedies and solutions to neutralize their effects.',
        },
        {
          question: 'How important is matchmaking before marriage?',
          answer: 'Matchmaking is considered very important in Hindu tradition as it helps ensure compatibility, harmony, and success in married life.',
        },
      ],
    },
  }

  // For services not in baseData, generate template
  if (!baseData[slug]) {
    const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    return {
      title: name,
      metaTitle: `${name} in Pune | Expert Astrology Service`,
      metaDescription: `Get expert ${name.toLowerCase()} service in Pune. Professional astrology consultation with accurate predictions and remedies.`,
      focusKeyword: `${slug} pune`,
      h1: `${name} - Expert Astrology Service in Pune`,
      intro: `${name} is a specialized astrology service that provides detailed insights and predictions. Our expert astrologers in Pune use traditional Vedic astrology methods to provide accurate ${name.toLowerCase()} with personalized guidance and remedies.`,
      serviceDetails: [
        'Detailed astrological analysis',
        'Personalized predictions',
        'Remedies and solutions',
        'Guidance for decision making',
        'Follow-up consultation',
      ],
      benefits: [
        'Get accurate astrological insights',
        'Understand your life path',
        'Receive personalized guidance',
        'Get remedies for challenges',
        'Plan your future effectively',
      ],
      cost: '₹800 - ₹2,500',
      duration: '45-90 minutes',
      whoShouldBook: `Individuals seeking ${name.toLowerCase()} services, facing life challenges, or wanting astrological guidance should book this service.`,
      faqs: [
        {
          question: `What does ${name.toLowerCase()} include?`,
          answer: `${name} includes detailed astrological analysis, predictions, personalized guidance, and remedies based on your birth chart.`,
        },
        {
          question: 'How accurate are the predictions?',
          answer: 'Our expert astrologers use traditional Vedic methods and accurate birth details to provide highly reliable predictions.',
        },
        {
          question: 'Do I need my birth details?',
          answer: 'Yes, accurate date, time, and place of birth are essential for precise astrological analysis and predictions.',
        },
      ],
    }
  }

  return baseData[slug]
}

