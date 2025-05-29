import { New } from "@rbxts/fusion";

/** Predefined layout helpers. */
export const LayoutTokens = {
	Vertical: (padding?: number) =>
		New("UIListLayout")({
			Name: "VerticalLayout",
			SortOrder: Enum.SortOrder.LayoutOrder,
			FillDirection: Enum.FillDirection.Vertical,
			// HorizontalAlignment: Enum.HorizontalAlignment.Center,
			// VerticalAlignment: Enum.VerticalAlignment.Top,
			// VerticalFlex: Enum.UIFlexAlignment.SpaceAround,
			// HorizontalFlex: Enum.UIFlexAlignment.SpaceEvenly,
			Padding: new UDim(0, padding ?? 0),
		}),
	Horizontal: (padding?: number) =>
		New("UIListLayout")({
			Name: "HorizontalLayout",
			SortOrder: Enum.SortOrder.LayoutOrder,
			FillDirection: Enum.FillDirection.Horizontal,
			// VerticalFlex: Enum.UIFlexAlignment.SpaceAround,
			HorizontalFlex: Enum.UIFlexAlignment.SpaceEvenly,
			// HorizontalAlignment: Enum.HorizontalAlignment.Center,
			// VerticalAlignment: Enum.VerticalAlignment.Center,
			Padding: new UDim(0, padding ?? 0),
		}),
	Grid: () =>
		New("UIGridLayout")({
			Name: "GridLayout",
			CellSize: new UDim2(0, 100, 0, 100),
			CellPadding: new UDim2(0, 5, 0, 5),
			FillDirection: Enum.FillDirection.Horizontal,
			HorizontalAlignment: Enum.HorizontalAlignment.Left,
			VerticalAlignment: Enum.VerticalAlignment.Top,
		}),
};
