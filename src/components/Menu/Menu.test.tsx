import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('opens the menu when the trigger is clicked', () => {
    render(<Menu label="Actions" items={[{ label: 'Edit' }, { label: 'Delete' }]} />)
    expect(screen.queryByRole('menuitem', { name: 'Edit' })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }))
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeDefined()
  })

  it('calls onSelect and closes the menu when an item is clicked', () => {
    const onSelect = vi.fn()
    render(<Menu label="Actions" items={[{ label: 'Edit', onSelect }]} />)
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }))
    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }))
    expect(onSelect).toHaveBeenCalledOnce()
    expect(screen.queryByRole('menuitem', { name: 'Edit' })).toBeNull()
  })

  it('shows a selected-state checkmark and menuitemradio role when selected is defined', () => {
    render(
      <Menu
        label="Sort"
        items={[
          { label: 'Name', selected: true },
          { label: 'Date', selected: false },
        ]}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Sort/ }))
    expect(screen.getByRole('menuitemradio', { name: /Name/ }).getAttribute('aria-checked')).toBe('true')
    expect(screen.getByRole('menuitemradio', { name: /Date/ }).getAttribute('aria-checked')).toBe('false')
  })

  it('does not use menuitemradio for items without selected', () => {
    render(<Menu label="Actions" items={[{ label: 'Edit' }]} />)
    fireEvent.click(screen.getByRole('button', { name: /Actions/ }))
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeDefined()
  })
})
