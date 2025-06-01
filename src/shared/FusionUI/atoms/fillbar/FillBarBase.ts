/// <reference types="@rbxts/types" />

/**
 * @file        FillBarBase.ts
 * @module      FillBarBase
 * @layer       Atom
 * @description Base Fusion atom for fill-based bars.
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
 */

import Fusion from "@rbxts/fusion";
import { Frames, Textures } from "../assets";

const { New, Children, Computed } = Fusion;

export interface FillBarBaseProps {
	Current: Fusion.Value<number>;
	Max: Fusion.Value<number>;
	LabelText?: Fusion.Computed<string>;
	FrameImage?: Fusion.Computed<ImageLabel>;
	Name?: string;
	Height?: number;
	LayoutOrder?: number;
}

export function FillBarBase(props: FillBarBaseProps) {
	const { Current, Max, LabelText } = props;

	const container = New("Frame")({
		Name: props.Name ?? "Fillbar_Container",
		Size: new UDim2(1, 0, 0, props.Height ?? 25),
		BackgroundColor3: new Color3(0.2, 0.2, 0.2),
		BorderSizePixel: 0,
		[Children]: {
			TextLabel: New("TextLabel")({
				Name: "TextLabel",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				Text: LabelText ? LabelText.get() : `${Current.get()}/${Max.get()}`,
				TextColor3: new Color3(1, 1, 1),
				TextScaled: true,
				ZIndex: 3,
			}),
			FrameImage: New("ImageLabel")({
				Name: "FrameImage",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				Image: "rbxassetid://108018297611555",
				ImageColor3: new Color3(1, 1, 1),
				ClipsDescendants: true,
				[Children]: {
					FillImage: New("ImageLabel")({
						Name: "FillImage",
						Size: Computed(() => UDim2.fromScale(Current.get() / Max.get(), 1)),
						BackgroundTransparency: 1,
						Image: Textures.BoneDoily, // Replace with actual asset ID
						ImageColor3: new Color3(0.1, 0.8, 0.1), // Green fill color
						ImageTransparency: 0.2,
						ZIndex: 2,
					}),
					FillBackground: New("ImageLabel")({
						Name: "FillBackground",
						Size: UDim2.fromScale(1, 1),
						BackgroundTransparency: 1,
						Image: Textures.Mystical,
						ImageColor3: new Color3(0.2, 0.2, 0.2), // Dark background color
						ZIndex: 1,
					}),
				},
			}),
			FillContainer: New("Frame")({
				Name: "FillContainer",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
			}),
		},
	});

	return container;
}

export const DemoFillBar = () =>
	FillBarBase({
		Current: Fusion.Value(50),
		Max: Fusion.Value(100),
		LabelText: Computed(() => `Health: ${50}/100`),
		Name: "DemoFillBar",
		Height: 30,
	});
