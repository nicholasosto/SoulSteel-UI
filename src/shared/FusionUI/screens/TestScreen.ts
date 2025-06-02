import Fusion from "@rbxts/fusion";
import { HoldButton } from "../atoms";
import { FrameContainer } from "../atoms/containers/FrameContainer";
import { LayoutTokens } from "../theme";
import { MenuButton } from "../molecules/MenuButton";
import { MenuButtonIcon } from "shared/assets/images/buttons";
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
		ZIndexBehavior: Enum.ZIndexBehavior.Global,
		[Children]: {
			HoldButtonTest,
			FrameContainer: FrameContainer({
				Size: new UDim2(0.5, 0, 0.5, 0),
				Position: new UDim2(0.25, 0, 0.25, 0),
				Children: {
					Layout: LayoutTokens.Vertical(),
					MenuButton: MenuButton({
						Name: "TestMenuButton",
						Icon: MenuButtonIcon["Character"],
					}),
				},
			}),
		},
	});
};
