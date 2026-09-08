import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', iconLeft, iconRight, className, children, ...rest }, ref) => {
    const classes = ['ds-button', `ds-button--${variant}`, `ds-button--${size}`, className]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} className={classes} {...rest}>
        {iconLeft && <span className="ds-button__icon">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ds-button__icon">{iconRight}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
