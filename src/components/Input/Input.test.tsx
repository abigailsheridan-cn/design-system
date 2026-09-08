import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeDefined()
  })

  it('shows an error message and applies the error class', () => {
    render(<Input label="Email" error="Required" />)
    expect(screen.getByText('Required')).toBeDefined()
    expect(screen.getByLabelText('Email').className).toContain('ds-input--error')
  })
})
