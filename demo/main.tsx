import { createRoot } from 'react-dom/client'
import { Button, Badge, Checkbox, Input, Dropdown, Menu } from '../src'

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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

      <h2>Icons</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button iconLeft={<PlusIcon />}>Add item</Button>
        <Button iconRight={<ArrowIcon />}>Next</Button>
        <Button iconLeft={<PlusIcon />} iconRight={<ArrowIcon />}>
          Both
        </Button>
      </div>

      <h2>Sizes</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h2>Badge</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>

      <h2>Checkbox</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Checkbox id="c1" label="Unchecked" />
        <Checkbox id="c2" label="Checked" defaultChecked />
        <Checkbox id="c3" label="Disabled" disabled />
        <Checkbox id="c4" label="Disabled checked" disabled defaultChecked />
      </div>

      <h2>Input</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <Input label="Name" placeholder="Jane Doe" />
        <Input label="Email" error="Required" />
        <Input label="Disabled" disabled placeholder="Can't edit" />
      </div>

      <h2>Dropdown</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <Dropdown label="Country">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </Dropdown>
        <Dropdown label="Country" error="Required">
          <option value="">Select...</option>
        </Dropdown>
        <Dropdown label="Disabled" disabled>
          <option value="">Can't edit</option>
        </Dropdown>
      </div>

      <h2>Menu</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Menu
          label="Actions"
          items={[
            { label: 'Edit' },
            { label: 'Duplicate' },
            { label: 'Archive', disabled: true },
            { label: 'Delete' },
          ]}
        />
        <Menu
          label="Sort by"
          items={[
            { label: 'Name', selected: true },
            { label: 'Date modified', selected: false },
            { label: 'Size', selected: false },
          ]}
        />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
