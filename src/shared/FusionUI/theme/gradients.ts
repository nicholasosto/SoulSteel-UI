import { New } from "@rbxts/fusion";
import { AttributeControl } from "../organisms";

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
				new ColorSequenceKeypoint(1, new Color3(0.93, 0.02, 0.02)),
			]),
			Rotation: 90,
			Transparency: new NumberSequence([new NumberSequenceKeypoint(0, 0), new NumberSequenceKeypoint(1, 0)]),
			Enabled: true,
		}),

	HoverGradient: () =>
		New("UIGradient")({
			Color: new ColorSequence([
				new ColorSequenceKeypoint(0, new Color3(0.59, 0.9, 0.19)),
				new ColorSequenceKeypoint(1, new Color3(0.52, 0.97, 0.26)),
			]),
			Rotation: 90,
			Transparency: new NumberSequence([new NumberSequenceKeypoint(0, 0), new NumberSequenceKeypoint(1, 0)]),
			Enabled: true,
		}),

	AttributeControl: () => {
		return New("UIGradient")({
			Color: new ColorSequence(Color3.fromRGB(41, 8, 8), Color3.fromRGB(0, 0, 0)),
			Transparency: new NumberSequence(0.1, 0.2),
			Rotation: 90,
		});
	},
};
