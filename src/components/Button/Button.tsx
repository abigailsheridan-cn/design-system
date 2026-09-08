import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...rest }, ref) => {
    const classes = ['ds-button', `ds-button--${variant}`, `ds-button--${size}`, className]
      .filter(Boolean)
      .join(' ')

    return <button ref={ref} className={classes} {...rest} />
  },
)

Button.displayName = 'Button'
