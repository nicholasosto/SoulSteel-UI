import Fusion from "@rbxts/fusion";

export const PaddingToken = (padding: number) => {
	return Fusion.Computed(() =>
		Fusion.New("UIPadding")({
			PaddingLeft: new UDim(0, padding),
			PaddingRight: new UDim(0, padding),
			PaddingTop: new UDim(0, padding),
			PaddingBottom: new UDim(0, padding),
		}),
	);
};
