import { createRoot } from 'react-dom/client'
import '../src/index.css'
import {
  Button,
  Badge,
  Checkbox,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../src'
import { Plus, ArrowRight } from 'lucide-react'

function Demo() {
  return (
    <div className="p-8 flex flex-col gap-10 font-sans max-w-3xl">
      <h1 className="text-3xl font-bold">Design System Demo (shadcn/ui)</h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Button variants</h2>
        <div className="flex gap-3 items-center">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Button sizes &amp; icons</h2>
        <div className="flex gap-3 items-center">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button>
            <Plus /> Add item
          </Button>
          <Button variant="secondary">
            Next <ArrowRight />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex gap-3 items-center">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Checkbox</h2>
        <div className="flex gap-6 items-center">
          <label className="flex items-center gap-2">
            <Checkbox id="c1" /> Unchecked
          </label>
          <label className="flex items-center gap-2">
            <Checkbox id="c2" defaultChecked /> Checked
          </label>
          <label className="flex items-center gap-2 opacity-50">
            <Checkbox id="c3" disabled /> Disabled
          </label>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Input</h2>
        <div className="flex gap-3 items-start">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Jane Doe" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" aria-invalid placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="disabled-input" className="text-sm font-medium">
              Disabled
            </label>
            <Input id="disabled-input" disabled placeholder="Can't edit" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Select</h2>
        <Select defaultValue="us">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Dropdown menu</h2>
        <div className="flex gap-3 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem disabled>Archive</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Sort by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value="name">
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date">Date modified</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
