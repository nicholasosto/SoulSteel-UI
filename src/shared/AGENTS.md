# 🚦 AGENTS – **Domain‑Key Consistency Framework**

> **Mission:** Ensure *every* Fusion / TypeScript component that relies on **game metadata** (attributes, damage types, item rarities, zones, etc.) follows the **single‑source key → meta pattern**. The agent checks new code, audits legacy files, and suggests refactors automatically.

---

## 1 · Canonical Pattern (per domain)

For **each** domain (👾 *Attributes*, 🔥 *DamageTypes*, 💎 *ItemRarities*, …) we keep *two* source‑of‑truth files:

```ts
// shared/constants/<Domain>Keys.ts – MUST exist
export const <DOMAIN>_KEYS = [
  /* "str", "agi", "vit", … */
] as const;
export type <Domain>Key = typeof <DOMAIN>_KEYS[number];
```

```ts
// shared/constants/<Domain>Meta.ts – MUST exist
import { <Domain>Key } from "./<Domain>Keys";

export interface <Domain>Info { /* domain‑specific fields */ }

export const <DOMAIN>_META: Record<<Domain>Key, <Domain>Info> = {
  /* key ➜ metadata */
};
```

**Rule 0:** *All* other layers (DTOs, Fusion `Value`s, reducers, components, tests) **must import and use these exports**—never hard‑code the keys.

---

## 2 · Generic Checklist for **NEW** Code

| ✅ | Rule                                                                  | Quick‑Fix Hint                                |
| - | --------------------------------------------------------------------- | --------------------------------------------- |
| ☐ | Import `<Domain>Key` for any prop/param that references a domain key. | `import { <Domain>Key } …`                    |
| ☐ | ✋ **No raw strings** like "strength". Use the typed key.              | Replace literals with constants.              |
| ☐ | Pull display / config data via `<DOMAIN>_META[key]`.                  | `import { <DOMAIN>_META } …`                  |
| ☐ | DTO interfaces extend `Record<<Domain>Key, T>` where possible.        | `type FooDTO = Record<DamageTypeKey, number>` |
| ☐ | Utility funcs accept `key: <Domain>Key`.                              | `function apply(key: ItemRarityKey, …)`       |
| ☐ | Tests iterate `<DOMAIN>_KEYS.forEach` to ensure coverage.             | Exhaustiveness checks                         |

> **AGENT ACTION:** Block PR merge if any box is unchecked.

---

## 3 · Audit & Refactor Legacy Code (All Domains)

1. **Discover domains** by globbing `*Keys.ts`.
2. **Search** for raw strings matching each key list in `src/`.
3. **Flag** occurrences **outside** their Meta file or i18n catalogues.
4. **Suggest** replacements:

   * convert local enums ➜ `<Domain>Key`.
   * move scattered constants ➜ `<DOMAIN>_META`.
5. **Create** / update tracking issue `refactor/<domain>-key` with hit list.

> **AGENT ACTION:** Leave inline PR review comments when new raw keys appear.

---

## 4 · Reusable Scaffolds

### 4.1 Generic DTO

```ts
export type StatsDTO<K extends string> = Record<K, number>;
```

### 4.2 createState Helper

```ts
import Fusion from "@rbxts/fusion";
const { Value } = Fusion;

export function createState<K extends string>(dto: Record<K, number>) {
  const out = {} as Record<K, Value<number>>;
  for (const k in dto) out[k as K] = Value(dto[k as K]);
  return out;
}
```

### 4.3 Component Props Pattern

```ts
export interface GenericStatBarProps<K extends string> {
  key: K;              // Domain key
  state: Value<number>;
  meta: Record<K, unknown>; // Pass meta in or import inside
}
```

---

## 5 · Continuous Enforcement Hooks (Automated)

| Stage          | Tool                      | Description                                                               |
| -------------- | ------------------------- | ------------------------------------------------------------------------- |
| **ESLint**     | `no-restricted-literals`  | Rule list auto‑generated from *all* `*_KEYS` exports; blocks raw strings. |
| **TypeScript** | `switch exhaustive‑check` | Break build if a `switch(key)` isn’t exhaustive for a `<Domain>Key`.      |
| **Unit tests** | Jest / TestEZ             | Loop every `*_KEYS` to verify matching `*_META` completeness.             |
| **CI script**  | `meta:audit`              | Scans for orphan literals, prints diff, fails on error.                   |

> **AGENT ACTION:** Regenerate ESLint rule & tests when any `<DOMAIN>_KEYS` file changes.

---

## 6 · Adding a **New Domain**

1. Create `<Domain>Keys.ts` + `<Domain>Meta.ts` pair.
2. Commit; CI will auto‑generate linter rules.
3. Update docs / UI; missing uses will be flagged.
4. 🎉 Done—new domain obeys same guarantees.

## 7 · Adding a **New Key** to an Existing Domain

1. Append to `<DOMAIN>_KEYS` (alphabetical pls 🙏).
2. Add entry to `<DOMAIN>_META`.
3. Run `npm run meta:audit` ➜ hooks will update ESLint & tests automatically.

---

## 8 · Example (Attributes)

```ts
// AttributesKeys.ts
export const ATTR_KEYS = ["str", "agi", "vit", "int"] as const;
export type AttributeKey = typeof ATTR_KEYS[number];

// AttributeMeta.ts
export interface AttributeInfo { displayName: string; iconId: string; min: number; max: number; }
export const ATTRIBUTE_META: Record<AttributeKey, AttributeInfo> = {/* … */};
```

All attribute components now import `AttributeKey` / `ATTRIBUTE_META` – lint & type‑safety ensured.

---

### Stay DRY, stay consistent, stay scalable. 🔑
