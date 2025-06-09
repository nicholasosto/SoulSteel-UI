import Fusion, { Computed } from "@rbxts/fusion";
import { FusionResource } from "shared/FusionUI/states/Helpers/FusionResource";

const { New, Children, Hydrate } = Fusion;

/* Type */
export type ResourceBarType = Frame & {
	Hydrations: Configuration & {
		FillBar: ObjectValue;
		FillBarGradient: ObjectValue;
		DisplayTextLabel: ObjectValue;
	};
};

export function HydrateResourceBar(resource: FusionResource, resourceBar: ResourceBarType) {
	// Get Reference to the Value Objects
	const FillBar = resourceBar.Hydrations.FillBar.Value as Frame;
	const FillBarGradient = resourceBar.Hydrations.FillBarGradient.Value as UIGradient;
	const DisplayTextLabel = resourceBar.Hydrations.DisplayTextLabel.Value as TextLabel;

	// Set up the DisplayLabel
	Hydrate(DisplayTextLabel)({ Text: Computed(() => resource.label.get()) });

	// Set up the FillBar
	Hydrate(FillBar)({
		Size: Computed(() => {
			const percent = resource.percent.get();
			return new UDim2(percent, 0, 1, 0);
		}),
	});

	// Set up the FillBarGradient
	Hydrate(FillBarGradient)({
		Color: Computed(() => {
			const gradient = New("UIGradient")({
				Color: new ColorSequence(resource.color.get(), resource.color.get()),
				Rotation: 90,
				Transparency: new NumberSequence(0, 0.5),
			});
			return gradient.Color;
		}),
	});
}
