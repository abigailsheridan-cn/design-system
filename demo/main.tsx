import { createRoot } from 'react-dom/client'
import { Button } from '../src'

function Demo() {
  return (
    <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Design System Demo</h1>

      <h2>Variants</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>

      <h2>Sizes</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
