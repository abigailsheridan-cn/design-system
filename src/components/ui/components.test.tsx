import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'
import { Badge } from './badge'
import { Checkbox } from './checkbox'
import { Input } from './input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

describe('Button', () => {
  it('renders children and applies the variant', () => {
    render(<Button variant="secondary">Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeDefined()
    expect(button.dataset.variant).toBe('secondary')
  })
})

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge variant="destructive">Danger</Badge>)
    expect(screen.getByText('Danger')).toBeDefined()
  })
})

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'unchecked')
  })
})

describe('Input', () => {
  it('renders with a placeholder', () => {
    render(<Input placeholder="Jane Doe" />)
    expect(screen.getByPlaceholderText('Jane Doe')).toBeDefined()
  })
})

describe('Select', () => {
  it('renders the trigger with a placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>,
    )
    expect(screen.getByText('Select a country')).toBeDefined()
  })
})

describe('DropdownMenu', () => {
  it('renders the trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    expect(screen.getByRole('button', { name: 'Actions' })).toBeDefined()
  })
})
