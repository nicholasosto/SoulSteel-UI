import Fusion, { Value, New, Children } from "@rbxts/fusion";
import { AttributeMeta, AttributeKey } from "shared/data/keys";
import { AttributeIcon, ValueLabel } from "shared/FusionUI/atoms";
import { Stepper } from "shared/FusionUI/molecules/controls/Stepper";
import { LayoutTokens } from "../theme";
// organisms/AttributeControl.ts

interface AttributeControlProps {
	gameKey: AttributeKey;
	state: Fusion.Value<number>;
	readOnly?: boolean;
	LayoutOrder?: number;
	ZIndex?: number;
}

export const AttributeControl = (p: AttributeControlProps) => {
	const meta = AttributeMeta[p.gameKey];
	return New("Frame")({
		Size: UDim2.fromOffset(220, 32),
		BackgroundTransparency: 1,
		LayoutOrder: p.LayoutOrder ?? 0,
		ZIndex: p.ZIndex ?? 1,
		[Children]: {
			Layout: LayoutTokens.Horizontal(),
			Icon: AttributeIcon({ AssetId: meta.iconId, LayoutOrder: 0, ZIndex: 1 }),
			DisplayName: New("TextLabel")({
				Text: meta.displayName,
				Font: Enum.Font.LuckiestGuy,
				Size: new UDim2(0, 100, 1, 0),
				TextColor3: Color3.fromRGB(255, 255, 255),
				TextSize: 14,
				TextXAlignment: Enum.TextXAlignment.Center,
				TextYAlignment: Enum.TextYAlignment.Center,
				BackgroundTransparency: 1,
				LayoutOrder: 1,
			}),
			Stepper: Stepper({
				state: p.state,
				min: meta.min,
				max: meta.max,
				disabled: p.readOnly,
				LayoutOrder: 2,
			}),
		},
	});
};
