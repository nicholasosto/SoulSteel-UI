/* PlayerHUD.ts
 * This file defines the PlayerHUD component, which is responsible for displaying the player's health and other HUD elements.
 */
import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { BaseFrame, BaseFrameProps, CharacterCard } from "shared/FusionUI";
const { New, Children, Value } = Fusion;

/**
 * Character Card
 * This component displays the player's health, soul power, stamina, level progress
 */

export const PlayerHUD = () =>
	(New("ScreenGui")({
		Name: "PlayerHUD",
		DisplayOrder: 1,
		ResetOnSpawn: false,
		[Children]: [
			BaseFrame({
				Name: "CharacterCard",
				Size: UDim2.fromScale(0.3, 0.1),
				Position: UDim2.fromScale(0.5, 0.9),
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: new Color3(0.1, 0.1, 0.1),
				BackgroundTransparency: 0.5,
				BorderSizePixel: 2,
				[Children]: [
					// Add your HUD elements here
					// For example, health bar, stamina bar, etc.
				],
			} as BaseFrameProps),
		],
	}).Parent = Players.LocalPlayer.WaitForChild("PlayerGui"));
