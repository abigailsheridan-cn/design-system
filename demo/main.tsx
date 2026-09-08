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
  toast,
  Label,
  Textarea,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '../src'
import { Plus, ArrowRight, Terminal, TriangleAlert } from 'lucide-react'

const COUNTRY_LABELS: Record<string, string> = { us: 'United States', ca: 'Canada' }

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
            {/* Base UI's SelectValue shows the raw value by default (unlike Radix,
                which auto-resolves the matched item's label) — map it explicitly. */}
            <SelectValue placeholder="Country">
              {(value: string | null) => (value ? COUNTRY_LABELS[value] : 'Country')}
            </SelectValue>
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
            <DropdownMenuTrigger render={<Button variant="secondary" />}>Actions</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem disabled>Archive</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="secondary" />}>Sort by</DropdownMenuTrigger>
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
              <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
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
          <Button variant="outline" onClick={() => toast.add({ description: 'Event has been created' })}>
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.add({ type: 'success', description: 'Changes saved successfully' })}
          >
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.add({ type: 'error', description: 'Something went wrong' })}>
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                description: 'Event has been deleted',
                actionProps: { children: 'Undo', onClick: () => {} },
              })
            }
          >
            With action
          </Button>
        </div>
        <Toaster />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Label &amp; Textarea</h2>
        <div className="flex flex-col gap-1.5 max-w-sm">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Switch</h2>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Switch id="s1" />
            <Label htmlFor="s1">Off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="s2" defaultChecked />
            <Label htmlFor="s2">On</Label>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <Switch id="s3" disabled />
            <Label htmlFor="s3">Disabled</Label>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Radio Group</h2>
        <RadioGroup defaultValue="card" className="flex gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="card" id="r1" />
            <Label htmlFor="r1">Card</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="paypal" id="r2" />
            <Label htmlFor="r2">PayPal</Label>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <RadioGroupItem value="crypto" id="r3" disabled />
            <Label htmlFor="r3">Crypto</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Separator</h2>
        <div className="max-w-sm">
          <p className="text-sm">Above the separator</p>
          <Separator className="my-3" />
          <p className="text-sm">Below the separator</p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Team members</CardTitle>
            <CardDescription>Invite people to collaborate.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">
                Manage
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">3 members, 1 pending invite.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Invite</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
