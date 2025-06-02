/**
 * @file        ContainerBase.ts
 * @module      ContainerBase
 * @layer       Atoms
 * @description Base container component for Fusion UI, providing a standard layout and styling.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion, { OnEvent } from "@rbxts/fusion";
import { CornerToken } from "shared/FusionUI/theme";
import { ControlButtonIcon } from "shared/assets/images/buttons";
import { TextureImage } from "shared/assets/images/textures";
const { New, Value, Children } = Fusion;

interface ContainerBaseProps {
	Children?: Record<string, Instance>;
	BackgroundImage?: string;
	Layout?: UIListLayout; // Layout for children, e.g., UIListLayout, UIGridLayout
	TitleText?: string;
	VisableState?: Fusion.Value<boolean>; // Optional state to control visibility
	// Optional properties for the container
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	ZIndex?: number;
	ClipsDescendants?: boolean;
}

export const ContainerBase = (props: ContainerBaseProps) => {
	// Reactive States
	const isVisible = props.VisableState ?? Value(true);

	// TitleBar is only created if TitleText is provided
	const TitleBar = props.TitleText
		? New("Frame")({
				Name: "TitleBar",
				Size: new UDim2(1, 0, 0, 50),
				BackgroundColor3: new Color3(0.2, 0.2, 0.2),
				BackgroundTransparency: 0.2,
				[Children]: {
					Corner: CornerToken(4), // Apply corner radius
					TitleText: New("TextLabel")({
						Name: "TitleText",
						Size: new UDim2(1, 0, 1, 0),
						BackgroundTransparency: 1,
						Text: props.TitleText ?? "Default Title",
						TextColor3: new Color3(1, 1, 1),
						TextSize: 24,
					}),
					CloseButton: New("ImageButton")({
						Name: "CloseButton",
						Size: new UDim2(0, 35, 0, 35),
						Position: UDim2.fromScale(1, 0),
						AnchorPoint: new Vector2(0.5, 0.5),
						BackgroundTransparency: 1,
						Image: ControlButtonIcon["Close"],
						ImageColor3: new Color3(1, 0, 0),
						[OnEvent("Activated")]: () => {
							isVisible.set(false); // Hide the container when close button is clicked
						},
					}),
				},
			})
		: undefined;

	// BackgroundImage is created with a default texture if not provided
	const backgroundImage = New("ImageLabel")({
		Name: "BackgroundImage",
		Size: new UDim2(1, 0, 1, 0),
		BackgroundTransparency: 1,
		Image: props.BackgroundImage ?? TextureImage["BoneDoily"], // Default texture
		ImageColor3: new Color3(1, 1, 1),
		ImageTransparency: 0.2,
	});

	// Content frame that holds the children of the container
	const content = New("Frame")({
		Name: "Content",
		Size: TitleBar ? new UDim2(1, 0, 1, -TitleBar.Size.Y.Offset) : new UDim2(1, 0, 1, 0), // Adjust size if TitleBar is present
		Position: TitleBar ? new UDim2(0, 0, 0, TitleBar.Size.Y.Offset) : new UDim2(0, 0, 0, 0),
		BackgroundTransparency: 1,
		ClipsDescendants: true, // Ensure content is clipped within the container
		[Children]: {
			Layout: props.Layout ? props.Layout : undefined,
			Instances: props.Children ? props.Children : {},
		},
	});

	// Create the main container frame with optional properties
	const component = New("Frame")({
		Name: props.Name ?? "ContainerBase",
		Size: props.Size ?? new UDim2(1, 0, 1, 0),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0, 0),
		BackgroundTransparency: 1,
		ZIndex: props.ZIndex ?? 1,
		Visible: isVisible,
		ClipsDescendants: props.ClipsDescendants ?? false,
		[Children]: {
			Corner: CornerToken(4), // Apply corner radius
			Content: content,
			TitleBar: TitleBar,
			BackgroundImage: backgroundImage,
		},
	});

	return component;
};
