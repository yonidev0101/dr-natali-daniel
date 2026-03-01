interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-gold" />
          <span className={`text-xs font-sans font-medium tracking-widest uppercase ${light ? 'text-gold-light' : 'text-gold'}`}>
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-sans max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-sage-light' : 'text-ink/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
