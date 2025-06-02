//#CODEX: please Add header and comments
import { PlayerAttributes } from "shared/FusionUI/states";
import { AttributeControl } from "../AttributeControl";
import { New, Value, Children } from "@rbxts/fusion";
import { AttributeAssetId } from "shared/assets/images/attribute";
import { LayoutTokens } from "shared/FusionUI/theme";

const StrengthControl = AttributeControl({
	iconId: AttributeAssetId["Strength"],
	state: PlayerAttributes.Attributes["Strength"],
});

const DexterityControl = AttributeControl({
	iconId: AttributeAssetId["Dexterity"],
	state: PlayerAttributes.Attributes["Dexterity"],
});

const IntelligenceControl = AttributeControl({
	iconId: AttributeAssetId["Intelligence"],
	state: PlayerAttributes.Attributes["Intelligence"],
});

const VitalityControl = AttributeControl({
	iconId: AttributeAssetId["Vitality"],
	state: PlayerAttributes.Attributes["Vitality"],
});

const LuckControl = AttributeControl({
	iconId: AttributeAssetId["Luck"],
	state: PlayerAttributes.Attributes["Luck"],
});

export const AttributeControls = () => {
	return New("Frame")({
		Name: "AttributeControls",
		BackgroundTransparency: 1,
		Size: new UDim2(0, 200, 0, 100),
		[Children]: [
			LayoutTokens.Vertical(2),
			StrengthControl,
			DexterityControl,
			IntelligenceControl,
			VitalityControl,
			LuckControl,
		] as unknown as Record<string, Instance>,
	});
};
