/// <reference types="@rbxts/types" />

/**
 * @file        SocketGrid.ts
 * @module      SocketGrid
 * @layer       Organism
 * @description Row of sockets for the selected weapon.
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
import { SocketButton } from "../molecules";
import { LayoutTokens } from "shared/FusionUI/theme";

const { New, Children } = Fusion;

export interface SocketGridProps {
	weaponId: string;
	sockets: (string | undefined)[];
}

/** Displays the weapon's sockets in a horizontal row. */
export const SocketGrid = (props: SocketGridProps) => {
	return New("Frame")({
		Name: "SocketGrid",
		Size: new UDim2(1, 0, 0, 70),
		BackgroundTransparency: 1,
		[Children]: {
			Layout: LayoutTokens.Horizontal(4),
			Sockets: ForPairs(props.sockets, (i, gem) => [i, SocketButton({ socketIndex: i as number, gem })]),
		},
	});
};
