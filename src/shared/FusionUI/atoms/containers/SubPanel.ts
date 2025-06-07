import Fusion from "@rbxts/fusion";

const { New, Children } = Fusion;

interface SubPanelProps {
	ContentChildren: Fusion.ChildrenValue;
	ContentLayout: UIListLayout | UIGridLayout; // Layout for children, e.g., UIListLayout, UIGridLayout
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	ZIndex?: number;
}

export const SubPanel = (props: SubPanelProps) => {
	return New("Frame")({
		Name: props.Name ?? "SubPanel",
		Size: props.Size ?? new UDim2(0, 300, 0, 300),
		Position: props.Position ?? new UDim2(0.5, -150, 0.5, -150),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
		ZIndex: props.ZIndex ?? 1,
		BackgroundTransparency: 1,
		[Children]: {
			ContentLayout: props.ContentLayout,
			ContentChildren: props.ContentChildren,
		},
	});
};
