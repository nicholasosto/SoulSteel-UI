/// <reference types="@rbxts/types" />

/**
 * @file        ActionBar.ts
 * @module      HUDActionBar
 * @layer       Organism
 * @description Container for the player's ability bar on the HUD.
 */

import Fusion from "@rbxts/fusion";
import { BaseFrame, Lists, SlotButton, SlotButtonProps, IconAssets } from "../../atoms";

const { Value } = Fusion;
export interface ActionBarProps {
	SlotCount?: number;
}

/** Action bar positioned at the bottom centre of the screen. */
export const ActionBar = (props?: ActionBarProps) => {
	const count = props?.SlotCount ?? 5;
	const slots: Instance[] = [];

	for (let i = 1; i <= count; i++) {
		const buttonProps: SlotButtonProps = {
			SlotType: `Action${i}`,
			Image: IconAssets.Ability.Unassigned,
			IsSelected: Value(false),
			OnClick: () => print(`Action slot ${i} clicked`),
		};
		slots.push(SlotButton(buttonProps));
	}

	return BaseFrame({
		Name: "ActionBar",
		Size: new UDim2(0, count * 60, 0, 60),
		AnchorPoint: new Vector2(0.5, 0.5),
		Position: UDim2.fromScale(0.5, 0.5),
		Children: [Lists.HorizontalList(slots)],
	});
};
