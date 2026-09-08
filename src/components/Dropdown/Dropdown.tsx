import { forwardRef, useId } from 'react'
import type { SelectHTMLAttributes } from 'react'
import './Dropdown.css'

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, error, className, id, children, ...rest }, ref) => {
    const generatedId = useId()
    const selectId = id ?? generatedId
    const classes = ['ds-select', error && 'ds-select--error', className].filter(Boolean).join(' ')

    return (
      <div className="ds-select-wrapper">
        {label && (
          <label className="ds-select-label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select ref={ref} id={selectId} className={classes} {...rest}>
          {children}
        </select>
        {error && <span className="ds-select-error-text">{error}</span>}
      </div>
    )
  },
)

Dropdown.displayName = 'Dropdown'
