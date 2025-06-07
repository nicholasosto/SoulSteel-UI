import Fusion from "@rbxts/fusion";
import { ATTR_KEYS } from "shared/data/keys";
import { AttributeControlPanel } from "../organisms";
import { Panel } from "../molecules/Panel";
const { New, Children } = Fusion;

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
					AttributeControls: AttributeControlPanel({
						attributes: ATTR_KEYS,
					}),
				},
			}),
		},
	});
};
