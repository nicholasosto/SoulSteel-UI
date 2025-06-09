/// <reference types="@rbxts/types" />

/**
 * @file        ResourceBar.ts
 * @module      ResourceBar
 * @layer       Atom
 * @description Fusion atom representing a generic resource bar.
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

import Fusion, { Children, Computed, Value } from "@rbxts/fusion";
import { createFusionResource, FusionResource } from "shared/FusionUI/states/Helpers/FusionResource";

export interface ResourceBarProps {
	FusionResource: FusionResource;
}
export const ResourceBar = (props: ResourceBarProps) => {
	const { FusionResource } = props;
	const Height = Value(25); // Height of the resource bar

	const container = Fusion.New("Frame")({
		Name: "ResourceBar",
		Size: new UDim2(1, 0, 0, Height.get()),
		BackgroundColor3: new Color3(0.2, 0.2, 0.2),
		BorderSizePixel: 0,
		[Children]: {
			Background: Fusion.New("Frame")({
				Name: "Background",
				Size: UDim2.fromScale(1, 1),
				BackgroundColor3: new Color3(0.1, 0.1, 0.1),
				BorderSizePixel: 0,
				ZIndex: 1,
			}),
			Fill: Fusion.New("Frame")({
				Name: "Fill",
				Size: Computed(() => UDim2.fromScale(FusionResource.percent.get(), 1)),
				BackgroundColor3: FusionResource.color,
				BorderSizePixel: 0,
				ZIndex: 2,
			}),
			Label: Fusion.New("TextLabel")({
				Name: "Label",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				Text: FusionResource.label.get(),
				TextColor3: new Color3(1, 1, 1),
				TextScaled: true,
				TextXAlignment: Enum.TextXAlignment.Center,
				TextYAlignment: Enum.TextYAlignment.Center,
				ZIndex: 3,
				Font: Enum.Font.Gotham,
			}),
		},
	});

	return container;
};
