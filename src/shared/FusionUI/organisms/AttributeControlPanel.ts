/**
 *
 */

import { Children, New } from "@rbxts/fusion";
import { ATTR_KEYS } from "shared/data/keys";
import { PlayerAttributes } from "../states";
import { AttributeControl } from "./AttributeControl";
import { LayoutTokens } from "../theme";

export interface AttributeControlPanelProps {
	attributes: typeof ATTR_KEYS;
}

export function AttributeControlPanel(props: AttributeControlPanelProps) {
	const { attributes } = props;

	const component = New("Frame")({
		Name: "AttributeControlPanel",
		Size: new UDim2(0, 255, 0, 250),
		BackgroundColor3: Color3.fromRGB(224, 10, 10),
		BackgroundTransparency: 0.9,
		ClipsDescendants: true,
		AnchorPoint: new Vector2(0.5, 0),
		Position: new UDim2(0.5, 0, 0, 0),
		ZIndex: 2,
		[Children]: {
			Layout: LayoutTokens.Vertical(),
			Attributes: attributes.map((attr) => {
				return AttributeControl({
					gameKey: attr,
					state: PlayerAttributes[attr],
				});
			}),
		},
	});
	return component;
}
