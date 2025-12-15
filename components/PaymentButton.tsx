import React, { useState } from 'react'
import Script from 'next/script'
import { Button } from './Button'

interface PaymentButtonProps {
  amount: number
  bookingId: string
  onSuccess?: (paymentId: string) => void
  onError?: (error: string) => void
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  bookingId,
  onSuccess,
  onError,
}) => {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Load Razorpay script
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => {
        // Initialize Razorpay
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY',
          amount: amount * 100, // Amount in paise
          currency: 'INR',
          name: 'PanditForPujaBooking.com',
          description: `Payment for Booking ${bookingId}`,
          order_id: '', // Will be generated from backend
          handler: function (response: any) {
            // Handle successful payment
            if (onSuccess) {
              onSuccess(response.razorpay_payment_id)
            }
            setIsProcessing(false)
          },
          prefill: {
            name: '',
            email: '',
            contact: '',
          },
          notes: {
            booking_id: bookingId,
          },
          theme: {
            color: '#f97316', // Saffron color
          },
        }

        const razorpay = new (window as any).Razorpay(options)
        razorpay.on('payment.failed', function (response: any) {
          if (onError) {
            onError(response.error.description)
          }
          setIsProcessing(false)
        })
        razorpay.open()
      }
      script.onerror = () => {
        if (onError) {
          onError('Failed to load payment gateway')
        }
        setIsProcessing(false)
      }
      document.body.appendChild(script)
    } catch (error) {
      if (onError) {
        onError('Payment initialization failed')
      }
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full"
      >
        {isProcessing ? 'Processing...' : `Pay ₹${amount.toLocaleString()}`}
      </Button>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
    </>
  )
}

