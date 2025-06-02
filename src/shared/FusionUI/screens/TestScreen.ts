//#CODEX please Add header and comments

import Fusion from "@rbxts/fusion";
import { HoldButton } from "../atoms";
import { AttributeControls } from "../organisms";
const { New, Children } = Fusion;

const HoldButtonTest = HoldButton({
	holdDuration: 2,
	onHoldComplete: () => {
		print("Hold completed!");
	},
	text: "Hold Me",
});

const multiplyInstance = (instance: Instance, multiplier: number) => {
	const clonedInstances: Instance[] = [];
	for (let i = 0; i < multiplier; i++) {
		const clone = instance.Clone();
		clone.Parent = instance.Parent; // Ensure the clone is parented correctly
		clone.Name = `${instance.Name}_${i + 1}`; // Rename the clone to avoid name conflicts
		clonedInstances.push(clone);
	}
	return clonedInstances;
};

const testFrame = New("Frame")({
	Name: "TestFrame",
	Size: new UDim2(0, 30, 0, 30),
	BackgroundColor3: Color3.fromRGB(255, 0, 0),
	BackgroundTransparency: 0.5,
});

const clonedFrames = multiplyInstance(testFrame, 10);

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
			FrameContainer: AttributeControls(),
		},
	});
};
