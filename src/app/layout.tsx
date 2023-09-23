import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './modules/header'
import Footer from './modules/footer'

const grotesk = localFont({
  src: [
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Regular.woff2",
      style: 'normal',
      weight: '400'
    },
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Bold.woff2",
      style: 'normal',
      weight: '700'
    },
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Black.woff2",
      style: 'normal',
      weight: '900'
    },
  ],
  variable: '--font-grotesk'
})
 

export const metadata: Metadata = {
  title: 'Gerbas Tani | KIM Sumbersari',
  description: 'Gerbas Tani Desa Kedung Rejo, Kab. Lumajang. Diselenggarakan oleh KIM Sumbersari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={grotesk.className}>
      <body className="overflow-x-hidden bg-white bg-none">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
