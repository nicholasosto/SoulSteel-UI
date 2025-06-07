/**
 * @file        InfoLabel.ts
 * @module      InfoLabel
 * @layer       Molecule
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
import { ValueLabel, GameLabel } from "../atoms";
import Fusion, { Children, Computed, New } from "@rbxts/fusion";

/**
 * @interface InfoLabelProps
 * @description Properties for the InfoLabel component.
 * @property {Fusion.Value<string | number>} Value - The value to display in the label.
 * @property {string} [Text] - Optional text to display alongside the value.
 * @property {UDim2} [Size] - Optional size for the label.
 * @property {string} [Tooltip] - Optional tooltip for the label.
 * @property {number} [LayoutOrder] - Optional layout order for the label.
 * @property {number} [ZIndex] - Optional ZIndex for the label.
 * @example
 * const myLabel = InfoLabel({
 *  Value: Fusion.Value("Hello World"),
 * Text: "My Label",
 * Size: new UDim2(0, 100, 0, 50),
 * Tooltip: "This is a tooltip",
 * LayoutOrder: 1,
 * ZIndex: 2,
 * });
 * @returns {Frame} A Frame containing a ValueLabel and an optional GameLabel.
 *
 */
export interface InfoLabelProps {
	/** The value to display in the label. */
	Value: Fusion.Value<string | number>;
	Text?: string;
	/** Optional size for the label. */
	Size?: UDim2;
	/** Optional tooltip for the label. */
	Tooltip?: string;
	LayoutOrder?: number;
	ZIndex?: number;
}

/**
 *
 * @param props {Value: Fusion.Value<string | number>, Text?: string, Size?: UDim2, Tooltip?: string, LayoutOrder?: number, ZIndex?: number}
 * @returns {Frame} A Frame containing a ValueLabel and an optional GameLabel.
 * @description
 * Creates an InfoLabel component that displays a value label and an optional game label.
 */
export const InfoLabel = (props: InfoLabelProps) => {
	return New("Frame")({
		Name: "InfoLabel",
		Size: props.Size ?? new UDim2(0, 40, 1, 0),
		BackgroundTransparency: 1,
		LayoutOrder: props.LayoutOrder,
		ZIndex: props.ZIndex ?? 1,
		[Children]: {
			ValueLabel: ValueLabel({ Value: props.Value, LayoutOrder: 1 }),
			GameLabel: props.Text
				? GameLabel({
						Text: props.Text,
						Size: UDim2.fromScale(0.5, 1),
						LayoutOrder: 0,
					})
				: undefined,
		},
	});
};
