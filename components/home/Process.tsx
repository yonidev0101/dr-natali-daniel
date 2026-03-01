import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

const steps = [
  {
    number: '01',
    title: 'קביעת תור',
    description: 'פנו אלינו בטלפון או דרך האתר. נקבע תור בזמן הנוח לכם.',
    icon: '📅',
  },
  {
    number: '02',
    title: 'ביקור ראשוני',
    description: 'שיחה מעמיקה על ההיסטוריה הרפואית והתסמינים — 45–60 דקות.',
    icon: '🗣️',
  },
  {
    number: '03',
    title: 'בדיקות ואבחון',
    description: 'בדיקות עקיצה, בדיקות דם ובדיקות נוספות לאבחון מדויק.',
    icon: '🔬',
  },
  {
    number: '04',
    title: 'תוכנית טיפול',
    description: 'תוכנית מותאמת אישית — תרופות, שינויי אורח חיים ואימונותרפיה.',
    icon: '📋',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="תהליך הטיפול"
            title="איך זה עובד?"
            subtitle="תהליך פשוט וברור מהפגישה הראשונה ועד לתוצאות."
            light
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* connector */}
          <div className="hidden lg:block absolute top-10 right-[12.5%] left-[12.5%] h-px bg-white/20" />

          {steps.map((step, i) => (
            <RevealWrapper key={step.number} delay={i * 0.1}>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                {/* Number badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <span className="text-lg">{step.icon}</span>
                  </div>
                  <span className="font-sans font-extrabold text-3xl text-white/20">{step.number}</span>
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-white/70 font-sans text-sm leading-relaxed">{step.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
