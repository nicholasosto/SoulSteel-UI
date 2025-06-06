import Fusion from "@rbxts/fusion";
import { RunService } from "@rbxts/services";
import { GradientTokens } from "shared/FusionUI";
import { AspectRatio } from "shared/FusionUI/theme/aspects";

const { New, Children, Value, Computed, OnEvent } = Fusion;

export interface ViewportAtomProps {
	/** Live or templated instance to display. Will be *cloned* into the Viewport. */
	instance: Instance;
	/** 2D size of the ViewportFrame */
	size: UDim2;
	/** Optional extra pixels around the content */
	padding?: number;
	/** Optional rotating turn-table speed (deg / sec). 0 = static. */
	rotation?: number;
	/** Camera distance multiplier (1 = tight fit, >1 = zoomed-out) */
	zoom?: number;
	/** Viewport background colour */
	background?: Color3;
	/** Ambient + LightColour overrides */
	ambient?: Color3;
	light?: Color3;
}

export const ViewportAtom = (props: ViewportAtomProps) => {
	/* ╔═══ Local reactive state ═══╗ */
	const rotationY = Value(0);

	/* Clone the supplied instance once – keep reference for cleanup */
	const modelClone = props.instance.Clone() as Model;

	/* Build Camera */
	const camera = New("Camera")({
		FieldOfView: 45,
	});

	/* World Model */
	const worldModel = New("WorldModel")({
		Name: "WorldModel",
		[Children]: {
			modelClone,
		},
	});

	/* Viewport */
	const viewPort = New("ViewportFrame")({
		Size: props.size,
		BackgroundColor3: props.background ?? Color3.fromRGB(15, 15, 15),
		BackgroundTransparency: 0,
		BorderSizePixel: 0,
		ClipsDescendants: true,
		/* Lighting overrides */
		Ambient: props.ambient ?? Color3.fromRGB(200, 200, 200),
		LightColor: props.light ?? Color3.fromRGB(255, 255, 255),
		/* Inject camera & model */
		CurrentCamera: camera,

		[Children]: {
			Camera: camera,
			WoldModel: worldModel,
		},
	});

	/* Component */
	const component = New("Frame")({
		Name: "ViewportAtom",
		Size: props.size,
		[Children]: {
			Viewport: viewPort,
			Gradient: GradientTokens.SelectedGradient(),
			Aspect: AspectRatio(0.8),
		},
	});

	return component;
};
