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
    <section id="about" className="section-padding bg-surface-alt">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <RevealWrapper direction="right">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Photo frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-primary-light">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
                  <div className="text-center text-primary/30">
                    <div className="text-8xl mb-4">👩‍⚕️</div>
                    <p className="text-sm font-sans">תמונה של ד&quot;ר דניאל</p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -left-5 bg-primary text-white rounded-2xl px-5 py-4 shadow-blue">
                <p className="font-sans font-extrabold text-3xl leading-none">15+</p>
                <p className="text-white/80 text-xs font-sans mt-1">שנות ניסיון</p>
              </div>

              {/* Floating card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card-hover border border-border p-3 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-base">🏅</span>
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-heading">מומחית מוסמכת</p>
                  <p className="text-xs text-muted">אלרגולוגיה ואימונולוגיה</p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Text side */}
          <RevealWrapper direction="left" delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                אודות הרופאה
              </span>

              <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-heading leading-tight mb-2">
                ד&quot;ר נטלי דניאל
              </h2>
              <p className="text-primary font-sans font-semibold text-lg mb-5">
                מומחית לאלרגולוגיה ואימונולוגיה קלינית
              </p>

              <p className="text-body font-sans text-base leading-relaxed mb-4">
                ד&quot;ר נטלי דניאל היא מומחית מוסמכת עם ניסיון של מעל 15 שנה בטיפול במבוגרים וילדים הסובלים מאלרגיות ומחלות חיסוניות.
              </p>
              <p className="text-body font-sans text-base leading-relaxed mb-8">
                גישתה הטיפולית משלבת אבחון מדויק עם הטכנולוגיה המתקדמת ביותר, לצד טיפול אנושי וסבלני המותאם לכל מטופל.
              </p>

              {/* Credentials */}
              <ul className="space-y-2.5 mb-8">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-body font-sans text-sm">{cred}</span>
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
