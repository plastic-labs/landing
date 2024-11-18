/* eslint-disable import/no-default-export */
import { Metadata } from 'next'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Plastic Labs 🥽',
  authors: [{ name: 'Plastic Labs', url: 'https://plasticlabs.ai' }],
  metadataBase: new URL('https://plasticlabs.ai'),
  openGraph: {
    title: 'Plastic Labs',
    description: 'Building at the intersection of Human and Machine Learning',
    siteName: 'Plastic Labs',
    type: 'website',
    url: 'https://plasticlabs.ai',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Plastic Labs',
      },
    ],
    locale: 'en_US',
  },
  description: 'Building at the intersection of Human and Machine Learning',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}

export default RootLayout
