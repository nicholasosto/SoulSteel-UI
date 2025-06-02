/// <reference types="@rbxts/types" />

/**
 * @file        DragStore.ts
 * @module      DragStore
 * @layer       State
 * @description Global store for gem drag operations.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Codex – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion from "@rbxts/fusion";

export interface DragData {
	gemId: string;
	originType: "inventory" | "socket";
	originIndex: number;
}

/** Observable store holding drag data. */
export const dragStore = Fusion.Value<DragData | undefined>(undefined);
