import Fusion, { Value, Computed, Observer, Children } from "@rbxts/fusion";
import Maid from "@rbxts/maid";
import { CornerToken } from "shared/FusionUI/theme";
const { New, OnEvent } = Fusion;

interface HoldButtonProps {
	/** Seconds required to activate */
	holdDuration?: number;
	/** Fires after successful hold */
	onHoldComplete: () => void;
	/** Visible label on the button */
	text?: string;
	/** Optional children (icons, etc.) */
	Children?: Fusion.ChildrenValue;
}

export const HoldButton = (props: HoldButtonProps) => {
	// props with sensible defaults
	const holdDuration = props.holdDuration ?? 1;
	const maid = new Maid();

	// reactive state
	const isHolding = Value(false);
	const progress = Value(0);

	/** Starts heartbeat-based progress updates */
	const beginHold = () => {
		if (isHolding.get()) return; // already holding

		const startTime = os.clock();
		isHolding.set(true);

		maid.GiveTask(
			game.GetService("RunService").Heartbeat.Connect(() => {
				const pct = math.clamp((os.clock() - startTime) / holdDuration, 0, 1);
				progress.set(pct);

				if (pct >= 1) {
					props.onHoldComplete();
					cancelHold(); // done—reset
				}
			}),
		);
	};

	/** Cancels & cleans up */
	const cancelHold = () => {
		isHolding.set(false);
		progress.set(0);
		maid.DoCleaning(); // clears heartbeat connection
	};

	// Styled fill bar (horizontal example)
	const ProgressFill = New("Frame")({
		BackgroundColor3: Color3.fromRGB(255, 255, 255),
		BackgroundTransparency: 0.1,
		Size: Computed(() => new UDim2(progress.get(), 0, 1, 0)),
	});

	return New("TextButton")({
		Size: UDim2.fromOffset(160, 48),
		BackgroundColor3: Color3.fromRGB(30, 30, 30),
		TextColor3: Color3.fromRGB(220, 220, 220),
		Font: Enum.Font.GothamBold,
		TextSize: 14,
		Text: props.text ?? "Hold",
		AutomaticSize: Enum.AutomaticSize.XY,

		// Begin / Cancel handlers
		[OnEvent("MouseButton1Down")]: beginHold,
		[OnEvent("MouseButton1Up")]: cancelHold,
		[OnEvent("MouseLeave")]: cancelHold,

		[Children]: {
			Corner: CornerToken(4),
			Fillbar: ProgressFill,
			...props.Children, // allow custom children like icons
		},
	});
};
