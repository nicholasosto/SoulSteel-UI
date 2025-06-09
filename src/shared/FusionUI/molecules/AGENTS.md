### ▸ **Molecule Development Standard**

*Add this chapter beneath the “Atoms” section in your **AGENTS – Coding Standard**. It formalises how every Fusion Molecule is documented, implemented, and maintained.*

````md
## Molecules (Composite UI Widgets)

A **Molecule** combines **≥ 2 Atoms** (and *only* Atoms) into a reusable widget with a single, well-defined purpose  
(e.g. `ActionSlotButton`, `ItemSlot`, `StatRow`).  
It should remain visually and behaviourally self-contained so Organisms can drop it in without extra styling.

---
### 1 File naming & placement
* One file per Molecule: `CamelCase.ts`
* Directory: `src/client/ui/molecules/`
* Default export **must** match the filename.

---
### 2 Required header block

Copy-paste the template and fill the placeholders ↓ :

```ts
/// <reference types="@rbxts/types" />

/**
 * @file        <MoleculeName>.ts
 * @module      <MoleculeName>
 * @layer       Molecule
 * @description <One-sentence summary of purpose.>
 *
 * ╭──────────────────────────────╮
 * │  Soul Steel · UI Molecules   │
 * │  Fusion v4 · Strict TS       │
 * ╰──────────────────────────────╯
 *
 * @author        Trembus
 * @license       MIT
 * @since         0.x.0
 * @lastUpdated   <YYYY-MM-DD — change note>
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *
 * @composition
 *   @atoms
 *     <AtomA>
 *     <AtomB>
 *     …
 *
 * @state       (optional)   // reactive slices consumed / produced
 *   SomeSlice – readonly
 * @events      (optional)   // fired outward
 *   onActivate – () => void
 */
````

**Tag meanings**

| Tag            | Required | Notes                                                           |
| -------------- | -------- | --------------------------------------------------------------- |
| `@composition` | ✔        | List every Atom **instantiated** (not merely imported helpers). |
| `@state`       | optional | Document Fusion slices accessed via Observers/Computed.         |
| `@events`      | optional | Document callbacks exposed as props (`onClick`, `onDrop`, …).   |

---

### 3 Prop-interface guidelines

```ts
export interface ActionSlotButtonProps {
  /** WCS skill identifier this slot triggers. */
  skillId: string;

  /** Hotkey displayed in the badge (e.g. "Q" or "LT"). */
  keyBind: string;

  /** Cooldown duration in seconds; 0 = ready. */
  cooldownSec: number;

  disabled?: boolean;           // DEFAULT: false
  onActivate?: () => void;      // fired when clicked / gamepad-A
}
```

* **Document everything** (purpose, type, units).
* Group required props first, optionals last.
* Expose callbacks under `on*` naming.
* Avoid boolean prop pairs—prefer a `variant` union.
* List default values inline in the doc comment and reflect them in `DefaultProps`.

---

### 4 Coding checklist ✅

| Category      | Item                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **Visual**    | Uses only Atoms for child elements; no ad-hoc styling.                       |
|               | Respects Theme tokens from `/shared/constants/Style.ts`.                     |
| **Behaviour** | Handles size/anchor via **props**, not magic numbers.                        |
|               | Emits `onActivate`, `onHoverStart/End` where sensible.                       |
| **Fusion**    | Wrap root in `Hydrate` and return the *produced Instance*.                   |
|               | Use `Computed` for animations (e.g. fill ratio).                             |
| **Docs**      | Header complete, prop interface exported & commented.                        |
| **Tests**     | Add a simple TestEZ case verifying default render (optional but encouraged). |

---

### 5 Example skeleton (excerpt)

```ts
/** ActionSlotButton – Molecule
 * @composition
 *   @atoms
 *     GemIcon
 *     CooldownOverlay
 *     Badge
 *     IconButton
 */
return Hydrate(IconButton)({
	Size: UDim2.fromOffset(64, 64),
	Disabled: props.disabled,

	[Children]: {
		GemIcon({ tier: "rare" }),
		CooldownOverlay({ ratio: cooldownRatio }),
		Badge({ text: props.keyBind }),
	},

	[OnEvent("Activated")]: props.onActivate,
});

```

---

### 6 Automation hooks

* **`npm run gen-composition`** – ts-morph script auto-updates `@composition`.
* **ESLint rule `ui/molecule-header`** – warns if header missing or mis-tagged.
* **Pre-commit** – reject push if required tags absent.

---

### 7 Phase-1 Molecule backlog (reference)

| Molecule           | Status | Notes               |
| ------------------ | ------ | ------------------- |
| ActionSlotButton   | ▢      | HUD cornerstone     |
| ResourceBar        | ▢      | HP / Mana / Stamina |
| ItemSlot           | ▢      | Inventory grid cell |
| ItemTooltip        | ▢      | Hover card          |
| StatRow            | ▢      | Character panel     |
| GemSocket          | ▢      | Drag-drop           |
| ViewportCard       | ▢      | 3-D preview tile    |
| TabButton          | ▢      | Modal navigation    |
| ModalHeader        | ▢      | Universal close bar |
| FloatingDamageText | ▢      | Combat feedback     |

> Mark these off as you implement; they unblock the first full HUD & Inventory sprint.

---

*Paste everything above into your AGENTS file and you’ve got a tight, AI-friendly blueprint for every Molecule going forward.*

