import type { Metadata } from 'next'
import { faqItems, faqCategories } from '@/lib/data/faq'
import RevealWrapper from '@/components/ui/RevealWrapper'
import FaqItem from '@/components/ui/FaqItem'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'שאלות נפוצות | אלרגולוגיה ואימונולוגיה',
  description:
    'תשובות לשאלות הנפוצות ביותר על ביקורים, בדיקות, טיפולים וביטוח — מד"ר נטלי דניאל.',
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16">
        <div className="container-main text-center">
          <RevealWrapper>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
                יש לכם שאלות?
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              שאלות נפוצות
            </h1>
            <p className="text-sage-light font-sans text-lg max-w-xl mx-auto">
              תשובות לשאלות הנפוצות ביותר על הביקורים, הבדיקות, הטיפולים וביטוח הבריאות.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-main max-w-3xl">
          {faqCategories.map((category, catIndex) => {
            const items = faqItems.filter((item) => item.category === category)
            return (
              <RevealWrapper key={category} delay={catIndex * 0.1}>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-serif text-xl font-bold text-ink">{category}</h2>
                    <span className="flex-1 h-px bg-ink/10" />
                  </div>

                  <div className="bg-white rounded-sm shadow-sm px-6 md:px-8">
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
            <div className="bg-ink rounded-sm p-8 text-center mt-4">
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                לא מצאתם תשובה?
              </h3>
              <p className="text-sage font-sans text-sm mb-6">
                פנו אלינו ישירות — נשמח לענות על כל שאלה.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold text-white font-sans font-medium px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
              >
                צרו קשר
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
