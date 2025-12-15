import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// TEMPLATE 2: MODERN SPLIT-SCREEN
// Features: Split hero with image, timeline vidhi, interactive elements, contemporary feel

export default function DemoTemplate2() {
    return (
        <>
            <Head>
                <title>Template 2: Modern Split-Screen - Puja Service Demo</title>
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-white">
                {/* HERO SECTION - SPLIT SCREEN DESIGN */}
                <section className="relative min-h-screen flex items-center">
                    {/* Left Side - Content */}
                    <div className="w-full lg:w-1/2 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 text-white p-12 lg:p-20 min-h-screen flex items-center">
                        <div className="max-w-2xl">
                            {/* Breadcrumb */}
                            <div className="flex items-center space-x-2 text-sm mb-8 text-gold-300">
                                <Link href="/" className="hover:text-gold-200">Home</Link>
                                <span>/</span>
                                <Link href="/puja-services" className="hover:text-gold-200">Puja Services</Link>
                                <span>/</span>
                                <span className="text-white">Satyanarayan Puja</span>
                            </div>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/50 rounded-full px-4 py-2 mb-6">
                                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                                <span className="text-gold-200 text-sm font-semibold">Most Booked Puja in Pune</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                                Satyanarayan <br />
                                <span className="text-gold-400">Puja Service</span>
                            </h1>

                            <p className="text-xl text-gold-100 mb-8 leading-relaxed">
                                Authentic Vedic rituals performed by certified pandits at your doorstep. Experience divine blessings with complete samagri and expert guidance.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/20">
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">12K+</div>
                                    <div className="text-sm text-gold-200">Happy Families</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">4.9★</div>
                                    <div className="text-sm text-gold-200">Average Rating</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">2-3h</div>
                                    <div className="text-sm text-gold-200">Duration</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-gold-500 hover:bg-gold-600 text-maroon-900 font-bold shadow-xl"
                                >
                                    Book Puja - ₹2,500+
                                </Button>
                                <Button
                                    variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    <span className="flex items-center gap-2">
                                        <span>💬</span>
                                        <span>WhatsApp</span>
                                    </span>
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-10 flex items-center gap-6 text-sm text-gold-200">
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Verified Pandits</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Samagri Included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Same Day Booking</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image/Visual */}
                    <div className="hidden lg:block w-1/2 min-h-screen relative bg-gradient-to-br from-saffron-100 to-gold-100">
                        <div className="absolute inset-0 bg-pattern-mandala opacity-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-20">
                            <div className="relative">
                                {/* Decorative Circle */}
                                <div className="w-96 h-96 bg-gradient-to-br from-maroon-200 to-gold-200 rounded-full opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

                                {/* Main Visual Element */}
                                <div className="relative bg-white rounded-3xl shadow-2xl p-12 border-4 border-gold-300">
                                    <div className="text-center">
                                        <div className="text-8xl mb-6">🕉️</div>
                                        <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-4">
                                            Complete Puja Package
                                        </h3>
                                        <div className="space-y-3 text-left">
                                            {['Ganapati Puja', 'Kalash Sthapana', 'Satyanarayan Puja', 'Katha Paath', 'Aarti & Prasad'].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-saffron-50 rounded-lg p-3">
                                                    <div className="w-8 h-8 bg-maroon-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TIMELINE VIDHI SECTION */}
                <section className="section-padding bg-gradient-to-b from-white to-saffron-50">
                    <div className="container-custom max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-4">
                                Step-by-Step Puja Vidhi
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our expert pandits follow authentic Vedic traditions with complete transparency
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-maroon-500 via-gold-500 to-saffron-500"></div>

                            {/* Steps */}
                            <div className="space-y-12">
                                {[
                                    { title: 'Preparation & Sankalp', time: '15 min', desc: 'Setting up the altar, purification rituals, and taking sankalp (intention) for the puja.' },
                                    { title: 'Ganapati Puja', time: '15 min', desc: 'Invoking Lord Ganesha to remove obstacles and ensure smooth completion of the puja.' },
                                    { title: 'Kalash Sthapana', time: '10 min', desc: 'Establishing the sacred kalash with water, mango leaves, and coconut representing divine presence.' },
                                    { title: 'Satyanarayan Puja', time: '45 min', desc: 'Main worship with 16 upacharas, offering flowers, tulsi, and naivedya to Lord Satyanarayan.' },
                                    { title: 'Katha Paath', time: '60 min', desc: 'Recitation of the sacred Satyanarayan Vrat Katha in 5 chapters with explanations.' },
                                    { title: 'Aarti & Prasad', time: '20 min', desc: 'Final aarti, distribution of prasad (sheera), and blessings for all participants.' }
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-24">
                                        {/* Number Badge */}
                                        <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                                            <span className="text-2xl font-bold text-gold-300">{i + 1}</span>
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gold-500">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-xl font-bold text-maroon-900">{step.title}</h3>
                                                <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                    {step.time}
                                                </span>
                                            </div>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SAMAGRI SECTION - MODERN TABLE */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-4">
                                Complete Samagri List
                            </h2>
                            <p className="text-gray-600">
                                All items provided by our team - you just need to arrange the space
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-saffron-50 to-gold-50 rounded-3xl p-8 shadow-xl border-2 border-gold-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { category: 'Puja Items', items: ['Coconut (2)', 'Supari (11)', 'Flowers (500g)', 'Tulsi leaves', 'Fruits (5 types)'] },
                                    { category: 'Ingredients', items: ['Panchamrit set', 'Wheat/Sooji (500g)', 'Ghee (250g)', 'Kumkum & Haldi', 'Chandan'] },
                                    { category: 'Utensils', items: ['Copper Kalash', 'Panchpatra', 'Plates & Bowls', 'Offering Spoon', 'Asan cloth'] },
                                    { category: 'Atmosphere', items: ['Dhoop sticks', 'Agarbatti', 'Camphor', 'Diyas & Wicks', 'Rangoli colors'] }
                                ].map((section, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-maroon-600 rounded-lg flex items-center justify-center text-white text-xl">
                                                {['📦', '🥥', '🫙', '🪔'][i]}
                                            </div>
                                            <h3 className="text-lg font-bold text-maroon-900">{section.category}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {section.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-saffron-500">✓</span>
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING - COMPARISON TABLE */}
                <section className="section-padding bg-gradient-to-b from-maroon-50 to-white">
                    <div className="container-custom max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-4">
                                Choose Your Package
                            </h2>
                            <p className="text-gray-600">
                                Transparent pricing with no hidden charges
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Essential', price: 2500, duration: '1.5-2h', features: ['Basic Puja', 'Standard Samagri', 'Hindi/Marathi', 'Prasad for 20'] },
                                { name: 'Premium', price: 4500, duration: '2.5-3h', features: ['Complete Puja', 'Premium Samagri', 'All Languages', 'Prasad for 50', 'Video Recording'], popular: true },
                                { name: 'Royal', price: 7500, duration: '3-4h', features: ['Grand Puja', 'Deluxe Samagri', 'All Languages', 'Prasad for 100', 'Video + Photos', 'Decorations'] }
                            ].map((pkg, i) => (
                                <div key={i} className={`relative bg-white rounded-2xl p-8 shadow-lg ${pkg.popular ? 'ring-4 ring-gold-400 scale-105' : ''}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                                            RECOMMENDED
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-maroon-900 mb-2">{pkg.name}</h3>
                                        <div className="text-5xl font-bold text-maroon-700 mb-1">₹{pkg.price.toLocaleString()}</div>
                                        <div className="text-sm text-gray-500">{pkg.duration} duration</div>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2">
                                                <span className="text-green-500 text-lg">✓</span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={pkg.popular ? "primary" : "outline"}
                                        className={`w-full ${pkg.popular ? 'bg-maroon-600 hover:bg-maroon-700' : 'border-maroon-600 text-maroon-700'}`}
                                    >
                                        Select {pkg.name}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 bg-gradient-to-r from-maroon-900 to-maroon-800 text-white">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl font-serif font-bold mb-6">
                            Book Your Satyanarayan Puja Today
                        </h2>
                        <p className="text-xl text-gold-200 mb-8 max-w-2xl mx-auto">
                            Join 12,000+ happy families who trusted us for their sacred rituals
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg" className="bg-gold-500 hover:bg-gold-600 text-maroon-900">
                                Call +91-8446272142
                            </Button>
                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
