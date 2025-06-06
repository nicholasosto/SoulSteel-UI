import Fusion, { OnChange, OnEvent } from "@rbxts/fusion";

const { New, Children } = Fusion;

export interface InputProps {
	value: Fusion.Value<string>;
	placeholder?: string;
	onChanged?: (newValue: string) => void;
	onFocus?: () => void;
}

export const InputAtom = (props: InputProps) => {
	return New("TextBox")({
		Text: props.value,
		PlaceholderText: props.placeholder ?? "",
		Font: Enum.Font.Gotham,
		Size: UDim2.fromOffset(90, 30), // Adjusted size for better visibility
		Position: UDim2.fromScale(0.5, 0.5), // Centered position
		AnchorPoint: new Vector2(0.5, 0.5), // Centered anchor point
		TextSize: 14,
		TextColor3: Color3.fromRGB(255, 255, 255),
		[OnChange("Text")]: (newValue: string) => {
			props.value.set(newValue);
			print(`Input changed: ${newValue}`); // Debug log
			if (props.onChanged) {
				props.onChanged(newValue);
			}
		},
	});
};
