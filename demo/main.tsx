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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  Toaster,
} from '../src'
import { Plus, ArrowRight, Terminal, TriangleAlert } from 'lucide-react'
import { toast } from 'sonner'

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

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Tooltip</h2>
        <TooltipProvider>
          <div className="flex gap-3 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Helpful info goes here</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Alert</h2>
        <div className="flex flex-col gap-3 max-w-md">
          <Alert>
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlert />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Toast</h2>
        <div className="flex gap-3 items-center">
          <Button variant="outline" onClick={() => toast('Event has been created')}>
            Default
          </Button>
          <Button variant="outline" onClick={() => toast.success('Changes saved successfully')}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast('Event has been deleted', {
                action: { label: 'Undo', onClick: () => {} },
              })
            }
          >
            With action
          </Button>
        </div>
        <Toaster closeButton />
      </section>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
