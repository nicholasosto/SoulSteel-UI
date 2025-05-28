import { Children, Computed, New, Value } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { BaseFrame, BaseFrameProps, Panel, Lists } from "shared/FusionUI";
import { DemoFillBar, FillBarBase, FillBarBaseProps } from "shared/FusionUI/atoms/fillbar/FillBarBase";

const fillbarProps: FillBarBaseProps = {
	Current: Value(50),
	Max: Value(100),
	LabelText: Computed(() => `Health: ${50}/100`),
	Name: "HealthBar",
	Height: 25,
};
const fillBarDummy1 = FillBarBase(fillbarProps);

export const TestScreen = () => {
	return New("ScreenGui")({
		Name: "TestScreen",
		DisplayOrder: 1000,
		ResetOnSpawn: false,
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui,
		[Children]: {
			MainContainer: Panel({
				Size: UDim2.fromOffset(600, 400),
				Position: UDim2.fromScale(0.5, 0.5),
				AnchorPoint: new Vector2(0.5, 0.5),
				[Children]: [
					Lists.HorizontalList([
						BaseFrame({
							Name: "ButtonContainer",
							Position: UDim2.fromOffset(-300, 0),
							Children: [DemoFillBar()],
						}),
						BaseFrame({
							Name: "FillBarContainer",
							Position: UDim2.fromOffset(0, 0),
							Children: Lists.VerticalList([fillBarDummy1, DemoFillBar(), DemoFillBar()]),
						}),
						BaseFrame({
							Position: UDim2.fromOffset(304, 0),
							Children: [],
						}),
					]),
				],
			}),
		},
	});
};
