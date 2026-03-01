import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

const steps = [
  {
    number: '01',
    title: 'קביעת תור',
    description: 'פנו אלינו בטלפון או דרך האתר. נקבע תור בזמן הנוח לכם ונאשר את הפגישה.',
  },
  {
    number: '02',
    title: 'ביקור ראשוני',
    description: 'שיחה מעמיקה על ההיסטוריה הרפואית, התסמינים ואיכות החיים — 45–60 דקות.',
  },
  {
    number: '03',
    title: 'בדיקות ואבחון',
    description: 'בדיקות עקיצה, בדיקות דם ובדיקות נוספות לזיהוי מדויק של הגורמים לאלרגיה.',
  },
  {
    number: '04',
    title: 'תוכנית טיפול',
    description: 'תוכנית טיפול מותאמת אישית — תרופות, שינויי אורח חיים ואימונותרפיה במידת הצורך.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-ink">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="תהליך הטיפול"
            title="איך זה עובד?"
            subtitle="תהליך פשוט וברור מהפגישה הראשונה ועד לתוצאות."
            light
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-8 right-16 left-16 h-px bg-gold/20" />

          {steps.map((step, i) => (
            <RevealWrapper key={step.number} delay={i * 0.1}>
              <div className="relative">
                {/* Number */}
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 relative bg-ink">
                  <span className="font-serif text-xl font-bold text-gold">{step.number}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sage font-sans text-sm leading-relaxed">{step.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
