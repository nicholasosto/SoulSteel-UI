/// <reference types="@rbxts/types" />

/**
 * @file        InventoryGem.ts
 * @module      InventoryGem
 * @layer       Molecule
 * @description Draggable gem icon for inventory grids.
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
import { GemIcon } from "shared/FusionUI/atoms";
import { dragStore } from "../states";

const { New, Children, OnEvent } = Fusion;

export interface InventoryGemProps {
	gemId: string;
	index: number;
}

/** Draggable gem within the inventory grid. */
export const InventoryGem = (props: InventoryGemProps) => {
	return New("ImageButton")({
		Name: `InventoryGem_${props.index}`,
		Size: UDim2.fromOffset(50, 50),
		BackgroundTransparency: 1,
		[Children]: {
			Icon: GemIcon({ gemId: props.gemId }),
		},
		[OnEvent("MouseButton1Down")]: () => {
			dragStore.set({ gemId: props.gemId, originType: "inventory", originIndex: props.index });
		},
		[OnEvent("MouseButton1Up")]: () => {
			// Cancel if not dropped
			dragStore.set(undefined);
		},
	});
};
