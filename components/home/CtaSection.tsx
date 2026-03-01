import RevealWrapper from '@/components/ui/RevealWrapper'

export default function CtaSection() {
  return (
    <section className="section-padding bg-ink-light">
      <div className="container-main text-center">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
              מוכנים להתחיל?
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            רוצים לקבוע פגישה?
          </h2>
          <p className="text-sage-light font-sans text-lg mb-10 max-w-xl mx-auto">
            אל תדחו את הטיפול. פנו אלינו היום לתיאום ביקור ראשוני.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:025551234"
              className="flex items-center gap-3 bg-gold text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-gold-light transition-colors text-base"
            >
              <span>📞</span>
              02-555-1234 — ירושלים
            </a>
            <a
              href="tel:*3555"
              className="flex items-center gap-3 border border-white/40 text-white font-sans font-medium px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors text-base"
            >
              <span>📞</span>
              *3555 — מכבי מודיעין
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
