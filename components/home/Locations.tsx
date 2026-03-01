import { locations } from '@/lib/data/locations'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Locations() {
  return (
    <section id="locations" className="section-padding bg-white">
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
              <div className="card p-8 h-full group hover:-translate-y-1 transition-transform duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-subtle flex items-center justify-center flex-shrink-0 text-xl group-hover:bg-primary-light transition-colors">
                    📍
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-heading">{loc.name}</h3>
                    <p className="text-primary text-sm font-sans font-medium mt-0.5">{loc.city}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-muted text-sm mt-0.5">📌</span>
                    <p className="text-body font-sans text-sm">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted text-sm">📞</span>
                    <a
                      href={`tel:${loc.phone.replace(/[-\s*]/g, '')}`}
                      className="text-primary font-sans text-sm font-semibold hover:text-primary-dark transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-surface-alt rounded-xl p-4 mb-4">
                  <p className="text-xs font-sans font-bold text-heading uppercase tracking-wider mb-3">שעות קבלה</p>
                  <div className="space-y-2">
                    {loc.hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center">
                        <span className="text-body font-sans text-sm">{h.day}</span>
                        <span className="text-muted font-sans text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-muted font-sans text-xs leading-relaxed mb-4">{loc.notes}</p>

                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-sans font-semibold hover:text-primary-dark transition-colors"
                >
                  פתח במפה ←
                </a>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
