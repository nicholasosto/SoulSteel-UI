/// <reference types="@rbxts/types" />

/**
 * @file        FusionResource.ts
 * @module      FusionResource
 * @layer       State
 * @description Helper factory for consumable resource slices.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import { Value, Computed } from "@rbxts/fusion";

/** All data the UI needs for one consumable resource */
export interface FusionResource {
	/** Current amount (0 → max) */
	current: Value<number>;

	/** Maximum capacity */
	max: Value<number>;

	/** Pre-derived helpers keep `ResourceBar` thin */
	percent: Computed<number>; // 0 → 1
	label: Computed<string>; // e.g. "35 / 100"
	color: Value<Color3>; // e.g. green for HP, blue for Mana
}

/* Factory Function */
export function createFusionResource(name: string, initial: number, maxInitial: number, tint: Color3): FusionResource {
	const current = Value(initial);
	const max = Value(maxInitial);

	return {
		current,
		max,
		percent: Computed(() => current.get() / max.get()),
		label: Computed(() => `${name} : ${math.floor(current.get())} / ${math.floor(max.get())}`),
		color: Value(tint),
	};
}
