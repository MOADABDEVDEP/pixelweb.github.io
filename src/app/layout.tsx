import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PixelStack Enterprise - High-Performance Digital Experience Platform',
  description: 'Enterprise-Grade DXP engineered for modern commerce. Fault-tolerant microservices architecture handling 700K+ concurrent users with zero downtime.',
  keywords: [
    'Digital Experience Platform',
    'Enterprise Commerce',
    'Microservices Architecture',
    'Headless CMS',
    'High Availability',
    'Docker Orchestration',
    'PostgreSQL Clustering',
    'Redis Sentinel',
    'Next.js',
    'Strapi',
    'Saleor'
  ],
  authors: [{ name: 'PixelStack Development Group' }],
  openGraph: {
    title: 'PixelStack Enterprise - Production-Ready Digital Commerce Platform',
    description: 'Fault-tolerant microservices architecture with PostgreSQL clustering, Redis Sentinel, and advanced observability. Built for enterprise scale.',
    url: 'https://matinsanei.github.io/Pixelstack',
    siteName: 'PixelStack Enterprise',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PixelStack Enterprise Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelStack Enterprise - Digital Experience Platform',
    description: 'Enterprise-grade microservices DXP with fault-tolerant infrastructure. 700K concurrent users, zero downtime.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
