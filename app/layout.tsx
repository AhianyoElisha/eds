import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Ezar Delivery Service - Your Reliable Logistics Partner',
  description: 'Connecting your warehouse to your network, one delivery at a time. Specializing in last-mile distribution with comprehensive manifest system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
