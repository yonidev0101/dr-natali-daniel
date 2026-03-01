import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'בית' },
  { href: '/#services', label: 'שירותים' },
  { href: '/#about', label: 'אודות' },
  { href: '/blog', label: 'בלוג' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'יצירת קשר' },
]

const serviceLinks = [
  'אלרגיות מזון', 'אסתמה', 'קדחת השחת',
  'אלרגיות עור', 'אימונותרפיה', 'ארס חרקים',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-blue">
                <span className="text-white text-xs font-sans font-bold">נד</span>
              </div>
              <div>
                <p className="font-sans font-bold text-sm text-heading">ד&quot;ר נטלי דניאל</p>
                <p className="text-xs text-muted">אלרגולוגיה ואימונולוגיה</p>
              </div>
            </div>
            <p className="text-muted text-sm font-sans leading-relaxed">
              מומחית לאלרגולוגיה ואימונולוגיה קלינית עם מעל 15 שנות ניסיון. טיפול מקיף ומותאם אישית.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-bold text-sm text-heading uppercase tracking-wider mb-4">ניווט</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted hover:text-primary text-sm font-sans transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-bold text-sm text-heading uppercase tracking-wider mb-4">תחומי טיפול</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-muted hover:text-primary text-sm font-sans transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold text-sm text-heading uppercase tracking-wider mb-4">צרו קשר</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">📍</span>
                </div>
                <div>
                  <p className="text-xs font-sans font-semibold text-heading mb-0.5">ירושלים</p>
                  <p className="text-muted text-sm font-sans">המלך דוד 23</p>
                  <a href="tel:025551234" className="text-primary text-sm font-sans hover:text-primary-dark transition-colors">02-555-1234</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">🏥</span>
                </div>
                <div>
                  <p className="text-xs font-sans font-semibold text-heading mb-0.5">מודיעין — מכבי</p>
                  <p className="text-muted text-sm font-sans">עמינדב 1</p>
                  <a href="tel:*3555" className="text-primary text-sm font-sans hover:text-primary-dark transition-colors">*3555</a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-main py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs font-sans">
            © {year} ד&quot;ר נטלי דניאל. כל הזכויות שמורות.
          </p>
          <p className="text-muted/60 text-xs font-sans">
            המידע באתר אינו מהווה ייעוץ רפואי. יש להתייעץ עם רופא.
          </p>
        </div>
      </div>
    </footer>
  )
}
