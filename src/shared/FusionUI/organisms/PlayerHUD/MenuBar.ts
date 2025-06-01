/// <reference types="@rbxts/types" />

/**
 * @file        MenuBar.ts
 * @module      MenuBar
 * @layer       Organism
 * @description Row of buttons for opening HUD panels.
 */

import Fusion, { Value } from "@rbxts/fusion";
import { BaseFrame, IconButton, IconAssets, Lists } from "../../atoms";
import { MenuButton } from "shared/FusionUI/molecules/MenuButton";

/* Organism Constants */
const MenuButtonSize = UDim2.fromOffset(50, 50);

interface MenuBarProps {
	Size: UDim2;
	Position: UDim2;
}

/** Horizontal menu with common panel buttons. */
export const MenuBar = (props: MenuBarProps) => {
	const buttons = [
		MenuButton({
			Name: "CharacterPanel",
			Icon: IconAssets.MenuPanel.CharacterPanel,
			SelectedState: Value(false),
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
		MenuButton({
			Name: "FriendsPanel",
			Icon: IconAssets.MenuPanel.CharacterPanel,
			SelectedState: Value(false),
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
		MenuButton({
			Name: "TeleportPanel",
			Icon: IconAssets.MenuPanel.CharacterPanel,
			SelectedState: Value(false),
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
	];

	return BaseFrame({
		Name: "MenuBar",
		Size: props.Size,
		Position: props.Position,
		AnchorPoint: new Vector2(0, 0),
		Children: [Lists.HorizontalList(buttons)],
	});
};
