/// <reference types="@rbxts/types" />

/**
 * @file        PlayerCurrency.ts
 * @module      PlayerCurrencyState
 * @layer       State
 * @description Reactive state slice containing basic player info used across the UI.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion from "@rbxts/fusion";

const { Value } = Fusion;

export class PlayerCurrencyState {
	// Player's Gems
	public static Gems: Fusion.Value<number> = Value(10);
	// Player's Coins
	public static Coins: Fusion.Value<number> = Value(20);
	// Player's Souls
	public static Souls: Fusion.Value<number> = Value(0);
}
