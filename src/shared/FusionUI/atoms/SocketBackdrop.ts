/// <reference types="@rbxts/types" />

/**
 * @file        SocketBackdrop.ts
 * @module      SocketBackdrop
 * @layer       Atom
 * @description Visual backdrop for gem sockets.
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
import { CornerToken } from "shared/FusionUI/theme";

const { New, Children, Computed } = Fusion;

export interface SocketBackdropProps {
	isHighlighted: Fusion.Value<boolean>;
	isEmpty: boolean;
}

/** Backdrop ring that glows when a valid gem is hovered. */
export const SocketBackdrop = (props: SocketBackdropProps) => {
	return New("ImageLabel")({
		Name: "SocketBackdrop",
		Size: UDim2.fromOffset(64, 64),
		BackgroundTransparency: 1,
		Image: "rbxassetid://socketRing",
		ImageColor3: Computed(() =>
			props.isHighlighted.get() ? Color3.fromRGB(0, 255, 140) : Color3.fromRGB(255, 255, 255),
		),
		[Children]: {
			Corner: CornerToken(4),
		},
	});
};
