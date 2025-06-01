import { New } from "@rbxts/fusion";

/** Reusable gradient presets. */
export const GradientTokens = {
	DarkGradient: () =>
		New("UIGradient")({
			Color: new ColorSequence([
				new ColorSequenceKeypoint(0, new Color3(0.01, 0.01, 0.01)),
				new ColorSequenceKeypoint(1, new Color3(0.13, 0.13, 0.13)),
			]),
			Rotation: 90,
			Transparency: new NumberSequence([new NumberSequenceKeypoint(0, 0), new NumberSequenceKeypoint(1, 0)]),
			Enabled: true,
		}),

	SelectedGradient: () =>
		New("UIGradient")({
			Color: new ColorSequence([
				new ColorSequenceKeypoint(0, new Color3(0.78, 0.13, 0.13)),
				new ColorSequenceKeypoint(1, new Color3(0.27, 0.04, 0.04)),
			]),
			Rotation: 90,
			Transparency: new NumberSequence([new NumberSequenceKeypoint(0, 0), new NumberSequenceKeypoint(1, 0)]),
			Enabled: true,
		}),

	HoverGradient: () =>
		New("UIGradient")({
			Color: new ColorSequence([
				new ColorSequenceKeypoint(0, new Color3(0.59, 0.9, 0.19)),
				new ColorSequenceKeypoint(1, new Color3(0.1, 0.19, 0.05)),
			]),
			Rotation: 90,
			Transparency: new NumberSequence([new NumberSequenceKeypoint(0, 0), new NumberSequenceKeypoint(1, 0)]),
			Enabled: true,
		}),
};
