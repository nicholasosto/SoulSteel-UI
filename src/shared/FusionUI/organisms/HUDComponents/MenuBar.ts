/// <reference types="@rbxts/types" />

/**
 * @file        MenuBar.ts
 * @module      MenuBar
 * @layer       Organism
 * @description Row of buttons for opening HUD panels.
 */

import { PlayerCurrencyState } from "shared/FusionUI/states";
import { ScrollContainer } from "../../atoms";
import { MenuButton } from "shared/FusionUI/molecules/controls/MenuButton";
import { MenuPanelState } from "shared/FusionUI/states/MenuPanelState";
import { MenuButtonIcon } from "shared/assets/images/buttons";

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
			Icon: MenuButtonIcon["CharacterPanel"],
			LayoutOrder: 1,
			Size: MenuButtonSize,
			OnClick: () => {
				PlayerCurrencyState.Coins.set(PlayerCurrencyState.Coins.get() + 10); // Example action
				MenuPanelState.SelectedPanel.set("CharacterPanel");
			},
		}),
		MenuButton({
			Name: "EquipmentPanel",
			Icon: MenuButtonIcon["CharacterPanel"],
			LayoutOrder: 1,
			Size: MenuButtonSize,
			OnClick: () => {
				PlayerCurrencyState.Coins.set(PlayerCurrencyState.Coins.get() + 10); // Example action
				MenuPanelState.SelectedPanel.set("EquipmentPanel");
			},
		}),
		MenuButton({
			Name: "FriendsPanel",
			Icon: MenuButtonIcon["CharacterPanel"],
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
		MenuButton({
			Name: "TeleportPanel",
			Icon: MenuButtonIcon["CharacterPanel"],
			LayoutOrder: 1,
			Size: MenuButtonSize,
		}),
	];

	return ScrollContainer({
		Type: "Horizontal",
		Size: props.Size ?? new UDim2(1, 0, 1, 0),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		Children: buttons,
	});
};
