import type { NextApiRequest, NextApiResponse } from 'next'

interface BookingRequest {
    serviceType?: string
    pujaName?: string
    date?: string
    time?: string
    location?: string
    name: string
    phone: string
    email: string
    message?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const bookingData: BookingRequest = req.body

        // Basic validation
        if (!bookingData.name || !bookingData.phone || !bookingData.email) {
            return res.status(400).json({
                error: 'Missing required fields: name, phone, email are mandatory.',
            })
        }

        // Generate a mock booking ID
        const bookingId = `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

        // Log the booking (simulating database save)
        console.log('New Booking Received:', {
            id: bookingId,
            ...bookingData,
            timestamp: new Date().toISOString(),
        })

        // Return success response
        return res.status(200).json({
            success: true,
            bookingId,
            message: 'Booking request received successfully. Our team will contact you shortly.',
        })
    } catch (error) {
        console.error('Booking API error:', error)
        return res.status(500).json({
            error: 'Internal server error. Please try again later.',
        })
    }
}
