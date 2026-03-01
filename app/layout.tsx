import type { Metadata } from 'next'
import { Frank_Ruhl_Libre, Heebo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-frank-ruhl',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ד"ר נטלי דניאל | אלרגולוגיה ואימונולוגיה קלינית',
    template: '%s | ד"ר נטלי דניאל',
  },
  description:
    'מומחית לאלרגולוגיה ואימונולוגיה קלינית בירושלים ומודיעין. טיפול באלרגיות מזון, אסתמה, אלרגיות עונתיות ומחלות עור. ניסיון של מעל 15 שנה.',
  keywords: [
    'אלרגולוגיה',
    'אימונולוגיה',
    'אלרגיות',
    'אסתמה',
    'ירושלים',
    'מודיעין',
    'ד"ר נטלי דניאל',
    'אלרגיות מזון',
    'רופאת עור',
  ],
  authors: [{ name: 'ד"ר נטלי דניאל' }],
  creator: 'ד"ר נטלי דניאל',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://dr-ndaniel.com',
    siteName: 'ד"ר נטלי דניאל',
    title: 'ד"ר נטלי דניאל | אלרגולוגיה ואימונולוגיה קלינית',
    description:
      'מומחית לאלרגולוגיה ואימונולוגיה קלינית בירושלים ומודיעין. טיפול באלרגיות מזון, אסתמה, אלרגיות עונתיות ומחלות עור.',
  },
  alternates: {
    canonical: 'https://dr-ndaniel.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${frankRuhlLibre.variable} ${heebo.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
