import React, { useState } from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        message: '',
    })
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitStatus('idle')
        setErrorMessage('')

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit booking')
            }

            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', serviceType: '', date: '', message: '' })
        } catch (error: any) {
            setSubmitStatus('error')
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <Head>
                <title>Book a Pandit | PanditForPujaBooking.com</title>
                <meta
                    name="description"
                    content="Book verified Vedic Pandits for Pujas, Havans, and Ceremonies in Pune. Easy online booking, transparent pricing."
                />
            </Head>

            <Header />

            <main>
                <div className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
                    <div className="container-custom text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            Book a Pandit
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Schedule your Puja or Consultation in minutes.
                        </p>
                    </div>
                </div>

                <div className="container-custom section-padding">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gold-100">
                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">✅</span>
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">Booking Received!</h2>
                                <p className="text-gray-600 mb-8">
                                    Thank you for your request. Our team will contact you shortly to confirm the details and Pandit availability.
                                </p>
                                <Button variant="primary" size="lg" href="/" asLink>
                                    Back to Home
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                            placeholder="e.g. Rahul Sharma"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                        placeholder="rahul@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Type *
                                        </label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                        >
                                            <option value="">Select Service</option>
                                            <option value="puja">Puja Ceremony</option>
                                            <option value="havan">Havan / Homa</option>
                                            <option value="sanskar">Sanskar (Naming, etc.)</option>
                                            <option value="astrology">Astrology Consultation</option>
                                            <option value="festival">Festival Puja</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message / Specific Puja Name
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                                        placeholder="e.g. Satyanarayan Puja in Baner..."
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" variant="primary" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-maroon-900 shadow-md">
                                        Confirm Booking
                                    </Button>
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                                        {errorMessage || 'Something went wrong. Please try again.'}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
