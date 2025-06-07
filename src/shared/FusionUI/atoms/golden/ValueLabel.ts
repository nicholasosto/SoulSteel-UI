/**
 * @file        ValueLabel.ts
 * @module      ValueLabel
 * @layer       Atom
 * @description Atom for displaying a value label.
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

import Fusion, { Computed, New } from "@rbxts/fusion";

export interface ValueLabelProps {
	/** The value to display in the label. */
	Value: Fusion.Value<string | number>;
	/** Optional size for the label. */
	Size?: UDim2;
	/** Optional tooltip for the label. */
	Tooltip?: string;
	LayoutOrder?: number;
	ZIndex?: number;
}

export const ValueLabel = (props: ValueLabelProps) => {
	return New("TextLabel")({
		Name: "ValueLabel",
		Size: props.Size ?? new UDim2(0, 40, 1, 0),
		Text: Computed(() => {
			return tostring(props.Value.get());
		}),
		LayoutOrder: props.LayoutOrder,
		ZIndex: props.ZIndex ?? 1,
		TextColor3: Color3.fromRGB(255, 255, 255),
		TextSize: 15,
		TextXAlignment: Enum.TextXAlignment.Center,
		TextYAlignment: Enum.TextYAlignment.Center,
		BackgroundTransparency: 1,
		Font: Enum.Font.LuckiestGuy,
		[props.Tooltip ? "Tooltip" : ""]: props.Tooltip,
	});
};
