import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// TEMPLATE 1: CLASSIC ELEGANT
// Features: Centered hero, elegant typography, premium card designs, traditional feel

export default function DemoTemplate1() {
    return (
        <>
            <Head>
                <title>Template 1: Classic Elegant - Puja Service Demo</title>
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-gradient-to-b from-saffron-50 via-white to-saffron-50">
                {/* Breadcrumb */}
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/puja-services" className="text-maroon-700 hover:text-saffron-600 font-medium">Puja Services</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold">Demo Template 1</span>
                        </div>
                    </div>
                </nav>

                {/* HERO SECTION - CENTERED & ELEGANT */}
                <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 text-white py-20 md:py-32 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10 animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent"></div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-400/30 rounded-full animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-gold-400/20 rounded-full animate-float-delayed"></div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Premium Badge */}
                            <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/50 rounded-full px-6 py-2 mb-6">
                                <span className="text-gold-300 text-2xl">🕉️</span>
                                <span className="text-gold-200 font-serif tracking-widest uppercase text-sm font-semibold">Authentic Vedic Rituals</span>
                            </div>

                            {/* Main Heading with Gradient */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                                <span className="block text-white drop-shadow-2xl">Satyanarayan Puja</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 mt-2">
                                    Divine Blessings for Your Family
                                </span>
                            </h1>

                            <p className="text-xl text-gold-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                                Experience authentic Vedic rituals performed by certified pandits. Complete samagri included, transparent pricing, and personalized guidance.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-6 mb-10">
                                {[
                                    { icon: '⭐', text: '4.9/5 Rating', sub: '12K+ Reviews' },
                                    { icon: '✅', text: 'Verified Pandits', sub: '100% Certified' },
                                    { icon: '📦', text: 'Complete Samagri', sub: 'Included Free' },
                                    { icon: '🎯', text: 'Perfect Muhurat', sub: 'Expert Guidance' }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                                        <span className="text-3xl">{badge.icon}</span>
                                        <div className="text-left">
                                            <div className="text-white font-bold text-sm">{badge.text}</div>
                                            <div className="text-gold-300 text-xs">{badge.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-maroon-900 font-bold shadow-2xl shadow-gold-500/50 border-2 border-gold-300"
                                >
                                    <span className="flex items-center gap-2">
                                        <span>📿</span>
                                        <span>Book Puja Now</span>
                                    </span>
                                </Button>
                                <Button
                                    variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    <span className="flex items-center gap-2">
                                        <span>💬</span>
                                        <span>Chat on WhatsApp</span>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION - PREMIUM CARDS LAYOUT */}
                <section className="section-padding">
                    <div className="container-custom">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block text-saffron-600 font-bold tracking-widest uppercase text-sm mb-2">Complete Information</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
                                Everything You Need to Know
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                        </div>

                        {/* Premium Info Cards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {/* Card 1: What is this Puja */}
                            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-maroon-600">
                                <div className="bg-gradient-to-br from-maroon-50 to-saffron-50 p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">🕉️</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3">What is Satyanarayan Puja?</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Sacred worship of Lord Vishnu in His Satyanarayan form, performed to invite peace, prosperity, and truthfulness into family life.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-saffron-500 mt-1">✓</span>
                                            <span>Performed after major life events</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-saffron-500 mt-1">✓</span>
                                            <span>Ideal on Purnima or Ekadashi</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-saffron-500 mt-1">✓</span>
                                            <span>Brings family harmony</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2: Puja Vidhi */}
                            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-gold-600">
                                <div className="bg-gradient-to-br from-gold-50 to-saffron-50 p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">📿</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3">Puja Vidhi Steps</h3>
                                </div>
                                <div className="p-6">
                                    <ol className="space-y-3 text-sm text-gray-700">
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                                            <span>Achaman & Sankalp</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                                            <span>Ganapati Puja</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                                            <span>Kalash Sthapana</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">4</span>
                                            <span>Satyanarayan Puja</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">5</span>
                                            <span>Katha Paath</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-maroon-100 text-maroon-700 rounded-full flex items-center justify-center font-bold text-xs">6</span>
                                            <span>Aarti & Prasad</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            {/* Card 3: Benefits */}
                            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-saffron-600">
                                <div className="bg-gradient-to-br from-saffron-50 to-gold-50 p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-saffron-600 to-saffron-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">✨</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3">Divine Benefits</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold-500 text-lg">🌟</span>
                                            <span>Peace & prosperity in family</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold-500 text-lg">🌟</span>
                                            <span>Removal of obstacles</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold-500 text-lg">🌟</span>
                                            <span>Financial stability</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold-500 text-lg">🌟</span>
                                            <span>Health & wellbeing</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold-500 text-lg">🌟</span>
                                            <span>Spiritual growth</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Section - Premium Design */}
                        <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 rounded-3xl p-12 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-300 mb-4">
                                        Transparent Pricing Packages
                                    </h2>
                                    <p className="text-gold-100 max-w-2xl mx-auto">
                                        Choose the package that best suits your needs. All packages include complete samagri and expert pandit service.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { name: 'Basic', price: '₹2,500', features: ['Standard Puja', 'Basic Samagri', '1.5-2 hours', 'Hindi/Marathi'] },
                                        { name: 'Premium', price: '₹4,500', features: ['Complete Puja', 'Premium Samagri', '2.5-3 hours', 'All Languages', 'Video Recording'], popular: true },
                                        { name: 'Deluxe', price: '₹7,500', features: ['Grand Puja', 'Deluxe Samagri', '3-4 hours', 'All Languages', 'Video + Photos', 'Prasad for 50+'] }
                                    ].map((pkg, i) => (
                                        <div key={i} className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 ${pkg.popular ? 'border-gold-400 scale-105' : 'border-white/20'} relative`}>
                                            {pkg.popular && (
                                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-maroon-900 px-4 py-1 rounded-full text-xs font-bold">
                                                    MOST POPULAR
                                                </div>
                                            )}
                                            <h3 className="text-2xl font-bold text-gold-300 mb-2">{pkg.name}</h3>
                                            <div className="text-4xl font-bold text-white mb-6">{pkg.price}</div>
                                            <ul className="space-y-3 mb-6">
                                                {pkg.features.map((feature, j) => (
                                                    <li key={j} className="flex items-center gap-2 text-gold-100">
                                                        <span className="text-gold-400">✓</span>
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button
                                                variant={pkg.popular ? "primary" : "outline"}
                                                className={`w-full ${pkg.popular ? 'bg-gold-500 text-maroon-900 hover:bg-gold-600' : 'border-gold-400 text-gold-300'}`}
                                            >
                                                Select Package
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-saffron-100 via-gold-50 to-saffron-100">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-6">
                            Ready to Book Your Puja?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Connect with our expert pandits today and experience authentic Vedic rituals
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg" className="shadow-xl" href="tel:+918446272142">
                                Book Now - Call +91-8446272142
                            </Button>
                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                View All Puja Services
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
