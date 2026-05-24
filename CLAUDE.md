# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev            # local dev server
npm run build          # production build
npm run start          # start production server

# Linting & formatting
npm run lint           # ESLint
npm run format         # Prettier (check + write)
npm run stylelint:fix  # Stylelint (CSS)
npm run markuplint     # HTML/JSX markup lint

# Testing
npm test                                              # run all tests
npm run test:watch                                    # watch mode
npm run test:coverage                                 # with coverage report
npm test -- src/path/to/file.test.tsx -t "test name"  # single test

# Storybook
npm run storybook      # dev server on port 6006
npm run build-storybook

# Scaffolding
npm run hygen          # hygen component new (generates component boilerplate)

# Docker (dev on port 5050)
docker compose up -d
docker compose down
docker compose build
```

## Architecture

This is a **Next.js 15 App Router** portfolio site with `next-intl` for i18n (English + Japanese).

### Routing
- `src/app/layout.tsx` — root layout
- `src/app/[locale]/` — all pages are under the locale segment (`en` / `ja`)
  - `[locale]/about/`, `[locale]/experience/`, `[locale]/gallery/`
  - `[locale]/@modal/` — parallel route for gallery modals
- `src/middleware.ts` — `next-intl` middleware; also rewrites gallery URLs to strip query path cruft
- `src/i18n/routing.ts` + `src/i18n/request.ts` — i18n config consumed by middleware and server components

### Translations
- `messages/en.json` and `messages/ja.json` — **always update both files** when adding new text

### Key directories
| Path | Purpose |
|---|---|
| `src/components/common/` | Shared primitive components |
| `src/components/ui/` | Feature-level UI components |
| `src/components/layout/` | Page layout wrappers |
| `src/components/icons/` | SVG icon components |
| `src/hooks/` | Custom React hooks |
| `src/state/` | Jotai atoms |
| `src/constants/` | Static data (nav items, SNS links, etc.) |
| `src/types/` | Shared TypeScript types |
| `src/styles/` | Global styles and font config |

### State management
Jotai is used for global state. Atoms live in `src/state/`.

## Tooling

- **ESLint** — flat config (`eslint.config.mjs`); includes plugins for React, hooks, Tailwind, a11y, import order, unused imports, Jest/Testing Library
- **Prettier** — `prettier.config.mjs` with `prettier-plugin-tailwindcss`
- **Stylelint** — `stylelintrc.mjs` using `stylelint-config-recess-order`
- **Jest** — `jest.config.ts`, jsdom environment, `jest.setup.ts` (imports `@testing-library/jest-dom`), `ts-jest` for TypeScript
- **Storybook 8** — `@storybook/nextjs` preset + `storybook-next-intl` addon
- **Husky + lint-staged** — pre-commit hook runs lint-staged (`.lintstagedrc.mjs`)
- **Hygen** — component scaffolding templates in `_templates/component/`

## Project Conventions

### Commit messages
Follow the cz-emoji format defined in the global `~/.claude/CLAUDE.md` (e.g., `:sparkles: feat: add gallery filter`).

**NEVER commit automatically.** Only commit when the user explicitly requests it.

When the user asks to commit, review what has been implemented in the session and propose a commit message based on the actual changes — do not commit until the user approves the message.

### Session handovers
- At the start of each session, check `.claude/handovers/` and read the latest file if one exists.
- At natural stopping points, prompt the user to run `/handover`.
