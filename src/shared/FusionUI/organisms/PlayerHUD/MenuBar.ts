/// <reference types="@rbxts/types" />

/**
 * @file        MenuBar.ts
 * @module      MenuBar
 * @layer       Organism
 * @description Row of buttons for opening HUD panels.
 */

import { PlayerCurrencyState } from "shared/FusionUI/states";
import { BaseFrame, IconButton, IconAssets, Lists } from "../../atoms";
import { MenuButton } from "shared/FusionUI/molecules/MenuButton";
import { MenuPanelState } from "shared/FusionUI/states/MenuPanelState";

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
			LayoutOrder: 1,
			Size: MenuButtonSize,
			OnClick: () => {
				PlayerCurrencyState.Coins.set(PlayerCurrencyState.Coins.get() + 10); // Example action
				MenuPanelState.SelectedPanel.set("CharacterPanel");
			},
		}),
		MenuButton({
			Name: "EquipmentPanel",
			Icon: IconAssets.MenuPanel.CharacterPanel,
			LayoutOrder: 1,
			Size: MenuButtonSize,
			OnClick: () => {
				PlayerCurrencyState.Coins.set(PlayerCurrencyState.Coins.get() + 10); // Example action
				MenuPanelState.SelectedPanel.set("EquipmentPanel");
			},
		}),
		MenuButton({
			Name: "FriendsPanel",
			Icon: IconAssets.MenuPanel.TeleportPanel,
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
		MenuButton({
			Name: "TeleportPanel",
			Icon: IconAssets.MenuPanel.FriendsPanel,
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
