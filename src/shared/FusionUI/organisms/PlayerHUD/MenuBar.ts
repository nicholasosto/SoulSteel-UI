/** Stub for Codex (MenuBar component) */

import Fusion from "@rbxts/fusion";

// TEMPORARY: This is a stub for the MenuBar component.
export const MenuBar = () => {
	return Fusion.New("Frame")({
		Name: "MenuBar",
		BackgroundColor3: Color3.fromRGB(30, 30, 30),
		Size: new UDim2(1, 0, 0, 50),
		Position: new UDim2(0, 0, 1, -50),
		AnchorPoint: new Vector2(0.5, 1),
	});
};
