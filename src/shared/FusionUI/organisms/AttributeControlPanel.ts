/**
 *
 */

import { Children, New } from "@rbxts/fusion";
import { ATTR_KEYS } from "shared/data/keys";

export interface AttributeControlPanelProps {
	attributes: typeof ATTR_KEYS;
}

export function AttributeControlPanel(props: AttributeControlPanelProps) {
	const { attributes } = props;

	const component = New("Frame")({
		Name: "AttributeControlPanel",
		Size: new UDim2(1, 0, 0, 50),
		BackgroundColor3: Color3.fromRGB(255, 255, 255),
		BackgroundTransparency: 0.5,
		ClipsDescendants: true,
		AnchorPoint: new Vector2(0.5, 0),
		Position: new UDim2(0.5, 0, 0, 0),
		ZIndex: 2,
		[Children]: attributes.map((attr) => {
			return New("TextButton")({
				Name: `AttributeButton_${attr}`,
				Size: new UDim2(0, 100, 1, 0),
				BackgroundColor3: Color3.fromRGB(200, 200, 200),
				Text: attr,
				TextColor3: Color3.fromRGB(0, 0, 0),
				TextSize: 14,
				TextWrapped: true,
				[Children]: [
					New("UICorner")({
						CornerRadius: new UDim(0, 5),
					}),
				],
			});
		}),
	});
}
