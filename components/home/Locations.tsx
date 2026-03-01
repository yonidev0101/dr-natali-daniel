import { locations } from '@/lib/data/locations'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Locations() {
  return (
    <section id="locations" className="section-padding bg-cream-dark">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="קליניקות"
            title="איפה אנחנו?"
            subtitle="שתי קליניקות לשירותכם — בירושלים ובמודיעין."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <RevealWrapper key={loc.id} delay={i * 0.15}>
              <div className="bg-white rounded-sm p-8 shadow-sm border border-ink/5 hover:shadow-md transition-shadow h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink">{loc.name}</h3>
                    <p className="text-gold text-sm font-sans mt-1">{loc.city}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-gold text-base mt-0.5">📍</span>
                  <p className="text-ink/70 font-sans text-sm">{loc.address}</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold text-base">📞</span>
                  <a
                    href={`tel:${loc.phone.replace(/[-\s*]/g, '')}`}
                    className="text-ink font-sans text-sm font-medium hover:text-gold transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <h4 className="text-xs font-sans font-medium text-gold uppercase tracking-wider mb-3">
                    שעות קבלה
                  </h4>
                  <div className="space-y-1.5">
                    {loc.hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center">
                        <span className="text-ink font-sans text-sm">{h.day}</span>
                        <span className="text-ink/60 font-sans text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <p className="text-ink/50 font-sans text-xs border-t border-ink/10 pt-4 leading-relaxed">
                  {loc.notes}
                </p>

                {/* Map link */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-sans hover:text-gold-light transition-colors"
                >
                  פתח במפה
                  <span>←</span>
                </a>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
