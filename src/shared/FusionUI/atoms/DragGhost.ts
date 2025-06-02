/// <reference types="@rbxts/types" />

/**
 * @file        DragGhost.ts
 * @module      DragGhost
 * @layer       Atom
 * @description Follows the cursor while dragging a gem.
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
import { UserInputService } from "@rbxts/services";
import { dragStore } from "../states/DragStore";
import { GemAssets } from "./assets";
import { CornerToken } from "shared/FusionUI/theme";

const { New, Value, Computed, Observer, Children } = Fusion;

/** Ghost image that appears during drag. */
export const DragGhost = () => {
	const pos = Value(new UDim2());
	const ghostGem = Computed(() => dragStore.get()?.gemId);

	const conn = UserInputService.InputChanged.Connect((i) => {
		if (i.UserInputType === Enum.UserInputType.MouseMovement) {
			pos.set(UDim2.fromOffset(i.Position.X, i.Position.Y));
		}
	});

	Observer(dragStore, (v) => {
		if (!v) conn.Disconnect();
	});

	return New("ImageLabel")({
		Name: "DragGhost",
		Visible: Computed(() => ghostGem.get() !== undefined),
		Position: pos,
		Size: UDim2.fromOffset(48, 48),
		Image: Computed(() => (ghostGem.get() ? GemAssets[ghostGem.get()!] : "")),
		BackgroundTransparency: 1,
		AnchorPoint: new Vector2(0.5, 0.5),
		ZIndex: 50,
		[Children]: {
			Corner: CornerToken(4),
		},
	});
};
