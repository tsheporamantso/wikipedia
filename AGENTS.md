# AGENTS.md

## Overview
Single-page Wikipedia search app: vanilla **TypeScript** compiled to browser ES modules. No npm, no bundler, no framework — `tsc` + browser-native `fetch`/DOM.

## Build & run
- There is **no `package.json` and no npm scripts**. Everything uses the TypeScript compiler (`tsc`) directly.
- Compile: `tsc --watch` (output to `dist/` per `outDir`)
- Serve statically: `live-server` (or any static server). Vercel is used for deployment.

## Critical quirks (easy to get wrong)
- **Source imports use `.js` extensions** on relative paths (e.g. `import { url } from "../utils/wiki-urls.js"`). This is required for native browser ES-module resolution — `tsc` does NOT rewrite extensions. Keep them as-is; do not strip to `.ts`.
- **No `rootDir` in tsconfig**, so `src/*` and `utils/*` each mirror their folder structure under `dist/` (`dist/src/`, `dist/utils/`). `index.html` loads `./dist/src/app.js` as a module.
- `index.html` references the **compiled** `dist/` output, not `src/`. After editing TypeScript, rebuild before testing in the browser.

## Structure
- `src/app.ts` — entry point; wires the form submit handler, calls `fetchPages`.
- `src/fetchPages.ts` — async Wikipedia API call, loading/error/empty states.
- `src/renderResults.ts` — renders result cards; defines `ResultsType`.
- `src/voiceAgent.ts` — self-initializing side-effect module: creates its own mic button and appends it to the form; uses the browser `SpeechRecognition`/`webkitSpeechRecognition` API. Imported for its side effect only (`import "./voiceAgent.js"`).
- `src/themeToggle.ts` — self-initializing theme module: toggles `data-theme` on `<html>` between `light`/`dark` and persists to `localStorage` key `wiki-theme`. Imported for its side effect only.
- `index.html` — has a small **inline `<head>` script** that sets `data-theme` before CSS paints (reads localStorage / `prefers-color-scheme`) to avoid flash-of-wrong-theme; **do not remove it**. It also loads Google Fonts (`Source Serif 4`, `IBM Plex Sans`, `IBM Plex Mono`).
- `utils/assertElements.ts` — typed DOM-query helpers `required`/`requireAll` (throw if element missing).
- `utils/wiki-urls.ts` — single source of truth for API endpoints (`url`, `page_url`).

## Notes
- Multiple modules (`app.ts`, `fetchPages.ts`, `renderResults.ts`) independently re-query the same DOM elements (`.form`, `.results`) rather than sharing references — keep this existing pattern if you touch them.
- TypeScript runs in `strict` mode.
- README's "Run tests" (`bundle exec rspec`) is stale — there are no tests and no executable test config.
