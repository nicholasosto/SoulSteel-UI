/// <reference types="@rbxts/types" />

/**
 * @file        PlayerInfo.ts
 * @module      PlayerInfoState
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

export class PlayerInfoState {
	// Player's name
	public static Name: Fusion.Value<string> = Fusion.Value("Default Name");
	// Player's level
	public static Level: Fusion.Value<number> = Fusion.Value(1);
	// Player's health
	public static Experience: Fusion.Value<number> = Fusion.Value(0);
	public static MaxExperience = Fusion.Value(100);
}
