import RevealWrapper from '@/components/ui/RevealWrapper'
import Button from '@/components/ui/Button'

const credentials = [
  'מומחית מוסמכת באלרגולוגיה ואימונולוגיה קלינית',
  'בוגרת הדסה עין כרם — רפואה',
  'התמחות בטכניון — מרכז רפואי כרמל',
  'חברה בלשכה הישראלית לאלרגולוגיה ואימונולוגיה',
  'חברה ב-EAACI (האיגוד האירופי)',
  'מרצה בכנסים לאומיים ובינלאומיים',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <RevealWrapper direction="right">
            <div className="relative">
              {/* Photo frame */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-ink-light max-w-md mx-auto lg:mx-0">
                {/* Placeholder for doctor's photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-ink-light to-ink flex items-center justify-center">
                  <div className="text-center text-white/30">
                    <div className="text-8xl mb-4">👩‍⚕️</div>
                    <p className="text-sm font-sans">תמונה של ד&quot;ר דניאל</p>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-3 border border-gold/30 rounded-sm pointer-events-none" />
              </div>

              {/* Gold badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-6 bg-gold text-white rounded-sm p-4 shadow-lg">
                <p className="font-serif text-2xl font-bold leading-none">15+</p>
                <p className="text-xs font-sans opacity-90 mt-1">שנות ניסיון</p>
              </div>

              {/* Decorative square */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-gold/30 rounded-sm -z-10" />
            </div>
          </RevealWrapper>

          {/* Text side */}
          <RevealWrapper direction="left" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
                  אודות הרופאה
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
                ד&quot;ר נטלי דניאל
                <br />
                <span className="text-ink-light text-2xl md:text-3xl font-normal">
                  מומחית לאלרגולוגיה
                </span>
              </h2>

              <p className="text-ink/70 font-sans text-base leading-relaxed mb-4">
                ד&quot;ר נטלי דניאל היא מומחית מוסמכת לאלרגולוגיה ואימונולוגיה קלינית, עם ניסיון של מעל 15 שנה בטיפול במבוגרים וילדים.
              </p>
              <p className="text-ink/70 font-sans text-base leading-relaxed mb-8">
                גישתה הטיפולית משלבת אבחון מדויק המבוסס על הטכנולוגיה המתקדמת ביותר, עם טיפול אנושי וסבלני המותאם לכל מטופל ולצרכיו הייחודיים.
              </p>

              {/* Credentials */}
              <ul className="space-y-2.5 mb-8">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-ink/70 font-sans text-sm">{cred}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary" size="lg">
                קביעת תור ראשוני
              </Button>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
