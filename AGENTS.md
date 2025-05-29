# Soul Steel — Project‑Level **AGENTS.md**

> **Purpose**  Every contributor (human or AI) should read this first. It lays out the non‑negotiable rules, style decisions, and architectural patterns that keep the Soul Steel code‑base healthy, consistent, and performant.

---

## 1  Coding Philosophy

1. **TypeScript‑first, Roblox‑native** — Use `@rbxts` types and embrace strict type safety (`noImplicitAny`, `strictNullChecks`).
2. **Atomic Design + Fusion v4** — Decompose UI into Atoms → Molecules → Organisms → Screens. Reuse state slices via Fusion’s reactive primitives.
3. **Data‑driven gameplay** — Prefer declarative JSON/TS records over hard‑coded logic. Core systems (items, talents, abilities) must be extensible via data.
4. **Server is authority** — Client predicts; server validates. Never trust client state for gameplay‑critical decisions.

---

## 2  Project Structure

```markdown
src/
  client/      # UI & client‑side controllers
    ui/
      atoms/
      molecules/
      organisms/
      screens/
  shared/      # DTOs, utility libs, config constants
  server/      # gameplay services & data pipelines
  tests/       # TestEZ unit tests (mirror src tree)
```

* Keep file names **PascalCase.ts** (classes/interfaces) or **kebab‑case.ts** (modules).
* One public export per file; use `index.ts` barrels only at organism‑level or higher.

---

## 3  Fusion UI Rules

| # | Principle                                                    | Rationale                                   |
| - | ------------------------------------------------------------ | ------------------------------------------- |
| 1 | **No direct Instance mutation** — always create via Fusion.  | Guarantees tear‑down and reactivity safety. |
| 2 | **State lives in slices** (`Value`, `Computed`, `Observer`). | Centralised, testable state.                |
| 3 | **Use `ForPairs` / `ForKeys` for dynamic lists**.            | Keeps render cost linear and diff‑friendly. |
| 4 | **Theme constants** live in `shared/theme.ts`.               | Single source of truth for styling.         |
| 5 | **Side‑effects** wrap in `Observer` with cleanup.            | Prevents memory leaks.                      |

When adding a new UI component, provide:

* Storybook‑style preview under `tests/stories/`.
* Screenshot in PR description.
* Docs block (`/** @component ... */`).

---

## 4  Gameplay & Systems Patterns

* **DTOs**: Every remote procedure receives & returns a serialisable DTO from `shared/dto/`.
* **Services → Components**: Server‑side Services own Component collections (ECS‑lite pattern).
* **Ability Pipeline**: Skill → Resolver → EffectProcessor → StatApplication. New abilities must implement the interface contract.
* **Sockets & Gems**: Source of truth is `Character.soulSlots[]`; never mutate weapon stats directly.

---

## 5  Testing & Quality Gates

```jsonc
// package.json scripts
"test":   "roblox-ts test",
"lint":   "eslint --ext .ts src",
"format": "prettier --check \"src/**/*.{ts,tsx}\""
```

* **Coverage ≥ 80 %** on `shared/` and `server/`.
* **CI** blocks merge if lint or tests fail.
* Write **property‑based tests** for math/utility libs.

---

## 6  Commit Messages (Conventional Commits)

```
feat(ui): add CooldownBarAtom
fix(server): prevent nil reference in StatService
refactor(shared): migrate item schema v2 → v3
```

* Use **singular present‑tense imperative**.
* Include scope in parentheses.
* Reference JIRA ticket with `PSD‑####` in footer where relevant.

---

## 7  AI Agent Directives

1. **Small diffs**: keep PRs under 400 lines.
2. **Explain rationale** in PR description (summary + screenshots/tests).
3. **Never commit secrets or API keys**.
4. **Follow lint & format before commit** (`npm run lint && npm run format`).
5. **Ask** when encountering ambiguous Fusion pattern choices; suggest options but do not hard‑code.

---

## 8  Extensibility Pointers

* New domains (e.g., Cyber) must register with `DomainRegistry` and supply:

  * `theme.ts` override
  * Particle folder under `assets/`
* New stat types: extend `StatKind` enum and update `StatCalculator` tests.

---

## 9  Onboarding Checklist

* [ ] Clone repo & run `npm ci`
* [ ] `rojo serve` to sandbox locally
* [ ] Run `npm test` & verify all green
* [ ] Read `docs/architecture.md`

## 10 Code Header Style

*Prepend the full TSDoc header template (see Appendix A) whenever you create a new `.ts` file.*

```ts
/// <reference types="@rbxts/types" />

/**
 * @file        HealthBarAtom.ts
 * @module      HealthBarAtom
 * @layer       Atom
 * @description Fusion atom that renders a segmented health bar for characters.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Luminesa – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *
 * @remarks
 *   Uses theme colors from shared/theme.ts.
 */

import Fusion from "@rbxts/fusion";
import { theme } from "shared/theme";
// …component code…
```

> Welcome to Soul Steel — ship code, forge souls, break nothing! ✨

