import type { Metadata } from 'next'
import { locations } from '@/lib/data/locations'
import RevealWrapper from '@/components/ui/RevealWrapper'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'יצירת קשר | קביעת תור',
  description:
    'צרו קשר עם ד"ר נטלי דניאל לקביעת תור באחת מהקליניקות בירושלים או מודיעין. טיפול באלרגיות ואימונולוגיה.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16">
        <div className="container-main text-center">
          <RevealWrapper>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
                אנחנו כאן בשבילכם
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              יצירת קשר
            </h1>
            <p className="text-sage-light font-sans text-lg max-w-xl mx-auto">
              קבעו תור לביקור ראשוני, שאלו שאלה, או פשוט פנו אלינו — נשמח לעזור.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Locations + info */}
            <div>
              <RevealWrapper direction="right">
                <h2 className="font-serif text-2xl font-bold text-ink mb-6">פרטי הקליניקות</h2>
              </RevealWrapper>

              <div className="space-y-6">
                {locations.map((loc, i) => (
                  <RevealWrapper key={loc.id} delay={i * 0.15} direction="right">
                    <div className="bg-white rounded-sm p-6 shadow-sm border border-ink/5">
                      <h3 className="font-serif text-lg font-bold text-ink mb-4">{loc.name}</h3>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-gold mt-0.5">📍</span>
                          <p className="text-ink/70 font-sans text-sm">{loc.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gold">📞</span>
                          <a
                            href={`tel:${loc.phone.replace(/[-\s*]/g, '')}`}
                            className="text-ink font-sans text-sm font-medium hover:text-gold transition-colors"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      </div>

                      <h4 className="text-xs font-sans font-medium text-gold uppercase tracking-wider mb-2">
                        שעות קבלה
                      </h4>
                      <div className="space-y-1">
                        {loc.hours.map((h) => (
                          <div key={h.day} className="flex justify-between">
                            <span className="text-ink font-sans text-sm">{h.day}</span>
                            <span className="text-ink/60 font-sans text-sm">{h.time}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-ink/40 font-sans text-xs mt-3 border-t border-ink/10 pt-3">
                        {loc.notes}
                      </p>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <RevealWrapper direction="left">
                <h2 className="font-serif text-2xl font-bold text-ink mb-6">שלחו לנו הודעה</h2>
                <ContactForm />
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
