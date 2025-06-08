import Fusion, { Computed } from "@rbxts/fusion";
import { HydrationTemplates } from "shared/constants";
import { createFusionResource, FusionResource } from "shared/FusionUI/states/Helpers/FusionResource";

const { New, Children, Hydrate } = Fusion;

/* Type */
export type ResourceBarType = Frame & {
	Hydrations: Configuration & {
		FillBar: ObjectValue;
		FillBarGradient: ObjectValue;
		DisplayTextLabel: ObjectValue;
	};
};

/* Template */
export const ResourceBarTemplate = HydrationTemplates.FindFirstChild("ResourceBar") as ResourceBarType;

export function createResourceBar(resource: FusionResource, guiTemplate: ResourceBarType): ResourceBarType {
	// Clone the template
	const clone = guiTemplate.Clone();

	// Get Reference to the Value Objects
	const FillBar = clone.Hydrations.FillBar.Value as Frame;
	const FillBarGradient = clone.Hydrations.FillBarGradient.Value as UIGradient;
	const DisplayTextLabel = clone.Hydrations.DisplayTextLabel.Value as TextLabel;

	// Set up the DisplayLabel
	Hydrate(DisplayTextLabel)({ Text: Computed(() => resource.label.get()) });

	// Set up the FillBar
	Hydrate(FillBar)({ Size: UDim2.fromScale(resource.percent.get(), 1) });

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

	return clone;
}

export const ResourceBars = {
	Health: createResourceBar(createFusionResource(90, 100, new Color3(0.8, 0.1, 0.1)), ResourceBarTemplate),
	Stamina: createResourceBar(createFusionResource(100, 100, new Color3(0.95, 0.65, 0.11)), ResourceBarTemplate),
	SoulPower: createResourceBar(createFusionResource(100, 100, new Color3(0.1, 0.1, 0.8)), ResourceBarTemplate),
};
