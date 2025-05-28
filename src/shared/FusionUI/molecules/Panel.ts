import Fusion, { Children, Computed, New } from "@rbxts/fusion";
import { CornerToken } from "../../theme";
import { IconButton } from "../atoms";

const { Value } = Fusion;

export interface PanelProps {
	Name?: string;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	Title?: string;
	OnClose?: () => void;
	Children?: Instance[] | Instance;
}

/** Basic panel with title bar and close button. */
export const Panel = (props: PanelProps) => {
	const isOpen = Value(true);

	return New("Frame")({
		Name: props.Name ?? "Panel",
		Size: props.Size ?? new UDim2(0, 300, 0, 200),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundColor3: new Color3(0.15, 0.15, 0.15),
		[Children]: {
			Corner: CornerToken(6),
			TitleBar: New("TextLabel")({
				Name: "TitleBar",
				Size: new UDim2(1, 0, 0, 30),
				BackgroundTransparency: 1,
				Text: props.Title ?? "Panel",
				TextSize: 18,
				TextColor3: new Color3(1, 1, 1),
			}),
			Close: IconButton({
				Name: "Close",
				Icon: "rbxassetid://0",
				OnClick: () => {
					isOpen.set(false);
					props.OnClose?.();
				},
				Position: new UDim2(1, -15, 0, 15),
				AnchorPoint: new Vector2(1, 0),
			}),
			Content: New("Frame")({
				Name: "Content",
				Size: new UDim2(1, 0, 1, -30),
				Position: new UDim2(0, 0, 0, 30),
				BackgroundTransparency: 1,
				[Children]: props.Children,
			}),
		},
		Visible: Computed(() => isOpen.get()),
	});
};
