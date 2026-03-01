import type { Metadata } from 'next'
import { locations } from '@/lib/data/locations'
import RevealWrapper from '@/components/ui/RevealWrapper'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'יצירת קשר | קביעת תור',
  description: 'צרו קשר עם ד"ר נטלי דניאל לקביעת תור באחת מהקליניקות בירושלים או מודיעין.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt border-b border-border pt-28 pb-14">
        <div className="container-main text-center">
          <RevealWrapper>
            <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              אנחנו כאן בשבילכם
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-heading mb-4">
              יצירת קשר
            </h1>
            <p className="text-muted font-sans text-lg max-w-xl mx-auto">
              קבעו תור, שאלו שאלה, או פשוט פנו אלינו — נשמח לעזור.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Locations */}
            <div>
              <RevealWrapper direction="right">
                <h2 className="font-sans text-2xl font-bold text-heading mb-6">פרטי הקליניקות</h2>
              </RevealWrapper>
              <div className="space-y-5">
                {locations.map((loc, i) => (
                  <RevealWrapper key={loc.id} delay={i * 0.15} direction="right">
                    <div className="card p-6">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-primary-subtle flex items-center justify-center flex-shrink-0 text-xl">📍</div>
                        <div>
                          <h3 className="font-sans font-bold text-base text-heading">{loc.name}</h3>
                          <p className="text-primary text-sm font-sans">{loc.city}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <span className="text-muted text-sm mt-0.5">📌</span>
                          <p className="text-body font-sans text-sm">{loc.address}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted text-sm">📞</span>
                          <a href={`tel:${loc.phone.replace(/[-\s*]/g, '')}`} className="text-primary font-sans text-sm font-semibold hover:text-primary-dark transition-colors">
                            {loc.phone}
                          </a>
                        </div>
                      </div>
                      <div className="bg-surface-alt rounded-xl p-4">
                        <p className="text-xs font-sans font-bold text-heading uppercase tracking-wider mb-3">שעות קבלה</p>
                        <div className="space-y-1.5">
                          {loc.hours.map((h) => (
                            <div key={h.day} className="flex justify-between">
                              <span className="text-body font-sans text-sm">{h.day}</span>
                              <span className="text-muted font-sans text-sm">{h.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted/70 font-sans text-xs mt-3">{loc.notes}</p>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <RevealWrapper direction="left">
                <h2 className="font-sans text-2xl font-bold text-heading mb-6">שלחו לנו הודעה</h2>
                <ContactForm />
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
