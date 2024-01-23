import './globals.css'
import type { Metadata } from 'next'
import { Inter, Exo_2 } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
})

export const metadata: Metadata = {
  title: 'Plastic Labs 🥽',
  authors: [{ name: "Plastic Labs", url: "https://plasticlabs.ai" }],
  metadataBase: new URL('https://plasticlabs.ai'),
  openGraph: {
    title: "Plastic Labs",
    description: "Building at the intersection of Human and Machine Learning",
    siteName: "Plastic Labs",
    type: "website",
    url: "https://plasticlabs.ai",
    images: [
      {
        url: "/opengraph-image-new.png",
        width: 1800,
        height: 1600,
        alt: "Plastic Labs"
      }
    ],
    locale: "en_US",
  },
  description: 'Building at the intersection of Human and Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo2.variable}>{children}</body>
    </html>
  )
}
