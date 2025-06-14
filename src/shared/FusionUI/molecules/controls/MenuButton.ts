import Fusion from "@rbxts/fusion";
import { GradientTokens } from "../../theme";

const { New, Children, Computed, Value, OnEvent } = Fusion;

export interface MenuButtonProps {
	Name: string;
	Icon: string;
	Size?: UDim2;
	LayoutOrder?: number;
	OnClick?: () => void;
	SelectedState?: Fusion.Value<boolean>;
}

export const MenuButton = (props: MenuButtonProps) => {
	const isHovered = Value(false);
	const isSelected = props.SelectedState ?? Value(false);

	const MenuButton = New("ImageButton")({
		Name: props.Name,
		Size: props.Size ?? UDim2.fromOffset(50, 50),
		BackgroundTransparency: 1,
		Image: "rbxassetid://79163709624038", // Menubuttonwith hole for gradient
		LayoutOrder: props.LayoutOrder ?? 0,
		[OnEvent("Activated")]: () => {
			print(`MenuButton ${props.Name} activated`);
			isSelected.set(isSelected.get() === false);
			if (props.OnClick) {
				props.OnClick();
			}
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
				if (isSelected.get()) {
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
