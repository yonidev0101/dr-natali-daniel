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
            subtitle="טיפול מקיף בכל סוגי האלרגיות ומחלות המערכת החיסונית, עם גישה מותאמת אישית."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <RevealWrapper key={service.id} delay={i * 0.04}>
              <div className="card p-5 group cursor-default h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-subtle flex items-center justify-center text-xl mb-4 group-hover:bg-primary-light transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-sans font-bold text-sm text-heading mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-xs font-sans leading-relaxed">
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
