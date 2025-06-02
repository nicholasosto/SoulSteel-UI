import { New } from "@rbxts/fusion";
import { AttributeAssetId } from "shared/assets/images/attribute";

/**
 * @file        AttributeIcon.ts
 * @module      attributeIconAtoms
 * @layer       Atom
 * @description Atom for displaying an attribute icon.
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

export interface AttributeIconProps {
	AssetId: string | keyof typeof AttributeAssetId;
	Size?: UDim2;
	Tooltip?: string;
}

/** Atom for displaying an attribute icon with an optional tooltip. */
export const AttributeIcon = (props: AttributeIconProps) => {
	return New("ImageLabel")({
		Name: "AttributeIcon",
		Size: props.Size ?? new UDim2(0, 24, 0, 24),
		Image: props.AssetId,
		BackgroundTransparency: 1,
		[props.Tooltip ? "Tooltip" : ""]: props.Tooltip,
	});
};
