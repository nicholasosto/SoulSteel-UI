import Fusion from "@rbxts/fusion";
import { ATTR_KEYS } from "shared/data/keys";
import { AttributeControlPanel } from "../organisms";
import { RedFrameContainer } from "shared/FusionUI/atoms";
const { New, Children } = Fusion;

export const TestScreen = () => {
	return New("ScreenGui")({
		Name: "TestScreen",
		Parent: game.GetService("Players").LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Global,
		[Children]: {
			Containers: RedFrameContainer({
				Name: "TestScreenContainer",
				Size: new UDim2(0, 400, 0, 300),
				Children: {
					AttributePanel: AttributeControlPanel({
						attributes: ATTR_KEYS,
					}),
				},
			}),
		},
	});
};
