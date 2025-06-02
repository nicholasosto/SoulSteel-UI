/// <reference types="@rbxts/types" />

/**
 * @file        SocketButton.ts
 * @module      SocketButton
 * @layer       Molecule
 * @description Interactive gem socket button.
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
import { SocketBackdrop, GemIcon } from "../atoms";
import { GemIcons } from "shared/assets";
import { dragStore } from "../states";

const { New, Children, Computed, OnEvent, Value } = Fusion;

export interface SocketButtonProps {
	socketIndex: number;
	gem?: string;
}

/** Socket slot that accepts drops from gems. */
export const SocketButton = (props: SocketButtonProps) => {
	const isHovered = Value(false);
	const isHighlighted = Computed(() => {
		const drag = dragStore.get();
		return drag !== undefined && props.gem === undefined && isHovered.get();
	});

	return New("ImageButton")({
		Name: `Socket_${props.socketIndex}`,
		Size: UDim2.fromOffset(64, 64),
		BackgroundTransparency: 1,
		[Children]: {
			Backdrop: SocketBackdrop({ isHighlighted, isEmpty: props.gem === undefined }),
			Gem: props.gem ? GemIcon({ gemId: props.gem }) : undefined,
		},
		[OnEvent("MouseEnter")]: () => isHovered.set(true),
		[OnEvent("MouseLeave")]: () => isHovered.set(false),
		[OnEvent("MouseButton1Up")]: () => {
			const drag = dragStore.get();
			if (!drag || props.gem) return;
			// Swap or attach gem logic would go here
			dragStore.set(undefined);
		},
	});
};
