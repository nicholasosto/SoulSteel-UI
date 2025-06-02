/// <reference types="@rbxts/types" />

/**
 * @file        GemIcon.ts
 * @module      GemIcon
 * @layer       Atom
 * @description Square gem icon with rarity border.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Codex – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion from "@rbxts/fusion";
import { GemAssets } from "./assets";
import { CornerToken } from "shared/FusionUI/theme";

const { New, Children, Computed } = Fusion;

export interface GemIconProps {
	gemId: string;
	rarity?: number;
	isGhost?: boolean;
	size?: UDim2;
}

/** Render a gem image with optional rarity border. */
export const GemIcon = (props: GemIconProps) => {
	return New("Frame")({
		Name: `Gem_${props.gemId}`,
		Size: props.size ?? UDim2.fromOffset(50, 50),
		BackgroundTransparency: 1,
		[Children]: {
			Image: New("ImageLabel")({
				Name: "Image",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				Image: GemAssets[props.gemId] ?? "",
				ImageTransparency: props.isGhost ? 0.5 : 0,
			}),
			Border: New("UIStroke")({
				ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
				Color: new Color3(1, 1 - (props.rarity ?? 0) * 0.2, 1),
				Thickness: 1,
			}),
			Corner: CornerToken(4),
		},
	});
};
