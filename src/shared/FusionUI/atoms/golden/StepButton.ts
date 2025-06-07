/// <reference types="@rbxts/types" />

/**
 * @file        StepButton.ts
 * @module      StepButton
 * @layer       Atom
 * @description Icon button used for stepping values up or down.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-06-02 by Codex – Added documentation header
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import { New, OnEvent } from "@rbxts/fusion";
import { ControlButtonIcon } from "shared/assets/images/buttons";

interface StepButtonProps {
	direction: "up" | "down";
	onClick: () => void;
	disabled?: boolean;
	LayoutOrder?: number;
	ZIndex?: number;
}

export const StepButton = (p: StepButtonProps) =>
	New("ImageButton")({
		Size: UDim2.fromOffset(30, 30),
		BackgroundTransparency: 1,
		LayoutOrder: p.LayoutOrder ?? 0,
		ZIndex: p.ZIndex ?? 1,
		Image: p.direction === "up" ? ControlButtonIcon["Increase"] : ControlButtonIcon["Decrease"],
		ImageColor3: p.disabled ? Color3.fromRGB(5, 5, 5) : Color3.fromRGB(255, 255, 255),
		AutoButtonColor: false,
		[OnEvent("Activated")]: () => {
			if (!p.disabled) p.onClick();
		},
	});
