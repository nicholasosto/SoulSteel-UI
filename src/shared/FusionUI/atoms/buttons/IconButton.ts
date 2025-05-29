/// <reference types="@rbxts/types" />

/**
 * @file        IconButton.ts
 * @module      IconButton
 * @layer       Atom
 * @description Fusion atom for icon buttons with click sound.
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

import { PlaySound } from "shared/Utility";
import { BasicButton } from "../buttons/BasicButton";

export interface IconButtonProps {
	Name: string;
	Icon: string;
	OnClick: () => void;
	Size?: UDim2;
	AnchorPoint?: Vector2;
	Position?: UDim2;
}

/** ImageButton with a click sound. */
export const IconButton = (props: IconButtonProps) => {
	const { Instance } = BasicButton({
		Name: props.Name,
		Image: props.Icon,
		Size: props.Size ?? UDim2.fromScale(1, 1),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		Position: props.Position ?? new UDim2(0.5, 0, 0.5, 0),
	});

	Instance.Activated.Connect(() => {
		PlaySound.Click();
		props.OnClick();
	});

	return Instance;
};
