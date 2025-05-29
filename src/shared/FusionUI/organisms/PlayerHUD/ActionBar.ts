// stub for ActionBar component
import Fusion from "@rbxts/fusion";
import { New, Children } from "@rbxts/fusion";

export const ActionBar = () => {
	const Container = New("Frame")({
		Name: "ActionBar",
		BackgroundColor3: Color3.fromRGB(50, 50, 50),
		Size: UDim2.fromOffset(600, 100),
		Position: new UDim2(0.5, 0, 1, -150),
		AnchorPoint: new Vector2(0.5, 1),
	});

	return Container;
};
