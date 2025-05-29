/// <reference types="@rbxts/types" />

/**
 * @file        CharacterCard.ts
 * @module      CharacterCard
 * @layer       Organism
 * @description Displays the player's avatar, level and health information.
 */

import Fusion from "@rbxts/fusion";
import { AvatarFrame, BaseFrame, Lists } from "shared/FusionUI/atoms";
import { LevelGem } from "shared/FusionUI/molecules";
import { ResourceBar } from "shared/FusionUI/atoms/fillbar";

const { Value, Computed } = Fusion;

/** Composite panel with avatar, level gem and health bar. */
export const CharacterCard = () => {
	const level = Value(1);
	const health = Value(90);
	const maxHealth = Value(100);

	const avatar = AvatarFrame.Clone();

	const elements = [
		avatar,
		LevelGem({ Level: level }),
		ResourceBar({
			Current: health,
			Max: maxHealth,
			LabelText: Computed(() => `HP: ${health.get()}/${maxHealth.get()}`),
			Height: 20,
			Name: "HealthBar",
		}),
	];

	return BaseFrame({
		Name: "CharacterCard",
		Size: UDim2.fromOffset(200, 220),
		Position: new UDim2(0.05, 0, 0.05, 0),
		AnchorPoint: new Vector2(0, 0),
		Children: [Lists.VerticalList(elements)],
	});
};
