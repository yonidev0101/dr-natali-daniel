import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import Process from '@/components/home/Process'
import Locations from '@/components/home/Locations'
import BlogPreview from '@/components/home/BlogPreview'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'ד"ר נטלי דניאל | אלרגולוגיה ואימונולוגיה קלינית',
  description:
    'מומחית לאלרגולוגיה ואימונולוגיה קלינית בירושלים ומודיעין. טיפול באלרגיות מזון, אסתמה, אלרגיות עונתיות ומחלות עור עם מעל 15 שנות ניסיון.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Process />
      <Locations />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
