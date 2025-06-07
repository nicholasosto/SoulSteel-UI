import Fusion, { Computed } from "@rbxts/fusion";
import { ValueLabel } from "../atoms";

const { New, Value, Children } = Fusion;

export interface LevelGemProps {
	Level: Fusion.Value<number>;
}

export const LevelGem = (props: LevelGemProps) => {
	return New("ImageLabel")({
		Name: "LevelGem",
		Size: new UDim2(0, 50, 0, 50),
		BackgroundTransparency: 1,
		Image: "rbxassetid://119000054151103", // Replace with actual gem image asset ID
		ImageColor3: Computed(() => {
			const level = props.Level.get();
			if (level < 10) {
				return Color3.fromRGB(255, 0, 0); // Red for levels below 10
			} else if (level < 20) {
				return Color3.fromRGB(255, 165, 0); // Orange for levels 10-19
			} else if (level < 30) {
				return Color3.fromRGB(255, 255, 0); // Yellow for levels 20-29
			} else {
				return Color3.fromRGB(0, 255, 0); // Green for levels 30 and above
			}
		}),
		[Children]: {
			LevelLabel: ValueLabel({
				Value: props.Level,
				Size: new UDim2(1, 0, 1, 0),
			}),
		},
	});
};
