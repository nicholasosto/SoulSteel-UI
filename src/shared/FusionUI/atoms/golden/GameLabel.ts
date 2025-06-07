import Fusion from "@rbxts/fusion";

const { New, Children } = Fusion;

export interface GameLabelProps {
	Text: string;
	TextSize?: number;
	Size?: UDim2;
	Color?: Color3;
	Font?: Enum.Font;
	LayoutOrder?: number;
	ZIndex?: number;
	Children?: Fusion.ChildrenValue;
}

const DefaultProps: GameLabelProps = {
	Text: "Game Name",
	TextSize: 16,
	Color: Color3.fromRGB(255, 255, 255),
	Font: Enum.Font.GothamBold,
};

export const GameLabel = (props: GameLabelProps) => {
	return New("TextLabel")({
		Name: "GameLabel",
		Size: props.Size ?? UDim2.fromOffset(200, 50),
		Position: UDim2.fromScale(0.5, 0.5),
		AnchorPoint: new Vector2(0.5, 0.5),
		Text: props.Text ?? DefaultProps.Text,
		TextColor3: props.Color ?? DefaultProps.Color,
		TextSize: props.TextSize ?? DefaultProps.TextSize,
		TextXAlignment: Enum.TextXAlignment.Center,
		TextYAlignment: Enum.TextYAlignment.Center,
		BackgroundTransparency: 1,
		Font: props.Font ?? Enum.Font.GothamBold,
		ZIndex: props.ZIndex ?? 1,
		LayoutOrder: props.LayoutOrder ?? 1,
		[Children]: props.Children ?? {},
	});
};
