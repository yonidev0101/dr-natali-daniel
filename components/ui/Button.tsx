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
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-blue border border-primary hover:border-primary-dark',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  'outline-white': 'border border-white/40 text-white hover:bg-white hover:text-primary',
  ghost: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
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
  const classes = `inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-pill transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
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
