# Engineering Choices for the Estimation Alignment Tool

This page proposes options you can choose to formalize the engineering approach before expanding the MVP. Each section lists 2–3 options so we can quickly align on a path forward.

## 1) Tech Stack Options

_Constraint: keep the shipped app fully standalone (single HTML/JS/CSS bundle, no CDN/runtime dependencies)._ 

- **A. Progressive enhancement (vanilla + small helpers)**
  - Stay with static hosting; use vanilla JS with tiny optional helpers (e.g., HTMX attributes or a micro-state helper) that are bundled so nothing is loaded from a CDN.
  - Pros: honors the single-file goal, minimal tooling, easy incremental adoption atop current markup.
  - Cons: less structured component model, harder to enforce complex state orchestration.

- **B. Lightweight component framework (Svelte or Preact)**
  - Introduce Svelte (Vite) or Preact (signals) for componentized UI and reactive state; bundle outputs to a single self-contained HTML/JS artifact.
  - Pros: modern DX, compiled templates, good for data-heavy tables while keeping bundles small enough for standalone delivery.
  - Cons: requires a build step and migration effort; must guard against pulling in ecosystem deps that bloat the bundle.

- **C. Mainstream React (Vite + TypeScript)**
  - Standardize on React + TS with Vite, using context or Zustand for state management, with careful tree-shaking to keep the single-bundle constraint.
  - Pros: large ecosystem, rich component libraries, familiar to most teams, testing tools mature.
  - Cons: heavier runtime than Svelte/Preact; higher risk of exceeding the standalone size budget without aggressive dependency discipline.

## 2) Non-Functional Requirements (NFRs)

- **A. MVP-baseline NFRs**: static hosting, single self-contained bundle (no runtime CDN calls), sub-100KB bundle target, offline-safe localStorage only, Lighthouse PWA score ≥90, keyboard navigation and WCAG AA for forms/tables.
- **B. Delivery-ready NFRs**: keep the standalone bundle constraint while adding client-side encryption for imports/exports, feature-state autosave with transaction logs, accessibility smoke tests in CI, and response under 100ms for table edits with 200 features.
- **C. Enterprise NFRs**: retain standalone-first delivery where feasible; add role-based auth (if deployed behind a backend), audit trail for baselines and imports, configurable retention for stored data, formal DPIA checklist, automated performance budget checks in CI.

## 3) Code Standards

- **A. Baseline standards**: Prettier + ESLint (Airbnb-ish) with TypeScript, Husky pre-commit hooks, unit tests for calculators, Playwright smoke for navigation, semantic PR titles.
- **B. Strong standards**: add Zod runtime validation on load/import, Vitest coverage gate (80%), ARIA linting, visual regression snapshots for feature tables, conventional commits.
- **C. Strict standards**: ADRs for significant choices, architectural boundaries enforced by lint rules (e.g., no cross-feature imports), mutation testing for calculators, 90% coverage, dependency review before merges.

## 4) Proposed `AGENTS.md` Instructions (pick a strictness)

- **A. Lightweight**
  - Run `npm test` and `npm run lint` before committing.
  - Keep book content in `book/` updated when behavior changes; add links to new pages in `mkdocs-eah-book.yml`.
  - Prefer small, focused PRs; summarize behavioral changes and tests in the PR description.

- **B. Balanced**
  - Enforce TypeScript for new code; no implicit `any`.
  - Require at least one automated test for new logic and one accessibility check for UI changes.
  - Add/update an ADR in `book/adr/` for architectural decisions; include ticket/issue link in PR body.

- **C. Strict**
  - Disallow merges without green CI (lint, tests, accessibility, bundle-size budget).
  - Require design notes for UI changes (screenshots + interaction summary) and update change log.
  - Maintain dependency allowlist and pin versions; add threat model notes for features that handle user data.

---

Pick the option in each category that best fits the near-term roadmap so we can codify it in the codebase and contributor guidelines.
