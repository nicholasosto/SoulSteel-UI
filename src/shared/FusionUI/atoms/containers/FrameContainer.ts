/// <reference types="@rbxts/types" />

/**
 * @file        FrameContainer.ts
 * @module
 * @layer       Atom
 * @description An image container that has preconfigured properties for scale and slice9.
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

import Fusion, { Children, New } from "@rbxts/fusion";

export interface FrameContainerProps {
	Children?: Fusion.ChildrenValue;
	Size?: UDim2;
	Position?: UDim2;
}

export const FrameContainer = (props: FrameContainerProps) => {
	const { Children: children, Size, Position } = props;
	return New("ImageLabel")({
		BackgroundTransparency: 1,
		Size: Size ?? new UDim2(1, 0, 1, 0), // Default to full size if not provided
		Position: Position ?? new UDim2(0, 0, 0, 0), // Default to top-left if not provided
		AnchorPoint: new Vector2(0, 0),
		ScaleType: Enum.ScaleType.Slice,
		SliceCenter: new Rect(484, 511, 520, 551),
		SliceScale: 0.5,
		Image: "rbxassetid://134322739825066",
		ZIndex: 2,
		[Children]: children,
	});
};
