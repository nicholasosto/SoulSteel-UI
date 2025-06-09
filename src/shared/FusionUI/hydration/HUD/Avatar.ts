/// <reference types="@rbxts/types" />

/**
 * @file        Avatar.ts
 * @module      AvatarFrame
 * @layer       Atom
 * @description Fusion atom that renders a player avatar bust inside a frame.
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

import { Players } from "@rbxts/services";
import { Hydrate } from "@rbxts/fusion";
import { HydrationTemplates, PlayerGUI } from "shared/constants";

/* Type to help with children */
type AvatarFrame = Frame & {
	BackgroundImage: ImageLabel;
	AvatarImage: ImageLabel;
	AvatarFrameImage: ImageLabel;
	UIAspectRatioConstraint: UIAspectRatioConstraint;
};

export const AvatarHydrate = () => {
	/* Get the AvatarImage for the local player */
	const avatarImage = Players.GetUserThumbnailAsync(
		Players.LocalPlayer.UserId,
		Enum.ThumbnailType.AvatarBust,
		Enum.ThumbnailSize.Size420x420,
	)[0];

	/* Get the AvatarFrame template from HydrationTemplates */
	const hydrationTemplate = HydrationTemplates.WaitForChild("AvatarFrame").Clone() as AvatarFrame;
	if (hydrationTemplate === undefined) {
		warn("AvatarFrame template not found in HydrationTemplates.");
		return;
	}

	/* Set the AvatarImage in the hydration template */
	hydrationTemplate.AvatarImage.Image = avatarImage;
	return Hydrate(hydrationTemplate)({
		Parent: PlayerGUI,
		Name: "AvatarCardHydrated",
		Size: UDim2.fromOffset(90, 90),
		Position: UDim2.fromScale(0.5, 0.5),
	});
};
