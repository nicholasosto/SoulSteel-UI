/// <reference types="@rbxts/types" />

/**
 * @file        SlotButton.ts
 * @module      SlotButton
 * @layer       Atom
 * @description Fusion atom for equipment slot buttons.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-05-29 by Codex – Header update
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion from "@rbxts/fusion";

export interface SlotButtonProps {
	SlotType: string;
	Image: string;
	IsSelected: Fusion.Value<boolean>;
	OnClick: () => void;
}

const { New, Children, Value, Computed, OnEvent } = Fusion;

export const SlotButton = (props: SlotButtonProps) => {
	const { SlotType, IsSelected, OnClick } = props;
	const isHovered = Value(false);
	const isPressed = Value(false);

	return New("ImageButton")({
		Name: `SlotButton_${SlotType}`,
		BackgroundColor3: Computed(() =>
			IsSelected.get() ? Color3.fromRGB(255, 255, 0) : Color3.fromRGB(255, 255, 255),
		),
		BackgroundTransparency: Computed(() => (isPressed.get() ? 0.5 : 0)),
		Size: UDim2.fromOffset(100, 50),
		[Children]: {},
		[Fusion.OnEvent("Activated")]: () => {
			if (isPressed.get()) {
				return; // Prevent double activation if already pressed
			}
			IsSelected.set(true); // Set the button as selected
			isPressed.set(false); // Reset pressed state
			OnClick();
		},
		[Fusion.OnEvent("MouseEnter")]: () => {
			isHovered.set(true);
		},
		[Fusion.OnEvent("MouseLeave")]: () => {
			isHovered.set(false);
		},
		[Fusion.OnEvent("MouseButton1Down")]: () => {
			isPressed.set(true);
		},
		[Fusion.OnEvent("MouseButton1Up")]: () => {
			isPressed.set(false);
		},
	});
};
