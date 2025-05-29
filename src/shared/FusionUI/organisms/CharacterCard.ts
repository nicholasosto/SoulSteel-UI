/**
 *
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
