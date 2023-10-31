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
