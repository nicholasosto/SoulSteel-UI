import Fusion, { New } from "@rbxts/fusion";

/** Standard UI stroke. */
export const StrokeToken = (thickness?: number) =>
	Fusion.Computed(() =>
		New("UIStroke")({
			Color: new Color3(0.07, 0.07, 0.07),
			Thickness: thickness ?? 1,
			ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
			LineJoinMode: Enum.LineJoinMode.Round,
			Transparency: 0.2,
		}),
	);

export const HighlightStrokeToken = (thickness?: number) =>
	Fusion.Computed(() =>
		New("UIStroke")({
			Color: new Color3(1, 0.8, 0),
			Thickness: thickness ?? 2,
			ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
			LineJoinMode: Enum.LineJoinMode.Round,
			Transparency: 0.5,
		}),
	);
