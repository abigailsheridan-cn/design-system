import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import './Input.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const classes = ['ds-input', error && 'ds-input--error', className].filter(Boolean).join(' ')

    return (
      <div className="ds-input-wrapper">
        {label && (
          <label className="ds-input-label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input ref={ref} id={inputId} className={classes} {...rest} />
        {error && <span className="ds-input-error-text">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
