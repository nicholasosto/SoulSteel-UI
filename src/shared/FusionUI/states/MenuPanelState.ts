/// <reference types="@rbxts/types" />

/**
 * @file        PlayerInfo.ts
 * @module      MenuPanelState
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

export class MenuPanelState {
	// Player's name
	public static SelectedPanel = Value("EquipmentPanel");
	// Player's level
}
