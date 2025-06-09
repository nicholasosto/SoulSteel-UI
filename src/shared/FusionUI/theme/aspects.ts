import Fusion from "@rbxts/fusion";
const { Computed, New } = Fusion;

/** Utility for Aspect Ratios. */
export const AspectRatio = (ratio: number) => {
	return Computed(() =>
		New("UIAspectRatioConstraint")({
			AspectRatio: ratio,
			DominantAxis: Enum.DominantAxis.Height,
		}),
	);
};
