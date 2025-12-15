/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // Disable React Strict Mode to stabilize Fast Refresh
  reactStrictMode: false,
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',

  // Fix path aliases for both server and client
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    }

    // Fix file watching on Windows for better HMR
    if (dev) {
      // Use polling for file watching on Windows (fixes HMR issues)
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
    }

    return config
  },

  // Stabilize Fast Refresh
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 2,
  },

  experimental: {
    optimizeCss: true,
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
  images: {
    domains: ['panditforpujabooking.com', 'localhost'], // Allow external images if needed
    unoptimized: true, // Generate static HTML with images
  },
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return []
    }

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|webp|avif|svg|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Performance optimizations
  swcMinify: true,

  // Disable build cache if OneDrive is causing issues
  // Uncomment the line below if you continue to see EBUSY errors
  // distDir: '.next-custom',
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true
})

module.exports = withPWA(nextConfig)
