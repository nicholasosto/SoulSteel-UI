/// <reference types="@rbxts/types" />

/**
 * @file        PlayerAttributes.ts
 * @module      PlayerAttributes
 * @layer       State
 * @description Centralised resource slices used across the HUD.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion from "@rbxts/fusion";

export class PlayerAttributes {
	public static Attributes: Record<string, Fusion.Value<number>> = {
		Strength: Fusion.Value(10),
		Dexterity: Fusion.Value(10),
		Intelligence: Fusion.Value(10),
		Vitality: Fusion.Value(10),
		Luck: Fusion.Value(10),
	};
}
