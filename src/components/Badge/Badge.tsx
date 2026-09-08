import type { HTMLAttributes } from 'react'
import './Badge.css'

export type BadgeVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'neutral', className, ...rest }: BadgeProps) {
  const classes = ['ds-badge', `ds-badge--${variant}`, className].filter(Boolean).join(' ')
  return <span className={classes} {...rest} />
}
