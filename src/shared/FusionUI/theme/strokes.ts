import Fusion, { New } from "@rbxts/fusion";

/** Standard UI stroke. */
export const StrokeToken = (thickness: number) =>
	Fusion.Computed(() =>
		New("UIStroke")({
			Color: new Color3(1, 1, 1),
			Thickness: thickness,
			ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
			LineJoinMode: Enum.LineJoinMode.Round,
			Transparency: 0.5,
		}),
	);
