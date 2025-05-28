import Fusion, { Children, New } from "@rbxts/fusion";
import { CornerToken, GradientTokens } from "shared/FusionUI/theme";

const { Value } = Fusion;
const DefaultWidth = 200;
const DefaultHeight = 200;

const Defaults = {
	AnchorPoint: new Vector2(0.5, 0.5),
	Position: UDim2.fromScale(0.5, 0.5),
	Size: UDim2.fromOffset(DefaultWidth, DefaultHeight),
	BackgroundColor3: new Color3(0.2, 0.2, 0.2),
	BackgroundTransparency: 0.5,
	BorderSizePixel: 2,
};

export interface BaseFrameProps {
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	BackgroundColor3?: Color3;
	BackgroundTransparency?: number;
	Children?: Instance[] | Instance;
}

/** Simple frame with corner and gradient tokens. */
export const BaseFrame = (props: BaseFrameProps) =>
	New("Frame")({
		Name: props.Name ?? "BaseFrame",
		Size: props.Size ?? Defaults.Size,
		Position: props.Position ?? Defaults.Position,
		AnchorPoint: props.AnchorPoint ?? Defaults.AnchorPoint,
		BackgroundColor3: props.BackgroundColor3 ?? Defaults.BackgroundColor3,
		BackgroundTransparency: props.BackgroundTransparency ?? Defaults.BackgroundTransparency,
		[Children]: {
			Corner: CornerToken(4),
			Gradient: GradientTokens.DarkGradient(),
			Content: props.Children,
		},
	});
