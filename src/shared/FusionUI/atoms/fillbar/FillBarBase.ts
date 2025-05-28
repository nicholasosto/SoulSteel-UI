import Fusion from "@rbxts/fusion";

const { New, Children, Computed } = Fusion;

export interface FillBarBaseProps {
	Current: Fusion.Value<number>;
	Max: Fusion.Value<number>;
	LabelText?: Fusion.Computed<string>;
	Name?: string;
	Height?: number;
}

export function FillBarBase(props: FillBarBaseProps) {
	const { Current, Max, LabelText } = props;

	const instance = New("Frame")({
		Name: props.Name ?? "FillBarBase",
		Size: new UDim2(1, 0, 0, props.Height ?? 25),
		BackgroundColor3: new Color3(0.2, 0.2, 0.2),
		BorderSizePixel: 0,
		[Children]: [
			New("Frame")({
				Name: "Fill",
				Size: Computed(() => new UDim2(Current.get() / Max.get(), 0, 1, 0)),
				BackgroundColor3: new Color3(0.4, 0.8, 0.4),
				BorderSizePixel: 0,
			}),
			LabelText
				? New("TextLabel")({
						Text: LabelText,
						Size: UDim2.fromScale(1, 1),
						TextColor3: new Color3(1, 1, 1),
						TextScaled: true,
						TextXAlignment: Enum.TextXAlignment.Center,
						TextYAlignment: Enum.TextYAlignment.Center,
						BackgroundTransparency: 1,
					})
				: undefined,
		],
	});

	return instance;
}

export const DemoFillBar = () =>
	FillBarBase({
		Current: Fusion.Value(50),
		Max: Fusion.Value(100),
		LabelText: Computed(() => `Health: ${50}/100`),
		Name: "DemoFillBar",
		Height: 30,
	});
