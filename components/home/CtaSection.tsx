import RevealWrapper from '@/components/ui/RevealWrapper'

export default function CtaSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <RevealWrapper>
          <div className="bg-primary rounded-2xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/5" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                מוכנים להתחיל?
              </span>

              <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                רוצים לקבוע פגישה?
              </h2>
              <p className="text-white/75 font-sans text-lg mb-10 max-w-lg mx-auto">
                אל תדחו את הטיפול. פנו אלינו היום לתיאום ביקור ראשוני.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:025551234"
                  className="flex items-center gap-2.5 bg-white text-primary font-sans font-bold px-7 py-3.5 rounded-pill hover:bg-primary-light transition-colors shadow-sm text-base"
                >
                  <span>📞</span>
                  02-555-1234 — ירושלים
                </a>
                <a
                  href="tel:*3555"
                  className="flex items-center gap-2.5 border-2 border-white/40 text-white font-sans font-semibold px-7 py-3.5 rounded-pill hover:bg-white/10 transition-colors text-base"
                >
                  <span>📞</span>
                  *3555 — מכבי מודיעין
                </a>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
