/// <reference types="@rbxts/types" />

/**
 * @file        EquipmentPanel.ts
 * @module      EquipmentPanel
 * @layer       Organism
 * @description Displays equipment slots for the player.
 */

import Fusion from "@rbxts/fusion";
import { BaseFrame, IconAssets, SlotButton, SlotButtonProps } from "../../atoms";

const { Value } = Fusion;

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

export const EquipmentWindow = () => {
	const children = [
		SlotButton(HelmetProps),
		SlotButton(ChestplateProps),
		SlotButton(WeaponProps),
		SlotButton(Accessory1Props),
		SlotButton(Accessory2Props),
	];

	const container = BaseFrame({
		Name: "EquipmentPanel",
		Size: UDim2.fromOffset(300, 400),
		Position: UDim2.fromScale(0.7, 0.25),
		Children: children,
	});

	return container;
};
