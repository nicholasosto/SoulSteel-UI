/// <reference types="@rbxts/types" />

/**
 * @file        PlayerHUD.ts
 * @module      PlayerHUD
 * @layer       Screen
 * @description Root screen composing the player's HUD organisms.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { ActionBar, CharacterCard, EquipmentPanel, MenuBar, CurrencyCard } from "shared/FusionUI";

const { New, Children } = Fusion;

/** Player HUD screen mounted under the local PlayerGui. */
export const PlayerHUD = () =>
	New("ScreenGui")({
		Name: "PlayerHUD",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		[Children]: {
			CharacterCard: CharacterCard(),
			//MenuBar: MenuBar(),
			//ActionBar: ActionBar(),
			//CurrencyCard: CurrencyCard(),
			//EquipmentPanel: EquipmentPanel(),
		},
	});
