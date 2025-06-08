/**
 *
 */

/// <reference types="@rbxts/types" />

/**
 * @file        index.ts
 * @module      Hydration
 * @barrel      true
 * @layer       Helper                // Highest layer represented
 * @layerMap    Helper, Atom, Molecule
 * @description Central barrel that re-exports every “hydrated” prefab wrapper
 *              (Fusion logic attached to designer-built Instances).
 *
 * ╭──────────────────────────────╮
 * │  Soul Steel · UI Hydration   │
 * │  Fusion v4 · Strict TS       │
 * ╰──────────────────────────────╯
 *
 * @author        Trembus
 * @license       MIT
 * @since         0.1.0
 * @lastUpdated   2025-06-07 — Barrel scaffold created
 *
 * @exports
 *   // ─── Atoms / Helpers ───────
 *   HydrateFrameBase   – ./HydrateFrameBase
 *
 *   // ─── Molecules ─────────────
 *   HydrateActionSlot  – ./HydrateActionSlot
 *   HydrateItemSlot    – ./HydrateItemSlot
 *   HydrateResourceBar – ./HydrateResourceBar
 *
 *   // (add more hydrated wrappers here…)
 */

/* Placeholders for future hydrated wrappers */

export * from "./HydrateFrameBase";
// export * from "./HydrateActionSlot";
// export * from "./HydrateItemSlot";
// export * from "./HydrateResourceBar";
