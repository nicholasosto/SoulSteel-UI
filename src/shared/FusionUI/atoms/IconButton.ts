import { PlaySound } from "shared/Utility";
import { BasicButton } from "shared/FusionUI/atoms/BasicButton";

export interface IconButtonProps {
	Name: string;
	Icon: string;
	OnClick: () => void;
	Size?: UDim2;
	AnchorPoint?: Vector2;
	Position?: UDim2;
}

/** ImageButton with a click sound. */
export const IconButton = (props: IconButtonProps) => {
	const { Instance } = BasicButton({
		Name: props.Name,
		Image: props.Icon,
		Size: props.Size ?? new UDim2(0, 40, 0, 40),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		Position: props.Position ?? new UDim2(0.5, 0, 0.5, 0),
	});

	Instance.Activated.Connect(() => {
		PlaySound.Click();
		props.OnClick();
	});

	return Instance;
};
