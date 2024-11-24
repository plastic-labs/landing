import { Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const departureMono = localFont({
  src: [
    { path: '../fonts/DepartureMono-Regular.woff2' },
    { path: '../fonts/DepartureMono-Regular.woff' },
    { path: '../fonts/DepartureMono-Regular.otf' },
  ],
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
