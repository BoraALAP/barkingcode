import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Lexend, Montserrat } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title:
    'Barking Code | Expert Mobile & Web Design Agency | Fixed-Price Subscriptions',
  description:
    'Elevate your brand with Barking Code’s expert mobile & web design, UI/UX, and no-code development. Enjoy fixed-price monthly subscriptions, unlimited revisions, and fast delivery. Book a call today!',
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.ico' },
      {
        url: '/assets/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/assets/favicon/apple-touch-icon.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${montserrat.variable}`}>
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body
        className={`pt-24 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white ">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
