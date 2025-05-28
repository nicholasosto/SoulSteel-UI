import Fusion from "@rbxts/fusion";

const { New, OnEvent, Value, Children } = Fusion;

export interface BasicButtonProps {
	Name?: string;
	Image?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	ZIndex?: number;
	Children?: Instance[];
}

export interface BasicButtonResult {
	Instance: ImageButton;
	Hovered: Fusion.Value<boolean>;
	Pressed: Fusion.Value<boolean>;
}

export const BasicButton = (props: BasicButtonProps): BasicButtonResult => {
	const hovered = Value(false);
	const pressed = Value(false);

	const button = New("ImageButton")({
		Name: props.Name ?? "BasicButton",
		Size: props.Size ?? UDim2.fromScale(1, 1),
		Position: props.Position ?? UDim2.fromScale(0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
		BackgroundTransparency: 1,
		Image: props.Image,
		ZIndex: props.ZIndex ?? 1,
		[OnEvent("MouseEnter")]: () => hovered.set(true),
		[OnEvent("MouseLeave")]: () => hovered.set(false),
		[OnEvent("MouseButton1Down")]: () => pressed.set(true),
		[OnEvent("MouseButton1Up")]: () => pressed.set(false),
		[Children]: props.Children,
	});

	return { Instance: button, Hovered: hovered, Pressed: pressed };
};
