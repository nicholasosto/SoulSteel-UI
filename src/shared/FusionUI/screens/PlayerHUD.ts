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

// ActionBar
const ActionBarSP = {
	Size: UDim2.fromOffset(500, 100),
	AnchorPoint: new Vector2(0.5, 1),
	Position: UDim2.fromScale(0.5, 1).sub(new UDim2(0, 0, 0, Padding)),
};

/** Player HUD screen mounted under the local PlayerGui. */
export const PlayerHUD = () =>
	New("ScreenGui")({
		Name: "PlayerHUD",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		[Children]: {
			CharacterCard: CharacterCard(CharacterCardSP),
			MenuBar: MenuBar(MenuBarSP),
			//ActionBar: ActionBar(),
			CurrencyCard: CurrencyCard(),
			//EquipmentPanel: EquipmentPanel(),
		},
	});
