/// <reference types="@rbxts/types" />

/**
 * @file        GemInventory.ts
 * @module      GemInventory
 * @layer       Organism
 * @description Scrollable grid of the player's gems.
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

import Fusion, { ForPairs } from "@rbxts/fusion";
import { InventoryGem } from "../molecules";
import { LayoutTokens } from "shared/FusionUI/theme";

const { New, Children } = Fusion;

export interface GemInventoryProps {
	gemIds: string[];
}

/** Displays gems in a grid for selection and drag. */
export const GemInventory = (props: GemInventoryProps) => {
	return New("ScrollingFrame")({
		Name: "GemInventory",
		Size: UDim2.fromScale(1, 0.4),
		BackgroundTransparency: 1,
		ScrollBarThickness: 6,
		AutomaticCanvasSize: Enum.AutomaticSize.Y,
		[Children]: {
			Layout: LayoutTokens.Grid(),
			Gems: ForPairs(props.gemIds, (i, gemId) => $tuple(i, InventoryGem({ gemId, index: i as number }))),
		},
	});
};
