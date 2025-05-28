import Fusion from "@rbxts/fusion";

const { New, Value, Children } = Fusion;

export interface BasicListProps {
	Items: Instance[];
	ListLayout: UIListLayout | UIGridLayout | UIListLayout;
	ScrollingEnabled?: boolean;
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	ZIndex?: number;
}

const BasicList = (props: BasicListProps): Frame | ScrollingFrame => {
	const items = Value(props.Items);
	const listLayout = props.ListLayout;

	let listFrame: Frame | ScrollingFrame;
	if (props.ScrollingEnabled) {
		listFrame = New("ScrollingFrame")({
			Name: props.Name ?? "BasicList",
			Size: props.Size ?? UDim2.fromScale(1, 1),
			Position: props.Position ?? UDim2.fromScale(0, 0),
			AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
			ZIndex: props.ZIndex ?? 1,
			BackgroundTransparency: 1,
			ScrollingEnabled: true,
			[Children]: [listLayout, items],
		});
	} else {
		listFrame = New("Frame")({
			Name: props.Name ?? "BasicList",
			Size: props.Size ?? UDim2.fromScale(1, 1),
			Position: props.Position ?? UDim2.fromScale(0, 0),
			AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
			ZIndex: props.ZIndex ?? 1,
			BackgroundTransparency: 1,
			[Children]: [listLayout, items],
		});
	}

	return listFrame;
};

/* Helper Children for Vertical and Horizontal Centered Lists */
const VerticalCentered = () =>
	New("UIListLayout")({
		FillDirection: Enum.FillDirection.Vertical,
		SortOrder: Enum.SortOrder.LayoutOrder,
		Padding: new UDim(0, 5), // Adjust padding as needed
	});
const HorizontalCentered = () =>
	New("UIListLayout")({
		FillDirection: Enum.FillDirection.Horizontal,
		SortOrder: Enum.SortOrder.LayoutOrder,
		Padding: new UDim(0, 5), // Adjust padding as needed
	});

/* List Magazine Pattern */
export const Lists = {
	VerticalList: (items: Instance[]) =>
		BasicList({
			Items: items,
			ListLayout: VerticalCentered(),
			ScrollingEnabled: false,
			Name: "VerticalList",
			Size: new UDim2(1, 0, 1, 0),
			AnchorPoint: new Vector2(0.5, 0.5),
			Position: new UDim2(0.5, 0, 0.5, 0),
			ZIndex: 1,
		}),
	HorizontalList: (items: Instance[]) =>
		BasicList({
			Items: items,
			ListLayout: HorizontalCentered(),
			ScrollingEnabled: false,
			Name: "HorizontalList",
			Size: new UDim2(1, 0, 1, 0),
			AnchorPoint: new Vector2(0.5, 0.5),
			Position: new UDim2(0.5, 0, 0.5, 0),
			ZIndex: 1,
		}),
};
