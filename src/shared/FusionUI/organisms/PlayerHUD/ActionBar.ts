/// <reference types="@rbxts/types" />

/**
 * @file        ActionBar.ts
 * @module      HUDActionBar
 * @layer       Organism
 * @description Container for the player's ability bar on the HUD.
 */

import Fusion from "@rbxts/fusion";
import { BaseFrame } from "../../atoms";
import { ActionBar as SlotBar } from "../../molecules";

/** Action bar positioned at the bottom centre of the screen. */
export const ActionBar = () =>
	BaseFrame({
		Name: "ActionBar",
		Size: UDim2.fromOffset(320, 70),
		Position: new UDim2(0.5, 0, 1, -90),
		AnchorPoint: new Vector2(0.5, 1),
		Children: SlotBar({ SlotCount: 5 }),
	});
