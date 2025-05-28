import Fusion, { Computed } from "@rbxts/fusion";

const { New, Value, Children } = Fusion;

export interface LevelGemProps {
	Level: Fusion.Value<number>;
}

export const LevelGem = (props: LevelGemProps): Frame => {
	const level = Value(props.Level);

	return New("Frame")({
		Name: "LevelGem",
		Size: UDim2.fromOffset(50, 50),
		BackgroundColor3: new Color3(0.2, 0.2, 0.2),
		BackgroundTransparency: 0.5,
		[Children]: [
			New("TextLabel")({
				Text: Computed(() => `${level.get()}`),
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				TextColor3: new Color3(1, 1, 1),
				TextScaled: true,
			}),
		],
	});
};
