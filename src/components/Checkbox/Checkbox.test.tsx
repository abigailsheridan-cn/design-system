import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders an unchecked checkbox by default', () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders a label when provided', () => {
    render(<Checkbox id="terms" label="Accept terms" />)
    expect(screen.getByLabelText('Accept terms')).toBeDefined()
  })
})
