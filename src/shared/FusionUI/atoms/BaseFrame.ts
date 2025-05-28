import Fusion, { Children, New } from "@rbxts/fusion";
import { CornerToken, GradientTokens } from "shared/FusionUI/theme";

const { Value } = Fusion;

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
		Size: props.Size ?? UDim2.fromScale(1, 1),
		Position: props.Position ?? UDim2.fromScale(0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
		BackgroundColor3: props.BackgroundColor3 ?? new Color3(0.1, 0.1, 0.1),
		BackgroundTransparency: props.BackgroundTransparency ?? 0,
		[Children]: {
			Corner: CornerToken(4),
			Gradient: GradientTokens.DarkGradient(),
			Content: props.Children,
		},
	});
