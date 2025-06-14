/// <reference types="@rbxts/types" />

/**
 * @file        Panel.ts
 * @module      Panel
 * @layer       Molecule
 * @description Basic panel container with a title bar and close button.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-06-02 by Codex – Added documentation header
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion, { Children, Computed, New } from "@rbxts/fusion";
import { CornerToken } from "../theme";
import { IconButton } from "../atoms";
import { ControlButtonIcon } from "shared/assets/images/buttons";

const { Value } = Fusion;

export interface PanelProps {
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	Title?: string;
	OnClose?: () => void;
	[Children]?: Fusion.ChildrenValue;
}

/** Basic panel with title bar and close button. */
export const Panel = (props: PanelProps) => {
	const isOpen = Value(true);

	return New("Frame")({
		Name: props.Name ?? "Panel",
		Size: props.Size ?? new UDim2(0, 300, 0, 200),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundColor3: new Color3(0.15, 0.15, 0.15),
		[Children]: {
			DragDetector: New("UIDragDetector")({
				Enabled: true,
				Name: "DragDetector",
			}),
			Corner: CornerToken(6),
			TitleBar: New("TextLabel")({
				Name: "TitleBar",
				Size: new UDim2(1, 0, 0, 30),
				BackgroundTransparency: 1,
				Text: props.Title ?? "Panel",
				TextSize: 18,
				TextColor3: new Color3(1, 1, 1),
			}),
			Close: IconButton({
				Name: "Close",
				Icon: ControlButtonIcon.Close,
				OnClick: () => {
					isOpen.set(false);
					props.OnClose?.();
				},
				Position: new UDim2(1, 0, 0, 0),
				Size: new UDim2(0, 50, 0, 50),
				AnchorPoint: new Vector2(0.5, 0.5),
			}),
			Content: New("Frame")({
				Name: "Content",
				Size: new UDim2(1, 0, 1, -30),
				Position: new UDim2(0, 0, 0, 30),
				BackgroundTransparency: 1,
				[Children]: props[Children] ?? [],
			}),
		},
		Visible: Computed(() => isOpen.get()),
	});
};
