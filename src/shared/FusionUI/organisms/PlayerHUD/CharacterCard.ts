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

// Resource Container
const ResourceContainer = () => {
	const container = BaseFrame({
		Name: "ResourceContainer",
		Size: UDim2.fromScale(0.8, 1),
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

interface AvatarCardProps {
	ResourceBarContainer?: Fusion.Value<Frame>;
	AvatarCard?: Fusion.Value<Frame>;
}

//#TODO - Fix this
const AvatarCard3 = (props: AvatarCardProps) => {
	const avatarCard = New("Frame")({
		Name: "AvatarCardContainer",
		Size: UDim2.fromScale(1, 1),
		Position: UDim2.fromScale(0, 0),
		BackgroundTransparency: 1,
		[Children]: {
			AvatarCard: New("ImageLabel")({
				Name: "AvatarCard",
				Size: UDim2.fromScale(1, 0.6),
			}),
			ResourceBarContainer: New("Frame")({
				Name: "ResourceBarContainer",
				Size: UDim2.fromScale(1, 0.4),
				Position: UDim2.fromScale(0, 0.6),
				BackgroundTransparency: 1,
				[Children]: {
					ResourceContainer: ResourceContainer(),
				},
			}),
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
			TopContainer: AvatarCard3({}),
		},
	});
	return container;
};
