import { IconAssets, SlotButton, SlotButtonProps } from "../atoms";
import Fusion from "@rbxts/fusion";

const { New, Children, Value, Computed, OnEvent } = Fusion;

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

export interface EquipmentPanelProps {
	EquipmentSlots: SlotButtonProps[];
	SelectedSlot: Fusion.Value<string>;
}
export const EquipmentPanel = (props: EquipmentPanelProps) => {
	const { EquipmentSlots } = props;

	return New("Frame")({
		Name: "EquipmentPanel",
		BackgroundColor3: Color3.fromRGB(50, 50, 50),
		Size: UDim2.fromScale(0.3, 0.5),
		Position: UDim2.fromScale(0.7, 0.25),
		[Children]: EquipmentSlots.map((slotProps) => SlotButton(slotProps)),
	});
};
