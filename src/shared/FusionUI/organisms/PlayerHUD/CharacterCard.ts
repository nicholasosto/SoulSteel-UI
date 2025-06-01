/// <reference types="@rbxts/types" />

/**
 * @file        CharacterCard.ts
 * @module      CharacterCard
 * @layer       Organism
 * @description Displays the player's avatar, level and health information.
 */

import Fusion, { Children, New } from "@rbxts/fusion";
import { AvatarCard, BaseFrame } from "shared/FusionUI/atoms";
import { ResourceBar } from "shared/FusionUI/atoms/fillbar";
import { PlayerInfoState } from "shared/FusionUI/states/PlayerInfo";
import { LayoutTokens } from "shared/FusionUI/theme";
import { PlayerResources } from "shared/FusionUI/states";

const { Value, Computed } = Fusion;

// Constants
const TopRowSize = new UDim2(1, 0, 0, 120);
const BottomRowSize = new UDim2(1, 0, 0, 40);

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

const TopRow = () => {
	const avatarCard = New("Frame")({
		Name: "AvatarCardContainer",
		Size: TopRowSize,
		BackgroundTransparency: 1,
		[Children]: {
			Layout: LayoutTokens.Horizontal(0.5),
			AvatarCard: AvatarCard({
				Size: UDim2.fromOffset(90, 90),
			}),
			ResourceBarContainer: ResourceContainer(),
		},
	});
	return avatarCard;
};

/**
 * Character Card Component
 * Main Container for displaying player avatar, level, and resources (health, soulpower, stamina) information.
 */
interface CharacterCardProps {
	Size: UDim2;
	Position: UDim2;
}

export const CharacterCard = (props: CharacterCardProps) => {
	const container = BaseFrame({
		Name: "CharacterCard",
		Size: props.Size,
		AnchorPoint: new Vector2(0, 0),
		Position: props.Position,
		BackgroundColor3: new Color3(0.16, 0.48, 0.89),
		BackgroundTransparency: 0.2,
		Children: {
			Layout: LayoutTokens.Vertical(0.5),
			TopRow: TopRow(),
		},
	});
	return container;
};
