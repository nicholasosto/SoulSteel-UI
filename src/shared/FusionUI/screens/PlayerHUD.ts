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
import { ActionBar, CharacterCard, MenuBar, CurrencyCard, FillBarBase, FillBarBaseProps } from "shared/FusionUI";

const { New, Children } = Fusion;

/* Constants and Types */
const Padding = 10; // Padding around the screen

/* Organism Sizes and Positions */

// CharacterCard
const CharacterCardSP = {
	Size: UDim2.fromOffset(300, 150),
	Position: UDim2.fromOffset(Padding, Padding),
};

// MenuBar
const MenuBarSP = {
	Size: UDim2.fromOffset(300, 50),
	Position: UDim2.fromOffset(Padding, CharacterCardSP.Size.Y.Offset + Padding),
};

/** Player HUD screen mounted under the local PlayerGui. */
export const PlayerHUD = () => {
	const PlayerHud = New("ScreenGui")({
		Name: "PlayerHUD",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		[Children]: {
			CharacterCard: CharacterCard(),
			MenuBar: MenuBar(MenuBarSP),
			ActionBar: ActionBar({ SlotCount: 5 }),
			CurrencyCard: CurrencyCard(),
		},
	});
	return PlayerHud;
};
