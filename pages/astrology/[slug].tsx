import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { SEOHead } from '@/components/SEOHead'
import { PujaServiceLocations } from '@/components/PujaServiceLocations'
import { allAstrologyServices, getAstrologyData } from '@/data/astrology-services'

interface AstrologyPageProps {
    data: {
        title: string;
        slug: string;
        description: string;
        cost: string;
        duration: string;
        content: string;
        image?: string;
        faq?: { question: string, answer: string }[];
    }
}

export default function AstrologyServicePage({ data }: AstrologyPageProps) {
    if (!data) return <div>Loading...</div>

    // removed unused heroImage variable

    return (
        <>
            <SEOHead
                title={`${data.title} | PanditForPujaBooking.com`}
                description={data.description}
                canonicalUrl={`https://www.panditforpujabooking.com/astrology/${data.slug}`}
            />

            <Header />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-transparent z-10"></div>

                    <div className="container-custom relative z-20">
                        {/* ... content ... */}
                        <div className="max-w-3xl">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs md:text-sm font-semibold">Expert Astrology Service</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl leading-relaxed border-l-4 border-gold-600 pl-4">
                                {data.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href="#booking" className="border-2 border-gold-400 shadow-gold-500/20">
                                    Book Consultation
                                </Button>
                                <a href={`https://wa.me/918446272142?text=I%20want%20to%20book%20${data.title}`} className="inline-block">
                                    <Button variant="secondary" size="lg" className="bg-green-600 text-white hover:bg-green-700 border-transparent">
                                        Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* About Service */}
                            <section className="bg-white rounded-2xl shadow-sm border border-gold-100 p-8">
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">About This Service</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {data.content}
                                </p>
                                <p className="mt-4 text-gray-700">
                                    Our astrologers in Pune are highly experienced in Vedic Astrology. They provide accurate predictions and effective remedies to help you navigate life's challenges.
                                </p>
                            </section>

                            {/* Key Benefits / Why Choose Us */}
                            <section>
                                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Why Choose Our {data.title}?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Verified & Experienced Astrologers",
                                        "Accurate Predictions",
                                        "Vedic Remedies & Solutions",
                                        "Confidential Consultation",
                                        "Online & In-person Options",
                                        "Affordable & Transparent Pricing"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-saffron-500">
                                            <span className="text-maroon-600 mr-3 font-bold">✓</span>
                                            <span className="text-gray-800 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* FAQs */}
                            {data.faq && data.faq.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        {data.faq.map((item, i) => (
                                            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                                <h3 className="font-bold text-maroon-800 mb-2">{item.question}</h3>
                                                <p className="text-gray-600">{item.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div id="booking" className="bg-white rounded-xl shadow-xl border-t-4 border-saffron-500 p-6 sticky top-24">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-serif font-bold text-maroon-900">Consultation Details</h3>
                                    <p className="text-gray-500 text-sm">Best Astrologers in Pune</p>
                                </div>

                                <div className="bg-gold-50 rounded-lg p-4 mb-6 space-y-3">
                                    <div className="flex justify-between items-center border-b border-gold-200 pb-2">
                                        <span className="text-gray-600 text-sm">Consultation Fee</span>
                                        <span className="font-bold text-maroon-800">{data.cost}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-sm">Duration</span>
                                        <span className="font-bold text-maroon-800">{data.duration}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <a href="tel:+918446272142" className="block w-full">
                                        <Button variant="primary" className="w-full justify-center">
                                            Call Now To Book
                                        </Button>
                                    </a>
                                    <a href={`https://wa.me/918446272142?text=I%20want%20to%20book%20${data.title}`} className="block w-full">
                                        <Button variant="secondary" className="w-full justify-center bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
                                            WhatsApp Us
                                        </Button>
                                    </a>
                                </div>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    *Prices may vary based on complexity and astrologer experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <PujaServiceLocations pujaName={data.title} />
            </main>
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allAstrologyServices.map((slug) => ({
        params: { slug },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string
    const data = getAstrologyData(slug)

    return {
        props: {
            data,
        },
    }
}
