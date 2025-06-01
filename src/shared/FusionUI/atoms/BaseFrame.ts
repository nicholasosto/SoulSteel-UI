/// <reference types="@rbxts/types" />

/**
 * @file        BaseFrame.ts
 * @module      BaseFrame
 * @layer       Atom
 * @description Fusion atom providing a styled container frame.
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
 *
 * @remarks
 *   Uses theme colors from shared/FusionUI/theme.
 */

import Fusion, { Children, New } from "@rbxts/fusion";
import { CornerToken, GradientTokens } from "shared/FusionUI/theme";

const { Value } = Fusion;
const DefaultWidth = 200;
const DefaultHeight = 200;

const Defaults = {
	AnchorPoint: new Vector2(0.5, 0.5),
	Position: UDim2.fromScale(0.5, 0.5),
	Size: UDim2.fromOffset(DefaultWidth, DefaultHeight),
	BackgroundColor3: new Color3(0.2, 0.2, 0.2),
	BackgroundTransparency: 0.5,
	BorderSizePixel: 2,
};

export interface BaseFrameProps {
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	BackgroundColor3?: Color3;
	BackgroundTransparency?: number;
	LayoutOrder?: number;
	Children?: Instance[] | Record<string, Instance>;
}

/** Simple frame with corner and gradient tokens. */
export const BaseFrame = (props: BaseFrameProps) => {
	const component = New("Frame")({
		Name: props.Name ?? "BaseFrame",
		Size: props.Size ?? Defaults.Size,
		Position: props.Position ?? Defaults.Position,
		AnchorPoint: props.AnchorPoint ?? Defaults.AnchorPoint,
		BackgroundColor3: props.BackgroundColor3 ?? Defaults.BackgroundColor3,
		BackgroundTransparency: props.BackgroundTransparency ?? Defaults.BackgroundTransparency,
		LayoutOrder: props.LayoutOrder ?? 1,
		[Children]: {
			Corner: CornerToken(4),
			Gradient: GradientTokens.DarkGradient(),
			Content: props.Children,
		},
	});

	return component;
};
