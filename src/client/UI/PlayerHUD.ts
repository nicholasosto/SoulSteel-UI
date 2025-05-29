/* PlayerHUD.ts
 * This file defines the PlayerHUD component, which is responsible for displaying the player's health and other HUD elements.
 */
import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { ActionBar, CharacterCard, EquipmentPanel, MenuBar, CurrencyCard } from "shared/FusionUI";
const { New, Children, Value } = Fusion;

/**
 * Player HUD Screen
 * This screen contains organisms that make up the player's HUD, such as the character card, menu bar, action bar, currency card, and equipment panel.
 */

export const PlayerHUD = () => {
	const HudScreen = New("ScreenGui")({
		Name: "PlayerHUD",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui"),
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		AutoLocalize: false,
		[Children]: {
			Card: CharacterCard(),
			MenuBar: MenuBar(),
			ActionBar: ActionBar(),
			CurrencyCard: CurrencyCard(),
			EquipmentPanel: EquipmentPanel(),
		},
	});
};
