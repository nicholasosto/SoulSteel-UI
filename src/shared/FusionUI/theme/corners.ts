import Fusion from "@rbxts/fusion";
const { Computed, New } = Fusion;

/** Utility for rounded corners. */
export const CornerToken = (size: number) =>
	Computed(() =>
		New("UICorner")({
			CornerRadius: new UDim(0, size),
		}),
	);
