import Fusion, { Value } from "@rbxts/fusion";
import { ATTR_KEYS } from "shared/data/keys";
import { AttributeControlPanel } from "../organisms";
import { Panel } from "../molecules/Panel";
import { GameLabel, SubPanel } from "../atoms";
import { LayoutTokens } from "../theme";
import { InfoLabel, GemCounter } from "../molecules";
import { PlayerAttributes } from "../states";
const { New, Children } = Fusion;

const TempStates = {
	AttributePoints: Value(20),
	Level: Value(1),
	Experience: Value(0),
	NextLevelExperience: Value(100),
	Health: Value(100),
	Stamina: Value(100),
	SoulPower: Value(50),

	Coins: Value(1000),
	Gems: Value(10),

	DisplayName: Value("Destroyer of Worlds"),
	Title: Value("The Conqueror"),

	Power: Value(0),
};

export const TestScreen = () => {
	return New("ScreenGui")({
		Name: "TestScreen",
		Parent: game.GetService("Players").LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Sibling,
		[Children]: {
			Panel: Panel({
				Name: "TestPanel",
				Size: new UDim2(0.5, 0, 0.5, 0),
				Position: new UDim2(0.25, 0, 0.25, 0),
				AnchorPoint: new Vector2(0.5, 0.5),
				Title: "Test Panel",
				[Children]: {
					//AttributeControls: AttributeControlPanel({ attributes: ATTR_KEYS }),
					SubPanel: SubPanel({
						Size: UDim2.fromOffset(300, 150),
						Position: UDim2.fromScale(0.5, 1),
						AnchorPoint: new Vector2(0, 1),
						ContentChildren: [
							InfoLabel({ Value: TempStates.Health, Text: "Health" }),
							GemCounter({ FusionNumber: TempStates.Level }),
						],
						ContentLayout: LayoutTokens.Vertical(),
					}),
				},
			}),
		},
	});
};

task.spawn(() => {
	while (TempStates.Level.get() < 100) {
		TempStates.Experience.set(TempStates.Experience.get() + 10);
		if (TempStates.Experience.get() >= TempStates.NextLevelExperience.get()) {
			TempStates.Level.set(TempStates.Level.get() + 1);
			TempStates.Experience.set(0);
			TempStates.NextLevelExperience.set(TempStates.NextLevelExperience.get() * 1.2); // Increase next level requirement
		}
		task.wait(1); // Update every second
	}
});
