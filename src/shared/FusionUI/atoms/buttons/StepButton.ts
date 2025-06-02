import { New, OnEvent } from "@rbxts/fusion";
import { ControlButtonIcon } from "shared/assets/images/buttons";

interface StepButtonProps {
	direction: "up" | "down";
	onClick: () => void;
	disabled?: boolean;
}

export const StepButton = (p: StepButtonProps) =>
	New("ImageButton")({
		Size: UDim2.fromOffset(20, 20),
		BackgroundTransparency: 1,
		Image: p.direction === "up" ? ControlButtonIcon["Increase"] : ControlButtonIcon["Decrease"],
		ImageColor3: p.disabled ? Color3.fromRGB(80, 80, 80) : Color3.fromRGB(255, 56, 42),
		AutoButtonColor: false,
		[OnEvent("Activated")]: () => {
			if (!p.disabled) p.onClick();
		},
	});
