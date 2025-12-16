import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Resource Hints for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Global Meta Tags */}
                <meta name="theme-color" content="#7f1d1d" /> {/* maroon-900 */}
                <meta name="application-name" content="Pandit For Puja Booking" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Pandit For Puja" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Icons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* Fonts can be added here if not using next/font */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
