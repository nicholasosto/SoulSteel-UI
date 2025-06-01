import Fusion from "@rbxts/fusion";

const { New, Children, Computed, Value, OnEvent } = Fusion;

// CONSTANTS
const ContainerSize = new UDim2(1, 0, 0, 40);
const BarSize = new UDim2(1, -40, 0, 34);
const LevelGemSize = new UDim2(0, 38, 0, 38);

export interface LevelBarProps {
	Level: Fusion.Value<number>;
	Experience: Fusion.Value<number>;
	MaxExperience: Fusion.Value<number>;
}

export const LevelBar = (props: LevelBarProps) => {
	const { Level, Experience, MaxExperience } = props;

	const levelText = Computed(() => `Level: ${Level.get()}`);
	const experiencePercent = Computed(() => Experience.get() / MaxExperience.get());

	return New("Frame")({
		Name: "LevelBar",
		Size: ContainerSize,
		BackgroundTransparency: 1,
		[Children]: {
			// Level Gem Container
			LevelGem: New("Frame")({
				Name: "LevelGemContainer",
				Size: LevelGemSize,
				BackgroundColor3: new Color3(0.1, 0.1, 0.1),
				BackgroundTransparency: 0.5,
			}),

			// Experience Bar
			ExperienceBar: New("Frame")({
				Name: "ExperienceBar",
				Size: BarSize,
				[Children]: {
					Fill: New("Frame")({
						Name: "Fill",
						Size: Computed(() => new UDim2(experiencePercent.get(), 0, 1, 0)),
						BackgroundColor3: new Color3(0.1, 0.8, 0.1),
					}),
				},
			}),
		},
	});
};
