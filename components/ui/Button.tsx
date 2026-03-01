import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'outline-white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
}

const variants = {
  primary: 'bg-gold text-white hover:bg-gold-light border border-gold hover:border-gold-light',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-white',
  'outline-white': 'border border-white/50 text-white hover:border-gold hover:text-gold',
  ghost: 'text-gold hover:text-gold-light underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  type = 'button',
  disabled,
  className = '',
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide rounded-sm transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
