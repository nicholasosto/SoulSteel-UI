/// <reference types="@rbxts/types" />

/**
 * @file        CharacterCard.ts
 * @module      CharacterCard
 * @layer       Organism
 * @description Displays the player's avatar, level and health information.
 */

import Fusion from "@rbxts/fusion";
import { AvatarCard, BaseFrame } from "shared/FusionUI/atoms";
import { ResourceBar } from "shared/FusionUI/atoms/fillbar";
import { PlayerInfoState } from "shared/FusionUI/states/PlayerInfo";
import { LayoutTokens } from "shared/FusionUI/theme";
import { PlayerResources } from "shared/FusionUI/states";

const { Value, Computed } = Fusion;

/* Organism Constants */
const CardSize = UDim2.fromOffset(300, 150);
const TopContainerSize = UDim2.fromOffset(300, 120);
const AvatarSize = new UDim2(0, 90, 0, 90);
const ResourceContainerSize = new UDim2(1, -65, 1, -30);
const BottomContainerSize = UDim2.fromOffset(300, 30);

// Resource Container
const ResourceContainer = () => {
	const container = BaseFrame({
		Name: "ResourceContainer",
		Size: ResourceContainerSize,
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

// Top Container: Avatar and Resource Bar Container
const TopContainer = () => {
	return BaseFrame({
		Name: "TopContainer",
		Size: TopContainerSize,
		LayoutOrder: 1,
		Children: {
			Layout: LayoutTokens.Horizontal(0),
			Avatar: AvatarCard({
				Name: "AvatarCard",
				Size: AvatarSize,
			}),
			ResourceBarContainer: ResourceContainer(),
		},
	});
};

// Bottom Container: Level Gem and Player Info
const BottomContainer = () => {
	return BaseFrame({
		Name: "BottomContainer",
		Size: BottomContainerSize,
		LayoutOrder: 2,
		Children: {},
	});
};

/**
 * Character Card Component
 * Main Container for displaying player avatar, level, and resources (health, soulpower, stamina) information.
 */

export const CharacterCard = () => {
	const container = BaseFrame({
		Name: "CharacterCard",
		Size: CardSize,
		AnchorPoint: new Vector2(0, 0),
		Position: new UDim2(0, 20, 0, 20),
		BackgroundColor3: new Color3(0.16, 0.48, 0.89),
		BackgroundTransparency: 0.2,
		Children: {
			Layout: LayoutTokens.Vertical(0.5),
			TopContainer: TopContainer(),
			BottomContainer: BottomContainer(),
		},
	});
	return container;
};
