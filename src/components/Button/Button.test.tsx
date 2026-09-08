import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeDefined()
  })

  it('applies the variant class', () => {
    render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button').className).toContain('ds-button--secondary')
  })

  it('renders iconLeft and iconRight when provided', () => {
    render(
      <Button iconLeft={<svg data-testid="icon-left" />} iconRight={<svg data-testid="icon-right" />}>
        Save
      </Button>,
    )
    expect(screen.getByTestId('icon-left')).toBeDefined()
    expect(screen.getByTestId('icon-right')).toBeDefined()
  })

  it('omits icon wrappers when no icons are provided', () => {
    render(<Button>Save</Button>)
    expect(document.querySelector('.ds-button__icon')).toBeNull()
  })
})
