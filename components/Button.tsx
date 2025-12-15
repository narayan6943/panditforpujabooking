import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  asLink?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  asLink = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center cursor-pointer'

  const variantStyles = {
    primary: 'bg-gradient-to-r from-saffron-700 to-saffron-600 text-white hover:from-saffron-800 hover:to-saffron-700 border border-gold-400/50 shadow-md hover:shadow-lg',
    secondary: 'bg-maroon-800 text-white hover:bg-maroon-900 border border-gold-500/30',
    outline: 'border-2 border-gold-600 text-maroon-900 hover:bg-gold-50 hover:text-maroon-950 font-serif tracking-wide',
    ghost: 'text-maroon-800 hover:bg-maroon-50',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // Handle hash links (anchor links) - client-side only
  const handleHashClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      // Only run on client-side
      if (typeof window !== 'undefined') {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    if (onClick) {
      onClick(e as any)
    }
  }

  // Determine render type consistently for SSR (must be deterministic)
  // Use strict boolean checks to ensure server and client render the same
  const isHashLink = href ? href.startsWith('#') : false
  const isNextLink = Boolean(href && !isHashLink && asLink)

  // If href is provided and it's a Next.js route (not hash), use Link
  if (isNextLink && href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        {children}
      </Link>
    )
  }

  // If href is a hash link, use button with onClick
  if (isHashLink) {
    return (
      <button
        type="button"
        className={combinedClassName}
        onClick={handleHashClick}
        {...props}
      >
        {children}
      </button>
    )
  }

  // Default: render as button
  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

