import Fusion, { Value, New, Children } from "@rbxts/fusion";
import { AttributeMeta, AttributeKey } from "shared/data/keys";
import { AttributeIcon, GameLabel, ValueLabel } from "shared/FusionUI/atoms";
import { Stepper } from "shared/FusionUI/molecules/controls/Stepper";
import { CornerToken, GradientTokens, HighlightStrokeToken, LayoutTokens, StrokeToken } from "../../theme";

interface AttributeControlProps {
	gameKey: AttributeKey;
	state: Fusion.Value<number>;
	readOnly?: boolean;
	LayoutOrder?: number;
	ZIndex?: number;
}

export const AttributeControlSize = Fusion.Value(new UDim2(1, 0, 0, 50));

interface GameLabelProps {
	text: string;
}

export const GameLabelComponent = (props: GameLabelProps) => {
	return New("TextLabel")({
		Text: props.text,
		Font: Enum.Font.GothamBold,
		TextSize: 16,
		TextColor3: Color3.fromRGB(255, 255, 255),
		TextXAlignment: Enum.TextXAlignment.Center,
		TextYAlignment: Enum.TextYAlignment.Center,
		BackgroundTransparency: 1,
		[Children]: {
			Flex: New("UIFlexItem")({
				FlexMode: Enum.UIFlexMode.Grow,
				ItemLineAlignment: Enum.ItemLineAlignment.Stretch,
			}),
		},
	});
};

export const AttributeControl = (p: AttributeControlProps) => {
	const meta = AttributeMeta[p.gameKey];
	return New("Frame")({
		Size: AttributeControlSize,
		Name: `AttributeControl_${p.gameKey}`,
		BackgroundTransparency: 0,
		LayoutOrder: p.LayoutOrder ?? 0,
		ZIndex: p.ZIndex ?? 1,
		[Children]: {
			Corner: CornerToken(4),
			Stroke: HighlightStrokeToken(2),
			Gradient: GradientTokens.AttributeControl(),
			Layout: LayoutTokens.Horizontal(),
			Padding: New("UIPadding")({
				PaddingLeft: new UDim(0, 5),
				PaddingRight: new UDim(0, 5),
				PaddingTop: new UDim(0, 5),
				PaddingBottom: new UDim(0, 5),
			}),
			Icon: AttributeIcon({ AssetId: meta.iconId, LayoutOrder: 0, ZIndex: 1 }),
			DisplayName: GameLabelComponent({
				text: meta.displayName,
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
