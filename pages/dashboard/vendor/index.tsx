import React, { useState } from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'My Bookings', value: '45', change: '+8 this month' },
    { label: 'Rating', value: '4.8', change: '127 reviews' },
    { label: 'Earnings', value: '₹1.2L', change: 'This month' },
    { label: 'Availability', value: 'Available', change: 'Next 7 days' },
  ]

  return (
    <>
      <Head>
        <title>Pandit Dashboard | PanditForPujaBooking.com</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Pandit Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {['overview', 'bookings', 'profile', 'earnings', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-saffron-500 text-saffron-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
                  <div className="text-gray-600">Upcoming bookings overview - to be implemented</div>
                </div>
              )}
              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
                  <div className="text-gray-600">Booking management interface - to be implemented</div>
                </div>
              )}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                  <div className="text-gray-600">Profile management interface - to be implemented</div>
                </div>
              )}
              {activeTab === 'earnings' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Earnings & Payments</h2>
                  <div className="text-gray-600">Earnings dashboard - to be implemented</div>
                </div>
              )}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Settings</h2>
                  <div className="text-gray-600">Pandit settings - to be implemented</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

