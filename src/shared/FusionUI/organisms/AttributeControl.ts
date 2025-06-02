import { Value, New, Children } from "@rbxts/fusion";
import { AttributeIcon, ValueLabel } from "shared/FusionUI/atoms";
import { Stepper } from "shared/FusionUI/molecules/controls/Stepper";
// organisms/AttributeControl.ts
interface AttributeControlProps {
	iconId: string;
	state: Value<number>;
	min?: number;
	max?: number;
	readOnly?: boolean;
}

export const AttributeControl = (p: AttributeControlProps) =>
	New("Frame")({
		Size: UDim2.fromOffset(240, 48),
		BackgroundTransparency: 1,
		[Children]: {
			Layout: New("UIListLayout")({
				FillDirection: Enum.FillDirection.Horizontal,
				VerticalAlignment: Enum.VerticalAlignment.Center,
				Padding: new UDim(0, 8),
			}),
			Icon: AttributeIcon({ AssetId: p.iconId }),
			Stepper: Stepper({
				state: p.state,
				min: p.min,
				max: p.max,
				disabled: p.readOnly,
			}),
			Value: ValueLabel({ Value: p.state }),
		},
	});
