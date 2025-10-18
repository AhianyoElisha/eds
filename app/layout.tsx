import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://edsghana.com'),
  title: {
    default: 'Ezar Delivery Service - Professional Logistics & Delivery Solutions in Ghana',
    template: '%s | Ezar Delivery Service'
  },
  description: 'Leading delivery and logistics service in Ghana. Specializing in warehouse pickup, multi-stop delivery, manifest management, and pickup station network. Fast, reliable, and customer-centric solutions with 15+ trucks and 50+ pickup stations.',
  keywords: [
    'delivery service Ghana',
    'logistics Ghana',
    'warehouse pickup',
    'multi-stop delivery',
    'pickup station network',
    'manifest management',
    'fleet services Ghana',
    'last-mile delivery',
    'Ezar Delivery',
    'cargo delivery Ghana',
    'express delivery service',
    'logistics solutions',
    'route optimization',
    'package delivery',
    'freight services',
    'courier services Ghana',
    'Nsawam delivery',
    'Suhum delivery',
    'Nkawkaw delivery'
  ],
  authors: [{ name: 'Ezar Delivery Service' }],
  creator: 'Ezar Delivery Service',
  publisher: 'Ezar Delivery Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edsghana.com',
    title: 'Ezar Delivery Service - Professional Logistics & Delivery Solutions',
    description: 'Leading delivery and logistics service in Ghana. Fast, reliable delivery with 15+ trucks, 50+ pickup stations, and 2000+ successful monthly deliveries.',
    siteName: 'Ezar Delivery Service',
    images: [
      {
        url: '/ezarlogo.png',
        width: 1200,
        height: 630,
        alt: 'Ezar Delivery Service Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezar Delivery Service - Professional Logistics Solutions',
    description: 'Leading delivery service in Ghana with 15+ trucks and 50+ pickup stations. Fast, reliable, customer-centric logistics solutions.',
    images: ['/ezarlogo.png'],
    creator: '@ezardelivery',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code', // Replace with actual code from Google Search Console
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
  alternates: {
    canonical: 'https://edsghana.com',
  },
  category: 'Logistics & Transportation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GH">
      <head>
        <meta name="theme-color" content="#30AF5B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ezar Delivery" />
        <link rel="apple-touch-icon" href="/ezarlogo.png" />
      </head>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
