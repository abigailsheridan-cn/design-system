import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import './Checkbox.css'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...rest }, ref) => {
    const classes = ['ds-checkbox', className].filter(Boolean).join(' ')
    const input = <input ref={ref} type="checkbox" className={classes} id={id} {...rest} />

    if (!label) return input

    return (
      <label className="ds-checkbox-label" htmlFor={id}>
        {input}
        {label}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
