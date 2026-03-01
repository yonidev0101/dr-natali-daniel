import type { Metadata } from 'next'
import Link from 'next/link'
import { faqItems, faqCategories } from '@/lib/data/faq'
import RevealWrapper from '@/components/ui/RevealWrapper'
import FaqItem from '@/components/ui/FaqItem'

export const metadata: Metadata = {
  title: 'שאלות נפוצות | אלרגולוגיה ואימונולוגיה',
  description: 'תשובות לשאלות הנפוצות ביותר על ביקורים, בדיקות, טיפולים וביטוח.',
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt border-b border-border pt-28 pb-14">
        <div className="container-main text-center">
          <RevealWrapper>
            <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              יש לכם שאלות?
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-heading mb-4">
              שאלות נפוצות
            </h1>
            <p className="text-muted font-sans text-lg max-w-xl mx-auto">
              תשובות לשאלות הנפוצות ביותר על הביקורים, הבדיקות, הטיפולים וביטוח הבריאות.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          {faqCategories.map((category, catIndex) => {
            const items = faqItems.filter((item) => item.category === category)
            return (
              <RevealWrapper key={category} delay={catIndex * 0.1}>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-7 h-7 rounded-lg bg-primary-subtle flex items-center justify-center text-primary text-xs font-bold">
                      {catIndex + 1}
                    </span>
                    <h2 className="font-sans text-lg font-bold text-heading">{category}</h2>
                    <span className="flex-1 h-px bg-border" />
                  </div>
                  <div className="card px-6 md:px-8">
                    {items.map((item) => (
                      <FaqItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            )
          })}

          {/* CTA */}
          <RevealWrapper delay={0.4}>
            <div className="bg-primary rounded-2xl p-8 text-center mt-4 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="relative z-10">
                <h3 className="font-sans text-xl font-extrabold text-white mb-2">לא מצאתם תשובה?</h3>
                <p className="text-white/75 font-sans text-sm mb-5">פנו אלינו ישירות — נשמח לענות על כל שאלה.</p>
                <Link href="/contact" className="inline-block bg-white text-primary font-sans font-bold px-6 py-3 rounded-pill hover:bg-primary-light transition-colors">
                  צרו קשר
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
