# Plan: Integrating Agentic / Generative AI into the Wikipedia Search App

**Status:** Proposed implementation plan only — feature NOT implemented.

## Context

This is a single-page vanilla-TypeScript ES-module app with **no server of its own** and **no `package.json` / npm tooling**. The critical constraint: AI APIs must **not** be called directly from the browser (API keys would be exposed; many providers also block CORS). The clean integration point is a small backend proxy that the frontend calls.

## Step 0 — Decide the AI capability

Pick what the AI should do. Realistic options given the current search flow:

- **Semantic search / query understanding** — rewrite or expand a user's raw query before hitting Wikipedia's search API (better results).
- **Result summarization** — generate an LLM summary of the top-rated Wikipedia results.
- **Conversational follow-ups** — ask clarifying questions to refine the search.

The flow below generalizes across all options.

## Step 1 — Introduce a thin backend

- Add a small server (e.g. Node.js **Express** or a **Vercel Serverless Function** — the app already deploys to Vercel, so API Routes are natural).
- The frontend `fetchPages.ts` would call `POST /api/ai` instead of (or alongside) the current Wikipedia URL.
- The backend holds the **AI API key as a server-side env var** — never in the frontend.

## Step 2 — Add the AI provider + library

- Choose a provider (OpenAI, Anthropic, Google, etc.) and add its SDK as a server dependency (`package.json` will now be needed in the backend, or the function's own manifest).
- The backend does the real chat/completion call.

## Step 3 — Wire the request flow

- Frontend: on form submit, send the raw query to `/api/ai`.
- Backend:
  1. Receives the query.
  2. Calls the AI with a prompt like "rewrite this search query for better Wikipedia results" (or "summarize these 3 results").
  3. Returns structured JSON (`{ query }` or `{ summary }`).
- Frontend then feeds the returned query into the existing Wikipedia `url` from `utils/wiki-urls.ts` and renders as today.

## Step 4 — Preserve the API-endpoint pattern

- Keep `utils/wiki-urls.ts` as the single source of truth — add the new `/api/ai` base URL there.
- Optionally add a new module `src/aiAgent.ts` (mirroring `voiceAgent.ts` style) to encapsulate the AI call and states (loading/error/empty), keeping `app.ts` and `fetchPages.ts` patterns intact.

## Step 5 — Typing & states

- Define a typed response interface (like the existing `ResultsType` in `renderResults.ts`).
- Reuse the current `.loading` / `.error` classes for the AI-call states so UX is consistent.

## Step 6 — Security & config

- Store the API key in an environment variable on the server/Vercel (`.env`, committed ignore).
- Validate/sanitize the fetched, AI-generated text before injecting into `innerHTML` in `renderResults.ts` (optionally escape HTML), since it's now third-party-generated content.
- Add rate limiting / prompt cap on the backend to control cost.

## Step 7 — Deployment

- Vercel auto-detects new serverless functions; ensure the AI key env var is set in the Vercel dashboard.
- Update README (install/run steps) since a `package.json` now exists.

## Reality check / considerations

- **CORS & keys**: a server is mandatory — browser-only AI calls are unsafe and often blocked.
- **No current `package.json`**: the repo has zero npm tooling today, so adding a backend introduces the first Node dependencies — the biggest structural change.
- **Security**: AI output injected via `innerHTML` in `renderResults.ts:19` needs escaping.
- **Cost/latency**: each search gains an extra network round-trip; consider caching.

## File reference points

- `src/fetchPages.ts` — where the AI call would be wired in.
- `src/renderResults.ts` — `ResultsType` and `innerHTML` injection point (line ~19).
- `utils/wiki-urls.ts` — single source of truth for endpoints.
- `src/voiceAgent.ts` — existing pattern for a self-contained feature module.