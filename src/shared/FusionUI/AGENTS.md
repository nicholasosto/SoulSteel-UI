# AGENTS - Coding Standard

## Header Style and Structure

- Use tsdoc comments for all modules, classes, and functions.

- File headers must include:
  - `@file` – Filename
  - `@module` – Module name
  - `@layer` – Architectural layer (e.g., Atom, Molecule)
  - `@description` – Brief summary of the file’s purpose
  - Decorative block (optional, for branding/coding guide)
  - `@author` – Author(s) of the file
  - `@license` – License information
  - `@since` – Date of creation or last significant change
  - `@lastUpdated` – Date of last update
  - `@version` – Version of the file/module
  - `@interface` – Interface name (if applicable)
  - `@dependencies` – List of external/internal dependencies
  - `@composition` – List of composed components (if applicable)
  - `@events` – List of events emitted by the component


## Component Documentation

- Each exported function/component/interface must have a tsdoc block describing:
  - Purpose and usage
  - All props/parameters with types and descriptions
  - Example usage (if relevant)
  - Return value and its type

## Default Properties

- If a component uses default props, document them in a clearly marked section.

## Implementation Notes

- Use clear, concise comments to explain non-obvious logic.
- Prefer explicit typing and strict TypeScript.
- Use descriptive names for props and variables.
- Group related props and document optionality.

## Example: InfoLabel.ts

```typescript
/**
 * @file        InfoLabel.ts
 * @module      InfoLabel
 * @layer       Molecule
 * @description Displays a stat icon, value text, and optional tooltip.
 *
 * ╭─────────────────────────╮
 * │  Soul Steel · UI Guide  │
 * │  Fusion v4 • Strict TS  │
 * ╰─────────────────────────╯
 *
 * @author        Trembus
 * @license       MIT
 * @since         0.3.0
 * @lastUpdated   2025-06-07 — Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *
 * @composition
 *   @atoms
 *     IconBadge
 *     ValueLabel
 *   @molecules
 *     TooltipWrapper
 *
 * @state
 *   PlayerAttributesSlice – readonly
 *
 * @events
 *   AttributeChanged – (key: AttributeKey, newValue: number)
 */

```

- The above header is the standard for all files.
- Use `@interface` for prop types, with detailed property documentation.
- Provide usage examples in the tsdoc block.
- Document the return type and structure.
