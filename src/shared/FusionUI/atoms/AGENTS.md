# FusionUI Atoms for AGENTS

## Overview Table

| #                      | Atom (File)                | Purpose & Typical Props                                                  | Why it earns “core” status                                                                        |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Visual primitives**  | src/FusionUI/primatives    |                                                                          |                                                                                                   |
| 1                      | **FrameBase.ts**           | `{ size, position, cornerRadius, strokeWeight }`                         | Canonical wrapper; enforce rounded-corner + drop-shadow defaults so every panel looks consistent. |
| 2                      | **PanelBackground.ts**     | `{ themeVariant: "stone" \| "obsidian", hasBorder?: boolean }`           | Single source of truth for your ornate, textured backplates (handles TileSize + ColorCorrection). |
| **Typography**         | src/FusionUI/typography    |                                                                          |                                                                                                   |
| 3                      | **HeaderLabel.ts**         | `{ text: string, level: 1‒3 }`                                           | Uniform H1/H2/H3 sizing and fiery gradient stroke so dialog headers match HUD pop-ups.            |
| 4                      | **ValueLabel.ts**          | `{ value: string \| number, align?: "left" \| "right" }`                 | Numeric readouts—damage ticks, stat values, etc.—with monospaced font & glow for legibility.      |
| **Iconography**        | src/FusionUI/iconography   |                                                                          |                                                                                                   |
| 5                      | **IconBase.ts**            | `{ spriteId: string, size?: UDim2 }`                                     | Wraps ImageLabel + UIAspectRatio; all item, attribute, and UI glyphs derive from this.            |
| 6                      | **AttributeIcon.ts**       | `{ attribute: AttributeKey }`                                            | Strength, Agility, …—maps key → sprite sheet frame; used in tooltips, stat panel, level-up VFX.   |
| 7                      | **GemIcon.ts**             | `{ tier: "common"‒"mythic", isSocketed?: boolean }`                      | Re-use the ornate gem artwork you just created; standardises glow levels & rarity border color.   |
| **Interaction basics** | src/FusionUI/controls      |                                                                          |                                                                                                   |
| 8                      | **IconButton.ts**          | `{ icon: string, onActivate: () => void, disabled?: boolean }`           | Hit-slop, hover-shine, and gamepad focus ring baked in; 99 % of clickable glyphs extend this.     |
| 9                      | **TextButton.ts**          | `{ label: string, onActivate: () => void, variant?: "primary"‒"ghost" }` | Keeps font, padding, and disabled tint consistent across menus and modals.                        |
| **Feedback / meters**  | src/FusionUI/feedback      |                                                                          |                                                                                                   |
| 10                     | **ProgressMeter.ts**       | `{ ratio: number, colorTheme?: "xp"‒"cooldown" }`                        | Generic 0–1 bar (reskinned for XP, stamina, cast time); animates fill + spark VFX.                |
| 11                     | **CooldownOverlay.ts**     | `{ remaining: number, total: number }`                                   | Radial wipe overlay for ability icons—foundation for ActionSlotButton molecule.                   |
| 12                     | **Badge.ts** (HotkeyBadge) | `{ text: string }`                                                       | Tiny rounded label (“Q”, “R1”); auto-sizes and supports controller glyph sheet.                   |
| **Spatial / media**    | src/FusionUI/media         |                                                                          |                                                                                                   |
| 13                     | **ViewportPane.ts**        | `{ model: Model, fov?: number, spin?: boolean }`                         | Drop-in 3D preview (equipment, character dolls) with camera & lighting presets.                   |
| **Layout helpers**     | src/FusionUI/theme         |                                                                          |                                                                                                   |
| 14                     | **Spacer.ts**              | `{ size: number }`                                                       | Simple blank frame used by ForPairs gaps—ensures consistent spacing tokens.                       |
| 15                     | **DividerLine.ts**         | `{ orientation?: "h" \| "v" }`                                           | Hairline rule with subtle metallic gradient; reduces visual entropy in stat sheets.               |

### Build order (recommended)

1. **FrameBase, IconBase, HeaderLabel** – lock in corner radius, font families, and sprite handling.
2. **Text/IconButtons + ProgressMeter** – they underpin most interactive molecules.
3. **Domain-specific icons (AttributeIcon, GemIcon)** – needed as soon as you wire the LevelBar and StatPanel organisms.
4. **Feedback atoms (CooldownOverlay, Badge)**.
5. **ViewportPane and layout helpers** for equipment screens and modal dialogs.

### Implementation notes

* **Theme tokens:** Centralise colors, gradients, and spacing in `/shared/FusionUI/theme` to ensure consistency.
* **Aspect ratios:** Use `UIAspectRatio` for icons and meters to maintain visual fidelity across resolutions.
* **Variants via discriminated unions** instead of boolean prop soup (`variant: "primary" | "secondary"` vs. `isPrimary`).
* **Fusion patterns:** Use `Hydrate` wrapper and `Computed` for animated ratios (e.g., `ProgressMeter` fill).
* **Doc headers:** Tag each file `@layer Atom`, list any helper modules in `@dependencies`, and keep example JSX under `@example`.
