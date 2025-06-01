/// <reference types="@rbxts/types" />

/**
 * @file        EquipmentPanel.ts
 * @module      EquipmentPanel
 * @layer       Screen
 * @description Root screen composing the player's HUD organisms.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion, { Computed, Value } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { EquipmentWindow } from "../organisms";
import { SlotButton, SlotButtonProps } from "../atoms/buttons/SlotButton";
import { IconAssets } from "shared/FusionUI/atoms";
import { ContainerBase } from "../atoms/containers/ContainerBase";
import { MenuPanelState } from "../states/MenuPanelState";

const { New, Children } = Fusion;

const HelmetProps: SlotButtonProps = {
	SlotType: "Helmet",
	Image: IconAssets.Slots.Helmet, // Replace with actual asset ID
	IsSelected: Value(false),
	OnClick: () => {
		print("Helmet slot clicked");
	},
};

const ChestplateProps: SlotButtonProps = {
	SlotType: "Chestplate",
	Image: IconAssets.Slots.Armor, // Replace with actual asset ID
	IsSelected: Value(false),
	OnClick: () => {
		print("Chestplate slot clicked");
	},
};

const WeaponProps: SlotButtonProps = {
	SlotType: "Weapon",
	Image: IconAssets.Slots.Weapon, // Replace with actual asset ID
	IsSelected: Value(false),
	OnClick: () => {
		print("Weapon slot clicked");
	},
};

const Accessory1Props: SlotButtonProps = {
	SlotType: "Accessory1",
	Image: IconAssets.Slots.Accessory, // Replace with actual asset ID
	IsSelected: Value(false),
	OnClick: () => {
		print("Accessory 1 slot clicked");
	},
};

const Accessory2Props: SlotButtonProps = {
	SlotType: "Accessory2",
	Image: IconAssets.Slots.Accessory, // Replace with actual asset ID
	IsSelected: Value(false),
	OnClick: () => {
		print("Accessory 2 slot clicked");
	},
};

const SlotButtons = {
	Helmet: SlotButton(HelmetProps),
	Chest: SlotButton(ChestplateProps),
	Weapon: SlotButton(WeaponProps),
	Accessory1: SlotButton(Accessory1Props),
	Accessory2: SlotButton(Accessory2Props),
};

const Layout = New("UIListLayout")({
	FillDirection: Enum.FillDirection.Horizontal,
	HorizontalAlignment: Enum.HorizontalAlignment.Center,
	VerticalAlignment: Enum.VerticalAlignment.Center,
	SortOrder: Enum.SortOrder.LayoutOrder,
	Padding: new UDim(0, 10), // Adjust padding as needed
});

/** Player HUD screen mounted under the local PlayerGui. */
export const EquipmentPanel = () => {
	const isVisible = Value(true); // Local state to control visibility
	const isEnabled = Computed(() => {
		const selectedPanel = MenuPanelState.SelectedPanel.get();
		if (selectedPanel === "EquipmentPanel") {
			isVisible.set(true);
			return true;
		} else {
			isVisible.set(false);
			return false;
		}
		return MenuPanelState.SelectedPanel.get() === "EquipmentPanel";
	});

	const EquipmentPanel = New("ScreenGui")({
		Name: "EquipmentPanel",
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		Enabled: isEnabled,
		[Children]: {
			Window: ContainerBase({
				Name: "EquipmentWindow",
				VisableState: isVisible,
				Size: UDim2.fromOffset(800, 500),
				TitleText: "Equipment",
				Layout: Layout,
				Children: {
					LayoutStyle: Layout,
					...SlotButtons,
				},
			}),
		},
	});
	return EquipmentPanel;
};
