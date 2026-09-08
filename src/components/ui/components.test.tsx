import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Button } from './button'
import { Badge } from './badge'
import { Checkbox } from './checkbox'
import { Input } from './input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Alert, AlertTitle, AlertDescription } from './alert'
import { Toaster, toast } from './toast'

describe('Button', () => {
  it('renders children and applies the variant', () => {
    render(<Button variant="secondary">Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeDefined()
    expect(button.className).toContain('bg-secondary')
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
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
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
        <DropdownMenuTrigger render={<Button />}>Actions</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    expect(screen.getByRole('button', { name: 'Actions' })).toBeDefined()
  })
})

describe('Tooltip', () => {
  it('renders the trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<Button />}>Hover me</TooltipTrigger>
          <TooltipContent>Helpful info</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeDefined()
  })
})

describe('Alert', () => {
  it('renders the title and description', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>,
    )
    expect(screen.getByText('Error')).toBeDefined()
    expect(screen.getByText('Something went wrong.')).toBeDefined()
    expect(screen.getByRole('alert').dataset.slot).toBe('alert')
  })
})

describe('Toaster', () => {
  it('renders without crashing', () => {
    const { container } = render(<Toaster />)
    expect(container).toBeDefined()
  })

  it('shows a toast added via toast.add()', async () => {
    render(<Toaster />)
    await act(async () => {
      toast.add({ description: 'Saved successfully' })
    })
    expect(await screen.findByText('Saved successfully')).toBeDefined()
  })
})
