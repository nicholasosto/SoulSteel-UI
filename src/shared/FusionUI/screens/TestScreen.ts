import Fusion from "@rbxts/fusion";
import { HoldButton } from "../atoms";
const { New, Children } = Fusion;

const HoldButtonTest = HoldButton({
	holdDuration: 2,
	onHoldComplete: () => {
		print("Hold completed!");
	},
	text: "Hold Me",
});
export const TestScreen = () => {
	return New("ScreenGui")({
		Name: "TestScreen",
		Parent: game.GetService("Players").LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		[Children]: {
			HoldButtonTest,
		},
	});
};
