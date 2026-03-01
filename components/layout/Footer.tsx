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
  { href: '/#services', label: 'אלרגיות מזון' },
  { href: '/#services', label: 'אסתמה' },
  { href: '/#services', label: 'קדחת השחת' },
  { href: '/#services', label: 'אלרגיות עור' },
  { href: '/#services', label: 'אימונותרפיה' },
  { href: '/#services', label: 'ארס חרקים' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <span className="text-white text-xs font-serif font-bold">נד</span>
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-white">ד&quot;ר נטלי דניאל</p>
                <p className="text-xs text-sage">אלרגולוגיה ואימונולוגיה</p>
              </div>
            </div>
            <p className="text-sage text-sm font-sans leading-relaxed">
              מומחית לאלרגולוגיה ואימונולוגיה קלינית עם מעל 15 שנות ניסיון. מספקת טיפול מקיף ומותאם אישית.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sage hover:text-gold text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4">תחומי טיפול</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sage hover:text-gold text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4">צרו קשר</h3>
            <address className="not-italic space-y-3">
              <div>
                <p className="text-gold text-xs font-sans font-medium uppercase tracking-wider mb-1">ירושלים</p>
                <p className="text-sage text-sm font-sans">המלך דוד 23, ירושלים</p>
                <a href="tel:025551234" className="text-sage hover:text-gold text-sm font-sans transition-colors">
                  02-555-1234
                </a>
              </div>
              <div>
                <p className="text-gold text-xs font-sans font-medium uppercase tracking-wider mb-1">מודיעין — מכבי</p>
                <p className="text-sage text-sm font-sans">עמינדב 1, מודיעין</p>
                <a href="tel:*3555" className="text-sage hover:text-gold text-sm font-sans transition-colors">
                  *3555
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sage/60 text-xs font-sans">
            © {currentYear} ד&quot;ר נטלי דניאל. כל הזכויות שמורות.
          </p>
          <p className="text-sage/40 text-xs font-sans">
            המידע באתר אינו מהווה ייעוץ רפואי. יש להתייעץ עם רופא.
          </p>
        </div>
      </div>
    </footer>
  )
}
