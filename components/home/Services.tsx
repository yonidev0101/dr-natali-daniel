import { services } from '@/lib/data/services'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="תחומי מומחיות"
            title="שירותים רפואיים"
            subtitle="טיפול מקיף בכל סוגי האלרגיות ומחלות המערכת החיסונית, עם גישה מותאמת אישית לכל מטופל."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <RevealWrapper key={service.id} delay={i * 0.05}>
              <div className="card-service group cursor-default h-full">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-serif text-base font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink/60 text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
