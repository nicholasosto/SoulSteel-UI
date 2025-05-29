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
import Fusion from "@rbxts/fusion";
import { CornerToken, StrokeToken, GradientTokens } from "shared/FusionUI/theme";

const { New, Children } = Fusion;

interface AvatarProps {
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
}

export const AvatarCard = (props: AvatarProps) => {
	const container = New("Frame")({
		Name: props.Name ?? "AvatarCard",
		Size: props.Size ?? new UDim2(0, 60, 0, 60),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		BackgroundTransparency: 1,
		[Children]: {
			OuterFrame: New("Frame")({
				Name: "OuterFrame",
				Size: new UDim2(1, 0, 1, 0),
				BackgroundTransparency: 1,
				[Children]: [
					New("ImageLabel")({
						Name: "AvatarFrameImage",
						Size: new UDim2(1, 0, 1, 0),
						Image: "rbxassetid://87436240067342", // Frame image ID
						[Children]: [CornerToken(4), StrokeToken(2)],
						BackgroundTransparency: 1,
						ZIndex: 10,
					}),
				],
			}),
			AvatarImage: New("ImageLabel")({
				Name: "AvatarImage",
				Size: new UDim2(1, 0, 1, 0),
				Image: Players.GetUserThumbnailAsync(
					Players.LocalPlayer.UserId,
					Enum.ThumbnailType.AvatarBust,
					Enum.ThumbnailSize.Size420x420,
				)[0],
				BackgroundTransparency: 1,
			}),
			Gradient: GradientTokens.DarkGradient(),
			Corner: CornerToken(4),
		},
	});
	return container;
};
