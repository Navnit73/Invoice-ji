// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayoutClient from './components/RootLayoutClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invoice ji - Effortless Invoicing For Freelancers',
  description: 'Invoice ji is a user-friendly invoicing app designed specifically for freelancers. Create, send, and manage professional invoices with ease, helping you get paid faster and streamline your billing process.',
  keywords: 'invoicing, freelancers, billing, payments, finance, productivity',
  icons: {
    icon: '/invoice.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/invoice.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}