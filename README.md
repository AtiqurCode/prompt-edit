# PromptEdit Sales Page

A responsive sales page for PromptEdit, built with Vue 3, TypeScript, Vite, and Tailwind CSS v4.

## Features

- Mobile-first responsive layout
- Muted Wistia previews with tap-to-unmute
- Exclusive audio playback across video previews
- Swipeable tool and sound rails on mobile
- Draggable before/after comparison
- Templates library with category navigation
- Pricing, testimonials, FAQ, and conversion sections
- Keyboard focus states and reduced-motion support

## Tech stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS v4
- Vitest
- Cypress
- ESLint, Oxlint, and Prettier

## Project structure

```text
src/
├── components/
│   ├── sections/     # Page sections
│   └── shared/       # Reusable UI and media components
├── composables/      # Viewport, motion, and media behavior
├── data/             # Typed page content and asset metadata
├── assets/           # Global styles
└── types/            # Shared TypeScript types
```

## Requirements

- Node.js `^22.18.0` or `>=24.12.0`
- npm

## Development

```sh
npm install
npm run dev
```

## Quality checks

```sh
npm run type-check
npm run lint
npm run test:unit -- --run
npm run build
```

Run the end-to-end suite after building:

```sh
npm run build
npm run test:e2e
```

## Production preview

```sh
npm run build
npm run preview
```

The production output is generated in `dist/` and can be deployed to any static hosting provider.
