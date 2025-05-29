/// <reference types="@rbxts/types" />

/**
 * @file        MenuBar.ts
 * @module      MenuBar
 * @layer       Organism
 * @description Row of buttons for opening HUD panels.
 */

import Fusion from "@rbxts/fusion";
import { BaseFrame, IconButton, IconAssets, Lists } from "../../atoms";

/** Horizontal menu with common panel buttons. */
export const MenuBar = () => {
	const buttons = [
		IconButton({
			Name: "CharacterPanel",
			Icon: IconAssets.MenuPanel.CharacterPanel,
			OnClick: () => print("Character panel"),
			Size: UDim2.fromOffset(40, 40),
		}),
		IconButton({
			Name: "EquipmentPanel",
			Icon: IconAssets.MenuPanel.EquipmentPanel,
			OnClick: () => print("Equipment panel"),
			Size: UDim2.fromOffset(40, 40),
		}),
		IconButton({
			Name: "SettingsPanel",
			Icon: IconAssets.MenuPanel.SetttingsPanel,
			OnClick: () => print("Settings panel"),
			Size: UDim2.fromOffset(40, 40),
		}),
	];

	return BaseFrame({
		Name: "MenuBar",
		Size: UDim2.fromOffset(180, 50),
		Position: new UDim2(0.5, 0, 1, -10),
		AnchorPoint: new Vector2(0.5, 1),
		Children: [Lists.HorizontalList(buttons)],
	});
};
