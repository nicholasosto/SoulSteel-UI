/// <reference types="@rbxts/types" />

/**
 * @file        Stepper.ts
 * @module      Stepper
 * @layer       Molecule
 * @description Small control with up/down buttons for numeric adjustments.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-06-02 by Codex – Added documentation header
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import { New, Value, Children } from "@rbxts/fusion";
import { StepButton } from "shared/FusionUI/atoms";

interface StepperProps {
	state: Value<number>; // Fusion state slice for this attribute
	stepSize?: number;
	min?: number;
	max?: number;
	disabled?: boolean;
}

export const Stepper = (p: StepperProps) => {
	const step = p.stepSize ?? 1;
	return New("Frame")({
		BackgroundTransparency: 1,
		Size: UDim2.fromOffset(24, 48),
		[Children]: [
			StepButton({
				direction: "up",
				disabled: p.disabled || (p.max !== undefined && p.state.get() >= p.max),
				onClick: () => p.state.set(p.state.get() + step),
			}),
			StepButton({
				direction: "down",
				disabled: p.disabled || (p.min !== undefined && p.state.get() <= p.min),
				onClick: () => p.state.set(p.state.get() - step),
			}),
		] as unknown as Record<string, Instance>,
	});
};
