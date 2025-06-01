/// <reference types="@rbxts/types" />

/**
 * @file        CurrencyCard.ts
 * @module      CurrencyCard
 * @layer       Organism
 * @description Displays the player's currencies.
 */

import Fusion from "@rbxts/fusion";
import { BaseFrame, IconAssets } from "../../atoms";
import { PlayerCurrencyState } from "shared/FusionUI/states";

const { New, Children, Value, Computed } = Fusion;

/** Small panel showing coins and gems. */
export const CurrencyCard = () => {
	const coins = PlayerCurrencyState.Coins;
	const gems = PlayerCurrencyState.Gems;

	return BaseFrame({
		Name: "CurrencyCard",
		Size: UDim2.fromOffset(150, 60),
		Position: new UDim2(0.05, 0, 0.95, 0),
		AnchorPoint: new Vector2(0, 1),
		Children: {
			CoinIcon: New("ImageLabel")({
				Image: IconAssets.Currency.SoulCoin,
				Size: UDim2.fromOffset(24, 24),
				BackgroundTransparency: 1,
			}),
			CoinLabel: New("TextLabel")({
				Text: Computed(() => `${coins.get()}`),
				Position: new UDim2(0, 30, 0, 0),
				Size: UDim2.fromOffset(40, 24),
				BackgroundTransparency: 1,
				TextColor3: Color3.fromRGB(255, 230, 0),
			}),
			GemIcon: New("ImageLabel")({
				Image: IconAssets.Currency.SoulGem,
				Size: UDim2.fromOffset(24, 24),
				Position: new UDim2(0, 0, 0, 30),
				BackgroundTransparency: 1,
			}),
			GemLabel: New("TextLabel")({
				Text: Computed(() => `${gems.get()}`),
				Position: new UDim2(0, 30, 0, 30),
				Size: UDim2.fromOffset(40, 24),
				BackgroundTransparency: 1,
				TextColor3: Color3.fromRGB(120, 200, 255),
			}),
		},
	});
};
