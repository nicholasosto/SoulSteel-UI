/** Stub for CharacterCard component
 *  This component is responsible for displaying the player's character information, such as health, level, and other stats.
 *  It will be used in the PlayerHUD to provide a visual representation of the player's character.
 *  Currently, it is a placeholder and will be expanded in the future.
 */

import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import * as Molecules from "shared/FusionUI/molecules";

const { New, Children } = Fusion;

export const CharacterCard = () => {
	const Container = Atoms.BaseFrame({
		Size: UDim2.fromOffset(300, 200),
		Position: new UDim2(0, 0, 0, 0),
	});

	return Container;
};
