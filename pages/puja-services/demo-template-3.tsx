import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// TEMPLATE 3: MINIMALIST LUXURY
// Features: Clean design, lots of white space, premium feel, subtle animations

export default function DemoTemplate3() {
    return (
        <>
            <Head>
                <title>Template 3: Minimalist Luxury - Puja Service Demo</title>
            </Head>

            <Header />
      <Breadcrumbs />

            <main className="bg-white">
                {/* HERO SECTION - MINIMALIST & CLEAN */}
                <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-saffron-50/30 to-white">
                    {/* Subtle Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-maroon-200/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Minimal Breadcrumb */}
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-12">
                                <Link href="/" className="hover:text-maroon-700">Home</Link>
                                <span>·</span>
                                <Link href="/puja-services" className="hover:text-maroon-700">Puja Services</Link>
                                <span>·</span>
                                <span className="text-maroon-900 font-medium">Satyanarayan Puja</span>
                            </div>

                            {/* Om Symbol */}
                            <div className="text-8xl mb-8 opacity-80">🕉️</div>

                            {/* Heading */}
                            <h1 className="text-5xl md:text-7xl font-serif font-light text-maroon-900 mb-6 tracking-tight">
                                Satyanarayan Puja
                            </h1>

                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>

                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Experience divine blessings through authentic Vedic rituals performed by certified pandits
                            </p>

                            {/* Minimal Stats */}
                            <div className="flex items-center justify-center gap-12 mb-12 text-sm">
                                <div className="text-center">
                                    <div className="text-3xl font-light text-maroon-900 mb-1">12,000+</div>
                                    <div className="text-gray-500">Families Served</div>
                                </div>
                                <div className="w-px h-12 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-maroon-900 mb-1">4.9/5</div>
                                    <div className="text-gray-500">Rating</div>
                                </div>
                                <div className="w-px h-12 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-maroon-900 mb-1">2-3 hrs</div>
                                    <div className="text-gray-500">Duration</div>
                                </div>
                            </div>

                            {/* Minimal CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-maroon-900 hover:bg-maroon-800 text-white px-12 py-4 rounded-none font-normal tracking-wide"
                                >
                                    Book Puja
                                </Button>
                                <Button
                                    variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION - CLEAN GRID */}
                <section className="py-32 bg-white">
                    <div className="container-custom max-w-7xl">
                        {/* Section Header */}
                        <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-serif font-light text-maroon-900 mb-4">
                                What's Included
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-500"></div>
                        </div>

                        {/* Grid of Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { icon: '📿', title: 'Authentic Rituals', desc: 'Traditional Vedic procedures followed precisely' },
                                { icon: '👨‍🏫', title: 'Expert Pandits', desc: 'Certified scholars with 10+ years experience' },
                                { icon: '📦', title: 'Complete Samagri', desc: 'All materials provided at no extra cost' },
                                { icon: '🎯', title: 'Perfect Timing', desc: 'Muhurat consultation included free' }
                            ].map((feature, i) => (
                                <div key={i} className="group">
                                    <div className="text-5xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-maroon-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* VIDHI SECTION - MINIMAL LIST */}
                <section className="py-32 bg-gradient-to-b from-saffron-50/30 to-white">
                    <div className="container-custom max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Left - Header */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-serif font-light text-maroon-900 mb-6">
                                    Puja Vidhi
                                </h2>
                                <div className="w-16 h-0.5 bg-gold-500 mb-8"></div>
                                <p className="text-lg text-gray-600 leading-relaxed font-light">
                                    Each step is performed with devotion and precision, ensuring the puja's spiritual efficacy and your family's complete satisfaction.
                                </p>
                            </div>

                            {/* Right - Steps */}
                            <div className="space-y-8">
                                {[
                                    { num: '01', title: 'Preparation & Sankalp', time: '15 min' },
                                    { num: '02', title: 'Ganapati Puja', time: '15 min' },
                                    { num: '03', title: 'Kalash Sthapana', time: '10 min' },
                                    { num: '04', title: 'Satyanarayan Puja', time: '45 min' },
                                    { num: '05', title: 'Katha Paath', time: '60 min' },
                                    { num: '06', title: 'Aarti & Prasad', time: '20 min' }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 border-2 border-maroon-900 flex items-center justify-center font-serif text-maroon-900 group-hover:bg-maroon-900 group-hover:text-white transition-colors">
                                            {step.num}
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-xl font-serif text-maroon-900 mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{step.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING SECTION - MINIMAL CARDS */}
                <section className="py-32 bg-white">
                    <div className="container-custom max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-serif font-light text-maroon-900 mb-4">
                                Pricing
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-8"></div>
                            <p className="text-lg text-gray-600 font-light">
                                Transparent pricing with no hidden charges
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Essential', price: '₹2,500', features: ['Basic Puja', 'Standard Samagri', '1.5-2 hours', 'Hindi/Marathi'] },
                                { name: 'Premium', price: '₹4,500', features: ['Complete Puja', 'Premium Samagri', '2.5-3 hours', 'All Languages', 'Video Recording'], featured: true },
                                { name: 'Royal', price: '₹7,500', features: ['Grand Puja', 'Deluxe Samagri', '3-4 hours', 'All Languages', 'Video + Photos', 'Decorations'] }
                            ].map((pkg, i) => (
                                <div key={i} className={`bg-white border-2 ${pkg.featured ? 'border-maroon-900' : 'border-gray-200'} p-10 hover:border-maroon-900 transition-colors`}>
                                    <div className="text-center mb-8">
                                        <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                                            {pkg.name}
                                        </div>
                                        <div className="text-5xl font-light text-maroon-900 mb-2">
                                            {pkg.price}
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-10">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-1 h-1 bg-maroon-900 rounded-full"></span>
                                                <span className="font-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={pkg.featured ? "primary" : "outline"}
                                        className={`w-full rounded-none py-3 ${pkg.featured ? 'bg-maroon-900 hover:bg-maroon-800' : 'border-2 border-maroon-900 text-maroon-900 hover:bg-maroon-50'}`}
                                    >
                                        Select
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SAMAGRI SECTION - MINIMAL LIST */}
                <section className="py-32 bg-gradient-to-b from-saffron-50/30 to-white">
                    <div className="container-custom max-w-6xl">
                        <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-serif font-light text-maroon-900 mb-4">
                                Samagri Provided
                            </h2>
                            <div className="w-16 h-0.5 bg-gold-500 mb-8"></div>
                            <p className="text-lg text-gray-600 font-light max-w-2xl">
                                We provide all essential items for the puja. You only need to arrange a clean space.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { title: 'Puja Items', items: ['Coconut', 'Supari', 'Flowers', 'Tulsi leaves', 'Fruits'] },
                                { title: 'Ingredients', items: ['Panchamrit', 'Wheat/Sooji', 'Ghee', 'Kumkum', 'Chandan'] },
                                { title: 'Utensils', items: ['Copper Kalash', 'Panchpatra', 'Plates', 'Spoon', 'Asan'] },
                                { title: 'Atmosphere', items: ['Dhoop', 'Agarbatti', 'Camphor', 'Diyas', 'Rangoli'] }
                            ].map((category, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-serif text-maroon-900 mb-6 pb-3 border-b border-gray-200">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-600 font-light">
                                                <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION - MINIMAL */}
                <section className="py-32 bg-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-maroon-900 mb-8">
                            Ready to Book?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 font-light">
                            Connect with our team for personalized assistance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="tel:+918446272142" className="inline-block">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-maroon-900 hover:bg-maroon-800 px-12 py-4 rounded-none"
                                >
                                    Call +91-8446272142
                                </Button>
                            </a>
                            <a href="https://wa.me/918446272142" className="inline-block">
                                <Button
                                    variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
