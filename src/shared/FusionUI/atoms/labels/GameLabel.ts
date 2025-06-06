import Fusion from "@rbxts/fusion";

const { New, Children } = Fusion;

export interface GameLabelProps {
	text: string;
	textSize?: number;
	size?: UDim2;
	color?: Color3;
	font?: Enum.Font;
}

const DefaultProps: GameLabelProps = {
	text: "Game Name",
	textSize: 16,
	color: Color3.fromRGB(255, 255, 255),
	font: Enum.Font.GothamBold,
};

export const GameLabel = (props: GameLabelProps) => {
	return New("TextLabel")({
		Name: "GameLabel",
		Size: props.size ?? UDim2.fromScale(1, 1),
		Position: UDim2.fromScale(0.5, 0.5),
		AnchorPoint: new Vector2(0.5, 0.5),
		Text: props.text ?? DefaultProps.text,
		TextColor3: props.color ?? DefaultProps.color,
		TextSize: props.textSize ?? DefaultProps.textSize,
		TextXAlignment: Enum.TextXAlignment.Center,
		TextYAlignment: Enum.TextYAlignment.Center,
		BackgroundTransparency: 1,
		Font: props.font ?? Enum.Font.GothamBold,
		ZIndex: 2,
	});
};
