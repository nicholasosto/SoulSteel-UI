import Fusion from "@rbxts/fusion";

const { New, Children } = Fusion;

interface ContentContainerProps {
	ContentChildren: Fusion.ChildrenValue;
	ContentLayout: UIListLayout | UIGridLayout; // Layout for children, e.g., UIListLayout, UIGridLayout
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	ZIndex?: number;
}

export const ContentContainer = (props: ContentContainerProps) => {
	return New("Frame")({
		Name: props.Name ?? "ContentContainer",
		Size: props.Size ?? new UDim2(1, 0, 1, 0),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		ZIndex: props.ZIndex ?? 1,
		BackgroundTransparency: 1,
		[Children]: {
			ContentLayout: props.ContentLayout,
			ContentChildren: props.ContentChildren,
		},
	});
};

// interface DecorationContainerProps extends ContentContainerProps {
// 	DecorationChildren: Fusion.ChildrenValue; // Additional children for decoration
// }

// export const DecorationContainer = (props: ContentContainerProps) => {
// 	return New("Frame")({
// 		Name: props.Name ?? "DecorationContainer",
// 		Size: props.Size ?? new UDim2(1, 0, 1, 0),
// 		Position: props.Position ?? new UDim2(0, 0, 0, 0),
// 		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
// 		ZIndex: props.ZIndex ?? 1,
// 		BackgroundTransparency: 1,
// 		[Children]: {
// 			ContentLayout: props.ContentLayout,
// 			ContentChildren: props.ContentChildren,
// 			DecorationChildren: props.DecorationChildren,
// 		},
// 	});
// }
// Usage example:
// const MyContentContainer = ContentContainer({
//   ContentChildren: {
//     New("TextLabel")({
//       Text: "Hello, World!",
//       Size: new UDim2(1, 0, 0, 50),
//       BackgroundTransparency: 1,
//     }),
//   },
//   ContentLayout: New("UIListLayout")({
//     FillDirection: Enum.FillDirection.Vertical,
//     SortOrder: Enum.SortOrder.LayoutOrder,
//     Padding: new UDim(0, 10),
//   }),
//   Name: "MyContainer",
//   Size: new UDim2(0.5, 0, 0.5, 0),
//   Position: new UDim2(0.25, 0, 0.25, 0),
//   AnchorPoint: new Vector2(0.5, 0.5),
//   ZIndex: 2,
// });
// const MyDecorationContainer = DecorationContainer({
//   ContentChildren: {
//     New("TextLabel")({
//       Text: "Decorated Content",
//       Size: new UDim2(1, 0, 0, 50),
//       BackgroundTransparency: 1,
//     }),
//   },
//   DecorationChildren: {
