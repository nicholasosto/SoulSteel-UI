import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import * as Molecules from "shared/FusionUI/molecules";

const { New, Value, Children } = Fusion;

export interface CharacterCardProps {
	Name: Fusion.Value<string>;
	Level: Fusion.Value<number>;
}

export const CharacterCard = (props: CharacterCardProps): Frame => {
	return New("Frame")({
		Name: "CharacterCard",
		Size: UDim2.fromOffset(200, 100),
		BackgroundColor3: new Color3(0.2, 0.2, 0.2),
		BackgroundTransparency: 0.5,
		[Children]: [
			Molecules.LevelGem({
				Level: props.Level,
			}),
			New("TextLabel")({
				Text: props.Name,
				Size: UDim2.fromScale(1, 0.5),
				BackgroundTransparency: 1,
				TextColor3: new Color3(1, 1, 1),
				TextScaled: true,
			}),
			New("TextLabel")({
				Text: `Level: ${props.Level}`,
				Size: UDim2.fromScale(1, 0.5),
				Position: new UDim2(0, 0, 0.5, 0),
				BackgroundTransparency: 1,
				TextColor3: new Color3(1, 1, 1),
				TextScaled: true,
			}),
		],
	});
};
