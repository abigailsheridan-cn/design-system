# Design System

Design tokens and a React component library.

## Structure

- `src/tokens/` — color, spacing, and typography tokens, exported both as TypeScript objects (`src/tokens/index.ts`) and as CSS custom properties (`src/tokens/tokens.css`).
- `src/components/` — React components, one folder each (component + styles + tests).

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev      # watch build
npm run test     # run tests
npm run build    # production build to dist/
```

## Adding a component

1. Create `src/components/<Name>/<Name>.tsx`, `<Name>.css`, `<Name>.test.tsx`, and `index.ts`.
2. Use existing tokens (CSS custom properties from `tokens.css`) rather than hardcoded values.
3. Re-export it from `src/index.ts`.
