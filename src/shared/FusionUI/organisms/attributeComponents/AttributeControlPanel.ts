/**
 * AttributeControlPanel.ts
 * @file        AttributeControlPanel.ts
 * @module      AttributeControlPanel
 * @layer       Organism
 * @description Displays a panel of attribute controls for the player.
 */

/* Imports */
import { ATTR_KEYS } from "shared/data/keys";
import { PlayerAttributes } from "../../states";
import { AttributeControl } from "./AttributeControl";
import { LayoutTokens } from "../../theme";
import { ContentContainer } from "shared/FusionUI/atoms/containers/ContentContainer";

/* Interface */
export interface AttributeControlPanelProps {
	attributes: typeof ATTR_KEYS;
}

/* Component */
export function AttributeControlPanel(props: AttributeControlPanelProps) {
	const { attributes } = props;

	/* Create Attribute Controls */
	const AttributeControls = attributes.map((attr) => {
		return AttributeControl({
			gameKey: attr,
			state: PlayerAttributes[attr],
			LayoutOrder: attributes.indexOf(attr),
			ZIndex: 2,
		});
	});

	/* Create the content container */
	const contentContainer = ContentContainer({
		ContentChildren: AttributeControls,
		ContentLayout: LayoutTokens.Vertical(4),
		Name: "AttributeControlPanel",
		Size: new UDim2(0, 260, 0, 260),
		Position: new UDim2(0.5, 0, 0.5, 0),
		AnchorPoint: new Vector2(0.5, 0.5),
		ZIndex: 111,
	});

	return contentContainer;
}
