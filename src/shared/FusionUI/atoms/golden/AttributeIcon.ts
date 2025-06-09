import { Children, New } from "@rbxts/fusion";
import { AttributeAssetId } from "shared/assets/images/attribute";

/**
 * @file        AttributeIcon.ts
 * @module      AttributeIcon
 * @layer       Atom
 * @description Displays an attribute icon, typically for player stats or abilities.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · UI Guide        │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author        Trembus
 * @license       MIT
 * @since         0.1.0
 * @lastUpdated   2025-06-07 — AGENTS header update
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *
 * @composition
 *   @atoms
 *     AttributeIcon
 *
 */

export interface AttributeIconProps {
	AssetId: string | keyof typeof AttributeAssetId;
	Size?: UDim2;
	Tooltip?: string;
	LayoutOrder?: number;
	ZIndex?: number;
}

/** Atom for displaying an attribute icon with an optional tooltip. */
export const AttributeIcon = (props: AttributeIconProps) => {
	return New("ImageLabel")({
		BackgroundColor3: new Color3(0, 0, 0),
		BackgroundTransparency: 0.6,
		Image: props.AssetId,
		Interactable: false,
		ScaleType: Enum.ScaleType.Fit,
		Size: UDim2.fromOffset(40, 40),
		[props.Tooltip ? "Tooltip" : ""]: props.Tooltip,
		[Children]: {
			AspectRatioConstraint: New("UIAspectRatioConstraint")({
				AspectRatio: 1,
				AspectType: Enum.AspectType.FitWithinMaxSize,
			}),
			UICorner: New("UICorner")({
				CornerRadius: new UDim(0, 8),
			}),
			UIStroke: New("UIStroke")({
				Color: new Color3(0, 0, 0),
				Thickness: 1,
				ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
			}),
		},
	});
};
