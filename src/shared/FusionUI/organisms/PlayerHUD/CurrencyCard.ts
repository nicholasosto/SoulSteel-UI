// stub for CurrencyCard component
import Fusion from "@rbxts/fusion";
import { New, Children } from "@rbxts/fusion";

export const CurrencyCard = () => {
	const Container = New("Frame")({
		Name: "CurrencyCard",
		BackgroundColor3: Color3.fromRGB(40, 40, 40),
		Size: UDim2.fromOffset(300, 100),
		Position: new UDim2(0, 0, 1, -150),
		AnchorPoint: new Vector2(0.5, 1),
	});

	return Container;
};
