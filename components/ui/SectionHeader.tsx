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
        <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-pill text-xs font-sans font-semibold tracking-wider uppercase ${
          light
            ? 'bg-white/10 text-white'
            : 'bg-primary-subtle text-primary'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-primary'}`} />
          {eyebrow}
        </div>
      )}
      {eyebrow && <div className={centered ? '' : ''} />}
      <h2 className={`font-sans text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight ${
        light ? 'text-white' : 'text-heading'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg font-sans max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${
          light ? 'text-white/70' : 'text-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
