/// <reference types="@rbxts/types" />

/**
 * @file        CharacterCard.ts
 * @module      CharacterCard
 * @layer       Organism
 * @description Displays the player's avatar, level and health information.
 */

import Fusion, { Children, New } from "@rbxts/fusion";
import { AvatarCard, BaseFrame, ResourceBar } from "shared/FusionUI/atoms";
import { PlayerInfoState } from "shared/FusionUI/states/PlayerInfo";
import { CharacterCardSizes, LayoutTokens } from "shared/FusionUI/theme";
import { PlayerResources } from "shared/FusionUI/states";
import { LevelBar } from "shared/FusionUI/molecules";
import { MenuBar } from "./MenuBar";

const { Value, Computed } = Fusion;

// Constants
const Sizes = {
	ComponentContainer: UDim2.fromOffset(CharacterCardSizes.ComponentWidth, CharacterCardSizes.ComponentHeight),
	TopRowSize: new UDim2(1, 0, 0, CharacterCardSizes.TopRowHeight),
	LevelBarSize: new UDim2(1, 0, 0, CharacterCardSizes.LevelBarHeight),
	MenuBarSize: new UDim2(1, 0, 0, CharacterCardSizes.MenuBarHeight),
};

// Resource Container
const ResourceContainer = () => {
	const container = BaseFrame({
		Name: "ResourceContainer",
		Size: new UDim2(1, -95, 1, 0),
		LayoutOrder: 2,
		Children: {
			Layout: LayoutTokens.Vertical(2),
			Health: ResourceBar({
				FusionResource: PlayerResources.HealthResource,
			}),
			SoulPower: ResourceBar({
				FusionResource: PlayerResources.SoulPowerResource,
			}),
			StaminaBar: ResourceBar({
				FusionResource: PlayerResources.StaminaResource,
			}),
		},
	});

	return container;
};

/**
 * Character Card Component
 * Main Container for displaying player avatar, level, and resources (health, soulpower, stamina) information.
 */

export const CharacterCard = () => {
	const container = New("Frame")({
		Name: "CharacterCard",
		Size: Sizes.ComponentContainer,
		AnchorPoint: new Vector2(0, 0),
		Position: UDim2.fromOffset(10, 10),
		BackgroundTransparency: 1,
		[Children]: {
			// Layout
			Layout: New("UIListLayout")({
				Name: "UIListLayout",
				SortOrder: Enum.SortOrder.LayoutOrder,
				VerticalFlex: Enum.UIFlexAlignment.SpaceEvenly,
			}),
			// Top Row (Avatar, Resource Bars)
			TopRow: New("Frame")({
				Name: "TopRow",
				BackgroundTransparency: 1,
				BorderSizePixel: 0,
				LayoutOrder: 1,
				Size: new UDim2(1, 0, 0, 100),

				[Children]: {
					// Avatar Card
					Avatar: New("Frame")({
						Name: "AvatarFrame",
						BackgroundTransparency: 1,
						Size: UDim2.fromOffset(90, 90),
					}),
					// Reource Bars
					ResourceBars: New("Frame")({
						Name: "ResourceBarContainer",
						Size: new UDim2(1, -100, 0.96, 0),
						[Children]: ResourceContainer(),
					}),
					// Layout
					Layout: New("UIListLayout")({
						Name: "UIListLayout",
						FillDirection: Enum.FillDirection.Horizontal,
						HorizontalFlex: Enum.UIFlexAlignment.SpaceEvenly,
						SortOrder: Enum.SortOrder.LayoutOrder,
						VerticalAlignment: Enum.VerticalAlignment.Center,
						VerticalFlex: Enum.UIFlexAlignment.SpaceEvenly,
					}),
				},
			}),

			// Level Bar
			LevelBar: New("Frame")({
				Name: "LevelBar",
			}),
		},
	});
	return container;
};
