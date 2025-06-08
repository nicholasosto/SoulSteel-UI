import { Value } from "@rbxts/fusion";
import { LevelBar } from "../atoms";

const TextSizes = {
	Tiny: 10,
	Small: 14,
	Medium: 18,
	Large: 24,
	XLarge: 32,
};

export const SizeTokens = {
	Text: TextSizes,
};

export const CharacterCardSizes = {
	ComponentWidth: 350,
	ComponentHeight: 200,
	TopRowHeight: 100,
	LevelBarHeight: 45,
	MenuBarHeight: 50,
	CategortyButtonSize: 45,
};

export const StateSize = {
	ResourceBarFrame: Value(UDim2.fromOffset(200, 25)),
};
