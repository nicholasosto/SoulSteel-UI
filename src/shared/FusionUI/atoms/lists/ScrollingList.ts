//#CODEX: Codex please Add header and comments
import Fusion from "@rbxts/fusion";

const { New, Children } = Fusion;
export interface ScrollContainerProps {
	Type: "Vertical" | "Horizontal" | "Grid";
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	Children?: { [key: string]: Instance | Array<Instance> } | Instance | Array<Instance>;
}

export const ScrollContainer = (props: ScrollContainerProps) => {
	const layout = Fusion.Computed(() => {
		switch (props.Type) {
			case "Vertical":
				return New("UIListLayout")({
					SortOrder: Enum.SortOrder.LayoutOrder,
					FillDirection: Enum.FillDirection.Vertical,
					Padding: new UDim(0, 5), // Adjust padding as needed
				});
			case "Horizontal":
				return New("UIListLayout")({
					SortOrder: Enum.SortOrder.LayoutOrder,
					FillDirection: Enum.FillDirection.Horizontal,
					Padding: new UDim(0, 5), // Adjust padding as needed
				});
			case "Grid":
				return New("UIGridLayout")({
					SortOrder: Enum.SortOrder.LayoutOrder,
					CellSize: new UDim2(0, 100, 0, 100), // Adjust cell size as needed
					CellPadding: new UDim2(0, 5, 0, 5), // Adjust cell padding as needed
					FillDirection: Enum.FillDirection.Horizontal,
					HorizontalAlignment: Enum.HorizontalAlignment.Center,
					VerticalAlignment: Enum.VerticalAlignment.Center,
				});
			default:
				return New("UIListLayout")({
					SortOrder: Enum.SortOrder.LayoutOrder,
					FillDirection: Enum.FillDirection.Vertical,
					Padding: new UDim(0, 5), // Default padding
				});
		}
	});

	return New("ScrollingFrame")({
		Size: props.Size ?? new UDim2(1, 0, 1, 0),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		ScrollBarThickness: 1,
		ScrollBarImageColor3: Color3.fromRGB(255, 255, 255),
		[Children]: {
			PropsChidren: props.Children,
			Layout: layout,
		},
	});
};
