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
  keywords: 'cheap flights, flight deals, airline tickets, travel deals, book flights online, flight comparison, travel packages, vacation deals, international flights, domestic flights, airline bookings',
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KWJ3T7ZSDK"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KWJ3T7ZSDK');
            `,
          }}
        />
        {/* Third Party Script */}
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
