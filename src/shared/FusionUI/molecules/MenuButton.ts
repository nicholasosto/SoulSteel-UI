import Fusion from "@rbxts/fusion";
import { Frames } from "../atoms";
import { GradientTokens } from "../theme";

const { New, Children, Computed, Value, OnEvent } = Fusion;

export interface MenuButtonProps {
	Name: string;
	Icon: string;
	SelectedState: Fusion.Value<boolean>;
	Size?: UDim2;
	LayoutOrder?: number;
}

export const MenuButton = (props: MenuButtonProps) => {
	const isHovered = Value(false);

	const MenuButton = New("ImageButton")({
		Name: props.Name,
		Size: props.Size ?? UDim2.fromOffset(50, 50),
		BackgroundTransparency: 1,
		Image: Frames.MenuButton,
		LayoutOrder: props.LayoutOrder ?? 0,
		[OnEvent("Activated")]: () => {
			print(`MenuButton ${props.Name} activated`);
			props.SelectedState.set(props.SelectedState.get() === false);
		},
		[Children]: {
			Icon: New("ImageLabel")({
				Name: "Icon",
				Size: UDim2.fromScale(0.8, 0.8),
				Position: UDim2.fromScale(0.1, 0.1),
				BackgroundTransparency: 1,
				Image: props.Icon,
				ImageColor3: Color3.fromRGB(255, 255, 255),
			}),
		},
	});

	const MenuButtonFrame = New("Frame")({
		Name: props.Name,
		Size: props.Size ?? UDim2.fromOffset(50, 50),
		Active: true,
		[Children]: {
			Gradient: Computed(() => {
				if (props.SelectedState.get()) {
					GradientTokens.SelectedGradient();
				} else if (isHovered.get()) {
					return GradientTokens.HoverGradient();
				}
				return GradientTokens.DarkGradient();
			}),
			MenuButton: MenuButton,
		},
		[OnEvent("MouseEnter")]: () => {
			print(`MenuButton ${props.Name} hovered`);
			isHovered.set(true);
		},
		[OnEvent("MouseLeave")]: () => {
			isHovered.set(false);
		},
	});

	return MenuButtonFrame;
};
