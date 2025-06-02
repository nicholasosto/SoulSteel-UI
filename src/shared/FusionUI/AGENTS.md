# Fusion UI Agents Guide

This markdown file defines conventions and guidelines for agents (human or automated) working on the Fusion-based UI layer of **Soul Steel**. It is written so that you can both *read* it as documentation and *parse* it programmatically.

IMPORTANT: please review the list of needed Atoms, Molecules, and Organism designs in the [FusionUI/ComponentTracker.md](ComponentTracker.md) file. This document is not a replacement for that list.

---

## 1 · Category Taxonomy

| Level                   | Purpose                                               | Examples                                   |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------ |
| **Atoms**               | Base UI primitives.                                   | `ButtonAtom`, `IconImage`, `GradientFrame` |
| **Molecules**           | Meaningful combinations of atoms.                     | `LabeledInput`, `CardHeader`, `ToggleRow`  |
| **Organisms**           | Self-contained functional clusters.                   | `InventoryGrid`, `ModalDialog`, `Tooltip`  |
| **Screens**               | Complete in‑game views. (Sometimes called *Pages*.) | `EquipmentPage`, `SettingsPage`            |
| **Templates / Layouts** | Structural wrappers reused across pages.              | `StackColumn`, `FlowRow`, `SafeAreaFrame`  |

> **State helpers:** We rely on Fusion’s reactive primitives: `Value`, `Computed`, `Observer`, `ForPairs`, `ForKeys`. When mentioning them below we always import from `@rbxts/fusion`.

---

## 2 · Component Guidelines

1. **Root element**
   *Components* (`Atom` → `Organism`) begin with a `Frame`.
   *Pages* begin with a `ScreenGui` containing a root `Frame`.
   This lets us fade, size, or disable the entire page in a single place.

2. **Named slots via `Children`**
   Every component accepts an optional `Children?: { [key: string]: Instance | Value<Instance> }`.
   Passing a map instead of an array keeps related sub‑trees easy to reference and reorder.

3. **Prop casing**
   Custom props use `camelCase`; Roblox properties keep their original PascalCase (`BackgroundColor3`).
   Lint is enforced via **@rbxts/eslint-plugin**.

4. **Theming tokens** live in `/src/tokens/**`. Import rather than hard‑coding magic numbers.

---

## 3 · State Structure

> *Why a dedicated section?*  Coherent state slices are the backbone of a responsive Fusion UI.  Poorly‑scoped `Value`s turn into memory leaks and tangled dependencies; well‑scoped slices make components testable and trivial to reason about.

### 3.1 Local vs Shared

| Scope                       | Where it lives                                                     | Example use‑case                                        |
| --------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| **Local Value**             | Inside a component factory.                                        | `const isHovered = Value(false)` for button glow.       |
| **Shared Slice**            | Separate module under `src/state/**`.                              | `export const inventorySlice = Value<Inventory>({ … })` |
| **Cross‑system Observable** | Service module (e.g., `GameClockService`) exposes `Value<number>`. | Global time for day–night shaders.                      |

**Rule of thumb:** If two organisms need the same `Value`, promote it to a slice module. Otherwise keep it private.

### 3.2 Naming Conventions

* `nounState` for raw mutable values (`healthState`).
* `useNoun` for *selectors* that expose a derived `Computed` (`useHealthPercentage`).
* `onNounChanged` for observers that run side‑effects (`onHealthChanged`).

### 3.3 Folder Layout

```txt
src/
  state/
    index.ts            // re‑exports slices
    playerState.ts      // one slice per domain
    uiState.ts
```

Each slice file **must** export:

```ts
export const playerState = Value<PlayerData>(initialData);
export const usePlayerLevel = () => Computed(() => playerState.value.Level);
```

### 3.4 Derived State with `Computed`

```ts
import { Value, Computed } from "@rbxts/fusion";

const stamina = Value(100);
export const staminaPct = Computed(() => stamina.value / 100);
```

Never mutate inside a `Computed`; treat it as a pure selector.

### 3.5 Observers & Disposal

*Always* hold the return value of `Observer` and call the disposer in `Destroying` or component cleanup.

```ts
const maid = new Maid();
maid.GiveTask(Observer(staminaPct, pct => print(`Stamina: ${pct}`)));
```

---

## 4 · Code Examples

### 4.1 Generic Component

```ts
import { New, Children, Value } from "@rbxts/fusion";

/**
 * @component ExampleComponent
 * @package Atomic/FusionUI/Organisms
 */
interface ComponentProps {
    Children?: { [key: string]: Instance | Value<Instance> };
}

export const ExampleComponent = (props: ComponentProps) => {
    const Container = New("Frame")({
        Name: "ExampleComponent",
        Size: UDim2.fromScale(1, 1),
        BackgroundTransparency: 1,
        [Children]: props.Children,
    });

    return Container;
};
```

### 4.2 BaseFrame

```ts
import { New, Children } from "@rbxts/fusion";
import { CornerToken, GradientTokens } from "src/tokens";

export interface BaseFrameProps {
    Name?: string;
    Size?: UDim2;
    Position?: UDim2;
    AnchorPoint?: Vector2;
    BackgroundColor3?: Color3;
    BackgroundTransparency?: number;
    LayoutOrder?: number;
    Children?: Instance | { [key: string]: Instance };
}

/** Simple frame with corner and gradient tokens. */
export const BaseFrame = (props: BaseFrameProps) => {
    return New("Frame")({
        Name: props.Name ?? "BaseFrame",
        Size: props.Size ?? UDim2.fromScale(1, 1),
        Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
        AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
        BackgroundColor3: props.BackgroundColor3 ?? new Color3(0.1, 0.1, 0.1),
        BackgroundTransparency: props.BackgroundTransparency ?? 0,
        LayoutOrder: props.LayoutOrder ?? 1,
        [Children]: {
            Corner: CornerToken(4),
            Gradient: GradientTokens.DarkGradient(),
            Content: props.Children,
        },
    });
};
```

---

## 5 · Agent Workflow

Agents (LLM or human) should:

1. **Follow taxonomy.** Add new components under the correct tier directory.
2. **Keep pages isolated.** Page logic goes into `src/pages/**` and imports organisms as needed.
3. **Update this file.** When you finish a task, un‑comment the matching line in the task table below and adjust the status.

---

\[]: # ## 6 · Backlog *(hidden template – copy out and un‑comment to activate)*
\[]: #
\[]: # ### Feature Checklist
\[]: # - \[ ] ActionBar Molecule implemented
\[]: # - \[ ] InventoryGrid Organism responsive overhaul
\[]: # - \[ ] EquipmentPage page‑level animations
\[]: #
\[]: # ### Agent Task Table
\[]: # | Agent | Task | Status |
\[]: # |-------|------|--------|
\[]: # | ActionBarAgent | Implement cooldown overlay logic | In Progress |
\[]: # | LayoutAgent | Refactor grid helpers | Pending |
\[]: # | LintBot | Ensure ESLint passes | Pending |
