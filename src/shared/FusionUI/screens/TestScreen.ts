//#CODEX please Add header and comments

import Fusion from "@rbxts/fusion";
import { ATTR_KEYS, AttributeKey } from "shared/keys";
import { HoldButton } from "../atoms";
import { AttributeControl } from "../organisms";
import { LayoutTokens } from "../theme";
import { PlayerAttributes } from "../states";
const { New, Children } = Fusion;

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

const attributeControls: Instance[] = [];

ATTR_KEYS.forEach((key) => {
	const attribute = PlayerAttributes[key];
	if (attribute) {
		const attributeControl = AttributeControl({
			gameKey: key,
			state: attribute,
			readOnly: false, // Set to true if you want to disable editing
		});
		attributeControls.push(attributeControl);
	}
});

export const TestScreen = () => {
	const stepperTestStateValue = PlayerAttributes.str || Fusion.Value(0);
	return New("ScreenGui")({
		Name: "TestScreen",
		Parent: game.GetService("Players").LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		ResetOnSpawn: false,
		IgnoreGuiInset: false,
		AutoLocalize: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Global,
		[Children]: {
			ButtonTests: New("Frame")({
				Name: "ButtonTests",
				Size: UDim2.fromOffset(800, 600),
				Position: new UDim2(0.5, 0, 0.5, 0),
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(50, 50, 50),
				BackgroundTransparency: 0.5,
				[Children]: {
					Layout: LayoutTokens.Vertical(),
					HoldButton: HoldButton({
						holdDuration: 2,
						onHoldComplete: () => {
							print("Hold completed!");
						},
						text: "Hold Me",
					}),
					AttributeControls: attributeControls,
				},
			}),
		},
	});
};
