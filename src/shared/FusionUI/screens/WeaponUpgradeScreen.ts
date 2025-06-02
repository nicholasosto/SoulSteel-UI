/// <reference types="@rbxts/types" />

/**
 * @file        WeaponUpgradeScreen.ts
 * @module      WeaponUpgradeScreen
 * @layer       Screen
 * @description Modal overlay for upgrading weapons with gems.
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
import { Players } from "@rbxts/services";
import { UpgradePanel } from "../organisms";
import { DragGhost } from "../atoms";

const { New, Children } = Fusion;

/** Screen mounting the upgrade panel and drag ghost. */
export const WeaponUpgradeScreen = () => {
	return New("ScreenGui")({
		Name: "WeaponUpgradeScreen",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		Enabled: true,
		[Children]: {
			Panel: UpgradePanel({
				selectedWeapon: "Sword",
				sockets: [undefined, undefined, undefined],
				gemIds: ["ruby", "sapphire", "emerald"],
			}),
			Ghost: DragGhost(),
		},
	});
};
