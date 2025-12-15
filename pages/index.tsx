import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schemas'

export default function Home() {
  // 1. Generate Global Schemas for Homepage
  const orgSchema = generateOrganizationSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  // WebSite Schema for Sitelinks Search Box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://panditforpujabooking.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://panditforpujabooking.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  // Top 6 service cards with detailed descriptions
  const topServices = [
    {
      name: 'Griha Pravesh Puja',
      slug: 'griha-pravesh-puja',
      icon: '🏠',
      description: 'Sacred home blessing ceremony to purify your new home, remove negative energy, and invite prosperity. Includes Kalash Puja, Vastu Shuddhi, and Navgraha Homam.',
    },
    {
      name: 'Satyanarayan Puja',
      slug: 'satyanarayan-puja',
      icon: '📿',
      description: 'Powerful family prosperity ritual with complete Vrat Katha. Brings peace, success, and divine blessings to your household.',
    },
    {
      name: 'Rudrabhishek Puja',
      slug: 'rudrabhishek-puja',
      icon: '🕉️',
      description: 'Lord Shiva\'s sacred ablution ceremony. Removes obstacles, health issues, and brings spiritual peace. Includes Panchamrit Abhishek.',
    },
    {
      name: 'Marriage / Vivah Puja',
      slug: 'marriage-puja',
      icon: '💑',
      description: 'Complete Hindu wedding rituals including Kanyadaan, Pheras, Havan, and Ashirwad. Traditional or customized ceremonies.',
    },
    {
      name: 'Lakshmi Puja',
      slug: 'lakshmi-puja',
      icon: '💰',
      description: 'Goddess of wealth worship for financial prosperity. Perfect for Diwali, new business, or home prosperity rituals.',
    },
    {
      name: 'Office Opening Puja',
      slug: 'office-opening-puja',
      icon: '🏢',
      description: 'Business blessing ceremony for shops, offices, factories. Ensures success, prosperity, and positive energy flow.',
    },
  ]

  // Trust badges
  const trustBadges = [
    { icon: '⭐', text: '4.8/5 Rating', subtext: '(10K+ Reviews)' },
    { icon: '✅', text: '100% Verified', subtext: 'Pandits' },
    { icon: '📦', text: 'Samagri Included', subtext: '' },
    { icon: '🇮🇳', text: '50+ Cities', subtext: '' },
  ]

  // Why Choose Us features
  const whyChooseUs = [
    {
      icon: '✅',
      title: 'Verified Pandits',
      description: '100% background checked, certified Vedic scholars with 5+ years experience. Every pandit verified for authenticity.',
    },
    {
      icon: '📦',
      title: 'Complete Samagri',
      description: 'Premium quality ritual materials included. Fresh flowers, ghee, fruits, incense - everything delivered to your door.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges. Fixed upfront pricing with detailed breakdown. 30% cheaper than local pandits.',
    },
    {
      icon: '🗣️',
      title: 'Any Language',
      description: 'Hindi, English, Marathi, Tamil, Telugu pandits available. Clear communication guaranteed.',
    },
    {
      icon: '📅',
      title: 'Perfect Muhurat',
      description: 'Free muhurat consultation. Expert astrologers suggest best dates and timings for maximum benefits.',
    },
    {
      icon: '🇮🇳',
      title: 'Pan-India Service',
      description: '50+ cities covered. From metros to tier-2 cities. Fast same-day booking available in major locations.',
    },
  ]

  // Top cities for local SEO
  const topCities = [
    { name: 'Pune', slug: 'pune', subtitle: 'Pandit in Pune' },
    { name: 'Mumbai', slug: 'mumbai', subtitle: 'Puja Services Mumbai' },
    { name: 'Nashik', slug: 'nashik', subtitle: 'Nashik Pandit Booking' },
    { name: 'Nagpur', slug: 'nagpur', subtitle: 'Nagpur Puja Service' },
    { name: 'Thane', slug: 'thane', subtitle: 'Thane Pandit Service' },
    { name: 'Delhi', slug: 'delhi', subtitle: 'Delhi Puja Booking' },
    { name: 'Bangalore', slug: 'bangalore', subtitle: 'Bangalore Pandits' },
    { name: 'Hyderabad', slug: 'hyderabad', subtitle: 'Hyd Puja Service' },
    { name: 'Chennai', slug: 'chennai', subtitle: 'Chennai Pandit' },
  ]

  // Puja categories
  const pujaCategories = [
    { name: 'Home Puja', slug: 'home-puja' },
    { name: 'Office Puja', slug: 'office-puja' },
    { name: 'Health Puja', slug: 'health-puja' },
    { name: 'Wealth Puja', slug: 'wealth-puja' },
    { name: 'Astrology Remedies', slug: 'astrology' },
    { name: 'Festival Puja', slug: 'festival-puja' },
    { name: 'Grah Shanti', slug: 'grah-shanti' },
    { name: 'Dosha Nivaran', slug: 'dosha-nivaran' },
    { name: 'Griha Pravesh', slug: 'griha-pravesh-puja' },
    { name: 'Marriage', slug: 'marriage-puja' },
    { name: 'Lakshmi', slug: 'lakshmi-puja' },
    { name: 'Rudrabhishek', slug: 'rudrabhishek-puja' },
    { name: 'Navgraha', slug: 'navgraha' },
    { name: 'Kaal Sarp', slug: 'kaal-sarp-dosh-puja' },
    { name: 'Vastu', slug: 'vastu-puja' },
  ]

  // Testimonials - Comprehensive
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Pune',
      service: 'Griha Pravesh Puja',
      stars: 5,
      text: 'Perfect Griha Pravesh! Pandit explained every ritual beautifully. Samagri was excellent quality and the ceremony was performed with complete devotion. Highly recommend!',
      date: '2 weeks ago',
      avatar: 'PS',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      service: 'Satyanarayan Puja',
      stars: 5,
      text: 'Satyanarayan Puja was flawless. Transparent pricing, punctual pandit, and authentic rituals. Our family was very happy with the service. Will book again!',
      date: '1 month ago',
      avatar: 'RK',
    },
    {
      name: 'Meera Desai',
      location: 'Bangalore',
      service: 'Lakshmi Puja',
      stars: 5,
      text: 'Best online pandit service I\'ve used! The pandit was knowledgeable, punctual, and performed the Lakshmi Puja with great devotion. Highly recommend for authentic rituals.',
      date: '3 weeks ago',
      avatar: 'MD',
    },
    {
      name: 'Amit Patel',
      location: 'Pune',
      service: 'Rudrabhishek Puja',
      stars: 5,
      text: 'Amazing experience! The Rudrabhishek puja was performed with complete devotion. The pandit was explained everything clearly. I felt a positive change after the puja.',
      date: '1 month ago',
      avatar: 'AP',
    },
    {
      name: 'Sunita Iyer',
      location: 'Mumbai',
      service: 'Marriage Puja',
      stars: 5,
      text: 'We booked our wedding puja through this platform and it was perfect! The pandit was experienced, rituals were performed correctly, and our family was very happy. Thank you!',
      date: '2 months ago',
      avatar: 'SI',
    },
    {
      name: 'Vikram Singh',
      location: 'Delhi',
      service: 'Office Opening Puja',
      stars: 5,
      text: 'We opened our new office and booked the puja. The service was excellent, pandit was professional, and the ceremony brought positive energy to our workplace. Great service!',
      date: '3 weeks ago',
      avatar: 'VS',
    },
  ]

  return (
    <>
      <SEOHead
        title="Book Pandit Online | Vedic Puja Services at Home | Certified Pandits India"
        description="Book verified Vedic Pandits for Griha Pravesh, Satyanarayan Puja, Rudrabhishek, Marriage, Kaal Sarp Dosh & 100+ rituals. Complete samagri included, transparent pricing. 10,000+ pujas performed."
        keywords="book pandit online, pandit for puja booking, puja services near me, griha pravesh pandit, satyanarayan puja, verified pandits, online pandit service, pandit in pune, hindu puja booking"
        canonicalUrl="https://panditforpujabooking.com/"
        schema={[orgSchema, localBusinessSchema, websiteSchema]}
      />

      <Header />

      <main className="bg-saffron-50">
        <section id="hero" className="relative bg-maroon-900 text-white overflow-hidden min-h-[600px] flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-transparent opacity-80"></div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                <span className="text-gold-300 font-serif tracking-widest uppercase text-sm font-semibold">India's Most Trusted</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                Book Verified Pandits for <span className="text-gold-400">Puja Services</span> in Pune +91 8446272142
              </h1>

              <p className="text-gold-200 font-medium mb-6 text-sm md:text-base tracking-wide uppercase">
                Certified Vedic Pandits • All Puja Types • Transparent Pricing • Complete Samagri Included • 10,000+ Pujas Performed • Pan-India Service
              </p>

              <p className="text-lg text-white/90 mb-8 font-serif leading-relaxed max-w-3xl mx-auto">
                India's most trusted online pandit booking platform. Connect with verified, experienced Vedic pandits for Griha Pravesh, Satyanarayan Puja, Rudrabhishek, marriage ceremonies, and 100+ authentic rituals. We handle everything - from samagri arrangement to perfect muhurat selection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button variant="primary" size="lg" className="border-2 border-gold-400 shadow-gold-500/20" href="tel:+918446272142">
                  Book Now
                </Button>
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  Explore Puja Services
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gold-100 max-w-4xl mx-auto">
                <div className="bg-white/10 p-2 rounded border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-xl mb-1">⭐</div>
                  <div className="font-bold text-white">4.8/5 Rating</div>
                  <div className="text-xs text-gold-300">(10K+ Reviews)</div>
                </div>
                <div className="bg-white/10 p-2 rounded border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-xl mb-1">✅</div>
                  <div className="font-bold text-white">100% Verified</div>
                  <div className="text-xs text-gold-300">Pandits</div>
                </div>
                <div className="bg-white/10 p-2 rounded border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-xl mb-1">📦</div>
                  <div className="font-bold text-white">Samagri</div>
                  <div className="text-xs text-gold-300">Included</div>
                </div>
                <div className="bg-white/10 p-2 rounded border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-xl mb-1">🇮🇳</div>
                  <div className="font-bold text-white">50+ Cities</div>
                  <div className="text-xs text-gold-300">Pan-India</div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Popular Puja Services */}
        <section id="services" className="section-padding bg-pattern-mandala">
          <div className="container-custom">
            <div className="text-center mb-16 relative">
              <span className="text-maroon-600 font-bold tracking-widest uppercase text-sm">Our Offerings</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mt-2 mb-4">
                Divine Puja Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
              <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto font-medium">
                Performed by certified pandits with complete devotion and adherence to Vedic rituals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topServices.map((service) => (
                <div key={service.slug} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-200 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon-600 to-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-saffron-50 rounded-full flex items-center justify-center mb-6 border-2 border-gold-200 group-hover:border-gold-500 transition-colors">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-saffron-700 transition-colors">{service.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm border-b border-gray-100 pb-4">{service.description}</p>
                    <Link
                      href={`/puja-services/${service.slug}`}
                      className="inline-flex items-center font-bold text-gold-600 hover:text-maroon-700 uppercase tracking-wide text-sm transition-colors"
                    >
                      Book This Puja <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/puja-services">
                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                  View All 50+ Puja Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced with Divine Look */}
        <section id="why-choose" className="section-padding bg-maroon-50 border-y border-gold-200">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-6">
                Why Devotees Trust Us
              </h2>
              <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md border-b-4 border-transparent hover:border-gold-500 transition-all hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-maroon-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Selector */}
        <section id="cities" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
                Service Locations
              </h2>
              <p className="text-gray-600 italic">
                Our network of vedic pandits spans across major spiritual and metro cities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/pandit-services/${city.slug}`}
                  className="group bg-gray-50 hover:bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-gold-400 hover:shadow-md transition-all"
                >
                  <div className="font-serif font-semibold text-gray-800 group-hover:text-maroon-700">{city.name}</div>
                  <div className="text-xs text-gold-600 mt-1 uppercase tracking-wide">{city.subtitle}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Steps */}
        <section id="how-it-works" className="section-padding bg-maroon-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <span className="text-gold-300 uppercase tracking-widest text-sm font-bold">Process</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                Book a Puja in 4 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Select Puja', desc: 'Choose from 100+ Vedic rituals' },
                { number: '02', title: 'Book Slot', desc: 'Pick auspicious date & time' },
                { number: '03', title: 'Confirmation', desc: 'Instant details via WhatsApp/SMS' },
                { number: '04', title: 'Divine Experience', desc: 'Pandit performs puja at your place' }
              ].map((step, idx) => (
                <div key={idx} className="text-center relative">
                  {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gold-500/30 -z-10"></div>}
                  <div className="w-16 h-16 bg-maroon-800 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <span className="text-2xl font-serif font-bold text-gold-400">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gold-100 mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Enhanced */}
        <section id="testimonials" className="section-padding bg-gradient-to-b from-saffron-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-6">
                Devotee Experiences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-8 border border-gold-100 relative">
                  <span className="absolute top-4 right-6 text-6xl text-gold-200 opacity-50 font-serif">"</span>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 font-bold border border-maroon-200">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic border-l-2 border-gold-400 pl-4 mb-4">
                    {testimonial.text}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-maroon-600 uppercase">{testimonial.service}</span>
                    <div className="text-gold-500 text-sm">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pattern-mandala border-t border-gold-300">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-gold-500/20">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-6">
                Ready to Invoke Divine Blessings?
              </h2>
              <p className="text-xl text-gray-600 mb-8 italic">
                "A prayer performed with devotion brings peace and prosperity."
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/puja-services">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto px-12 py-4 text-lg shadow-gold-500/40">
                    Book Your Puja Now
                  </Button>
                </Link>
                <a href="tel:+918446272142">
                  <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                    Call: +91-8446272142
                  </Button>
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Trusted by 10,000+ Families • Certified Pandits • 100% Satisfaction
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
