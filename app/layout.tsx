import type { Metadata } from 'next'
import { Great_Vibes } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Mandala Website',
  description: 'A beautiful website showcasing art and creativity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={greatVibes.variable}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

