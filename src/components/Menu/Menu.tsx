import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Menu.css'
import { Button } from '../Button/Button'

export interface MenuItem {
  label: string
  onSelect?: () => void
  disabled?: boolean
  /** When defined, renders a selected-state checkmark and switches the item's role to menuitemradio. */
  selected?: boolean
}

export interface MenuProps {
  label: ReactNode
  items: MenuItem[]
}

export function Menu({ label, items }: MenuProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="ds-menu" ref={containerRef}>
      <Button
        variant="secondary"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        iconRight={<ChevronIcon />}
      >
        {label}
      </Button>
      {open && (
        <ul className="ds-menu__list" role="menu">
          {items.map((item, i) => {
            const hasSelection = item.selected !== undefined
            return (
              <li key={i} role="none">
                <button
                  role={hasSelection ? 'menuitemradio' : 'menuitem'}
                  aria-checked={hasSelection ? item.selected : undefined}
                  type="button"
                  className="ds-menu__item"
                  disabled={item.disabled}
                  onClick={() => {
                    item.onSelect?.()
                    setOpen(false)
                  }}
                >
                  {hasSelection && (
                    <span className="ds-menu__check">{item.selected && <CheckIcon />}</span>
                  )}
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
