import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('associates the label with the select', () => {
    render(
      <Dropdown label="Country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Dropdown>,
    )
    expect(screen.getByLabelText('Country')).toBeDefined()
  })

  it('shows an error message and applies the error class', () => {
    render(
      <Dropdown label="Country" error="Required">
        <option value="us">United States</option>
      </Dropdown>,
    )
    expect(screen.getByText('Required')).toBeDefined()
    expect(screen.getByLabelText('Country').className).toContain('ds-select--error')
  })
})
