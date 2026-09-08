# AI-Assisted Design System: Governance & Contributing Guide

This document defines how we use AI (Claude, or similar tools) to build and maintain our
component library. It exists to solve one problem: **AI output is probabilistic, our
design system needs to be deterministic.** Every rule below exists to close that gap.

Read this before generating, editing, or reviewing any component.

---

## 1. Source of Truth

AI has no memory between sessions and no inherent knowledge of *our* system. It must be
told the same things, the same way, every time. That means:

- **The repo is the brain, not the AI.** Every generation session starts by pointing the
  model at the current state of the design system in this repo — tokens, existing
  components, naming conventions — not by re-describing the system from memory or from a
  chat thread.
- **Figma, code, and Storybook are the three synced artifacts.** If they disagree, the
  repo's code is authoritative until a human resolves the conflict.
- **Prompts are versioned artifacts.** Any prompt template used to generate or modify a
  component lives in `/prompts` in this repo and is updated via PR like any other system
  change. Don't keep "the good prompt" in someone's notes app.

---

## 2. Foundation: shadcn + Tailwind

We use shadcn as our component foundation. Reasoning, specifically for AI-assisted
workflows:

- Shadcn components are copy-pasted source in our repo, not an installed black-box
  package. AI can read and reason about actual implementation, not just an API surface.
- Built on Radix + Tailwind, both heavily represented in model training data, which makes
  AI-generated variants more reliable than with a bespoke/uncommon framework.
- **The token layer is what actually makes this scale.** Shadcn primitives are only
  consistent if every generation maps to our design tokens (`tailwind.config`, CSS
  variables) rather than hardcoded values. AI must always be instructed to consume tokens,
  never invent new spacing/color values inline.

**Rule:** No component ships with hardcoded hex values, magic-number spacing, or
one-off font sizes. If a needed value doesn't exist as a token, that's a token-layer
conversation first, a component change second.

---

## 3. Scope: What AI Does and Doesn't Do

| AI-appropriate (accelerant) | Human-required (judgment) |
|---|---|
| First-draft component generation from a written spec | Deciding what components should exist at all |
| Figma ↔ code translation | Accessibility judgment calls |
| Scaffolding variants (size, state, intent) | Final naming/taxonomy decisions |
| Writing/updating Storybook stories & docs | Defining the design language itself |
| Flagging drift between Figma and code | Approving merge into the shared library |

AI accelerates production. It does not define the system. Every AI-generated component is
a **draft** until a named reviewer signs off.

### Definition of done, per component
A component is not complete until it has all of the following, together:
1. Code in the repo, using tokens (Section 2)
2. Figma component with matching variants/props
3. Storybook story covering all variants + states
4. One human reviewer's approval

If any one of these four is missing, the component is not merged.

---

## 4. Shared Context Workflow (Multi-Designer)

To prevent drift when more than one person is generating components:

1. **Before generating:** pull the current component list + token file into context.
   Check whether something close already exists — extend, don't duplicate.
2. **Generate against the spec, not vibes.** Write a short spec first (props, variants,
   states, which existing component it extends if any). This spec is what gets fed to
   the model, and it's what a reviewer checks the output against.
3. **PR review is the consistency mechanism**, not a better prompt. Assign a rotating or
   fixed design-system owner to review AI-generated components for adherence to Section 2
   and Section 3 before merge.
4. **Storybook is the shared inspection surface.** When in doubt about whether two
   designers' components conflict or duplicate, Storybook (not Figma, not code) is where
   you diff them, because it shows rendered + interactive output side by side.

---

## 5. Cost Management

Concrete levers, in rough order of impact:

- **Batch, don't chat.** Write the full spec once (props, variants, states), generate
  component + stories + docs in a single pass. Avoid iterative back-and-forth per
  component — that's the expensive pattern.
- **Cache/scope context, don't resend everything.** Structure the repo so AI can search
  and pull only relevant existing components/tokens, rather than loading the entire
  system into every session.
- **Generate templates, not instances.** Build `Button` once, well, with all variants.
  Don't regenerate a button-like component from scratch for every use — that's normal
  code reuse, not a generation task.
- **Match model to task.** Reserve highest-effort generation for genuinely new component
  creation. Docs updates, story scaffolding, and consistency linting can run on
  lighter/cheaper models.

For actual credit/plan limits, check current account details — this doc doesn't track
pricing, since it changes independently of the system design.

---

## Quick Reference: Before You Generate

- [ ] Have I pulled current tokens + existing components into context?
- [ ] Does something like this already exist? (extend > duplicate)
- [ ] Do I have a written spec, not just a verbal ask to the model?
- [ ] Am I using an approved prompt template from `/prompts`?
- [ ] Will this ship with code + Figma + Storybook + reviewer sign-off together?
