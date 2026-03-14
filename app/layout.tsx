import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Trip In Hand - Find Cheap Flights & Travel Deals',
  description: 'Compare and book cheap flights to destinations worldwide. Find the best travel deals, airline tickets, and vacation packages with Trip In Hand.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.jpg',
      }
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="tp-script"
          strategy="afterInteractive"
          src="https://tpembars.com/NTA3ODI0.js?t=507824"
        />
        </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
      
    </html>
  )
}
